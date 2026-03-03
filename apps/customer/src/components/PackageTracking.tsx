import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { db, realtimeDb } from "@config";
import { doc, onSnapshot } from "firebase/firestore";
import { ref as rtdbRef, onValue } from "firebase/database";
import { toast, Toaster } from "react-hot-toast";
import { format } from "date-fns";
import DeliveryTimeline from "./DeliveryTimeline";

interface DeliveryData {
  id: string;
  trackingCode: string;
  status: string;
  customerName: string;
  customerPhone: string;
  pickupAddress: string;
  deliveryAddress: string;
  packageDescription: string;
  carrierName?: string;
  carrierPhone?: string;
  carrierId?: string;
  estimatedDelivery?: Date;
  pickupTime?: Date;
  deliveryTime?: Date;
  createdAt: Date;
  acceptedAt?: Date;
  assignedAt?: Date;
  currentLocation?: {
    lat: number;
    lng: number;
    timestamp?: any;
  };
  pickupLocation?: {
    lat: number;
    lng: number;
    address?: string;
  };
  deliveryLocation?: {
    lat: number;
    lng: number;
    address?: string;
  };
  packageValue?: number;
  paymentMethod?: string;
  otpCode?: string;
  otpVerified?: boolean;
  proofOfDelivery?: {
    otp?: string;
    verified?: boolean;
  };
}

interface CarrierLocation {
  lat: number;
  lng: number;
  timestamp?: number;
  accuracy?: number;
}

interface PackageTrackingPageProps {
  isGuest?: boolean;
}

export default function PackageTrackingPage({
  isGuest = false,
}: PackageTrackingPageProps) {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [delivery, setDelivery] = useState<DeliveryData | null>(null);
  const [carrierLocation, setCarrierLocation] =
    useState<CarrierLocation | null>(null);
  const [toPickupDirections, setToPickupDirections] = useState<any>(null);
  const [toDropoffDirections, setToDropoffDirections] = useState<any>(null);
  const [fullPlanDirections, setFullPlanDirections] = useState<any>(null);
  const [routeMeta, setRouteMeta] = useState<{
    distanceText?: string;
    durationText?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  // Fixed zoom level for the tracking map - could be made dynamic in future
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mapZoom = 15;

  useEffect(() => {
    if (!id) {
      toast.error("No delivery ID provided");
      navigate(isGuest ? "/guest-track" : "/orders");
      return;
    }

    // Subscribe to delivery data
    const docRef = doc(db, "deliveries", id);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setDelivery({
          id: docSnap.id,
          trackingCode: data.trackingCode,
          status: data.status,
          customerName: data.customerName,
          customerPhone: data.customerPhone,
          pickupAddress: data.pickupAddress,
          deliveryAddress: data.deliveryAddress,
          packageDescription: data.packageDescription,
          carrierName: data.carrierName,
          carrierPhone: data.carrierPhone,
          carrierId: data.carrierId,
          estimatedDelivery: data.estimatedDelivery?.toDate(),
          pickupTime: data.pickupTime?.toDate(),
          deliveryTime: data.deliveryTime?.toDate(),
          createdAt: data.createdAt?.toDate() || new Date(),
          acceptedAt: data.acceptedAt?.toDate(),
          assignedAt: data.assignedAt?.toDate(),
          currentLocation: data.currentLocation,
          pickupLocation: data.pickupLocation,
          deliveryLocation: data.deliveryLocation,
          packageValue: data.packageValue,
          paymentMethod: data.paymentMethod,
          otpCode: data.otpCode,
          otpVerified: data.otpVerified,
          proofOfDelivery: data.proofOfDelivery,
        });
        setLoading(false);
      } else {
        toast.error("Delivery not found");
        navigate(isGuest ? "/guest-track" : "/orders");
      }
    });

    return () => unsubscribe();
  }, [id, navigate, isGuest]);

  // Subscribe to real-time carrier location
  useEffect(() => {
    if (!delivery?.carrierId && delivery?.status === "pending") {
      return; // No carrier assigned yet
    }

    // Try to get location from delivery's currentLocation first
    if (delivery?.currentLocation?.lat) {
      setCarrierLocation({
        lat: delivery.currentLocation.lat,
        lng: delivery.currentLocation.lng,
      });
    }

    // Also subscribe to real-time updates if carrier is assigned
    if (delivery?.carrierId) {
      const trackRef = rtdbRef(realtimeDb, `tracks/${delivery.carrierId}`);
      const unsubscribe = onValue(trackRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setCarrierLocation({
            lat: data.lat,
            lng: data.lng,
            timestamp: data.timestamp || data.timestampMs,
            accuracy: data.accuracy,
          });
        }
      });

      return () => unsubscribe();
    }
  }, [delivery?.carrierId, delivery?.currentLocation, delivery?.status]);

  useEffect(() => {
    if (!window.google?.maps || !delivery?.deliveryLocation) {
      setToPickupDirections(null);
      setToDropoffDirections(null);
      setFullPlanDirections(null);
      setRouteMeta(null);
      return;
    }

    const deliveryPoint = {
      lat: delivery.deliveryLocation.lat,
      lng: delivery.deliveryLocation.lng,
    };

    const pickupPoint = delivery.pickupLocation
      ? {
          lat: delivery.pickupLocation.lat,
          lng: delivery.pickupLocation.lng,
        }
      : null;

    const livePoint = carrierLocation
      ? { lat: carrierLocation.lat, lng: carrierLocation.lng }
      : delivery.currentLocation
        ? {
            lat: delivery.currentLocation.lat,
            lng: delivery.currentLocation.lng,
          }
        : null;

    const service = new window.google.maps.DirectionsService();
    let cancelled = false;

    const getRoute = (
      origin: { lat: number; lng: number },
      destination: { lat: number; lng: number },
    ) =>
      new Promise<any | null>((resolve) => {
        service.route(
          {
            origin,
            destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result: any, status: any) => {
            if (status === "OK" && result) {
              resolve(result);
              return;
            }
            resolve(null);
          },
        );
      });

    (async () => {
      const isBeforePickup = ["pending", "assigned", "accepted"].includes(
        delivery.status,
      );

      const [pickupResult, dropoffResult, fullPlanResult] = await Promise.all([
        isBeforePickup && livePoint && pickupPoint
          ? getRoute(livePoint, pickupPoint)
          : Promise.resolve(null),
        isBeforePickup
          ? pickupPoint
            ? getRoute(pickupPoint, deliveryPoint)
            : Promise.resolve(null)
          : livePoint
            ? getRoute(livePoint, deliveryPoint)
            : pickupPoint
              ? getRoute(pickupPoint, deliveryPoint)
              : Promise.resolve(null),
        pickupPoint
          ? getRoute(pickupPoint, deliveryPoint)
          : Promise.resolve(null),
      ]);

      if (cancelled) return;

      setToPickupDirections(pickupResult);
      setToDropoffDirections(dropoffResult);
      setFullPlanDirections(fullPlanResult);

      const route = dropoffResult?.routes?.[0];
      if (route?.legs?.length) {
        const totalMeters = route.legs.reduce(
          (sum: number, leg: any) => sum + (leg.distance?.value || 0),
          0,
        );
        const totalSeconds = route.legs.reduce(
          (sum: number, leg: any) => sum + (leg.duration?.value || 0),
          0,
        );
        setRouteMeta({
          distanceText: `${(totalMeters / 1000).toFixed(1)} km`,
          durationText: `${Math.max(1, Math.round(totalSeconds / 60))} min`,
        });
      } else {
        setRouteMeta(null);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [
    delivery?.status,
    delivery?.pickupLocation,
    delivery?.deliveryLocation,
    delivery?.currentLocation,
    carrierLocation,
  ]);

  const mapCenter = carrierLocation || {
    lat: parseFloat(delivery?.currentLocation?.lat?.toString() || "-29.6100"),
    lng: parseFloat(delivery?.currentLocation?.lng?.toString() || "28.2336"),
  };

  const getStatusBadgeColor = (status: string) => {
    const colors: { [key: string]: string } = {
      pending: "bg-gray-100 text-gray-800",
      assigned: "bg-blue-100 text-blue-800",
      accepted: "bg-blue-100 text-blue-800",
      picked_up: "bg-purple-100 text-purple-800",
      in_transit: "bg-yellow-100 text-yellow-800",
      out_for_delivery: "bg-orange-100 text-orange-800",
      delivered: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getStatusLabel = (status: string) => {
    const labels: { [key: string]: string } = {
      pending: "Pending",
      assigned: "Driver Assigned",
      accepted: "Accepted",
      picked_up: "Picked Up",
      in_transit: "In Transit",
      out_for_delivery: "Out for Delivery",
      delivered: "Delivered",
      cancelled: "Cancelled",
    };
    return labels[status] || status;
  };

  const displayOtp = delivery?.proofOfDelivery?.otp || delivery?.otpCode;
  const shouldShowOtp =
    !!delivery &&
    ["picked_up", "in_transit", "out_for_delivery"].includes(delivery.status);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading package tracking...</p>
        </div>
      </div>
    );
  }

  if (!delivery) {
    return null; // Handled by the useEffect redirect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Track Your Package
              </h1>
              <p className="text-gray-600 mt-1">
                Tracking Code:{" "}
                <span className="font-mono font-semibold text-blue-600">
                  {delivery.trackingCode}
                </span>
              </p>
            </div>
            {!isGuest && (
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
              >
                ← Back
              </button>
            )}
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2">
            <span
              className={`px-4 py-2 rounded-full font-medium ${getStatusBadgeColor(
                delivery.status,
              )}`}
            >
              {getStatusLabel(delivery.status)}
            </span>
            {delivery.estimatedDelivery && (
              <span className="text-gray-600">
                Estimated: {format(delivery.estimatedDelivery, "MMM dd, yyyy")}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Timeline and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Section */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-96 bg-gray-100">
                {typeof window !== "undefined" && (
                  <GoogleMap
                    zoom={mapZoom}
                    center={mapCenter}
                    mapContainerStyle={{ height: "100%", width: "100%" }}
                    options={{
                      disableDefaultUI: false,
                      styles: [
                        {
                          featureType: "poi",
                          elementType: "labels",
                          stylers: [{ visibility: "off" }],
                        },
                      ],
                    }}
                  >
                    {fullPlanDirections && (
                      <DirectionsRenderer
                        directions={fullPlanDirections}
                        options={{
                          suppressMarkers: true,
                          polylineOptions: {
                            strokeColor: "#94a3b8",
                            strokeOpacity: 0.45,
                            strokeWeight: 4,
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
                          },
                        }}
                      />
                    )}

                    {toPickupDirections && (
                      <DirectionsRenderer
                        directions={toPickupDirections}
                        options={{
                          suppressMarkers: true,
                          polylineOptions: {
                            strokeColor: "#8b5cf6",
                            strokeOpacity: 0.95,
                            strokeWeight: 6,
                          },
                        }}
                      />
                    )}

                    {toDropoffDirections && (
                      <DirectionsRenderer
                        directions={toDropoffDirections}
                        options={{
                          suppressMarkers: true,
                          polylineOptions: {
                            strokeColor: "#f59e0b",
                            strokeOpacity: 0.95,
                            strokeWeight: 6,
                          },
                        }}
                      />
                    )}

                    {/* Delivery Location */}
                    {delivery.currentLocation && (
                      <Marker
                        position={{
                          lat: delivery.currentLocation.lat,
                          lng: delivery.currentLocation.lng,
                        }}
                        title="Current Location"
                        icon={{
                          path: google.maps.SymbolPath.CIRCLE,
                          scale: 8,
                          fillColor: "#ef4444",
                          fillOpacity: 1,
                          strokeColor: "#fff",
                          strokeWeight: 2,
                        }}
                      />
                    )}

                    {/* Carrier Location */}
                    {carrierLocation && delivery.status !== "delivered" && (
                      <Marker
                        position={{
                          lat: carrierLocation.lat,
                          lng: carrierLocation.lng,
                        }}
                        title={delivery.carrierName || "Carrier"}
                        icon={{
                          path: google.maps.SymbolPath.CIRCLE,
                          scale: 10,
                          fillColor: "#3b82f6",
                          fillOpacity: 1,
                          strokeColor: "#fff",
                          strokeWeight: 2,
                        }}
                      />
                    )}
                  </GoogleMap>
                )}
              </div>

              {/* Location Info */}
              <div className="p-6 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase">
                      Pickup Location
                    </p>
                    <p className="text-gray-800 font-medium mt-1">
                      {delivery.pickupAddress}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase">
                      Delivery Location
                    </p>
                    <p className="text-gray-800 font-medium mt-1">
                      {delivery.deliveryAddress}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-xs text-blue-700 font-semibold uppercase">
                      Active Route
                    </p>
                    <p className="text-sm text-blue-900 mt-1">
                      {routeMeta?.distanceText
                        ? `${routeMeta.distanceText} • ${routeMeta.durationText}`
                        : "Route unavailable (waiting for valid coordinates)"}
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <p className="text-xs text-slate-600 font-semibold uppercase">
                      Route colors
                    </p>
                    <ul className="text-sm text-slate-800 mt-1 space-y-1">
                      <li>⬤ Purple: Current → Pickup</li>
                      <li>⬤ Orange: Current/Pickup → Dropoff</li>
                      <li>⬤ Gray dashed: Planned baseline</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <DeliveryTimeline
              status={delivery.status}
              pickupTime={delivery.pickupTime}
              deliveryTime={delivery.deliveryTime}
              acceptedAt={delivery.acceptedAt}
              assignedAt={delivery.assignedAt}
              createdAt={delivery.createdAt}
            />
          </div>

          {/* Right: Details Panel */}
          <div className="space-y-6">
            {/* Carrier Info */}
            {delivery.carrierName && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Driver Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Driver Name</p>
                    <p className="text-gray-800 font-medium">
                      {delivery.carrierName}
                    </p>
                  </div>
                  {delivery.carrierPhone && (
                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <a
                        href={`tel:${delivery.carrierPhone}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {delivery.carrierPhone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Package Info */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Package Details
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Description</p>
                  <p className="text-gray-800 font-medium">
                    {delivery.packageDescription}
                  </p>
                </div>
                {delivery.packageValue && (
                  <div>
                    <p className="text-sm text-gray-500">Package Value</p>
                    <p className="text-gray-800 font-medium">
                      M.{delivery.packageValue.toFixed(2)}
                    </p>
                  </div>
                )}
                {delivery.paymentMethod && (
                  <div>
                    <p className="text-sm text-gray-500">Payment Method</p>
                    <p className="text-gray-800 font-medium capitalize">
                      {delivery.paymentMethod.replace("_", " ")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Delivery OTP */}
            {shouldShowOtp && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">
                  Delivery OTP
                </h3>
                {displayOtp ? (
                  <>
                    <p className="text-2xl font-bold tracking-widest text-amber-800">
                      {displayOtp}
                    </p>
                    <p className="text-xs text-amber-700 mt-2">
                      Share this OTP with the carrier only when your package is
                      physically delivered.
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-amber-800">
                    OTP is generated after pickup.
                  </p>
                )}
              </div>
            )}

            {/* Customer Info */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recipient Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="text-gray-800 font-medium">
                    {delivery.customerName}
                  </p>
                </div>
                {delivery.customerPhone && (
                  <div>
                    <p className="text-sm text-gray-500">Contact</p>
                    <a
                      href={`tel:${delivery.customerPhone}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {delivery.customerPhone}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Last Update */}
            {carrierLocation?.timestamp && (
              <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                <p className="font-medium">Last Update</p>
                <p>
                  {format(
                    new Date(carrierLocation.timestamp),
                    "MMM dd, yyyy hh:mm a",
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
