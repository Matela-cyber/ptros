import React, { useState } from 'react';
import { Delivery } from '../types';
import { StatusUpdateButtons } from './StatusUpdateButtons';
import { formatCurrency, formatDate } from '../utils';

interface DeliveryCardProps {
  delivery: Delivery;
  showActions?: boolean;
  onStatusUpdate?: (status: string) => void;
}

export const DeliveryCard: React.FC<DeliveryCardProps> = ({
  delivery,
  showActions = true,
  onStatusUpdate
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const getStatusBadge = (status: string) => {
    const baseClass = "px-3 py-1 rounded-full text-xs font-semibold";
    
    switch (status) {
      case 'picked_up':
        return <span className={`${baseClass} bg-blue-100 text-blue-800`}>📦 Picked Up</span>;
      case 'in_transit':
        return <span className={`${baseClass} bg-purple-100 text-purple-800`}>🚚 In Transit</span>;
      case 'stuck':
        return <span className={`${baseClass} bg-orange-100 text-orange-800`}>⚠️ Stuck</span>;
      case 'delivered':
        return <span className={`${baseClass} bg-green-100 text-green-800`}>✅ Delivered</span>;
      case 'accepted':
        return <span className={`${baseClass} bg-indigo-100 text-indigo-800`}>✋ Accepted</span>;
      default:
        return <span className={`${baseClass} bg-gray-100 text-gray-800`}>{status}</span>;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      {/* Card Header */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {getStatusBadge(delivery.status)}
              <span className="text-sm font-mono text-gray-600 bg-gray-100 px-2 py-1 rounded">
                {delivery.trackingCode}
              </span>
            </div>
            <h3 className="font-bold text-gray-800">
              {delivery.customerName || 'Customer'}
            </h3>
            <p className="text-sm text-gray-600">{delivery.customerPhone}</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-green-600">
              {formatCurrency(delivery.earnings || delivery.estimatedEarnings || 0)}
            </div>
            <p className="text-xs text-gray-500">Earnings</p>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <div className="space-y-3">
          {/* Pickup & Delivery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs text-blue-700 font-semibold mb-1">📍 Pickup</p>
              <p className="text-sm text-gray-800">{delivery.pickupAddress}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-xs text-green-700 font-semibold mb-1">🏁 Delivery</p>
              <p className="text-sm text-gray-800">{delivery.deliveryAddress}</p>
            </div>
          </div>

          {/* Package Info */}
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-sm font-semibold text-gray-700 mb-2">Package Details</p>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{delivery.packageDescription}</span>
              {delivery.packageWeight && (
                <span className="font-medium">{delivery.packageWeight} kg</span>
              )}
            </div>
          </div>

          {/* Status Actions */}
          {showActions && (
            <div className="pt-4 border-t">
              <StatusUpdateButtons
                deliveryId={delivery.id}
                currentStatus={delivery.status}
                onStatusUpdate={onStatusUpdate}
              />
            </div>
          )}
        </div>

        {/* More Details Section */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Recipient</p>
                <p className="text-sm font-medium">{delivery.recipientName}</p>
                <p className="text-sm text-gray-600">{delivery.recipientPhone}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Created</p>
                <p className="text-sm">{formatDate(delivery.createdAt.toDate())}</p>
              </div>
            </div>
            
            {delivery.deliveryInstructions && (
              <div className="bg-yellow-50 p-3 rounded">
                <p className="text-xs font-semibold text-yellow-800 mb-1">📝 Instructions</p>
                <p className="text-sm text-yellow-900">{delivery.deliveryInstructions}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="px-4 py-3 bg-gray-50 border-t flex justify-between items-center">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          {showDetails ? 'Show Less' : 'More Details'}
        </button>
        
        <div className="text-xs text-gray-500">
          {delivery.assignedAt && `Assigned: ${formatDate(delivery.assignedAt.toDate())}`}
        </div>
      </div>
    </div>
  );
};