import { useState, useEffect } from 'react'
import { User } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '@config'
import { CarrierService } from './carrierService'
import { useGPSLocation } from './hooks'
import { useCarrierStats } from './hooks'
import { 
  formatCurrency, 
  formatTime, 
  formatDate, 
  getStatusColor, 
  getStatusIcon,
  calculateDeliveryProgress
} from './utils'
import { Delivery } from './types'
import { toast, Toaster } from 'react-hot-toast'
import CurrentJobDetails from './CurrentJobDetails'

interface DashboardProps {
  user: User
  onNavigate?: (page: 'dashboard' | 'tasks'|'deliveries') => void
}

export default function Dashboard({ user, onNavigate }: DashboardProps) {
  const navigate = useNavigate()
  const [carrierProfile, setCarrierProfile] = useState<any>(null)
  const [activeDelivery, setActiveDelivery] = useState<Delivery | null>(null)
  const [deliveries, setDeliveries] = useState<Delivery[]>([])
  const [loading, setLoading] = useState(true)
  const [showOtpModal, setShowOtpModal] = useState(false)
  const [otpCode, setOtpCode] = useState('')
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [status, setStatus] = useState<'active' | 'inactive' | 'busy'>('inactive')
  const [showJobDetailsModal, setShowJobDetailsModal] = useState(false)

  const { stats, loading: statsLoading } = useCarrierStats()
  const { 
    isSharing, 
    lastLocation, 
    error: locationError, 
    accuracy,
    toggleSharing,
    startSharing
  } = useGPSLocation(activeDelivery?.id)

  // Load carrier data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        // Load carrier profile
        const profile = await CarrierService.getCarrierProfile()
        setCarrierProfile(profile)
        if (profile?.status) {
          setStatus(profile.status as 'active' | 'inactive' | 'busy')
        }

        // Auto-restore location sharing if it was enabled previously
        // This will start the background GPS tracking
        if (profile?.shareLocation && !isSharing) {
          console.log('🔄 Restoring location sharing from profile...')
          startSharing()
        }

        // Load active delivery
        const active = await CarrierService.getActiveDelivery()
        setActiveDelivery(active)

        // Load recent deliveries
        const recentDeliveries = await CarrierService.getDeliveries(5)
        setDeliveries(recentDeliveries)
      } catch (error) {
        console.error('Error loading data:', error)
        toast.error('Failed to load data')
      } finally {
        setLoading(false)
      }
    }

    loadData()

    // Subscribe to real-time delivery updates
    const unsubscribe = CarrierService.subscribeToActiveDelivery(setActiveDelivery)

    return () => unsubscribe()
  }, [])

  const handleStatusChange = async (newStatus: 'active' | 'inactive' | 'busy') => {
    // Prevent status change while on delivery (status = picked_up or later)
    if (activeDelivery && ['picked_up', 'in_transit', 'out_for_delivery'].includes(activeDelivery.status) && newStatus === 'inactive') {
      toast.error('⚠️ Cannot go offline while on a delivery')
      return
    }

    // Require accepted job to be "busy"
    if (newStatus === 'busy' && activeDelivery?.status !== 'accepted') {
      toast.error('⚠️ Cannot mark as on delivery without accepting the job first')
      return
    }

    try {
      const success = await CarrierService.updateCarrierStatus(newStatus, activeDelivery?.id)
      if (success) {
        setStatus(newStatus)
        toast.success(`Status updated to ${newStatus}`)
      } else {
        toast.error('Failed to update status')
      }
    } catch (error) {
      console.error('Error updating status:', error)
      toast.error('Failed to update status')
    }
  }

  const handlePickup = async () => {
    if (!activeDelivery) return

    try {
      // Generate OTP
      const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString()
      
      const success = await CarrierService.updateDeliveryStatus(
        activeDelivery.id,
        'picked_up',
        generatedOtp
      )

      if (success) {
        setOtpCode(generatedOtp)
        setShowOtpModal(true)
        toast.success('Package picked up! OTP generated.')
      } else {
        toast.error('Failed to update delivery status')
      }
    } catch (error) {
      console.error('Error picking up package:', error)
      toast.error('Failed to pick up package')
    }
  }

  const handleVerifyOTP = async () => {
    if (!activeDelivery || !otpCode) return

    try {
      const success = await CarrierService.verifyOTP(activeDelivery.id, otpCode)
      if (success) {
        toast.success('OTP verified! Delivery completed.')
        setShowOtpModal(false)
        setOtpCode('')
        setActiveDelivery(null)
      } else {
        toast.error('Invalid OTP code')
      }
    } catch (error) {
      console.error('Error verifying OTP:', error)
      toast.error('Failed to verify OTP')
    }
  }

  const handleLogout = async () => {
    try {
      if (isSharing) {
        toggleSharing() // Stop location sharing
      }
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error('Logout error:', error)
      toast.error('Failed to logout')
    }
  }

  // Determine if location sharing should ask for confirmation
  const shouldAskLocationConfirmation = activeDelivery && activeDelivery.status !== 'assigned'

  if (loading || statsLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Toaster position="top-center" />

      {/* Offline Banner */}
      {!isSharing && (
        <div className="bg-red-50 border-b-2 border-red-300">
          <div className="px-4 py-3 flex items-center gap-2">
            <span className="text-red-600 text-2xl animate-pulse">🔴</span>
            <div>
              <p className="font-semibold text-red-900">You are Offline</p>
              <p className="text-sm text-red-700">Location sharing is disabled. Enable it to accept jobs and be visible to coordinators.</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">PTROS Carrier</h1>
            <p className="text-sm text-gray-500">
              Welcome, {carrierProfile?.fullName || user.email}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            {/* Online Status Indicator */}
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
              isSharing 
                ? 'bg-green-100' 
                : 'bg-red-100'
            }`}>
              <span className={`text-lg ${isSharing ? 'animate-pulse text-green-600' : 'text-red-600'}`}>
                {isSharing ? '🟢' : '🔴'}
              </span>
              <span className={`text-xs font-semibold ${isSharing ? 'text-green-700' : 'text-red-700'}`}>
                {isSharing ? 'Online' : 'Offline'}
              </span>
            </div>
            <button
              onClick={() => setShowLocationModal(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                isSharing 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700 hover:bg-red-200'
              }`}
            >
              {isSharing ? '📍 Stop Sharing' : '📍 Start Sharing'}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="p-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-xl shadow p-4">
            <div className="text-sm text-gray-500">Today's Earnings</div>
            <div className="text-2xl font-bold text-green-600">
              {formatCurrency(stats.todayEarnings)}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <div className="text-sm text-gray-500">Today's Deliveries</div>
            <div className="text-2xl font-bold text-blue-600">
              {stats.todayDeliveries}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <div className="text-sm text-gray-500">Total Earnings</div>
            <div className="text-2xl font-bold text-purple-600">
              {formatCurrency(stats.totalEarnings)}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <div className="text-sm text-gray-500">Rating</div>
            <div className="text-2xl font-bold text-yellow-600">
              {stats.rating.toFixed(1)} ⭐
            </div>
          </div>
        </div>

        {/* Status Controls */}
        <div className="bg-white rounded-xl shadow p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-gray-800">Your Status</h2>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              status === 'active' ? 'bg-green-100 text-green-800' :
              status === 'busy' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {status === 'active' ? '🟢 Available' : 
               status === 'busy' ? '🟡 On Delivery' : '⚫ Offline'}
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => handleStatusChange('active')}
              className={`flex-1 py-3 rounded-lg transition ${
                status === 'active' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🟢 Available
            </button>
            <button
              onClick={() => handleStatusChange('busy')}
              className={`flex-1 py-3 rounded-lg transition ${
                status === 'busy' 
                  ? 'bg-yellow-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🟡 On Delivery
            </button>
            <button
              onClick={() => handleStatusChange('inactive')}
              disabled={activeDelivery ? ['picked_up', 'in_transit', 'out_for_delivery'].includes(activeDelivery.status) : false}
              className={`flex-1 py-3 rounded-lg transition ${
                status === 'inactive' 
                  ? 'bg-gray-600 text-white' 
                  : 'bg-gray-100 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200'
              }`}
              title={activeDelivery && ['picked_up', 'in_transit', 'out_for_delivery'].includes(activeDelivery.status) ? 'Cannot go offline during delivery' : ''}
            >
              ⚫ Offline
            </button>
          </div>

          {/* Offline Warning - Show when offline */}
          {status === 'inactive' && (
            <div className="mt-3 bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-700">
                <span className="font-semibold">⚠️ You are Offline</span> - You won't receive new job assignments. Click "🟢 Available" to go online.
              </p>
            </div>
          )}
        </div>

        {/* Current Job Details */}
        {activeDelivery && (
          <div className="mb-6">
            <CurrentJobDetails 
              delivery={activeDelivery}
              onViewRoute={() => setShowJobDetailsModal(true)}
              onNavigateToPickup={() => {
                toast.success('Opening navigation to pickup location')
              }}
            />
          </div>
        )}

        {/* Active Delivery Status */}
        {activeDelivery ? (
          <div className="bg-white rounded-xl shadow mb-6 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold">Delivery Progress</h2>
                  <p className="text-blue-100">Status: {activeDelivery.status.replace('_', ' ')}</p>
                </div>
                <div className="text-3xl">📦</div>
              </div>
            </div>

            <div className="p-4">
              {/* Delivery Progress */}
              <div className="mb-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">
                    {calculateDeliveryProgress(activeDelivery)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${calculateDeliveryProgress(activeDelivery)}%` }}
                  ></div>
                </div>
              </div>

              {/* Job Acceptance Status */}
              {activeDelivery.status === 'assigned' && (
                <div className="bg-yellow-50 rounded-lg p-4 mb-4 border-2 border-yellow-300">
                  <p className="text-yellow-900 font-semibold mb-2">⏳ Assigned to You – Awaiting Your Acceptance</p>
                  <p className="text-sm text-yellow-800 mb-3">
                    This job has been assigned to you by the coordinator. Accept to proceed with delivery.
                  </p>
                  <button
                    onClick={() => onNavigate?.('tasks')}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm font-medium hover:bg-yellow-700"
                  >
                    Go to Jobs Tab to Accept/Decline
                  </button>
                </div>
              )}

              {/* Delivery Steps */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      ['accepted', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered'].includes(activeDelivery.status)
                        ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {['accepted', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered'].includes(activeDelivery.status) ? '✓' : '1'}
                    </div>
                    <div>
                      <div className="font-medium">Pickup Location</div>
                      <div className="text-sm text-gray-600 truncate max-w-xs">
                        {activeDelivery.pickupAddress}
                      </div>
                    </div>
                  </div>
                  {activeDelivery.status === 'accepted' && (
                    <button
                      onClick={handlePickup}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Mark as Picked Up
                    </button>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      ['in_transit', 'out_for_delivery', 'delivered'].includes(activeDelivery.status)
                        ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {['in_transit', 'out_for_delivery', 'delivered'].includes(activeDelivery.status) ? '✓' : '2'}
                    </div>
                    <div>
                      <div className="font-medium">Delivery Location</div>
                      <div className="text-sm text-gray-600 truncate max-w-xs">
                        {activeDelivery.deliveryAddress}
                      </div>
                    </div>
                  </div>
                  {activeDelivery.status === 'picked_up' && (
                    <button
                      onClick={() => setShowOtpModal(true)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Confirm Delivery
                    </button>
                  )}
                </div>
              </div>

              {/* Package Details */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-medium mb-2">Package Details:</div>
                <div className="text-sm text-gray-600">
                  {activeDelivery.packageDescription}
                </div>
                {activeDelivery.deliveryInstructions && (
                  <div className="mt-2 text-sm text-blue-600">
                    📝 {activeDelivery.deliveryInstructions}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow p-8 text-center mb-6">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No Active Deliveries
            </h3>
            <p className="text-gray-500 mb-6">
              {status === 'active' 
                ? 'Browse available tasks to get started' 
                : "You'll be assigned deliveries when you're available"}
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => handleStatusChange('active')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Set as Available
              </button>
              {status === 'active' && onNavigate && (
  <>
    <button
      onClick={() => onNavigate('tasks')}
      className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
    >
      📋 View Available Tasks
    </button>
    <button
      onClick={() => onNavigate('deliveries')} // Add this button
      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
    >
      📦 View My Deliveries
    </button>
  </>
)}
            </div>
          </div>
        )}

        {/* Recent Deliveries */}
        <div className="bg-white rounded-xl shadow">
          <div className="p-4 border-b">
            <h2 className="font-bold text-gray-800">Recent Deliveries</h2>
          </div>
          
          {deliveries.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-4xl mb-4">📭</div>
              <p className="text-gray-500">No completed deliveries yet</p>
            </div>
          ) : (
            <div className="divide-y">
              {deliveries.map((delivery) => (
                <div key={delivery.id} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-bold text-gray-800">
                        {delivery.trackingCode}
                      </div>
                      <div className="text-sm text-gray-600">
                        {delivery.customerName}
                      </div>
                    </div>
                    <div className="text-green-600 font-bold">
                      {formatCurrency(delivery.earnings)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {formatDate(delivery.deliveryTime?.toDate())}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(delivery.status)}`}>
                      {getStatusIcon(delivery.status)} {delivery.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* OTP Modal */}
      {showOtpModal && activeDelivery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-sm">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Delivery OTP</h3>
              <p className="text-gray-600 mb-4">
                Share this OTP with the recipient to verify delivery
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-blue-700 mb-1">OTP Code</div>
                  <div className="text-3xl font-bold text-blue-800 tracking-widest">
                    {otpCode || activeDelivery.otpCode}
                  </div>
                  <div className="text-xs text-blue-600 mt-2">
                    Valid for this delivery only
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter OTP from recipient
                </label>
                <input
                  type="text"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className="w-full p-3 text-2xl text-center border border-gray-300 rounded-lg tracking-widest"
                  placeholder="0000"
                  maxLength={4}
                  autoFocus
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setShowOtpModal(false)
                    setOtpCode('')
                  }}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleVerifyOTP}
                  disabled={otpCode.length !== 4}
                  className={`flex-1 py-3 rounded-lg ${
                    otpCode.length === 4 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Verify & Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Location Sharing Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-sm">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Location Sharing</h3>
              
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    isSharing ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <span className={`text-2xl ${isSharing ? 'text-green-600' : 'text-gray-400'}`}>
                      {isSharing ? '📍' : '🔍'}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">
                      {isSharing ? 'Sharing Location' : 'Share Your Location'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {isSharing 
                        ? 'Your location is being shared with the coordinator'
                        : 'Enable GPS to share your location in real-time'}
                    </div>
                  </div>
                </div>

                {lastLocation && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <div className="text-sm text-blue-700">
                      <div className="font-medium">Last Location:</div>
                      <div>{lastLocation.lat.toFixed(6)}, {lastLocation.lng.toFixed(6)}</div>
                      <div className="text-xs">Accuracy: {accuracy.toFixed(0)} meters</div>
                      <div className="text-xs">
                        Updated: {formatTime(lastLocation.timestamp)}
                      </div>
                    </div>
                  </div>
                )}

                {locationError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                    <div className="text-sm text-red-700">{locationError}</div>
                  </div>
                )}

                {/* Only show confirmation warning when on delivery */}
                {shouldAskLocationConfirmation && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                    <div className="text-sm text-yellow-700">
                      <span className="font-medium">⚠️ Note:</span> You're on an active delivery. Disabling location sharing may affect tracking.
                    </div>
                  </div>
                )}

                {/* Always show battery warning */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <div className="text-sm text-blue-700">
                    <span className="font-medium">💡 Tip:</span> Location sharing uses GPS and may consume battery.
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowLocationModal(false)}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                >
                  Close
                </button>
                {isSharing ? (
                  <button
                    onClick={() => {
                      // Only ask for confirmation if on delivery
                      if (shouldAskLocationConfirmation) {
                        if (window.confirm('⚠️ Are you sure? Disabling location sharing may affect tracking.')) {
                          toggleSharing()
                          CarrierService.updateShareLocation(false)
                          setShowLocationModal(false)
                        }
                      } else {
                        toggleSharing()
                        CarrierService.updateShareLocation(false)
                        setShowLocationModal(false)
                      }
                    }}
                    className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Stop Sharing
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      toggleSharing()
                      CarrierService.updateShareLocation(true)
                      setShowLocationModal(false)
                    }}
                    className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Start Sharing
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Job Details Modal */}
      {showJobDetailsModal && activeDelivery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b sticky top-0 bg-white">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Route Details</h3>
                <button
                  onClick={() => setShowJobDetailsModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6">
              {activeDelivery.route ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-blue-700 font-semibold">Distance</p>
                      <p className="text-2xl font-bold text-blue-900">
                        {activeDelivery.route.distance || '?'} km
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm text-green-700 font-semibold">Est. Time</p>
                      <p className="text-2xl font-bold text-green-900">
                        {activeDelivery.route.duration || '?'} min
                      </p>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Pickup</p>
                    <p className="text-gray-800">{activeDelivery.pickupAddress}</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Delivery</p>
                    <p className="text-gray-800">{activeDelivery.deliveryAddress}</p>
                  </div>

                  {activeDelivery.route.polyline && (
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <p className="text-sm text-gray-600">
                        📍 Full route details available in map view
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">Route details not available yet</p>
                </div>
              )}

              <button
                onClick={() => setShowJobDetailsModal(false)}
                className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
