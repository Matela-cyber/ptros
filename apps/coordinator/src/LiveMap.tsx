// apps/coordinator/src/LiveMap.tsx
import { useState, useEffect, useRef, useCallback } from "react";
import { db, realtimeDb } from "@config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { ref as rtdbRef, onValue } from "firebase/database";
import { Toaster } from "react-hot-toast";

declare global {
  interface Window {
    google: any;
    mapsReady?: boolean;
    MarkerClusterer?: any;
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
  carrierName?: string;
  currentLocation?: {
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
  icon: string;
}

export default function LiveMap() {
  const [carriers, setCarriers] = useState<CarrierLocation[]>([]);
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [tracksMap, setTracksMap] = useState<Record<string, any>>({});
  const [deliveryTracksMap, setDeliveryTracksMap] = useState<Record<string, any>>({});
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<
    "all" | "carriers" | "deliveries"
  >("all");
  const [mapStyle, setMapStyle] = useState<string>("roadmap");
  const [showRoadNames, setShowRoadNames] = useState<boolean>(true);
  const [showPlaces, setShowPlaces] = useState<boolean>(true);
  const [showTraffic, setShowTraffic] = useState<boolean>(false);
  const [is3DEnabled, setIs3DEnabled] = useState<boolean>(false);
  const [satelliteLoaded, setSatelliteLoaded] = useState<boolean>(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markersRef = useRef<Map<string, any>>(new Map());
  const markersUpdateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sharedInfoWindowRef = useRef<any>(null);
  const clusterRef = useRef<any>(null);
  const trafficLayerRef = useRef<any>(null);
  const transitLayerRef = useRef<any>(null);

  // Default center (Maseru, Lesotho)
  const defaultCenter = { lat: -29.31, lng: 27.48 };

  // Map styles configuration
  const mapStyles: MapStyle[] = [
    { name: "Roadmap", id: "roadmap", icon: "🗺️" },
    { name: "Satellite", id: "satellite", icon: "🛰️" },
    { name: "Hybrid", id: "hybrid", icon: "🌍" },
    { name: "Terrain", id: "terrain", icon: "⛰️" },
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

  // Load carriers with real-time location updates
  useEffect(() => {
    const carriersQuery = query(
      collection(db, "users"),
      where("role", "==", "carrier"),
      where("isApproved", "==", true)
    );
    const unsubscribeCarriers = onSnapshot(
      carriersQuery,
      (snapshot) => {
        const carrierLocations: CarrierLocation[] = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          const rtdbLoc = tracksMap[doc.id];
          if (rtdbLoc || data.currentLocation) {
            const loc = rtdbLoc
              ? { lat: rtdbLoc.lat, lng: rtdbLoc.lng, timestamp: new Date(rtdbLoc.timestamp) }
              : { lat: data.currentLocation.lat, lng: data.currentLocation.lng, timestamp: data.currentLocation.timestamp?.toDate() || new Date() };

            carrierLocations.push({
              id: doc.id,
              name: data.fullName || "Unknown Carrier",
              phone: data.phone || "",
              vehicleType: data.vehicleType || "Vehicle",
              status: data.status || "active",
              location: loc,
            });
          }
        });

        setCarriers(carrierLocations);
      },
      (error) => {
        console.error("Error loading carriers:", error);
      }
    );

    // Load active deliveries
    const deliveriesQuery = query(
      collection(db, "deliveries"),
      where("status", "in", [
        "assigned",
        "picked_up",
        "in_transit",
        "out_for_delivery",
      ])
    );
    const unsubscribeDeliveries = onSnapshot(
      deliveriesQuery,
      (snapshot) => {
        const deliveryList: Delivery[] = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          const rtdbLoc = deliveryTracksMap[doc.id];
          const loc = rtdbLoc ? { lat: rtdbLoc.lat, lng: rtdbLoc.lng } : data.currentLocation;
          deliveryList.push({
            id: doc.id,
            trackingCode: data.trackingCode,
            status: data.status,
            pickupAddress: data.pickupAddress,
            deliveryAddress: data.deliveryAddress,
            carrierName: data.carrierName,
            currentLocation: loc,
          });
        });

        setDeliveries(deliveryList);
      },
      (error) => {
        console.error("Error loading deliveries:", error);
      }
    );

    // Listen to RTDB tracks and merge into carriers/deliveries
    const tracksRef = rtdbRef(realtimeDb, 'tracks')
    const tracksUnsub = onValue(tracksRef, (snap) => {
      const val = snap.val() || {}
      setTracksMap(val)
    })

    const dTracksRef = rtdbRef(realtimeDb, 'deliveryTracks')
    const dTracksUnsub = onValue(dTracksRef, (snap) => {
      const val = snap.val() || {}
      setDeliveryTracksMap(val)
    })

    return () => {
      unsubscribeCarriers();
      unsubscribeDeliveries();
      try { tracksUnsub && tracksUnsub() } catch (e) {}
      try { dTracksUnsub && dTracksUnsub() } catch (e) {}
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
            window.google.maps.MapTypeId.TERRAIN
          ]
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
      window.google.maps.event.addListenerOnce(map, 'tilesloaded', () => {
        console.log("Map tiles loaded");
        setSatelliteLoaded(true);
      });

      // Add test markers for Maseru landmarks (helps verify satellite view)
      const maseruLandmarks = [
        {
          name: "Royal Palace",
          position: { lat: -29.3107, lng: 27.4786 },
          description: "Royal Palace of Lesotho"
        },
        {
          name: "Maseru Mall",
          position: { lat: -29.3144, lng: 27.4862 },
          description: "Maseru Mall shopping center"
        },
        {
          name: "Moshoeshoe I International Airport",
          position: { lat: -29.4622, lng: 27.5525 },
          description: "International Airport"
        }
      ];

      maseruLandmarks.forEach(landmark => {
        const marker = new window.google.maps.Marker({
          position: landmark.position,
          map: map,
          title: landmark.name,
          label: "📍",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div class="p-2"><strong>${landmark.name}</strong><br>${landmark.description}</div>`,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });

      // Initialize markers map
      markersRef.current = new Map();
      setMapError(null);
    } catch (error) {
      console.error("❌ Error initializing map:", error);
      setMapError(
        `Failed to initialize map: ${error.message}. Please check console for details.`
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
          window.google.maps.event.addListenerOnce(mapInstance.current, 'tilesloaded', () => {
            console.log("Satellite tiles loaded");
            setSatelliteLoaded(true);
          });
          
          // Show a message if satellite takes time to load
          setTimeout(() => {
            if (!satelliteLoaded) {
              console.log("Satellite view might be loading slowly. Zooming in/out may help.");
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
              <p style="margin: 0 0 5px 0; font-size: 12px;">📱 ${carrier.phone}</p>
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
    const markersForClustering: any[] = [];
    
    newMarkerData.forEach((markerData) => {
      const existingMarker = markersRef.current.get(markerData.id);
      const position = { lat: markerData.lat, lng: markerData.lng };

      // Update position if changed
      if (existingMarker) {
        existingMarker.setPosition(position);
        markersForClustering.push(existingMarker);
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
            scale: markerData.type === "carrier" ? 10 : 8,
          };

          const marker = new window.google.maps.Marker({
            position,
            map: null, // Will be added to map via clustering
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
          markersForClustering.push(marker);
        } catch (error) {
          console.error(
            `Error creating ${markerData.type} marker:`,
            error
          );
        }
      }
    });

    // Update clustering
    if (markersForClustering.length > 0) {
      try {
        // Destroy existing cluster
        if (clusterRef.current) {
          clusterRef.current.clearMarkers();
        }

        // Load MarkerClusterer if available and we have many markers
        if (markersForClustering.length > 5 && window.MarkerClusterer) {
          clusterRef.current = new window.MarkerClusterer({
            markers: markersForClustering,
            map: mapInstance.current,
          });
          console.log("📍 Marker clustering enabled for", markersForClustering.length, "markers");
        } else {
          // Add all markers directly to map if clustering not available or too few markers
          markersForClustering.forEach((marker) => {
            marker.setMap(mapInstance.current);
          });
        }

        // Fit bounds to show all markers
        const bounds = new window.google.maps.LatLngBounds();
        markersForClustering.forEach((marker) => {
          bounds.extend(marker.getPosition());
        });
        if (!bounds.isEmpty()) {
          mapInstance.current.fitBounds(bounds);
        }
      } catch (error) {
        console.error("Error managing markers/clustering:", error);
      }
    }
  }, [carriers, deliveries, selectedType, googleMapsLoaded]);

  // Debounced marker updates
  useEffect(() => {
    // Clear pending update
    if (markersUpdateTimeoutRef.current) {
      clearTimeout(markersUpdateTimeoutRef.current);
    }

    // Schedule new update with 300ms debounce
    markersUpdateTimeoutRef.current = setTimeout(() => {
      updateMarkers();
    }, 300);

    return () => {
      if (markersUpdateTimeoutRef.current) {
        clearTimeout(markersUpdateTimeoutRef.current);
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
      setMapError("Failed to load Google Maps. Please check your API key and billing status.");
    };
    document.head.appendChild(newScript);
  };

  // Force refresh satellite tiles
  const refreshSatelliteView = () => {
    if (mapInstance.current && window.google) {
      const currentZoom = mapInstance.current.getZoom();
      mapInstance.current.setZoom(currentZoom - 0.1);
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
    setIs3DEnabled(false);
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

Current Status: ${satelliteLoaded ? 'Satellite tiles loaded' : 'Waiting for satellite tiles...'}
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
        <div className="text-6xl mb-4">🗺️</div>
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

      {/* Stats & Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="text-sm text-gray-500">Active Carriers</div>
          <div className="text-2xl font-bold text-blue-600">
            {carriers.length}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="text-sm text-gray-500">Active Deliveries</div>
          <div className="text-2xl font-bold text-purple-600">
            {deliveries.length}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="text-sm text-gray-500">In Transit</div>
          <div className="text-2xl font-bold text-orange-600">
            {deliveries.filter((d) => d.status === "in_transit").length}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="text-sm text-gray-500">Map Status</div>
          <div className="text-2xl font-bold text-green-600">
            {satelliteLoaded || mapStyle !== "satellite" ? "✅ Live" : "🔄 Loading..."}
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-4 py-2 rounded-lg ${
                selectedType === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Show All
            </button>
            <button
              onClick={() => setSelectedType("carriers")}
              className={`px-4 py-2 rounded-lg ${
                selectedType === "carriers"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Carriers Only ({carriers.length})
            </button>
            <button
              onClick={() => setSelectedType("deliveries")}
              className={`px-4 py-2 rounded-lg ${
                selectedType === "deliveries"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Deliveries Only ({deliveries.length})
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={centerOnMaseru}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              Center on Maseru
            </button>
            <button
              onClick={reloadGoogleMaps}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
            >
              Reload Map
            </button>
            <button
              onClick={resetMapSettings}
              className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
            >
              Reset Settings
            </button>
          </div>
        </div>

        {/* Map Style Controls */}
        <div className="mt-4 pt-4 border-t">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Map Style Selection */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Map Style</h4>
              <div className="flex flex-wrap gap-2">
                {mapStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setMapStyle(style.id)}
                    className={`px-3 py-2 rounded-lg flex items-center gap-2 ${
                      mapStyle === style.id
                        ? style.id === "satellite" 
                          ? "bg-green-600 text-white"
                          : style.id === "hybrid"
                          ? "bg-purple-600 text-white"
                          : "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span>{style.icon}</span>
                    <span>{style.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Map Features Toggles */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showRoadNames}
                    onChange={(e) => setShowRoadNames(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
                <span className="text-sm font-medium text-gray-700">Road Names</span>
              </div>

              <div className="flex items-center gap-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showPlaces}
                    onChange={(e) => setShowPlaces(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
                <span className="text-sm font-medium text-gray-700">Place Names</span>
              </div>

              <div className="flex items-center gap-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showTraffic}
                    onChange={(e) => setShowTraffic(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
                <span className="text-sm font-medium text-gray-700">Traffic</span>
              </div>

              <div className="flex items-center gap-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={is3DEnabled}
                    onChange={(e) => setIs3DEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
                <span className="text-sm font-medium text-gray-700">3D View</span>
              </div>
            </div>
          </div>

          {/* Satellite-specific controls */}
          {mapStyle === "satellite" && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-700">🛰️ Satellite View Active</span>
                  {!satelliteLoaded && (
                    <span className="text-sm text-yellow-600">(Loading satellite imagery...)</span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={refreshSatelliteView}
                    className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-sm hover:bg-yellow-200"
                  >
                    Refresh Satellite
                  </button>
                  <button
                    onClick={testSatelliteView}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200"
                  >
                    Test Satellite
                  </button>
                  <button
                    onClick={showSatelliteTroubleshooting}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                  >
                    Need Help?
                  </button>
                </div>
              </div>
              <p className="text-sm text-yellow-600 mt-2">
                Tip: Zoom in closer to see buildings clearly. Some areas may have limited satellite resolution.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-white rounded-xl shadow overflow-hidden mb-8">
        <div className="border-b px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-700">
              Real-time Tracking View • {mapStyles.find(s => s.id === mapStyle)?.name}
            </h3>
            <div className="flex items-center space-x-4">
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
              {showTraffic && (
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm">Traffic Layer</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          ref={mapRef}
          className="w-full h-[600px] bg-gray-100"
          style={{ minHeight: "600px" }}
        />

        <div className="border-t px-6 py-4 bg-gray-50">
          <div className="text-sm text-gray-500">
            Current map: <strong>{mapStyles.find(s => s.id === mapStyle)?.name}</strong>
            {showTraffic && " • Traffic enabled"}
            {is3DEnabled && " • 3D View enabled"}
            {mapStyle === "satellite" && !satelliteLoaded && " • Loading satellite imagery..."}
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
        <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <h4 className="font-medium text-blue-800 mb-2">Satellite View Tips:</h4>
          <ul className="text-sm text-blue-700 list-disc pl-5 space-y-1">
            <li>Zoom in (use mouse wheel or +/- buttons) to see buildings clearly</li>
            <li>Satellite imagery may take a few seconds to load fully</li>
            <li>Try "Test Satellite" button to zoom into Maseru city center</li>
            <li>Switch to "Hybrid" view to see labels on top of satellite imagery</li>
            <li>Ensure your Google Maps API key has proper permissions and billing is enabled</li>
          </ul>
        </div>
      )}

      {/* Carrier List */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Active Carriers</h3>
        {carriers.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <div className="text-6xl mb-4">🏍️</div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              No active carriers with location data
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
                      📱 {carrier.phone}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      centerOnLocation(
                        carrier.location.lat,
                        carrier.location.lng
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
    </div>
  );
}