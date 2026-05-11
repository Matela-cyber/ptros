import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { useGPSLocation } from "./useGPSLocation";

const MASERU_CENTER = { lat: -29.312, lng: 27.4869 };

// â”€â”€â”€ Delivery Detail Modal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function DeliveryModal({
  delivery,
  stop,
  onClose,
  onStatusUpdated,
}: {
  delivery: Delivery | undefined;
  stop: RouteStop;
  onClose: () => void;
  onStatusUpdated?: () => void;
}) {
  const navigate = useNavigate();
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otpInput, setOtpInput] = useState("");

  if (!delivery) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white shadow-md p-5">
        <p className="text-gray-500 text-sm">Delivery details not found.</p>
        <button
          className="mt-3 text-blue-600 text-sm font-medium"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    );
  }

  const typeColor = stop.type === "pickup" ? "bg-blue-600" : "bg-green-600";

  const handleStatusUpdate = async (newStatus: Delivery["status"]) => {
    if (newStatus === "delivered") {
      setShowOtp(true);
      return;
    }
    setStatusUpdating(true);
    try {
      const ok = await CarrierService.updateDeliveryStatus(
        delivery.id,
        newStatus,
      );
      if (ok) {
        toast.success(`Marked as ${newStatus.replace(/_/g, " ")}`);
        onStatusUpdated?.();
        onClose();
      } else {
        toast.error("Failed to update status");
      }
    } catch {
      toast.error("Failed to update status");
    } finally {
      setStatusUpdating(false);
    }
  };

  const handleOtpSubmit = async () => {
    if (!otpInput.trim()) {
      toast.error("Enter OTP code");
      return;
    }
    setStatusUpdating(true);
    try {
      const ok = await CarrierService.verifyOTP(delivery.id, otpInput.trim());
      if (ok) {
        toast.success("Delivered! OTP verified.");
        onStatusUpdated?.();
        onClose();
      } else {
        toast.error("Incorrect OTP code");
      }
    } catch {
      toast.error("Failed to verify OTP");
    } finally {
      setStatusUpdating(false);
    }
  };

  type StatusAction = {
    label: string;
    status: Delivery["status"];
    color: string;
  };
  const statusActions: StatusAction[] = (() => {
    switch (delivery.status) {
      case "assigned":
        return [
          {
            label: "Accept Job",
            status: "accepted",
            color: "bg-blue-600 hover:bg-blue-700",
          },
        ];
      case "accepted":
        return [
          {
            label: "Mark Picked Up",
            status: "picked_up",
            color: "bg-indigo-600 hover:bg-indigo-700",
          },
        ];
      case "picked_up":
        return [
          {
            label: "In Transit",
            status: "in_transit",
            color: "bg-purple-600 hover:bg-purple-700",
          },
          {
            label: "Out for Delivery",
            status: "out_for_delivery",
            color: "bg-orange-500 hover:bg-orange-600",
          },
        ];
      case "in_transit":
        return [
          {
            label: "Out for Delivery",
            status: "out_for_delivery",
            color: "bg-orange-500 hover:bg-orange-600",
          },
        ];
      case "out_for_delivery":
        return [
          {
            label: "Mark Delivered (OTP)",
            status: "delivered",
            color: "bg-green-600 hover:bg-green-700",
          },
        ];
      default:
        return [];
    }
  })();

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden mt-2">
      {/* Header */}
      <div className={`${typeColor} text-white px-5 py-4`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
              {stop.type === "pickup" ? "Pickup" : "Dropoff"}
            </span>
            <h3 className="text-lg font-bold mt-0.5">{stop.address || "-"}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-xl font-bold"
          >
            x
          </button>
        </div>
      </div>

      <div className="p-4 space-y-2 text-sm">
        {[
          [
            "Tracking",
            <span className="font-mono font-semibold text-gray-800">
              {delivery.trackingCode}
            </span>,
          ],
          [
            "Status",
            <span className="font-medium capitalize text-blue-700 px-2 py-0.5 bg-blue-50 rounded-full">
              {delivery.status.replace(/_/g, " ")}
            </span>,
          ],
          [
            "Recipient",
            `${delivery.recipientName} - ${delivery.recipientPhone}`,
          ],
          ["Pickup", delivery.pickupAddress],
          ["Dropoff", delivery.deliveryAddress],
          ...(delivery.packageDescription
            ? [
                [
                  "Package",
                  `${delivery.packageDescription} - ${delivery.packageWeight}kg`,
                ],
              ]
            : []),
          ...(delivery.deliveryInstructions
            ? [["Instructions", delivery.deliveryInstructions]]
            : []),
          [
            "Earnings",
            <span className="font-semibold text-green-700">
              M{" "}
              {(delivery.estimatedEarnings ?? delivery.earnings ?? 0).toFixed(
                2,
              )}
            </span>,
          ],
          [
            "Coords",
            <span className="font-mono text-xs text-gray-500">
              [{stop.lat.toFixed(5)}, {stop.lng.toFixed(5)}]
            </span>,
          ],
        ].map(([label, value], i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-gray-400 w-28 shrink-0 mt-0.5">
              {label as string}
            </span>
            <span className="text-gray-800 flex-1">
              {value as React.ReactNode}
            </span>
          </div>
        ))}
      </div>

      {/* OTP entry */}
      {showOtp && (
        <div className="px-5 pb-4 space-y-2">
          <p className="text-sm font-semibold text-gray-700">
            Enter OTP from recipient:
          </p>
          <div className="flex gap-2">
            <input
              type="number"
              inputMode="numeric"
              placeholder="4-digit OTP"
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
              maxLength={4}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono text-center focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleOtpSubmit}
              disabled={statusUpdating}
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-bold disabled:opacity-60 hover:bg-green-700 transition"
            >
              {statusUpdating ? "..." : "Verify"}
            </button>
          </div>
          <button
            onClick={() => setShowOtp(false)}
            className="text-xs text-gray-400 hover:text-gray-600"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Status action buttons */}
      {!showOtp && statusActions.length > 0 && (
        <div className="px-5 pb-4 space-y-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Quick actions
          </p>
          {statusActions.map((action) => (
            <button
              key={action.status}
              onClick={() => handleStatusUpdate(action.status)}
              disabled={statusUpdating}
              className={`w-full py-2.5 ${action.color} text-white rounded-xl text-sm font-bold disabled:opacity-60 transition active:scale-[0.98]`}
            >
              {statusUpdating ? "Updating..." : action.label}
            </button>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="px-4 pb-4 pt-3 flex gap-2 border-t">
        <button
          onClick={() => navigate("/deliveries")}
          className="flex-1 py-2.5 border border-blue-500 text-blue-600 rounded-xl text-sm font-semibold hover:bg-blue-50 transition"
        >
          View Full Details
        </button>
        <button
          onClick={onClose}
          className="px-5 py-2.5 border border-gray-200 text-gray-500 rounded-xl text-sm font-medium hover:bg-gray-50 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// â”€â”€â”€ Route Map View (vanilla window.google.maps â€” same pattern as coordinator LiveMap) â”€â”€â”€
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

  // â”€â”€ Wait for Google Maps API (same pattern as LiveMap) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€ Initialize map imperatively when API is ready â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€ Update stop markers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
              `<strong>${stop.type === "pickup" ? "Pickup" : "Dropoff"} #${idx + 1}</strong>` +
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

  // â”€â”€ Carrier position marker â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€ Route polyline â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

// â”€â”€â”€ Main RouteTab Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function RouteTab() {
  // GPS from hook (polling-backed, RTDB-seeded â€” survives tab navigation)
  const { isSharing, lastLocation } = useGPSLocation();
  const carrierPos = lastLocation
    ? { lat: lastLocation.lat, lng: lastLocation.lng }
    : null;

  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [knownLocs, setKnownLocs] = useState<
    Record<string, { lat: number; lng: number; name: string }>
  >({});
  // Active (unvisited) route stops — the clean linked list for re-optimization
  const [stops, setStops] = useState<RouteStop[]>([]);
  // Visited stops — separate collection, append-only history for analytics
  const [visitedStops, setVisitedStops] = useState<RouteStop[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<"list" | "map" | "visited">("list");
  const [pathMode, setPathMode] = useState<"straight" | "road">("straight");
  const [selectedStop, setSelectedStop] = useState<RouteStop | null>(null);
  const prevStatusKeyRef = useRef<string>("");
  const archivingRef = useRef<Set<string>>(new Set());

  // â”€â”€ Load knownLocations once â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€ Watch active deliveries (real-time) + routeStops â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);

    // subscribeToActiveDeliveries includes "delivered" so we catch transitions
    const unsubDels = CarrierService.subscribeToActiveDeliveries((dels) =>
      setDeliveries(dels),
    );

    const stopsCol = collection(db, "users", user.uid, "routeStops");
    const unsubStops = onSnapshot(
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

    // Visited history — separate ordered list, sorted by visitOrder (1, 2, 3…)
    const visitedCol = collection(db, "users", user.uid, "visitedRouteStops");
    const unsubVisited = onSnapshot(visitedCol, (snap) => {
      const docs = snap.docs.map((d) => d.data() as RouteStop);
      docs.sort((a: any, b: any) => (a.visitOrder ?? 0) - (b.visitOrder ?? 0));
      setVisitedStops(docs);
    });

    return () => {
      if (typeof unsubDels === "function") unsubDels();
      unsubStops();
      unsubVisited();
    };
  }, []);

  // â”€â”€ Optimization (preserves visited stops, optimizes remaining) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // ── Optimization — only touches the active (unvisited) linked list ──────────
  // visitedRouteStops is never written here; routeStops stays clean for re-opt
  const runOptimize = async (pos?: CarrierPosition) => {
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

      // Archive any stops still in routeStops that should already be visited
      {
        const pickupDoneNow = new Set([
          "picked_up",
          "in_transit",
          "out_for_delivery",
          "delivered",
        ]);
        const alreadyArchivedNow = new Set(
          visitedStops.map((s) => `${s.id}_${s.type}`),
        );
        for (const stop of stops) {
          const key = `${stop.id}_${stop.type}`;
          if (alreadyArchivedNow.has(key) || archivingRef.current.has(key))
            continue;
          const del = deliveries.find((d) => d.id === stop.id);
          if (!del) continue;
          const shouldArchive =
            (stop.type === "pickup" && pickupDoneNow.has(del.status)) ||
            (stop.type === "dropoff" && del.status === "delivered");
          if (!shouldArchive) continue;
          archivingRef.current.add(key);
          let enrichedStop = { ...stop, visited: true };
          if (enrichedStop.lat === 0 && enrichedStop.lng === 0) {
            const loc =
              stop.type === "pickup"
                ? (del.pickupLocation ?? del.currentLocation)
                : del.deliveryLocation;
            if (loc && (loc.lat !== 0 || loc.lng !== 0)) {
              enrichedStop = { ...enrichedStop, lat: loc.lat, lng: loc.lng };
            }
          }
          CarrierService.archiveVisitedStop(enrichedStop).catch(() => {
            archivingRef.current.delete(key);
          });
        }
      }

      // Only optimize deliveries that aren't fully delivered
      const activeDels = deliveries.filter((d) => d.status !== "delivered");
      if (activeDels.length === 0) {
        setUpdating(false);
        return;
      }

      // Keys already in the visited history — exclude from active route
      const archivedKeys = new Set(
        visitedStops.map((s) => `${s.id}_${s.type}`),
      );
      // Also exclude pickup stops that have been picked up (in transit already)
      const pickupDone = new Set([
        "picked_up",
        "in_transit",
        "out_for_delivery",
      ]);

      const rawStops = buildStopsFromDeliveries(activeDels, locs).filter(
        (s) => {
          if (archivedKeys.has(`${s.id}_${s.type}`)) return false;
          if (s.type === "pickup") {
            const del = deliveries.find((d) => d.id === s.id);
            if (del && pickupDone.has(del.status)) return false;
          }
          return true;
        },
      );

      const optimized = bundleFitRoute(rawStops, pos);

      // Compute cumulative load: pickups add package weight, dropoffs subtract
      let runningLoad = 0;
      const withLoad = optimized.map((stop) => {
        const del = deliveries.find((d) => d.id === stop.id);
        const pkg = Number(del?.packageWeight ?? 0);
        if (stop.type === "pickup") runningLoad += pkg;
        else if (stop.type === "dropoff") runningLoad -= pkg;
        return {
          ...stop,
          loadKg: pkg,
          cumulativeLoad: Math.max(0, runningLoad),
        };
      });

      const linked = toDoublyLinkedList(withLoad);
      setStops(linked);
      await CarrierService.saveRouteStops(linked);
    } catch (e: any) {
      console.error("Route optimization failed:", e);
      toast.error("Could not save optimized route");
    } finally {
      setUpdating(false);
    }
  };

  // â”€â”€ Auto re-optimize when delivery STATUS changes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  useEffect(() => {
    if (deliveries.length === 0) return;
    const statusKey = deliveries
      .map((d) => `${d.id}:${d.status}`)
      .sort()
      .join(",");
    if (statusKey === prevStatusKeyRef.current) return;
    const isFirstLoad = prevStatusKeyRef.current === "";
    prevStatusKeyRef.current = statusKey;
    // Skip re-optimize on initial load - let user see saved route first
    if (isFirstLoad) return;
    runOptimize(carrierPos ?? undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deliveries]);

  const handleReoptimize = () => {
    runOptimize(carrierPos ?? undefined);
    toast.success("Re-optimizing...");
  };

  // ── Archive stops to visitedRouteStops when delivery status changes ────────
  // Visited stops leave routeStops entirely — separate collection for analytics
  useEffect(() => {
    if (!deliveries.length || !stops.length) return;
    const pickupDoneStatuses = new Set([
      "picked_up",
      "in_transit",
      "out_for_delivery",
      "delivered",
    ]);
    const alreadyArchived = new Set(
      visitedStops.map((s) => `${s.id}_${s.type}`),
    );
    for (const stop of stops) {
      const key = `${stop.id}_${stop.type}`;
      if (alreadyArchived.has(key) || archivingRef.current.has(key)) continue;
      const del = deliveries.find((d) => d.id === stop.id);
      if (!del) continue;
      const shouldArchive =
        (stop.type === "pickup" && pickupDoneStatuses.has(del.status)) ||
        (stop.type === "dropoff" && del.status === "delivered");
      if (!shouldArchive) continue;
      archivingRef.current.add(key);
      let enriched = { ...stop, visited: true };
      if (enriched.lat === 0 && enriched.lng === 0) {
        const loc =
          stop.type === "pickup"
            ? (del.pickupLocation ?? del.currentLocation)
            : del.deliveryLocation;
        if (loc && (loc.lat !== 0 || loc.lng !== 0)) {
          enriched = { ...enriched, lat: loc.lat, lng: loc.lng };
        }
      }
      CarrierService.archiveVisitedStop(enriched).catch((e) => {
        console.warn("Archive failed:", e);
        archivingRef.current.delete(key);
      });
    }
  }, [deliveries, stops]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Enrich active stops with coordinates (display only) ───────────────────
  const enrichedActiveStops = useMemo(() => {
    return getOrderedStops(stops).map((stop) => {
      if (stop.lat !== 0 || stop.lng !== 0) return stop;
      const del = deliveries.find((d) => d.id === stop.id);
      if (del) {
        const loc =
          stop.type === "pickup"
            ? (del.pickupLocation ?? del.currentLocation)
            : del.deliveryLocation;
        if (loc && (loc.lat !== 0 || loc.lng !== 0))
          return { ...stop, lat: loc.lat, lng: loc.lng };
      }
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

  // Active-only display list — visited stops are shown in a separate section
  const orderedStops = useMemo(
    () => enrichedActiveStops,
    [enrichedActiveStops],
  );

  // â”€â”€ Render â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  if (error) {
    return (
      <div className="p-4">
        <div className="rounded-xl bg-red-50 border border-red-200 p-4">
          <p className="font-semibold text-red-700">Permission error</p>
          <p className="text-sm text-red-600 mt-1">{error}</p>
          <p className="text-xs text-gray-500 mt-2">
            Make sure Firestore rules allow carriers to read/write their own
            routeStops.
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

  if (enrichedActiveStops.length === 0 && visitedStops.length === 0) {
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

  return (
    <div className="p-3 sm:p-4 space-y-3 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">My Route</h2>
          <p className="text-xs text-gray-500">
            {enrichedActiveStops.length} active stop
            {enrichedActiveStops.length === 1 ? "" : "s"} •{" "}
            {isSharing ? (
              <span className="text-green-600 font-medium">GPS active</span>
            ) : (
              <span className="text-orange-500">Location not sharing</span>
            )}
          </p>
        </div>
        <button
          className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg font-medium disabled:opacity-60 active:bg-blue-700 transition"
          onClick={handleReoptimize}
          disabled={updating || deliveries.length === 0}
        >
          {updating ? "Optimizing..." : "Re-optimize"}
        </button>
      </div>

      {/* View + path toggles */}
      <div className="flex gap-2">
        <button
          className={`flex-1 py-1.5 rounded-lg text-sm font-medium border transition ${
            view === "list"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-600 border-gray-300"
          }`}
          onClick={() => setView("list")}
        >
          List
        </button>
        <button
          className={`flex-1 py-1.5 rounded-lg text-sm font-medium border transition ${
            view === "map"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-600 border-gray-300"
          }`}
          onClick={() => setView("map")}
        >
          Map
        </button>
        <button
          className={`relative flex-1 py-1.5 rounded-lg text-sm font-medium border transition ${
            view === "visited"
              ? "bg-gray-700 text-white border-gray-700"
              : "bg-white text-gray-600 border-gray-300"
          }`}
          onClick={() => setView("visited")}
        >
          Done
          {visitedStops.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-gray-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-0.5">
              {visitedStops.length}
            </span>
          )}
        </button>
        {view === "map" && (
          <button
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-300 bg-white text-gray-600 transition"
            onClick={() =>
              setPathMode((p) => (p === "straight" ? "road" : "straight"))
            }
          >
            {pathMode === "straight" ? "Road" : "Straight"}
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
                  <div
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                      stop.visited
                        ? "bg-gray-400"
                        : isPickup
                          ? "bg-blue-600"
                          : "bg-green-600"
                    }`}
                  >
                    {stop.visited ? "v" : idx + 1}
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
                        {isPickup ? "Pickup" : "Dropoff"}
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
                    {stop.cumulativeLoad !== undefined && (
                      <p className="text-xs mt-1">
                        <span className="font-medium text-gray-600">
                          {isPickup ? "+" : "-"}
                          {stop.loadKg ?? 0} kg
                        </span>
                        <span className="text-gray-400"> · load after: </span>
                        <span className="font-semibold text-gray-700">
                          {stop.cumulativeLoad.toFixed(1)} kg
                        </span>
                      </p>
                    )}
                    {paired && (
                      <p className="text-xs text-gray-500 mt-1">
                        {isPickup ? "> Drop at" : "< Picked up at"}{" "}
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

      {/* Visited tab view */}
      {view === "visited" &&
        (visitedStops.length === 0 ? (
          <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 text-center">
            <p className="text-gray-400 text-sm">No stops visited yet.</p>
          </div>
        ) : (
          <ol className="space-y-2">
            {visitedStops.map((stop) => {
              const isPickup = stop.type === "pickup";
              const del = deliveries.find((d) => d.id === stop.id);
              const order = (stop as any).visitOrder ?? "?";
              return (
                <li
                  key={`visited_${stop.id}_${stop.type}`}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-7 h-7 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">
                      {order}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          {isPickup ? "Pickup" : "Dropoff"}
                        </span>
                        <span className="text-xs text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full font-medium">
                          Done
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-gray-700 mt-0.5 truncate">
                        {stop.address || "(no address)"}
                      </p>
                      {del && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          {del.trackingCode} &middot; {del.recipientName}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        ))}

      {/* Delivery detail modal */}
      {selectedStop && (
        <DeliveryModal
          delivery={selectedDelivery}
          stop={selectedStop}
          onClose={() => setSelectedStop(null)}
          onStatusUpdated={() => setSelectedStop(null)}
        />
      )}
    </div>
  );
}
