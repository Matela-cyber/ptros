const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../apps/carrier/src/RouteTab.tsx");
let content = fs.readFileSync(filePath, "utf8"); // Normalise to LF for matching, we'll restore CRLF at the end
const hasCRLF = content.includes("\r\n");
if (hasCRLF) content = content.replace(/\r\n/g, "\n");
// ── 1. Add showVisited state after archivingRef ────────────────────────────
content = content.replace(
  "  const archivingRef = useRef<Set<string>>(new Set());",
  "  const archivingRef = useRef<Set<string>>(new Set());\n  const [showVisited, setShowVisited] = useState(false);",
);

// ── 2. In runOptimize: archive currently-unarchived visited stops FIRST ────
const archiveInOptimizeOld = `      // Only optimize deliveries that aren't fully delivered
      const activeDels = deliveries.filter((d) => d.status !== "delivered");`;
const archiveInOptimizeNew = `      // Archive any stops still in routeStops that should already be visited
      {
        const pickupDoneNow = new Set(["picked_up", "in_transit", "out_for_delivery", "delivered"]);
        const alreadyArchivedNow = new Set(visitedStops.map((s) => \`\${s.id}_\${s.type}\`));
        for (const stop of stops) {
          const key = \`\${stop.id}_\${stop.type}\`;
          if (alreadyArchivedNow.has(key) || archivingRef.current.has(key)) continue;
          const del = deliveries.find((d) => d.id === stop.id);
          if (!del) continue;
          const shouldArchive =
            (stop.type === "pickup" && pickupDoneNow.has(del.status)) ||
            (stop.type === "dropoff" && del.status === "delivered");
          if (!shouldArchive) continue;
          archivingRef.current.add(key);
          let enrichedStop = { ...stop, visited: true };
          if (enrichedStop.lat === 0 && enrichedStop.lng === 0) {
            const loc = stop.type === "pickup"
              ? (del.pickupLocation ?? del.currentLocation)
              : del.deliveryLocation;
            if (loc && (loc.lat !== 0 || loc.lng !== 0)) {
              enrichedStop = { ...enrichedStop, lat: loc.lat, lng: loc.lng };
            }
          }
          CarrierService.archiveVisitedStop(enrichedStop).catch(() => {
            archivingRef.current.delete(key);
          });
        }
      }

      // Only optimize deliveries that aren't fully delivered
      const activeDels = deliveries.filter((d) => d.status !== "delivered");`;

if (!content.includes(archiveInOptimizeOld)) {
  console.error("MISSING: archive-in-optimize anchor");
  process.exit(1);
}
content = content.replace(archiveInOptimizeOld, archiveInOptimizeNew);

// ── 3. Change orderedStops useMemo to active-only ─────────────────────────
const orderedStopsOld = `  // Display: visited history (grayed, in visit order) + active unvisited route
  const orderedStops = useMemo(
    () => [
      ...visitedStops.map((s) => ({ ...s, visited: true })),
      ...enrichedActiveStops,
    ],
    [visitedStops, enrichedActiveStops],
  );`;
const orderedStopsNew = `  // Active-only display list — visited stops are shown in a separate section
  const orderedStops = useMemo(() => enrichedActiveStops, [enrichedActiveStops]);`;

if (!content.includes(orderedStopsOld)) {
  console.error("MISSING: orderedStops useMemo anchor");
  process.exit(1);
}
content = content.replace(orderedStopsOld, orderedStopsNew);

// ── 4. Fix empty state check ───────────────────────────────────────────────
content = content.replace(
  "  if (orderedStops.length === 0) {",
  "  if (enrichedActiveStops.length === 0 && visitedStops.length === 0) {",
);

// ── 5. Header: show active count only ─────────────────────────────────────
content = content.replace(
  '          {orderedStops.length} stops -{" "}',
  '          {enrichedActiveStops.length} active stop{enrichedActiveStops.length === 1 ? "" : "s"} •{" "}',
);

// ── 6. Add visited history section after the list view ────────────────────
const afterListOld = `      {/* Delivery detail modal */}
      {selectedStop && (`;
const afterListNew = `      {/* Visited stops — collapsible history section */}
      {visitedStops.length > 0 && view === "list" && (
        <div className="mt-2">
          <button
            className="w-full flex items-center justify-between py-2 px-3 rounded-lg bg-gray-50 border border-gray-200 text-sm font-medium text-gray-500 hover:bg-gray-100 transition"
            onClick={() => setShowVisited((v) => !v)}
          >
            <span>Visited ({visitedStops.length})</span>
            <span className="text-xs">{showVisited ? "Hide" : "Show"}</span>
          </button>
          {showVisited && (
            <ol className="space-y-2 mt-2">
              {visitedStops.map((stop) => {
                const isPickup = stop.type === "pickup";
                return (
                  <li
                    key={\`visited_\${stop.id}_\${stop.type}\`}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-3 opacity-60"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-7 h-7 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">
                        ✓
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                            {isPickup ? "Pickup" : "Dropoff"}
                          </span>
                          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                            Done
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-gray-600 mt-0.5 truncate">
                          {stop.address || "(no address)"}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      )}

      {/* Delivery detail modal */}
      {selectedStop && (`;

if (!content.includes(afterListOld)) {
  console.error("MISSING: after-list anchor");
  process.exit(1);
}
content = content.replace(afterListOld, afterListNew);

// ── 7. Fix modal: backdrop padding + container overflow + content min-h-0 ──
// Backdrop: tighter padding on mobile
content = content.replace(
  '      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4"',
  '      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 px-3 py-2 sm:p-4"',
);
// Container: add overflow-hidden so max-h is enforced
content = content.replace(
  '        className="bg-white rounded-2xl w-full max-w-md shadow-2xl flex flex-col max-h-[90dvh]"',
  '        className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md shadow-2xl flex flex-col max-h-[92dvh] overflow-hidden"',
);
// Content area: add min-h-0 so flex-1 + overflow-y-auto actually works in flex column
content = content.replace(
  '        <div className="p-5 space-y-2.5 text-sm overflow-y-auto flex-1">',
  '        <div className="p-4 space-y-2 text-sm overflow-y-auto flex-1 min-h-0">',
);
// Footer: slightly more compact
content = content.replace(
  '        <div className="px-5 pb-5 flex gap-2 border-t pt-4">',
  '        <div className="px-4 pb-4 pt-3 flex gap-2 border-t">',
);

// Restore CRLF if file originally had it
if (hasCRLF) content = content.replace(/\n/g, "\r\n");
fs.writeFileSync(filePath, content, "utf8");
console.log("All changes applied successfully.");
