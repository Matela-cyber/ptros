interface OverloadChoiceDialogProps {
  capacityKg: number;
  packageWeight: number;
  optimizedPeakKg: number;
  optimizedDistanceKm: number;
  saferPeakKg: number;
  saferDistanceKm: number;
  choosing: boolean;
  onChoose: (choice: "optimized" | "safer") => void;
  onCancel: () => void;
}

export default function OverloadChoiceDialog({
  capacityKg,
  packageWeight,
  optimizedPeakKg,
  optimizedDistanceKm,
  saferPeakKg,
  saferDistanceKm,
  choosing,
  onChoose,
  onCancel,
}: OverloadChoiceDialogProps) {
  const overloadKg = (optimizedPeakKg - capacityKg).toFixed(1);
  const extraKm = (saferDistanceKm - optimizedDistanceKm).toFixed(1);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center p-4 z-[60]">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-amber-50 border-b border-amber-200 px-5 py-4 flex items-start gap-3">
          <div className="text-amber-500 text-2xl mt-0.5 flex-shrink-0">
            <i className="fa-solid fa-weight-hanging" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">
              Capacity Warning
            </h3>
            <p className="text-sm text-gray-600 mt-0.5">
              Adding this{" "}
              <span className="font-semibold">{packageWeight} kg</span> package
              would put you{" "}
              <span className="font-semibold text-amber-700">
                {overloadKg} kg over
              </span>{" "}
              your {capacityKg} kg vehicle limit. Choose how to proceed.
            </p>
          </div>
        </div>

        {/* Route options */}
        <div className="p-4 space-y-3">
          {/* Option A: Optimised (overload) */}
          <button
            onClick={() => onChoose("optimized")}
            disabled={choosing}
            className="w-full text-left border-2 border-gray-200 hover:border-orange-400 hover:bg-orange-50 rounded-xl p-4 transition group disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-semibold text-sm text-gray-800 group-hover:text-orange-700">
                Optimal route
              </span>
              <span className="text-xs bg-orange-100 text-orange-700 font-semibold px-2 py-0.5 rounded-full">
                Over capacity
              </span>
            </div>
            <div className="text-xs text-gray-500 space-y-0.5">
              <div>
                Peak load:{" "}
                <span className="font-medium text-orange-600">
                  {optimizedPeakKg.toFixed(1)} kg
                </span>{" "}
                / {capacityKg} kg
              </div>
              <div>
                Est. distance:{" "}
                <span className="font-medium">
                  {optimizedDistanceKm.toFixed(1)} km
                </span>
                {"  "}—{"  "}fastest ordering of stops
              </div>
            </div>
          </button>

          {/* Option B: Safer (capacity-constrained) */}
          <button
            onClick={() => onChoose("safer")}
            disabled={choosing}
            className="w-full text-left border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 rounded-xl p-4 transition group disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-semibold text-sm text-gray-800 group-hover:text-green-700">
                Safer route
              </span>
              <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                Recommended
              </span>
            </div>
            <div className="text-xs text-gray-500 space-y-0.5">
              <div>
                Peak load:{" "}
                <span className="font-medium text-green-600">
                  {saferPeakKg.toFixed(1)} kg
                </span>{" "}
                / {capacityKg} kg
              </div>
              <div>
                Est. distance:{" "}
                <span className="font-medium">
                  {saferDistanceKm.toFixed(1)} km
                </span>
                {parseFloat(extraKm) > 0.1 && (
                  <span className="text-gray-400"> (+{extraKm} km)</span>
                )}
              </div>
              <div className="text-gray-400 italic mt-0.5">
                Completes some current deliveries before picking up the new
                package
              </div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="px-4 pb-4 flex items-center gap-3">
          <button
            onClick={onCancel}
            disabled={choosing}
            className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition disabled:opacity-60"
          >
            Cancel
          </button>
          {choosing && (
            <div className="flex items-center gap-2 text-sm text-gray-500 pr-2">
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
              Accepting…
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
