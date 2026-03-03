// apps/customer/src/components/MapLegend.tsx
import { FC } from "react";

export interface LegendItem {
  color: string;
  label: string;
  opacity?: number;
  description?: string;
}

interface MapLegendProps {
  items: LegendItem[];
  title?: string;
  className?: string;
}

export const MapLegend: FC<MapLegendProps> = ({
  items,
  title = "Map Legend",
  className = "",
}) => {
  return (
    <div
      className={`absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 z-10 max-w-xs ${className}`}
      style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}
    >
      <h3 className="text-sm font-bold text-gray-800 mb-3 border-b pb-2">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className="w-8 h-3 rounded mt-0.5 flex-shrink-0 border border-gray-300"
              style={{
                backgroundColor: item.color,
                opacity: item.opacity || 1,
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-gray-700">
                {item.label}
              </div>
              {item.description && (
                <div className="text-xs text-gray-500 mt-0.5">
                  {item.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapLegend;
