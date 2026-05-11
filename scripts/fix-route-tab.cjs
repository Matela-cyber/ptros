const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../apps/carrier/src/RouteTab.tsx");
let content = fs.readFileSync(filePath, "utf8");

// ── 1. Replace handleReoptimize + old orderedStops useMemo + old persist effect ──
// Find start marker
const START_MARKER = "  const handleReoptimize = () => {";
const END_MARKER = "  }, [orderedStops, stops, deliveries]);";

const startIdx = content.indexOf(START_MARKER);
const endIdx = content.indexOf(END_MARKER);

if (startIdx === -1) {
  console.error("START not found");
  process.exit(1);
}
if (endIdx === -1) {
  console.error("END not found");
  process.exit(1);
}

const endOfBlock = endIdx + END_MARKER.length;

const newBlock = `  const handleReoptimize = () => {
    runOptimize(carrierPos ?? undefined);
    toast.success("Re-optimizing...");
  };

  // ── Archive stops to visitedRouteStops when delivery status changes ────────
  // Visited stops leave routeStops entirely — separate collection for analytics
  useEffect(() => {
    if (!deliveries.length || !stops.length) return;
    const pickupDoneStatuses = new Set(["picked_up", "in_transit", "out_for_delivery", "delivered"]);
    const alreadyArchived = new Set(visitedStops.map((s) => \`\${s.id}_\${s.type}\`));
    for (const stop of stops) {
      const key = \`\${stop.id}_\${stop.type}\`;
      if (alreadyArchived.has(key) || archivingRef.current.has(key)) continue;
      const del = deliveries.find((d) => d.id === stop.id);
      if (!del) continue;
      const shouldArchive =
        (stop.type === "pickup" && pickupDoneStatuses.has(del.status)) ||
        (stop.type === "dropoff" && del.status === "delivered");
      if (!shouldArchive) continue;
      archivingRef.current.add(key);
      let enriched = { ...stop, visited: true };
      if (enriched.lat === 0 && enriched.lng === 0) {
        const loc = stop.type === "pickup"
          ? (del.pickupLocation ?? del.currentLocation)
          : del.deliveryLocation;
        if (loc && (loc.lat !== 0 || loc.lng !== 0)) {
          enriched = { ...enriched, lat: loc.lat, lng: loc.lng };
        }
      }
      CarrierService.archiveVisitedStop(enriched).catch((e) => {
        console.warn("Archive failed:", e);
        archivingRef.current.delete(key);
      });
    }
  }, [deliveries, stops]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Enrich active stops with coordinates (display only) ───────────────────
  const enrichedActiveStops = useMemo(() => {
    return getOrderedStops(stops).map((stop) => {
      if (stop.lat !== 0 || stop.lng !== 0) return stop;
      const del = deliveries.find((d) => d.id === stop.id);
      if (del) {
        const loc =
          stop.type === "pickup"
            ? (del.pickupLocation ?? del.currentLocation)
            : del.deliveryLocation;
        if (loc && (loc.lat !== 0 || loc.lng !== 0))
          return { ...stop, lat: loc.lat, lng: loc.lng };
      }
      if (stop.address) {
        const addrLower = stop.address.toLowerCase().trim();
        const known = Object.values(knownLocs).find(
          (k) => k.name?.toLowerCase().trim() === addrLower,
        );
        if (known) return { ...stop, lat: known.lat, lng: known.lng };
      }
      return stop;
    });
  }, [stops, deliveries, knownLocs]);

  // Display: visited history (grayed, in visit order) + active unvisited route
  const orderedStops = useMemo(
    () => [
      ...visitedStops.map((s) => ({ ...s, visited: true })),
      ...enrichedActiveStops,
    ],
    [visitedStops, enrichedActiveStops],
  );`;

content = content.slice(0, startIdx) + newBlock + content.slice(endOfBlock);

fs.writeFileSync(filePath, content, "utf8");
console.log("Done. Replaced blocks from index", startIdx, "to", endOfBlock);
