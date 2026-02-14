import { useState } from 'react';
import { updateDeliveryStatus } from '../services/deliveryService';
import { useCarrier } from './useCarrier';

export const useDeliveryStatus = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { carrier } = useCarrier();
  const currentLocation = carrier?.currentLocation || { latitude: 0, longitude: 0 };

  // Validate status transitions
  const validateStatusTransition = (current: string, next: string): { valid: boolean; message?: string } => {
    const allowedTransitions: Record<string, string[]> = {
      accepted: ['picked_up'],
      picked_up: ['in_transit', 'stuck'],
      in_transit: ['delivered', 'stuck'],
      stuck: ['in_transit'], // Can resume from stuck
    };

    if (!allowedTransitions[current]) {
      return { valid: false, message: `Cannot update status from ${current}` };
    }

    if (!allowedTransitions[current].includes(next)) {
      return { valid: false, message: `Cannot transition from ${current} to ${next}` };
    }

    return { valid: true };
  };

  const updateStatus = async (
    deliveryId: string,
    status: 'picked_up' | 'in_transit' | 'stuck' | 'delivered',
    currentStatus?: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      // Validate status transition if currentStatus is provided
      if (currentStatus) {
        const validation = validateStatusTransition(currentStatus, status);
        if (!validation.valid) {
          throw new Error(validation.message || 'Invalid status transition');
        }
      }

      await updateDeliveryStatus(deliveryId, status, currentLocation);
      setLoading(false);
      return { success: true, message: `Status updated to ${status}` };
    } catch (err: any) {
      const errorMsg = err.message || 'Failed to update status';
      setError(errorMsg);
      setLoading(false);
      throw err;
    }
  };

  // Get next available statuses based on current status
  const getAvailableStatuses = (currentStatus: string): Array<'picked_up' | 'in_transit' | 'stuck' | 'delivered'> => {
    switch (currentStatus) {
      case 'accepted':
        return ['picked_up'];
      case 'picked_up':
        return ['in_transit', 'stuck'];
      case 'in_transit':
        return ['delivered', 'stuck'];
      case 'stuck':
        return ['in_transit']; // Can resume from stuck
      default:
        return [];
    }
  };

  // Get status display information
  const getStatusInfo = (status: string) => {
    const statusInfo = {
      picked_up: {
        label: 'Picked Up',
        icon: '📦',
        color: 'bg-blue-600',
        description: 'Package collected from pickup location'
      },
      in_transit: {
        label: 'In Transit',
        icon: '🚚',
        color: 'bg-purple-600',
        description: 'Package is on the way'
      },
      stuck: {
        label: 'Stuck',
        icon: '⚠️',
        color: 'bg-orange-600',
        description: 'Facing delays or issues'
      },
      delivered: {
        label: 'Delivered',
        icon: '✅',
        color: 'bg-green-600',
        description: 'Package delivered successfully'
      }
    };

    return statusInfo[status as keyof typeof statusInfo] || { label: status, icon: '📋', color: 'bg-gray-600', description: '' };
  };

  return { 
    updateStatus, 
    loading, 
    error, 
    getAvailableStatuses,
    getStatusInfo,
    validateStatusTransition 
  };
};