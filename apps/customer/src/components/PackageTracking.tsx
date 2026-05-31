import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  DirectionsRenderer,
  GoogleMap,
  InfoWindow,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import {
  db,
  realtimeDb,
  auth,
  formatEtaCountdown,
  getTrackingEtaLabel,
  formatRouteNetworkSegmentType,
  getDisplayRouteNetworkSegments,
  getRouteNetworkSegmentStyle,
  isTrackingBeforePickup,
  shouldShowTrackingCarrierMarker,
  subscribeRouteNetworkSegments,
  toDeliveryTrackingRouteSummary,
  type DeliveryTrackingRouteSummary,
  type RouteNetworkSegment,
} from "@config";
import { doc, onSnapshot } from "firebase/firestore";
import { ref as rtdbRef, onValue } from "firebase/database";
import { toast, Toaster } from "react-hot-toast";
import { format } from "date-fns";
import DeliveryTimeline from "./DeliveryTimeline";

const formatMinutes = (secs: number): string => {
  const mins = Math.round(secs / 60);
  if (mins === 0) return "< 1 min";
  return mins < 60 ? `${mins} min` : `${Math.floor(mins / 60)}h ${mins % 60}m`;
};

const DIRECTIONS_REQUEST_THROTTLE_MS = 12_000;
const DIRECTIONS_COORD_DECIMALS = 4;

type DirectionsPoint = { lat: number; lng: number };

const toDirectionsPointKey = (point: DirectionsPoint) => {
  const lat = Number(point.lat.toFixed(DIRECTIONS_COORD_DECIMALS));
  const lng = Number(point.lng.toFixed(DIRECTIONS_COORD_DECIMALS));
  return `${lat},${lng}`;
};

const buildDirectionsRequestKey = (
  origin: DirectionsPoint,
  destination: DirectionsPoint,
  waypoints: Array<{ location: DirectionsPoint; stopover: true }> = [],
) => {
  const waypointKey = waypoints
    .map((waypoint) => toDirectionsPointKey(waypoint.location))
    .join("|");
  return `${toDirectionsPointKey(origin)}->${toDirectionsPointKey(destination)}::${waypointKey}`;
};

// Handles plain objects { lat, lng }, Firestore GeoPoints (lat is a function),
// and alternative spellings (latitude/longitude).
const asLatLng = (value: any): { lat: number; lng: number } | null => {
  if (!value) return null;
  const latRaw =
    typeof value.lat === "function"
      ? value.lat()
      : (value.lat ?? value.latitude ?? value._lat);
  const lngRaw =
    typeof value.lng === "function"
      ? value.lng()
      : (value.lng ??
        value.lon ??
        value.long ??
        value.longitude ??
        value._long);
  const lat = Number(latRaw);
  const lng = Number(lngRaw);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  return { lat, lng };
};

type GradientRouteSegment = {
  id: string;
  path: { lat: number; lng: number }[];
  color: string;
};

const clampGradientProgress = (progress: number) =>
  Math.min(1, Math.max(0, progress));

const getGradientRouteColor = (progress: number) => {
  const hue = Math.round(4 + clampGradientProgress(progress) * 116);
  return `hsl(${hue}, 78%, 45%)`;
};

const toDirectionPath = (
  directions: any,
): Array<{ lat: number; lng: number }> => {
  const overview = directions?.routes?.[0]?.overview_path ?? [];
  return overview
    .map((point: any) => ({
      lat: typeof point.lat === "function" ? point.lat() : point.lat,
      lng: typeof point.lng === "function" ? point.lng() : point.lng,
    }))
    .filter(
      (point: { lat: number; lng: number }) =>
        Number.isFinite(point.lat) && Number.isFinite(point.lng),
    );
};

const buildGradientRouteSegments = (
  points: Array<{ lat: number; lng: number }>,
  prefix: string,
  maxSegments = 14,
): GradientRouteSegment[] => {
  if (points.length < 2) return [];

  const lastPointIndex = points.length - 1;
  const segmentCount = Math.min(maxSegments, lastPointIndex);

  return Array.from({ length: segmentCount }, (_, index) => {
    const startIndex = Math.floor((index * lastPointIndex) / segmentCount);
    const rawEndIndex =
      Math.floor(((index + 1) * lastPointIndex) / segmentCount) + 1;
    const endIndex = Math.min(
      points.length,
      Math.max(startIndex + 2, rawEndIndex),
    );

    return {
      id: `${prefix}-${index}`,
      path: points.slice(startIndex, endIndex),
      color: getGradientRouteColor(
        segmentCount === 1 ? 1 : index / (segmentCount - 1),
      ),
    };
  }).filter((segment) => segment.path.length > 1);
};

const getGradientSegmentOptions = (
  strokeColor: string,
  strokeOpacity: number,
  strokeWeight: number,
): google.maps.PolylineOptions => ({
  strokeColor,
  strokeOpacity,
  strokeWeight,
  clickable: false,
  zIndex: Math.round(strokeWeight * 10),
  icons: [
    {
      icon: {
        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
        scale: Math.max(2.1, Math.min(3.1, strokeWeight / 2.25)),
        strokeColor,
        strokeOpacity: Math.min(1, strokeOpacity + 0.12),
      },
      offset: "84%",
    },
  ],
});

interface DeliveryData {
  id: string;
  trackingCode: string;
  customerId?: string;
  customerEmail?: string;
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
  senderEmail?: string;
  receiverEmail?: string;
  otp?: {
    pickup?: { code?: string; verified?: boolean };
    delivery?: { code?: string; verified?: boolean };
  };
  proofOfDelivery?: {
    otp?: string;
    verified?: boolean;
  };
  routeReviews?: Array<{
    type: string;
    reason?: string;
    source?: string;
    temporary?: boolean;
    start?: { lat: number; lng: number };
    end?: { lat: number; lng: number };
  }>;
  routeFeedback?: Array<{
    type: string;
    reason?: string;
    note?: string;
    source?: string;
    start?: { lat: number; lng: number };
    end?: { lat: number; lng: number };
  }>;
  trackingRouteSummary?: DeliveryTrackingRouteSummary | null;
  eta?: {
    pickupEtaMs: number | null;
    deliveryEtaMs: number | null;
    computedAtMs: number;
    source: string;
  } | null;
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
  const [managedSegments, setManagedSegments] = useState<RouteNetworkSegment[]>(
    [],
  );
  const [carrierLocation, setCarrierLocation] =
    useState<CarrierLocation | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [toPickupDirections, setToPickupDirections] = useState<any>(null);
  const [toDropoffDirections, setToDropoffDirections] = useState<any>(null);
  const [fullPlanDirections, setFullPlanDirections] = useState<any>(null);
  const [linkedRouteDirections, setLinkedRouteDirections] = useState<any>(null);
  const [routeMeta, setRouteMeta] = useState<{
    distanceText?: string;
    durationText?: string;
  } | null>(null);
  const [selectedMapInfo, setSelectedMapInfo] = useState<{
    position: { lat: number; lng: number };
    title: string;
    details: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  // Tracks whether carrierLocation came from the live RTDB feed (vs a stale Firestore seed).
  const [carrierLocationIsLive, setCarrierLocationIsLive] = useState(false);
  // Persisted ETA countdown (from delivery.eta stored in Firestore)
  const [persistedEtaRemainingMs, setPersistedEtaRemainingMs] = useState<
    number | null
  >(null);
  const directionsRequestCacheRef = useRef<
    Record<string, { key: string; at: number; result: any | null }>
  >({});

  useEffect(() => {
    directionsRequestCacheRef.current = {};
  }, [delivery?.id]);

  useEffect(() => {
    const eta = delivery?.eta;
    if (!eta) {
      setPersistedEtaRemainingMs(null);
      return;
    }
    const prePickup = isTrackingBeforePickup(delivery?.status);
    const etaMs = prePickup ? eta.pickupEtaMs : eta.deliveryEtaMs;
    if (!etaMs) {
      setPersistedEtaRemainingMs(null);
      return;
    }
    const tick = () =>
      setPersistedEtaRemainingMs(Math.max(0, etaMs - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [delivery?.eta, delivery?.status]);

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
          customerId: data.customerId,
          customerEmail: data.customerEmail,
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
          currentLocation: asLatLng(data.currentLocation) ?? undefined,
          pickupLocation: asLatLng(data.pickupLocation) ?? undefined,
          deliveryLocation: asLatLng(data.deliveryLocation) ?? undefined,
          packageValue: data.packageValue,
          paymentMethod: data.paymentMethod,
          otpCode: data.otpCode,
          otpVerified: data.otpVerified,
          senderEmail: data.senderEmail,
          receiverEmail: data.receiverEmail,
          otp: data.otp,
          proofOfDelivery: data.proofOfDelivery,
          routeReviews: data.routeReviews || [],
          routeFeedback: data.routeFeedback || [],
          trackingRouteSummary: toDeliveryTrackingRouteSummary(
            data.trackingRouteSummary,
          ),
          eta: data.eta ?? null,
        });
        setLoading(false);
      } else {
        toast.error("Delivery not found");
        navigate(isGuest ? "/guest-track" : "/orders");
      }
    });

    return () => unsubscribe();
  }, [id, navigate, isGuest]);

  useEffect(() => {
    return subscribeRouteNetworkSegments(setManagedSegments);
  }, []);

  // Subscribe to real-time carrier location via deliveryTracks (public read — works for
  // unauthenticated guest customers). tracks/{uid} requires auth so we never use it here.
  useEffect(() => {
    // Always reset the live-GPS flag when the delivery or its status changes.
    setCarrierLocationIsLive(false);

    if (!delivery?.id || delivery.status === "pending") {
      return; // No delivery loaded or no carrier assigned yet
    }

    // Seed from Firestore snapshot immediately while RTDB subscription loads.
    // This does NOT set carrierLocationIsLive — the Firestore currentLocation may be
    // stale (e.g. same as pickup address) and must not drive ETA calculations.
    if (delivery.currentLocation?.lat) {
      setCarrierLocation({
        lat: delivery.currentLocation.lat,
        lng: delivery.currentLocation.lng,
      });
    }

    // deliveryTracks/{deliveryId} has .read: true — accessible to guest customers
    const trackRef = rtdbRef(realtimeDb, `deliveryTracks/${delivery.id}`);
    const unsubscribe = onValue(trackRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const ts = data.timestamp || data.timestampMs;
        setCarrierLocation({
          lat: data.lat,
          lng: data.lng,
          timestamp: ts,
          accuracy: data.accuracy,
        });
        // Only treat as live if the GPS ping has a timestamp AND is recent (< 30 min).
        // No timestamp → treat as stale; old data from a previous session can give
        // a false "1 min" ETA if the carrier was parked at the pickup address.
        const isRecent = Boolean(ts) && Date.now() - ts < 30 * 60 * 1000;
        setCarrierLocationIsLive(isRecent);
      }
    });

    return () => unsubscribe();
  }, [delivery?.id, delivery?.currentLocation, delivery?.status]);

  useEffect(() => {
    if (!window.google?.maps || !delivery?.deliveryLocation) {
      setToPickupDirections(null);
      setToDropoffDirections(null);
      setFullPlanDirections(null);
      setLinkedRouteDirections(null);
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

    // For pre-pickup approach: only use confirmed live RTDB GPS to avoid routing from a
    // stale Firestore seed that may equal the pickup address (causing a false "1 min" ETA).
    const approachPoint =
      carrierLocationIsLive && carrierLocation
        ? { lat: carrierLocation.lat, lng: carrierLocation.lng }
        : null;

    // For post-pickup active route: any carrier location (live or Firestore seed) is useful.
    const activePoint = carrierLocation
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
      routeId: string,
      origin: { lat: number; lng: number },
      destination: { lat: number; lng: number },
      waypoints: Array<{
        location: { lat: number; lng: number };
        stopover: true;
      }> = [],
    ) =>
      new Promise<any | null>((resolve) => {
        const requestKey = buildDirectionsRequestKey(
          origin,
          destination,
          waypoints,
        );
        const cached = directionsRequestCacheRef.current[routeId];
        const now = Date.now();
        if (
          cached &&
          cached.key === requestKey &&
          now - cached.at < DIRECTIONS_REQUEST_THROTTLE_MS
        ) {
          resolve(cached.result);
          return;
        }

        service.route(
          {
            origin,
            destination,
            waypoints,
            optimizeWaypoints: false,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result: any, status: any) => {
            const normalizedResult = status === "OK" && result ? result : null;
            directionsRequestCacheRef.current[routeId] = {
              key: requestKey,
              at: Date.now(),
              result: normalizedResult,
            };
            resolve(normalizedResult);
          },
        );
      });

    (async () => {
      const isBeforePickup = ["pending", "assigned", "accepted"].includes(
        delivery.status,
      );

      const summaryChain = (delivery.trackingRouteSummary?.routeChain || [])
        .filter(
          (stop) => Number.isFinite(stop.lat) && Number.isFinite(stop.lng),
        )
        .slice(0, 24);
      const linkedOrigin = isBeforePickup ? approachPoint : activePoint;
      const linkedDestination = summaryChain.length
        ? {
            lat: summaryChain[summaryChain.length - 1].lat,
            lng: summaryChain[summaryChain.length - 1].lng,
          }
        : null;
      const linkedWaypoints = summaryChain.slice(0, -1).map((stop) => ({
        location: { lat: stop.lat, lng: stop.lng },
        stopover: true as const,
      }));

      const [pickupResult, dropoffResult, fullPlanResult, linkedResult] =
        await Promise.all([
          // Approach route (carrier → pickup): only pre-pickup AND live RTDB GPS.
          isBeforePickup && approachPoint && pickupPoint
            ? getRoute("approach", approachPoint, pickupPoint)
            : Promise.resolve(null),
          // Active delivery route (carrier → dropoff): only post-pickup.
          // Pre-pickup this is null so fullPlanResult alone draws the ghost route,
          // preventing double-drawing of the same pickup→delivery segment.
          !isBeforePickup && activePoint
            ? getRoute("dropoff", activePoint, deliveryPoint)
            : Promise.resolve(null),
          // Ghost plan (pickup → delivery): always computed as baseline reference.
          pickupPoint
            ? getRoute("full-plan", pickupPoint, deliveryPoint)
            : Promise.resolve(null),
          linkedOrigin && linkedDestination
            ? getRoute(
                "linked",
                linkedOrigin,
                linkedDestination,
                linkedWaypoints,
              )
            : Promise.resolve(null),
        ]);

      if (cancelled) return;

      setToPickupDirections(
        isBeforePickup ? linkedResult || pickupResult : null,
      );
      setToDropoffDirections(
        !isBeforePickup ? linkedResult || dropoffResult : null,
      );
      setFullPlanDirections(fullPlanResult);
      setLinkedRouteDirections(linkedResult);

      // Post-pickup: use the active carrier→delivery leg for distance/duration.
      // Pre-pickup: dropoffResult is null; fall back to ghost plan for distance display.
      const route = (
        linkedResult ??
        dropoffResult ??
        pickupResult ??
        fullPlanResult
      )?.routes?.[0];
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
          distanceText: `${parseFloat((totalMeters / 1000).toFixed(2))} km`,
          durationText: formatMinutes(totalSeconds),
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
    carrierLocationIsLive,
  ]);

  const isBeforePickupStatus = isTrackingBeforePickup(delivery?.status);
  const showCarrierMarker = shouldShowTrackingCarrierMarker(delivery?.status);
  const etaLabel = getTrackingEtaLabel(delivery?.status);

  const etaToPickupText: string | null = (() => {
    const legs = toPickupDirections?.routes?.[0]?.legs;
    if (!legs) return null;
    const secs = legs.reduce(
      (s: number, l: any) => s + (l.duration?.value || 0),
      0,
    );
    return formatMinutes(secs);
  })();

  const etaToDeliveryText: string | null = (() => {
    const legs = toDropoffDirections?.routes?.[0]?.legs;
    if (!legs) return null;
    const secs = legs.reduce(
      (s: number, l: any) => s + (l.duration?.value || 0),
      0,
    );
    return formatMinutes(secs);
  })();

  // Center on pickup pre-pickup (carrier pin is hidden from customer);
  // center on live carrier or Firestore snapshot post-pickup.
  // Memoized so the object reference is stable — prevents @react-google-maps/api from
  // calling map.panTo() on every render and fighting with our fitBounds call.
  const mapCenter = useMemo(
    () =>
      isBeforePickupStatus && delivery?.pickupLocation
        ? { lat: delivery.pickupLocation.lat, lng: delivery.pickupLocation.lng }
        : carrierLocation
          ? { lat: carrierLocation.lat, lng: carrierLocation.lng }
          : delivery?.currentLocation
            ? {
                lat: delivery.currentLocation.lat,
                lng: delivery.currentLocation.lng,
              }
            : { lat: -29.61, lng: 28.2336 },
    [
      isBeforePickupStatus,
      delivery?.pickupLocation,
      carrierLocation,
      delivery?.currentLocation,
    ],
  );

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

  const authEmail = auth.currentUser?.email?.toLowerCase() || "";
  const isOrderOwnerById =
    !!delivery?.customerId && auth.currentUser?.uid === delivery.customerId;
  const isOrderOwnerByEmail =
    !!authEmail &&
    [delivery?.customerEmail, delivery?.senderEmail]
      .filter((value): value is string => !!value)
      .some((value) => value.toLowerCase() === authEmail);
  const isOrderOwner =
    !!auth.currentUser && (isOrderOwnerById || isOrderOwnerByEmail);
  const pickupOtp = delivery?.otp?.pickup?.code;
  const deliveryOtp =
    delivery?.otp?.delivery?.code ||
    delivery?.proofOfDelivery?.otp ||
    delivery?.otpCode;
  const shouldShowPickupOtp =
    !!delivery &&
    [
      "assigned",
      "accepted",
      "picked_up",
      "in_transit",
      "out_for_delivery",
    ].includes(delivery.status);
  const shouldShowDeliveryOtp =
    !!delivery &&
    [
      "assigned",
      "accepted",
      "picked_up",
      "in_transit",
      "out_for_delivery",
    ].includes(delivery.status);
  const freshnessMinutes = carrierLocation?.timestamp
    ? Math.max(0, Math.round((Date.now() - carrierLocation.timestamp) / 60000))
    : null;

  const visibleManagedSegments = useMemo(
    () =>
      getDisplayRouteNetworkSegments(
        managedSegments,
        [
          delivery?.pickupLocation,
          delivery?.deliveryLocation,
          carrierLocation,
          delivery?.currentLocation,
        ],
        { thresholdKm: 10, fallbackLimit: 120 },
      ),
    [
      carrierLocation,
      delivery?.currentLocation,
      delivery?.deliveryLocation,
      delivery?.pickupLocation,
      managedSegments,
    ],
  );

  const fullPlanGradientSegments = useMemo(
    () =>
      buildGradientRouteSegments(
        toDirectionPath(fullPlanDirections),
        "full-plan",
      ),
    [fullPlanDirections],
  );

  const linkedRouteGradientSegments = useMemo(
    () =>
      buildGradientRouteSegments(
        toDirectionPath(linkedRouteDirections),
        "linked-route",
      ),
    [linkedRouteDirections],
  );

  const activeRouteGradientSegments = useMemo(
    () =>
      buildGradientRouteSegments(
        toDirectionPath(
          isBeforePickupStatus ? toPickupDirections : toDropoffDirections,
        ),
        "active-route",
      ),
    [isBeforePickupStatus, toDropoffDirections, toPickupDirections],
  );

  // Keep pickup and dropoff visible throughout the trip, and add the carrier once the
  // customer is allowed to see it.
  useEffect(() => {
    if (!mapInstance || !window.google?.maps) return;
    const currentDelivery = delivery;
    if (
      !currentDelivery?.pickupLocation &&
      !currentDelivery?.deliveryLocation &&
      !carrierLocation &&
      !currentDelivery?.currentLocation
    )
      return;
    const bounds = new window.google.maps.LatLngBounds();
    if (currentDelivery?.pickupLocation)
      bounds.extend(currentDelivery.pickupLocation);
    if (currentDelivery?.deliveryLocation)
      bounds.extend(currentDelivery.deliveryLocation);
    const visibleCarrierPoint =
      showCarrierMarker &&
      (carrierLocation || currentDelivery?.currentLocation);
    if (visibleCarrierPoint) bounds.extend(visibleCarrierPoint);
    mapInstance.fitBounds(bounds, 60);
  }, [
    carrierLocation,
    delivery?.currentLocation,
    delivery?.deliveryLocation,
    mapInstance,
    delivery?.pickupLocation,
    showCarrierMarker,
  ]);

  const focusPoint = (point?: { lat: number; lng: number } | null) => {
    if (!mapInstance || !point) return;
    mapInstance.panTo(point);
    mapInstance.setZoom(16);
  };

  const focusSegment = (segment: RouteNetworkSegment) => {
    if (!mapInstance || !window.google?.maps) return;
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(segment.start);
    bounds.extend(segment.end);
    mapInstance.fitBounds(bounds, 80);
  };

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
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`px-4 py-2 rounded-full font-medium ${getStatusBadgeColor(
                delivery.status,
              )}`}
            >
              {getStatusLabel(delivery.status)}
            </span>
            {isBeforePickupStatus && etaToPickupText && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-800 border border-emerald-200">
                ⏱ {etaLabel}: {etaToPickupText}
              </span>
            )}
            {isBeforePickupStatus &&
              !etaToPickupText &&
              persistedEtaRemainingMs !== null && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-800 border border-emerald-200">
                  ⏱ {etaLabel}:{" "}
                  {persistedEtaRemainingMs <= 0
                    ? "arriving now"
                    : formatEtaCountdown(persistedEtaRemainingMs)}
                </span>
              )}
            {!isBeforePickupStatus &&
              delivery.status !== "delivered" &&
              etaToDeliveryText && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-800 border border-emerald-200">
                  ⏱ {etaLabel}: {etaToDeliveryText}
                </span>
              )}
            {!isBeforePickupStatus &&
              delivery.status !== "delivered" &&
              !etaToDeliveryText &&
              persistedEtaRemainingMs !== null && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-800 border border-emerald-200">
                  ⏱ {etaLabel}:{" "}
                  {persistedEtaRemainingMs <= 0
                    ? "arriving now"
                    : formatEtaCountdown(persistedEtaRemainingMs)}
                </span>
              )}
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
                    center={mapCenter}
                    onLoad={(map) => setMapInstance(map)}
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
                    {/* Road between P and D */}
                    {fullPlanDirections && (
                      <DirectionsRenderer
                        directions={fullPlanDirections}
                        options={
                          {
                            suppressMarkers: true,
                            suppressBoundsUpdate: true,
                            suppressPolylines: true,
                          } as any
                        }
                      />
                    )}
                    {fullPlanGradientSegments.map((segment) => (
                      <Polyline
                        key={segment.id}
                        path={segment.path}
                        options={getGradientSegmentOptions(
                          segment.color,
                          0.36,
                          4,
                        )}
                      />
                    ))}

                    {linkedRouteDirections && (
                      <DirectionsRenderer
                        directions={linkedRouteDirections}
                        options={
                          {
                            suppressMarkers: true,
                            suppressBoundsUpdate: true,
                            suppressPolylines: true,
                          } as any
                        }
                      />
                    )}
                    {linkedRouteGradientSegments.map((segment) => (
                      <Polyline
                        key={segment.id}
                        path={segment.path}
                        options={getGradientSegmentOptions(
                          segment.color,
                          0.58,
                          5,
                        )}
                      />
                    ))}

                    {(isBeforePickupStatus
                      ? toPickupDirections
                      : toDropoffDirections) && (
                      <DirectionsRenderer
                        directions={
                          isBeforePickupStatus
                            ? toPickupDirections
                            : toDropoffDirections
                        }
                        options={
                          {
                            suppressMarkers: true,
                            suppressBoundsUpdate: true,
                            suppressPolylines: true,
                          } as any
                        }
                      />
                    )}
                    {activeRouteGradientSegments.map((segment) => (
                      <Polyline
                        key={segment.id}
                        path={segment.path}
                        options={getGradientSegmentOptions(
                          segment.color,
                          0.94,
                          6,
                        )}
                      />
                    ))}

                    {/* Pickup — green circle matching TrackingMap */}
                    {delivery.pickupLocation && (
                      <Marker
                        position={{
                          lat: delivery.pickupLocation.lat,
                          lng: delivery.pickupLocation.lng,
                        }}
                        title="Pickup"
                        onClick={() =>
                          setSelectedMapInfo({
                            position: {
                              lat: delivery.pickupLocation!.lat,
                              lng: delivery.pickupLocation!.lng,
                            },
                            title: "Pickup location",
                            details: [delivery.pickupAddress],
                          })
                        }
                        icon={{
                          path: google.maps.SymbolPath.CIRCLE,
                          scale: 9,
                          fillColor: "#059669",
                          fillOpacity: 1,
                          strokeColor: "#ffffff",
                          strokeWeight: 2,
                        }}
                      />
                    )}

                    {/* Dropoff — red circle matching TrackingMap */}
                    {delivery.deliveryLocation && (
                      <Marker
                        position={{
                          lat: delivery.deliveryLocation.lat,
                          lng: delivery.deliveryLocation.lng,
                        }}
                        title="Destination"
                        onClick={() =>
                          setSelectedMapInfo({
                            position: {
                              lat: delivery.deliveryLocation!.lat,
                              lng: delivery.deliveryLocation!.lng,
                            },
                            title: "Dropoff location",
                            details: [delivery.deliveryAddress],
                          })
                        }
                        icon={{
                          path: google.maps.SymbolPath.CIRCLE,
                          scale: 9,
                          fillColor: "#DC2626",
                          fillOpacity: 1,
                          strokeColor: "#ffffff",
                          strokeWeight: 2,
                        }}
                      />
                    )}

                    {/* Carrier — blue circle, only shown post-pickup */}
                    {carrierLocation && showCarrierMarker && (
                      <Marker
                        position={{
                          lat: carrierLocation.lat,
                          lng: carrierLocation.lng,
                        }}
                        title={delivery.carrierName || "Carrier"}
                        onClick={() =>
                          setSelectedMapInfo({
                            position: {
                              lat: carrierLocation.lat,
                              lng: carrierLocation.lng,
                            },
                            title: delivery.carrierName || "Carrier location",
                            details: [
                              `Status: ${getStatusLabel(delivery.status)}`,
                              delivery.carrierPhone
                                ? `Phone: ${delivery.carrierPhone}`
                                : "Phone unavailable",
                            ],
                          })
                        }
                        icon={{
                          path: google.maps.SymbolPath.CIRCLE,
                          scale: 12,
                          fillColor: "#3B82F6",
                          fillOpacity: 1,
                          strokeColor: "#ffffff",
                          strokeWeight: 2,
                        }}
                      />
                    )}

                    {selectedMapInfo && (
                      <InfoWindow
                        position={selectedMapInfo.position}
                        onCloseClick={() => setSelectedMapInfo(null)}
                      >
                        <div className="min-w-[180px] text-xs text-slate-700">
                          <p className="text-sm font-semibold text-slate-900">
                            {selectedMapInfo.title}
                          </p>
                          <div className="mt-1 space-y-0.5">
                            {selectedMapInfo.details.map((line, index) => (
                              <p key={`${line}-${index}`}>{line}</p>
                            ))}
                          </div>
                        </div>
                      </InfoWindow>
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
                        ? routeMeta.distanceText
                        : "Route unavailable (waiting for valid coordinates)"}
                    </p>
                    {isBeforePickupStatus && etaToPickupText && (
                      <p className="text-xs text-emerald-700 font-semibold mt-1">
                        ⏱ {etaLabel}: {etaToPickupText}
                      </p>
                    )}
                    {!isBeforePickupStatus &&
                      delivery?.status !== "delivered" &&
                      etaToDeliveryText && (
                        <p className="text-xs text-emerald-700 font-semibold mt-1">
                          ⏱ {etaLabel}: {etaToDeliveryText}
                        </p>
                      )}
                    {!!delivery.trackingRouteSummary
                      ?.remainingRouteStopCount && (
                      <p className="text-xs text-slate-500 mt-1">
                        Linked route:{" "}
                        {delivery.trackingRouteSummary.remainingRouteStopCount}{" "}
                        remaining stop
                        {delivery.trackingRouteSummary
                          .remainingRouteStopCount === 1
                          ? ""
                          : "s"}
                        {delivery.trackingRouteSummary.stopsAheadCount > 0
                          ? ` • ${delivery.trackingRouteSummary.stopsAheadCount} stop${delivery.trackingRouteSummary.stopsAheadCount === 1 ? "" : "s"} ahead`
                          : ""}
                      </p>
                    )}
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <p className="text-xs text-slate-600 font-semibold uppercase">
                      Map legend
                    </p>
                    <ul className="text-sm text-slate-800 mt-1 space-y-1">
                      <li>
                        <span style={{ color: "#059669" }}>⬤</span> Green:
                        Pickup
                      </li>
                      <li>
                        <span style={{ color: "#DC2626" }}>⬤</span> Red: Dropoff
                      </li>
                      <li>
                        <span style={{ color: "#3B82F6" }}>⬤</span> Blue:
                        Carrier
                      </li>
                      <li>
                        <span
                          className="inline-block h-2.5 w-10 rounded-full border border-slate-300 align-middle"
                          style={{
                            background:
                              "linear-gradient(90deg, #dc2626 0%, #f59e0b 38%, #84cc16 70%, #16a34a 100%)",
                          }}
                        />{" "}
                        Gradient routes: red = route start, green = route end
                      </li>
                      <li>
                        <span className="font-semibold text-slate-700">
                          Thick line
                        </span>{" "}
                        = active delivery route
                      </li>
                      <li>
                        <span className="font-semibold text-slate-700">
                          Medium line
                        </span>{" "}
                        = full carrier linked route
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => focusPoint(delivery.pickupLocation)}
                    className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-800 hover:bg-amber-200"
                  >
                    Locate pickup
                  </button>
                  {showCarrierMarker ? (
                    <button
                      type="button"
                      onClick={() =>
                        focusPoint(carrierLocation || delivery.currentLocation)
                      }
                      className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-800 hover:bg-blue-200"
                    >
                      Locate carrier
                    </button>
                  ) : (
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                      Carrier hidden until pickup
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => focusPoint(delivery.deliveryLocation)}
                    className="rounded-full bg-orange-100 px-3 py-1.5 text-xs font-semibold text-orange-800 hover:bg-orange-200"
                  >
                    Locate destination
                  </button>
                </div>

                {visibleManagedSegments.length > 0 && (
                  <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <p className="text-xs font-semibold uppercase text-slate-600">
                      Visible route rules
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {visibleManagedSegments.map((segment) => {
                        const style = getRouteNetworkSegmentStyle(segment);
                        return (
                          <button
                            key={segment.id}
                            type="button"
                            onClick={() => focusSegment(segment)}
                            className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                            style={{
                              borderColor: style.strokeColor,
                              color: style.strokeColor,
                              backgroundColor: `${style.strokeColor}12`,
                            }}
                          >
                            {segment.name} •{" "}
                            {formatRouteNetworkSegmentType(segment.type)}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
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
            {isOrderOwner && shouldShowPickupOtp && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Pickup OTP
                </h3>
                {pickupOtp ? (
                  <>
                    <p className="text-2xl font-bold tracking-widest text-blue-800">
                      {pickupOtp}
                    </p>
                    <p className="text-xs text-blue-700 mt-2">
                      Share this code with the carrier only when the parcel is
                      collected from sender.
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-blue-800">
                    Pickup OTP is not available yet.
                  </p>
                )}
              </div>
            )}

            {isOrderOwner && shouldShowDeliveryOtp && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">
                  Delivery OTP
                </h3>
                {deliveryOtp ? (
                  <>
                    <p className="text-2xl font-bold tracking-widest text-amber-800">
                      {deliveryOtp}
                    </p>
                    <p className="text-xs text-amber-700 mt-2">
                      Share this OTP with the carrier only when your package is
                      physically delivered.
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-amber-800">
                    Delivery OTP is not available yet.
                  </p>
                )}
              </div>
            )}

            {(delivery.routeReviews?.length ||
              delivery.routeFeedback?.length) && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Route Advisories
                </h3>
                <div className="space-y-3">
                  {delivery.routeReviews?.slice(0, 3).map((review, index) => (
                    <div
                      key={`review-${index}`}
                      className="rounded-lg border border-amber-200 bg-amber-50 p-3"
                    >
                      <p className="font-semibold text-amber-800">
                        {review.type.replace(/_/g, " ")}
                      </p>
                      <p className="text-sm text-amber-700">
                        {review.reason || "Route under review"}
                      </p>
                      {review.start && (
                        <button
                          type="button"
                          onClick={() => focusPoint(review.start)}
                          className="mt-2 text-xs font-semibold text-amber-800 underline"
                        >
                          Locate on map
                        </button>
                      )}
                    </div>
                  ))}
                  {delivery.routeFeedback
                    ?.slice(0, 2)
                    .map((feedback, index) => (
                      <div
                        key={`feedback-${index}`}
                        className="rounded-lg border border-blue-200 bg-blue-50 p-3"
                      >
                        <p className="font-semibold text-blue-800">
                          {feedback.type.replace(/_/g, " ")}
                        </p>
                        <p className="text-sm text-blue-700">
                          {feedback.reason ||
                            feedback.note ||
                            "Carrier reported a route note."}
                        </p>
                        {feedback.start && (
                          <button
                            type="button"
                            onClick={() => focusPoint(feedback.start)}
                            className="mt-2 text-xs font-semibold text-blue-800 underline"
                          >
                            Locate on map
                          </button>
                        )}
                      </div>
                    ))}
                </div>
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
                {freshnessMinutes !== null && (
                  <p className="mt-1 text-xs text-blue-700">
                    {freshnessMinutes <= 3
                      ? `Live now • ${freshnessMinutes}m old`
                      : freshnessMinutes <= 15
                        ? `Delayed • ${freshnessMinutes}m old`
                        : `Stale • ${freshnessMinutes}m old`}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
