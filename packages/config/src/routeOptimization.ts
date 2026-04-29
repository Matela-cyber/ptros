// Shared route optimization and linked list utilities for carrier bundle fit

export interface RouteStop {
  id: string; // deliveryId
  lat: number;
  lng: number;
  prevId?: string | null;
  nextId?: string | null;
  visited?: boolean; // Mark as visited instead of removing
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

export function nearestNeighbor(stops: RouteStop[]): RouteStop[] {
  if (stops.length === 0) return [];
  const visited: RouteStop[] = [stops[0]];
  const unvisited = stops.slice(1);
  while (unvisited.length) {
    const last = visited[visited.length - 1];
    let minIdx = 0;
    for (let i = 1; i < unvisited.length; i++) {
      if (haversine(last, unvisited[i]) < haversine(last, unvisited[minIdx])) {
        minIdx = i;
      }
    }
    visited.push(unvisited.splice(minIdx, 1)[0]);
  }
  return visited;
}

// Convert ordered array to doubly linked list (prevId/nextId)
export function toDoublyLinkedList(stops: RouteStop[]): RouteStop[] {
  return stops.map((stop, i) => ({
    ...stop,
    prevId: i > 0 ? stops[i - 1].id : null,
    nextId: i < stops.length - 1 ? stops[i + 1].id : null,
  }));
}

// Mark a stop as visited (do not remove from DB)
export function markStopVisited(
  stops: RouteStop[],
  stopId: string,
): RouteStop[] {
  return stops.map((stop) =>
    stop.id === stopId ? { ...stop, visited: true } : stop,
  );
}
