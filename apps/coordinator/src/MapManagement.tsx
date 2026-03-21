import { useEffect, useMemo, useState } from "react";
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

export default function MapManagement() {
  const [segments, setSegments] = useState<ManagedRouteSegment[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [selectedVehicles, setSelectedVehicles] = useState<
    NormalizedVehicleType[]
  >([]);
  const [form, setForm] = useState(defaultForm);

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

  const handleVehicleToggle = (vehicle: NormalizedVehicleType) => {
    setSelectedVehicles((prev) =>
      prev.includes(vehicle)
        ? prev.filter((item) => item !== vehicle)
        : [...prev, vehicle],
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const startLat = Number(form.startLat);
    const startLng = Number(form.startLng);
    const endLat = Number(form.endLat);
    const endLng = Number(form.endLng);

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
    <div className="space-y-6">
      <Toaster position="top-right" />

      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Map Management</h1>
          <p className="mt-2 text-gray-600">
            Add custom shortcuts, block bad roads, and enforce vehicle-aware
            routing rules.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          <FaMapLocationDot /> {segments.length} managed segments
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-2"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Add route rule
              </h2>
              <p className="text-sm text-gray-500">
                Save local road intelligence that Google Maps misses.
              </p>
            </div>
            <FaPlus className="text-xl text-blue-500" />
          </div>

          <div className="space-y-4">
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
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
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
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {submitting ? "Saving route rule…" : "Save route rule"}
            </button>
          </div>
        </form>

        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Managed network
              </h2>
              <p className="text-sm text-gray-500">
                Active, review, and deprecated local path rules.
              </p>
            </div>
            <FaRoad className="text-xl text-blue-500" />
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
                className="rounded-xl border border-gray-200 bg-gray-50 p-4"
              >
                <div
                  className={`mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${tone}`}
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
                        className="rounded-lg border border-gray-200 bg-white p-4"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-semibold text-gray-800">
                              {segment.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {segment.type.replace(/_/g, " ")}
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
                          Vehicles:{" "}
                          {segment.allowedVehicleTypes.length
                            ? segment.allowedVehicleTypes.join(", ")
                            : "all"}
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          Weight cap: {segment.maxWeightKg ?? "none"}
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            cycleStatus(segment.id, segment.status)
                          }
                          className="mt-3 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                        >
                          <FaCircleCheck /> Cycle status
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <FaTruck className="text-2xl text-blue-600" />
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
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <FaRoute className="text-2xl text-emerald-600" />
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
        <div className="rounded-xl border border-amber-100 bg-amber-50 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <FaBan className="text-2xl text-amber-600" />
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
