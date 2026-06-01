import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  // DirectionsRenderer, // Disabled: Directions API commented out to reduce API cost
  GoogleMap,
  // Polyline, // Disabled: used only for gradient segments (Directions API)
} from "@react-google-maps/api";
import {
  db,
  realtimeDb,
  formatEtaCountdown,
  // formatTrackingEta, // Directions API disabled
  formatRouteNetworkSegmentType,
  // getTrackingEtaLabel, // Directions API disabled
  // getTrackingStopChain, // Directions API disabled
  orderTrackingRouteStops,
  getDisplayRouteNetworkSegments,
  getRouteNetworkSegmentStyle,
  isTrackingBeforePickup,
  isCarrierApproachToPickupStatus,
  isCarrierHeadingToDropoffStatus,
  shouldShowTrackingCarrierMarker,
  subscribeRouteNetworkSegments,
  toTrackingRouteStop,
  TRACKING_ROUTE_COLORS,
  type RouteNetworkSegment,
  type TrackingRouteStop,
} from "@config";
import {
  collection,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { ref as rtdbRef, onValue } from "firebase/database";
import { format } from "date-fns";
import { toast, Toaster } from "react-hot-toast";
import OptimizationReasonDisplay, {
  OptimizationReason,
} from "./components/OptimizationReasonDisplay";

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
  packageWeight?: number;
  paymentMethod?: string;
  route?: {
    polyline?: string;
  };
  routeHistory?: {
    activePolyline?: string;
  };
  optimizationReasons?: OptimizationReason[];
  priority?: string;
  routeReviews?: Array<{
    type: string;
    temporary?: boolean;
    reason?: string;
    start?: { lat: number; lng: number };
    end?: { lat: number; lng: number };
    status?: string;
    createdAt?: any;
    expiresAt?: any;
  }>;
  routeFeedback?: Array<{
    type: string;
    reason?: string;
    note?: string;
    source?: string;
    reportedAt?: string;
    shortcut?: {
      start: { lat: number; lng: number };
      end: { lat: number; lng: number };
      vehicleTypeSpecific?: boolean;
      note?: string;
    };
  }>;
  eta?: {
    pickupEtaMs: number | null;
    deliveryEtaMs: number | null;
    computedAtMs: number;
    avgSpeedKmh: number;
    source: string;
  } | null;
}

interface CarrierLocation {
  lat: number;
  lng: number;
  timestamp?: number;
  accuracy?: number;
}

interface LearnedSegment {
  id: string;
  encodedPolyline?: string;
  reason?: string;
  note?: string;
  vehicleTypeSpecific?: boolean;
}

/* Directions API disabled to reduce cost
const DIRECTIONS_REQUEST_THROTTLE_MS = 12_000;
const DIRECTIONS_COORD_DECIMALS = 4;

const toDirectionsPointKey = (point: RoutePathPoint) => {
  const lat = Number(point.lat.toFixed(DIRECTIONS_COORD_DECIMALS));
  const lng = Number(point.lng.toFixed(DIRECTIONS_COORD_DECIMALS));
  return `${lat},${lng}`;
};

const buildDirectionsRequestKey = (
  origin: RoutePathPoint,
  destination: RoutePathPoint,
  waypoints: Array<{ location: RoutePathPoint; stopover: boolean }> = [],
) => {
  const waypointKey = waypoints
    .map((waypoint) => toDirectionsPointKey(waypoint.location))
    .join("|");
  return `${toDirectionsPointKey(origin)}->${toDirectionsPointKey(destination)}::${waypointKey}`;
};
*/

const getCircleMarkerIcon = (
  fillColor: string,
  scale: number,
): google.maps.Icon | google.maps.Symbol => {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    scale,
    fillColor,
    fillOpacity: 1,
    strokeColor: "#ffffff",
    strokeWeight: 2,
  };
};

const createStraightLineSegments = (
  mapInstance: google.maps.Map | null,
  path: Array<{ lat: number; lng: number }>,
  options: Omit<google.maps.PolylineOptions, "path" | "map">,
) => {
  if (!mapInstance || !path || path.length < 2) return [];
  return path.slice(1).map(
    (point, index) =>
      new window.google.maps.Polyline({
        path: [path[index], point],
        geodesic: true,
        clickable: false,
        map: mapInstance,
        ...options,
      }),
  );
};

/* RoutePathPoint and gradient types disabled (Directions API removed)
type RoutePathPoint = { lat: number; lng: number };
*/

/* Gradient types and helpers disabled (Directions API removed)
type GradientRouteSegment = {
  id: string;
  path: RoutePathPoint[];
  color: string;
};

const clampGradientProgress = (progress: number) =>
  Math.min(1, Math.max(0, progress));

const getGradientRouteColor = (progress: number) => {
  const hue = Math.round(4 + clampGradientProgress(progress) * 116);
  return `hsl(${hue}, 78%, 45%)`;
};
*/

/* toDirectionPath and buildGradientRouteSegments disabled (Directions API removed)
const toDirectionPath = (directions: any): RoutePathPoint[] => {
  const overview = directions?.routes?.[0]?.overview_path ?? [];
  return overview
    .map((point: any) => ({
      lat: typeof point.lat === "function" ? point.lat() : point.lat,
      lng: typeof point.lng === "function" ? point.lng() : point.lng,
    }))
    .filter(
      (point: RoutePathPoint) =>
        Number.isFinite(point.lat) && Number.isFinite(point.lng),
    );
};

const buildGradientRouteSegments = (
  points: RoutePathPoint[],
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

/* getGradientSegmentOptions disabled (used only for Directions gradient polylines)
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
*/

export default function DeliveryTrackingMap() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [delivery, setDelivery] = useState<DeliveryData | null>(null);
  const [managedSegments, setManagedSegments] = useState<RouteNetworkSegment[]>(
    [],
  );
  const [carrierLocation, setCarrierLocation] =
    useState<CarrierLocation | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [loading, setLoading] = useState(true);
  const [learnedSegments, setLearnedSegments] = useState<LearnedSegment[]>([]);
  const [routeStops, setRouteStops] = useState<TrackingRouteStop[]>([]);
  // Directions API disabled to reduce cost
  // const [fullPlanDirections, setFullPlanDirections] = useState<any>(null);
  // const [carrierRouteDirections, setCarrierRouteDirections] = useState<any>(null);
  // const [activeRouteDirections, setActiveRouteDirections] = useState<any>(null);
  // etaInfo always null since Directions API is disabled
  const [etaInfo] = useState<{
    label: string;
    text: string;
    detail?: string;
  } | null>(null);
  const markerRefs = useRef<Record<string, google.maps.Marker | null>>({});
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const routePolylineRefs = useRef<google.maps.Polyline[]>([]);
  // Directions cache disabled
  // const directionsRequestCacheRef = useRef<
  //   Record<string, { key: string; at: number; result: any | null }>
  // >({});
  // useEffect(() => {
  //   directionsRequestCacheRef.current = {};
  // }, [delivery?.id]);

  useEffect(() => {
    if (!id) {
      toast.error("No delivery ID provided");
      navigate("/deliveries/active");
      return;
    }

    const docRef = doc(db, "deliveries", id);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (!docSnap.exists()) {
        toast.error("Delivery not found");
        navigate("/deliveries/active");
        return;
      }

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
        packageWeight: data.packageWeight,
        paymentMethod: data.paymentMethod,
        route: data.route,
        routeHistory: data.routeHistory,
        optimizationReasons: data.optimizationReasons || [],
        priority: data.priority,
        routeReviews: data.routeReviews || [],
        routeFeedback: data.routeFeedback || [],
        eta: data.eta ?? null,
      });
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id, navigate]);

  useEffect(() => {
    return subscribeRouteNetworkSegments(setManagedSegments);
  }, []);

  useEffect(() => {
    if (!delivery?.carrierId) {
      setRouteStops([]);
      return;
    }

    return onSnapshot(
      collection(db, "users", delivery.carrierId, "routeStops"),
      (snapshot) => {
        setRouteStops(
          snapshot.docs
            .map((docSnap) => toTrackingRouteStop(docSnap.id, docSnap.data()))
            .filter((stop): stop is TrackingRouteStop => !!stop),
        );
      },
      () => setRouteStops([]),
    );
  }, [delivery?.carrierId]);

  useEffect(() => {
    if (!id) return;

    const q = query(
      collection(db, "deliveries", id, "routeLearnedSegments"),
      orderBy("createdAt", "desc"),
      limit(20),
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const data: LearnedSegment[] = snapshot.docs.map((d) => {
        const row = d.data() as any;
        return {
          id: d.id,
          encodedPolyline: row.encodedPolyline,
          reason: row.reason,
          note: row.note,
          vehicleTypeSpecific: row.vehicleTypeSpecific,
        };
      });
      setLearnedSegments(data);
    });

    return () => unsub();
  }, [id]);

  useEffect(() => {
    if (!delivery?.carrierId && delivery?.status === "pending") {
      return;
    }

    if (delivery?.currentLocation?.lat) {
      setCarrierLocation({
        lat: delivery.currentLocation.lat,
        lng: delivery.currentLocation.lng,
      });
    }

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

  const isBeforePickupStatus = isTrackingBeforePickup(delivery?.status);
  const showCarrierMarker = shouldShowTrackingCarrierMarker(delivery?.status);
  const shouldCenterOnPickup =
    isBeforePickupStatus && delivery?.status !== "accepted";

  const mapCenter = useMemo(
    () =>
      shouldCenterOnPickup && delivery?.pickupLocation
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
      shouldCenterOnPickup,
      delivery?.pickupLocation,
      carrierLocation,
      delivery?.currentLocation,
    ],
  );

  /* activeRouteStopsAhead disabled (used only in Directions API effects)
  const activeRouteStopsAhead = useMemo(() => {
    if (!delivery) return 0;
    const chain = getTrackingStopChain(
      delivery.id,
      delivery.status,
      routeStops,
    );
    return Math.max(0, chain.length - 1);
  }, [delivery, routeStops]);
  */

  const orderedCarrierRouteStops = useMemo(
    () => orderTrackingRouteStops(routeStops),
    [routeStops],
  );

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

  /* Directions gradient segments disabled
  const fullPlanGradientSegments = useMemo(
    () =>
      buildGradientRouteSegments(
        toDirectionPath(fullPlanDirections),
        "full-plan",
      ),
    [fullPlanDirections],
  );

  const carrierRouteGradientSegments = useMemo(
    () =>
      buildGradientRouteSegments(
        toDirectionPath(carrierRouteDirections),
        "carrier-chain",
      ),
    [carrierRouteDirections],
  );

  const activeRouteGradientSegments = useMemo(
    () =>
      buildGradientRouteSegments(
        toDirectionPath(activeRouteDirections),
        "active",
      ),
    [activeRouteDirections],
  );
  */

  /* Directions API useEffects disabled
  useEffect(() => {
    if (!window.google?.maps || !delivery?.deliveryLocation) {
      setFullPlanDirections(null);
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

    if (!pickupPoint) {
      setFullPlanDirections(null);
      return;
    }

    const service = new window.google.maps.DirectionsService();
    let cancelled = false;
    const requestKey = buildDirectionsRequestKey(pickupPoint, deliveryPoint);
    const cached = directionsRequestCacheRef.current.fullPlan;
    const now = Date.now();

    if (
      cached &&
      cached.key === requestKey &&
      now - cached.at < DIRECTIONS_REQUEST_THROTTLE_MS
    ) {
      setFullPlanDirections(cached.result);
      return;
    }

    service.route(
      {
        origin: pickupPoint,
        destination: deliveryPoint,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result: any, status: any) => {
        if (cancelled) return;
        const normalizedResult = status === "OK" && result ? result : null;
        directionsRequestCacheRef.current.fullPlan = {
          key: requestKey,
          at: Date.now(),
          result: normalizedResult,
        };
        setFullPlanDirections(normalizedResult);
      },
    );

    return () => {
      cancelled = true;
    };
  }, [delivery?.deliveryLocation, delivery?.pickupLocation]);

  useEffect(() => {
    if (
      !window.google?.maps ||
      delivery?.status === "delivered" ||
      delivery?.status === "cancelled"
    ) {
      setCarrierRouteDirections(null);
      return;
    }

    const carrierPoint = carrierLocation
      ? { lat: carrierLocation.lat, lng: carrierLocation.lng }
      : delivery?.currentLocation
        ? {
            lat: delivery.currentLocation.lat,
            lng: delivery.currentLocation.lng,
          }
        : null;

    if (!carrierPoint || orderedCarrierRouteStops.length === 0) {
      setCarrierRouteDirections(null);
      return;
    }

    const limitedRouteStops = orderedCarrierRouteStops.slice(0, 24);
    const destination = limitedRouteStops[limitedRouteStops.length - 1];
    const waypoints = limitedRouteStops.slice(0, -1).map((stop) => ({
      location: { lat: stop.lat, lng: stop.lng },
      stopover: true,
    }));

    let cancelled = false;
    const service = new window.google.maps.DirectionsService();
    const requestKey = buildDirectionsRequestKey(
      carrierPoint,
      { lat: destination.lat, lng: destination.lng },
      waypoints,
    );
    const cached = directionsRequestCacheRef.current.carrierRoute;
    const now = Date.now();

    if (
      cached &&
      cached.key === requestKey &&
      now - cached.at < DIRECTIONS_REQUEST_THROTTLE_MS
    ) {
      setCarrierRouteDirections(cached.result);
      return;
    }

    service.route(
      {
        origin: carrierPoint,
        destination: { lat: destination.lat, lng: destination.lng },
        waypoints,
        optimizeWaypoints: false,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result: any, status: any) => {
        if (cancelled) return;
        const normalizedResult = status === "OK" && result ? result : null;
        directionsRequestCacheRef.current.carrierRoute = {
          key: requestKey,
          at: Date.now(),
          result: normalizedResult,
        };
        setCarrierRouteDirections(normalizedResult);
      },
    );

    return () => {
      cancelled = true;
    };
  }, [
    carrierLocation,
    delivery?.currentLocation,
    delivery?.status,
    orderedCarrierRouteStops,
  ]);

  useEffect(() => {
    if (
      !window.google?.maps ||
      !delivery?.pickupLocation ||
      !delivery?.deliveryLocation ||
      delivery.status === "delivered" ||
      delivery.status === "cancelled"
    ) {
      setActiveRouteDirections(null);
      setEtaInfo(null);
      return;
    }

    const carrierPoint = carrierLocation
      ? { lat: carrierLocation.lat, lng: carrierLocation.lng }
      : delivery.currentLocation
        ? {
            lat: delivery.currentLocation.lat,
            lng: delivery.currentLocation.lng,
          }
        : null;

    if (!carrierPoint) {
      setActiveRouteDirections(null);
      setEtaInfo(null);
      return;
    }

    const pickupPoint = {
      lat: delivery.pickupLocation.lat,
      lng: delivery.pickupLocation.lng,
    };
    const deliveryPoint = {
      lat: delivery.deliveryLocation.lat,
      lng: delivery.deliveryLocation.lng,
    };

    const routeChain = getTrackingStopChain(
      delivery.id,
      delivery.status,
      routeStops,
    );
    const targetPoint = isBeforePickupStatus ? pickupPoint : deliveryPoint;
    const destination = routeChain.length
      ? routeChain[routeChain.length - 1]
      : targetPoint;
    const waypoints = routeChain.slice(0, -1).map((stop) => ({
      location: { lat: stop.lat, lng: stop.lng },
      stopover: true,
    }));

    let cancelled = false;
    const service = new window.google.maps.DirectionsService();
    const requestKey = buildDirectionsRequestKey(
      carrierPoint,
      { lat: destination.lat, lng: destination.lng },
      waypoints,
    );
    const cached = directionsRequestCacheRef.current.activeRoute;
    const now = Date.now();

    if (
      cached &&
      cached.key === requestKey &&
      now - cached.at < DIRECTIONS_REQUEST_THROTTLE_MS
    ) {
      const cachedDirections = cached.result;
      setActiveRouteDirections(cachedDirections);
      if (cachedDirections?.routes?.[0]?.legs?.length) {
        const seconds = cachedDirections.routes[0].legs.reduce(
          (sum: number, leg: any) => sum + (leg.duration?.value || 0),
          0,
        );
        setEtaInfo({
          label: getTrackingEtaLabel(delivery.status),
          text: formatTrackingEta(seconds),
          detail:
            activeRouteStopsAhead > 0
              ? `${activeRouteStopsAhead} stop${activeRouteStopsAhead === 1 ? "" : "s"} ahead in the re-optimized route`
              : undefined,
        });
      }
      return;
    }

    service.route(
      {
        origin: carrierPoint,
        destination: { lat: destination.lat, lng: destination.lng },
        waypoints,
        optimizeWaypoints: false,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result: any, status: any) => {
        if (cancelled) return;

        const normalizedResult = status === "OK" && result ? result : null;
        directionsRequestCacheRef.current.activeRoute = {
          key: requestKey,
          at: Date.now(),
          result: normalizedResult,
        };

        if (normalizedResult?.routes?.[0]?.legs?.length) {
          const seconds = normalizedResult.routes[0].legs.reduce(
            (sum: number, leg: any) => sum + (leg.duration?.value || 0),
            0,
          );

          setActiveRouteDirections(normalizedResult);
          setEtaInfo({
            label: getTrackingEtaLabel(delivery.status),
            text: formatTrackingEta(seconds),
            detail:
              activeRouteStopsAhead > 0
                ? `${activeRouteStopsAhead} stop${activeRouteStopsAhead === 1 ? "" : "s"} ahead in the re-optimized route`
                : undefined,
          });
          return;
        }

        setActiveRouteDirections(null);
        setEtaInfo(null);
      },
    );

    return () => {
      cancelled = true;
    };
  }, [
    activeRouteStopsAhead,
    carrierLocation,
    delivery?.currentLocation,
    delivery?.deliveryLocation,
    delivery?.id,
    delivery?.pickupLocation,
    delivery?.status,
    isBeforePickupStatus,
    routeStops,
  ]);
  */

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

  useEffect(() => {
    Object.values(markerRefs.current).forEach((marker) => marker?.setMap(null));
    markerRefs.current = {};
    infoWindowRef.current?.close();
  }, [mapInstance]);

  useEffect(() => {
    if (!mapInstance || !window.google?.maps || !delivery) return;

    if (!infoWindowRef.current) {
      infoWindowRef.current = new window.google.maps.InfoWindow();
    }

    const syncMarker = (
      key: string,
      position: { lat: number; lng: number } | null | undefined,
      title: string,
      icon: google.maps.Icon | google.maps.Symbol,
      zIndex: number,
      details: string[],
    ) => {
      const existing = markerRefs.current[key];

      if (!position) {
        existing?.setMap(null);
        markerRefs.current[key] = null;
        return;
      }

      const html = `<div style="font-family:system-ui;padding:4px 2px;min-width:180px"><strong style="display:block;margin-bottom:4px;color:#0f172a">${title}</strong>${details
        .map(
          (line) =>
            `<p style="margin:2px 0;font-size:12px;color:#475569">${line}</p>`,
        )
        .join("")}</div>`;

      if (existing) {
        existing.setPosition(position);
        existing.setTitle(title);
        existing.setIcon(icon);
        existing.setZIndex(zIndex);
        existing.setMap(mapInstance);
      } else {
        const marker = new window.google.maps.Marker({
          position,
          map: mapInstance,
          icon,
          zIndex,
          title,
        });
        marker.addListener("click", () => {
          infoWindowRef.current?.setContent(html);
          infoWindowRef.current?.open(mapInstance, marker);
        });
        markerRefs.current[key] = marker;
      }
    };

    syncMarker(
      "carrier",
      showCarrierMarker
        ? carrierLocation
          ? { lat: carrierLocation.lat, lng: carrierLocation.lng }
          : delivery.currentLocation
            ? {
                lat: delivery.currentLocation.lat,
                lng: delivery.currentLocation.lng,
              }
            : null
        : null,
      delivery.carrierName || "Carrier location",
      getCircleMarkerIcon("#3B82F6", 6),
      120,
      [
        `Status: ${getStatusLabel(delivery.status)}`,
        delivery.carrierPhone
          ? `Phone: ${delivery.carrierPhone}`
          : "Phone unavailable",
      ],
    );

    syncMarker(
      "pickup",
      delivery.pickupLocation
        ? {
            lat: delivery.pickupLocation.lat,
            lng: delivery.pickupLocation.lng,
          }
        : null,
      "Pickup location",
      getCircleMarkerIcon("#059669", 9),
      110,
      [delivery.pickupAddress],
    );

    syncMarker(
      "dropoff",
      delivery.deliveryLocation
        ? {
            lat: delivery.deliveryLocation.lat,
            lng: delivery.deliveryLocation.lng,
          }
        : null,
      "Dropoff location",
      getCircleMarkerIcon("#DC2626", 9),
      110,
      [delivery.deliveryAddress],
    );
  }, [carrierLocation, delivery, mapInstance]);

  useEffect(() => {
    return () => {
      Object.values(markerRefs.current).forEach((marker) =>
        marker?.setMap(null),
      );
      markerRefs.current = {};
      infoWindowRef.current?.close();
      infoWindowRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapInstance || !window.google?.maps || !delivery) return;

    routePolylineRefs.current.forEach((polyline) => polyline.setMap(null));
    routePolylineRefs.current = [];

    const pickupPoint = delivery.pickupLocation
      ? { lat: delivery.pickupLocation.lat, lng: delivery.pickupLocation.lng }
      : null;
    const dropoffPoint = delivery.deliveryLocation
      ? {
          lat: delivery.deliveryLocation.lat,
          lng: delivery.deliveryLocation.lng,
        }
      : null;
    const carrierPoint = carrierLocation
      ? { lat: carrierLocation.lat, lng: carrierLocation.lng }
      : delivery.currentLocation
        ? {
            lat: delivery.currentLocation.lat,
            lng: delivery.currentLocation.lng,
          }
        : null;

    const showCarrierToPickupRoute =
      isCarrierApproachToPickupStatus(delivery.status) &&
      carrierPoint &&
      pickupPoint;
    const showCarrierToDropoffRoute =
      isCarrierHeadingToDropoffStatus(delivery.status) &&
      carrierPoint &&
      dropoffPoint;

    if (showCarrierToPickupRoute) {
      routePolylineRefs.current.push(
        ...createStraightLineSegments(
          mapInstance,
          [carrierPoint, pickupPoint],
          {
            strokeColor: TRACKING_ROUTE_COLORS.carrierToPickup,
            strokeOpacity: 0.95,
            strokeWeight: 6,
          },
        ),
      );
    } else if (showCarrierToDropoffRoute) {
      routePolylineRefs.current.push(
        ...createStraightLineSegments(
          mapInstance,
          [carrierPoint, dropoffPoint],
          {
            strokeColor: TRACKING_ROUTE_COLORS.carrierToDropoff,
            strokeOpacity: 0.95,
            strokeWeight: 6,
          },
        ),
      );
    }

    if (pickupPoint && dropoffPoint) {
      routePolylineRefs.current.push(
        ...createStraightLineSegments(
          mapInstance,
          [pickupPoint, dropoffPoint],
          {
            strokeColor: TRACKING_ROUTE_COLORS.pickupToDropoff,
            strokeOpacity: 0.95,
            strokeWeight: 5,
          },
        ),
      );
    }

    return () => {
      routePolylineRefs.current.forEach((polyline) => polyline.setMap(null));
      routePolylineRefs.current = [];
    };
  }, [delivery, mapInstance, carrierLocation, orderedCarrierRouteStops]);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading tracking map...</p>
        </div>
      </div>
    );
  }

  if (!delivery) {
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-8.5rem)] flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <Toaster position="top-right" />

      <div className="bg-white shadow-sm p-4 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {delivery.trackingCode}
            </h1>
            <p className="text-sm text-gray-600">
              {getStatusLabel(delivery.status)}
            </p>
            {etaInfo && (
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 font-semibold text-emerald-700">
                  ⏱ {etaInfo.label}: {etaInfo.text}
                </span>
                {etaInfo.detail && (
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-semibold text-slate-600">
                    {etaInfo.detail}
                  </span>
                )}
              </div>
            )}
          </div>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            ← Back
          </button>
        </div>
      </div>

      <div className="px-4 py-4 bg-gray-50 border-b border-gray-200">
        <div className="relative w-full h-[52vh] min-h-[360px] lg:min-h-[520px] overflow-hidden rounded-xl border border-gray-200 bg-white">
          {typeof window !== "undefined" && (
            <>
              <GoogleMap
                zoom={15}
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
                {/* Directions API disabled: carrier and pickup/dropoff routes render as straight line overlays */}
              </GoogleMap>
            </>
          )}
        </div>

        <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs text-slate-600 font-semibold uppercase">
            Map legend
          </p>
          <ul className="mt-1 space-y-1 text-sm text-slate-800">
            <li>
              <span style={{ color: "#059669" }}>⬤</span> Green: Pickup
            </li>
            <li>
              <span style={{ color: "#DC2626" }}>⬤</span> Red: Dropoff
            </li>
            <li>
              <span style={{ color: "#3B82F6" }}>⬤</span> Blue: Carrier
            </li>
            <li>
              <span
                className="inline-block h-2.5 w-10 rounded-full bg-blue-600 mr-2 align-middle"
                style={{ opacity: 0.95 }}
              />
              Carrier → pickup when accepted / dropoff after pickup
            </li>
            <li>
              <span
                className="inline-block h-2.5 w-10 rounded-full bg-slate-400 mr-2 align-middle"
                style={{ opacity: 0.35 }}
              />
              Pickup → dropoff baseline
            </li>
          </ul>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => focusPoint(delivery.pickupLocation)}
            className="rounded-full bg-amber-100 px-3 py-1.5 font-semibold text-amber-800 hover:bg-amber-200"
          >
            Locate pickup
          </button>
          {showCarrierMarker ? (
            <button
              type="button"
              onClick={() =>
                focusPoint(carrierLocation || delivery.currentLocation)
              }
              className="rounded-full bg-emerald-100 px-3 py-1.5 font-semibold text-emerald-800 hover:bg-emerald-200"
            >
              Locate carrier
            </button>
          ) : (
            <span className="rounded-full bg-slate-100 px-3 py-1.5 font-semibold text-slate-600">
              Carrier pin hidden until pickup
            </span>
          )}
          <button
            type="button"
            onClick={() => focusPoint(delivery.deliveryLocation)}
            className="rounded-full bg-orange-100 px-3 py-1.5 font-semibold text-orange-800 hover:bg-orange-200"
          >
            Locate delivery
          </button>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 font-semibold text-slate-700">
            {visibleManagedSegments.length} route rule(s) visible
          </span>
        </div>

        {visibleManagedSegments.length > 0 && (
          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-sm font-semibold text-slate-800">
              Visible route rules for this delivery
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

      {(delivery.routeFeedback?.length || learnedSegments.length) && (
        <div className="bg-white border-t px-4 py-3 text-xs text-gray-600 grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <p className="font-semibold text-gray-700 mb-1">
              Carrier Route Feedback
            </p>
            <div className="space-y-1 max-h-24 overflow-y-auto pr-1">
              {(delivery.routeFeedback || [])
                .slice(0, 5)
                .map((feedback, idx) => (
                  <p key={`fb-${idx}`}>
                    • {feedback.type}: {feedback.reason || "No reason"}
                    {feedback.note ? ` — ${feedback.note}` : ""}
                  </p>
                ))}
              {!delivery.routeFeedback?.length && <p>None yet.</p>}
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-700 mb-1">
              Learned Shortcut Segments
            </p>
            <p>
              {learnedSegments.length} segment(s) captured for future
              optimization.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white shadow p-4 border-t">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-500 font-medium">PICKUP</p>
            <p className="text-sm text-gray-800">{delivery.pickupAddress}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">DELIVERY</p>
            <p className="text-sm text-gray-800">{delivery.deliveryAddress}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">DRIVER</p>
            <p className="text-sm text-gray-800">
              {delivery.carrierName || "Not assigned"}
            </p>
          </div>
          <div>
            {delivery.status === "delivered" ? (
              <>
                <p className="text-sm text-gray-500 font-medium">PICKED UP</p>
                <p className="text-sm text-gray-800">
                  {delivery.pickupTime
                    ? format(delivery.pickupTime, "MMM d, h:mm a")
                    : "—"}
                </p>
                <p className="text-sm text-gray-500 font-medium mt-2">
                  DELIVERED AT
                </p>
                <p className="text-sm text-gray-800">
                  {delivery.deliveryTime
                    ? format(delivery.deliveryTime, "MMM d, h:mm a")
                    : "—"}
                </p>
              </>
            ) : ["picked_up", "in_transit", "out_for_delivery"].includes(
                delivery.status,
              ) ? (
              <>
                <p className="text-sm text-gray-500 font-medium">PICKED UP</p>
                <p className="text-sm text-gray-800">
                  {delivery.pickupTime
                    ? format(delivery.pickupTime, "MMM d, h:mm a")
                    : "—"}
                </p>
                <p className="text-sm text-gray-500 font-medium mt-2">
                  EST. DELIVERY
                </p>
                <p className="text-sm text-gray-800">
                  {etaInfo?.text ||
                    (() => {
                      const eta = delivery.eta;
                      if (!eta) return "Waiting for live route data";
                      const etaMs = eta.deliveryEtaMs;
                      if (!etaMs) return "Waiting for live route data";
                      const rem = Math.max(0, etaMs - Date.now());
                      return rem <= 0
                        ? "Arriving now"
                        : formatEtaCountdown(rem);
                    })()}
                </p>
                {etaInfo?.detail && (
                  <p className="text-xs text-gray-500 mt-1">{etaInfo.detail}</p>
                )}
                {!!orderedCarrierRouteStops.length && (
                  <p className="text-xs text-gray-500 mt-1">
                    Route stops: {orderedCarrierRouteStops.length} remaining
                    stop
                    {orderedCarrierRouteStops.length === 1 ? "" : "s"}
                  </p>
                )}
              </>
            ) : (
              <>
                <p className="text-sm text-gray-500 font-medium">
                  {etaInfo?.label || "ESTIMATED TIME"}
                </p>
                <p className="text-sm text-gray-800">
                  {etaInfo?.text ||
                    (() => {
                      const eta = delivery.eta;
                      if (!eta) return "Waiting for live route data";
                      const prePickup = isTrackingBeforePickup(delivery.status);
                      const etaMs = prePickup
                        ? eta.pickupEtaMs
                        : eta.deliveryEtaMs;
                      if (!etaMs) return "Waiting for live route data";
                      const rem = Math.max(0, etaMs - Date.now());
                      return rem <= 0
                        ? "Arriving now"
                        : formatEtaCountdown(rem);
                    })()}
                </p>
                {etaInfo?.detail && (
                  <p className="text-xs text-gray-500 mt-1">{etaInfo.detail}</p>
                )}
                {!!orderedCarrierRouteStops.length && (
                  <p className="text-xs text-gray-500 mt-1">
                    Route stops: {orderedCarrierRouteStops.length} remaining
                    stop
                    {orderedCarrierRouteStops.length === 1 ? "" : "s"}
                  </p>
                )}
              </>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">PRIORITY</p>
            <p className="text-sm text-gray-800 capitalize">
              {delivery.priority || "standard"}
            </p>
          </div>
        </div>

        {/* Optimization Reasons Display */}
        {delivery.optimizationReasons &&
          delivery.optimizationReasons.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <OptimizationReasonDisplay
                reasons={delivery.optimizationReasons}
              />
            </div>
          )}
      </div>
    </div>
  );
}
