import { useState, useEffect } from 'react'
import { CarrierService } from './carrierService'
import { auth } from '@config'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '@config'

export const useCarrierStats = () => {
  const [stats, setStats] = useState({
    todayEarnings: 0,
    todayDeliveries: 0,
    totalEarnings: 0,
    totalDeliveries: 0,
    rating: 0,
    status: 'inactive' as 'active' | 'inactive' | 'busy'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = auth.currentUser
    if (!user) {
      setLoading(false)
      return
    }

    // Load today's stats
    const loadTodayStats = async () => {
      const todayStats = await CarrierService.getTodayStats()
      setStats(prev => ({
        ...prev,
        todayEarnings: todayStats.earnings,
        todayDeliveries: todayStats.deliveries
      }))
    }

    // Subscribe to carrier profile for real-time updates
    const unsubscribe = onSnapshot(doc(db, 'users', user.uid), (doc) => {
      if (doc.exists()) {
        const data = doc.data()
        setStats(prev => ({
          ...prev,
          totalEarnings: data.earnings || 0,
          totalDeliveries: data.completedDeliveries || 0,
          rating: data.rating || 0,
          status: data.status || 'inactive'
        }))
        setLoading(false)
      }
    })

    loadTodayStats()

    return () => unsubscribe()
  }, [])

  return { stats, loading }
}