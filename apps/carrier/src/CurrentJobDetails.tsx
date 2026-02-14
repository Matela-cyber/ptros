import { Delivery } from './types';
import { formatCurrency, formatDate } from './utils';
import { useDeliveryStatus } from './hooks/useDeliveryStatus';
import { useState } from 'react';

interface CurrentJobDetailsProps {
  delivery: Delivery | null;
  onViewRoute?: (delivery: Delivery) => void;
  onNavigateToPickup?: (delivery: Delivery) => void;
  onStatusUpdate?: (deliveryId: string, newStatus: string) => void;
}

export default function CurrentJobDetails({
  delivery,
  onViewRoute,
  onNavigateToPickup,
  onStatusUpdate
}: CurrentJobDetailsProps) {
  const { updateStatus, loading, error, getAvailableStatuses, getStatusInfo } = useDeliveryStatus();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  if (!delivery) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-gray-400 text-6xl mb-4">📦</div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">No Active Job</h3>
        <p className="text-gray-500">You don't have any active delivery at the moment</p>
      </div>
    );
  }

  const isAccepted = delivery.status === 'accepted';
  const isAssigned = delivery.status === 'assigned';

  const handleStatusUpdate = async (status: 'picked_up' | 'in_transit' | 'stuck' | 'delivered') => {
    try {
      await updateStatus(delivery.id, status, delivery.status);
      const statusLabels = {
        picked_up: 'Picked Up',
        in_transit: 'In Transit',
        stuck: 'Stuck',
        delivered: 'Delivered',
      };
      const message = `✅ Delivery marked as ${statusLabels[status]}`;
      setStatusMessage(message);
      setTimeout(() => setStatusMessage(null), 3000);
      
      if (onStatusUpdate) {
        onStatusUpdate(delivery.id, status);
      }
    } catch (err) {
      console.error('Status update failed:', err);
    }
  };

  const availableStatuses = getAvailableStatuses(delivery.status);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Status Header */}
      <div className={`px-6 py-4 ${
        isAssigned ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-b-2 border-yellow-300' :
        isAccepted ? 'bg-gradient-to-r from-green-50 to-green-100 border-b-2 border-green-300' :
        'bg-gradient-to-r from-blue-50 to-blue-100 border-b-2 border-blue-300'
      }`}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Current Delivery</h3>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-sm text-gray-600">
                Tracking: <span className="font-mono font-bold">{delivery.trackingCode}</span>
              </p>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                isAssigned ? 'bg-yellow-200 text-yellow-800' :
                isAccepted ? 'bg-green-200 text-green-800' :
                'bg-blue-200 text-blue-800'
              }`}>
                {isAssigned ? '⏳ Awaiting Acceptance' :
                 isAccepted ? '✋ Accepted' :
                 '📦 In Progress'}
              </span>
            </div>
          </div>
          <button
            onClick={() => setShowMoreDetails(!showMoreDetails)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            {showMoreDetails ? 'Show Less' : 'More Details'}
          </button>
        </div>
      </div>

      {/* Job Details */}
      <div className="p-6 space-y-4">
        {/* Earnings Banner */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-700 font-medium">Estimated Earnings</span>
              <p className="text-xs text-gray-500 mt-1">Complete delivery to earn</p>
            </div>
            <span className="text-2xl font-bold text-green-600">
              {formatCurrency(delivery.earnings || delivery.estimatedEarnings || 0)}
            </span>
          </div>
        </div>

        {/* Pickup & Delivery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pickup Card */}
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                📍
              </div>
              <h4 className="font-semibold text-gray-800">Pickup Location</h4>
            </div>
            <div className="ml-13">
              <p className="text-sm text-gray-700 font-medium">{delivery.pickupAddress}</p>
              <div className="mt-2 space-y-1">
                <p className="text-xs text-gray-500">From: {delivery.customerName}</p>
                <p className="text-xs text-gray-500">Phone: {delivery.customerPhone}</p>
                {delivery.pickupTime && (
                  <p className="text-xs text-green-600 font-medium">
                    Picked up: {formatDate(delivery.pickupTime.toDate())}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Delivery Card */}
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-3">
                🏁
              </div>
              <h4 className="font-semibold text-gray-800">Delivery Location</h4>
            </div>
            <div className="ml-13">
              <p className="text-sm text-gray-700 font-medium">{delivery.deliveryAddress}</p>
              <div className="mt-2 space-y-1">
                <p className="text-xs text-gray-500">To: {delivery.recipientName}</p>
                <p className="text-xs text-gray-500">Phone: {delivery.recipientPhone}</p>
                {delivery.deliveryTime && (
                  <p className="text-xs text-green-600 font-medium">
                    Delivered: {formatDate(delivery.deliveryTime.toDate())}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Package Information */}
        <div className="bg-gray-50 rounded-xl p-4">
          <h4 className="font-semibold text-gray-800 mb-3">Package Information</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Description</p>
              <p className="text-sm font-medium text-gray-800">{delivery.packageDescription}</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Weight</p>
              <p className="text-sm font-medium text-gray-800">{delivery.packageWeight} kg</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Value</p>
              <p className="text-sm font-medium text-gray-800">
                {formatCurrency(delivery.packageValue || 0)}
              </p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Payment</p>
              <p className="text-sm font-medium text-gray-800 capitalize">
                {delivery.paymentMethod?.replace('_', ' ') || 'Cash'}
              </p>
            </div>
          </div>
        </div>

        {/* More Details Section */}
        {showMoreDetails && (
          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <h4 className="font-semibold text-gray-800">Additional Details</h4>
            
            {delivery.deliveryInstructions && (
              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <p className="text-xs font-semibold text-yellow-800 mb-1">📝 Delivery Instructions</p>
                <p className="text-sm text-yellow-900">{delivery.deliveryInstructions}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Created Date</p>
                <p className="text-sm font-medium">{formatDate(delivery.createdAt.toDate())}</p>
              </div>
              {delivery.estimatedDelivery && (
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Estimated Delivery</p>
                  <p className="text-sm font-medium">{formatDate(delivery.estimatedDelivery.toDate())}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Route Information */}
        {delivery.route && (
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-blue-700 font-semibold mb-1">Route Details</p>
                <p className="text-sm text-blue-900">
                  {delivery.route.distance && `${delivery.route.distance} km`}
                  {delivery.route.distance && delivery.route.duration && ' • '}
                  {delivery.route.duration && `${delivery.route.duration} min`}
                </p>
              </div>
              {onViewRoute && (
                <button
                  onClick={() => onViewRoute(delivery)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 flex items-center gap-2"
                >
                  <span>🗺️</span>
                  View Route
                </button>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        {isAccepted && onNavigateToPickup && (
          <button
            onClick={() => onNavigateToPickup(delivery)}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition flex items-center justify-center gap-2"
          >
            <span>📍</span>
            Navigate to Pickup Location
          </button>
        )}

        {isAssigned && (
          <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 text-center">
            <p className="text-sm text-yellow-900 font-semibold">
              ⚠️ Go to Jobs Tab to accept or decline this assignment
            </p>
          </div>
        )}

        {/* Status Update Section */}
        {availableStatuses.length > 0 && (
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border">
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1">Update Delivery Status</h4>
              <p className="text-sm text-gray-600">Update the current progress of this delivery</p>
            </div>

            {statusMessage && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg border border-green-200">
                {statusMessage}
              </div>
            )}

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {availableStatuses.map((status) => {
                const info = getStatusInfo(status);
                return (
                  <button
                    key={status}
                    onClick={() => handleStatusUpdate(status)}
                    disabled={loading}
                    className={`${info.color} text-white p-4 rounded-xl hover:opacity-90 disabled:opacity-50 transition flex flex-col items-center justify-center min-h-[100px]`}
                  >
                    <span className="text-2xl mb-2">{info.icon}</span>
                    <span className="font-semibold">{info.label}</span>
                    <span className="text-xs opacity-90 mt-1 text-center">{info.description}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 text-xs text-gray-500 text-center">
              Current status: <span className="font-medium">{delivery.status.replace('_', ' ')}</span>
            </div>
          </div>
        )}

        {/* Delivery is Complete */}
        {delivery.status === 'delivered' && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-300 text-center">
            <div className="text-4xl mb-3">🎉</div>
            <h4 className="font-bold text-green-800 text-lg mb-1">Delivery Completed!</h4>
            <p className="text-green-700">Package successfully delivered to recipient</p>
            {delivery.deliveryTime && (
              <p className="text-sm text-green-600 mt-2">
                Delivered on {formatDate(delivery.deliveryTime.toDate())}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}