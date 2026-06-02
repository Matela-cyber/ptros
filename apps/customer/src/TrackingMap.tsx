// apps/customer/src/TrackingMap.tsx
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  db,
  realtimeDb,
  formatEtaCountdown,
  formatRouteNetworkSegmentType,
  getDisplayRouteNetworkSegments,
  getTrackingEtaLabel,
  getRouteNetworkSegmentStyle,
  getTrackingRouteDisplayState,
  isTrackingBeforePickup,
  subscribeRouteNetworkSegments,
  toDeliveryTrackingRouteSummary,
  TRACKING_ROUTE_COLORS,
  type DeliveryTrackingRouteSummary,
  type RouteNetworkSegment,
} from "@config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { ref as rtdbRef, onValue } from "firebase/database";
import { Toaster, toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import MapLegend, { type LegendItem } from "./components/MapLegend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCarSide,
  faCircleCheck,
  faClipboardList,
  faLocationDot,
  faMapLocationDot,
  faTruck,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

declare global {
  interface Window {
    google: any;
    mapsReady?: boolean;
    MarkerClusterer?: any;
  }
}

interface Delivery {
  id: string;
  trackingCode: string;
  status: string;
  pickupAddress: string;
  deliveryAddress: string;
  estimatedDeliveryTime?: string;
  distance?: number;
  currentLocation?: {
    lat: number;
    lng: number;
    address?: string;
    timestamp?: Date;
  };
  pickupLocation?: {
    lat: number;
    lng: number;
    address: string;
  };
  deliveryLocation?: {
    lat: number;
    lng: number;
    address: string;
  };
  carrierName?: string;
  deliveryContactName?: string;
  deliveryDate?: any;
  route?: {
    polyline?: string;
  };
  routeHistory?: {
    activePolyline?: string;
  };
  otpCode?: string;
  otpVerified?: boolean;
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

interface MarkerData {
  id: string;
  type: "pickup" | "delivery" | "current";
  lat: number;
  lng: number;
  title: string;
  content: string;
  deliveryId: string;
}

const getCircleMarkerIcon = (fillColor: string, scale: number) => ({
  path: window.google?.maps?.SymbolPath?.CIRCLE ?? 0,
  scale,
  fillColor,
  fillOpacity: 1,
  strokeColor: "#ffffff",
  strokeWeight: 2,
});

const createGradientPolylines = ({
  map,
  path,
  strokeColor = "#2563eb",
  strokeOpacity = 1,
  strokeWeight = 5,
}: {
  map: any;
  path: Array<{ lat: number; lng: number }>;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
}): any[] => {
  if (!path || path.length < 2) return [];
  return [
    new window.google.maps.Polyline({
      path,
      geodesic: true,
      strokeColor,
      strokeOpacity,
      strokeWeight,
      clickable: false,
      zIndex: Math.round(strokeWeight * 10),
      map,
    }),
  ];
};

type Props = { user: any };
type DeliveryFilter = "all" | "active" | "in_transit" | "delivered";

export default function TrackingMap({ user }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [managedSegments, setManagedSegments] = useState<RouteNetworkSegment[]>(
    [],
  );
  const [deliveryTracksMap, setDeliveryTracksMap] = useState<
    Record<string, any>
  >({});
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [mapTilesLoaded, setMapTilesLoaded] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState<string | null>(null);
  const [deliveryFilter, setDeliveryFilter] = useState<DeliveryFilter>("all");
  const [trackingCodeFilter, setTrackingCodeFilter] = useState("");
  const [showRouteKey, setShowRouteKey] = useState(false);
  const [loading, setLoading] = useState(true);

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markersRef = useRef<Map<string, any>>(new Map());
  const markersUpdateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const sharedInfoWindowRef = useRef<any>(null);
  const carrierToPickupPolylineRef = useRef<any[]>([]);
  const pickupToDropoffPolylineRef = useRef<any[]>([]);
  const activePolylineRef = useRef<any[]>([]);
  const plannedPolylineRef = useRef<any[]>([]);
  const routeOverlayPolylinesRef = useRef<any[]>([]);
  const consumedRouteTargetRef = useRef(false);
  const mapTilesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Road paths from DirectionsService — stored in state so updateMarkers
  // automatically re-executes (via useCallback deps) when paths arrive.
  const [roadPaths, setRoadPaths] = useState<{
    approachToPickup: Array<{ lat: number; lng: number }> | null;
    activeToDelivery: Array<{ lat: number; lng: number }> | null;
    linkedRoute: Array<{ lat: number; lng: number }> | null;
    etaLabel: string;
    etaText: string | null;
    stopsAheadCount: number;
    remainingRouteStopCount: number;
  } | null>(null);

  // Default center (Maseru, Lesotho)
  const defaultCenter = { lat: -29.31, lng: 27.48 };
  const activeStatuses = [
    "pending",
    "assigned",
    "accepted",
    "picked_up",
    "in_transit",
    "out_for_delivery",
  ];

  const activeDeliveries = deliveries.filter((d) =>
    activeStatuses.includes(d.status),
  );
  const inTransitDeliveries = deliveries.filter((d) =>
    ["in_transit", "out_for_delivery"].includes(d.status),
  );
  const deliveredDeliveries = deliveries.filter(
    (d) => d.status === "delivered",
  );
  const pinnedDeliveryId = (searchParams.get("deliveryId") || "").trim();

  const statusFilteredDeliveries =
    deliveryFilter === "all"
      ? deliveries
      : deliveryFilter === "active"
        ? activeDeliveries
        : deliveryFilter === "in_transit"
          ? inTransitDeliveries
          : deliveredDeliveries;

  const normalizedTrackingCodeFilter = trackingCodeFilter.trim().toUpperCase();

  const visibleDeliveries = statusFilteredDeliveries.filter((delivery) => {
    if (pinnedDeliveryId) {
      return delivery.id === pinnedDeliveryId;
    }

    if (!normalizedTrackingCodeFilter) return true;
    return String(delivery.trackingCode || "")
      .toUpperCase()
      .includes(normalizedTrackingCodeFilter);
  });

  // Apply tracking code passed from Track Order page
  useEffect(() => {
    const codeFromQuery = (searchParams.get("trackingCode") || "")
      .trim()
      .toUpperCase();
    setTrackingCodeFilter(codeFromQuery);
  }, [searchParams]);

  // Consume deliveryId/trackingCode once, then clear from URL so it doesn't stick
  // when navigating away and coming back to Live Tracking later.
  useEffect(() => {
    if (consumedRouteTargetRef.current || loading) return;

    const hasPinnedDelivery = Boolean(
      (searchParams.get("deliveryId") || "").trim(),
    );
    const hasTrackingCode = Boolean(
      (searchParams.get("trackingCode") || "").trim(),
    );

    if (!hasPinnedDelivery && !hasTrackingCode) return;

    consumedRouteTargetRef.current = true;

    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("deliveryId");
    nextParams.delete("trackingCode");
    setSearchParams(nextParams, { replace: true });
  }, [loading, searchParams, setSearchParams]);

  // Listen for Google Maps ready signal
  useEffect(() => {
    const checkGoogleMaps = () => {
      if (window.google?.maps) {
        console.log("Google Maps API is loaded");
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
        setMapError("Google Maps failed to load. Please refresh the page.");
      }
    }, 15000);

    return () => {
      window.removeEventListener("mapsReady", handleMapsReady);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    return subscribeRouteNetworkSegments(setManagedSegments);
  }, []);

  // Load only customer's deliveries
  useEffect(() => {
    if (!user?.uid) return;

    setLoading(true);

    const deliveriesQuery = query(
      collection(db, "deliveries"),
      where("customerId", "==", user.uid),
      where("status", "in", [
        "pending",
        "assigned",
        "accepted",
        "picked_up",
        "in_transit",
        "out_for_delivery",
        "delivered",
      ]),
    );

    const unsubscribeDeliveries = onSnapshot(
      deliveriesQuery,
      (snapshot) => {
        const deliveryList: Delivery[] = [];

        snapshot.forEach((doc) => {
          const data = doc.data();

          deliveryList.push({
            id: doc.id,
            trackingCode: data.trackingCode,
            status: data.status,
            pickupAddress: data.pickupAddress,
            deliveryAddress: data.deliveryAddress,
            estimatedDeliveryTime: data.estimatedDeliveryTime,
            distance: data.distance,
            currentLocation: data.currentLocation,
            pickupLocation: data.pickupLocation,
            deliveryLocation: data.deliveryLocation,
            carrierName: data.carrierName,
            deliveryContactName: data.deliveryContactName,
            deliveryDate: data.deliveryDate,
            route: data.route,
            routeHistory: data.routeHistory,
            otpCode: data.otpCode,
            otpVerified: data.otpVerified,
            proofOfDelivery: data.proofOfDelivery,
            routeReviews: data.routeReviews || [],
            routeFeedback: data.routeFeedback || [],
            trackingRouteSummary: toDeliveryTrackingRouteSummary(
              data.trackingRouteSummary,
            ),
            eta: data.eta ?? null,
          });
        });

        setDeliveries(deliveryList);
        setLoading(false);
      },
      (error) => {
        console.error("Error loading deliveries:", error);
        setLoading(false);
      },
    );

    // Listen to RTDB delivery tracks for real-time location updates
    const dTracksRef = rtdbRef(realtimeDb, "deliveryTracks");
    const dTracksUnsub = onValue(dTracksRef, (snap) => {
      const val = snap.val() || {};
      setDeliveryTracksMap(val);
    });

    return () => {
      unsubscribeDeliveries();
      try {
        dTracksUnsub && dTracksUnsub();
      } catch (e) {}
    };
  }, [user?.uid]);

  // Keep selected delivery in sync with current filter
  useEffect(() => {
    if (pinnedDeliveryId) {
      const pinnedMatch = visibleDeliveries.find(
        (d) => d.id === pinnedDeliveryId,
      );

      if (pinnedMatch) {
        if (selectedDelivery !== pinnedMatch.id) {
          setSelectedDelivery(pinnedMatch.id);
        }
      } else if (selectedDelivery !== null) {
        setSelectedDelivery(null);
      }

      return;
    }

    if (visibleDeliveries.length === 0) {
      if (selectedDelivery !== null) {
        setSelectedDelivery(null);
      }
      return;
    }

    const existsInVisible = visibleDeliveries.some(
      (delivery) => delivery.id === selectedDelivery,
    );

    if (!selectedDelivery || !existsInVisible) {
      setSelectedDelivery(visibleDeliveries[0].id);
    }
  }, [visibleDeliveries, selectedDelivery, pinnedDeliveryId]);

  // Notify when a tracking code filter yields no match
  useEffect(() => {
    if (!normalizedTrackingCodeFilter || loading) return;
    if (deliveries.length === 0) return;
    if (visibleDeliveries.length > 0) return;

    toast.error(`No order found for ${normalizedTrackingCodeFilter}`);
  }, [
    normalizedTrackingCodeFilter,
    deliveries.length,
    visibleDeliveries.length,
    loading,
  ]);

  // Initialize Google Map (only after the map container is mounted)
  useEffect(() => {
    if (!googleMapsLoaded || !window.google || !mapRef.current) return;
    if (mapInstance.current) return;

    console.log("Initializing Tracking Map...");

    try {
      const mapOptions = {
        center: defaultCenter,
        zoom: 12,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
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
      console.log("Tracking Map initialized successfully");

      const onTilesLoaded = window.google.maps.event.addListenerOnce(
        map,
        "tilesloaded",
        () => {
          setMapTilesLoaded(true);
          if (mapTilesTimeoutRef.current) {
            clearTimeout(mapTilesTimeoutRef.current);
            mapTilesTimeoutRef.current = null;
          }
        },
      );

      // Force resize/recenter shortly after mount to avoid gray-map rendering
      // when container layout settles after route transitions.
      setTimeout(() => {
        try {
          if (!mapInstance.current || !window.google?.maps?.event) return;
          window.google.maps.event.trigger(mapInstance.current, "resize");
          mapInstance.current.setCenter(defaultCenter);
        } catch (resizeError) {
          console.warn("Map resize trigger failed:", resizeError);
        }
      }, 120);

      mapTilesTimeoutRef.current = setTimeout(() => {
        if (!mapTilesLoaded) {
          setMapError(
            "Map tiles did not load. Check internet connection and Google Maps API key referrer restrictions for this URL.",
          );
        }
      }, 12000);

      markersRef.current = new Map();
      setMapError(null);

      return () => {
        try {
          if (onTilesLoaded) {
            window.google.maps.event.removeListener(onTilesLoaded);
          }
        } catch {}
        if (mapTilesTimeoutRef.current) {
          clearTimeout(mapTilesTimeoutRef.current);
          mapTilesTimeoutRef.current = null;
        }
      };
    } catch (error) {
      console.error("Error initializing map:", error);
      setMapError(
        "Failed to initialize map. Please check console for details.",
      );
    }
  }, [googleMapsLoaded, loading, deliveries.length, mapTilesLoaded]);

  // Reset road paths immediately when the selected delivery changes so stale
  // paths from the previous delivery are not briefly shown.
  useEffect(() => {
    setRoadPaths(null);
  }, [selectedDelivery]);

  // Compute road paths + ETA for the selected delivery via DirectionsService.
  // Setting state (not a ref) triggers updateMarkers re-creation when paths arrive.
  useEffect(() => {
    if (!googleMapsLoaded || !selectedDelivery) {
      setRoadPaths(null);
      return;
    }
    const delivery = visibleDeliveries.find((d) => d.id === selectedDelivery);
    if (!delivery?.pickupLocation || !delivery?.deliveryLocation) {
      setRoadPaths(null);
      return;
    }

    // Directions API disabled in customer tracking map.
    setRoadPaths(null);
  }, [
    selectedDelivery,
    googleMapsLoaded,
    visibleDeliveries,
    deliveryTracksMap,
  ]);

  // Update markers and route line
  const updateMarkers = useCallback(() => {
    if (
      !mapInstance.current ||
      !window.google ||
      !googleMapsLoaded ||
      !selectedDelivery
    )
      return;

    const delivery = visibleDeliveries.find((d) => d.id === selectedDelivery);
    if (!delivery) return;

    const liveTrack = deliveryTracksMap[delivery.id];
    const effectiveCurrentLocation =
      liveTrack &&
      typeof liveTrack.lat === "number" &&
      typeof liveTrack.lng === "number"
        ? {
            lat: liveTrack.lat,
            lng: liveTrack.lng,
            timestamp:
              typeof liveTrack.timestamp === "number"
                ? new Date(liveTrack.timestamp)
                : delivery.currentLocation?.timestamp,
            address: delivery.currentLocation?.address,
          }
        : delivery.currentLocation;

    // Build marker data for selected delivery
    const newMarkerData: MarkerData[] = [];

    // Add pickup marker
    if (delivery.pickupLocation) {
      newMarkerData.push({
        id: `pickup-${delivery.id}`,
        type: "pickup",
        lat: delivery.pickupLocation.lat,
        lng: delivery.pickupLocation.lng,
        title: "Pickup Location",
        content: `
          <div style="padding: 10px; min-width: 220px; font-family: system-ui;">
            <h3 style="margin: 0 0 5px 0; color: #059669; font-size: 14px; font-weight: 600;">Pickup Point</h3>
            <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">${delivery.pickupAddress}</p>
            <p style="margin: 0; font-size: 11px; color: #6B7280;">
              ${delivery.pickupLocation.lat.toFixed(4)}, ${delivery.pickupLocation.lng.toFixed(4)}
            </p>
          </div>
        `,
        deliveryId: delivery.id,
      });
    }

    const { showCarrierMarker: showCarrier } = getTrackingRouteDisplayState(
      delivery.status,
    );
    const pickupPosition = delivery.pickupLocation
      ? { lat: delivery.pickupLocation.lat, lng: delivery.pickupLocation.lng }
      : null;
    const deliveryPosition = delivery.deliveryLocation
      ? {
          lat: delivery.deliveryLocation.lat,
          lng: delivery.deliveryLocation.lng,
        }
      : null;
    const carrierPosition =
      effectiveCurrentLocation && showCarrier
        ? {
            lat: effectiveCurrentLocation.lat,
            lng: effectiveCurrentLocation.lng,
          }
        : null;

    const syncMarker = (
      key: string,
      position: { lat: number; lng: number } | null,
      title: string,
      icon: google.maps.Icon | google.maps.Symbol,
      zIndex: number,
      details: string[],
    ) => {
      const existing = markersRef.current.get(key);
      if (!position) {
        existing?.setMap(null);
        markersRef.current.delete(key);
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
          map: mapInstance.current,
          icon,
          title,
          zIndex,
        });
        marker.addListener("click", () => {
          if (!sharedInfoWindowRef.current) {
            sharedInfoWindowRef.current = new window.google.maps.InfoWindow();
          }
          sharedInfoWindowRef.current.setContent(html);
          sharedInfoWindowRef.current.open(mapInstance.current, marker);
        });
        markersRef.current.set(key, marker);
      }
    };

    syncMarker(
      "pickup",
      pickupPosition,
      "Pickup Location",
      getCircleMarkerIcon("#059669", 9),
      110,
      [delivery.pickupAddress || "Pickup unavailable"],
    );

    syncMarker(
      "delivery",
      deliveryPosition,
      "Delivery Location",
      getCircleMarkerIcon("#DC2626", 9),
      110,
      [delivery.deliveryAddress || "Destination unavailable"],
    );

    syncMarker(
      "carrier",
      carrierPosition,
      delivery.carrierName
        ? `${delivery.carrierName} (Carrier)`
        : "Carrier location",
      getCircleMarkerIcon("#7c3aed", 12),
      120,
      [
        `Status: ${delivery.status.replace(/_/g, " ")}`,
        delivery.carrierName
          ? `Carrier: ${delivery.carrierName}`
          : "Carrier unavailable",
      ],
    );

    const markersForBounds: any[] = [];
    markersRef.current.forEach((marker) => {
      if (marker.getMap()) {
        markersForBounds.push(marker);
      }
    });

    // Draw route line if we have all locations
    carrierToPickupPolylineRef.current.forEach((p) => p.setMap(null));
    carrierToPickupPolylineRef.current = [];
    pickupToDropoffPolylineRef.current.forEach((p) => p.setMap(null));
    pickupToDropoffPolylineRef.current = [];
    activePolylineRef.current.forEach((p) => p.setMap(null));
    activePolylineRef.current = [];
    plannedPolylineRef.current.forEach((p) => p.setMap(null));
    plannedPolylineRef.current = [];
    routeOverlayPolylinesRef.current.forEach((polyline) =>
      polyline.setMap(null),
    );
    routeOverlayPolylinesRef.current = [];

    if (delivery.pickupLocation && delivery.deliveryLocation) {
      const pickupPoint = {
        lat: delivery.pickupLocation.lat,
        lng: delivery.pickupLocation.lng,
      };
      const currentPoint = effectiveCurrentLocation
        ? {
            lat: effectiveCurrentLocation.lat,
            lng: effectiveCurrentLocation.lng,
          }
        : null;
      const dropoffPoint = {
        lat: delivery.deliveryLocation.lat,
        lng: delivery.deliveryLocation.lng,
      };

      const { showCarrierToPickupRoute, showCarrierToDropoffRoute } =
        getTrackingRouteDisplayState(delivery.status);

      if (showCarrierToPickupRoute && currentPoint) {
        carrierToPickupPolylineRef.current = createGradientPolylines({
          map: mapInstance.current,
          path: [currentPoint, pickupPoint],
          strokeColor: TRACKING_ROUTE_COLORS.carrierToPickup,
          strokeOpacity: 0.95,
          strokeWeight: 6,
        });
      } else if (showCarrierToDropoffRoute && currentPoint) {
        activePolylineRef.current = createGradientPolylines({
          map: mapInstance.current,
          path: [currentPoint, dropoffPoint],
          strokeColor: TRACKING_ROUTE_COLORS.carrierToDropoff,
          strokeOpacity: 0.95,
          strokeWeight: 6,
        });
      }

      pickupToDropoffPolylineRef.current = createGradientPolylines({
        map: mapInstance.current,
        path: [pickupPoint, dropoffPoint],
        strokeColor: TRACKING_ROUTE_COLORS.pickupToDropoff,
        strokeOpacity: 0.95,
        strokeWeight: 5,
      });

      const relevantManagedSegments = getDisplayRouteNetworkSegments(
        managedSegments,
        [
          delivery.pickupLocation,
          delivery.deliveryLocation,
          effectiveCurrentLocation,
        ],
        { thresholdKm: 10, fallbackLimit: 120 },
      );

      relevantManagedSegments.forEach((segment) => {
        const style = getRouteNetworkSegmentStyle(segment);
        const polyline = new window.google.maps.Polyline({
          path: [segment.start, segment.end],
          geodesic: true,
          strokeColor: style.strokeColor,
          strokeOpacity: style.strokeOpacity,
          strokeWeight: style.strokeWeight,
          map: mapInstance.current,
        });

        polyline.addListener("click", () => {
          if (!sharedInfoWindowRef.current) {
            sharedInfoWindowRef.current = new window.google.maps.InfoWindow();
          }
          sharedInfoWindowRef.current.setPosition(segment.start);
          sharedInfoWindowRef.current.setContent(`
            <div style="padding:10px; min-width:220px; font-family:system-ui;">
              <h3 style="margin:0 0 6px 0; font-size:14px; color:${style.strokeColor};">${segment.name}</h3>
              <p style="margin:0 0 4px 0; font-size:12px; color:#475569;">${formatRouteNetworkSegmentType(segment.type)}</p>
              <p style="margin:0; font-size:11px; color:#64748b;">${segment.note || "No note added."}</p>
            </div>
          `);
          sharedInfoWindowRef.current.open({ map: mapInstance.current });
        });

        routeOverlayPolylinesRef.current.push(polyline);
      });

      (delivery.routeReviews || [])
        .filter((review) => review.start && review.end)
        .forEach((review) => {
          const polyline = new window.google.maps.Polyline({
            path: [review.start!, review.end!],
            geodesic: true,
            strokeColor: review.temporary ? "#f59e0b" : "#dc2626",
            strokeOpacity: 1,
            strokeWeight: 5,
            map: mapInstance.current,
          });
          routeOverlayPolylinesRef.current.push(polyline);
        });

      (delivery.routeFeedback || [])
        .filter((feedback) => feedback.start && feedback.end)
        .forEach((feedback) => {
          const polyline = new window.google.maps.Polyline({
            path: [feedback.start!, feedback.end!],
            geodesic: true,
            strokeColor: "#2563eb",
            strokeOpacity: 0.8,
            strokeWeight: 4,
            map: mapInstance.current,
          });
          routeOverlayPolylinesRef.current.push(polyline);
        });
    }

    // Fit bounds to all markers
    if (markersForBounds.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      markersForBounds.forEach((marker) => {
        bounds.extend(marker.getPosition());
      });
      if (!bounds.isEmpty()) {
        mapInstance.current.fitBounds(bounds, 50);
      }
    }
  }, [
    visibleDeliveries,
    deliveryTracksMap,
    managedSegments,
    selectedDelivery,
    googleMapsLoaded,
    roadPaths,
  ]);

  // Debounced marker updates
  useEffect(() => {
    if (markersUpdateTimeoutRef.current) {
      clearTimeout(markersUpdateTimeoutRef.current);
    }

    markersUpdateTimeoutRef.current = setTimeout(() => {
      updateMarkers();
    }, 300);

    return () => {
      if (markersUpdateTimeoutRef.current) {
        clearTimeout(markersUpdateTimeoutRef.current);
      }
    };
  }, [
    visibleDeliveries,
    deliveryTracksMap,
    selectedDelivery,
    googleMapsLoaded,
    updateMarkers,
  ]);

  const centerOnDelivery = (deliveryId: string) => {
    const delivery = deliveries.find((d) => d.id === deliveryId);
    if (delivery?.currentLocation && mapInstance.current) {
      mapInstance.current.setCenter({
        lat: delivery.currentLocation.lat,
        lng: delivery.currentLocation.lng,
      });
      mapInstance.current.setZoom(16);
    }
  };

  const focusPoint = (point?: { lat: number; lng: number } | null) => {
    if (!point || !mapInstance.current) return;
    mapInstance.current.setCenter(point);
    mapInstance.current.setZoom(16);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "assigned":
        return "bg-blue-50 border-blue-200 text-blue-700";
      case "picked_up":
        return "bg-purple-50 border-purple-200 text-purple-700";
      case "in_transit":
        return "bg-amber-50 border-amber-200 text-amber-700";
      case "out_for_delivery":
        return "bg-blue-50 border-blue-200 text-blue-700";
      case "delivered":
        return "bg-green-50 border-green-200 text-green-700";
      default:
        return "bg-gray-50 border-gray-200 text-gray-700";
    }
  };

  const getStatusIcon = (status: string): IconDefinition => {
    switch (status) {
      case "assigned":
        return faClipboardList;
      case "picked_up":
        return faBox;
      case "in_transit":
        return faTruck;
      case "out_for_delivery":
        return faCarSide;
      case "delivered":
        return faCircleCheck;
      default:
        return faLocationDot;
    }
  };

  const selectedDeliveryData = selectedDelivery
    ? visibleDeliveries.find((delivery) => delivery.id === selectedDelivery)
    : null;
  const selectedLiveTrack = selectedDeliveryData
    ? deliveryTracksMap[selectedDeliveryData.id]
    : null;
  const selectedLastUpdateMs =
    typeof selectedLiveTrack?.timestamp === "number"
      ? selectedLiveTrack.timestamp
      : selectedDeliveryData?.currentLocation?.timestamp instanceof Date
        ? selectedDeliveryData.currentLocation.timestamp.getTime()
        : null;
  const selectedFreshnessMinutes = selectedLastUpdateMs
    ? Math.max(0, Math.round((Date.now() - selectedLastUpdateMs) / 60000))
    : null;
  const visibleManagedSegments = useMemo(
    () =>
      selectedDeliveryData
        ? getDisplayRouteNetworkSegments(
            managedSegments,
            [
              selectedDeliveryData.pickupLocation,
              selectedDeliveryData.deliveryLocation,
              selectedLiveTrack
                ? {
                    lat: selectedLiveTrack.lat,
                    lng: selectedLiveTrack.lng,
                  }
                : selectedDeliveryData.currentLocation,
            ],
            { thresholdKm: 10, fallbackLimit: 40 },
          )
        : [],
    [managedSegments, selectedDeliveryData, selectedLiveTrack],
  );

  if (!googleMapsLoaded) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Loading map...
        </h3>
        <p className="text-gray-500">This may take a few moments</p>
      </div>
    );
  }

  if (mapError) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center">
        <div className="text-6xl mb-4 text-blue-600">
          <FontAwesomeIcon icon={faMapLocationDot} />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Map Error</h3>
        <p className="text-red-600 mb-4">{mapError}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="ml-4 text-gray-600">Loading your deliveries...</p>
      </div>
    );
  }

  // Map legend — dynamic based on selected delivery's status
  const selectedDeliveryObj = selectedDelivery
    ? visibleDeliveries.find((d) => d.id === selectedDelivery)
    : null;
  const {
    showCarrierMarker: legendShowCarrier,
    showCarrierToPickupRoute: legendShowC2P,
    showCarrierToDropoffRoute: legendShowC2D,
  } = getTrackingRouteDisplayState(selectedDeliveryObj?.status);
  const legendItems: LegendItem[] = [
    { color: "#059669", label: "Pickup location", opacity: 1 },
    { color: "#DC2626", label: "Dropoff location", opacity: 1 },
    ...(legendShowCarrier
      ? [{ color: "#7c3aed", label: "Carrier position", opacity: 1 }]
      : []),
    ...(legendShowC2P
      ? [
          {
            color: TRACKING_ROUTE_COLORS.carrierToPickup,
            label: "Carrier → Pickup",
            opacity: 0.9,
          },
        ]
      : []),
    ...(legendShowC2D
      ? [
          {
            color: TRACKING_ROUTE_COLORS.carrierToDropoff,
            label: "Carrier → Dropoff",
            opacity: 0.9,
          },
        ]
      : []),
    {
      color: TRACKING_ROUTE_COLORS.pickupToDropoff,
      label: "Pickup → Dropoff",
      opacity: 0.7,
    },
  ];

  return (
    <div>
      <Toaster position="top-right" />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Track Your Orders</h1>
        <p className="text-gray-600 mt-2">
          Real-time tracking of your deliveries
        </p>
      </div>

      <div className="mb-6 rounded-xl bg-white p-4 shadow sm:p-5">
        <label
          htmlFor="tracking-code-filter"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Tracking code filter
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="tracking-code-filter"
            type="text"
            value={trackingCodeFilter}
            onChange={(e) => {
              const value = e.target.value.toUpperCase();
              setTrackingCodeFilter(value);

              const nextParams = new URLSearchParams(searchParams);
              nextParams.delete("deliveryId");
              if (value.trim()) {
                nextParams.set("trackingCode", value.trim());
              } else {
                nextParams.delete("trackingCode");
              }
              setSearchParams(nextParams, { replace: true });
            }}
            placeholder="e.g., PTR-001234"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 font-mono text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => {
              setTrackingCodeFilter("");
              const nextParams = new URLSearchParams(searchParams);
              nextParams.delete("deliveryId");
              nextParams.delete("trackingCode");
              setSearchParams(nextParams, { replace: true });
            }}
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Clear code
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button
          type="button"
          onClick={() => setDeliveryFilter("active")}
          className={`p-4 rounded-xl shadow text-left border-2 transition ${
            deliveryFilter === "active"
              ? "bg-blue-50 border-blue-300"
              : "bg-white border-transparent hover:border-blue-200"
          }`}
        >
          <div className="text-sm text-gray-500">Active Orders</div>
          <div className="text-2xl font-bold text-blue-600">
            {activeDeliveries.length}
          </div>
        </button>
        <button
          type="button"
          onClick={() => setDeliveryFilter("in_transit")}
          className={`p-4 rounded-xl shadow text-left border-2 transition ${
            deliveryFilter === "in_transit"
              ? "bg-amber-50 border-amber-300"
              : "bg-white border-transparent hover:border-amber-200"
          }`}
        >
          <div className="text-sm text-gray-500">In Transit</div>
          <div className="text-2xl font-bold text-amber-600">
            {inTransitDeliveries.length}
          </div>
        </button>
        <button
          type="button"
          onClick={() => setDeliveryFilter("delivered")}
          className={`p-4 rounded-xl shadow text-left border-2 transition ${
            deliveryFilter === "delivered"
              ? "bg-green-50 border-green-300"
              : "bg-white border-transparent hover:border-green-200"
          }`}
        >
          <div className="text-sm text-gray-500">Delivered</div>
          <div className="text-2xl font-bold text-green-600">
            {deliveredDeliveries.length}
          </div>
        </button>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold">{visibleDeliveries.length}</span>{" "}
          order{visibleDeliveries.length === 1 ? "" : "s"}
        </p>
        <button
          type="button"
          onClick={() => setDeliveryFilter("all")}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          Show all
        </button>
      </div>

      {/* No Orders Message */}
      {visibleDeliveries.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <div className="text-6xl mb-4 text-blue-600">
            <FontAwesomeIcon icon={faBox} />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {deliveries.length === 0
              ? "No active orders"
              : "No orders in this filter"}
          </h3>
          <p className="text-gray-500">
            {deliveries.length === 0
              ? "Your orders will appear here once they are assigned to a carrier"
              : "Try another card above or click Show all"}
          </p>
        </div>
      ) : (
        <>
          {/* Map Container */}
          <div className="bg-white rounded-xl shadow overflow-hidden mb-8">
            <div className="border-b px-6 py-4 bg-gray-50">
              <div className="flex items-center justify-end">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
                    <span>Pickup</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                    <span>Current</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
                    <span>Destination</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                ref={mapRef}
                className="w-full h-[500px] bg-gray-100"
                style={{ minHeight: "500px" }}
              />

              <div className="absolute bottom-4 left-4 z-10">
                <MapLegend
                  items={legendItems}
                  title="Multi-Delivery Tracking"
                />
              </div>

              <div className="absolute top-4 left-4 z-20">
                <button
                  type="button"
                  onClick={() => setShowRouteKey((prev) => !prev)}
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-50 text-sm font-medium text-gray-700"
                >
                  {showRouteKey ? "Hide Route Key" : "Show Route Key"}
                </button>
              </div>

              {showRouteKey && (
                <MapLegend
                  title="Route key"
                  items={[
                    {
                      color: "#059669",
                      opacity: 1,
                      label: "Pickup",
                      description: "Pickup marker",
                    },
                    {
                      color: TRACKING_ROUTE_COLORS.carrierToPickup,
                      opacity: 1,
                      label: "Carrier → pickup when accepted",
                      description:
                        "Orange line connects carrier to pickup after acceptance",
                    },
                    {
                      color: TRACKING_ROUTE_COLORS.carrierToDropoff,
                      opacity: 1,
                      label: "Carrier → dropoff after pickup",
                      description:
                        "Green line connects carrier to dropoff after pickup",
                    },
                    {
                      color: TRACKING_ROUTE_COLORS.pickupToDropoff,
                      opacity: 1,
                      label: "Pickup → dropoff baseline",
                      description:
                        "Blue baseline connects pickup and dropoff for reference",
                    },
                    {
                      color: "#16a34a",
                      opacity: 0.92,
                      label: "Managed shortcut",
                      description: "Coordinator-approved local route",
                    },
                    {
                      color: "#dc2626",
                      opacity: 0.95,
                      label: "Blocked / rejected",
                      description: "Avoid this segment",
                    },
                  ]}
                />
              )}
            </div>

            <div className="border-t px-6 py-4 bg-gray-50">
              <div className="text-sm text-gray-500">
                Click on markers for details. Your package location updates in
                real-time.
              </div>
            </div>
          </div>

          {/* Order Selection & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Orders List */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">Your Orders</h3>
              <div className="space-y-3">
                {visibleDeliveries.map((delivery) => (
                  <div
                    key={delivery.id}
                    onClick={() => {
                      setSelectedDelivery(delivery.id);
                      centerOnDelivery(delivery.id);
                    }}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                      selectedDelivery === delivery.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-bold text-gray-800">
                          {delivery.trackingCode}
                        </div>
                        <div
                          className={`text-xs mt-1 inline-block px-2 py-1 rounded ${getStatusColor(delivery.status)}`}
                        >
                          <FontAwesomeIcon
                            icon={getStatusIcon(delivery.status)}
                            className="mr-1"
                          />
                          {delivery.status.replace(/_/g, " ")}
                        </div>
                      </div>
                    </div>
                    {delivery.distance && (
                      <div className="text-xs text-gray-500 mt-2">
                        Distance: {delivery.distance} km
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Order Details */}
            <div className="lg:col-span-2">
              {selectedDelivery &&
              visibleDeliveries.find((d) => d.id === selectedDelivery)
                ? (() => {
                    const delivery = visibleDeliveries.find(
                      (d) => d.id === selectedDelivery,
                    )!;
                    const displayOtp =
                      delivery.proofOfDelivery?.otp || delivery.otpCode;
                    return (
                      <div className="space-y-6">
                        {/* Order Summary */}
                        <div className="bg-white rounded-xl shadow p-6">
                          <h4 className="text-lg font-bold text-gray-800 mb-4">
                            Order Summary
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <div className="text-sm text-gray-600">
                                Tracking Code
                              </div>
                              <div className="font-bold text-gray-800">
                                {delivery.trackingCode}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">
                                Status
                              </div>
                              <div
                                className={`inline-block px-3 py-1 rounded-lg text-sm font-medium ${getStatusColor(delivery.status)}`}
                              >
                                <FontAwesomeIcon
                                  icon={getStatusIcon(delivery.status)}
                                  className="mr-1"
                                />
                                {delivery.status.replace(/_/g, " ")}
                              </div>
                            </div>
                            {delivery.carrierName && (
                              <div>
                                <div className="text-sm text-gray-600">
                                  Carrier
                                </div>
                                <div className="font-medium text-gray-800">
                                  {delivery.carrierName}
                                </div>
                              </div>
                            )}
                            {delivery.distance && (
                              <div>
                                <div className="text-sm text-gray-600">
                                  Distance
                                </div>
                                <div className="font-medium text-gray-800">
                                  {delivery.distance} km
                                </div>
                              </div>
                            )}
                            {delivery.estimatedDeliveryTime && (
                              <div>
                                <div className="text-sm text-gray-600">
                                  Estimated Delivery
                                </div>
                                <div className="font-medium text-green-600">
                                  {delivery.estimatedDeliveryTime}
                                </div>
                              </div>
                            )}
                            {selectedDelivery === delivery.id &&
                              roadPaths?.etaText && (
                                <div>
                                  <div className="text-sm text-gray-600">
                                    {roadPaths.etaLabel}
                                  </div>
                                  <div className="font-medium text-emerald-600">
                                    ⏱ {roadPaths.etaText}
                                  </div>
                                </div>
                              )}
                            {selectedDelivery === delivery.id &&
                              !roadPaths?.etaText &&
                              delivery.eta &&
                              (() => {
                                const prePickup = isTrackingBeforePickup(
                                  delivery.status,
                                );
                                const etaMs = prePickup
                                  ? delivery.eta.pickupEtaMs
                                  : delivery.eta.deliveryEtaMs;
                                const remaining = etaMs
                                  ? Math.max(0, etaMs - Date.now())
                                  : null;
                                const label = getTrackingEtaLabel(
                                  delivery.status,
                                );
                                return remaining !== null ? (
                                  <div>
                                    <div className="text-sm text-gray-600">
                                      {label}
                                    </div>
                                    <div className="font-medium text-emerald-600">
                                      ⏱{" "}
                                      {remaining <= 0
                                        ? "arriving now"
                                        : formatEtaCountdown(remaining)}
                                    </div>
                                  </div>
                                ) : null;
                              })()}
                            {selectedDelivery === delivery.id &&
                              !!roadPaths?.remainingRouteStopCount && (
                                <div>
                                  <div className="text-sm text-gray-600">
                                    Linked route
                                  </div>
                                  <div className="font-medium text-slate-800">
                                    {roadPaths.remainingRouteStopCount}{" "}
                                    remaining stop
                                    {roadPaths.remainingRouteStopCount === 1
                                      ? ""
                                      : "s"}
                                    {roadPaths.stopsAheadCount > 0
                                      ? ` • ${roadPaths.stopsAheadCount} stop${roadPaths.stopsAheadCount === 1 ? "" : "s"} ahead`
                                      : ""}
                                  </div>
                                </div>
                              )}
                            <div>
                              <div className="text-sm text-gray-600">
                                Tracking freshness
                              </div>
                              <div className="mt-1">
                                {selectedFreshnessMinutes === null ? (
                                  <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                                    Waiting for live update
                                  </span>
                                ) : selectedFreshnessMinutes <= 3 ? (
                                  <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                                    Live now • {selectedFreshnessMinutes}m old
                                  </span>
                                ) : selectedFreshnessMinutes <= 15 ? (
                                  <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                                    Delayed • {selectedFreshnessMinutes}m old
                                  </span>
                                ) : (
                                  <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                                    Stale • {selectedFreshnessMinutes}m old
                                  </span>
                                )}
                              </div>
                            </div>
                            {[
                              "picked_up",
                              "in_transit",
                              "out_for_delivery",
                            ].includes(delivery.status) && (
                              <div>
                                <div className="text-sm text-gray-600">
                                  Delivery OTP
                                </div>
                                <div className="mt-1">
                                  {displayOtp ? (
                                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-amber-50 text-amber-800 font-bold tracking-widest border border-amber-200">
                                      {displayOtp}
                                    </span>
                                  ) : (
                                    <span className="text-sm text-gray-500">
                                      Generating after pickup…
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                  Share this OTP with the carrier only when your
                                  package is delivered.
                                </p>
                              </div>
                            )}
                            <div>
                              <div className="text-sm text-gray-600">
                                Map jump
                              </div>
                              <div className="mt-2 flex flex-wrap gap-2">
                                <button
                                  type="button"
                                  onClick={() =>
                                    focusPoint(delivery.pickupLocation)
                                  }
                                  className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 hover:bg-amber-200"
                                >
                                  Pickup
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    focusPoint(
                                      selectedLiveTrack
                                        ? {
                                            lat: selectedLiveTrack.lat,
                                            lng: selectedLiveTrack.lng,
                                          }
                                        : delivery.currentLocation,
                                    )
                                  }
                                  className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 hover:bg-blue-200"
                                >
                                  Current
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    focusPoint(delivery.deliveryLocation)
                                  }
                                  className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800 hover:bg-red-200"
                                >
                                  Dropoff
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {visibleManagedSegments.length > 0 && (
                          <div className="bg-white rounded-xl shadow p-6">
                            <h4 className="text-lg font-bold text-gray-800 mb-4">
                              Visible Route Rules
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {visibleManagedSegments.map((segment) => {
                                const style =
                                  getRouteNetworkSegmentStyle(segment);
                                return (
                                  <button
                                    key={segment.id}
                                    type="button"
                                    onClick={() => focusPoint(segment.start)}
                                    className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                                    style={{
                                      borderColor: style.strokeColor,
                                      color: style.strokeColor,
                                      backgroundColor: `${style.strokeColor}12`,
                                    }}
                                  >
                                    {segment.name} •{" "}
                                    {formatRouteNetworkSegmentType(
                                      segment.type,
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {(delivery.routeReviews?.length ||
                          delivery.routeFeedback?.length) && (
                          <div className="bg-white rounded-xl shadow p-6">
                            <h4 className="text-lg font-bold text-gray-800 mb-4">
                              Route Advisories
                            </h4>
                            <div className="space-y-3 text-sm">
                              {delivery.routeReviews
                                ?.slice(0, 3)
                                .map((review, index) => (
                                  <div
                                    key={`review-${index}`}
                                    className="rounded-lg border border-amber-200 bg-amber-50 p-3"
                                  >
                                    <p className="font-semibold text-amber-800">
                                      {review.type.replace(/_/g, " ")}
                                    </p>
                                    <p className="text-amber-700">
                                      {review.reason ||
                                        "Route adjustment under review"}
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
                                    <p className="text-blue-700">
                                      {feedback.reason ||
                                        feedback.note ||
                                        "Carrier shared route guidance."}
                                    </p>
                                    {feedback.start && (
                                      <button
                                        type="button"
                                        onClick={() =>
                                          focusPoint(feedback.start)
                                        }
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

                        {/* Route Details */}
                        <div className="bg-white rounded-xl shadow p-6">
                          <h4 className="text-lg font-bold text-gray-800 mb-4">
                            Route Information
                          </h4>
                          <div className="space-y-4">
                            {/* Pickup */}
                            <div className="pb-4 border-b">
                              <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                                  1
                                </div>
                                <div className="ml-3 flex-1">
                                  <div className="text-sm font-semibold text-gray-700">
                                    Pickup Location
                                  </div>
                                  <div className="text-sm text-gray-600 mt-1">
                                    {delivery.pickupAddress}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Current Location */}
                            <div className="pb-4 border-b">
                              <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                  2
                                </div>
                                <div className="ml-3 flex-1">
                                  <div className="text-sm font-semibold text-gray-700">
                                    Current Location
                                  </div>
                                  <div className="text-sm text-gray-600 mt-1">
                                    {delivery.currentLocation?.address ||
                                      "In transit"}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Delivery */}
                            <div>
                              <div className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                                  3
                                </div>
                                <div className="ml-3 flex-1">
                                  <div className="text-sm font-semibold text-gray-700">
                                    Delivery Location
                                  </div>
                                  <div className="text-sm text-gray-600 mt-1">
                                    {delivery.deliveryAddress}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-2">
                                    Recipient: {delivery.deliveryContactName}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()
                : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
