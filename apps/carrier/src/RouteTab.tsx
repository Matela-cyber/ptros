import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CarrierService } from "./carrierService";
import {
  bundleFitRoute,
  toDoublyLinkedList,
  buildStopsFromDeliveries,
  getOrderedStops,
  RouteStop,
  CarrierPosition,
} from "./routeOptimization";
import { Delivery } from "./types";
import { toast } from "react-hot-toast";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { auth, db } from "@config";

const MASERU_CENTER = { lat: -29.312, lng: 27.4869 };

// ─── Delivery Detail Modal ───────────────────────────────────────────────────
function DeliveryModal({
  delivery,
  stop,
  onClose,
}: {
  delivery: Delivery | undefined;
  stop: RouteStop;
  onClose: () => void;
}) {
  if (!delivery) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-xl p-5 max-w-sm w-full shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-gray-500 text-sm">Delivery details not found.</p>
          <button
            className="mt-3 text-blue-600 text-sm font-medium"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  const typeColor = stop.type === "pickup" ? "bg-blue-600" : "bg-green-600";
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`${typeColor} text-white px-5 py-4`}>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                {stop.type === "pickup" ? "📦 Pickup" : "🏠 Dropoff"}
              </span>
              <h3 className="text-lg font-bold mt-0.5">
                {stop.address || "—"}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-5 space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 w-28 shrink-0">Tracking</span>
            <span className="font-mono font-semibold text-gray-800">
              {delivery.trackingCode}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 w-28 shrink-0">Status</span>
            <span className="font-medium capitalize text-blue-700">
              {delivery.status.replace(/_/g, " ")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 w-28 shrink-0">Recipient</span>
            <span className="text-gray-800">
              {delivery.recipientName} · {delivery.recipientPhone}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 w-28 shrink-0">Pickup</span>
            <span className="text-gray-800">{delivery.pickupAddress}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 w-28 shrink-0">Dropoff</span>
            <span className="text-gray-800">{delivery.deliveryAddress}</span>
          </div>
          {delivery.packageDescription && (
            <div className="flex items-center gap-2">
              <span className="text-gray-400 w-28 shrink-0">Package</span>
              <span className="text-gray-800">
                {delivery.packageDescription} · {delivery.packageWeight}kg
              </span>
            </div>
          )}
          {delivery.deliveryInstructions && (
            <div className="flex items-start gap-2">
              <span className="text-gray-400 w-28 shrink-0">Instructions</span>
              <span className="text-gray-800">
                {delivery.deliveryInstructions}
              </span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="text-gray-400 w-28 shrink-0">Earnings</span>
            <span className="font-semibold text-green-700">
              M{" "}
              {(delivery.estimatedEarnings ?? delivery.earnings ?? 0).toFixed(
                2,
              )}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 w-28 shrink-0">Location</span>
            <span className="font-mono text-xs text-gray-600">
              [{stop.lat.toFixed(6)}, {stop.lng.toFixed(6)}]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Route Map View ───────────────────────────────────────────────────────────
// Icon URLs — hosted by Google, always available, no window.google dependency
// ─── Route Map View (vanilla window.google.maps — same pattern as coordinator LiveMap) ───
function RouteMap({
  orderedStops,
  carrierPos,
  pathMode,
  onStopClick,
}: {
  orderedStops: RouteStop[];
  carrierPos: CarrierPosition | null;
  pathMode: "straight" | "road";
  onStopClick: (stop: RouteStop) => void;
}) {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<Map<string, any>>(new Map());
  const carrierMarkerRef = useRef<any>(null);
  const polylineRef = useRef<any>(null);
  const infoWindowRef = useRef<any>(null);
  const [mapsReady, setMapsReady] = useState<boolean>(!!window.google?.maps);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

  const validStops = useMemo(
    () => orderedStops.filter((s) => s.lat !== 0 || s.lng !== 0),
    [orderedStops],
  );

  // ── Wait for Google Maps API (same pattern as LiveMap) ───────────────────
  useEffect(() => {
    if (window.google?.maps) {
      setMapsReady(true);
      return;
    }
    const onReady = () => {
      if (window.google?.maps) setMapsReady(true);
    };
    window.addEventListener("mapsReady", onReady);
    const interval = setInterval(() => {
      if (window.google?.maps) {
        setMapsReady(true);
        clearInterval(interval);
      }
    }, 300);
    return () => {
      window.removeEventListener("mapsReady", onReady);
      clearInterval(interval);
    };
  }, []);

  // ── Initialize map imperatively when API is ready ────────────────────────
  useEffect(() => {
    if (!mapsReady || !mapDivRef.current || mapInstanceRef.current) return;
    const center =
      carrierPos ??
      (validStops[0]
        ? { lat: validStops[0].lat, lng: validStops[0].lng }
        : MASERU_CENTER);
    mapInstanceRef.current = new window.google.maps.Map(mapDivRef.current, {
      center,
      zoom: 14,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: true,
      zoomControl: true,
    });
    infoWindowRef.current = new window.google.maps.InfoWindow();
  }, [mapsReady]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Update stop markers ──────────────────────────────────────────────────
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !window.google?.maps) return;

    // Remove stale markers
    const newKeys = new Set(validStops.map((s) => `${s.id}_${s.type}`));
    markersRef.current.forEach((m, key) => {
      if (!newKeys.has(key)) {
        m.setMap(null);
        markersRef.current.delete(key);
      }
    });

    // Add / update markers
    validStops.forEach((stop, idx) => {
      const key = `${stop.id}_${stop.type}`;
      const pos = { lat: stop.lat, lng: stop.lng };
      const fillColor = stop.visited
        ? "#9ca3af"
        : stop.type === "pickup"
          ? "#2563EB"
          : "#16a34a";
      const icon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor,
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 2,
        scale: 14,
      };
      const label = {
        text: String(idx + 1),
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: "11px",
      };

      const existing = markersRef.current.get(key);
      if (existing) {
        existing.setPosition(pos);
        existing.setIcon(icon);
        existing.setLabel(label);
      } else {
        const marker = new window.google.maps.Marker({
          position: pos,
          map,
          icon,
          label,
          zIndex: stop.visited ? 1 : 10,
          title: `${stop.type === "pickup" ? "Pickup" : "Dropoff"}: ${stop.address || ""}`,
        });
        marker.addListener("click", () => {
          infoWindowRef.current?.setContent(
            `<div style="font-family:system-ui;padding:4px 2px;min-width:150px">` +
              `<strong>${stop.type === "pickup" ? "📦 Pickup" : "🏠 Dropoff"} #${idx + 1}</strong>` +
              `<p style="margin:4px 0 0;font-size:12px;color:#374151">${stop.address || "(no address)"}</p></div>`,
          );
          infoWindowRef.current?.open(map, marker);
          onStopClick(stop);
        });
        markersRef.current.set(key, marker);
      }
    });

    // Fit bounds to all content
    const bounds = new window.google.maps.LatLngBounds();
    if (carrierPos) bounds.extend(carrierPos);
    validStops.forEach((s) => bounds.extend({ lat: s.lat, lng: s.lng }));
    if (!bounds.isEmpty()) map.fitBounds(bounds, 48);
  }, [validStops, carrierPos, onStopClick]);

  // ── Carrier position marker ──────────────────────────────────────────────
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !window.google?.maps) return;
    if (!carrierPos) {
      carrierMarkerRef.current?.setMap(null);
      return;
    }
    const icon = {
      path: window.google.maps.SymbolPath.CIRCLE,
      fillColor: "#f97316",
      fillOpacity: 1,
      strokeColor: "#ea580c",
      strokeWeight: 2.5,
      scale: 10,
    };
    if (carrierMarkerRef.current) {
      carrierMarkerRef.current.setPosition(carrierPos);
      carrierMarkerRef.current.setMap(map);
    } else {
      carrierMarkerRef.current = new window.google.maps.Marker({
        position: carrierPos,
        map,
        icon,
        title: "Your position",
        zIndex: 100,
      });
    }
  }, [carrierPos, mapsReady]);

  // ── Route polyline ───────────────────────────────────────────────────────
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !window.google?.maps) return;
    polylineRef.current?.setMap(null);
    polylineRef.current = null;
    const points = [
      ...(carrierPos ? [carrierPos] : []),
      ...validStops.map((s) => ({ lat: s.lat, lng: s.lng })),
    ];
    if (points.length < 2) return;
    if (pathMode === "road") {
      new window.google.maps.DirectionsService().route(
        {
          origin: new window.google.maps.LatLng(points[0].lat, points[0].lng),
          destination: new window.google.maps.LatLng(
            points[points.length - 1].lat,
            points[points.length - 1].lng,
          ),
          waypoints: points.slice(1, -1).map((p) => ({
            location: new window.google.maps.LatLng(p.lat, p.lng),
            stopover: false,
          })),
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result: any, status: any) => {
          if (status === "OK" && result) {
            polylineRef.current = new window.google.maps.Polyline({
              path: result.routes[0].overview_path,
              geodesic: true,
              strokeColor: "#2563EB",
              strokeOpacity: 0.85,
              strokeWeight: 4,
              map,
            });
          }
        },
      );
    } else {
      polylineRef.current = new window.google.maps.Polyline({
        path: points,
        geodesic: true,
        strokeColor: "#6366f1",
        strokeOpacity: 0.85,
        strokeWeight: 4,
        map,
      });
    }
  }, [validStops, carrierPos, pathMode, mapsReady]);

  if (!apiKey) {
    return (
      <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
        Google Maps API key missing. Add <code>VITE_GOOGLE_MAPS_API_KEY</code>.
      </div>
    );
  }
  if (!mapsReady) {
    return (
      <div className="flex items-center justify-center h-64 rounded-xl bg-gray-100">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    );
  }

  return (
    <div
      ref={mapDivRef}
      style={{ width: "100%", height: "360px", borderRadius: "12px" }}
    />
  );
}

// ─── Main RouteTab Component ──────────────────────────────────────────────────
export default function RouteTab() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [knownLocs, setKnownLocs] = useState<
    Record<string, { lat: number; lng: number; name: string }>
  >({});
  const [stops, setStops] = useState<RouteStop[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [carrierPos, setCarrierPos] = useState<CarrierPosition | null>(null);
  const [view, setView] = useState<"list" | "map">("list");
  const [pathMode, setPathMode] = useState<"straight" | "road">("straight");
  const [selectedStop, setSelectedStop] = useState<RouteStop | null>(null);
  const prevDeliveryIdsRef = useRef<string>("");

  // ── Load knownLocations once ──────────────────────────────────────────────
  useEffect(() => {
    getDocs(collection(db, "knownLocations")).then((snap) => {
      const locs: Record<string, { lat: number; lng: number; name: string }> =
        {};
      snap.forEach((d) => {
        const data = d.data();
        locs[d.id] = {
          lat: data.lat,
          lng: data.lng,
          name: data.name || data.normalizedName || d.id,
        };
      });
      setKnownLocs(locs);
    });
  }, []);

  // ── Watch carrier GPS position ────────────────────────────────────────────
  useEffect(() => {
    const unsub = CarrierService.subscribeToLocationUpdates((loc) => {
      if (loc) setCarrierPos({ lat: loc.lat, lng: loc.lng });
    });
    return () => unsub();
  }, []);

  // ── Watch active deliveries and routeStops ────────────────────────────────
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setLoading(false);
      return;
    }

    let unsubStops: (() => void) | null = null;
    setLoading(true);
    setError(null);

    // Real-time delivery watcher
    const unsubDels = CarrierService.subscribeToActiveDelivery((_active) => {
      // We re-fetch all active deliveries whenever active changes
      CarrierService.getDeliveries(30).then((dels) => {
        const filtered = dels.filter((d) =>
          [
            "assigned",
            "accepted",
            "picked_up",
            "in_transit",
            "out_for_delivery",
          ].includes(d.status),
        );
        setDeliveries(filtered);
      });
    });

    // Fetch initial deliveries
    CarrierService.getDeliveries(30)
      .then((dels) => {
        const filtered = dels.filter((d) =>
          [
            "assigned",
            "accepted",
            "picked_up",
            "in_transit",
            "out_for_delivery",
          ].includes(d.status),
        );
        setDeliveries(filtered);

        // Watch routeStops subcollection
        const stopsCol = collection(db, "users", user.uid, "routeStops");
        unsubStops = onSnapshot(
          stopsCol,
          (snap) => {
            setStops(snap.docs.map((d) => d.data() as RouteStop));
            setLoading(false);
          },
          (err) => {
            setError(err.message || "Route stops permission error");
            setLoading(false);
          },
        );
      })
      .catch((err) => {
        setError(err.message || "Failed to load deliveries");
        setLoading(false);
      });

    return () => {
      if (typeof unsubDels === "function") unsubDels();
      if (unsubStops) unsubStops();
    };
  }, []);

  // ── Auto re-optimize when deliveries change (new job accepted/completed) ──
  useEffect(() => {
    if (deliveries.length === 0) return;
    const ids = deliveries
      .map((d) => d.id)
      .sort()
      .join(",");
    if (ids === prevDeliveryIdsRef.current) return;
    prevDeliveryIdsRef.current = ids;
    // Only auto-optimize if route is empty or delivery set changed
    runOptimize(carrierPos ?? undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deliveries]);

  // ── Optimization function ─────────────────────────────────────────────────
  const runOptimize = useCallback(
    async (pos?: CarrierPosition) => {
      if (deliveries.length === 0) return;
      setUpdating(true);
      try {
        let locs = knownLocs;
        if (Object.keys(locs).length === 0) {
          const snap = await getDocs(collection(db, "knownLocations"));
          const fresh: typeof locs = {};
          snap.forEach((d) => {
            const data = d.data();
            fresh[d.id] = {
              lat: data.lat,
              lng: data.lng,
              name: data.name || data.normalizedName || d.id,
            };
          });
          locs = fresh;
          setKnownLocs(fresh);
        }
        const rawStops = buildStopsFromDeliveries(deliveries, locs);
        const optimized = bundleFitRoute(rawStops, pos);
        const linked = toDoublyLinkedList(optimized);
        setStops(linked);
        await CarrierService.saveRouteStops(linked);
      } catch (e: any) {
        console.error("Route optimization failed:", e);
        toast.error("Could not save optimized route");
      } finally {
        setUpdating(false);
      }
    },
    [deliveries, knownLocs],
  );

  const handleReoptimize = () => {
    runOptimize(carrierPos ?? undefined);
    toast.success("Re-optimizing from your current position…");
  };

  // ── Enrich stops with delivery coordinates at display time ────────────────
  // Stops stored in Firestore may have lat/lng = 0,0 if saved before geocoding
  // was fixed. We patch them here from delivery.pickupLocation / deliveryLocation
  // and from knownLocations as a fallback — no Firestore write needed for display.
  const orderedStops = useMemo(() => {
    const raw = getOrderedStops(stops);
    return raw.map((stop) => {
      if (stop.lat !== 0 || stop.lng !== 0) return stop; // already has coords
      const delivery = deliveries.find((d) => d.id === stop.id);
      if (delivery) {
        if (stop.type === "pickup") {
          const loc = delivery.pickupLocation;
          if (loc && (loc.lat !== 0 || loc.lng !== 0))
            return { ...stop, lat: loc.lat, lng: loc.lng };
          // currentLocation is initialised at pickup point by coordinator
          if (
            delivery.currentLocation &&
            (delivery.currentLocation.lat !== 0 ||
              delivery.currentLocation.lng !== 0)
          )
            return {
              ...stop,
              lat: delivery.currentLocation.lat,
              lng: delivery.currentLocation.lng,
            };
        } else {
          const loc = delivery.deliveryLocation;
          if (loc && (loc.lat !== 0 || loc.lng !== 0))
            return { ...stop, lat: loc.lat, lng: loc.lng };
        }
      }
      // Last resort: knownLocations name match
      if (stop.address) {
        const addrLower = stop.address.toLowerCase().trim();
        const known = Object.values(knownLocs).find(
          (k) => k.name?.toLowerCase().trim() === addrLower,
        );
        if (known) return { ...stop, lat: known.lat, lng: known.lng };
      }
      return stop;
    });
  }, [stops, deliveries, knownLocs]);

  // ── Re-save if any stop was enriched (persists fix to Firestore) ──────────
  const enrichSavedRef = useRef(false);
  useEffect(() => {
    if (enrichSavedRef.current) return;
    if (!orderedStops.length || !deliveries.length) return;
    const stopsByKey = Object.fromEntries(
      stops.map((s) => [`${s.id}_${s.type}`, s]),
    );
    const anyEnriched = orderedStops.some((s) => {
      const orig = stopsByKey[`${s.id}_${s.type}`];
      return (
        orig && orig.lat === 0 && orig.lng === 0 && (s.lat !== 0 || s.lng !== 0)
      );
    });
    if (anyEnriched) {
      enrichSavedRef.current = true;
      const enrichedLinked = toDoublyLinkedList(orderedStops);
      CarrierService.saveRouteStops(enrichedLinked).catch((e) =>
        console.warn("Could not persist enriched route stops:", e),
      );
    }
  }, [orderedStops, stops, deliveries]);

  // ── Render ────────────────────────────────────────────────────────────────
  if (error) {
    return (
      <div className="p-4">
        <div className="rounded-xl bg-red-50 border border-red-200 p-4">
          <p className="font-semibold text-red-700">Permission error</p>
          <p className="text-sm text-red-600 mt-1">{error}</p>
          <p className="text-xs text-gray-500 mt-2">
            Make sure Firestore rules allow carriers to read/write their own
            routeStops, then deploy rules.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (orderedStops.length === 0) {
    return (
      <div className="p-4">
        <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 text-center">
          <p className="text-gray-500 font-medium">No active route.</p>
          <p className="text-sm text-gray-400 mt-1">
            Accept a delivery to see your optimized route here.
          </p>
        </div>
      </div>
    );
  }

  const selectedDelivery = selectedStop
    ? deliveries.find((d) => d.id === selectedStop.id)
    : undefined;

  // Avoid declaring a variable named 'getOrderedStops' below
  return (
    <div className="p-3 sm:p-4 space-y-3 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">My Route</h2>
          <p className="text-xs text-gray-500">
            {orderedStops.length} stops ·{" "}
            {carrierPos ? (
              <span className="text-green-600 font-medium">GPS active</span>
            ) : (
              <span className="text-orange-500">
                No GPS – enable location sharing
              </span>
            )}
          </p>
        </div>
        <button
          className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg font-medium disabled:opacity-60 active:bg-blue-700 transition"
          onClick={handleReoptimize}
          disabled={updating || deliveries.length === 0}
        >
          {updating ? "Optimizing…" : "Re-optimize"}
        </button>
      </div>

      {/* View + path toggles */}
      <div className="flex gap-2">
        <button
          className={`flex-1 py-1.5 rounded-lg text-sm font-medium border transition ${view === "list" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-300"}`}
          onClick={() => setView("list")}
        >
          List
        </button>
        <button
          className={`flex-1 py-1.5 rounded-lg text-sm font-medium border transition ${view === "map" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-300"}`}
          onClick={() => setView("map")}
        >
          Map
        </button>
        {view === "map" && (
          <button
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-300 bg-white text-gray-600 transition"
            onClick={() =>
              setPathMode((p) => (p === "straight" ? "road" : "straight"))
            }
          >
            {pathMode === "straight" ? "Show Road Path" : "Show Straight Line"}
          </button>
        )}
      </div>

      {/* Map view */}
      {view === "map" && (
        <RouteMap
          orderedStops={orderedStops}
          carrierPos={carrierPos}
          pathMode={pathMode}
          onStopClick={(stop) => setSelectedStop(stop)}
        />
      )}

      {/* List view */}
      {view === "list" && (
        <ol className="space-y-2">
          {orderedStops.map((stop, idx) => {
            const isPickup = stop.type === "pickup";
            const paired = orderedStops.find(
              (s) => s.id === stop.id && s.type !== stop.type,
            );
            return (
              <li
                key={`${stop.id}_${stop.type}`}
                className={`rounded-xl border p-3 cursor-pointer transition active:scale-[0.98] ${
                  stop.visited
                    ? "bg-gray-50 border-gray-200 opacity-60"
                    : isPickup
                      ? "bg-blue-50 border-blue-200"
                      : "bg-green-50 border-green-200"
                }`}
                onClick={() => setSelectedStop(stop)}
              >
                <div className="flex items-start gap-3">
                  {/* Step number */}
                  <div
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                      stop.visited
                        ? "bg-gray-400"
                        : isPickup
                          ? "bg-blue-600"
                          : "bg-green-600"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          stop.visited
                            ? "text-gray-400"
                            : isPickup
                              ? "text-blue-700"
                              : "text-green-700"
                        }`}
                      >
                        {isPickup ? "📦 Pickup" : "🏠 Dropoff"}
                      </span>
                      {stop.visited && (
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                          Done
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5 truncate">
                      {stop.address || "(no address)"}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 font-mono">
                      [{stop.lat.toFixed(5)}, {stop.lng.toFixed(5)}]
                    </p>
                    {paired && (
                      <p className="text-xs text-gray-500 mt-1">
                        {isPickup ? "→ Drop at" : "← Picked up at"}{" "}
                        <span className="font-medium text-gray-700">
                          {paired.address || "(no address)"}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      )}

      {/* Delivery detail modal */}
      {selectedStop && (
        <DeliveryModal
          delivery={selectedDelivery}
          stop={selectedStop}
          onClose={() => setSelectedStop(null)}
        />
      )}
    </div>
  );
}
