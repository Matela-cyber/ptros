import { Delivery } from "./types";

// Carrier app: Multi-stop route optimization and linked list utilities

export interface RouteStop {
  id: string; // deliveryId
  lat: number;
  lng: number;
  type: "pickup" | "dropoff";
  address?: string;
  prevId?: string | null;
  nextId?: string | null;
  visited?: boolean;
  visitOrder?: number; // timestamp (ms) when this stop was archived as visited
  loadKg?: number; // this stop's package weight
  cumulativeLoad?: number; // running carrier load after this stop
}

export interface CarrierPosition {
  lat: number;
  lng: number;
}

function haversineCoords(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const R = 6371e3;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const aVal =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(aVal), Math.sqrt(1 - aVal));
  return R * c;
}

/**
 * Bundle-aware greedy route optimizer.
 *
 * - Starts from carrier's current GPS position (if provided).
 * - Never drops off before picking up.
 * - At each step chooses the nearest legal candidate stop.
 * - Deduplicates stops to prevent repeated entries.
 */
export function bundleFitRoute(
  stops: RouteStop[],
  carrierPosition?: CarrierPosition,
): RouteStop[] {
  if (stops.length === 0) return [];

  // Deduplicate by id+type
  const seenKeys = new Set<string>();
  const uniqueStops: RouteStop[] = [];
  for (const s of stops) {
    const key = `${s.id}_${s.type}`;
    if (!seenKeys.has(key)) {
      seenKeys.add(key);
      uniqueStops.push(s);
    }
  }

  const visited: RouteStop[] = [];
  const unvisited = [...uniqueStops];
  const pickedUpIds = new Set<string>();

  // Determine starting position
  let currentPos: { lat: number; lng: number };
  if (
    carrierPosition &&
    (carrierPosition.lat !== 0 || carrierPosition.lng !== 0)
  ) {
    currentPos = { lat: carrierPosition.lat, lng: carrierPosition.lng };
  } else {
    const firstPickup = unvisited.find((s) => s.type === "pickup");
    currentPos = firstPickup
      ? { lat: firstPickup.lat, lng: firstPickup.lng }
      : { lat: unvisited[0].lat, lng: unvisited[0].lng };
  }

  while (unvisited.length) {
    const candidates = unvisited.filter(
      (s) =>
        s.type === "pickup" || (s.type === "dropoff" && pickedUpIds.has(s.id)),
    );
    const pool = candidates.length > 0 ? candidates : unvisited;

    let bestIdx = 0;
    let bestDist = haversineCoords(currentPos, pool[0]);
    for (let i = 1; i < pool.length; i++) {
      const dist = haversineCoords(currentPos, pool[i]);
      if (dist < bestDist) {
        bestIdx = i;
        bestDist = dist;
      }
    }

    const next = pool[bestIdx];
    const idx = unvisited.findIndex((s) => s === next);
    if (idx !== -1) unvisited.splice(idx, 1);

    visited.push(next);
    if (next.type === "pickup") pickedUpIds.add(next.id);
    currentPos = { lat: next.lat, lng: next.lng };
  }

  return visited;
}

export function toDoublyLinkedList(stops: RouteStop[]): RouteStop[] {
  return stops.map((stop, i) => {
    const prev = i > 0 ? `${stops[i - 1].id}_${stops[i - 1].type}` : null;
    const next =
      i < stops.length - 1 ? `${stops[i + 1].id}_${stops[i + 1].type}` : null;
    const myKey = `${stop.id}_${stop.type}`;
    return {
      ...stop,
      prevId: prev === myKey ? null : prev,
      nextId: next === myKey ? null : next,
    };
  });
}

export function markStopVisited(
  stops: RouteStop[],
  stopId: string,
  type: "pickup" | "dropoff",
): RouteStop[] {
  return stops.map((stop) =>
    stop.id === stopId && stop.type === type
      ? { ...stop, visited: true }
      : stop,
  );
}

/**
 * Reconstruct ordered stops from a doubly linked list stored in Firestore.
 */
export function getOrderedStops(stops: RouteStop[]): RouteStop[] {
  if (!stops.length) return [];
  const byKey: Record<string, RouteStop> = {};
  stops.forEach((s) => {
    byKey[`${s.id}_${s.type}`] = s;
  });
  // Find head: no prevId, or prevId not in map
  let start = stops.find((s) => !s.prevId || !byKey[s.prevId]);
  if (!start) start = stops[0];
  const ordered: RouteStop[] = [];
  const seen = new Set<string>();
  let curr: RouteStop | undefined = start;
  while (curr && !seen.has(`${curr.id}_${curr.type}`)) {
    ordered.push(curr);
    seen.add(`${curr.id}_${curr.type}`);
    curr = curr.nextId ? byKey[curr.nextId] : undefined;
  }
  return ordered;
}

export function buildStopsFromDeliveries(
  deliveries: Delivery[],
  knownLocations?: Record<string, { lat: number; lng: number; name: string }>,
): RouteStop[] {
  return deliveries.flatMap((delivery) => {
    // Prefer stored geocoded coordinates, then knownLocations name-match, then currentLocation
    const pickupLoc = delivery.pickupLocation
      ? delivery.pickupLocation
      : knownLocations
        ? Object.values(knownLocations).find(
            (loc) =>
              loc.name?.toLowerCase().trim() ===
              delivery.pickupAddress?.toLowerCase().trim(),
          )
        : undefined;
    const dropoffLoc = delivery.deliveryLocation
      ? delivery.deliveryLocation
      : knownLocations
        ? Object.values(knownLocations).find(
            (loc) =>
              loc.name?.toLowerCase().trim() ===
              delivery.deliveryAddress?.toLowerCase().trim(),
          )
        : undefined;
    // currentLocation is always the pickup point — only use it as pickup fallback
    const pickupLat = pickupLoc?.lat ?? delivery.currentLocation?.lat ?? 0;
    const pickupLng = pickupLoc?.lng ?? delivery.currentLocation?.lng ?? 0;
    const dropoffLat = dropoffLoc?.lat ?? 0;
    const dropoffLng = dropoffLoc?.lng ?? 0;
    return [
      {
        id: delivery.id,
        type: "pickup" as const,
        address: delivery.pickupAddress,
        lat: pickupLat,
        lng: pickupLng,
        visited: false,
        prevId: null,
        nextId: null,
      },
      {
        id: delivery.id,
        type: "dropoff" as const,
        address: delivery.deliveryAddress,
        lat: dropoffLat,
        lng: dropoffLng,
        visited: false,
        prevId: null,
        nextId: null,
      },
    ];
  });
}

// Legacy alias
export { haversineCoords as haversine };
export function nearestNeighbor(stops: RouteStop[]): RouteStop[] {
  return bundleFitRoute(stops);
}

// ── Re-optimization utilities ─────────────────────────────────────────────

/** Sum of straight-line distances between consecutive stops (km). */
export function estimateRouteDistanceKm(stops: RouteStop[]): number {
  let total = 0;
  for (let i = 1; i < stops.length; i++) {
    total += haversineCoords(stops[i - 1], stops[i]) / 1000;
  }
  return total;
}

/**
 * Assign `cumulativeLoad` to every stop in an already-ordered sequence.
 * `loadKg` must be set on each stop beforehand (pickup adds, dropoff subtracts).
 */
export function annotateWithCumulativeLoad(
  orderedStops: RouteStop[],
): RouteStop[] {
  let running = 0;
  return orderedStops.map((stop) => {
    const w = stop.loadKg ?? 0;
    if (stop.type === "pickup") running += w;
    else running = Math.max(0, running - w);
    return { ...stop, cumulativeLoad: Math.max(0, running) };
  });
}

/** Highest cumulativeLoad value across all stops. Requires annotateWithCumulativeLoad first. */
export function computePeakLoad(orderedStops: RouteStop[]): number {
  return orderedStops.reduce(
    (max, s) => Math.max(max, s.cumulativeLoad ?? 0),
    0,
  );
}

/**
 * Capacity-respecting greedy route.
 *
 * At each step:
 *  - When running load ≥ 90 % of capacity, prefers available dropoffs.
 *  - Defers pickups that would push load over capacity until enough dropoffs done.
 *  - Falls back to `bundleFitRoute` if capacityKg is falsy.
 */
export function capacityConstrainedRoute(
  stops: RouteStop[],
  carrierPosition?: CarrierPosition,
  capacityKg?: number,
): RouteStop[] {
  if (!capacityKg || capacityKg <= 0)
    return bundleFitRoute(stops, carrierPosition);
  if (stops.length === 0) return [];

  const seenKeys = new Set<string>();
  const unique: RouteStop[] = [];
  for (const s of stops) {
    const key = `${s.id}_${s.type}`;
    if (!seenKeys.has(key)) {
      seenKeys.add(key);
      unique.push(s);
    }
  }

  const result: RouteStop[] = [];
  const remaining = [...unique];
  const pickedUpIds = new Set<string>();
  let runningLoad = 0;

  let currentPos: { lat: number; lng: number };
  if (
    carrierPosition &&
    (carrierPosition.lat !== 0 || carrierPosition.lng !== 0)
  ) {
    currentPos = carrierPosition;
  } else {
    const fp = remaining.find((s) => s.type === "pickup");
    currentPos = fp
      ? { lat: fp.lat, lng: fp.lng }
      : { lat: remaining[0].lat, lng: remaining[0].lng };
  }

  while (remaining.length > 0) {
    const deliverableDropoffs = remaining.filter(
      (s) => s.type === "dropoff" && pickedUpIds.has(s.id),
    );
    const fittingPickups = remaining.filter(
      (s) => s.type === "pickup" && runningLoad + (s.loadKg ?? 0) <= capacityKg,
    );

    let pool: RouteStop[];
    if (runningLoad >= capacityKg * 0.9 && deliverableDropoffs.length > 0) {
      pool = deliverableDropoffs;
    } else if (fittingPickups.length > 0 || deliverableDropoffs.length > 0) {
      pool = [...deliverableDropoffs, ...fittingPickups];
    } else {
      // Every remaining pickup exceeds capacity — take nearest available
      const fallback = remaining.filter(
        (s) =>
          s.type === "pickup" ||
          (s.type === "dropoff" && pickedUpIds.has(s.id)),
      );
      pool = fallback.length > 0 ? fallback : remaining;
    }

    let bi = 0;
    let bd = haversineCoords(currentPos, pool[0]);
    for (let i = 1; i < pool.length; i++) {
      const d = haversineCoords(currentPos, pool[i]);
      if (d < bd) {
        bi = i;
        bd = d;
      }
    }

    const next = pool[bi];
    const ri = remaining.findIndex((s) => s === next);
    if (ri !== -1) remaining.splice(ri, 1);

    const w = next.loadKg ?? 0;
    if (next.type === "pickup") {
      runningLoad += w;
      pickedUpIds.add(next.id);
    } else runningLoad = Math.max(0, runningLoad - w);

    result.push(next);
    currentPos = { lat: next.lat, lng: next.lng };
  }

  return result;
}
