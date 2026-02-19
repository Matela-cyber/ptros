import { useState } from "react";
import { Delivery } from "./types";
import { formatCurrency, formatDate } from "./utils";
import { useDeliveryStatus } from "./hooks/useDeliveryStatus";
import "./Dashboard.css"; // Assuming you have some custom styles for the dashboard
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
  onStatusUpdate,
}: CurrentJobDetailsProps) {
  const { updateStatus, loading, error, getAvailableStatuses, getStatusInfo } =
    useDeliveryStatus();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  if (!delivery) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-gray-400 text-5xl mb-3">
          <i className="fa-solid fa-box" />
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">No Active Job</h3>
        <p className="text-gray-500">
          You don't have any active delivery at the moment
        </p>
      </div>
    );
  }

  const isAccepted = delivery.status === "accepted";
  const isAssigned = delivery.status === "assigned";

  const handleStatusUpdate = async (
    status: "picked_up" | "in_transit" | "stuck" | "delivered",
  ) => {
    try {
      await updateStatus(delivery.id, status, delivery.status);
      const statusLabels = {
        picked_up: "Picked Up",
        in_transit: "In Transit",
        stuck: "Stuck",
        delivered: "Delivered",
      } as const;
      setStatusMessage(`✅ Delivery marked as ${statusLabels[status]}`);
      setTimeout(() => setStatusMessage(null), 3000);

      onStatusUpdate?.(delivery.id, status);
    } catch (err) {
      console.error("Status update failed:", err);
    }
  };

  const distanceKm = (delivery as any)?.distance ?? delivery.route?.distance;
  const availableStatuses = getAvailableStatuses(delivery.status);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      {/* Status Header */}
      <div
        className={`px-6 py-5 ${
          isAssigned
            ? "bg-gradient-to-r from-yellow-50 to-yellow-100 border-b-2 border-yellow-200"
            : isAccepted
              ? "bg-gradient-to-r from-green-50 to-green-100 border-b-2 border-green-200"
              : "bg-gradient-to-r from-blue-50 to-blue-100 border-b-2 border-blue-200"
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-900">
              Current Delivery
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/70 rounded-full border border-white/60">
                <i className="fa-solid fa-barcode" />
                <span className="font-mono font-semibold">
                  {delivery.trackingCode}
                </span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/70 rounded-full border border-white/60">
                <i className="fa-solid fa-wallet" />
                {formatCurrency(
                  delivery.earnings || delivery.estimatedEarnings || 0,
                )}
              </span>
              {distanceKm ? (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/70 rounded-full border border-white/60">
                  <i className="fa-solid fa-route" />
                  {Number(distanceKm).toFixed(1)} km
                </span>
              ) : null}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-2 shadow-sm ${
                  isAssigned
                    ? "bg-yellow-200 text-yellow-900"
                    : isAccepted
                      ? "bg-green-200 text-green-900"
                      : "bg-blue-200 text-blue-900"
                }`}
              >
                <i
                  className={
                    isAssigned
                      ? "fa-regular fa-clock"
                      : isAccepted
                        ? "fa-solid fa-hand"
                        : "fa-solid fa-truck-fast"
                  }
                />
                {isAssigned
                  ? "Awaiting Acceptance"
                  : isAccepted
                    ? "Accepted"
                    : "In Progress"}
              </span>
              <span className="text-xs text-gray-700 bg-white/60 px-3 py-1 rounded-full border border-white/60 inline-flex items-center gap-2">
                <i className="fa-solid fa-circle-info text-blue-600" />
                Current status: {delivery.status.replace("_", " ")}
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowMoreDetails(!showMoreDetails)}
            className="px-4 py-2 bg-white/80 text-blue-700 border border-blue-200 rounded-lg text-sm font-semibold hover:bg-white"
          >
            {showMoreDetails ? "Hide Extra Details" : "More Details"}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-5 bg-slate-50/50">
        {/* Quick summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white border border-green-100 rounded-xl p-4 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Earnings</p>
              <p className="text-xl font-bold text-green-700">
                {formatCurrency(
                  delivery.earnings || delivery.estimatedEarnings || 0,
                )}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 inline-flex items-center justify-center">
              <i className="fa-solid fa-wallet" />
            </div>
          </div>
          <div className="bg-white border border-blue-100 rounded-xl p-4 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Package</p>
              <p className="text-xl font-bold text-blue-700">
                {delivery.packageWeight} kg
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 inline-flex items-center justify-center">
              <i className="fa-solid fa-box" />
            </div>
          </div>
          <div className="bg-white border border-purple-100 rounded-xl p-4 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Route</p>
              <p className="text-xl font-bold text-purple-700">
                {distanceKm ? `${Number(distanceKm).toFixed(1)} km` : "--"}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 inline-flex items-center justify-center">
              <i className="fa-solid fa-route" />
            </div>
          </div>
        </div>

        {/* Pickup & Delivery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold mr-3">
                <i className="fa-solid fa-location-dot" />
              </div>
              <h4 className="font-semibold text-gray-800">Pickup Location</h4>
            </div>
            <p className="text-sm text-gray-700 font-medium">
              {delivery.pickupAddress}
            </p>
            <div className="mt-2 space-y-1 text-xs text-gray-500">
              <p>From: {delivery.customerName}</p>
              <p>Phone: {delivery.customerPhone}</p>
              {delivery.pickupTime && (
                <p className="text-green-600 font-medium">
                  Picked up: {formatDate(delivery.pickupTime.toDate())}
                </p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-green-100 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold mr-3">
                <i className="fa-solid fa-flag-checkered" />
              </div>
              <h4 className="font-semibold text-gray-800">Delivery Location</h4>
            </div>
            <p className="text-sm text-gray-700 font-medium">
              {delivery.deliveryAddress}
            </p>
            <div className="mt-2 space-y-1 text-xs text-gray-500">
              <p>To: {delivery.recipientName}</p>
              <p>Phone: {delivery.recipientPhone}</p>
              {delivery.deliveryTime && (
                <p className="text-green-600 font-medium">
                  Delivered: {formatDate(delivery.deliveryTime.toDate())}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Package Information */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-800">Package Information</h4>
            <span className="text-xs text-gray-600 inline-flex items-center gap-2">
              <i className="fa-solid fa-box" />
              Handle with care
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-slate-50 rounded-lg p-3 border border-gray-100 shadow-inner">
              <p className="text-xs text-gray-500 mb-1">Description</p>
              <p className="text-sm font-medium text-gray-800">
                {delivery.packageDescription}
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-gray-100 shadow-inner">
              <p className="text-xs text-gray-500 mb-1">Weight</p>
              <p className="text-sm font-medium text-gray-800">
                {delivery.packageWeight} kg
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-gray-100 shadow-inner">
              <p className="text-xs text-gray-500 mb-1">Value</p>
              <p className="text-sm font-medium text-gray-800">
                {formatCurrency(delivery.packageValue || 0)}
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-gray-100 shadow-inner">
              <p className="text-xs text-gray-500 mb-1">Payment</p>
              <p className="text-sm font-medium text-gray-800 capitalize">
                {delivery.paymentMethod?.replace("_", " ") || "Cash"}
              </p>
            </div>
          </div>
        </div>

        {/* Additional details */}
        {showMoreDetails && (
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm space-y-3">
            <h4 className="font-semibold text-gray-800">Additional Details</h4>

            {delivery.deliveryInstructions && (
              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <p className="text-xs font-semibold text-yellow-800 mb-1 inline-flex items-center gap-2">
                  <i className="fa-regular fa-note-sticky" />
                  Delivery Instructions
                </p>
                <p className="text-sm text-yellow-900">
                  {delivery.deliveryInstructions}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-lg p-3 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Created Date</p>
                <p className="text-sm font-medium">
                  {formatDate(delivery.createdAt.toDate())}
                </p>
              </div>
              {delivery.estimatedDelivery && (
                <div className="bg-slate-50 rounded-lg p-3 border border-gray-100">
                  <p className="text-xs text-gray-500 mb-1">
                    Estimated Delivery
                  </p>
                  <p className="text-sm font-medium">
                    {formatDate(delivery.estimatedDelivery.toDate())}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Route Information */}
        {delivery.route && (
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-blue-700 font-semibold mb-1">
                  Route Details
                </p>
                <p className="text-sm text-blue-900">
                  {delivery.route.distance && `${delivery.route.distance} km`}
                  {delivery.route.distance && delivery.route.duration && " • "}
                  {delivery.route.duration && `${delivery.route.duration} min`}
                </p>
              </div>
              {onViewRoute && (
                <button
                  onClick={() => onViewRoute(delivery)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 flex items-center gap-2"
                >
                  <i className="fa-solid fa-map-location-dot" />
                  View Route
                </button>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        {isAccepted && onNavigateToPickup && (
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-4 flex items-center justify-between gap-3">
            <div className="text-sm text-gray-700 inline-flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 inline-flex items-center justify-center">
                <i className="fa-solid fa-location-arrow" />
              </span>
              <div>
                <p className="font-semibold text-gray-800">Ready to pick up</p>
                <p className="text-xs text-gray-500">
                  Open maps to navigate to pickup
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigateToPickup(delivery)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold"
            >
              Navigate
            </button>
          </div>
        )}

        {isAssigned && (
          <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 inline-flex items-center justify-center">
                <i className="fa-solid fa-triangle-exclamation" />
              </span>
              <div className="text-sm text-yellow-900">
                <p className="font-semibold">Awaiting your decision</p>
                <p className="text-xs text-yellow-800">
                  Accept or decline from the Jobs tab
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-yellow-800 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-200">
              Assigned
            </span>
          </div>
        )}

        {/* Status Update Section */}
        {availableStatuses.length > 0 && (
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 shadow-sm">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Update Delivery Status
                </h4>
                <p className="text-sm text-gray-600">
                  Update the current progress of this delivery
                </p>
              </div>
              <span className="text-xs text-gray-600 inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border">
                <i className="fa-solid fa-circle-info text-blue-600" />
                Live sync to coordinator
              </span>
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
                    className={`${info.color} text-white p-4 rounded-xl shadow-md hover:shadow-lg hover:opacity-90 disabled:opacity-50 transition flex flex-col items-center justify-center min-h-[120px] text-center border border-white/30`}
                  >
                    <span className="text-2xl mb-2">
                      <i className={info.icon} />
                    </span>
                    <span className="font-semibold">{info.label}</span>
                    <span className="text-xs opacity-90 mt-1 text-center">
                      {info.description}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 text-xs text-gray-600 text-center">
              Current status:{" "}
              <span className="font-semibold text-gray-800">
                {delivery.status.replace("_", " ")}
              </span>
            </div>
          </div>
        )}

        {/* Delivery is Complete */}
        {delivery.status === "delivered" && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-300 text-center">
            <div className="text-4xl mb-3 text-green-600">
              <i className="fa-solid fa-champagne-glasses" />
            </div>
            <h4 className="font-bold text-green-800 text-lg mb-1">
              Delivery Completed!
            </h4>
            <p className="text-green-700">
              Package successfully delivered to recipient
            </p>
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
