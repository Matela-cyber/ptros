import { Delivery } from "./types";
// Bundle-fit (grouped pickups first, then dropoffs) route optimization
export function bundleFitRoute(stops: RouteStop[]): RouteStop[] {
  if (stops.length === 0) return [];
  const visited: RouteStop[] = [];
  const unvisited = [...stops];
  const pickedUpIds = new Set<string>();
  // Always start with a pickup if possible
  let currentIdx = unvisited.findIndex((s) => s.type === "pickup");
  if (currentIdx === -1) currentIdx = 0;
  let current = unvisited.splice(currentIdx, 1)[0];
  visited.push(current);
  if (current.type === "pickup") pickedUpIds.add(current.id);

  while (unvisited.length) {
    // Candidates: pickups not yet picked up, or dropoffs whose pickup is already visited
    const candidates = unvisited.filter(
      (s) =>
        s.type === "pickup" || (s.type === "dropoff" && pickedUpIds.has(s.id)),
    );
    if (candidates.length === 0) {
      // If no legal candidates, just append the rest (should not happen in normal data)
      visited.push(...unvisited);
      break;
    }
    // Find nearest candidate
    let minIdx = 0;
    let minDist = haversine(current, candidates[0]);
    for (let i = 1; i < candidates.length; i++) {
      const dist = haversine(current, candidates[i]);
      if (dist < minDist) {
        minIdx = i;
        minDist = dist;
      }
    }
    const next = candidates[minIdx];
    // Remove from unvisited
    const idx = unvisited.findIndex((s) => s === next);
    if (idx !== -1) unvisited.splice(idx, 1);
    visited.push(next);
    if (next.type === "pickup") pickedUpIds.add(next.id);
    current = next;
  }
  return visited;
}
// Carrier app: Multi-stop route optimization and linked list utilities
// Supports pickup/dropoff distinction and integrates with carrier's accepted/assigned deliveries

export interface RouteStop {
  id: string; // deliveryId
  lat: number;
  lng: number;
  type: "pickup" | "dropoff";
  address?: string;
  prevId?: string | null;
  nextId?: string | null;
  visited?: boolean;
  // ...other metadata
}

function haversine(a: RouteStop, b: RouteStop): number {
  const R = 6371e3; // meters
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

// Nearest Neighbor with pickup/dropoff logic
export function nearestNeighbor(stops: RouteStop[]): RouteStop[] {
  if (stops.length === 0) return [];
  const visited: RouteStop[] = [];
  const unvisited = [...stops];
  // Always start with a pickup if possible
  let currentIdx = unvisited.findIndex((s) => s.type === "pickup");
  if (currentIdx === -1) currentIdx = 0;
  visited.push(unvisited.splice(currentIdx, 1)[0]);

  while (unvisited.length) {
    const last = visited[visited.length - 1];
    // Only allow dropoff if its pickup is already visited
    let candidates = unvisited.filter(
      (s) =>
        s.type === "pickup" ||
        (s.type === "dropoff" &&
          visited.some((v) => v.id === s.id && v.type === "pickup")),
    );
    if (candidates.length === 0) candidates = unvisited; // fallback
    let minIdx = unvisited.indexOf(candidates[0]);
    for (let i = 1; i < candidates.length; i++) {
      if (haversine(last, candidates[i]) < haversine(last, candidates[0])) {
        minIdx = unvisited.indexOf(candidates[i]);
      }
    }
    visited.push(unvisited.splice(minIdx, 1)[0]);
  }
  return visited;
}

export function toDoublyLinkedList(stops: RouteStop[]): RouteStop[] {
  // Use full key (id_type) for prevId/nextId, and avoid self-loops
  return stops.map((stop, i) => {
    const prev = i > 0 ? `${stops[i - 1].id}_${stops[i - 1].type}` : null;
    const next =
      i < stops.length - 1 ? `${stops[i + 1].id}_${stops[i + 1].type}` : null;
    // Prevent self-loop: if next would be this stop's own key, set to null
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

// Utility to build stops from deliveries
// Always use deliveryAddress for dropoff, pickupAddress for pickup
export function buildStopsFromDeliveries(
  deliveries: Delivery[],
  knownLocations?: Record<string, { lat: number; lng: number; name: string }>,
): RouteStop[] {
  // Accept optional knownLocations map
  return deliveries.flatMap((delivery) => {
    // Use knownLocations if present, fallback to delivery fields
    // There are no pickupLocationId/dropoffLocationId fields in Delivery, so we match by normalized address
    const pickupLoc = knownLocations
      ? Object.values(knownLocations).find(
          (loc) =>
            loc.name?.toLowerCase().trim() ===
            delivery.pickupAddress?.toLowerCase().trim(),
        )
      : undefined;
    const dropoffLoc = knownLocations
      ? Object.values(knownLocations).find(
          (loc) =>
            loc.name?.toLowerCase().trim() ===
            delivery.deliveryAddress?.toLowerCase().trim(),
        )
      : undefined;
    return [
      {
        id: delivery.id,
        type: "pickup",
        address: pickupLoc?.name ?? delivery.pickupAddress,
        lat: pickupLoc?.lat ?? delivery.currentLocation?.lat ?? 0,
        lng: pickupLoc?.lng ?? delivery.currentLocation?.lng ?? 0,
        visited: false,
        prevId: null,
        nextId: null,
      },
      {
        id: delivery.id,
        type: "dropoff",
        address: dropoffLoc?.name ?? delivery.deliveryAddress,
        lat: dropoffLoc?.lat ?? delivery.currentLocation?.lat ?? 0,
        lng: dropoffLoc?.lng ?? delivery.currentLocation?.lng ?? 0,
        visited: false,
        prevId: null,
        nextId: null,
      },
    ];
  });
}
