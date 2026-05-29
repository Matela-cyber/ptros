import { useEffect, useMemo, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { onValue, ref as rtdbRef } from "firebase/database";
import {
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
  DirectionsRenderer,
  GoogleMap,
  Polyline,
} from "@react-google-maps/api";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db, realtimeDb } from "@config";

type MapPoint = { lat: number; lng: number };

interface LiveTrackDelivery {
  id: string;
  trackingCode?: string;
  status: string;
  carrierName?: string;
  pickupAddress?: string;
  deliveryAddress?: string;
  customerName?: string;
  recipientName?: string;
  currentLocation?: MapPoint;
  pickupLocation?: MapPoint;
  deliveryLocation?: MapPoint;
  route?: {
    polyline?: string;
    distance?: number;
    duration?: number;
  };
  routeReviews?: Array<{
    type: string;
    reason?: string;
    temporary?: boolean;
    start?: MapPoint;
    end?: MapPoint;
  }>;
  routeFeedback?: Array<{
    type: string;
    reason?: string;
    note?: string;
    start?: MapPoint;
    end?: MapPoint;
  }>;
}

const DEFAULT_CENTER = { lat: -29.31, lng: 27.48 };

const asMapPoint = (value: any): MapPoint | undefined => {
  if (!value) return undefined;

  const latRaw =
    (typeof value.lat === "function" ? value.lat() : value.lat) ??
    value.latitude ??
    value._lat;
  const lngRaw =
    (typeof value.lng === "function" ? value.lng() : value.lng) ??
    value.lon ??
    value.long ??
    value.longitude ??
    value._long;

  const lat = Number(latRaw);
  const lng = Number(lngRaw);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return undefined;
  return { lat, lng };
};

const formatStatus = (status: string) =>
  status
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

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

const isAwaitingAcceptance = (status?: string | null) =>
  status === "pending" || status === "assigned";

const getStopMarkerColors = (status?: string | null) => {
  if (isAwaitingAcceptance(status)) {
    return {
      pickup: "#F59E0B",
      dropoff: "#F97316",
    };
  }

  return {
    pickup: "#059669",
    dropoff: "#DC2626",
  };
};

type GradientRouteSegment = {
  id: string;
  path: MapPoint[];
  color: string;
};

const clampGradientProgress = (progress: number) =>
  Math.min(1, Math.max(0, progress));

const getGradientRouteColor = (progress: number) => {
  const hue = Math.round(4 + clampGradientProgress(progress) * 116);
  return `hsl(${hue}, 78%, 45%)`;
};

const toDirectionPath = (directions: any): MapPoint[] => {
  const overview = directions?.routes?.[0]?.overview_path ?? [];
  return overview
    .map((point: any) => ({
      lat: typeof point.lat === "function" ? point.lat() : point.lat,
      lng: typeof point.lng === "function" ? point.lng() : point.lng,
    }))
    .filter(
      (point: MapPoint) =>
        Number.isFinite(point.lat) && Number.isFinite(point.lng),
    );
};

const buildGradientRouteSegments = (
  points: MapPoint[],
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

export default function CarrierLiveTrack() {
  const { deliveryId } = useParams<{ deliveryId: string }>();
  const navigate = useNavigate();

  const [authReady, setAuthReady] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [loadingDelivery, setLoadingDelivery] = useState(true);
  const [delivery, setDelivery] = useState<LiveTrackDelivery | null>(null);
  const [managedSegments, setManagedSegments] = useState<RouteNetworkSegment[]>(
    [],
  );
  const [routeStops, setRouteStops] = useState<TrackingRouteStop[]>([]);
  const [liveLocation, setLiveLocation] = useState<MapPoint | null>(null);
  const [fullPlanDirections, setFullPlanDirections] = useState<any>(null);
  const [carrierRouteDirections, setCarrierRouteDirections] =
    useState<any>(null);
  const [activeRouteDirections, setActiveRouteDirections] = useState<any>(null);
  const [etaInfo, setEtaInfo] = useState<{
    label: string;
    text: string;
    detail?: string;
  } | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [error, setError] = useState<string | null>(null);
  const markerRefs = useRef<Record<string, google.maps.Marker | null>>({});
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setAuthorized(false);
        setAuthReady(true);
        navigate("/login", { replace: true });
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        const role = userDoc.exists() ? userDoc.data()?.role : null;
        setAuthorized(role === "carrier");
        if (role !== "carrier") {
          setError("This live track page is for carrier accounts only.");
        }
      } catch (authError) {
        console.error("Error validating carrier access:", authError);
        setError("Failed to verify your carrier access.");
        setAuthorized(false);
      } finally {
        setAuthReady(true);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    return subscribeRouteNetworkSegments(setManagedSegments);
  }, []);

  useEffect(() => {
    if (!deliveryId || !authReady || !authorized) {
      if (authReady && !deliveryId) {
        setError("No delivery selected for live tracking.");
        setLoadingDelivery(false);
      }
      return;
    }

    setLoadingDelivery(true);
    const deliveryRef = doc(db, "deliveries", deliveryId);

    const unsubscribe = onSnapshot(
      deliveryRef,
      (snapshot) => {
        if (!snapshot.exists()) {
          setError("Delivery not found.");
          setDelivery(null);
          setLoadingDelivery(false);
          return;
        }

        const data = snapshot.data();
        const currentLocation = asMapPoint(data.currentLocation);
        const pickupLocation = asMapPoint(data.pickupLocation);
        const deliveryLocation = asMapPoint(data.deliveryLocation);

        setDelivery({
          id: snapshot.id,
          trackingCode: data.trackingCode,
          status: data.status || "pending",
          carrierName: data.carrierName,
          pickupAddress: data.pickupAddress,
          deliveryAddress: data.deliveryAddress,
          customerName: data.customerName,
          recipientName: data.recipientName,
          currentLocation,
          pickupLocation,
          deliveryLocation,
          route: data.route,
          routeReviews: data.routeReviews || [],
          routeFeedback: data.routeFeedback || [],
        });

        if (currentLocation) {
          setLiveLocation(currentLocation);
        }

        setError(null);
        setLoadingDelivery(false);
      },
      (snapshotError) => {
        console.error("Error loading delivery for live track:", snapshotError);
        setError("Failed to load delivery map data.");
        setLoadingDelivery(false);
      },
    );

    return () => unsubscribe();
  }, [authReady, authorized, deliveryId]);

  useEffect(() => {
    if (!deliveryId || !delivery) return;

    const trackRef = rtdbRef(realtimeDb, `deliveryTracks/${deliveryId}`);
    const unsubscribe = onValue(trackRef, (snapshot) => {
      if (snapshot.exists()) {
        const trackPoint = asMapPoint(snapshot.val());
        if (trackPoint) setLiveLocation(trackPoint);
      } else if (delivery.currentLocation) {
        setLiveLocation(delivery.currentLocation);
      }
    });

    return () => unsubscribe();
  }, [delivery, deliveryId]);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!authorized || !currentUser) {
      setRouteStops([]);
      return;
    }

    return onSnapshot(
      collection(db, "users", currentUser.uid, "routeStops"),
      (snapshot) => {
        setRouteStops(
          snapshot.docs
            .map((docSnap) => toTrackingRouteStop(docSnap.id, docSnap.data()))
            .filter((stop): stop is TrackingRouteStop => !!stop),
        );
      },
      () => setRouteStops([]),
    );
  }, [authorized, authReady, deliveryId]);

  const pickupPoint = delivery?.pickupLocation;
  const destinationPoint = delivery?.deliveryLocation;
  const currentPoint = liveLocation || delivery?.currentLocation;
  const isBeforePickupStatus = isTrackingBeforePickup(delivery?.status);
  const showCarrierMarker = shouldShowTrackingCarrierMarker(delivery?.status);

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

  useEffect(() => {
    if (!window.google?.maps || !delivery?.deliveryLocation) {
      setFullPlanDirections(null);
      return;
    }

    const pickupPointForRoute = delivery.pickupLocation
      ? {
          lat: delivery.pickupLocation.lat,
          lng: delivery.pickupLocation.lng,
        }
      : null;
    const destinationPointForRoute = {
      lat: delivery.deliveryLocation.lat,
      lng: delivery.deliveryLocation.lng,
    };

    if (!pickupPointForRoute) {
      setFullPlanDirections(null);
      return;
    }

    const service = new window.google.maps.DirectionsService();
    let cancelled = false;

    service.route(
      {
        origin: pickupPointForRoute,
        destination: destinationPointForRoute,
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
  }, [delivery?.pickupLocation, delivery?.deliveryLocation]);

  useEffect(() => {
    if (
      !window.google?.maps ||
      !currentPoint ||
      delivery?.status === "delivered" ||
      delivery?.status === "cancelled"
    ) {
      setCarrierRouteDirections(null);
      return;
    }

    if (orderedCarrierRouteStops.length === 0) {
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
        origin: currentPoint,
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
  }, [currentPoint, delivery?.status, orderedCarrierRouteStops]);

  useEffect(() => {
    if (
      !window.google?.maps ||
      !delivery?.pickupLocation ||
      !delivery?.deliveryLocation ||
      !currentPoint ||
      delivery.status === "delivered" ||
      delivery.status === "cancelled"
    ) {
      setActiveRouteDirections(null);
      setEtaInfo(null);
      return;
    }

    const chain = getTrackingStopChain(
      delivery.id,
      delivery.status,
      routeStops,
    );
    const fallbackTarget = isBeforePickupStatus
      ? delivery.pickupLocation
      : delivery.deliveryLocation;
    const destination = chain.length ? chain[chain.length - 1] : fallbackTarget;
    const waypoints = chain.slice(0, -1).map((stop) => ({
      location: { lat: stop.lat, lng: stop.lng },
      stopover: true,
    }));

    let cancelled = false;
    const service = new window.google.maps.DirectionsService();

    service.route(
      {
        origin: currentPoint,
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
    currentPoint,
    delivery?.deliveryLocation,
    delivery?.id,
    delivery?.pickupLocation,
    delivery?.status,
    isBeforePickupStatus,
    routeStops,
  ]);

  const routeStartPoint = pickupPoint;
  const routeEndPoint = destinationPoint;
  const stopColors = getStopMarkerColors(delivery?.status);

  const mapCenter = isBeforePickupStatus
    ? routeStartPoint || routeEndPoint || DEFAULT_CENTER
    : currentPoint || routeEndPoint || routeStartPoint || DEFAULT_CENTER;

  const visibleManagedSegments = useMemo(
    () =>
      getDisplayRouteNetworkSegments(
        managedSegments,
        [pickupPoint, destinationPoint, currentPoint],
        { thresholdKm: 12, fallbackLimit: 120 },
      ),
    [currentPoint, destinationPoint, managedSegments, pickupPoint],
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

  const focusPoint = (point?: MapPoint | null) => {
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

  useEffect(() => {
    if (!mapInstance || !window.google?.maps) return;

    const bounds = new window.google.maps.LatLngBounds();
    let hasPoints = false;

    [
      ...(showCarrierMarker ? [currentPoint] : []),
      routeStartPoint,
      routeEndPoint,
    ].forEach((point) => {
      if (!point) return;
      bounds.extend(point);
      hasPoints = true;
    });

    if (hasPoints) mapInstance.fitBounds(bounds, 80);
  }, [
    mapInstance,
    currentPoint,
    routeStartPoint,
    routeEndPoint,
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
      position: MapPoint | null | undefined,
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
      "pickup",
      routeStartPoint,
      "Pickup location",
      getCircleMarkerIcon(stopColors.pickup, 9),
      110,
      [delivery.pickupAddress || "Pickup unavailable"],
    );

    syncMarker(
      "dropoff",
      routeEndPoint,
      "Dropoff location",
      getCircleMarkerIcon(stopColors.dropoff, 9),
      110,
      [delivery.deliveryAddress || "Destination unavailable"],
    );

    syncMarker(
      "carrier",
      showCarrierMarker && currentPoint ? currentPoint : null,
      delivery.carrierName || "Carrier location",
      getCircleMarkerIcon("#3B82F6", 12),
      120,
      [
        `Status: ${formatStatus(delivery.status)}`,
        delivery.recipientName
          ? `Recipient: ${delivery.recipientName}`
          : delivery.customerName
            ? `Customer: ${delivery.customerName}`
            : "Customer unavailable",
      ],
    );
  }, [
    currentPoint,
    delivery,
    mapInstance,
    stopColors.dropoff,
    stopColors.pickup,
    routeEndPoint,
    routeStartPoint,
    showCarrierMarker,
  ]);

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

  if (!authReady || loadingDelivery) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-sm text-slate-600">
            Loading live route map...
          </p>
        </div>
      </div>
    );
  }

  if (!authorized) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-6">
        <div className="max-w-md w-full rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
          <h1 className="text-2xl font-bold text-red-700">Access denied</h1>
          <p className="mt-3 text-sm text-red-700/90">
            {error || "Only carrier accounts can open this live tracking page."}
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-5 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
          >
            Back to carrier app
          </button>
        </div>
      </div>
    );
  }

  if (error || !delivery) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-6">
        <div className="max-w-md w-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-bold">Live track unavailable</h1>
          <p className="mt-3 text-sm text-slate-600">
            {error || "The requested delivery could not be loaded."}
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-5 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500"
          >
            Return to carrier app
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
            >
              ← Back
            </button>
            <div>
              <h1 className="text-2xl font-bold">Carrier Live Track</h1>
              <p className="text-sm text-slate-600">
                Route from pickup to destination with your live position
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
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded-full bg-cyan-100 px-3 py-1 font-semibold text-cyan-800 border border-cyan-200">
              {delivery.trackingCode || delivery.id}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700 border border-slate-200">
              {formatStatus(delivery.status)}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 xl:grid-cols-[340px,1fr] gap-4">
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 shadow-sm">
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
            <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
              Pickup
            </p>
            <p className="font-semibold text-slate-900">
              {delivery.pickupAddress || "Pickup address unavailable"}
            </p>
            {isBeforePickupStatus && etaInfo && (
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                {etaInfo.label}: {etaInfo.text}
              </p>
            )}
            {!!orderedCarrierRouteStops.length && (
              <p className="mt-1 text-xs text-slate-500">
                Linked route: {orderedCarrierRouteStops.length} remaining stop
                {orderedCarrierRouteStops.length === 1 ? "" : "s"}
              </p>
            )}
          </div>

          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
            <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
              Destination
            </p>
            <p className="font-semibold text-slate-900">
              {delivery.deliveryAddress || "Destination address unavailable"}
            </p>
            {!isBeforePickupStatus && etaInfo && (
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                {etaInfo.label}: {etaInfo.text}
              </p>
            )}
            {etaInfo?.detail && (
              <p className="mt-1 text-xs text-slate-500">{etaInfo.detail}</p>
            )}
          </div>

          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Map legend
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-800">
              <li>
                <span style={{ color: "#059669" }}>⬤</span> Green: Pickup
              </li>
              <li>
                <span style={{ color: "#F59E0B" }}>⬤</span> Amber: Awaiting
                acceptance
              </li>
              <li>
                <span style={{ color: "#DC2626" }}>⬤</span> Red: Dropoff
              </li>
              <li>
                <span style={{ color: "#F97316" }}>⬤</span> Orange: Unaccepted
                delivery stop
              </li>
              <li>
                <span style={{ color: "#3B82F6" }}>⬤</span> Blue: Carrier
              </li>
              <li>
                <span style={{ color: "#7c3aed" }}>━</span> Purple: Carrier
                linked route
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Quick locate
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => focusPoint(pickupPoint)}
                className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-900 hover:bg-amber-200"
              >
                Pickup
              </button>
              <button
                type="button"
                onClick={() => focusPoint(currentPoint)}
                disabled={!showCarrierMarker}
                className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-800 hover:bg-blue-200"
              >
                {showCarrierMarker ? "Carrier" : "Carrier hidden until pickup"}
              </button>
              <button
                type="button"
                onClick={() => focusPoint(routeEndPoint)}
                className="rounded-full bg-orange-100 px-3 py-1.5 text-xs font-semibold text-orange-800 hover:bg-orange-200"
              >
                Dropoff
              </button>
            </div>
          </div>

          {visibleManagedSegments.length > 0 && (
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-3">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Visible route rules
              </p>
              <div className="flex flex-wrap gap-2">
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
                        backgroundColor: `${style.strokeColor}14`,
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
        </aside>

        <section className="rounded-2xl border border-slate-200 bg-white overflow-hidden min-h-[70vh] shadow-sm">
          <GoogleMap
            center={mapCenter}
            zoom={13}
            onLoad={(map) => setMapInstance(map)}
            mapContainerStyle={{
              width: "100%",
              height: "100%",
              minHeight: "70vh",
            }}
            options={{
              streetViewControl: false,
              mapTypeControl: true,
              fullscreenControl: true,
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
        </section>
      </div>
    </div>
  );
}
