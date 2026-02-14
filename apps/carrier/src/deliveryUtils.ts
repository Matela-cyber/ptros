import { Delivery } from './types'

export const calculateDeliveryProgress = (delivery: Delivery): number => {
  const progress = {
    pending: 10,
    assigned: 30,
    accepted: 40,
    picked_up: 50,
    in_transit: 70,
    out_for_delivery: 90,
    delivered: 100,
    cancelled: 0
  }
  return progress[delivery.status] || 0
}

export const getDeliveryStatusInfo = (status: string) => {
  const statuses = {
    pending: { 
      title: 'Pending Assignment',
      description: 'Waiting for a carrier to be assigned'
    },
    assigned: { 
      title: 'Assigned to You',
      description: 'You have been assigned this delivery'
    },
    picked_up: { 
      title: 'Package Picked Up',
      description: 'Package collected from pickup location'
    },
    in_transit: { 
      title: 'In Transit',
      description: 'Package is on the way to destination'
    },
    out_for_delivery: { 
      title: 'Out for Delivery',
      description: 'Package is being delivered to recipient'
    },
    delivered: { 
      title: 'Delivered',
      description: 'Package successfully delivered'
    },
    cancelled: { 
      title: 'Cancelled',
      description: 'Delivery has been cancelled'
    }
  }
  return statuses[status as keyof typeof statuses] || statuses.pending
}