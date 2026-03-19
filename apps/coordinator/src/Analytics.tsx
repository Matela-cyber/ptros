// apps/coordinator/src/Analytics.tsx
export default function Analytics() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Analytics & Reports
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Performance insights are organized below with stable card sizing and
          responsive spacing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: "Delivery Success Rate", value: "98.4%" },
          { label: "Avg Delivery Time", value: "31 min" },
          { label: "Active Carriers", value: "24" },
          { label: "Customer Satisfaction", value: "4.8 / 5" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm"
          >
            <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
              {item.label}
            </p>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2 rounded-xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm min-h-[260px]">
          <h2 className="text-lg font-semibold text-gray-800">Trends</h2>
          <p className="text-sm text-gray-500 mt-1">
            Trend visualizations will render here.
          </p>
          <div className="mt-4 h-44 rounded-lg bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-sm text-gray-500">
            Chart area
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm min-h-[260px]">
          <h2 className="text-lg font-semibold text-gray-800">Top Alerts</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="rounded-lg bg-gray-50 p-3">
              • Peak traffic in Maseru CBD
            </li>
            <li className="rounded-lg bg-gray-50 p-3">
              • 2 deliveries nearing SLA threshold
            </li>
            <li className="rounded-lg bg-gray-50 p-3">
              • Route optimization opportunity detected
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
