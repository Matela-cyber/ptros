import { useState, useEffect } from 'react'
import { CarrierService } from './carrierService'
import { LocationUpdate } from './types'

export const useGPSLocation = (activeDeliveryId?: string) => {
  const [isSharing, setIsSharing] = useState(() => CarrierService.isLocationSharingActive())
  const [lastLocation, setLastLocation] = useState<LocationUpdate | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [accuracy, setAccuracy] = useState<number>(0)

  const startSharing = () => {
    const success = CarrierService.startLocationSharing(activeDeliveryId)
    if (success) {
      setIsSharing(true)
      setError(null)
    }
    return success
  }

  const stopSharing = () => {
    CarrierService.stopLocationSharing()
    setIsSharing(false)
  }

  const toggleSharing = () => {
    if (isSharing) {
      stopSharing()
    } else {
      startSharing()
    }
  }

  useEffect(() => {
    // Subscribe to location updates from the service
    const unsubscribe = CarrierService.subscribeToLocationUpdates((location) => {
      if (location) {
        setLastLocation(location)
        setAccuracy(location.accuracy || 0)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return {
    isSharing,
    lastLocation,
    error,
    accuracy,
    startSharing,
    stopSharing,
    toggleSharing
  }
}