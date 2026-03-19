// apps/coordinator/src/components/MapLegend.tsx
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
      className={`bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 p-3 ${className}`}
    >
      <h3 className="text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">
        {title}
      </h3>
      <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-2 min-w-[180px] flex-1"
          >
            <div
              className="w-6 h-2.5 rounded mt-1 flex-shrink-0 border border-gray-300"
              style={{
                backgroundColor: item.color,
                opacity: item.opacity || 1,
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-gray-800 leading-tight">
                {item.label}
              </div>
              {item.description && (
                <div className="text-[11px] text-gray-500 leading-tight">
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
