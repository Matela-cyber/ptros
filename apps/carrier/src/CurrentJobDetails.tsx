import { useState } from "react";
import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";
import { Delivery } from "./types";
import { formatCurrency, formatDate } from "./utils";
import { useDeliveryStatus } from "./hooks/useDeliveryStatus";
import MapLegend from "./components/MapLegend";
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
  const [showDeliveryRouteModal, setShowDeliveryRouteModal] = useState(false);
  const [deviationReason, setDeviationReason] = useState("normal_route");
  const [deviationNote, setDeviationNote] = useState("");
  const [shortcutPoints, setShortcutPoints] = useState<
    Array<{ lat: number; lng: number }>
  >([]);
  const [vehicleSpecificShortcut, setVehicleSpecificShortcut] = useState(false);

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
      if (status === "delivered") {
        setShowDeliveryRouteModal(true);
        return;
      }

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

  const decodePolyline = (
    encoded?: string,
  ): Array<{ lat: number; lng: number }> => {
    if (!encoded) return [];

    let index = 0;
    let lat = 0;
    let lng = 0;
    const points: Array<{ lat: number; lng: number }> = [];

    while (index < encoded.length) {
      let result = 0;
      let shift = 0;
      let b: number;

      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);

      const dLat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lat += dLat;

      result = 0;
      shift = 0;

      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);

      const dLng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lng += dLng;

      points.push({ lat: lat / 1e5, lng: lng / 1e5 });
    }

    return points;
  };

  const routePath = decodePolyline(delivery.route?.polyline);
  const activeRoutePath = decodePolyline(
    (delivery as any)?.routeHistory?.activePolyline,
  );
  const pickupPoint = (delivery as any)?.pickupLocation
    ? {
        lat: (delivery as any).pickupLocation.lat,
        lng: (delivery as any).pickupLocation.lng,
      }
    : undefined;
  const deliveryPoint = (delivery as any)?.deliveryLocation
    ? {
        lat: (delivery as any).deliveryLocation.lat,
        lng: (delivery as any).deliveryLocation.lng,
      }
    : undefined;
  const currentPoint = delivery.currentLocation
    ? {
        lat: delivery.currentLocation.lat,
        lng: delivery.currentLocation.lng,
      }
    : undefined;

  const carrierToPickupPath =
    currentPoint &&
    pickupPoint &&
    (delivery.status === "assigned" || delivery.status === "accepted")
      ? [currentPoint, pickupPoint]
      : [];

  const pickupToDropoffPath =
    pickupPoint && deliveryPoint ? [pickupPoint, deliveryPoint] : [];

  const activeProgressPath =
    activeRoutePath.length > 1
      ? activeRoutePath
      : pickupPoint && currentPoint
        ? [pickupPoint, currentPoint]
        : [];

  const mapCenter =
    shortcutPoints[shortcutPoints.length - 1] ||
    routePath[0] ||
    (delivery.currentLocation
      ? {
          lat: delivery.currentLocation.lat,
          lng: delivery.currentLocation.lng,
        }
      : { lat: -29.31, lng: 27.48 });

  const onShortcutMapClick = (event: google.maps.MapMouseEvent) => {
    if (!event.latLng) return;
    const point = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    setShortcutPoints((prev) =>
      prev.length >= 2 ? [point] : [...prev, point],
    );
  };

  const confirmDeliveredWithRouteContext = async () => {
    const start = shortcutPoints[0];
    const end = shortcutPoints[1];

    const shortcut =
      deviationReason === "shortcut" && start && end
        ? {
            start,
            end,
            vehicleTypeSpecific: vehicleSpecificShortcut,
            note: deviationNote || undefined,
          }
        : undefined;

    await updateStatus(delivery.id, "delivered", delivery.status, {
      reason: deviationReason,
      note: deviationNote || undefined,
      shortcut,
    });

    setShowDeliveryRouteModal(false);
    setDeviationReason("normal_route");
    setDeviationNote("");
    setShortcutPoints([]);
    setVehicleSpecificShortcut(false);

    setStatusMessage("✅ Delivery marked as Delivered");
    setTimeout(() => setStatusMessage(null), 3000);
    onStatusUpdate?.(delivery.id, "delivered");
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

      {showDeliveryRouteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
            <div className="border-b px-6 py-4">
              <h3 className="text-lg font-bold text-gray-800">
                Delivery Complete • Route Feedback
              </h3>
              <p className="text-sm text-gray-600">
                If you deviated, add details so route optimization improves over
                time.
              </p>
            </div>

            <div className="space-y-4 px-6 py-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Route outcome
                </label>
                <select
                  value={deviationReason}
                  onChange={(e) => setDeviationReason(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                >
                  <option value="normal_route">Normal route (no issues)</option>
                  <option value="shortcut">I took a shortcut</option>
                  <option value="blocked_route">
                    Road blocked/unavailable
                  </option>
                  <option value="traffic">Heavy traffic detour</option>
                  <option value="other">Other deviation</option>
                </select>
              </div>

              {deviationReason === "shortcut" && (
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 space-y-3">
                  <p className="text-xs text-blue-700">
                    Click two points on the map to record the shortcut segment.
                  </p>
                  <div className="h-64 overflow-hidden rounded-lg border border-gray-300 bg-white relative">
                    <GoogleMap
                      zoom={14}
                      center={mapCenter}
                      onClick={onShortcutMapClick}
                      mapContainerStyle={{ width: "100%", height: "100%" }}
                      options={{ disableDefaultUI: false }}
                    >
                      {carrierToPickupPath.length > 1 && (
                        <Polyline
                          path={carrierToPickupPath}
                          options={{
                            strokeColor: "#fbbf24",
                            strokeOpacity: 0.4,
                            strokeWeight: 5,
                          }}
                        />
                      )}

                      {pickupToDropoffPath.length > 1 && (
                        <Polyline
                          path={pickupToDropoffPath}
                          options={{
                            strokeColor: "#fb923c",
                            strokeOpacity: 0.4,
                            strokeWeight: 5,
                          }}
                        />
                      )}

                      {routePath.length > 1 && (
                        <Polyline
                          path={routePath}
                          options={{
                            strokeColor: "#f59e0b",
                            strokeOpacity: 0.85,
                            strokeWeight: 3,
                            icons: [
                              {
                                icon: {
                                  path: "M 0,-1 0,1",
                                  strokeOpacity: 1,
                                  scale: 2,
                                },
                                offset: "0",
                                repeat: "14px",
                              },
                            ],
                          }}
                        />
                      )}

                      {activeProgressPath.length > 1 && (
                        <Polyline
                          path={activeProgressPath}
                          options={{
                            strokeColor: "#14b8a6",
                            strokeOpacity: 1,
                            strokeWeight: 5,
                            icons: [
                              {
                                icon: {
                                  path: google.maps.SymbolPath
                                    .FORWARD_OPEN_ARROW,
                                  scale: 2.2,
                                  strokeOpacity: 0.9,
                                },
                                offset: "12px",
                                repeat: "40px",
                              },
                            ],
                          }}
                        />
                      )}

                      {pickupPoint && (
                        <Marker
                          position={pickupPoint}
                          title="Pickup"
                          icon={{
                            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                            scale: 5,
                            fillColor: "#fbbf24",
                            fillOpacity: 1,
                            strokeColor: "#fff",
                            strokeWeight: 2,
                          }}
                        />
                      )}

                      {deliveryPoint && (
                        <Marker
                          position={deliveryPoint}
                          title="Dropoff"
                          icon={{
                            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                            scale: 5,
                            fillColor: "#fb923c",
                            fillOpacity: 1,
                            strokeColor: "#fff",
                            strokeWeight: 2,
                          }}
                        />
                      )}

                      {currentPoint && (
                        <Marker
                          position={currentPoint}
                          title="Current position"
                          icon={{
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 7,
                            fillColor: "#22c55e",
                            fillOpacity: 1,
                            strokeColor: "#fff",
                            strokeWeight: 2,
                          }}
                        />
                      )}

                      {shortcutPoints.map((point, index) => (
                        <Marker
                          key={`${point.lat}-${point.lng}-${index}`}
                          position={point}
                          title={`Shortcut point ${index + 1}`}
                          label={`${index + 1}`}
                        />
                      ))}

                      {shortcutPoints.length === 2 && (
                        <Polyline
                          path={shortcutPoints}
                          options={{
                            strokeColor: "#ef4444",
                            strokeOpacity: 1,
                            strokeWeight: 4,
                          }}
                        />
                      )}
                    </GoogleMap>

                    <MapLegend
                      title="Route key"
                      className="top-2 right-2 max-w-[220px]"
                      items={[
                        {
                          color: "#fbbf24",
                          opacity: 0.4,
                          label: "Carrier → Pickup",
                        },
                        {
                          color: "#fb923c",
                          opacity: 0.4,
                          label: "Pickup → Dropoff",
                        },
                        {
                          color: "#14b8a6",
                          opacity: 1,
                          label: "Active progress",
                        },
                        {
                          color: "#f59e0b",
                          opacity: 0.85,
                          label: "Planned route",
                        },
                        {
                          color: "#ef4444",
                          opacity: 1,
                          label: "Shortcut segment",
                        },
                      ]}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>Selected points: {shortcutPoints.length}/2</span>
                    <button
                      type="button"
                      onClick={() => setShortcutPoints([])}
                      className="rounded border border-gray-300 px-2 py-1 hover:bg-gray-100"
                    >
                      Reset points
                    </button>
                  </div>

                  <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={vehicleSpecificShortcut}
                      onChange={(e) =>
                        setVehicleSpecificShortcut(e.target.checked)
                      }
                    />
                    Specific to my vehicle type
                  </label>
                </div>
              )}

              <textarea
                value={deviationNote}
                onChange={(e) => setDeviationNote(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                placeholder="Extra note (optional): temporary closure reason, safer path, time saved, etc."
              />
            </div>

            <div className="flex justify-end gap-2 border-t px-6 py-4">
              <button
                onClick={() => setShowDeliveryRouteModal(false)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeliveredWithRouteContext}
                disabled={
                  loading ||
                  (deviationReason === "shortcut" &&
                    shortcutPoints.length !== 2)
                }
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              >
                Confirm Delivered
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
