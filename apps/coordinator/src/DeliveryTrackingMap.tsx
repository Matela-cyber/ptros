import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  DirectionsRenderer,
  GoogleMap,
  Polyline,
} from "@react-google-maps/api";
import {
  db,
  realtimeDb,
  computeEtaAbsoluteMs,
  formatEtaCountdown,
  formatTrackingEta,
  formatRouteNetworkSegmentType,
  getTrackingEtaLabel,
  getTrackingStopChain,
  orderTrackingRouteStops,
  getDisplayRouteNetworkSegments,
  getRouteNetworkSegmentStyle,
  isTrackingBeforePickup,
  shouldShowTrackingCarrierMarker,
  subscribeRouteNetworkSegments,
  toTrackingRouteStop,
  type RouteNetworkSegment,
  type TrackingRouteStop,
} from "@config";
import {
  arrayUnion,
  collection,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { ref as rtdbRef, onValue } from "firebase/database";
import { toast, Toaster } from "react-hot-toast";
import { decodePolyline } from "./routeHistory";
import OptimizationReasonDisplay, {
  OptimizationReason,
} from "./components/OptimizationReasonDisplay";
import {
  recommendReassignmentCandidates,
  submitRouteReport,
} from "./services/routeIntelligenceService";

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

interface RouteSnapshot {
  id: string;
  encodedPolyline: string;
  startedAt?: number;
  endedAt?: number;
}

interface CarrierCandidate {
  id: string;
  fullName: string;
  distanceKm: number;
  shortcutContributionScore: number;
}

interface LearnedSegment {
  id: string;
  encodedPolyline?: string;
  reason?: string;
  note?: string;
  vehicleTypeSpecific?: boolean;
}

const ROUTE_COLORS = [
  "#a855f7",
  "#16a34a",
  "#e11d48",
  "#ca8a04",
  "#ea580c",
  "#84cc16",
];

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

type RoutePathPoint = { lat: number; lng: number };

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
  const [snapshots, setSnapshots] = useState<RouteSnapshot[]>([]);
  const [replayProgress, setReplayProgress] = useState(100);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewPoints, setReviewPoints] = useState<
    Array<{ lat: number; lng: number }>
  >([]);
  const [routeIssueReason, setRouteIssueReason] = useState("");
  const [routeIssueTemporary, setRouteIssueTemporary] = useState(true);
  const [routeIssueCategory, setRouteIssueCategory] =
    useState("blocked_segment");
  const [routeIssueExpiresHours, setRouteIssueExpiresHours] = useState(6);
  const [recommending, setRecommending] = useState(false);
  const [recommendedCarrier, setRecommendedCarrier] =
    useState<CarrierCandidate | null>(null);
  const [learnedSegments, setLearnedSegments] = useState<LearnedSegment[]>([]);
  const [routeStops, setRouteStops] = useState<TrackingRouteStop[]>([]);
  const [fullPlanDirections, setFullPlanDirections] = useState<any>(null);
  const [carrierRouteDirections, setCarrierRouteDirections] =
    useState<any>(null);
  const [activeRouteDirections, setActiveRouteDirections] = useState<any>(null);
  const [etaInfo, setEtaInfo] = useState<{
    label: string;
    text: string;
    detail?: string;
  } | null>(null);
  const markerRefs = useRef<Record<string, google.maps.Marker | null>>({});
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

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
    if (!id) return;

    const q = query(
      collection(db, "deliveries", id, "routeSnapshots"),
      orderBy("endedAt", "asc"),
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const data: RouteSnapshot[] = snapshot.docs.map((d) => {
        const row = d.data() as any;
        return {
          id: d.id,
          encodedPolyline: row.encodedPolyline,
          startedAt: row.startedAt,
          endedAt: row.endedAt,
        };
      });
      setSnapshots(data);
    });

    return () => unsub();
  }, [id]);

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

  const routeSegments = useMemo(() => {
    const planned = delivery?.route?.polyline
      ? decodePolyline(delivery.route.polyline)
      : [];

    const snapshotSegments = snapshots
      .filter((s) => s.encodedPolyline)
      .map((s, idx) => ({
        id: s.id,
        points: decodePolyline(s.encodedPolyline),
        color: ROUTE_COLORS[idx % ROUTE_COLORS.length],
      }))
      .filter((s) => s.points.length > 1);

    const active = delivery?.routeHistory?.activePolyline
      ? decodePolyline(delivery.routeHistory.activePolyline)
      : [];

    const blockedSegments = (delivery?.routeReviews || [])
      .filter(
        (review) =>
          review?.start && review?.end && review?.status !== "resolved",
      )
      .map((review, idx) => ({
        id: `review-${idx}`,
        points: [review.start!, review.end!],
        temporary: !!review.temporary,
        reason: review.reason,
      }));

    const learnedShortcutSegments = learnedSegments
      .filter((seg) => seg.encodedPolyline)
      .map((seg) => ({
        id: seg.id,
        points: decodePolyline(seg.encodedPolyline || ""),
        reason: seg.reason,
        note: seg.note,
        vehicleTypeSpecific: seg.vehicleTypeSpecific,
      }))
      .filter((seg) => seg.points.length > 1);

    return {
      planned,
      snapshotSegments,
      active,
      blockedSegments,
      learnedShortcutSegments,
    };
  }, [
    delivery?.route?.polyline,
    delivery?.routeHistory?.activePolyline,
    delivery?.routeReviews,
    snapshots,
    learnedSegments,
  ]);

  const visibleSegmentCount = Math.max(
    1,
    Math.ceil(
      routeSegments.snapshotSegments.length *
        Math.max(0.01, replayProgress / 100),
    ),
  );

  const visibleSnapshotSegments = routeSegments.snapshotSegments.slice(
    0,
    visibleSegmentCount,
  );

  const activeRouteStopsAhead = useMemo(() => {
    if (!delivery) return 0;
    const chain = getTrackingStopChain(
      delivery.id,
      delivery.status,
      routeStops,
    );
    return Math.max(0, chain.length - 1);
  }, [delivery, routeStops]);

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

    service.route(
      {
        origin: pickupPoint,
        destination: deliveryPoint,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result: any, status: any) => {
        if (cancelled) return;
        if (status === "OK" && result) {
          setFullPlanDirections(result);
          return;
        }
        setFullPlanDirections(null);
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
        setCarrierRouteDirections(status === "OK" && result ? result : null);
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

        if (status === "OK" && result?.routes?.[0]?.legs?.length) {
          const seconds = result.routes[0].legs.reduce(
            (sum: number, leg: any) => sum + (leg.duration?.value || 0),
            0,
          );

          setActiveRouteDirections(result);
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
      getCircleMarkerIcon("#3B82F6", 12),
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

  const onMapClick = (event: google.maps.MapMouseEvent) => {
    if (!reviewMode || !event.latLng) return;
    const point = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    setReviewPoints((prev) => (prev.length >= 2 ? [point] : [...prev, point]));
  };

  const submitRouteReview = async () => {
    if (
      !delivery ||
      !id ||
      reviewPoints.length !== 2 ||
      !routeIssueReason.trim()
    ) {
      toast.error("Choose two map points and provide a reason.");
      return;
    }

    try {
      await submitRouteReport({
        deliveryId: id,
        trackingCode: delivery.trackingCode,
        type: routeIssueCategory as
          | "blocked_path"
          | "bad_road"
          | "unsafe_segment"
          | "wrong_map_road",
        source: "coordinator",
        note: routeIssueReason.trim(),
        reason: routeIssueReason.trim(),
        temporary: routeIssueTemporary,
        start: reviewPoints[0],
        end: reviewPoints[1],
        createdByName: "Coordinator",
      });

      await updateDoc(doc(db, "deliveries", id), {
        routeControl: {
          hasBlockedSegments: true,
          lastReviewAt: Timestamp.now(),
          expiresInHours: routeIssueTemporary ? routeIssueExpiresHours : null,
        },
        updatedAt: Timestamp.now(),
      });

      toast.success("Route segment marked for rejection/review.");
      setReviewMode(false);
      setReviewPoints([]);
      setRouteIssueReason("");
      setRouteIssueTemporary(true);
      setRouteIssueCategory("blocked_segment");
      setRouteIssueExpiresHours(6);
    } catch (error) {
      console.error(error);
      toast.error("Failed to save route review.");
    }
  };

  const recommendNextCarrier = async () => {
    if (!delivery || !carrierLocation) return;
    setRecommending(true);

    try {
      const ranked = await recommendReassignmentCandidates({
        deliveryId: delivery.id,
        trackingCode: delivery.trackingCode,
        carrierId: delivery.carrierId,
        pickupLocation: delivery.pickupLocation,
        deliveryLocation: delivery.deliveryLocation,
        currentLocation: carrierLocation,
        packageWeightKg: delivery.packageWeight,
        packageValue: delivery.packageValue,
        priority: delivery.priority,
      });

      const candidates: CarrierCandidate[] = ranked.map((candidate) => ({
        id: candidate.id,
        fullName: candidate.fullName,
        distanceKm: candidate.distanceToPickupKm,
        shortcutContributionScore: candidate.shortcutContributionScore,
      }));

      if (!candidates.length) {
        toast.error("No alternative carriers with valid location found.");
        setRecommendedCarrier(null);
        return;
      }

      setRecommendedCarrier(candidates[0]);
      toast.success(
        `Suggested ${candidates[0].fullName} as next best carrier.`,
      );
    } catch (error) {
      console.error(error);
      toast.error("Unable to recommend next carrier.");
    } finally {
      setRecommending(false);
    }
  };

  const reassignToRecommendedCarrier = async () => {
    if (!id || !recommendedCarrier) return;

    try {
      const nowMs = Date.now();
      const pickupKm = Number(recommendedCarrier.distanceKm || 0);
      const pickupEtaMs = computeEtaAbsoluteMs(pickupKm, nowMs);
      const routeKm =
        delivery?.pickupLocation && delivery?.deliveryLocation
          ? pickupKm +
            (window.google?.maps
              ? window.google.maps.geometry.spherical.computeDistanceBetween(
                  new window.google.maps.LatLng(
                    delivery.pickupLocation.lat,
                    delivery.pickupLocation.lng,
                  ),
                  new window.google.maps.LatLng(
                    delivery.deliveryLocation.lat,
                    delivery.deliveryLocation.lng,
                  ),
                ) / 1000
              : pickupKm)
          : pickupKm;

      await updateDoc(doc(db, "deliveries", id), {
        carrierId: recommendedCarrier.id,
        carrierName: recommendedCarrier.fullName,
        status: "assigned",
        eta: {
          pickupEtaMs,
          deliveryEtaMs: computeEtaAbsoluteMs(routeKm, nowMs),
          computedAtMs: nowMs,
          source: "assigned",
          distanceToPickupKm: pickupKm,
          totalDistanceKm: routeKm,
          avgSpeedKmh: 30,
        },
        optimizationReasons: arrayUnion({
          type: "reassignment",
          reason: `Reassigned to ${recommendedCarrier.fullName} after in-transit optimization`,
          timestamp: Timestamp.now(),
          carrierId: recommendedCarrier.id,
          carrierName: recommendedCarrier.fullName,
          details: {
            distanceKm: recommendedCarrier.distanceKm,
            factors: [
              "In-transit reroute requested by coordinator",
              `${recommendedCarrier.distanceKm.toFixed(2)} km from active route`,
              `${recommendedCarrier.shortcutContributionScore} learned shortcut contribution score`,
            ],
          },
        }),
        reassignment: {
          reason: "coordinator_reroute",
          previousCarrierId: delivery?.carrierId || null,
          previousCarrierName: delivery?.carrierName || null,
          recommendedCarrierId: recommendedCarrier.id,
          recommendedCarrierName: recommendedCarrier.fullName,
          reassignedAt: Timestamp.now(),
        },
        updatedAt: Timestamp.now(),
      });
      toast.success("Delivery reassigned to recommended carrier.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to reassign carrier.");
    }
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

      <div className="bg-white border-t border-b px-4 py-3 grid grid-cols-1 xl:grid-cols-4 gap-3 text-sm">
        <div className="lg:col-span-2">
          <p className="font-semibold text-gray-700">Trip Replay</p>
          <input
            type="range"
            min={0}
            max={100}
            value={replayProgress}
            onChange={(e) => setReplayProgress(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-xs text-gray-500">
            {visibleSnapshotSegments.length}/
            {routeSegments.snapshotSegments.length} persisted segments visible
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-700">Route Review</p>
          <button
            onClick={() => {
              setReviewMode((prev) => !prev);
              setReviewPoints([]);
            }}
            className={`mt-1 px-3 py-1 rounded-md text-white ${reviewMode ? "bg-red-600" : "bg-indigo-600"}`}
          >
            {reviewMode ? "Cancel Segment Select" : "Reject Blocked Segment"}
          </button>
          <p className="text-xs text-gray-500 mt-1">
            Click 2 points on map when enabled
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-700">In-transit Reroute</p>
          <button
            onClick={recommendNextCarrier}
            disabled={recommending}
            className="mt-1 px-3 py-1 rounded-md bg-emerald-600 text-white disabled:opacity-60"
          >
            {recommending ? "Finding..." : "Recommend Next Carrier"}
          </button>
          {recommendedCarrier && (
            <div className="mt-1 text-xs text-gray-600">
              <p>
                {recommendedCarrier.fullName} •{" "}
                {recommendedCarrier.distanceKm.toFixed(2)} km away
              </p>
              <p>
                Learning score: {recommendedCarrier.shortcutContributionScore}
              </p>
              <button
                onClick={reassignToRecommendedCarrier}
                className="mt-1 px-2 py-1 rounded bg-amber-500 text-white"
              >
                Reassign Now
              </button>
            </div>
          )}
        </div>
      </div>

      {reviewMode && (
        <div className="bg-red-50 border-b border-red-200 px-4 py-3 text-sm grid grid-cols-1 xl:grid-cols-4 gap-3">
          <select
            value={routeIssueCategory}
            onChange={(e) => setRouteIssueCategory(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="blocked_segment">Blocked segment</option>
            <option value="temporarily_unseeable">Temporarily unseeable</option>
            <option value="unsafe_segment">Unsafe segment</option>
          </select>
          <input
            value={routeIssueReason}
            onChange={(e) => setRouteIssueReason(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            placeholder="Why this route section should be rejected/unavailable"
          />
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={routeIssueTemporary}
              onChange={(e) => setRouteIssueTemporary(e.target.checked)}
            />
            Temporary issue
          </label>
          <input
            type="number"
            min={1}
            max={48}
            value={routeIssueExpiresHours}
            onChange={(e) => setRouteIssueExpiresHours(Number(e.target.value))}
            disabled={!routeIssueTemporary}
            className="border border-gray-300 rounded px-3 py-2 disabled:opacity-50"
            placeholder="Expires in hours"
          />
          <button
            onClick={submitRouteReview}
            disabled={reviewPoints.length !== 2 || !routeIssueReason.trim()}
            className="px-3 py-2 rounded bg-red-600 text-white disabled:opacity-50"
          >
            Save Segment Review
          </button>
        </div>
      )}

      <div className="px-4 py-4 bg-gray-50 border-b border-gray-200">
        <div className="relative w-full h-[52vh] min-h-[360px] lg:min-h-[520px] overflow-hidden rounded-xl border border-gray-200 bg-white">
          {typeof window !== "undefined" && (
            <>
              <GoogleMap
                zoom={15}
                center={mapCenter}
                onLoad={(map) => setMapInstance(map)}
                onClick={onMapClick}
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
                    options={getGradientSegmentOptions(segment.color, 0.36, 4)}
                  />
                ))}
                {carrierRouteDirections && (
                  <DirectionsRenderer
                    directions={carrierRouteDirections}
                    options={
                      {
                        suppressMarkers: true,
                        suppressBoundsUpdate: true,
                        suppressPolylines: true,
                      } as any
                    }
                  />
                )}
                {carrierRouteGradientSegments.map((segment) => (
                  <Polyline
                    key={segment.id}
                    path={segment.path}
                    options={getGradientSegmentOptions(segment.color, 0.58, 5)}
                  />
                ))}
                {activeRouteDirections && (
                  <DirectionsRenderer
                    directions={activeRouteDirections}
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
                    options={getGradientSegmentOptions(segment.color, 0.94, 6)}
                  />
                ))}
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
                className="inline-block h-2.5 w-10 rounded-full border border-slate-300 align-middle"
                style={{
                  background:
                    "linear-gradient(90deg, #dc2626 0%, #f59e0b 38%, #84cc16 70%, #16a34a 100%)",
                }}
              />{" "}
              Gradient routes: red = route start, green = route finish
            </li>
            <li>
              <span className="font-semibold text-slate-700">Thicker line</span>
              : current active route
            </li>
            <li>
              <span className="font-semibold text-slate-700">Medium line</span>:
              carrier linked route
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
            <p className="text-sm text-gray-500 font-medium">
              {etaInfo?.label || "ESTIMATED TIME"}
            </p>
            <p className="text-sm text-gray-800">
              {etaInfo?.text ||
                (() => {
                  const eta = delivery.eta;
                  if (!eta) return "Waiting for live route data";
                  const prePickup = isTrackingBeforePickup(delivery.status);
                  const etaMs = prePickup ? eta.pickupEtaMs : eta.deliveryEtaMs;
                  if (!etaMs) return "Waiting for live route data";
                  const rem = Math.max(0, etaMs - Date.now());
                  return rem <= 0 ? "Arriving now" : formatEtaCountdown(rem);
                })()}
            </p>
            {etaInfo?.detail && (
              <p className="text-xs text-gray-500 mt-1">{etaInfo.detail}</p>
            )}
            {!!orderedCarrierRouteStops.length && (
              <p className="text-xs text-gray-500 mt-1">
                Carrier linked route: {orderedCarrierRouteStops.length}{" "}
                remaining stop
                {orderedCarrierRouteStops.length === 1 ? "" : "s"}
              </p>
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
