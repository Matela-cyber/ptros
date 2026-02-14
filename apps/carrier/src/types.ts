import { Timestamp } from 'firebase/firestore'

export interface CarrierProfile {
  id: string
  email: string
  fullName: string
  phone: string
  whatsapp: string
  address: string
  city: string
  vehicleType: string
  licensePlate: string
  role: 'carrier'
  isApproved: boolean
  status: 'active' | 'inactive' | 'busy' | 'pending'
  shareLocation: boolean
  earnings: number
  completedDeliveries: number
  rating: number
  createdAt: Timestamp
  updatedAt: Timestamp
  lastActive?: Timestamp
  currentLocation?: {
    lat: number
    lng: number
    timestamp: Timestamp
  }
}

export interface Delivery {
  id: string
  trackingCode: string
  status: 'pending' | 'assigned' | 'accepted' | 'picked_up' | 'in_transit' | 'out_for_delivery' | 'delivered' | 'cancelled'
  customerEmail: string
  customerName: string
  customerPhone: string
  recipientName: string
  recipientPhone: string
  pickupAddress: string
  deliveryAddress: string
  packageDescription: string
  packageWeight: number
  packageValue: number
  deliveryInstructions: string
  carrierId?: string
  carrierName?: string
  carrierPhone?: string
  earnings: number
  estimatedEarnings: number
  estimatedDelivery?: Timestamp
  pickupTime?: Timestamp
  deliveryTime?: Timestamp
  assignedAt?: Timestamp
  acceptedAt?: Timestamp
  currentLocation?: {
    lat: number
    lng: number
    timestamp: Timestamp
  }
  route?: {
    polyline?: string // Encoded polyline for route display
    distance?: number // Distance in km
    duration?: number // Duration in minutes
    waypoints?: Array<{ lat: number; lng: number }>
  }
  otpCode?: string
  otpVerified: boolean
  paymentMethod: 'cash' | 'mobile_money' | 'card'
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface CarrierStats {
  todayEarnings: number
  todayDeliveries: number
  totalEarnings: number
  totalDeliveries: number
  averageRating: number
  activeHours: number
}

export interface LocationUpdate {
  lat: number
  lng: number
  timestamp: Date
  accuracy?: number
}