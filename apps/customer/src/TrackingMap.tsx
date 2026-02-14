// apps/customer/src/TrackingMap.tsx
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

export default function TrackingMap({ user }: Props) {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [deliveryTracksMap, setDeliveryTracksMap] = useState<Record<string, any>>({});
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [selectedDelivery, setSelectedDelivery] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markersRef = useRef<Map<string, any>>(new Map());
  const markersUpdateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sharedInfoWindowRef = useRef<any>(null);
  const polylineRef = useRef<any>(null);

  // Default center (Maseru, Lesotho)
  const defaultCenter = { lat: -29.31, lng: 27.48 };

  // Listen for Google Maps ready signal
  useEffect(() => {
    const checkGoogleMaps = () => {
      if (window.google?.maps) {
        console.log("✅ Google Maps API is loaded");
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
      ])
    );

    const unsubscribeDeliveries = onSnapshot(
      deliveriesQuery,
      (snapshot) => {
        const deliveryList: Delivery[] = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          const rtdbLoc = deliveryTracksMap[doc.id];
          const loc = rtdbLoc
            ? { lat: rtdbLoc.lat, lng: rtdbLoc.lng, timestamp: new Date(rtdbLoc.timestamp) }
            : data.currentLocation;

          deliveryList.push({
            id: doc.id,
            trackingCode: data.trackingCode,
            status: data.status,
            pickupAddress: data.pickupAddress,
            deliveryAddress: data.deliveryAddress,
            estimatedDeliveryTime: data.estimatedDeliveryTime,
            distance: data.distance,
            currentLocation: loc,
            pickupLocation: data.pickupLocation,
            deliveryLocation: data.deliveryLocation,
            carrierName: data.carrierName,
            deliveryContactName: data.deliveryContactName,
            deliveryDate: data.deliveryDate,
          });
        });

        setDeliveries(deliveryList);
        setLoading(false);

        // Auto-select first delivery if none selected
        if (deliveryList.length > 0 && !selectedDelivery) {
          setSelectedDelivery(deliveryList[0].id);
        }
      },
      (error) => {
        console.error("Error loading deliveries:", error);
        setLoading(false);
      }
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
  }, [user?.uid, deliveryTracksMap]);

  // Initialize Google Map
  useEffect(() => {
    if (!googleMapsLoaded || !window.google || !mapRef.current) return;

    console.log("🔄 Initializing Tracking Map...");

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
      console.log("✅ Tracking Map initialized successfully");

      markersRef.current = new Map();
      setMapError(null);
    } catch (error) {
      console.error("❌ Error initializing map:", error);
      setMapError("Failed to initialize map. Please check console for details.");
    }
  }, [googleMapsLoaded]);

  // Update markers and route line
  const updateMarkers = useCallback(() => {
    if (!mapInstance.current || !window.google || !googleMapsLoaded || !selectedDelivery)
      return;

    const delivery = deliveries.find((d) => d.id === selectedDelivery);
    if (!delivery) return;

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
            <h3 style="margin: 0 0 5px 0; color: #059669; font-size: 14px; font-weight: 600;">📍 Pickup Point</h3>
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
    if (delivery.currentLocation) {
      newMarkerData.push({
        id: `current-${delivery.id}`,
        type: "current",
        lat: delivery.currentLocation.lat,
        lng: delivery.currentLocation.lng,
        title: `Order: ${delivery.trackingCode}`,
        content: `
          <div style="padding: 10px; min-width: 220px; font-family: system-ui;">
            <h3 style="margin: 0 0 5px 0; color: #1E40AF; font-size: 14px; font-weight: 600;">${delivery.trackingCode}</h3>
            <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">
              Status: <strong>${delivery.status.replace(/_/g, " ")}</strong>
            </p>
            <p style="margin: 0 0 5px 0; font-size: 11px;">
              📍 ${delivery.currentLocation.address || "Current location"}
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
            <h3 style="margin: 0 0 5px 0; color: #DC2626; font-size: 14px; font-weight: 600;">🎯 Delivery Destination</h3>
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
    if (polylineRef.current) {
      polylineRef.current.setMap(null);
    }

    if (
      delivery.pickupLocation &&
      delivery.currentLocation &&
      delivery.deliveryLocation
    ) {
      const pathCoordinates = [
        { lat: delivery.pickupLocation.lat, lng: delivery.pickupLocation.lng },
      ];

      if (delivery.currentLocation) {
        pathCoordinates.push({
          lat: delivery.currentLocation.lat,
          lng: delivery.currentLocation.lng,
        });
      }

      pathCoordinates.push({
        lat: delivery.deliveryLocation.lat,
        lng: delivery.deliveryLocation.lng,
      });

      polylineRef.current = new window.google.maps.Polyline({
        path: pathCoordinates,
        geodesic: true,
        strokeColor: "#3B82F6",
        strokeOpacity: 0.7,
        strokeWeight: 3,
        map: mapInstance.current,
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
  }, [deliveries, selectedDelivery, googleMapsLoaded]);

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
  }, [deliveries, selectedDelivery, googleMapsLoaded, updateMarkers]);

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "assigned":
        return "📋";
      case "picked_up":
        return "📦";
      case "in_transit":
        return "🚚";
      case "out_for_delivery":
        return "🚗";
      case "delivered":
        return "✅";
      default:
        return "📍";
    }
  };

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
        <div className="text-6xl mb-4">🗺️</div>
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

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="text-sm text-gray-500">Active Orders</div>
          <div className="text-2xl font-bold text-blue-600">
            {deliveries.length}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="text-sm text-gray-500">In Transit</div>
          <div className="text-2xl font-bold text-amber-600">
            {deliveries.filter((d) => d.status === "in_transit").length}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="text-sm text-gray-500">Delivered</div>
          <div className="text-2xl font-bold text-green-600">
            {deliveries.filter((d) => d.status === "delivered").length}
          </div>
        </div>
      </div>

      {/* No Orders Message */}
      {deliveries.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No active orders
          </h3>
          <p className="text-gray-500">
            Your orders will appear here once they are assigned to a carrier
          </p>
        </div>
      ) : (
        <>
          {/* Map Container */}
          <div className="bg-white rounded-xl shadow overflow-hidden mb-8">
            <div className="border-b px-6 py-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-700">
                  Real-time Order Tracking
                </h3>
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

            <div
              ref={mapRef}
              className="w-full h-[500px] bg-gray-100"
              style={{ minHeight: "500px" }}
            />

            <div className="border-t px-6 py-4 bg-gray-50">
              <div className="text-sm text-gray-500">
                Click on markers for details. Your package location updates in real-time.
              </div>
            </div>
          </div>

          {/* Order Selection & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Orders List */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">Your Orders</h3>
              <div className="space-y-3">
                {deliveries.map((delivery) => (
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
                        <div className={`text-xs mt-1 inline-block px-2 py-1 rounded ${getStatusColor(delivery.status)}`}>
                          {getStatusIcon(delivery.status)} {delivery.status.replace(/_/g, " ")}
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
              {selectedDelivery && deliveries.find((d) => d.id === selectedDelivery) ? (
                (() => {
                  const delivery = deliveries.find((d) => d.id === selectedDelivery)!;
                  return (
                    <div className="space-y-6">
                      {/* Order Summary */}
                      <div className="bg-white rounded-xl shadow p-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">
                          Order Summary
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm text-gray-600">Tracking Code</div>
                            <div className="font-bold text-gray-800">
                              {delivery.trackingCode}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Status</div>
                            <div className={`inline-block px-3 py-1 rounded-lg text-sm font-medium ${getStatusColor(delivery.status)}`}>
                              {getStatusIcon(delivery.status)} {delivery.status.replace(/_/g, " ")}
                            </div>
                          </div>
                          {delivery.carrierName && (
                            <div>
                              <div className="text-sm text-gray-600">Carrier</div>
                              <div className="font-medium text-gray-800">
                                {delivery.carrierName}
                              </div>
                            </div>
                          )}
                          {delivery.distance && (
                            <div>
                              <div className="text-sm text-gray-600">Distance</div>
                              <div className="font-medium text-gray-800">
                                {delivery.distance} km
                              </div>
                            </div>
                          )}
                          {delivery.estimatedDeliveryTime && (
                            <div>
                              <div className="text-sm text-gray-600">Estimated Delivery</div>
                              <div className="font-medium text-green-600">
                                {delivery.estimatedDeliveryTime}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

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
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
