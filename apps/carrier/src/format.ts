export const formatCoords = (lat?: number, lng?: number) => {
  if (lat == null || lng == null) return '-'
  return `${lat.toFixed(4)}, ${lng.toFixed(4)}`
}

export const formatCurrency = (amount?: number | null) => {
  if (amount == null || Number.isNaN(amount)) return 'M0.00'
  return `M${amount.toFixed(2)}`
}

export const formatTime = (date?: Date | null) => {
  if (!date) return 'Not yet'
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export const formatDate = (date?: Date | null) => {
  if (!date) return 'N/A'
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
}

export const formatStatus = (status: string) => {
  return status.replace('_', ' ').toUpperCase()
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered': return 'bg-green-100 text-green-800'
    case 'in_transit': return 'bg-blue-100 text-blue-800'
    case 'picked_up': return 'bg-yellow-100 text-yellow-800'
    case 'assigned': return 'bg-purple-100 text-purple-800'
    case 'pending': return 'bg-gray-100 text-gray-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export const getStatusIcon = (status: string) => {
  switch (status) {
    case 'delivered': return '✅'
    case 'in_transit': return '🚚'
    case 'picked_up': return '📦'
    case 'assigned': return '👤'
    case 'pending': return '⏳'
    default: return '📋'
  }
}