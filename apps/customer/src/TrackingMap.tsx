// apps/customer/src/TrackingMap.tsx
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  db,
  realtimeDb,
  formatRouteNetworkSegmentType,
  getDisplayRouteNetworkSegments,
  getRouteNetworkSegmentStyle,
  subscribeRouteNetworkSegments,
  type RouteNetworkSegment,
} from "@config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { ref as rtdbRef, onValue } from "firebase/database";
import { Toaster, toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import MapLegend from "./components/MapLegend";
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
  const markersUpdateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sharedInfoWindowRef = useRef<any>(null);
  const carrierToPickupPolylineRef = useRef<any>(null);
  const pickupToDropoffPolylineRef = useRef<any>(null);
  const activePolylineRef = useRef<any>(null);
  const plannedPolylineRef = useRef<any>(null);
  const routeOverlayPolylinesRef = useRef<any[]>([]);
  const consumedRouteTargetRef = useRef(false);
  const mapTilesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Default center (Maseru, Lesotho)
  const defaultCenter = { lat: -29.31, lng: 27.48 };
  const activeStatuses = [
    "assigned",
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

  // Load only customer's deliveries
  useEffect(() => {
    if (!user?.uid) return;

    setLoading(true);

    const deliveriesQuery = query(
      collection(db, "deliveries"),
      where("customerId", "==", user.uid),
      where("status", "in", [
        "assigned",
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

    // Add current location marker
    if (effectiveCurrentLocation) {
      newMarkerData.push({
        id: `current-${delivery.id}`,
        type: "current",
        lat: effectiveCurrentLocation.lat,
        lng: effectiveCurrentLocation.lng,
        title: `Order: ${delivery.trackingCode}`,
        content: `
          <div style="padding: 10px; min-width: 220px; font-family: system-ui;">
            <h3 style="margin: 0 0 5px 0; color: #1E40AF; font-size: 14px; font-weight: 600;">${delivery.trackingCode}</h3>
            <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">
              Status: <strong>${delivery.status.replace(/_/g, " ")}</strong>
            </p>
            <p style="margin: 0 0 5px 0; font-size: 11px;">
              Location: ${effectiveCurrentLocation.address || "Current location"}
            </p>
            ${
              delivery.carrierName
                ? `<p style="margin: 0 0 5px 0; font-size: 11px; color: #6B7280;">
                Carrier: ${delivery.carrierName}
              </p>`
                : ""
            }
            ${
              delivery.estimatedDeliveryTime
                ? `<p style="margin: 0; font-size: 11px; color: #059669; font-weight: 600;">
                Delivery: ${delivery.estimatedDeliveryTime}
              </p>`
                : ""
            }
          </div>
        `,
        deliveryId: delivery.id,
      });
    }

    // Add delivery marker
    if (delivery.deliveryLocation) {
      newMarkerData.push({
        id: `delivery-${delivery.id}`,
        type: "delivery",
        lat: delivery.deliveryLocation.lat,
        lng: delivery.deliveryLocation.lng,
        title: "Delivery Location",
        content: `
          <div style="padding: 10px; min-width: 220px; font-family: system-ui;">
            <h3 style="margin: 0 0 5px 0; color: #DC2626; font-size: 14px; font-weight: 600;">Delivery Destination</h3>
            <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">${delivery.deliveryAddress}</p>
            <p style="margin: 0 0 5px 0; font-size: 11px;">
              Recipient: <strong>${delivery.deliveryContactName}</strong>
            </p>
            <p style="margin: 0; font-size: 11px; color: #6B7280;">
              ${delivery.deliveryLocation.lat.toFixed(4)}, ${delivery.deliveryLocation.lng.toFixed(4)}
            </p>
          </div>
        `,
        deliveryId: delivery.id,
      });
    }

    // Remove old markers
    const existingIds = new Set(markersRef.current.keys());
    const newIds = new Set(newMarkerData.map((m) => m.id));

    for (const id of existingIds) {
      if (!newIds.has(id)) {
        const marker = markersRef.current.get(id);
        if (marker) {
          marker.setMap(null);
          markersRef.current.delete(id);
        }
      }
    }

    // Add or update markers
    const markersForBounds: any[] = [];

    newMarkerData.forEach((markerData) => {
      const existingMarker = markersRef.current.get(markerData.id);
      const position = { lat: markerData.lat, lng: markerData.lng };

      let marker: any;
      if (existingMarker) {
        existingMarker.setPosition(position);
        marker = existingMarker;
      } else {
        try {
          const iconColor =
            markerData.type === "pickup"
              ? "#059669"
              : markerData.type === "delivery"
                ? "#DC2626"
                : "#3B82F6";

          const icon = {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: iconColor,
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2,
            scale: markerData.type === "current" ? 12 : 9,
          };

          marker = new window.google.maps.Marker({
            position,
            map: mapInstance.current,
            icon,
            title: markerData.title,
          });

          marker.addListener("click", () => {
            if (!sharedInfoWindowRef.current) {
              sharedInfoWindowRef.current = new window.google.maps.InfoWindow();
            }
            sharedInfoWindowRef.current.setContent(markerData.content);
            sharedInfoWindowRef.current.open(mapInstance.current, marker);
          });

          markersRef.current.set(markerData.id, marker);
        } catch (error) {
          console.error(`Error creating marker:`, error);
          return;
        }
      }

      markersForBounds.push(marker);
    });

    // Draw route line if we have all locations
    if (carrierToPickupPolylineRef.current) {
      carrierToPickupPolylineRef.current.setMap(null);
    }
    if (pickupToDropoffPolylineRef.current) {
      pickupToDropoffPolylineRef.current.setMap(null);
    }
    if (activePolylineRef.current) {
      activePolylineRef.current.setMap(null);
    }
    if (plannedPolylineRef.current) {
      plannedPolylineRef.current.setMap(null);
    }
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

      const plannedPath = decodePolyline(delivery.route?.polyline);
      const activePath = decodePolyline(delivery.routeHistory?.activePolyline);
      const routePalette = getRoutePalette(delivery.status);

      plannedPolylineRef.current = new window.google.maps.Polyline({
        path:
          plannedPath.length > 1 ? plannedPath : [pickupPoint, dropoffPoint],
        geodesic: true,
        strokeColor: routePalette.planned,
        strokeOpacity: 0.75,
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
        map: mapInstance.current,
      });

      pickupToDropoffPolylineRef.current = new window.google.maps.Polyline({
        path: [pickupPoint, dropoffPoint],
        geodesic: true,
        strokeColor: routePalette.primary,
        strokeOpacity: 0.4,
        strokeWeight: 5,
        map: mapInstance.current,
      });

      if (delivery.status === "assigned" && currentPoint) {
        carrierToPickupPolylineRef.current = new window.google.maps.Polyline({
          path: [currentPoint, pickupPoint],
          geodesic: true,
          strokeColor: "#fbbf24",
          strokeOpacity: 0.4,
          strokeWeight: 5,
          map: mapInstance.current,
        });
      } else {
        activePolylineRef.current = new window.google.maps.Polyline({
          path:
            activePath.length > 1
              ? activePath
              : currentPoint
                ? [pickupPoint, currentPoint]
                : [pickupPoint, dropoffPoint],
          geodesic: true,
          strokeColor: routePalette.active,
          strokeOpacity: 0.95,
          strokeWeight: 5,
          icons: [
            {
              icon: {
                path: window.google.maps.SymbolPath.FORWARD_OPEN_ARROW,
                scale: 2.2,
                strokeOpacity: 0.9,
              },
              offset: "12px",
              repeat: "40px",
            },
          ],
          map: mapInstance.current,
        });
      }

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

  const getRoutePalette = (status: string) => {
    switch (status) {
      case "picked_up":
        return {
          active: "#8b5cf6",
          primary: "#a78bfa",
          planned: "#c4b5fd",
        };
      case "in_transit":
        return {
          active: "#f59e0b",
          primary: "#fb923c",
          planned: "#fbbf24",
        };
      case "out_for_delivery":
        return {
          active: "#0ea5e9",
          primary: "#38bdf8",
          planned: "#7dd3fc",
        };
      case "delivered":
        return {
          active: "#16a34a",
          primary: "#22c55e",
          planned: "#86efac",
        };
      case "assigned":
        return {
          active: "#f59e0b",
          primary: "#fb923c",
          planned: "#fbbf24",
        };
      default:
        return {
          active: "#14b8a6",
          primary: "#2dd4bf",
          planned: "#5eead4",
        };
    }
  };

  const formatStatusLabel = (status: string) =>
    status.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

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
  const selectedRoutePalette = getRoutePalette(
    selectedDeliveryData?.status || "in_transit",
  );
  const selectedStatusLabel = selectedDeliveryData
    ? formatStatusLabel(selectedDeliveryData.status)
    : "Current";
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
                      color: "#fbbf24",
                      opacity: 0.4,
                      label: "Carrier → Pickup",
                      description: "Expected first leg before pickup",
                    },
                    {
                      color: selectedRoutePalette.primary,
                      opacity: 0.4,
                      label: "Pickup → Dropoff",
                      description: "Expected delivery path",
                    },
                    {
                      color: selectedRoutePalette.active,
                      opacity: 0.95,
                      label: `${selectedStatusLabel} route`,
                      description:
                        "Color changes by package status (picked up, in transit, out for delivery, delivered)",
                    },
                    {
                      color: selectedRoutePalette.planned,
                      opacity: 0.75,
                      label: "Planned route",
                      description: "Original optimized route",
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
