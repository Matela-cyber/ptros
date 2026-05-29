import { useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import toast, { Toaster } from "react-hot-toast";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "@config";
import {
  formatRouteNetworkSegmentType,
  getRouteNetworkSegmentStyle,
  subscribeRouteNetworkSegments,
  type RouteNetworkSegment,
  type RouteNetworkSegmentType,
} from "@config";

const DEFAULT_MAP_CENTER = { lat: -29.31, lng: 27.48 };

type SegmentFormType = "shortcut" | "blocked_path" | "restricted_path";

const formatTypeLabel = (type: SegmentFormType) =>
  formatRouteNetworkSegmentType(type).replace(/\b\w/g, (c) => c.toUpperCase());

const toSegmentPath = (segment: RouteNetworkSegment) => [
  segment.start,
  segment.end,
];

const samePath = (
  a: RouteNetworkSegment,
  start: { lat: number; lng: number },
  end: { lat: number; lng: number },
) => {
  const direct =
    a.start.lat === start.lat &&
    a.start.lng === start.lng &&
    a.end.lat === end.lat &&
    a.end.lng === end.lng;
  const reverse =
    a.start.lat === end.lat &&
    a.start.lng === end.lng &&
    a.end.lat === start.lat &&
    a.end.lng === start.lng;
  return direct || reverse;
};

export default function MapManagement() {
  const [segments, setSegments] = useState<RouteNetworkSegment[]>([]);
  const [draftPoints, setDraftPoints] = useState<
    Array<{ lat: number; lng: number }>
  >([]);
  const [formType, setFormType] = useState<SegmentFormType>("shortcut");
  const [mapMode, setMapMode] = useState<"save" | "delete">("save");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [temporary, setTemporary] = useState(false);
  const [maxWeightKg, setMaxWeightKg] = useState<number | "">("");
  const [allowedVehicleTypes, setAllowedVehicleTypes] = useState("");
  const [selectedSegmentId, setSelectedSegmentId] = useState<string | null>(
    null,
  );
  const [selectedInfoSegment, setSelectedInfoSegment] =
    useState<RouteNetworkSegment | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    return subscribeRouteNetworkSegments(setSegments);
  }, []);

  const activeSegments = useMemo(
    () => segments.filter((segment) => segment.status === "active"),
    [segments],
  );

  const selectedSegment = useMemo(
    () =>
      selectedSegmentId
        ? (activeSegments.find((segment) => segment.id === selectedSegmentId) ??
          null)
        : null,
    [activeSegments, selectedSegmentId],
  );

  const resetDraft = () => {
    setDraftPoints([]);
    setName("");
    setNote("");
    setTemporary(false);
    setMaxWeightKg("");
    setAllowedVehicleTypes("");
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (!event.latLng) return;
    if (mapMode === "delete") return;

    const point = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    setDraftPoints((prev) => (prev.length >= 2 ? [point] : [...prev, point]));
    setSelectedInfoSegment(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) {
      toast.error("Please sign in again before saving route rules.");
      return;
    }

    if (draftPoints.length !== 2) {
      toast.error("Select exactly 2 points on the map.");
      return;
    }

    if (!name.trim()) {
      toast.error("Name is required.");
      return;
    }

    const [start, end] = draftPoints;

    const duplicate = activeSegments.some(
      (segment) => segment.type === formType && samePath(segment, start, end),
    );
    if (duplicate) {
      toast.error("This route segment already exists.");
      return;
    }

    const vehicleTypeList = allowedVehicleTypes
      .split(",")
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean);

    setSubmitting(true);
    try {
      await addDoc(collection(db, "routeNetworkSegments"), {
        name: name.trim(),
        type: formType as RouteNetworkSegmentType,
        status: "active",
        note: note.trim() || null,
        start,
        end,
        blocked: formType === "blocked_path",
        temporary,
        maxWeightKg: maxWeightKg === "" ? null : Number(maxWeightKg),
        allowedVehicleTypes: vehicleTypeList,
        source: "carrier_map_management",
        createdBy: user.uid,
        createdByName: user.displayName || user.email || "Carrier",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        usageCount: 0,
      });

      toast.success(`${formatTypeLabel(formType)} saved.`);
      resetDraft();
    } catch (error) {
      console.error("Failed to save route segment:", error);
      toast.error("Failed to save route rule.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedSegment) {
      toast.error("Select a route segment to delete.");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      toast.error("Please sign in again before deleting route rules.");
      return;
    }

    const ownerId = (selectedSegment as any)?.createdBy as string | undefined;
    if (ownerId && ownerId !== user.uid) {
      toast.error("You can only delete route rules you created.");
      return;
    }

    if (!window.confirm("Delete selected route rule? This cannot be undone.")) {
      return;
    }

    try {
      await deleteDoc(doc(db, "routeNetworkSegments", selectedSegment.id));
      toast.success("Route rule deleted.");
      setSelectedSegmentId(null);
      setSelectedInfoSegment(null);
    } catch (error) {
      console.error("Failed to delete route segment:", error);
      toast.error("Failed to delete route rule.");
    }
  };

  return (
    <div className="space-y-5">
      <Toaster position="top-right" />

      <h1 className="text-2xl font-semibold text-gray-900">Map Management</h1>

      <div className="flex gap-2">
        <button
          className={`rounded-md px-3 py-1.5 text-sm font-medium border ${
            mapMode === "save"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-blue-700 border-blue-200"
          }`}
          onClick={() => {
            setMapMode("save");
            setSelectedSegmentId(null);
          }}
        >
          Save Mode
        </button>
        <button
          className={`rounded-md px-3 py-1.5 text-sm font-medium border ${
            mapMode === "delete"
              ? "bg-red-600 text-white border-red-600"
              : "bg-white text-red-700 border-red-200"
          }`}
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
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm xl:col-span-2 space-y-3"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              Add route rule
            </h2>

            <div className="grid grid-cols-3 gap-2 rounded-lg bg-gray-50 p-1.5">
              {(
                [
                  "shortcut",
                  "blocked_path",
                  "restricted_path",
                ] as SegmentFormType[]
              ).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormType(type)}
                  className={`rounded-md px-2 py-1.5 text-xs font-medium transition ${
                    formType === type
                      ? type === "shortcut"
                        ? "bg-emerald-600 text-white"
                        : type === "blocked_path"
                          ? "bg-red-600 text-white"
                          : "bg-purple-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {type === "shortcut"
                    ? "Shortcut"
                    : type === "blocked_path"
                      ? "Blocked"
                      : "Restricted"}
                </button>
              ))}
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

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Notes
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="Why this route rule exists"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Allowed vehicle types (comma-separated)
              </label>
              <input
                value={allowedVehicleTypes}
                onChange={(e) => setAllowedVehicleTypes(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="bike, van, truck"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Max load (kg, optional)
              </label>
              <input
                type="number"
                min={0}
                value={maxWeightKg}
                onChange={(e) =>
                  setMaxWeightKg(e.target.value ? Number(e.target.value) : "")
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="e.g. 300"
              />
            </div>

            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={temporary}
                onChange={(e) => setTemporary(e.target.checked)}
              />
              Temporary rule
            </label>

            <div className="rounded-md bg-blue-50 border border-blue-100 px-3 py-2 text-xs text-blue-800">
              Click two points on the map to define this segment (
              {draftPoints.length}/2 selected).
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
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
            {activeSegments.map((segment) => {
              const style = getRouteNetworkSegmentStyle(segment);
              const isSelected = selectedSegmentId === segment.id;
              const path = toSegmentPath(segment);

              return (
                <Polyline
                  key={segment.id}
                  path={path}
                  options={{
                    strokeColor: style.strokeColor,
                    strokeWeight: isSelected
                      ? style.strokeWeight + 3
                      : style.strokeWeight,
                    strokeOpacity: isSelected ? 1 : style.strokeOpacity,
                    zIndex: isSelected ? 30 : 10,
                    clickable: true,
                  }}
                  onClick={() => {
                    setSelectedSegmentId(segment.id);
                    setSelectedInfoSegment(segment);
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

            {selectedInfoSegment && (
              <InfoWindow
                position={{
                  lat:
                    (selectedInfoSegment.start.lat +
                      selectedInfoSegment.end.lat) /
                    2,
                  lng:
                    (selectedInfoSegment.start.lng +
                      selectedInfoSegment.end.lng) /
                    2,
                }}
                onCloseClick={() => setSelectedInfoSegment(null)}
              >
                <div className="min-w-[220px] text-xs text-slate-700 space-y-1">
                  <p className="text-sm font-semibold text-slate-900">
                    {selectedInfoSegment.name || "Unnamed segment"}
                  </p>
                  <p>
                    <span className="font-semibold">Type:</span>{" "}
                    {formatRouteNetworkSegmentType(selectedInfoSegment.type)}
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    {selectedInfoSegment.status}
                  </p>
                  <p>
                    <span className="font-semibold">Temporary:</span>{" "}
                    {selectedInfoSegment.temporary ? "Yes" : "No"}
                  </p>
                  {typeof selectedInfoSegment.maxWeightKg === "number" && (
                    <p>
                      <span className="font-semibold">Max load:</span>{" "}
                      {selectedInfoSegment.maxWeightKg} kg
                    </p>
                  )}
                  {!!selectedInfoSegment.allowedVehicleTypes?.length && (
                    <p>
                      <span className="font-semibold">Vehicles:</span>{" "}
                      {selectedInfoSegment.allowedVehicleTypes.join(", ")}
                    </p>
                  )}
                  {selectedInfoSegment.note && (
                    <p>
                      <span className="font-semibold">Note:</span>{" "}
                      {selectedInfoSegment.note}
                    </p>
                  )}
                  {selectedInfoSegment.createdByName && (
                    <p>
                      <span className="font-semibold">By:</span>{" "}
                      {selectedInfoSegment.createdByName}
                    </p>
                  )}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>

          {mapMode === "save" && (
            <button
              onClick={resetDraft}
              className="mt-4 rounded-md border border-blue-200 bg-white px-2.5 py-1.5 text-xs font-medium text-blue-700 hover:bg-blue-100"
            >
              Clear draft
            </button>
          )}

          {mapMode === "delete" && (
            <div className="mt-4 flex flex-col items-center">
              {selectedSegment ? (
                <>
                  <div className="mb-2 text-sm text-gray-700">
                    Selected:{" "}
                    <span className="font-semibold">
                      {selectedSegment.name}
                    </span>
                  </div>
                  <button
                    onClick={handleDelete}
                    className="rounded-md bg-red-600 px-4 py-2 text-white font-semibold hover:bg-red-700"
                  >
                    Delete Selected Route Rule
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSegmentId(null);
                      setSelectedInfoSegment(null);
                    }}
                    className="mt-2 text-xs text-gray-500 underline"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <div className="text-xs text-gray-400">
                  Click a route line on the map to select it for deletion.
                </div>
              )}
            </div>
          )}

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
            <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-800">
              Green lines: shortcuts (click for details)
            </div>
            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-red-800">
              Red/amber lines: blocked paths
            </div>
            <div className="rounded-md border border-purple-200 bg-purple-50 px-3 py-2 text-purple-800">
              Purple lines: restricted paths
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
