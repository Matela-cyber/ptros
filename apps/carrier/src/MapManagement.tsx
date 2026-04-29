// MapManagement.tsx (Carrier version)
import { useEffect, useState } from "react";
import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";
import toast, { Toaster } from "react-hot-toast";
import {
  CarrierService,
  BlockedRoute,
  Shortcut,
  ObstacleRoute,
} from "./carrierService";

const DEFAULT_MAP_CENTER = { lat: -29.31, lng: 27.48 };

export default function MapManagement() {
  const [blockedRoutes, setBlockedRoutes] = useState<BlockedRoute[]>([]);
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);
  const [obstacles, setObstacles] = useState<ObstacleRoute[]>([]);
  const [draftPoints, setDraftPoints] = useState<
    { lat: number; lng: number }[]
  >([]);
  const [formType, setFormType] = useState<"shortcut" | "blocked" | "obstacle">(
    "shortcut",
  );
  const [mapMode, setMapMode] = useState<"save" | "delete">("save");
  const [conflictRoutes, setConflictRoutes] = useState<
    Array<{
      type: "shortcut" | "blocked" | "obstacle";
      fromNodeId: string;
      toNodeId: string;
    }>
  >([]);
  const [selectedRoute, setSelectedRoute] = useState<{
    type: "shortcut" | "blocked" | "obstacle";
    fromNodeId: string;
    toNodeId: string;
  } | null>(null);
  const [description, setDescription] = useState("");
  const [obstacleType, setObstacleType] = useState("");
  const [severity, setSeverity] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    refreshData();
  }, []);

  // Constraint rule evaluation: find duplicates/overlaps
  useEffect(() => {
    const allRoutes = [
      ...shortcuts.map((r) => ({ ...r, type: "shortcut" as const })),
      ...blockedRoutes.map((r) => ({ ...r, type: "blocked" as const })),
      ...obstacles.map((r) => ({ ...r, type: "obstacle" as const })),
    ];
    const conflicts: Array<{
      type: "shortcut" | "blocked" | "obstacle";
      fromNodeId: string;
      toNodeId: string;
    }> = [];
    const seen = new Set<string>();
    for (const route of allRoutes) {
      const key1 = `${route.fromNodeId}_${route.toNodeId}`;
      const key2 = `${route.toNodeId}_${route.fromNodeId}`;
      if (seen.has(key1) || seen.has(key2)) {
        conflicts.push({
          type: route.type,
          fromNodeId: route.fromNodeId,
          toNodeId: route.toNodeId,
        });
      } else {
        seen.add(key1);
        seen.add(key2);
      }
    }
    setConflictRoutes(conflicts);
  }, [shortcuts, blockedRoutes, obstacles]);

  async function refreshData() {
    setBlockedRoutes(await CarrierService.getAllBlockedRoutes());
    setShortcuts(await CarrierService.getAllShortcuts());
    setObstacles(await CarrierService.getAllObstacleRoutes());
  }

  function clearDraft() {
    setDraftPoints([]);
    setDescription("");
    setName("");
    setObstacleType("");
    setSeverity(1);
  }

  function handleMapClick(event: google.maps.MapMouseEvent) {
    if (!event.latLng) return;
    if (mapMode === "save") {
      const point = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      setDraftPoints((prev) => (prev.length >= 2 ? [point] : [...prev, point]));
    } else if (mapMode === "delete") {
      // Improved: Use closest point on segment for better mobile accuracy
      const clickLat = event.latLng.lat();
      const clickLng = event.latLng.lng();
      function distanceToSegment(
        _p: { lat: number; lng: number },
        v: { lat: number; lng: number },
        w: { lat: number; lng: number },
      ): number {
        // _p is unused, clickLat/clickLng are in closure
        const toRad = (deg: number) => deg * (Math.PI / 180);
        const R = 6371; // km
        // Project click onto segment
        const t =
          ((clickLat - v.lat) * (w.lat - v.lat) +
            (clickLng - v.lng) * (w.lng - v.lng)) /
          ((w.lat - v.lat) ** 2 + (w.lng - v.lng) ** 2);
        let proj: { lat: number; lng: number };
        if (t < 0) proj = v;
        else if (t > 1) proj = w;
        else
          proj = {
            lat: v.lat + t * (w.lat - v.lat),
            lng: v.lng + t * (w.lng - v.lng),
          };
        const dLat2 = toRad(clickLat - proj.lat);
        const dLng2 = toRad(clickLng - proj.lng);
        const a2 =
          Math.sin(dLat2 / 2) * Math.sin(dLat2 / 2) +
          Math.cos(toRad(clickLat)) *
            Math.cos(toRad(proj.lat)) *
            Math.sin(dLng2 / 2) *
            Math.sin(dLng2 / 2);
        const c2 = 2 * Math.atan2(Math.sqrt(a2), Math.sqrt(1 - a2));
        return R * c2; // in km
      }
      let found: {
        type: "shortcut" | "blocked" | "obstacle";
        fromNodeId: string;
        toNodeId: string;
      } | null = null;
      let minDist = 0.15; // 150 meters
      for (const route of shortcuts) {
        const [from, to] = parsePath(route);
        const dist = distanceToSegment(
          { lat: clickLat, lng: clickLng },
          from,
          to,
        );
        if (dist < minDist) {
          found = {
            type: "shortcut" as const,
            fromNodeId: route.fromNodeId,
            toNodeId: route.toNodeId,
          };
          minDist = dist;
        }
      }
      for (const route of blockedRoutes) {
        const [from, to] = parsePath(route);
        const dist = distanceToSegment(
          { lat: clickLat, lng: clickLng },
          from,
          to,
        );
        if (dist < minDist) {
          found = {
            type: "blocked" as const,
            fromNodeId: route.fromNodeId,
            toNodeId: route.toNodeId,
          };
          minDist = dist;
        }
      }
      for (const route of obstacles) {
        const [from, to] = parsePath(route);
        const dist = distanceToSegment(
          { lat: clickLat, lng: clickLng },
          from,
          to,
        );
        if (dist < minDist) {
          found = {
            type: "obstacle" as const,
            fromNodeId: route.fromNodeId,
            toNodeId: route.toNodeId,
          };
          minDist = dist;
        }
      }
      setSelectedRoute(found);
      if (!found) toast.error("Tap closer to a route to select for deletion.");
    }
  }

  async function handleDelete(
    type: "shortcut" | "blocked" | "obstacle",
    fromNodeId: string,
    toNodeId: string,
  ) {
    // Confirm before deleting
    if (
      !window.confirm(
        "Are you sure you want to delete this route? This cannot be undone.",
      )
    ) {
      return;
    }
    try {
      if (type === "shortcut") {
        await CarrierService.removeShortcut(fromNodeId, toNodeId);
        toast.success("Shortcut deleted");
      } else if (type === "blocked") {
        await CarrierService.removeBlockedRoute(fromNodeId, toNodeId);
        toast.success("Blocked route deleted");
      } else if (type === "obstacle") {
        await CarrierService.removeObstacleRoute(fromNodeId, toNodeId);
        toast.success("Obstacle deleted");
      }
      setSelectedRoute(null);
      await refreshData();
    } catch (err) {
      toast.error("Failed to delete route");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (draftPoints.length !== 2) {
      toast.error("Select start and end points on the map.");
      return;
    }
    if (!name.trim()) {
      toast.error("Name is required.");
      return;
    }
    if (!description.trim()) {
      toast.error("Description is required.");
      return;
    }
    const fromNodeId = `${draftPoints[0].lat},${draftPoints[0].lng}`;
    const toNodeId = `${draftPoints[1].lat},${draftPoints[1].lng}`;
    // Constraint rule: prevent duplicate/overlapping
    const allRoutes = [
      ...shortcuts.map((r) => ({ ...r, type: "shortcut" as const })),
      ...blockedRoutes.map((r) => ({ ...r, type: "blocked" as const })),
      ...obstacles.map((r) => ({ ...r, type: "obstacle" as const })),
    ];
    const isDuplicate = allRoutes.some(
      (r) =>
        (r.fromNodeId === fromNodeId && r.toNodeId === toNodeId) ||
        (r.fromNodeId === toNodeId && r.toNodeId === fromNodeId),
    );
    if (isDuplicate) {
      toast.error(
        "A route between these points already exists (duplicate/overlap not allowed).",
      );
      return;
    }
    setSubmitting(true);
    try {
      if (formType === "shortcut") {
        await CarrierService.addShortcut({
          fromNodeId,
          toNodeId,
          name,
          description,
          addedBy: "carrier",
          timestamp: Date.now(),
        });
        toast.success("Shortcut added");
      } else if (formType === "blocked") {
        await CarrierService.addBlockedRoute({
          fromNodeId,
          toNodeId,
          name,
          reason: description,
          reportedBy: "carrier",
          timestamp: Date.now(),
        });
        toast.success("Blocked route added");
      } else if (formType === "obstacle") {
        await CarrierService.addObstacleRoute({
          fromNodeId,
          toNodeId,
          name,
          obstacleType,
          severity,
          description,
          reportedBy: "carrier",
          timestamp: Date.now(),
        });
        toast.success("Obstacle route added");
      }
      clearDraft();
      await refreshData();
    } catch (err) {
      toast.error("Failed to add route");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-5">
      <Toaster position="top-right" />
      <h1 className="text-2xl font-semibold text-gray-900">Map Management</h1>
      <div className="flex gap-2 mb-2">
        <button
          className={`rounded-md px-3 py-1.5 text-sm font-medium border ${mapMode === "save" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-blue-700 border-blue-200"}`}
          onClick={() => {
            setMapMode("save");
            setSelectedRoute(null);
          }}
        >
          Save Mode
        </button>
        <button
          className={`rounded-md px-3 py-1.5 text-sm font-medium border ${mapMode === "delete" ? "bg-red-600 text-white border-red-600" : "bg-white text-red-700 border-red-200"}`}
          onClick={() => {
            setMapMode("delete");
            setDraftPoints([]);
          }}
        >
          Delete Mode
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-7">
        {mapMode === "save" && (
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm xl:col-span-2"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Add route rule
              </h2>
            </div>
            <div className="mb-4 grid grid-cols-3 gap-2 rounded-lg bg-gray-50 p-1.5">
              <button
                type="button"
                onClick={() => setFormType("shortcut")}
                className={
                  formType === "shortcut"
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-700" +
                      " rounded-md px-2.5 py-1.5 text-xs font-medium transition"
                }
              >
                Shortcut
              </button>
              <button
                type="button"
                onClick={() => setFormType("blocked")}
                className={
                  formType === "blocked"
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700" +
                      " rounded-md px-2.5 py-1.5 text-xs font-medium transition"
                }
              >
                Blocked
              </button>
              <button
                type="button"
                onClick={() => setFormType("obstacle")}
                className={
                  formType === "obstacle"
                    ? "bg-yellow-600 text-white"
                    : "bg-white text-gray-700" +
                      " rounded-md px-2.5 py-1.5 text-xs font-medium transition"
                }
              >
                Obstacle
              </button>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="e.g. Main Street Shortcut"
              />
            </div>
            {formType === "shortcut" && (
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="e.g. Alley shortcut"
                />
              </div>
            )}
            {formType === "blocked" && (
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Reason
                </label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="e.g. Flooded"
                />
              </div>
            )}
            {formType === "obstacle" && (
              <>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Obstacle Type
                </label>
                <input
                  value={obstacleType}
                  onChange={(e) => setObstacleType(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="e.g. Steep hill"
                />
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Severity (1-10)
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={severity}
                  onChange={(e) => setSeverity(Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                />
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="e.g. Large pothole near school"
                />
              </>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60 mt-4"
            >
              {submitting ? "Saving…" : "Save route rule"}
            </button>
          </form>
        )}
        <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm xl:col-span-5">
          <GoogleMap
            center={draftPoints[draftPoints.length - 1] || DEFAULT_MAP_CENTER}
            zoom={12}
            onClick={handleMapClick}
            mapContainerStyle={{ width: "100%", height: "430px" }}
            options={{
              streetViewControl: false,
              fullscreenControl: true,
              mapTypeControl: true,
            }}
          >
            {blockedRoutes.map((route, idx) => {
              const isSelected =
                mapMode === "delete" &&
                selectedRoute &&
                selectedRoute.type === "blocked" &&
                selectedRoute.fromNodeId === route.fromNodeId &&
                selectedRoute.toNodeId === route.toNodeId;
              const isConflict = conflictRoutes.some(
                (c) =>
                  c.type === "blocked" &&
                  c.fromNodeId === route.fromNodeId &&
                  c.toNodeId === route.toNodeId,
              );
              const isDeleteMode = mapMode === "delete";
              return (
                <>
                  {/* Main visible polyline */}
                  <Polyline
                    key={"blocked" + idx}
                    path={parsePath(route)}
                    options={{
                      strokeColor: isConflict
                        ? "#f43f5e"
                        : isSelected
                          ? "#991b1b"
                          : "#dc2626",
                      strokeWeight:
                        isSelected || isConflict || isDeleteMode ? 18 : 6,
                      strokeOpacity: isDeleteMode ? 0.7 : 1,
                      zIndex: isSelected || isConflict || isDeleteMode ? 20 : 1,
                      clickable: false,
                      icons: isDeleteMode
                        ? [
                            {
                              icon: {
                                path: "M 0,-1 0,1",
                                strokeOpacity: 0.7,
                                scale: 4,
                                strokeColor: "#f87171",
                              },
                              offset: "0",
                              repeat: "20px",
                            },
                          ]
                        : undefined,
                    }}
                  />
                  {/* Invisible thick clickable overlay for easy picking in delete mode */}
                  {isDeleteMode && (
                    <Polyline
                      key={"blocked-invisible-" + idx}
                      path={parsePath(route)}
                      options={{
                        strokeColor: "#000000",
                        strokeOpacity: 0,
                        strokeWeight: 40,
                        zIndex: 100,
                        clickable: true,
                      }}
                      onClick={() => {
                        setSelectedRoute({
                          type: "blocked",
                          fromNodeId: route.fromNodeId,
                          toNodeId: route.toNodeId,
                        });
                      }}
                    />
                  )}
                </>
              );
            })}
            {shortcuts.map((route, idx) => {
              const isSelected =
                mapMode === "delete" &&
                selectedRoute &&
                selectedRoute.type === "shortcut" &&
                selectedRoute.fromNodeId === route.fromNodeId &&
                selectedRoute.toNodeId === route.toNodeId;
              const isConflict = conflictRoutes.some(
                (c) =>
                  c.type === "shortcut" &&
                  c.fromNodeId === route.fromNodeId &&
                  c.toNodeId === route.toNodeId,
              );
              return (
                <Polyline
                  key={"shortcut" + idx}
                  path={parsePath(route)}
                  options={{
                    strokeColor: isConflict
                      ? "#f43f5e"
                      : isSelected
                        ? "#065f46"
                        : "#16a34a",
                    strokeWeight: isSelected || isConflict ? 10 : 6,
                    strokeOpacity: 1,
                    zIndex: isSelected || isConflict ? 10 : 1,
                    clickable: false,
                  }}
                />
              );
            })}
            {obstacles.map((route, idx) => {
              const isSelected =
                mapMode === "delete" &&
                selectedRoute &&
                selectedRoute.type === "obstacle" &&
                selectedRoute.fromNodeId === route.fromNodeId &&
                selectedRoute.toNodeId === route.toNodeId;
              const isConflict = conflictRoutes.some(
                (c) =>
                  c.type === "obstacle" &&
                  c.fromNodeId === route.fromNodeId &&
                  c.toNodeId === route.toNodeId,
              );
              return (
                <Polyline
                  key={"obstacle" + idx}
                  path={parsePath(route)}
                  options={{
                    strokeColor: isConflict
                      ? "#f43f5e"
                      : isSelected
                        ? "#b45309"
                        : "#fbbf24",
                    strokeWeight: isSelected || isConflict ? 10 : 6,
                    strokeOpacity: 1,
                    zIndex: isSelected || isConflict ? 10 : 1,
                    clickable: false,
                  }}
                />
              );
            })}
            {draftPoints.map((point, index) => (
              <Marker
                key={index}
                position={point}
                label={index === 0 ? "1" : "2"}
              />
            ))}
            {draftPoints.length === 2 && mapMode === "save" && (
              <Polyline
                path={draftPoints}
                options={{
                  strokeColor: "#2563eb",
                  strokeWeight: 6,
                  strokeOpacity: 1,
                }}
              />
            )}
          </GoogleMap>
          {mapMode === "save" && (
            <button
              onClick={clearDraft}
              className="mt-4 rounded-md border border-blue-200 bg-white px-2.5 py-1.5 text-xs font-medium text-blue-700 hover:bg-blue-100"
            >
              Clear draft
            </button>
          )}
          {mapMode === "delete" && (
            <div className="mt-4 flex flex-col items-center">
              {selectedRoute ? (
                <>
                  <div className="mb-2 text-sm text-gray-700">
                    Selected:{" "}
                    <span className="font-semibold">{selectedRoute.type}</span>{" "}
                    route
                  </div>
                  <button
                    onClick={() =>
                      handleDelete(
                        selectedRoute.type,
                        selectedRoute.fromNodeId,
                        selectedRoute.toNodeId,
                      )
                    }
                    className="rounded-md bg-red-600 px-4 py-2 text-white font-semibold hover:bg-red-700"
                  >
                    Delete Selected Route
                  </button>
                  <button
                    onClick={() => setSelectedRoute(null)}
                    className="mt-2 text-xs text-gray-500 underline"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <div className="text-xs text-gray-400">
                  Tap a route on the map to select it for deletion.
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function parsePath(route: { fromNodeId: string; toNodeId: string }) {
  const [startLat, startLng] = route.fromNodeId.split(",").map(Number);
  const [endLat, endLng] = route.toNodeId.split(",").map(Number);
  return [
    { lat: startLat, lng: startLng },
    { lat: endLat, lng: endLng },
  ];
}
