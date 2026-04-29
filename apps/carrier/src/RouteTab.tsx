import { useEffect, useState } from "react";
import { CarrierService } from "./carrierService";
import {
  bundleFitRoute,
  toDoublyLinkedList,
  buildStopsFromDeliveries,
  RouteStop,
} from "./routeOptimization";
import { Delivery } from "./types";
import { toast } from "react-hot-toast";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { auth, db } from "@config";

export default function RouteTab() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [stops, setStops] = useState<RouteStop[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let unsub: (() => void) | null = null;
    setLoading(true);
    setError(null);
    getDocs(collection(db, "knownLocations"))
      .then((snap) => {
        const locs: Record<
          string,
          { lat: number; lng: number; name: string; normalizedName?: string }
        > = {};
        snap.forEach((doc) => {
          const data = doc.data();
          locs[doc.id] = {
            lat: data.lat,
            lng: data.lng,
            name: data.name || data.normalizedName || doc.id,
            normalizedName: data.normalizedName,
          };
        });
        CarrierService.getDeliveries(20)
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
            const user = auth.currentUser;
            if (user) {
              const stopsCol = collection(db, "users", user.uid, "routeStops");
              unsub = onSnapshot(
                stopsCol,
                (snap: any) => {
                  setStops(snap.docs.map((d: any) => d.data()));
                  setLoading(false);
                },
                (err: any) => {
                  setError(err.message || "RouteStops listener error");
                  setLoading(false);
                },
              );
            } else {
              setLoading(false);
            }
          })
          .catch((err) => {
            setError(err.message || "getDeliveries error");
            setLoading(false);
          });
      })
      .catch((err) => {
        setError(err.message || "knownLocations error");
        setLoading(false);
      });
    return () => {
      if (unsub) unsub();
    };
  }, []);

  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
  if (loading) return <div className="p-4">Loading route...</div>;
  if (stops.length === 0) return <div className="p-4">No active route.</div>;

  const handleReoptimize = async () => {
    setUpdating(true);
    try {
      const snap = await getDocs(collection(db, "knownLocations"));
      const locs: Record<
        string,
        { lat: number; lng: number; name: string; normalizedName?: string }
      > = {};
      snap.forEach((doc) => {
        const data = doc.data();
        locs[doc.id] = {
          lat: data.lat,
          lng: data.lng,
          name: data.name || data.normalizedName || doc.id,
          normalizedName: data.normalizedName,
        };
      });
      const rawStops = buildStopsFromDeliveries(deliveries, locs);
      const optimized = bundleFitRoute(rawStops);
      const linked = toDoublyLinkedList(optimized);
      setStops(linked);
      await CarrierService.saveRouteStops(linked);
      toast.success("Route re-optimized!");
    } catch (e) {
      console.error("Failed to re-optimize route", e);
      toast.error("Failed to re-optimize route");
    }
    setUpdating(false);
  };

  function getOrderedStops(stops: RouteStop[]): RouteStop[] {
    if (!stops.length) return [];
    const byKey: Record<string, RouteStop> = {};
    const byId: Record<string, RouteStop> = {};
    stops.forEach((s) => {
      byKey[`${s.id}_${s.type}`] = s;
      byId[s.id] = s;
    });
    let start = stops.find((s) => !s.prevId);
    if (!start) {
      const allPrev = new Set(stops.map((s) => s.prevId).filter(Boolean));
      start = stops.find((s) => !allPrev.has(`${s.id}_${s.type}`));
    }
    if (!start) return stops;
    const ordered: RouteStop[] = [];
    let curr = start;
    const seen = new Set();
    while (curr && !seen.has(`${curr.id}_${curr.type}`)) {
      ordered.push(curr);
      seen.add(`${curr.id}_${curr.type}`);
      if (!curr.nextId) break;
      curr = byKey[curr.nextId] || byId[curr.nextId] || null;
    }
    return ordered;
  }

  const orderedStops = getOrderedStops(stops);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold">My Route</h2>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-60"
          onClick={handleReoptimize}
          disabled={updating || deliveries.length === 0}
        >
          Re-optimize Route
        </button>
      </div>
      <ol className="space-y-2">
        {orderedStops.map((stop) => (
          <li
            key={stop.id + stop.type}
            className={`p-3 rounded border flex flex-col md:flex-row md:items-center md:justify-between ${stop.visited ? "bg-green-100 text-gray-400" : "bg-white"}`}
          >
            <div>
              <span className="font-semibold">
                {stop.type === "pickup" ? "Pickup" : "Dropoff"}
              </span>{" "}
              at {stop.address || "(no address)"}
              <span className="ml-2 text-xs text-gray-500">
                [{stop.lat?.toFixed(6)}, {stop.lng?.toFixed(6)}]
              </span>
              {stop.visited && <span className="ml-2 text-xs">(visited)</span>}
            </div>
            <div className="text-xs text-gray-500 mt-1 md:mt-0 md:ml-4">
              <span>
                prev:{" "}
                {(() => {
                  if (!stop.prevId) return "null";
                  const prev = orderedStops.find(
                    (s) => `${s.id}_${s.type}` === stop.prevId,
                  );
                  return prev
                    ? `${prev.address || "(no address)"} [${typeof prev.lat === "number" && typeof prev.lng === "number" ? prev.lat.toFixed(6) + ", " + prev.lng.toFixed(6) : "-"}]`
                    : stop.prevId;
                })()}
              </span>
              {" | "}
              <span>
                next:{" "}
                {(() => {
                  if (!stop.nextId) return "null";
                  const next = orderedStops.find(
                    (s) => `${s.id}_${s.type}` === stop.nextId,
                  );
                  return next
                    ? `${next.address || "(no address)"} [${typeof next.lat === "number" && typeof next.lng === "number" ? next.lat.toFixed(6) + ", " + next.lng.toFixed(6) : "-"}]`
                    : stop.nextId;
                })()}
              </span>
              {" | "}
              <span>
                {stop.type === "pickup"
                  ? (() => {
                      const dropoff = orderedStops.find(
                        (s) => s.id === stop.id && s.type === "dropoff",
                      );
                      return `dropoff: ${dropoff ? `${dropoff.address || "(no address)"} [${typeof dropoff.lat === "number" && typeof dropoff.lng === "number" ? dropoff.lat.toFixed(6) + ", " + dropoff.lng.toFixed(6) : "-"}]` : "-"}`;
                    })()
                  : (() => {
                      const pickup = orderedStops.find(
                        (s) => s.id === stop.id && s.type === "pickup",
                      );
                      return `pickup: ${pickup ? `${pickup.address || "(no address)"} [${typeof pickup.lat === "number" && typeof pickup.lng === "number" ? pickup.lat.toFixed(6) + ", " + pickup.lng.toFixed(6) : "-"}]` : "-"}`;
                    })()}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold">My Route</h2>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-60"
          onClick={handleReoptimize}
          disabled={updating || deliveries.length === 0}
        >
          Re-optimize Route
        </button>
      </div>
      <ol className="space-y-2">
        {orderedStops.map((stop) => (
          <li
            key={stop.id + stop.type}
            className={`p-3 rounded border flex flex-col md:flex-row md:items-center md:justify-between ${stop.visited ? "bg-green-100 text-gray-400" : "bg-white"}`}
          >
            <div>
              <span className="font-semibold">
                {stop.type === "pickup" ? "Pickup" : "Dropoff"}
              </span>{" "}
              at {stop.address || "(no address)"}
              <span className="ml-2 text-xs text-gray-500">
                [{stop.lat?.toFixed(6)}, {stop.lng?.toFixed(6)}]
              </span>
              {stop.visited && <span className="ml-2 text-xs">(visited)</span>}
            </div>
            <div className="text-xs text-gray-500 mt-1 md:mt-0 md:ml-4">
              <span>
                prev:{" "}
                {(() => {
                  if (!stop.prevId) return "null";
                  const prev = orderedStops.find(
                    (s) => `${s.id}_${s.type}` === stop.prevId,
                  );
                  return prev
                    ? `${prev.address || "(no address)"} [${typeof prev.lat === "number" && typeof prev.lng === "number" ? prev.lat.toFixed(6) + ", " + prev.lng.toFixed(6) : "-"}]`
                    : stop.prevId;
                })()}
              </span>
              {" | "}
              <span>
                next:{" "}
                {(() => {
                  if (!stop.nextId) return "null";
                  const next = orderedStops.find(
                    (s) => `${s.id}_${s.type}` === stop.nextId,
                  );
                  return next
                    ? `${next.address || "(no address)"} [${typeof next.lat === "number" && typeof next.lng === "number" ? next.lat.toFixed(6) + ", " + next.lng.toFixed(6) : "-"}]`
                    : stop.nextId;
                })()}
              </span>
              {" | "}
              <span>
                {stop.type === "pickup"
                  ? (() => {
                      const dropoff = orderedStops.find(
                        (s) => s.id === stop.id && s.type === "dropoff",
                      );
                      return `dropoff: ${dropoff ? `${dropoff.address || "(no address)"} [${typeof dropoff.lat === "number" && typeof dropoff.lng === "number" ? dropoff.lat.toFixed(6) + ", " + dropoff.lng.toFixed(6) : "-"}]` : "-"}`;
                    })()
                  : (() => {
                      const pickup = orderedStops.find(
                        (s) => s.id === stop.id && s.type === "pickup",
                      );
                      return `pickup: ${pickup ? `${pickup.address || "(no address)"} [${typeof pickup.lat === "number" && typeof pickup.lng === "number" ? pickup.lat.toFixed(6) + ", " + pickup.lng.toFixed(6) : "-"}]` : "-"}`;
                    })()}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
