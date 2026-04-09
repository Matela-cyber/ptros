// apps/coordinator/src/LiveMap.tsx
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { db, realtimeDb } from "@config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {
  ref as rtdbRef,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
} from "firebase/database";
import { Toaster } from "react-hot-toast";
import {
  FaMap,
  FaMountain,
  FaMotorcycle,
  FaPhone,
  FaSatellite,
  FaGlobe,
} from "react-icons/fa6";
import { IconType } from "react-icons";

declare global {
  interface Window {
    google: any;
    mapsReady?: boolean;
  }
}

interface CarrierLocation {
  id: string;
  name: string;
  phone: string;
  vehicleType: string;
  status: string;
  location: {
    lat: number;
    lng: number;
    timestamp: Date;
  };
}

interface Delivery {
  id: string;
  trackingCode: string;
  status: string;
  pickupAddress: string;
  deliveryAddress: string;
  carrierId?: string;
  carrierName?: string;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  pickupLocation?: {
    lat: number;
    lng: number;
  };
  deliveryLocation?: {
    lat: number;
    lng: number;
  };
}

interface CarrierProfile {
  id: string;
  name: string;
  phone: string;
  vehicleType: string;
  status: string;
  currentLocation?: {
    lat: number;
    lng: number;
    timestamp: Date;
  };
}

interface ActiveDelivery {
  id: string;
  trackingCode: string;
  status: string;
  pickupAddress: string;
  deliveryAddress: string;
  carrierId?: string;
  carrierName?: string;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  pickupLocation?: {
    lat: number;
    lng: number;
  };
  deliveryLocation?: {
    lat: number;
    lng: number;
  };
}

interface MarkerData {
  id: string;
  type: "carrier" | "delivery";
  lat: number;
  lng: number;
  title: string;
  content: string;
}

interface MapStyle {
  name: string;
  id: string;
  icon: IconType;
}

const toFiniteNumber = (value: unknown): number | null => {
  const numeric = typeof value === "number" ? value : Number(value);
  return Number.isFinite(numeric) ? numeric : null;
};

const normalizeLatLng = (location: {
  lat?: unknown;
  lng?: unknown;
}): { lat: number; lng: number } | null => {
  const lat = toFiniteNumber(location?.lat);
  const lng = toFiniteNumber(location?.lng);

  if (lat === null || lng === null) {
    return null;
  }

  return { lat, lng };
};

export default function LiveMap() {
  const [carrierProfiles, setCarrierProfiles] = useState<CarrierProfile[]>([]);
  const [activeDeliveries, setActiveDeliveries] = useState<ActiveDelivery[]>(
    [],
  );
  const [tracksMap, setTracksMap] = useState<Record<string, any>>({});
  const [deliveryTracksMap, setDeliveryTracksMap] = useState<
    Record<string, any>
  >({});
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<
    "all" | "carriers" | "deliveries"
  >("all");
  const [mapStyle, setMapStyle] = useState<string>("roadmap");
  const [showRoadNames, setShowRoadNames] = useState<boolean>(true);
  const [showPlaces, setShowPlaces] = useState<boolean>(true);
  const [showTraffic, setShowTraffic] = useState<boolean>(false);
  const [showStraightLinks, setShowStraightLinks] = useState<boolean>(false);
  const [is3DEnabled, setIs3DEnabled] = useState<boolean>(false);
  const [satelliteLoaded, setSatelliteLoaded] = useState<boolean>(false);
  const [featurePreset, setFeaturePreset] = useState<
    "balanced" | "trafficOps" | "routing" | "minimal" | "presentation"
  >("balanced");

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markersRef = useRef<Map<string, any>>(new Map());
  const markerUpdateRafRef = useRef<number | null>(null);
  const sharedInfoWindowRef = useRef<any>(null);
  const trafficLayerRef = useRef<any>(null);
  const transitLayerRef = useRef<any>(null);
  const hasAutoFittedRef = useRef(false);
  const routePolylinesRef = useRef<any[]>([]);
  const routeMarkersRef = useRef<any[]>([]);

  const getTrackEpochMs = (track: any): number => {
    const raw = track?.timestampMs ?? track?.timestamp;
    const numeric = typeof raw === "number" ? raw : Number(raw);
    if (Number.isFinite(numeric) && numeric > 0) {
      return numeric;
    }

    const parsed = Date.parse(
      track?.timestampISO || track?.timestampUtcISO || "",
    );
    if (Number.isFinite(parsed) && parsed > 0) {
      return parsed;
    }

    return Date.now();
  };

  const carriers = useMemo<CarrierLocation[]>(() => {
    return carrierProfiles
      .map((carrier) => {
        const rtdbLoc = tracksMap[carrier.id];
        const normalizedFromTrack = rtdbLoc
          ? normalizeLatLng({ lat: rtdbLoc.lat, lng: rtdbLoc.lng })
          : null;
        const normalizedFromProfile = carrier.currentLocation
          ? normalizeLatLng({
              lat: carrier.currentLocation.lat,
              lng: carrier.currentLocation.lng,
            })
          : null;

        const location = normalizedFromTrack
          ? {
              lat: normalizedFromTrack.lat,
              lng: normalizedFromTrack.lng,
              timestamp: new Date(getTrackEpochMs(rtdbLoc)),
            }
          : normalizedFromProfile && carrier.currentLocation
            ? {
                lat: normalizedFromProfile.lat,
                lng: normalizedFromProfile.lng,
                timestamp: carrier.currentLocation.timestamp,
              }
            : null;

        if (!location) {
          return null;
        }

        return {
          id: carrier.id,
          name: carrier.name,
          phone: carrier.phone,
          vehicleType: carrier.vehicleType,
          status: carrier.status,
          location,
        };
      })
      .filter(Boolean) as CarrierLocation[];
  }, [carrierProfiles, tracksMap]);

  const deliveries = useMemo<Delivery[]>(() => {
    return activeDeliveries.map((delivery) => {
      const rtdbLoc = deliveryTracksMap[delivery.id];
      const normalizedCurrentFromTrack = rtdbLoc
        ? normalizeLatLng({ lat: rtdbLoc.lat, lng: rtdbLoc.lng })
        : null;
      const normalizedCurrentFromDelivery = delivery.currentLocation
        ? normalizeLatLng({
            lat: delivery.currentLocation.lat,
            lng: delivery.currentLocation.lng,
          })
        : null;
      const normalizedPickup = delivery.pickupLocation
        ? normalizeLatLng({
            lat: delivery.pickupLocation.lat,
            lng: delivery.pickupLocation.lng,
          })
        : null;
      const normalizedDropoff = delivery.deliveryLocation
        ? normalizeLatLng({
            lat: delivery.deliveryLocation.lat,
            lng: delivery.deliveryLocation.lng,
          })
        : null;

      return {
        ...delivery,
        currentLocation:
          normalizedCurrentFromTrack ||
          normalizedCurrentFromDelivery ||
          undefined,
        pickupLocation: normalizedPickup || undefined,
        deliveryLocation: normalizedDropoff || undefined,
      };
    });
  }, [activeDeliveries, deliveryTracksMap]);

  // Default center (Maseru, Lesotho)
  const defaultCenter = { lat: -29.31, lng: 27.48 };

  // Map styles configuration
  const mapStyles: MapStyle[] = [
    { name: "Roadmap", id: "roadmap", icon: FaMap },
    { name: "Satellite", id: "satellite", icon: FaSatellite },
    { name: "Hybrid", id: "hybrid", icon: FaGlobe },
    { name: "Terrain", id: "terrain", icon: FaMountain },
  ];

  // Listen for Google Maps ready signal
  useEffect(() => {
    const checkGoogleMaps = () => {
      if (window.google?.maps) {
        console.log("✅ Google Maps API is loaded");
        console.log("Available map types:", window.google.maps.MapTypeId);
        setGoogleMapsLoaded(true);
        return true;
      }
      return false;
    };

    if (checkGoogleMaps()) {
      return;
    }

    // Listen for custom event from GoogleMapsLoader
    const handleMapsReady = () => {
      if (checkGoogleMaps()) {
        window.removeEventListener("mapsReady", handleMapsReady);
      }
    };

    window.addEventListener("mapsReady", handleMapsReady);

    // Fallback timeout after 15 seconds
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

  // Load carrier metadata and active deliveries from Firestore
  useEffect(() => {
    const carriersQuery = query(
      collection(db, "users"),
      where("role", "==", "carrier"),
      where("isApproved", "==", true),
    );
    const unsubscribeCarriers = onSnapshot(
      carriersQuery,
      (snapshot) => {
        const carrierData: CarrierProfile[] = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          carrierData.push({
            id: doc.id,
            name: data.fullName || "Unknown Carrier",
            phone: data.phone || "",
            vehicleType: data.vehicleType || "Vehicle",
            status: data.status || "active",
            currentLocation: data.currentLocation
              ? {
                  lat: data.currentLocation.lat,
                  lng: data.currentLocation.lng,
                  timestamp:
                    data.currentLocation.timestamp?.toDate() || new Date(),
                }
              : undefined,
          });
        });

        setCarrierProfiles(carrierData);
      },
      (error) => {
        console.error("Error loading carriers:", error);
      },
    );

    // Load active deliveries
    const deliveriesQuery = query(
      collection(db, "deliveries"),
      where("status", "in", [
        "assigned",
        "picked_up",
        "in_transit",
        "out_for_delivery",
      ]),
    );
    const unsubscribeDeliveries = onSnapshot(
      deliveriesQuery,
      (snapshot) => {
        const deliveryList: ActiveDelivery[] = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          deliveryList.push({
            id: doc.id,
            trackingCode: data.trackingCode,
            status: data.status,
            pickupAddress: data.pickupAddress,
            deliveryAddress: data.deliveryAddress,
            carrierId: data.carrierId,
            carrierName: data.carrierName,
            currentLocation: data.currentLocation,
            pickupLocation: data.pickupLocation,
            deliveryLocation: data.deliveryLocation,
          });
        });

        setActiveDeliveries(deliveryList);
      },
      (error) => {
        console.error("Error loading deliveries:", error);
      },
    );

    return () => {
      unsubscribeCarriers();
      unsubscribeDeliveries();
    };
  }, []);

  // Listen to RTDB tracks incrementally for low-latency updates
  useEffect(() => {
    const tracksRef = rtdbRef(realtimeDb, "tracks");
    const deliveryTracksRef = rtdbRef(realtimeDb, "deliveryTracks");

    const upsertTrack = (key: string | null, value: any) => {
      if (!key) return;
      setTracksMap((prev) => {
        const prevTs = getTrackEpochMs(prev[key]);
        const nextTs = getTrackEpochMs(value);

        if (nextTs < prevTs) {
          return prev;
        }

        if (
          prev[key]?.lat === value?.lat &&
          prev[key]?.lng === value?.lng &&
          prevTs === nextTs
        ) {
          return prev;
        }
        return { ...prev, [key]: value };
      });
    };

    const upsertDeliveryTrack = (key: string | null, value: any) => {
      if (!key) return;
      setDeliveryTracksMap((prev) => {
        const prevTs = getTrackEpochMs(prev[key]);
        const nextTs = getTrackEpochMs(value);

        if (nextTs < prevTs) {
          return prev;
        }

        if (
          prev[key]?.lat === value?.lat &&
          prev[key]?.lng === value?.lng &&
          prevTs === nextTs
        ) {
          return prev;
        }
        return { ...prev, [key]: value };
      });
    };

    const unsubTracksAdded = onChildAdded(tracksRef, (snap) => {
      upsertTrack(snap.key, snap.val());
    });
    const unsubTracksChanged = onChildChanged(tracksRef, (snap) => {
      upsertTrack(snap.key, snap.val());
    });
    const unsubTracksRemoved = onChildRemoved(tracksRef, (snap) => {
      if (!snap.key) return;
      setTracksMap((prev) => {
        if (!(snap.key! in prev)) return prev;
        const next = { ...prev };
        delete next[snap.key!];
        return next;
      });
    });

    const unsubDeliveryAdded = onChildAdded(deliveryTracksRef, (snap) => {
      upsertDeliveryTrack(snap.key, snap.val());
    });
    const unsubDeliveryChanged = onChildChanged(deliveryTracksRef, (snap) => {
      upsertDeliveryTrack(snap.key, snap.val());
    });
    const unsubDeliveryRemoved = onChildRemoved(deliveryTracksRef, (snap) => {
      if (!snap.key) return;
      setDeliveryTracksMap((prev) => {
        if (!(snap.key! in prev)) return prev;
        const next = { ...prev };
        delete next[snap.key!];
        return next;
      });
    });

    return () => {
      unsubTracksAdded();
      unsubTracksChanged();
      unsubTracksRemoved();
      unsubDeliveryAdded();
      unsubDeliveryChanged();
      unsubDeliveryRemoved();
    };
  }, []);

  // Initialize Google Map when Google Maps is loaded
  useEffect(() => {
    if (!googleMapsLoaded || !window.google || !mapRef.current) return;

    console.log("🔄 Initializing Google Map...");

    try {
      const mapOptions = {
        center: defaultCenter,
        zoom: 14, // Increased zoom for better satellite view
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
          position: window.google.maps.ControlPosition.TOP_RIGHT,
          style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          mapTypeIds: [
            window.google.maps.MapTypeId.ROADMAP,
            window.google.maps.MapTypeId.SATELLITE,
            window.google.maps.MapTypeId.HYBRID,
            window.google.maps.MapTypeId.TERRAIN,
          ],
        },
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
        tilt: is3DEnabled ? 45 : 0,
        styles: getMapStyles(),
      };

      const map = new window.google.maps.Map(mapRef.current, mapOptions);
      mapInstance.current = map;
      console.log("✅ Google Map initialized successfully");

      // Initialize layers
      trafficLayerRef.current = new window.google.maps.TrafficLayer();
      transitLayerRef.current = new window.google.maps.TransitLayer();

      // Listen for satellite tiles loaded
      window.google.maps.event.addListenerOnce(map, "tilesloaded", () => {
        console.log("Map tiles loaded");
        setSatelliteLoaded(true);
      });

      // Initialize markers map
      markersRef.current = new Map();
      setMapError(null);
    } catch (error) {
      console.error("❌ Error initializing map:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      setMapError(
        `Failed to initialize map: ${errorMessage}. Please check console for details.`,
      );
    }
  }, [googleMapsLoaded, is3DEnabled]);

  // Update map style when changed
  useEffect(() => {
    if (!mapInstance.current || !window.google) return;

    console.log("Changing map style to:", mapStyle);

    try {
      const mapTypeIds = {
        roadmap: window.google.maps.MapTypeId.ROADMAP,
        satellite: window.google.maps.MapTypeId.SATELLITE,
        hybrid: window.google.maps.MapTypeId.HYBRID,
        terrain: window.google.maps.MapTypeId.TERRAIN,
      };

      const mapTypeId = mapTypeIds[mapStyle as keyof typeof mapTypeIds];

      if (mapTypeId) {
        // Force a refresh of the map
        mapInstance.current.setMapTypeId(mapTypeId);

        // Add event listener for when tiles are loaded (especially for satellite)
        if (mapStyle === "satellite") {
          window.google.maps.event.addListenerOnce(
            mapInstance.current,
            "tilesloaded",
            () => {
              console.log("Satellite tiles loaded");
              setSatelliteLoaded(true);
            },
          );

          // Show a message if satellite takes time to load
          setTimeout(() => {
            if (!satelliteLoaded) {
              console.log(
                "Satellite view might be loading slowly. Zooming in/out may help.",
              );
            }
          }, 3000);
        }
      }
    } catch (error) {
      console.error("Error changing map style:", error);
    }
  }, [mapStyle]);

  // Update other map layers when settings change
  useEffect(() => {
    if (!mapInstance.current || !window.google) return;

    // Update traffic layer
    if (trafficLayerRef.current) {
      if (showTraffic) {
        trafficLayerRef.current.setMap(mapInstance.current);
      } else {
        trafficLayerRef.current.setMap(null);
      }
    }

    // Update transit layer
    if (transitLayerRef.current) {
      transitLayerRef.current.setMap(mapInstance.current);
    }

    // Update 3D tilt
    if (mapInstance.current) {
      mapInstance.current.setTilt(is3DEnabled ? 45 : 0);
    }

    // Update map styles
    mapInstance.current.setOptions({ styles: getMapStyles() });
  }, [showTraffic, showRoadNames, showPlaces, is3DEnabled]);

  // Helper function to get map styles based on settings
  const getMapStyles = () => {
    const styles = [];

    // Show/hide road names - IMPORTANT: For satellite/hybrid, we want labels visible
    if (!showRoadNames) {
      styles.push({
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      });
      styles.push({
        featureType: "road.highway",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      });
    }

    // Show/hide places (POI labels)
    if (!showPlaces) {
      styles.push({
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      });
      styles.push({
        featureType: "administrative",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      });
    }

    // Always hide certain POIs to reduce clutter
    styles.push({
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    });

    // Enhance road visibility for roadmap
    styles.push({
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#f5a623" }, { weight: 1.5 }],
    });

    // Enhance city labels
    styles.push({
      featureType: "administrative.locality",
      elementType: "labels.text",
      stylers: [{ visibility: "on" }, { weight: 0.5 }, { color: "#333333" }],
    });

    // For satellite view, enhance visibility of roads
    if (mapStyle === "satellite" || mapStyle === "hybrid") {
      styles.push({
        featureType: "road",
        elementType: "geometry",
        stylers: [{ visibility: "on" }, { color: "#ffffff" }, { weight: 1 }],
      });
      styles.push({
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ visibility: "on" }, { color: "#f5a623" }, { weight: 2 }],
      });
    }

    return styles;
  };

  // Update markers efficiently with debouncing and reuse
  const updateMarkers = useCallback(() => {
    if (!mapInstance.current || !window.google || !googleMapsLoaded) return;

    // Build new marker data
    const newMarkerData: MarkerData[] = [];

    // Add carrier markers
    if (selectedType === "all" || selectedType === "carriers") {
      carriers.forEach((carrier) => {
        newMarkerData.push({
          id: `carrier-${carrier.id}`,
          type: "carrier",
          lat: carrier.location.lat,
          lng: carrier.location.lng,
          title: `${carrier.name} - ${carrier.vehicleType}`,
          content: `
            <div style="padding: 10px; min-width: 200px; font-family: system-ui;">
              <h3 style="margin: 0 0 5px 0; color: #1E40AF; font-size: 14px; font-weight: 600;">${carrier.name}</h3>
              <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">${carrier.vehicleType}</p>
              <p style="margin: 0 0 5px 0; font-size: 12px;">Phone: ${carrier.phone}</p>
              <p style="margin: 0 0 5px 0; font-size: 11px; color: #6B7280;">
                Status: <strong>${carrier.status}</strong>
              </p>
              <p style="margin: 0; font-size: 11px; color: #6B7280;">
                Updated: ${carrier.location.timestamp.toLocaleTimeString()}
              </p>
            </div>
          `,
        });
      });
    }

    // Add delivery markers
    if (selectedType === "all" || selectedType === "deliveries") {
      deliveries.forEach((delivery) => {
        if (delivery.currentLocation) {
          newMarkerData.push({
            id: `delivery-${delivery.id}`,
            type: "delivery",
            lat: delivery.currentLocation.lat,
            lng: delivery.currentLocation.lng,
            title: `Delivery: ${delivery.trackingCode}`,
            content: `
              <div style="padding: 10px; min-width: 200px; font-family: system-ui;">
                <h3 style="margin: 0 0 5px 0; color: #7C3AED; font-size: 14px; font-weight: 600;">${delivery.trackingCode}</h3>
                <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">
                  Status: ${delivery.status.replace("_", " ")}
                </p>
                <p style="margin: 0 0 5px 0; font-size: 11px;">
                  <strong>From:</strong> ${delivery.pickupAddress.substring(0, 40)}...
                </p>
                <p style="margin: 0 0 5px 0; font-size: 11px;">
                  <strong>To:</strong> ${delivery.deliveryAddress.substring(0, 40)}...
                </p>
                ${
                  delivery.carrierName
                    ? `<p style="margin: 0; font-size: 11px; color: #6B7280;">
                      Carrier: ${delivery.carrierName}
                    </p>`
                    : ""
                }
              </div>
            `,
          });
        }
      });
    }

    // Efficiently update markers (only add/update changed ones)
    const existingIds = new Set(markersRef.current.keys());
    const newIds = new Set(newMarkerData.map((m) => m.id));

    // Remove markers that no longer exist
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
    const visibleMarkers: any[] = [];

    newMarkerData.forEach((markerData) => {
      const existingMarker = markersRef.current.get(markerData.id);
      const position = { lat: markerData.lat, lng: markerData.lng };

      // Update position if changed
      if (existingMarker) {
        existingMarker.setPosition(position);
        existingMarker.setMap(mapInstance.current);
        visibleMarkers.push(existingMarker);
      } else {
        // Create new marker only if it doesn't exist
        try {
          const iconColor =
            markerData.type === "carrier"
              ? "#3B82F6"
              : markerData.type === "delivery" &&
                  markerData.content.includes("delivered")
                ? "#10B981"
                : markerData.type === "delivery" &&
                    markerData.content.includes("in_transit")
                  ? "#8B5CF6"
                  : "#F59E0B";

          const icon = {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: iconColor,
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2,
            scale: markerData.type === "carrier" ? 12 : 16,
          };

          const marker = new window.google.maps.Marker({
            position,
            map: null, // Will be added to map via clustering
            icon,
            title: markerData.title,
            // Carriers sit above delivery-current circles; P/D markers (zIndex 30) are always on top
            zIndex: markerData.type === "carrier" ? 20 : 10,
          });

          marker.addListener("click", () => {
            if (!sharedInfoWindowRef.current) {
              sharedInfoWindowRef.current = new window.google.maps.InfoWindow();
            }
            sharedInfoWindowRef.current.setContent(markerData.content);
            sharedInfoWindowRef.current.open(mapInstance.current, marker);
          });

          markersRef.current.set(markerData.id, marker);
          marker.setMap(mapInstance.current);
          visibleMarkers.push(marker);
        } catch (error) {
          console.error(`Error creating ${markerData.type} marker:`, error);
        }
      }
    });

    if (visibleMarkers.length > 0) {
      try {
        // Fit bounds once for initial view/filter changes only.
        if (!hasAutoFittedRef.current) {
          const bounds = new window.google.maps.LatLngBounds();
          visibleMarkers.forEach((marker) => {
            bounds.extend(marker.getPosition());
          });
          if (!bounds.isEmpty()) {
            mapInstance.current.fitBounds(bounds);
            hasAutoFittedRef.current = true;
          }
        }
      } catch (error) {
        console.error("Error managing markers/clustering:", error);
      }
    }
  }, [carriers, deliveries, selectedType, googleMapsLoaded]);

  useEffect(() => {
    if (!mapInstance.current || !window.google || !googleMapsLoaded) return;

    routePolylinesRef.current.forEach((polyline) => polyline.setMap(null));
    routeMarkersRef.current.forEach((marker) => marker.setMap(null));
    routePolylinesRef.current = [];
    routeMarkersRef.current = [];

    const visibleDeliveries = selectedType === "carriers" ? [] : deliveries;

    visibleDeliveries.forEach((delivery) => {
      const pickupPoint = delivery.pickupLocation;
      const deliveryPoint = delivery.deliveryLocation;
      const currentPoint = delivery.currentLocation;
      const straightLinkPath =
        pickupPoint && currentPoint && deliveryPoint
          ? [pickupPoint, currentPoint, deliveryPoint]
          : pickupPoint && currentPoint
            ? [pickupPoint, currentPoint]
            : currentPoint && deliveryPoint
              ? [currentPoint, deliveryPoint]
              : pickupPoint && deliveryPoint
                ? [pickupPoint, deliveryPoint]
                : [];

      if (showStraightLinks && straightLinkPath.length > 1) {
        routePolylinesRef.current.push(
          new window.google.maps.Polyline({
            path: straightLinkPath,
            geodesic: true,
            strokeColor: "#8b5cf6",
            strokeOpacity: 0.85,
            strokeWeight: 3,
            map: mapInstance.current,
          }),
        );
      }

      [
        pickupPoint && { point: pickupPoint, label: "P", color: "#fbbf24" },
        deliveryPoint && {
          point: deliveryPoint,
          label: "D",
          color: "#fb923c",
        },
      ]
        .filter(Boolean)
        .forEach((entry: any) => {
          const marker = new window.google.maps.Marker({
            position: entry.point,
            map: mapInstance.current,
            zIndex: 30,
            label: {
              text: entry.label,
              color: "#0f172a",
              fontWeight: "700",
            },
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: entry.color,
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
              scale: 7,
            },
            title: `${delivery.trackingCode} ${entry.label === "P" ? "pickup" : "delivery"}`,
          });

          marker.addListener("click", () => {
            if (!sharedInfoWindowRef.current || !mapInstance.current) {
              return;
            }

            const locationLabel = entry.label === "P" ? "Pickup" : "Dropoff";
            const address =
              entry.label === "P"
                ? delivery.pickupAddress
                : delivery.deliveryAddress;

            sharedInfoWindowRef.current.setContent(`
              <div style="font-family:Arial,sans-serif;min-width:200px;max-width:260px;padding:4px;">
                <h4 style="margin:0 0 6px;font-size:14px;color:#1e293b;">${locationLabel} • ${delivery.trackingCode}</h4>
                <p style="margin:0 0 4px;font-size:12px;color:#475569;">${address || "Address unavailable"}</p>
                <p style="margin:0;font-size:12px;color:#64748b;">Status: ${(delivery.status || "unknown").replace(/_/g, " ")}</p>
              </div>
            `);
            sharedInfoWindowRef.current.open(mapInstance.current, marker);
          });

          routeMarkersRef.current.push(marker);
        });
    });

    return () => {
      routePolylinesRef.current.forEach((polyline) => polyline.setMap(null));
      routeMarkersRef.current.forEach((marker) => marker.setMap(null));
    };
  }, [deliveries, googleMapsLoaded, selectedType, showStraightLinks]);

  // Keep auto-fit behavior only for initial load and marker-type filter changes.
  useEffect(() => {
    hasAutoFittedRef.current = false;
  }, [selectedType]);

  // Schedule marker updates on next animation frame for lower visual latency.
  useEffect(() => {
    if (markerUpdateRafRef.current !== null) {
      cancelAnimationFrame(markerUpdateRafRef.current);
    }

    markerUpdateRafRef.current = requestAnimationFrame(() => {
      updateMarkers();
    });

    return () => {
      if (markerUpdateRafRef.current !== null) {
        cancelAnimationFrame(markerUpdateRafRef.current);
      }
    };
  }, [carriers, deliveries, selectedType, googleMapsLoaded, updateMarkers]);

  // Center map on Maseru
  const centerOnMaseru = () => {
    if (mapInstance.current && window.google) {
      mapInstance.current.setCenter(defaultCenter);
      mapInstance.current.setZoom(14);
    }
  };

  // Center on specific location
  const centerOnLocation = (lat: number, lng: number) => {
    if (mapInstance.current && window.google) {
      mapInstance.current.setCenter({ lat, lng });
      mapInstance.current.setZoom(15);
    }
  };

  // Reload Google Maps
  const reloadGoogleMaps = () => {
    const script = document.querySelector('script[src*="maps.googleapis.com"]');
    if (script) {
      script.remove();
    }
    setGoogleMapsLoaded(false);
    setSatelliteLoaded(false);

    // Add new script - IMPORTANT: Ensure Maps JavaScript API is enabled and billing is set up
    const newScript = document.createElement("script");
    newScript.src = `https://maps.googleapis.com/maps/api/js?key=${
      import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    }&libraries=places,geometry,visualization&v=weekly`;
    newScript.async = true;
    newScript.defer = true;
    newScript.onload = () => {
      console.log("Google Maps script reloaded");
      setGoogleMapsLoaded(true);
    };
    newScript.onerror = () => {
      console.error("Failed to load Google Maps script");
      setMapError(
        "Failed to load Google Maps. Please check your API key and billing status.",
      );
    };
    document.head.appendChild(newScript);
  };

  // Force refresh satellite tiles
  const refreshSatelliteView = () => {
    if (mapInstance.current && window.google) {
      const currentZoom = Number(mapInstance.current.getZoom()) || 14;
      const bumpZoom = Math.min(21, currentZoom + 1);
      mapInstance.current.setZoom(bumpZoom);
      setTimeout(() => {
        mapInstance.current.setZoom(currentZoom);
        console.log("Satellite view refreshed");
      }, 100);
    }
  };

  // Test satellite view by zooming into a known area with buildings
  const testSatelliteView = () => {
    if (mapInstance.current && window.google) {
      // Zoom into a specific area in Maseru where buildings are visible
      const testLocation = { lat: -29.3144, lng: 27.4862 }; // Maseru city center
      mapInstance.current.setCenter(testLocation);
      mapInstance.current.setZoom(18); // Maximum zoom for satellite
      setMapStyle("satellite");
      console.log("Testing satellite view at maximum zoom");
    }
  };

  // Reset all map settings to default
  const resetMapSettings = () => {
    setMapStyle("roadmap");
    setShowRoadNames(true);
    setShowPlaces(true);
    setShowTraffic(false);
    setShowStraightLinks(false);
    setIs3DEnabled(false);
    setFeaturePreset("balanced");
  };

  const applyFeaturePreset = (
    preset: "balanced" | "trafficOps" | "routing" | "minimal" | "presentation",
  ) => {
    setFeaturePreset(preset);

    switch (preset) {
      case "trafficOps":
        setShowRoadNames(true);
        setShowPlaces(true);
        setShowTraffic(true);
        setShowStraightLinks(false);
        setIs3DEnabled(false);
        break;
      case "routing":
        setShowRoadNames(true);
        setShowPlaces(false);
        setShowTraffic(false);
        setShowStraightLinks(true);
        setIs3DEnabled(false);
        break;
      case "minimal":
        setShowRoadNames(false);
        setShowPlaces(false);
        setShowTraffic(false);
        setShowStraightLinks(false);
        setIs3DEnabled(false);
        break;
      case "presentation":
        setShowRoadNames(true);
        setShowPlaces(true);
        setShowTraffic(false);
        setShowStraightLinks(true);
        setIs3DEnabled(true);
        break;
      case "balanced":
      default:
        setShowRoadNames(true);
        setShowPlaces(true);
        setShowTraffic(false);
        setShowStraightLinks(false);
        setIs3DEnabled(false);
        break;
    }
  };

  // Troubleshooting guide for satellite view
  const showSatelliteTroubleshooting = () => {
    alert(`Satellite View Troubleshooting Guide:

1. **API Key Issues:**
   • Ensure your Google Maps API key has "Maps JavaScript API" enabled
   • Check if billing is enabled on your Google Cloud account
   • Verify the API key has proper restrictions

2. **Network Issues:**
   • Satellite tiles may load slowly on slow connections
   • Try zooming in/out to trigger tile reload
   • Check browser console for network errors

3. **Location Issues:**
   • Some remote areas may have lower resolution satellite imagery
   • Try zooming into urban areas (city centers)

4. **Quick Fixes:**
   • Click "Refresh Satellite" button
   • Try "Test Satellite" to zoom into Maseru city center
   • Switch to "Hybrid" view for labels on satellite

Current Status: ${satelliteLoaded ? "Satellite tiles loaded" : "Waiting for satellite tiles..."}
`);
  };

  if (!googleMapsLoaded) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Loading Google Maps...
        </h3>
        <p className="text-gray-500 mb-4">This may take a few moments</p>
        <button
          onClick={reloadGoogleMaps}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Reload Google Maps
        </button>
      </div>
    );
  }

  if (mapError) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center">
        <FaMap className="text-6xl mb-4 mx-auto text-gray-400" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Map Error</h3>
        <p className="text-red-600 mb-4">{mapError}</p>
        <div className="space-x-4">
          <button
            onClick={reloadGoogleMaps}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Reload Google Maps
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Toaster position="top-right" />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Live Tracking Map</h1>
        <p className="text-gray-600 mt-2">
          Real-time tracking of carriers and deliveries
        </p>
      </div>

      {/* Compact Controls */}
      <div className="mb-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <label className="text-sm text-gray-600">
              <span className="block text-xs uppercase tracking-wide text-gray-500 mb-0.5">
                View
              </span>
              <select
                value={selectedType}
                onChange={(e) =>
                  setSelectedType(
                    e.target.value as "all" | "carriers" | "deliveries",
                  )
                }
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm"
              >
                <option value="all">All</option>
                <option value="carriers">
                  Carriers Only ({carriers.length})
                </option>
                <option value="deliveries">
                  Deliveries Only ({deliveries.length})
                </option>
              </select>
            </label>

            <label className="text-sm text-gray-600">
              <span className="block text-xs uppercase tracking-wide text-gray-500 mb-0.5">
                Map style
              </span>
              <select
                value={mapStyle}
                onChange={(e) => setMapStyle(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm"
              >
                {mapStyles.map((style) => (
                  <option key={style.id} value={style.id}>
                    {style.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm text-gray-600">
              <span className="block text-xs uppercase tracking-wide text-gray-500 mb-0.5">
                Features
              </span>
              <select
                value={featurePreset}
                onChange={(e) =>
                  applyFeaturePreset(
                    e.target.value as
                      | "balanced"
                      | "trafficOps"
                      | "routing"
                      | "minimal"
                      | "presentation",
                  )
                }
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm"
              >
                <option value="balanced">Balanced</option>
                <option value="trafficOps">Traffic Focus</option>
                <option value="routing">Routing Focus</option>
                <option value="minimal">Minimal</option>
                <option value="presentation">Presentation</option>
              </select>
            </label>
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedType !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedType("all")}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm"
              >
                Reset view to All
              </button>
            )}
            <button
              onClick={centerOnMaseru}
              className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs"
            >
              Center
            </button>
            <button
              onClick={reloadGoogleMaps}
              className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-xs"
            >
              Reload
            </button>
            <button
              onClick={resetMapSettings}
              className="px-2.5 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-xs"
            >
              Reset
            </button>
            {mapStyle === "satellite" && (
              <button
                onClick={refreshSatelliteView}
                className="px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 text-sm"
              >
                Refresh Satellite
              </button>
            )}
          </div>

          <details className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
            <summary className="cursor-pointer text-sm font-medium text-gray-700">
              Advanced map features
            </summary>
            <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showRoadNames}
                  onChange={(e) => setShowRoadNames(e.target.checked)}
                />
                Road names
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showPlaces}
                  onChange={(e) => setShowPlaces(e.target.checked)}
                />
                Place names
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showTraffic}
                  onChange={(e) => setShowTraffic(e.target.checked)}
                />
                Traffic
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showStraightLinks}
                  onChange={(e) => setShowStraightLinks(e.target.checked)}
                />
                Straight links
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={is3DEnabled}
                  onChange={(e) => setIs3DEnabled(e.target.checked)}
                />
                3D view
              </label>
            </div>
          </details>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
        <div className="border-b px-4 md:px-6 py-4 bg-gray-50">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="font-medium text-gray-700">
              Real-time Tracking View •{" "}
              {mapStyles.find((s) => s.id === mapStyle)?.name}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span className="text-sm">Carriers ({carriers.length})</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                <span className="text-sm">
                  Deliveries ({deliveries.length})
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-violet-500 mr-2"></div>
                <span className="text-sm">
                  Straight links {showStraightLinks ? "on" : "off"}
                </span>
              </div>
              {showTraffic && (
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm">Traffic Layer</span>
                </div>
              )}
            </div>
          </div>
          {selectedType === "deliveries" && (
            <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
              Carrier markers are hidden by current view filter (Deliveries
              Only). Switch View to <strong>All</strong> or{" "}
              <strong>Carriers Only</strong> to show them.
            </div>
          )}
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-3 top-3 z-10">
            <div className="inline-flex items-center gap-1.5 px-1 py-0.5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.14em]">
                LIVE
              </span>
            </div>
          </div>
          <div
            ref={mapRef}
            className="w-full h-[420px] md:h-[520px] lg:h-[620px] bg-gray-100"
            style={{ minHeight: "420px" }}
          />
        </div>

        <div className="border-t px-4 md:px-6 py-4 bg-gray-50">
          <div className="text-sm text-gray-500">
            Current map:{" "}
            <strong>{mapStyles.find((s) => s.id === mapStyle)?.name}</strong>
            {showTraffic && " • Traffic enabled"}
            {showStraightLinks && " • Straight links enabled"}
            {is3DEnabled && " • 3D View enabled"}
            {mapStyle === "satellite" &&
              !satelliteLoaded &&
              " • Loading satellite imagery..."}
            <button
              onClick={reloadGoogleMaps}
              className="ml-2 text-blue-600 hover:text-blue-800 underline"
            >
              Having issues? Reload map
            </button>
          </div>
        </div>
      </div>

      {/* Additional Help for Satellite View */}
      {mapStyle === "satellite" && (
        <div className="mb-8">
          <details className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <summary className="font-medium text-blue-800 cursor-pointer">
              Satellite help & troubleshooting
            </summary>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={testSatelliteView}
                className="px-3 py-1.5 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200"
              >
                Test Satellite
              </button>
              <button
                onClick={showSatelliteTroubleshooting}
                className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
              >
                Need Help?
              </button>
            </div>
            <ul className="mt-3 text-sm text-blue-700 list-disc pl-5 space-y-1">
              <li>
                Zoom in (use mouse wheel or +/- buttons) to see buildings
                clearly
              </li>
              <li>Satellite imagery may take a few seconds to load fully</li>
              <li>Try "Test Satellite" to zoom into Maseru city center</li>
              <li>Use "Hybrid" for labels over satellite imagery</li>
            </ul>
          </details>
        </div>
      )}

      {/* Carrier List */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Carriers</h3>
        {carriers.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <FaMotorcycle className="text-6xl mb-4 mx-auto text-gray-400" />
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              No carriers with location data
            </h4>
            <p className="text-gray-500">
              Carriers will appear here when they start sharing their location
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {carriers.map((carrier) => (
              <div
                key={carrier.id}
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-bold text-gray-800">
                      {carrier.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {carrier.vehicleType}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      <span className="inline-flex items-center gap-2">
                        <FaPhone /> {carrier.phone}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      centerOnLocation(
                        carrier.location.lat,
                        carrier.location.lng,
                      )
                    }
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200"
                  >
                    Locate on Map
                  </button>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Last updated:</span>
                    <span>
                      {carrier.location.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Location:</span>
                    <span>
                      {carrier.location.lat.toFixed(4)},{" "}
                      {carrier.location.lng.toFixed(4)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Deliveries</h3>
        {deliveries.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
            No deliveries to visualize right now.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {deliveries.map((delivery) => {
              return (
                <div
                  key={delivery.id}
                  className="bg-white rounded-xl shadow p-4 border border-gray-100"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-gray-800">
                        {delivery.trackingCode}
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {delivery.status.replace(/_/g, " ")}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1 text-sm text-gray-600">
                    <p>
                      <strong>Pickup:</strong> {delivery.pickupAddress}
                    </p>
                    <p>
                      <strong>Dropoff:</strong> {delivery.deliveryAddress}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {delivery.pickupLocation && (
                      <button
                        type="button"
                        onClick={() =>
                          centerOnLocation(
                            delivery.pickupLocation!.lat,
                            delivery.pickupLocation!.lng,
                          )
                        }
                        className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-800 hover:bg-amber-200"
                      >
                        Pickup
                      </button>
                    )}
                    {delivery.currentLocation && (
                      <button
                        type="button"
                        onClick={() =>
                          centerOnLocation(
                            delivery.currentLocation!.lat,
                            delivery.currentLocation!.lng,
                          )
                        }
                        className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-800 hover:bg-blue-200"
                      >
                        Current
                      </button>
                    )}
                    {delivery.deliveryLocation && (
                      <button
                        type="button"
                        onClick={() =>
                          centerOnLocation(
                            delivery.deliveryLocation!.lat,
                            delivery.deliveryLocation!.lng,
                          )
                        }
                        className="rounded-full bg-orange-100 px-3 py-1.5 text-xs font-semibold text-orange-800 hover:bg-orange-200"
                      >
                        Dropoff
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
