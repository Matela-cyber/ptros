import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  db,
  realtimeDb,
  auth,
  formatRouteNetworkSegmentType,
  getDisplayRouteNetworkSegments,
  getRouteNetworkSegmentStyle,
  isCarrierApproachToPickupStatus,
  isCarrierHeadingToDropoffStatus,
  shouldShowTrackingCarrierMarker,
  subscribeRouteNetworkSegments,
  orderTrackingRouteStops,
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
import { toast, Toaster } from "react-hot-toast";
import { format } from "date-fns";
import DeliveryTimeline from "./DeliveryTimeline";
import { RatingModal } from "./RatingModal";
import MapLegend, { type LegendItem } from "./MapLegend";

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

interface OptimizationReason {
  type?: string;
  description?: string;
  createdAt?: any;
}

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
  inTransitTime?: Date;
  outForDeliveryTime?: Date;
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
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [learnedSegments, setLearnedSegments] = useState<LearnedSegment[]>([]);
  const [routeStops, setRouteStops] = useState<TrackingRouteStop[]>([]);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const markerRefs = useRef<Record<string, google.maps.Marker | null>>({});
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const routePolylineRefs = useRef<google.maps.Polyline[]>([]);

  // Listen for Google Maps ready signal
  useEffect(() => {
    const checkGoogleMaps = () => {
      if (window.google?.maps) {
        console.log("[CustomerTracking] Google Maps API is loaded");
        setGoogleMapsLoaded(true);
        return true;
      }
      return false;
    };

    if (checkGoogleMaps()) {
      return;
    }

    const handleMapsReady = () => {
      if (checkGoogleMaps()) {
        window.removeEventListener("mapsReady", handleMapsReady);
      }
    };

    window.addEventListener("mapsReady", handleMapsReady);

    const timeout = setTimeout(() => {
      if (!window.google?.maps) {
        window.removeEventListener("mapsReady", handleMapsReady);
        console.warn("[CustomerTracking] Google Maps failed to load");
      }
    }, 15000);

    return () => {
      window.removeEventListener("mapsReady", handleMapsReady);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!id) {
      toast.error("No delivery ID provided");
      navigate(isGuest ? "/guest-track" : "/orders");
      return;
    }

    const docRef = doc(db, "deliveries", id);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (!docSnap.exists()) {
        toast.error("Delivery not found");
        navigate(isGuest ? "/guest-track" : "/orders");
        return;
      }

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
        inTransitTime: data.inTransitTime?.toDate(),
        outForDeliveryTime: data.outForDeliveryTime?.toDate(),
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
        otpCode: data.otpCode,
        otpVerified: data.otpVerified,
        senderEmail: data.senderEmail,
        receiverEmail: data.receiverEmail,
        otp: data.otp,
        proofOfDelivery: data.proofOfDelivery,
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
  }, [id, navigate, isGuest]);

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

  // Subscribe to real-time carrier location from dual sources
  useEffect(() => {
    if (!delivery?.id) {
      return;
    }

    // Seed immediately from Firestore (may be stale)
    if (delivery.currentLocation?.lat) {
      setCarrierLocation({
        lat: delivery.currentLocation.lat,
        lng: delivery.currentLocation.lng,
      });
      console.log(
        `[CustomerTracking] Seeded from Firestore currentLocation:`,
        delivery.currentLocation,
      );
    } else {
      console.log(
        `[CustomerTracking] No Firestore currentLocation available (id: ${delivery.id})`,
      );
    }

    const unsubscribers: Array<() => void> = [];

    // Primary subscription: deliveryTracks/{id} — public read, works for guests
    const deliveryTrackRef = rtdbRef(
      realtimeDb,
      `deliveryTracks/${delivery.id}`,
    );
    console.log(
      `[CustomerTracking] Subscribing to deliveryTracks/${delivery.id}`,
    );
    const unsubDeliveryTrack = onValue(deliveryTrackRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const ts = data.timestamp || data.timestampMs || 0;
        console.log(`[CustomerTracking] Got deliveryTracks/${delivery.id}:`, {
          lat: data.lat,
          lng: data.lng,
          timestamp: ts,
          freshness_ms: Date.now() - ts,
        });
        setCarrierLocation({
          lat: data.lat,
          lng: data.lng,
          timestamp: ts,
          accuracy: data.accuracy,
        });
      } else {
        console.log(
          `[CustomerTracking] deliveryTracks/${delivery.id} does not exist`,
        );
      }
    });
    unsubscribers.push(unsubDeliveryTrack);

    // Secondary subscription: tracks/{carrierId} — auth-required fallback for fresher data
    if (delivery.carrierId) {
      const carrierTrackRef = rtdbRef(
        realtimeDb,
        `tracks/${delivery.carrierId}`,
      );
      console.log(
        `[CustomerTracking] Subscribing to tracks/${delivery.carrierId}`,
      );
      const unsubCarrierTrack = onValue(
        carrierTrackRef,
        (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const ts = data.timestamp || data.timestampMs || 0;
            console.log(
              `[CustomerTracking] Got tracks/${delivery.carrierId}:`,
              {
                lat: data.lat,
                lng: data.lng,
                timestamp: ts,
                freshness_ms: Date.now() - ts,
              },
            );
            setCarrierLocation({
              lat: data.lat,
              lng: data.lng,
              timestamp: ts,
              accuracy: data.accuracy,
            });
          } else {
            console.log(
              `[CustomerTracking] tracks/${delivery.carrierId} does not exist`,
            );
          }
        },
        (error) => {
          console.log(
            `[CustomerTracking] tracks/${delivery.carrierId} error (expected for guests):`,
            (error as any).code || error.message,
          );
        },
      );
      unsubscribers.push(unsubCarrierTrack);
    } else {
      console.log(
        `[CustomerTracking] No carrierId available (delivery not assigned yet)`,
      );
    }

    return () => {
      console.log(
        `[CustomerTracking] Cleaning up carrier location subscriptions`,
      );
      unsubscribers.forEach((unsub) => unsub());
    };
  }, [delivery?.id, delivery?.carrierId, delivery?.status]);

  const showCarrierMarker = shouldShowTrackingCarrierMarker(delivery?.status);

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

  useEffect(() => {
    if (!mapInstance.current || !window.google?.maps || !delivery) return;

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
    mapInstance.current.fitBounds(bounds, 60);
  }, [
    carrierLocation,
    delivery?.currentLocation,
    delivery?.deliveryLocation,
    delivery?.pickupLocation,
    showCarrierMarker,
  ]);

  // Initialize Google Map instance when maps are loaded
  useEffect(() => {
    if (!googleMapsLoaded || !window.google || !mapRef.current) return;
    if (mapInstance.current) return;

    console.log("[CustomerTracking] Initializing map...");

    try {
      const mapOptions = {
        center: { lat: -29.31, lng: 27.48 },
        zoom: 13,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      };

      const map = new window.google.maps.Map(mapRef.current, mapOptions);
      mapInstance.current = map;
      console.log("[CustomerTracking] Map initialized");
    } catch (error) {
      console.error("[CustomerTracking] Map initialization error:", error);
    }
  }, [googleMapsLoaded]);

  useEffect(() => {
    Object.values(markerRefs.current).forEach((marker) => marker?.setMap(null));
    markerRefs.current = {};
    infoWindowRef.current?.close();
  }, []);

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
        existing.setMap(mapInstance.current);
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
          infoWindowRef.current?.open(mapInstance.current, marker);
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
          mapInstance.current,
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
          mapInstance.current,
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
          mapInstance.current,
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
    if (!mapInstance.current || !point) return;
    mapInstance.current.panTo(point);
    mapInstance.current.setZoom(16);
  };

  const focusSegment = (segment: RouteNetworkSegment) => {
    if (!mapInstance.current || !window.google?.maps) return;
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(segment.start);
    bounds.extend(segment.end);
    mapInstance.current.fitBounds(bounds, 80);
  };

  // Build map legend items based on delivery status
  const legendItems: LegendItem[] = [
    { color: "#059669", label: "Pickup location", opacity: 1 },
    { color: "#DC2626", label: "Dropoff location", opacity: 1 },
    ...(showCarrierMarker
      ? [
          {
            color: "#3B82F6",
            label: "Carrier position",
            opacity: 1,
          },
        ]
      : []),
    ...(isCarrierApproachToPickupStatus(delivery?.status)
      ? [
          {
            color: "#f97316",
            label: "Carrier → Pickup",
            opacity: 0.9,
          },
        ]
      : []),
    ...(isCarrierHeadingToDropoffStatus(delivery?.status)
      ? [
          {
            color: "#22c55e",
            label: "Carrier → Dropoff",
            opacity: 0.9,
          },
        ]
      : []),
    { color: "#3B82F6", label: "Pickup → Dropoff baseline", opacity: 0.7 },
  ];

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
            {delivery.estimatedDelivery && (
              <p className="text-xs text-gray-500 mt-1">
                Estimated: {format(delivery.estimatedDelivery, "MMM dd, yyyy")}
              </p>
            )}
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
      </div>

      <div className="px-4 py-4 bg-gray-50 border-b border-gray-200">
        <div className="relative w-full h-[52vh] min-h-[360px] lg:min-h-[520px] overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div ref={mapRef} className="w-full h-full" />
          <div className="absolute bottom-4 left-4 z-10">
            <MapLegend items={legendItems} title="Delivery Route" />
          </div>
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

      <div className="bg-white shadow p-4 border-t grid grid-cols-1 lg:grid-cols-4 gap-4">
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
          ) : (
            <>
              <p className="text-sm text-gray-500 font-medium">EST. DELIVERY</p>
              <p className="text-sm text-gray-800">
                {delivery.estimatedDelivery
                  ? format(delivery.estimatedDelivery, "MMM d, h:mm a")
                  : "—"}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Timeline */}
      <DeliveryTimeline
        status={delivery.status}
        pickupTime={delivery.pickupTime}
        inTransitTime={delivery.inTransitTime}
        outForDeliveryTime={delivery.outForDeliveryTime}
        deliveryTime={delivery.deliveryTime}
        acceptedAt={delivery.acceptedAt}
        assignedAt={delivery.assignedAt}
        createdAt={delivery.createdAt}
      />

      {/* OTP Display */}
      {isOrderOwner && shouldShowPickupOtp && pickupOtp && (
        <div className="bg-blue-50 border-t border-blue-200 px-4 py-3">
          <p className="text-sm font-semibold text-blue-900 mb-1">Pickup OTP</p>
          <p className="text-xl font-bold tracking-widest text-blue-800">
            {pickupOtp}
          </p>
          <p className="text-xs text-blue-700 mt-1">
            Share this code with the carrier only when the parcel is collected
            from sender.
          </p>
        </div>
      )}

      {isOrderOwner && shouldShowDeliveryOtp && deliveryOtp && (
        <div className="bg-amber-50 border-t border-amber-200 px-4 py-3">
          <p className="text-sm font-semibold text-amber-900 mb-1">
            Delivery OTP
          </p>
          <p className="text-xl font-bold tracking-widest text-amber-800">
            {deliveryOtp}
          </p>
          <p className="text-xs text-amber-700 mt-1">
            Share this OTP with the carrier only when your package is physically
            delivered.
          </p>
        </div>
      )}

      {/* Rating Section */}
      {delivery.status === "delivered" && delivery.carrierId && (
        <div className="bg-amber-50 border-t border-amber-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-amber-900 mb-1">
                ⭐ Rate Your Delivery
              </p>
              <p className="text-xs text-amber-700">
                Help us improve by rating your experience with{" "}
                {delivery.carrierName || "your carrier"}
              </p>
            </div>
            <button
              onClick={() => setShowRatingModal(true)}
              className="px-3 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 font-semibold text-sm whitespace-nowrap"
            >
              Rate Now
            </button>
          </div>
        </div>
      )}

      {/* Rating Modal */}
      {delivery && delivery.carrierId && (
        <RatingModal
          isOpen={showRatingModal}
          onClose={() => setShowRatingModal(false)}
          deliveryId={delivery.id}
          carrierId={delivery.carrierId}
          carrierName={delivery.carrierName || "Carrier"}
          onRatingSubmitted={() => {
            setShowRatingModal(false);
          }}
        />
      )}
    </div>
  );
}
