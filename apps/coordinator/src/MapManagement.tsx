import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";
import {
  formatRouteNetworkSegmentType,
  getRouteNetworkSegmentStyle,
  type LatLngPoint,
} from "@config";
import { toast, Toaster } from "react-hot-toast";
import {
  FaBan,
  FaCircleCheck,
  FaMapLocationDot,
  FaPlus,
  FaRoad,
  FaRoute,
  FaTruck,
} from "react-icons/fa6";
import {
  createManagedRouteSegment,
  subscribeManagedRouteSegments,
  updateManagedRouteSegmentStatus,
  type ManagedRouteSegment,
  type ManagedSegmentType,
  type ManagedSegmentStatus,
  type NormalizedVehicleType,
} from "./services/routeIntelligenceService";

const vehicleOptions: NormalizedVehicleType[] = [
  "bicycle",
  "motorcycle",
  "car",
  "pickup",
  "van",
  "truck",
];

const defaultForm = {
  name: "",
  type: "shortcut" as ManagedSegmentType,
  note: "",
  startLat: "",
  startLng: "",
  endLat: "",
  endLng: "",
  temporary: false,
  maxWeightKg: "",
};

const DEFAULT_MAP_CENTER = { lat: -29.31, lng: 27.48 };

const getPolylineIcons = (
  iconMode: ReturnType<typeof getRouteNetworkSegmentStyle>["iconMode"],
  color: string,
) => {
  if (typeof window === "undefined" || !window.google?.maps) return undefined;

  switch (iconMode) {
    case "cross":
      return [
        {
          icon: {
            path: "M -2,-2 2,2 M 2,-2 -2,2",
            strokeColor: color,
            strokeOpacity: 1,
            scale: 2.2,
          },
          offset: "0",
          repeat: "16px",
        },
      ];
    case "dash":
      return [
        {
          icon: {
            path: "M 0,-1 0,1",
            strokeColor: color,
            strokeOpacity: 1,
            scale: 3,
          },
          offset: "0",
          repeat: "14px",
        },
      ];
    case "dot":
      return [
        {
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: color,
            fillOpacity: 1,
            strokeColor: color,
            strokeOpacity: 1,
            scale: 2.4,
          },
          offset: "0",
          repeat: "18px",
        },
      ];
    case "arrow":
      return [
        {
          icon: {
            path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            fillColor: color,
            fillOpacity: 1,
            strokeColor: color,
            strokeOpacity: 1,
            scale: 3,
          },
          offset: "14px",
          repeat: "54px",
        },
      ];
    default:
      return undefined;
  }
};

export default function MapManagement() {
  const [segments, setSegments] = useState<ManagedRouteSegment[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [selectedVehicles, setSelectedVehicles] = useState<
    NormalizedVehicleType[]
  >([]);
  const [form, setForm] = useState(defaultForm);
  const [draftPoints, setDraftPoints] = useState<LatLngPoint[]>([]);
  const [selectedSegmentId, setSelectedSegmentId] = useState<string | null>(
    null,
  );
  const [interactionMode, setInteractionMode] = useState<"pencil" | "eraser">(
    "pencil",
  );
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    return subscribeManagedRouteSegments(setSegments);
  }, []);

  const grouped = useMemo(() => {
    return {
      active: segments.filter((segment) => segment.status === "active"),
      review: segments.filter((segment) => segment.status === "under_review"),
      deprecated: segments.filter((segment) => segment.status === "deprecated"),
    };
  }, [segments]);

  const selectedSegment = useMemo(
    () => segments.find((segment) => segment.id === selectedSegmentId) || null,
    [segments, selectedSegmentId],
  );

  const mapCenter = useMemo(() => {
    if (draftPoints.length) return draftPoints[draftPoints.length - 1];
    if (selectedSegment) return selectedSegment.start;
    return DEFAULT_MAP_CENTER;
  }, [draftPoints, selectedSegment]);

  const syncDraftToForm = (points: LatLngPoint[]) => {
    setDraftPoints(points);
    setForm((prev) => ({
      ...prev,
      startLat: points[0] ? String(points[0].lat.toFixed(6)) : "",
      startLng: points[0] ? String(points[0].lng.toFixed(6)) : "",
      endLat: points[1] ? String(points[1].lat.toFixed(6)) : "",
      endLng: points[1] ? String(points[1].lng.toFixed(6)) : "",
    }));
  };

  const focusPoints = (points: LatLngPoint[]) => {
    if (!mapInstance || !points.length || !window.google?.maps) return;
    if (points.length === 1) {
      mapInstance.panTo(points[0]);
      mapInstance.setZoom(16);
      return;
    }

    const bounds = new window.google.maps.LatLngBounds();
    points.forEach((point) => bounds.extend(point));
    mapInstance.fitBounds(bounds, 80);
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (!event.latLng) return;

    const point = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    const nextPoints =
      draftPoints.length >= 2 ? [point] : [...draftPoints, point];

    syncDraftToForm(nextPoints);
    setSelectedSegmentId(null);

    if (interactionMode === "eraser" && form.type !== "blocked_path") {
      setForm((prev) => ({ ...prev, type: "blocked_path" }));
    }
  };

  const clearDraft = () => {
    syncDraftToForm([]);
    setSelectedSegmentId(null);
  };

  const selectSegment = (segment: ManagedRouteSegment) => {
    setSelectedSegmentId(segment.id);
    setInteractionMode(segment.type === "blocked_path" ? "eraser" : "pencil");
    setSelectedVehicles(segment.allowedVehicleTypes);
    setForm({
      name: segment.name,
      type: segment.type,
      note: segment.note || "",
      startLat: String(segment.start.lat.toFixed(6)),
      startLng: String(segment.start.lng.toFixed(6)),
      endLat: String(segment.end.lat.toFixed(6)),
      endLng: String(segment.end.lng.toFixed(6)),
      temporary: !!segment.temporary,
      maxWeightKg:
        typeof segment.maxWeightKg === "number"
          ? String(segment.maxWeightKg)
          : "",
    });
    syncDraftToForm([segment.start, segment.end]);
    focusPoints([segment.start, segment.end]);
  };

  const handleVehicleToggle = (vehicle: NormalizedVehicleType) => {
    setSelectedVehicles((prev) =>
      prev.includes(vehicle)
        ? prev.filter((item) => item !== vehicle)
        : [...prev, vehicle],
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const startLat = Number(form.startLat || draftPoints[0]?.lat);
    const startLng = Number(form.startLng || draftPoints[0]?.lng);
    const endLat = Number(form.endLat || draftPoints[1]?.lat);
    const endLng = Number(form.endLng || draftPoints[1]?.lng);

    if (!form.name.trim()) {
      toast.error("Segment name is required");
      return;
    }

    if (
      !Number.isFinite(startLat) ||
      !Number.isFinite(startLng) ||
      !Number.isFinite(endLat) ||
      !Number.isFinite(endLng)
    ) {
      toast.error("Please provide valid start and end coordinates");
      return;
    }

    try {
      setSubmitting(true);
      await createManagedRouteSegment({
        name: form.name.trim(),
        type: form.type,
        note: form.note.trim(),
        start: { lat: startLat, lng: startLng },
        end: { lat: endLat, lng: endLng },
        allowedVehicleTypes: selectedVehicles,
        temporary: form.temporary,
        maxWeightKg: form.maxWeightKg ? Number(form.maxWeightKg) : null,
        createdByName: "Coordinator",
        source: "map_management",
      });
      toast.success("Managed route segment created");
      setForm(defaultForm);
      setSelectedVehicles([]);
      setDraftPoints([]);
      setSelectedSegmentId(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to save managed route segment");
    } finally {
      setSubmitting(false);
    }
  };

  const cycleStatus = async (
    segmentId: string,
    current: ManagedSegmentStatus,
  ) => {
    const next: ManagedSegmentStatus =
      current === "active"
        ? "deprecated"
        : current === "deprecated"
          ? "under_review"
          : "active";

    try {
      await updateManagedRouteSegmentStatus(segmentId, next);
      toast.success(`Segment moved to ${next.replace("_", " ")}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update segment status");
    }
  };

  return (
    <div className="space-y-5">
      <Toaster position="top-right" />

      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Map Management
          </h1>
          <p className="mt-1 text-sm text-blue-700">
            Create and maintain route rules with a focused map workflow.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
            <FaMapLocationDot /> {segments.length} managed segments
          </div>
          <Link
            to="/routes/optimization"
            className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
          >
            <FaRoute /> Back to Route Optimization
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-7">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm xl:col-span-2"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Add route rule
              </h2>
              <p className="text-sm text-gray-500">
                Use the map to sketch the segment first, then save the routing
                rule below.
              </p>
            </div>
            <FaPlus className="text-base text-blue-500" />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-2 rounded-lg bg-gray-50 p-1.5">
            <button
              type="button"
              onClick={() => {
                setInteractionMode("pencil");
                if (form.type === "blocked_path") {
                  setForm((prev) => ({ ...prev, type: "shortcut" }));
                }
              }}
              className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition ${
                interactionMode === "pencil"
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <FaRoute className="mr-2 inline" /> Pencil draw
            </button>
            <button
              type="button"
              onClick={() => {
                setInteractionMode("eraser");
                setForm((prev) => ({ ...prev, type: "blocked_path" }));
              }}
              className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition ${
                interactionMode === "eraser"
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              <FaBan className="mr-2 inline" /> Eraser block
            </button>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-dashed border-blue-200 bg-blue-50 p-3 text-sm text-blue-800">
              <p className="font-semibold">How it works</p>
              <p className="mt-1">
                Click one point for the start, a second point for the end, then
                save. Clicking again starts a fresh segment.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={clearDraft}
                  className="rounded-md border border-blue-200 bg-white px-2.5 py-1.5 text-xs font-medium text-blue-700 hover:bg-blue-100"
                >
                  Clear draft
                </button>
                {draftPoints.length > 0 && (
                  <button
                    type="button"
                    onClick={() => focusPoints(draftPoints)}
                    className="rounded-md border border-blue-200 bg-white px-2.5 py-1.5 text-xs font-medium text-blue-700 hover:bg-blue-100"
                  >
                    Focus draft on map
                  </button>
                )}
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Rule name
              </label>
              <input
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="e.g. Stadium back-road shortcut"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Rule type
              </label>
              <select
                value={form.type}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    type: e.target.value as ManagedSegmentType,
                  }))
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              >
                <option value="shortcut">Shortcut</option>
                <option value="blocked_path">Blocked path</option>
                <option value="restricted_path">Restricted path</option>
                <option value="preferred_corridor">Preferred corridor</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Start lat
                </label>
                <input
                  value={form.startLat}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, startLat: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="-29.3100"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Start lng
                </label>
                <input
                  value={form.startLng}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, startLng: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="27.4800"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  End lat
                </label>
                <input
                  value={form.endLat}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, endLat: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="-29.3050"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  End lng
                </label>
                <input
                  value={form.endLng}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, endLng: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="27.5000"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Notes
              </label>
              <textarea
                value={form.note}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, note: e.target.value }))
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                rows={3}
                placeholder="Why this path matters, when to avoid it, or which vehicle should use it"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Allowed vehicles
              </label>
              <div className="flex flex-wrap gap-2">
                {vehicleOptions.map((vehicle) => {
                  const selected = selectedVehicles.includes(vehicle);
                  return (
                    <button
                      key={vehicle}
                      type="button"
                      onClick={() => handleVehicleToggle(vehicle)}
                      className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${
                        selected
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {vehicle}
                    </button>
                  );
                })}
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Leave empty if the rule applies to all vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <label className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={form.temporary}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      temporary: e.target.checked,
                    }))
                  }
                />
                Temporary rule
              </label>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Max weight (kg)
                </label>
                <input
                  value={form.maxWeightKg}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      maxWeightKg: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Optional"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {submitting ? "Saving route rule…" : "Save route rule"}
            </button>
          </div>
        </form>

        <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm xl:col-span-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Visual route workspace
              </h2>
              <p className="text-sm text-gray-500">
                Click on the map to draw a segment, click a saved route to edit
                or inspect it, and present your routing intelligence visually.
              </p>
            </div>
            <FaRoad className="text-base text-blue-500" />
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
              Green = shortcuts / preferred roads
            </div>
            <div className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-medium text-red-700">
              Red = blocked roads
            </div>
            <div className="rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-medium text-violet-700">
              Violet = restrictions
            </div>
            <div className="rounded-full bg-cyan-50 px-2.5 py-1 text-[11px] font-medium text-cyan-700">
              Cyan = preferred corridors
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
            <GoogleMap
              center={mapCenter}
              zoom={12}
              onLoad={(map) => setMapInstance(map)}
              onClick={handleMapClick}
              mapContainerStyle={{ width: "100%", height: "430px" }}
              options={{
                streetViewControl: false,
                fullscreenControl: true,
                mapTypeControl: true,
              }}
            >
              {segments.map((segment) => {
                const style = getRouteNetworkSegmentStyle(segment);
                const selected = segment.id === selectedSegmentId;

                return (
                  <Polyline
                    key={segment.id}
                    path={[segment.start, segment.end]}
                    onClick={() => selectSegment(segment)}
                    options={{
                      strokeColor: style.strokeColor,
                      strokeOpacity: selected ? 1 : style.strokeOpacity,
                      strokeWeight: selected
                        ? style.strokeWeight + 2
                        : style.strokeWeight,
                      zIndex: selected
                        ? 50
                        : segment.status === "active"
                          ? 20
                          : 10,
                      icons: getPolylineIcons(
                        style.iconMode,
                        style.strokeColor,
                      ),
                    }}
                  />
                );
              })}

              {selectedSegment && (
                <>
                  <Marker
                    position={selectedSegment.start}
                    title={`${selectedSegment.name} start`}
                    label="A"
                  />
                  <Marker
                    position={selectedSegment.end}
                    title={`${selectedSegment.name} end`}
                    label="B"
                  />
                </>
              )}

              {draftPoints.map((point, index) => (
                <Marker
                  key={`${point.lat}-${point.lng}-${index}`}
                  position={point}
                  title={index === 0 ? "Draft start" : "Draft end"}
                  label={index === 0 ? "1" : "2"}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    fillColor:
                      interactionMode === "eraser" ? "#dc2626" : "#16a34a",
                    fillOpacity: 1,
                    strokeColor: "#ffffff",
                    strokeWeight: 2,
                  }}
                />
              ))}

              {draftPoints.length === 2 && (
                <Polyline
                  path={draftPoints}
                  options={{
                    strokeColor:
                      interactionMode === "eraser" ? "#dc2626" : "#16a34a",
                    strokeOpacity: 1,
                    strokeWeight: 6,
                    zIndex: 100,
                    icons: getPolylineIcons(
                      interactionMode === "eraser" ? "cross" : "arrow",
                      interactionMode === "eraser" ? "#dc2626" : "#16a34a",
                    ),
                  }}
                />
              )}
            </GoogleMap>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-800">
                Pencil workflow
              </p>
              <p className="mt-1 text-xs text-emerald-700">
                Draw shortcuts and preferred corridors directly on the map so
                dispatch can explain route choices live.
              </p>
            </div>
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-800">
                Eraser workflow
              </p>
              <p className="mt-1 text-xs text-red-700">
                Mark blocked roads visually so they look like removed segments
                during demos and live operations.
              </p>
            </div>
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                Clear working view
              </p>
              <p className="mt-1 text-xs text-blue-700">
                Saved segments remain visible and selectable for reliable route
                planning.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Managed network
            </h2>
            <p className="text-sm text-gray-500">
              Active, review, and deprecated local path rules with one-click
              focus back onto the map.
            </p>
          </div>
          <FaRoad className="text-base text-blue-500" />
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          {(
            [
              [
                "Active",
                grouped.active,
                "bg-green-50 border-green-100 text-green-700",
              ],
              [
                "Under review",
                grouped.review,
                "bg-amber-50 border-amber-100 text-amber-700",
              ],
              [
                "Deprecated",
                grouped.deprecated,
                "bg-red-50 border-red-100 text-red-700",
              ],
            ] as const
          ).map(([title, list, tone]) => (
            <div
              key={title}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4"
            >
              <div
                className={`mb-3 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium ${tone}`}
              >
                {title} • {list.length}
              </div>
              <div className="space-y-3">
                {list.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-gray-300 bg-white p-4 text-sm text-gray-500">
                    Nothing here yet.
                  </div>
                ) : (
                  list.map((segment) => (
                    <div
                      key={segment.id}
                      className={`rounded-lg border bg-white p-4 ${
                        segment.id === selectedSegmentId
                          ? "border-blue-400 ring-2 ring-blue-100"
                          : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            {segment.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatRouteNetworkSegmentType(segment.type)}
                            {segment.blocked ? " • blocked" : " • usable"}
                          </p>
                        </div>
                        <div className="text-lg text-gray-400">
                          {segment.type === "blocked_path" ? (
                            <FaBan />
                          ) : (
                            <FaRoute />
                          )}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {segment.note || "No note recorded."}
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        Coordinates: {segment.start.lat.toFixed(4)},{" "}
                        {segment.start.lng.toFixed(4)} →{" "}
                        {segment.end.lat.toFixed(4)},{" "}
                        {segment.end.lng.toFixed(4)}
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Vehicles:{" "}
                        {segment.allowedVehicleTypes.length
                          ? segment.allowedVehicleTypes.join(", ")
                          : "all"}
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Weight cap: {segment.maxWeightKg ?? "none"}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => selectSegment(segment)}
                          className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
                        >
                          <FaMapLocationDot /> Focus on map
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            cycleStatus(segment.id, segment.status)
                          }
                          className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                        >
                          <FaCircleCheck /> Cycle status
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <FaTruck className="text-xl text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-blue-800">
                Vehicle-aware routing
              </p>
              <p className="text-xs text-blue-700">
                Use allowed vehicles and max weight to prevent the wrong route
                from being chosen.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <FaRoute className="text-xl text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-emerald-800">
                Shortcut governance
              </p>
              <p className="text-xs text-emerald-700">
                Keep only trusted shortcuts active and deprecate outdated ones
                quickly.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-amber-100 bg-amber-50 p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <FaBan className="text-xl text-amber-600" />
            <div>
              <p className="text-sm font-semibold text-amber-800">
                Blocked-path control
              </p>
              <p className="text-xs text-amber-700">
                Temporary blocks and stale roads can be managed here before they
                poison optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
