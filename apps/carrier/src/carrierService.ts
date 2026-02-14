import {
  db,
  auth,
  realtimeDb
} from '@config'
import {
  collection, 
  query, 
  where, 
  getDocs, 
  doc, 
  updateDoc, 
  Timestamp, 
  orderBy,
  onSnapshot,
  limit,
  getDoc // added
} from 'firebase/firestore'
import { ref as rtdbRef, set as rtdbSet, onDisconnect, get as rtdbGet } from 'firebase/database' // added rtdbGet
import { CarrierProfile, Delivery, LocationUpdate } from './types'

// Minimum distance to trigger an update (in meters)
const MIN_DISTANCE_THRESHOLD = 10
// Minimum time to force an update (in milliseconds)
const MIN_TIME_THRESHOLD_MS = 30 * 1000 // 30 seconds
// Maximum acceptable accuracy (meters) - reject positions worse than this
// Note: Positions with accuracy > 1km are unreliable (cached WiFi fallbacks, etc)
// Only use positions with sub-1km accuracy to avoid oscillating between fallback & real GPS
const MAX_ACCEPTABLE_ACCURACY = 1000 // 1km - filter out WiFi fallback noise
// Maximum jump distance to trust (kilometers) - reject impossible jumps
const MAX_JUMP_DISTANCE_KM = 10 // Increased to 10km to handle initial WiFi jumps

// Calculate distance between two coordinates (in meters)
const calculateDistance = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number => {
  const R = 6371000 // Earth's radius in meters
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLng = (lng2 - lng1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

// Validate position: check accuracy and detect impossible jumps
const isValidPosition = (
  position: { lat: number; lng: number; accuracy?: number },
  lastPosition: { lat: number; lng: number } | null
): boolean => {
  // Reject positions with missing accuracy
  if (position.accuracy === undefined) {
    console.warn(`❌ Position rejected: accuracy is undefined`)
    return false
  }
  // Reject positions with poor accuracy
  if (position.accuracy > MAX_ACCEPTABLE_ACCURACY) {
    console.warn(`❌ Position rejected: accuracy too poor (${position.accuracy.toFixed(0)}m > ${MAX_ACCEPTABLE_ACCURACY}m)`)
    return false
  }

  // Reject positions with invalid coordinates
  if (Math.abs(position.lat) > 90 || Math.abs(position.lng) > 180) {
    console.warn(`❌ Position rejected: invalid coordinates (${position.lat}, ${position.lng})`)
    return false
  }

  // Check for impossible jumps (faster than sound, basically)
  if (lastPosition) {
    const distanceKm = calculateDistance(lastPosition.lat, lastPosition.lng, position.lat, position.lng) / 1000
    if (distanceKm > MAX_JUMP_DISTANCE_KM) {
      console.warn(`❌ Position rejected: impossible jump of ${distanceKm.toFixed(1)}km`)
      return false
    }
  }

  return true
}

// NEW: Lesotho timezone helper (SAST = UTC+2, South Africa Standard Time)
const getLesothoTimestamp = (): { iso: string; ms: number } => {
  const now = new Date()
  // Convert to Lesotho time (SAST = UTC+2)
  const lesothoTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Johannesburg' }))
  return {
    iso: lesothoTime.toISOString(),
    ms: lesothoTime.getTime()
  }
}

export class CarrierService {
  // Track last Firestore write time for rate limiting
  private static lastFirestoreWrite: { [userId: string]: number } = {}
  private static lastDeliveryFirestoreWrite: { [deliveryId: string]: number } = {}
  
  // GPS tracking state (persists across component unmounts)
  private static gpsWatchId: number | null = null
  private static lastSavedLocation: { lat: number; lng: number } | null = null
  private static lastSavedTime: number | null = null
  private static offlineTimeoutId: NodeJS.Timeout | null = null
  private static locationUpdateCallbacks: Set<(location: LocationUpdate | null) => void> = new Set()
  private static OFFLINE_TIMEOUT_MS = 15 * 60 * 1000 // 15 minutes

  static async getCarrierProfile(): Promise<CarrierProfile | null> {
    try {
      const user = auth.currentUser
      if (!user) return null

      const carrierDocs = await getDocs(query(
        collection(db, 'users'), 
        where('__name__', '==', user.uid)
      ))
      
      if (!carrierDocs.empty) {
        const data = carrierDocs.docs[0].data()
        return {
          id: carrierDocs.docs[0].id,
          ...data
        } as CarrierProfile
      }
      return null
    } catch (error) {
      console.error('Error fetching carrier profile:', error)
      return null
    }
  }

  static async updateCarrierStatus(status: 'active' | 'inactive' | 'busy', activeDeliveryId?: string): Promise<boolean> {
    try {
      const user = auth.currentUser
      if (!user) return false

      // Validate state transitions
      if (status === 'inactive' && activeDeliveryId) {
        // Cannot go inactive while on a delivery
        console.error('Cannot change status to inactive while on delivery')
        return false
      }

      await updateDoc(doc(db, 'users', user.uid), {
        status,
        updatedAt: Timestamp.now(),
        lastActive: Timestamp.now()
      })
      return true
    } catch (error) {
      console.error('Error updating carrier status:', error)
      return false
    }
  }

  static async updateLocation(lat: number, lng: number): Promise<boolean> {
    try {
      const user = auth.currentUser
      if (!user) {
        console.warn('updateLocation: no authenticated user (auth.currentUser is null)')
        return false
      }

      const now = Date.now()
      const userId = user.uid
      const FIRESTORE_UPDATE_INTERVAL = 10 * 60 * 1000 // 10 minutes in milliseconds

      // Decide whether to update Firestore immediately:
      // - If we've never written before, write now
      // - If we don't have a lastSavedLocation, write now
      // - If distance from lastSavedLocation > 200m, write now (significant move)
      // - Otherwise, fall back to interval-based writes (every 10 minutes)
      let shouldUpdateFirestore = false
      if (!this.lastFirestoreWrite[userId]) {
        shouldUpdateFirestore = true
      } else if (!this.lastSavedLocation) {
        shouldUpdateFirestore = true
      } else {
        const distSinceLastSaved = calculateDistance(this.lastSavedLocation.lat, this.lastSavedLocation.lng, lat, lng)
        if (distSinceLastSaved > 200) {
          shouldUpdateFirestore = true
          console.log(`🔁 Significant move detected: ${distSinceLastSaved.toFixed(0)}m — forcing Firestore update`)
        }
      }

      if (!shouldUpdateFirestore) {
        shouldUpdateFirestore = !this.lastFirestoreWrite[userId] || (now - this.lastFirestoreWrite[userId]) >= FIRESTORE_UPDATE_INTERVAL
      }

      if (shouldUpdateFirestore) {
        // NEW: Use Lesotho timezone for both Firestore and RTDB
        const ts = Timestamp.now()
        const { iso: lesothoISO } = getLesothoTimestamp()

        await updateDoc(doc(db, 'users', user.uid), {
          currentLocation: {
            lat,
            lng,
            timestamp: ts,
            timestampISO: lesothoISO, // Lesotho time in ISO format
            timestampMs: Date.now(),
            timezone: 'SAST' // South Africa Standard Time (Lesotho timezone)
          },
          lastActive: Timestamp.now(),
          lastActiveISO: lesothoISO
        })
        this.lastFirestoreWrite[userId] = now
        console.log('📝 Firestore location updated (Lesotho time)')
      }

      // Always write to Realtime Database for low-latency realtime tracking
      try {
        const { iso: lesothoISO, ms: lesothoMs } = getLesothoTimestamp()
        const trackRef = rtdbRef(realtimeDb, `tracks/${user.uid}`)
        await rtdbSet(trackRef, {
          lat,
          lng,
          timestamp: Date.now(), // UTC ms for sorting
          timestampISO: lesothoISO, // Lesotho time readable format
          timestampMs: lesothoMs, // Lesotho time in ms
          timezone: 'SAST',
          status: 'active'
        })
        console.log('✅ RTDB location updated (Lesotho):', { lat, lng, lesothoTime: lesothoISO })
        // Ensure entry is removed on disconnect
        try {
          onDisconnect(trackRef).remove()
        } catch (e) {
          // onDisconnect may throw in some environments; ignore silently
        }
      } catch (e) {
        console.error('❌ RTDB write failed for carrier track:', e)
      }
      return true
    } catch (error) {
      console.error('Error updating location:', error)
      return false
    }
  }

  static async getActiveDelivery(): Promise<Delivery | null> {
    try {
      const user = auth.currentUser
      if (!user) return null

      const q = query(
        collection(db, 'deliveries'),
        where('carrierId', '==', user.uid),
        where('status', 'in', ['assigned', 'picked_up', 'in_transit', 'out_for_delivery']),
        orderBy('assignedAt', 'desc')
      )

      const snapshot = await getDocs(q)
      if (!snapshot.empty) {
        const data = snapshot.docs[0].data()
        return {
          id: snapshot.docs[0].id,
          ...data
        } as Delivery
      }
      return null
    } catch (error) {
      console.error('Error fetching active delivery:', error)
      return null
    }
  }

  static async getDeliveries(maxResults: number = 10): Promise<Delivery[]> {
    try {
      const user = auth.currentUser
      if (!user) return []

      const q = query(
        collection(db, 'deliveries'),
        where('carrierId', '==', user.uid),
        orderBy('createdAt', 'desc'),
        limit(maxResults)
      )

      const snapshot = await getDocs(q)
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Delivery))
    } catch (error) {
      console.error('Error fetching deliveries:', error)
      return []
    }
  }

  static async updateDeliveryStatus(
    deliveryId: string, 
    status: Delivery['status'], 
    otpCode?: string
  ): Promise<boolean> {
    try {
      const updates: any = {
        status,
        updatedAt: Timestamp.now()
      }

      if (status === 'picked_up') {
        updates.pickupTime = Timestamp.now()
        updates.otpCode = otpCode || Math.floor(1000 + Math.random() * 9000).toString()
      }

      if (status === 'delivered') {
        updates.deliveryTime = Timestamp.now()
      }

      await updateDoc(doc(db, 'deliveries', deliveryId), updates)
      return true
    } catch (error) {
      console.error('Error updating delivery:', error)
      return false
    }
  }

  static async verifyOTP(deliveryId: string, otpCode: string): Promise<boolean> {
    try {
      const deliveryRef = doc(db, 'deliveries', deliveryId)
      const deliveryDoc = await getDocs(query(
        collection(db, 'deliveries'), 
        where('__name__', '==', deliveryId)
      ))
      
      if (!deliveryDoc.empty) {
        const data = deliveryDoc.docs[0].data()
        if (data.otpCode === otpCode) {
          await updateDoc(deliveryRef, {
            status: 'delivered',
            otpVerified: true,
            deliveryTime: Timestamp.now(),
            updatedAt: Timestamp.now()
          })
          return true
        }
      }
      return false
    } catch (error) {
      console.error('Error verifying OTP:', error)
      return false
    }
  }

  static async updateDeliveryLocation(
    deliveryId: string, 
    lat: number, 
    lng: number
  ): Promise<boolean> {
    try {
      const now = Date.now()
      const FIRESTORE_UPDATE_INTERVAL = 10 * 60 * 1000 // 10 minutes in milliseconds

      // Update Firestore only every 10 minutes for cost optimization
      const shouldUpdateFirestore = !this.lastDeliveryFirestoreWrite[deliveryId] ||
        (now - this.lastDeliveryFirestoreWrite[deliveryId]) >= FIRESTORE_UPDATE_INTERVAL

      if (shouldUpdateFirestore) {
        const ts = Timestamp.now()
        const { iso: lesothoISO } = getLesothoTimestamp()

        await updateDoc(doc(db, 'deliveries', deliveryId), {
          currentLocation: {
            lat,
            lng,
            timestamp: ts,
            timestampISO: lesothoISO, // Lesotho time
            timestampMs: Date.now(),
            timezone: 'SAST'
          }
        })
        this.lastDeliveryFirestoreWrite[deliveryId] = now
        console.log(`📝 Delivery ${deliveryId} Firestore location updated (Lesotho time)`)
      }

      // Always write to Realtime Database for low-latency realtime tracking of deliveries
      try {
        const { iso: lesothoISO, ms: lesothoMs } = getLesothoTimestamp()
        const dRef = rtdbRef(realtimeDb, `deliveryTracks/${deliveryId}`)
        await rtdbSet(dRef, {
          lat,
          lng,
          timestamp: Date.now(),
          timestampISO: lesothoISO, // Lesotho time
          timestampMs: lesothoMs,
          timezone: 'SAST'
        })
        try {
          onDisconnect(dRef).remove()
        } catch (e) {}
      } catch (e) {
        console.warn('RTDB write failed for delivery track:', e)
      }
      return true
    } catch (error) {
      console.error('Error updating delivery location:', error)
      return false
    }
  }

  static subscribeToActiveDelivery(
    callback: (delivery: Delivery | null) => void
  ): () => void {
    const user = auth.currentUser
    if (!user) return () => {}

    const q = query(
      collection(db, 'deliveries'),
      where('carrierId', '==', user.uid),
      where('status', 'in', ['assigned', 'picked_up', 'in_transit', 'out_for_delivery'])
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const data = snapshot.docs[0].data()
        callback({
          id: snapshot.docs[0].id,
          ...data
        } as Delivery)
      } else {
        callback(null)
      }
    })

    return unsubscribe
  }

  static async getAvailableTasks(): Promise<Delivery[]> {
    try {
      const user = auth.currentUser
      if (!user) return []

      const q = query(
        collection(db, 'deliveries'),
        where('status', '==', 'pending'),
        where('carrierId', '==', null),
        orderBy('createdAt', 'desc')
      )

      const snapshot = await getDocs(q)
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Delivery))
    } catch (error) {
      console.error('Error fetching available tasks:', error)
      return []
    }
  }

  static subscribeToAvailableTasks(
    callback: (tasks: Delivery[]) => void
  ): () => void {
    const q = query(
      collection(db, 'deliveries'),
      where('status', '==', 'pending'),
      where('carrierId', '==', null),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Delivery))
      callback(tasks)
    })

    return unsubscribe
  }

  static async acceptTask(deliveryId: string): Promise<boolean> {
    try {
      const user = auth.currentUser
      if (!user) return false

      const deliveryRef = doc(db, 'deliveries', deliveryId)
      
      await updateDoc(deliveryRef, {
        carrierId: user.uid,
        carrierEmail: user.email,
        carrierName: user.displayName || '',
        carrierPhone: user.phoneNumber || '',
        status: 'accepted',
        assignedAt: Timestamp.now(),
        acceptedAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      })

      // Update carrier status to busy
      await updateDoc(doc(db, 'users', user.uid), {
        status: 'busy',
        updatedAt: Timestamp.now()
      })

      return true
    } catch (error) {
      console.error('Error accepting task:', error)
      return false
    }
  }

  // Get deliveries assigned to carrier that are pending acceptance
  static async getAssignedDeliveries(): Promise<Delivery[]> {
    try {
      const user = auth.currentUser
      if (!user) return []

      const q = query(
        collection(db, 'deliveries'),
        where('carrierId', '==', user.uid),
        where('status', '==', 'assigned'),
        orderBy('assignedAt', 'desc')
      )

      const snapshot = await getDocs(q)
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Delivery))
    } catch (error) {
      console.error('Error fetching assigned deliveries:', error)
      return []
    }
  }

  // Accept an assigned delivery (job acceptance)
  static async acceptAssignedDelivery(deliveryId: string, hasLocationSharing: boolean): Promise<boolean> {
    try {
      const user = auth.currentUser
      if (!user) return false

      // Validate location sharing is enabled
      if (!hasLocationSharing) {
        console.error('Location sharing required to accept delivery')
        return false
      }

      const deliveryRef = doc(db, 'deliveries', deliveryId)
      
      await updateDoc(deliveryRef, {
        status: 'accepted',
        acceptedAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      })

      return true
    } catch (error) {
      console.error('Error accepting assigned delivery:', error)
      return false
    }
  }

  // Decline an assigned delivery (revert to pending)
  static async declineAssignedDelivery(deliveryId: string): Promise<boolean> {
    try {
      const user = auth.currentUser
      if (!user) return false

      const deliveryRef = doc(db, 'deliveries', deliveryId)
      
      await updateDoc(deliveryRef, {
        status: 'pending',
        carrierId: null,
        carrierEmail: null,
        carrierName: null,
        carrierPhone: null,
        assignedAt: null,
        updatedAt: Timestamp.now()
      })

      return true
    } catch (error) {
      console.error('Error declining assigned delivery:', error)
      return false
    }
  }

  // Subscribe to assigned (status = 'assigned') deliveries
  static subscribeToAssignedDeliveries(
    callback: (deliveries: Delivery[]) => void
  ): () => void {
    const user = auth.currentUser
    if (!user) return () => {}

    const q = query(
      collection(db, 'deliveries'),
      where('carrierId', '==', user.uid),
      where('status', '==', 'assigned'),
      orderBy('assignedAt', 'desc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const deliveries = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Delivery))
      callback(deliveries)
    })

    return unsubscribe
  }

  static async updateShareLocation(shareLocation: boolean): Promise<boolean> {
    try {
      const user = auth.currentUser
      if (!user) return false

      await updateDoc(doc(db, 'users', user.uid), {
        shareLocation,
        updatedAt: Timestamp.now()
      })
      return true
    } catch (error) {
      console.error('Error updating share location:', error)
      return false
    }
  }

  // Subscribe to location updates across all components
  static subscribeToLocationUpdates(callback: (location: LocationUpdate | null) => void): () => void {
    this.locationUpdateCallbacks.add(callback)
    return () => {
      this.locationUpdateCallbacks.delete(callback)
    }
  }

  // Notify all listeners of location update
  private static notifyLocationUpdate(location: LocationUpdate | null) {
    this.locationUpdateCallbacks.forEach(callback => callback(location))
  }

  // Start GPS tracking (persists across component unmounts)
  static startLocationSharing(activeDeliveryId?: string): boolean {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported')
      return false
    }

    if (this.gpsWatchId !== null) {
      console.log('GPS tracking already active')
      return true
    }

    console.log('📍 Starting GPS tracking')

    // Immediate one-shot position read (first try high accuracy, then fallback to normal)
    const getPositionWithFallback = (highAccuracy: boolean = true) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const location: LocationUpdate = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            timestamp: new Date(),
            accuracy: position.coords.accuracy
          }
          
          if (!isValidPosition(location, this.lastSavedLocation)) {
            console.warn('Initial position failed validation, attempting fallback...')
            if (highAccuracy) {
              getPositionWithFallback(false)
            }
            return
          }
          
          console.log(`✅ Initial position (${highAccuracy ? 'high' : 'low'} accuracy): ${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}, accuracy: ${location.accuracy!.toFixed(0)}m`)
          this.notifyLocationUpdate(location)
          try {
            await this.updateLocation(location.lat, location.lng)
          } catch (err) {
            console.error('Immediate location update failed:', err)
          }
        },
        (err) => {
          if (highAccuracy && err.code === 3) { // TIMEOUT, try with low accuracy
            console.warn('High accuracy initial position timeout, trying with low accuracy...')
            getPositionWithFallback(false)
          } else {
            console.warn('getCurrentPosition failed:', err)
          }
        },
        { enableHighAccuracy: highAccuracy, timeout: highAccuracy ? 10000 : 10000, maximumAge: 0 }
      )
    }
    try {
      getPositionWithFallback()
    } catch (e) {
      console.warn('Immediate position request failed:', e)
    }

    // Start watching position
    this.gpsWatchId = navigator.geolocation.watchPosition(
      async (position) => {
        const location: LocationUpdate = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          timestamp: new Date(),
          accuracy: position.coords.accuracy
        }

        // Validate position before processing
        if (!isValidPosition(location, this.lastSavedLocation)) {
          return
        }

        console.log(`📍 New position: ${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}, accuracy: ${location.accuracy?.toFixed(0) ?? 'unknown'}m`)

        this.notifyLocationUpdate(location)

        // Check if we should update (distance or time threshold)
        let shouldUpdate = false
        const now = Date.now()

        if (!this.lastSavedLocation) {
          console.log(`✅ First position, saving immediately`)
          shouldUpdate = true
        } else {
          const distance = calculateDistance(
            this.lastSavedLocation.lat,
            this.lastSavedLocation.lng,
            location.lat,
            location.lng
          )

          console.log(`📏 Distance from last saved: ${distance.toFixed(0)}m (threshold: ${MIN_DISTANCE_THRESHOLD}m)`)

          // For poor accuracy (>1km), always update every 10 seconds to keep location fresh
          // For good accuracy (<100m), use normal 10m distance threshold
          const isLowAccuracy = location.accuracy && location.accuracy > 1000
          const distanceThreshold = isLowAccuracy ? 0 : MIN_DISTANCE_THRESHOLD
          const timeThreshold = isLowAccuracy ? 10000 : MIN_TIME_THRESHOLD_MS // 10s for low accuracy, 30s for good

          if (distance > distanceThreshold) {
            shouldUpdate = true
            console.log(`✅ Distance threshold exceeded`)
          }

          if (!shouldUpdate && this.lastSavedTime && now - this.lastSavedTime >= timeThreshold) {
            console.log(`⏱️ Time threshold reached (${(now - this.lastSavedTime) / 1000}s >= ${timeThreshold / 1000}s)`)
            shouldUpdate = true
          }
        }

        if (shouldUpdate) {
          console.log(`✅ Updating location: ${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}`)
          try {
            await this.updateLocation(location.lat, location.lng)
          } catch (err) {
            console.error('Failed to update location:', err)
          }

          if (activeDeliveryId) {
            try {
              await this.updateDeliveryLocation(activeDeliveryId, location.lat, location.lng)
            } catch (err) {
              console.error('Failed to update delivery location:', err)
            }
          }

          this.lastSavedLocation = { lat: location.lat, lng: location.lng }
          this.lastSavedTime = now
        } else {
          console.log(`⏭️ Skipping update (thresholds not met)`)
        }
      },
      (err) => {
        console.error('Geolocation error (high accuracy):', err)
        // If timeout, retry with lower accuracy instead of stopping
        if (err.code === 3) { // TIMEOUT
          console.warn('High accuracy timeout, retrying with lower accuracy...')
          if (this.gpsWatchId !== null) {
            navigator.geolocation.clearWatch(this.gpsWatchId)
            this.gpsWatchId = null
          }
          // Retry with low accuracy and longer timeout
          this.gpsWatchId = navigator.geolocation.watchPosition(
            async (position) => {
              const location: LocationUpdate = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                timestamp: new Date(),
                accuracy: position.coords.accuracy
              }
              
              // Validate position before processing
              if (!isValidPosition(location, this.lastSavedLocation)) {
                return
              }
              
              console.log(`📍 New position (low accuracy): ${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}, accuracy: ${location.accuracy?.toFixed(0) ?? 'unknown'}m`)
              this.notifyLocationUpdate(location)
              
              let shouldUpdate = false
              const now = Date.now()
              
              if (!this.lastSavedLocation) {
                console.log(`✅ First position, saving immediately`)
                shouldUpdate = true
              } else {
                const distance = calculateDistance(
                  this.lastSavedLocation.lat,
                  this.lastSavedLocation.lng,
                  location.lat,
                  location.lng
                )
                
                console.log(`📏 Distance from last saved: ${distance.toFixed(0)}m (threshold: ${MIN_DISTANCE_THRESHOLD}m)`)
                
                // Apply adaptive thresholds based on accuracy (same as high accuracy callback)
                const isLowAccuracy = location.accuracy && location.accuracy > 1000
                const distanceThreshold = isLowAccuracy ? 0 : MIN_DISTANCE_THRESHOLD
                const timeThreshold = isLowAccuracy ? 10000 : MIN_TIME_THRESHOLD_MS
                
                if (distance > distanceThreshold) {
                  shouldUpdate = true
                  console.log(`✅ Distance threshold exceeded`)
                }
                
                if (!shouldUpdate && this.lastSavedTime && now - this.lastSavedTime >= timeThreshold) {
                  console.log(`⏱️ Time threshold reached (${(now - this.lastSavedTime) / 1000}s >= ${timeThreshold / 1000}s)`)
                  shouldUpdate = true
                }
              }
              
              if (shouldUpdate) {
                console.log(`✅ Updating location: ${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}`)
                try {
                  await this.updateLocation(location.lat, location.lng)
                } catch (err) {
                  console.error('Failed to update location:', err)
                }
                if (activeDeliveryId) {
                  try {
                    await this.updateDeliveryLocation(activeDeliveryId, location.lat, location.lng)
                  } catch (err) {
                    console.error('Failed to update delivery location:', err)
                  }
                }
                this.lastSavedLocation = { lat: location.lat, lng: location.lng }
                this.lastSavedTime = now
              } else {
                console.log(`⏭️ Skipping update (thresholds not met)`)
              }
            },
            (err) => {
              console.error('Low accuracy geolocation also failed:', err)
              this.stopLocationSharing()
            },
            { enableHighAccuracy: false, timeout: 15000, maximumAge: 0 }
          )
        } else {
          // For other errors (permission denied, etc), stop
          this.stopLocationSharing()
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      }
    )

    // Clear any existing timeout
    if (this.offlineTimeoutId) {
      clearTimeout(this.offlineTimeoutId)
    }

    return true
  }

  // Stop GPS tracking and set 15-minute offline timeout
  static stopLocationSharing(): boolean {
    if (this.gpsWatchId !== null) {
      navigator.geolocation.clearWatch(this.gpsWatchId)
      this.gpsWatchId = null
      console.log('📍 Stopped GPS tracking')
    }

    // Persist last RTDB location into Firestore so coordinators see the final point
    (async () => {
      try {
        const user = auth.currentUser
        if (!user) return

        const trackRef = rtdbRef(realtimeDb, `tracks/${user.uid}`)
        const snap = await rtdbGet(trackRef)
        if (snap && snap.exists()) {
          const val: any = snap.val()
          const timestampMs = val.timestampMs || val.timestamp || Date.now()
          const iso = val.timestampISO || new Date(timestampMs).toISOString()

          try {
            // Persist final point into Firestore
            await updateDoc(doc(db, 'users', user.uid), {
              currentLocation: {
                lat: val.lat,
                lng: val.lng,
                timestamp: Timestamp.fromDate(new Date(timestampMs)),
                timestampISO: iso,
                timestampMs,
                timezone: val.timezone || 'SAST'
              },
              lastActive: Timestamp.now(),
              updatedAt: Timestamp.now(),
              shareLocation: false,
              status: 'inactive'
            })
            console.log('🗄️ Persisted last RTDB location to Firestore (on stop)')

            // Mark RTDB entry as inactive (keep last point but indicate stopped sharing)
            try {
              await rtdbSet(trackRef, {
                ...val,
                timestamp: Date.now(),
                timestampISO: iso,
                timestampMs,
                timezone: val.timezone || 'SAST',
                status: 'inactive'
              })
              // Keep onDisconnect removal (already set by earlier writes); leave it as-is
            } catch (rtErr) {
              console.warn('Could not update RTDB track to inactive:', rtErr)
            }

          } catch (fireErr) {
            console.error('Error writing last RTDB location to Firestore:', fireErr)
          }
        } else {
          console.log('ℹ️ No RTDB track found to persist on stop')
        }
      } catch (e) {
        console.error('Error reading RTDB on stopLocationSharing:', e)
      }
    })()

    this.lastSavedLocation = null
    this.lastSavedTime = null
    this.notifyLocationUpdate(null)

    // Set 15-minute timeout to auto-disable sharing
    if (this.offlineTimeoutId) {
      clearTimeout(this.offlineTimeoutId)
    }
    this.offlineTimeoutId = setTimeout(() => {
      console.log('15 minutes offline, auto-disabling location sharing')
      this.updateShareLocation(false)
      this.offlineTimeoutId = null
    }, this.OFFLINE_TIMEOUT_MS)

    return true
  }

  // Get current GPS sharing status
  static isLocationSharingActive(): boolean {
    return this.gpsWatchId !== null
  }

  // Clean up on app exit
  static stopAllTracking(): void {
    if (this.gpsWatchId !== null) {
      navigator.geolocation.clearWatch(this.gpsWatchId)
      this.gpsWatchId = null
    }
    if (this.offlineTimeoutId) {
      clearTimeout(this.offlineTimeoutId)
      this.offlineTimeoutId = null
    }
    this.locationUpdateCallbacks.clear()
  }

  static async getTodayStats(): Promise<{
    earnings: number
    deliveries: number
  }> {
    try {
      const user = auth.currentUser
      if (!user) return { earnings: 0, deliveries: 0 }

      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const q = query(
        collection(db, 'deliveries'),
        where('carrierId', '==', user.uid),
        where('status', '==', 'delivered'),
        where('deliveryTime', '>=', Timestamp.fromDate(today))
      )

      const snapshot = await getDocs(q)
      const earnings = snapshot.docs.reduce((sum, doc) => {
        const data = doc.data()
        return sum + (data.earnings || 0)
      }, 0)

      return {
        earnings,
        deliveries: snapshot.docs.length
      }
    } catch (error) {
      console.error('Error fetching today stats:', error)
      return { earnings: 0, deliveries: 0 }
    }
  }

  // NEW: Prefer RTDB location first, fallback to Firestore user currentLocation
  static async getLocationPreferRealtime(userId: string): Promise<LocationUpdate | null> {
    try {
      // Try RTDB first
      const snap = await rtdbGet(rtdbRef(realtimeDb, `tracks/${userId}`))
      if (snap && snap.exists()) {
        const val: any = snap.val()
        return {
          lat: val.lat,
          lng: val.lng,
          timestamp: val.timestampISO ? new Date(val.timestampISO) : new Date(val.timestamp || Date.now()),
          timestampLesotho: val.timestampISO, // Lesotho time string
          accuracy: val.accuracy,
          timezone: val.timezone || 'SAST'
        } as LocationUpdate
      }

      // Fallback to Firestore
      const userDoc = await getDoc(doc(db, 'users', userId))
      if (userDoc.exists()) {
        const data: any = userDoc.data()
        const loc = data.currentLocation
        if (loc && loc.lat !== undefined && loc.lng !== undefined) {
          const ts = loc.timestampISO ? new Date(loc.timestampISO) : (loc.timestamp && loc.timestamp.toDate ? loc.timestamp.toDate() : new Date())
          return {
            lat: loc.lat,
            lng: loc.lng,
            timestamp: ts,
            timestampLesotho: loc.timestampISO,
            accuracy: loc.accuracy,
            timezone: loc.timezone || 'SAST'
          } as LocationUpdate
        }
      }

      return null
    } catch (e) {
      console.error('Error fetching preferred location (user):', e)
      return null
    }
  }

  // NEW: Prefer RTDB delivery track first, fallback to Firestore delivery.currentLocation
  static async getDeliveryLocationPreferRealtime(deliveryId: string): Promise<LocationUpdate | null> {
    try {
      const snap = await rtdbGet(rtdbRef(realtimeDb, `deliveryTracks/${deliveryId}`))
      if (snap && snap.exists()) {
        const val: any = snap.val()
        return {
          lat: val.lat,
          lng: val.lng,
          timestamp: val.timestampISO ? new Date(val.timestampISO) : new Date(val.timestamp || Date.now()),
          timestampLesotho: val.timestampISO,
          timezone: val.timezone || 'SAST'
        } as LocationUpdate
      }

      const deliveryDocSnap = await getDoc(doc(db, 'deliveries', deliveryId))
      if (deliveryDocSnap.exists()) {
        const data: any = deliveryDocSnap.data()
        const loc = data.currentLocation
        if (loc && loc.lat !== undefined && loc.lng !== undefined) {
          const ts = loc.timestampISO ? new Date(loc.timestampISO) : (loc.timestamp && loc.timestamp.toDate ? loc.timestamp.toDate() : new Date())
          return {
            lat: loc.lat,
            lng: loc.lng,
            timestamp: ts,
            timestampLesotho: loc.timestampISO,
            timezone: loc.timezone || 'SAST'
          } as LocationUpdate
        }
      }

      return null
    } catch (e) {
      console.error('Error fetching preferred location (delivery):', e)
      return null
    }
  }
}