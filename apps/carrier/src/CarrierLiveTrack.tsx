import { useEffect, useMemo, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { onValue, ref as rtdbRef } from "firebase/database";
import {
  formatRouteNetworkSegmentType,
  getDisplayRouteNetworkSegments,
  getRouteNetworkSegmentStyle,
  subscribeRouteNetworkSegments,
  type RouteNetworkSegment,
} from "@config";
import {
  DirectionsRenderer,
  GoogleMap,
  InfoWindow,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db, realtimeDb } from "@config";

type MapPoint = { lat: number; lng: number };

interface LiveTrackDelivery {
  id: string;
  trackingCode?: string;
  status: string;
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

const decodePolyline = (encoded?: string): MapPoint[] => {
  if (!encoded) return [];

  let index = 0;
  let lat = 0;
  let lng = 0;
  const points: MapPoint[] = [];

  while (index < encoded.length) {
    let result = 0;
    let shift = 0;
    let byte: number;

    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const deltaLat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lat += deltaLat;

    result = 0;
    shift = 0;

    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const deltaLng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lng += deltaLng;

    points.push({ lat: lat / 1e5, lng: lng / 1e5 });
  }

  return points;
};

const formatStatus = (status: string) =>
  status
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

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
  const [liveLocation, setLiveLocation] = useState<MapPoint | null>(null);
  const [googleRoutePath, setGoogleRoutePath] = useState<MapPoint[]>([]);
  const [googleDirections, setGoogleDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [selectedMapInfo, setSelectedMapInfo] = useState<{
    position: MapPoint;
    title: string;
    details: string[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const pickupPoint = delivery?.pickupLocation;
  const destinationPoint = delivery?.deliveryLocation;
  const currentPoint = liveLocation || delivery?.currentLocation;

  const plannedRoutePath = useMemo(
    () => decodePolyline(delivery?.route?.polyline),
    [delivery?.route?.polyline],
  );

  useEffect(() => {
    if (!window.google?.maps) {
      setGoogleDirections(null);
      setGoogleRoutePath([]);
      return;
    }

    const origin = pickupPoint || delivery?.pickupAddress;
    const destination = destinationPoint || delivery?.deliveryAddress;

    if (!origin || !destination) {
      setGoogleDirections(null);
      setGoogleRoutePath([]);
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (
        result: google.maps.DirectionsResult | null,
        status: google.maps.DirectionsStatus,
      ) => {
        if (
          status === window.google.maps.DirectionsStatus.OK &&
          result?.routes?.[0]?.overview_path
        ) {
          setGoogleDirections(result);
          const mappedPath = result.routes[0].overview_path.map(
            (point: google.maps.LatLng) => ({
              lat: point.lat(),
              lng: point.lng(),
            }),
          );
          setGoogleRoutePath(mappedPath);
          return;
        }

        setGoogleDirections(null);
        setGoogleRoutePath([]);
      },
    );
  }, [
    pickupPoint,
    destinationPoint,
    delivery?.pickupAddress,
    delivery?.deliveryAddress,
  ]);

  const pickupToDestinationPath =
    plannedRoutePath.length > 1
      ? plannedRoutePath
      : googleRoutePath.length > 1
        ? googleRoutePath
        : pickupPoint && destinationPoint
          ? [pickupPoint, destinationPoint]
          : [];

  const routeStartPoint = pickupPoint || pickupToDestinationPath[0];
  const routeEndPoint =
    destinationPoint ||
    (pickupToDestinationPath.length
      ? pickupToDestinationPath[pickupToDestinationPath.length - 1]
      : undefined);

  const mapCenter =
    currentPoint || routeStartPoint || routeEndPoint || DEFAULT_CENTER;

  const visibleManagedSegments = useMemo(
    () =>
      getDisplayRouteNetworkSegments(
        managedSegments,
        [pickupPoint, destinationPoint, currentPoint],
        { thresholdKm: 12, fallbackLimit: 120 },
      ),
    [currentPoint, destinationPoint, managedSegments, pickupPoint],
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

    [currentPoint, routeStartPoint, routeEndPoint].forEach((point) => {
      if (!point) return;
      bounds.extend(point);
      hasPoints = true;
    });

    pickupToDestinationPath.forEach((point) => {
      bounds.extend(point);
      hasPoints = true;
    });

    if (hasPoints) mapInstance.fitBounds(bounds, 80);
  }, [
    mapInstance,
    currentPoint,
    routeStartPoint,
    routeEndPoint,
    pickupToDestinationPath,
  ]);

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
            <p className="font-semibold text-amber-200">
              {delivery.pickupAddress || "Pickup address unavailable"}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
            <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
              Destination
            </p>
            <p className="font-semibold text-orange-200">
              {delivery.deliveryAddress || "Destination address unavailable"}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-sm text-slate-700 space-y-2">
            <div className="rounded-lg border border-cyan-300 bg-cyan-50 px-3 py-2 text-cyan-800 text-xs font-semibold">
              Main route (BLUE): Pickup (P) → Destination (D)
            </div>
            <div className="flex items-center gap-3">
              <span
                className="h-2 w-10 rounded-full"
                style={{ backgroundColor: "#00A2FF" }}
              />
              <span>Pickup → destination route</span>
            </div>
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
                className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-900 hover:bg-emerald-200"
              >
                Current
              </button>
              <button
                type="button"
                onClick={() => focusPoint(routeEndPoint)}
                className="rounded-full bg-pink-100 px-3 py-1.5 text-xs font-semibold text-pink-900 hover:bg-pink-200"
              >
                Destination
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
            {visibleManagedSegments.map((segment) => {
              const style = getRouteNetworkSegmentStyle(segment);
              return (
                <Polyline
                  key={`managed-${segment.id}`}
                  path={[segment.start, segment.end]}
                  options={{
                    strokeColor: style.strokeColor,
                    strokeOpacity: style.strokeOpacity,
                    strokeWeight: style.strokeWeight,
                    zIndex: 15,
                  }}
                  onClick={() => focusSegment(segment)}
                />
              );
            })}

            {googleDirections && (
              <DirectionsRenderer
                directions={googleDirections}
                options={{
                  suppressMarkers: true,
                  preserveViewport: true,
                  polylineOptions: {
                    strokeColor: "#00A2FF",
                    strokeOpacity: 1,
                    strokeWeight: 14,
                    zIndex: 30,
                  },
                }}
              />
            )}

            {pickupToDestinationPath.length > 1 && (
              <Polyline
                path={pickupToDestinationPath}
                options={{
                  strokeColor: "#ffffff",
                  strokeOpacity: 1,
                  strokeWeight: 18,
                  zIndex: 5,
                }}
              />
            )}

            {pickupToDestinationPath.length > 1 && (
              <Polyline
                path={pickupToDestinationPath}
                options={{
                  strokeColor: "#00A2FF",
                  strokeOpacity: 1,
                  strokeWeight: 12,
                  zIndex: 20,
                  icons: [
                    {
                      icon: {
                        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        strokeOpacity: 1,
                        scale: 4,
                        fillColor: "#00A2FF",
                        fillOpacity: 1,
                      },
                      offset: "50%",
                      repeat: "70px",
                    },
                  ],
                }}
              />
            )}

            {routeStartPoint && (
              <Marker
                position={routeStartPoint}
                title="Pickup (P)"
                onClick={() =>
                  setSelectedMapInfo({
                    position: routeStartPoint,
                    title: "Pickup location",
                    details: [delivery.pickupAddress || "Pickup unavailable"],
                  })
                }
                label={{ text: "P", color: "#0f172a", fontWeight: "700" }}
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 11,
                  fillColor: "#FFD600",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 3,
                }}
              />
            )}

            {routeEndPoint && (
              <Marker
                position={routeEndPoint}
                title="Destination (D)"
                onClick={() =>
                  setSelectedMapInfo({
                    position: routeEndPoint,
                    title: "Dropoff location",
                    details: [
                      delivery.deliveryAddress || "Destination unavailable",
                    ],
                  })
                }
                label={{ text: "D", color: "#ffffff", fontWeight: "700" }}
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 12,
                  fillColor: "#FF4081",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 3,
                }}
              />
            )}

            {currentPoint && (
              <Marker
                position={currentPoint}
                title="Current position"
                onClick={() =>
                  setSelectedMapInfo({
                    position: currentPoint,
                    title: "Package location",
                    details: [
                      `Tracking: ${delivery.trackingCode || delivery.id}`,
                      `Status: ${formatStatus(delivery.status)}`,
                    ],
                  })
                }
                icon={{
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 11,
                  fillColor: "#00E676",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 3,
                }}
              />
            )}

            {(delivery.routeReviews || [])
              .filter((review) => review.start && review.end)
              .map((review, index) => (
                <Polyline
                  key={`review-${index}`}
                  path={[review.start!, review.end!]}
                  options={{
                    strokeColor: review.temporary ? "#f59e0b" : "#dc2626",
                    strokeOpacity: 1,
                    strokeWeight: 5,
                    zIndex: 25,
                  }}
                />
              ))}

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
        </section>
      </div>
    </div>
  );
}
