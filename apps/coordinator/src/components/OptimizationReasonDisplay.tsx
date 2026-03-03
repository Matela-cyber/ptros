// apps/coordinator/src/components/OptimizationReasonDisplay.tsx
import { FC } from "react";

export interface OptimizationReason {
  type: "carrier_assignment" | "route_optimization" | "reassignment";
  reason: string;
  timestamp: any;
  details?: {
    distanceKm?: number;
    estimatedDetourKm?: number;
    carrierStatus?: string;
    activeDeliveries?: number;
    score?: number;
    factors?: string[];
  };
  carrierId?: string;
  carrierName?: string;
}

interface OptimizationReasonDisplayProps {
  reasons: OptimizationReason[];
  className?: string;
}

export const OptimizationReasonDisplay: FC<OptimizationReasonDisplayProps> = ({
  reasons,
  className = "",
}) => {
  if (!reasons || reasons.length === 0) {
    return null;
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "carrier_assignment":
        return "👤";
      case "route_optimization":
        return "🗺️";
      case "reassignment":
        return "🔄";
      default:
        return "ℹ️";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "carrier_assignment":
        return "bg-blue-50 border-blue-200 text-blue-800";
      case "route_optimization":
        return "bg-green-50 border-green-200 text-green-800";
      case "reassignment":
        return "bg-amber-50 border-amber-200 text-amber-800";
      default:
        return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
        <span>🎯</span>
        Optimization History
      </h3>

      <div className="space-y-2">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg border ${getTypeColor(reason.type)}`}
          >
            <div className="flex items-start gap-2">
              <span className="text-lg">{getTypeIcon(reason.type)}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold capitalize mb-1">
                  {reason.type.replace(/_/g, " ")}
                </div>
                <div className="text-xs mb-2">{reason.reason}</div>

                {reason.details && (
                  <div className="text-xs space-y-1 mt-2 pt-2 border-t border-current opacity-60">
                    {reason.details.distanceKm !== undefined && (
                      <div>
                        📍 Distance: {reason.details.distanceKm.toFixed(1)} km
                      </div>
                    )}
                    {reason.details.estimatedDetourKm !== undefined &&
                      reason.details.estimatedDetourKm > 0 && (
                        <div>
                          🔀 Detour:{" "}
                          {reason.details.estimatedDetourKm.toFixed(1)} km
                        </div>
                      )}
                    {reason.details.carrierStatus && (
                      <div>📊 Status: {reason.details.carrierStatus}</div>
                    )}
                    {reason.details.activeDeliveries !== undefined && (
                      <div>
                        📦 Active: {reason.details.activeDeliveries} deliveries
                      </div>
                    )}
                    {reason.details.factors &&
                      reason.details.factors.length > 0 && (
                        <div className="mt-1">
                          <div className="font-semibold">Factors:</div>
                          <ul className="list-disc list-inside ml-2 space-y-0.5">
                            {reason.details.factors.map((factor, i) => (
                              <li key={i}>{factor}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                )}

                {reason.timestamp && (
                  <div className="text-xs opacity-50 mt-2">
                    {new Date(
                      reason.timestamp?.toDate?.() || reason.timestamp,
                    ).toLocaleString()}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptimizationReasonDisplay;
