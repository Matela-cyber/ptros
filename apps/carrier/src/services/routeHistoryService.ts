export type RoutePoint = {
  lat: number;
  lng: number;
  timestamp: number;
};

export type RouteBounds = {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
};

export type RouteDeviationSummary = {
  maxDistanceMeters: number;
  averageDistanceMeters: number;
  deviatedPointCount: number;
  totalPointCount: number;
};

const EARTH_RADIUS_M = 6371000;

const encodeSigned = (value: number): string => {
  let shifted = value < 0 ? ~(value << 1) : value << 1;
  let chunk = "";

  while (shifted >= 0x20) {
    chunk += String.fromCharCode((0x20 | (shifted & 0x1f)) + 63);
    shifted >>= 5;
  }

  chunk += String.fromCharCode(shifted + 63);
  return chunk;
};

export const encodePolyline = (
  points: Array<{ lat: number; lng: number }>,
): string => {
  let lastLat = 0;
  let lastLng = 0;
  let encoded = "";

  for (const point of points) {
    const lat = Math.round(point.lat * 1e5);
    const lng = Math.round(point.lng * 1e5);

    encoded += encodeSigned(lat - lastLat);
    encoded += encodeSigned(lng - lastLng);

    lastLat = lat;
    lastLng = lng;
  }

  return encoded;
};

const decodeChunk = (encoded: string, indexRef: { index: number }): number => {
  let result = 0;
  let shift = 0;
  let byte = 0;

  do {
    byte = encoded.charCodeAt(indexRef.index++) - 63;
    result |= (byte & 0x1f) << shift;
    shift += 5;
  } while (byte >= 0x20 && indexRef.index < encoded.length);

  return (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
};

export const decodePolyline = (
  encoded: string,
): Array<{ lat: number; lng: number }> => {
  const points: Array<{ lat: number; lng: number }> = [];
  const indexRef = { index: 0 };
  let lat = 0;
  let lng = 0;

  while (indexRef.index < encoded.length) {
    lat += decodeChunk(encoded, indexRef);
    lng += decodeChunk(encoded, indexRef);
    points.push({ lat: lat / 1e5, lng: lng / 1e5 });
  }

  return points;
};

export const haversineDistanceMeters = (
  from: { lat: number; lng: number },
  to: { lat: number; lng: number },
): number => {
  const dLat = ((to.lat - from.lat) * Math.PI) / 180;
  const dLng = ((to.lng - from.lng) * Math.PI) / 180;
  const lat1 = (from.lat * Math.PI) / 180;
  const lat2 = (to.lat * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return EARTH_RADIUS_M * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

export const compressRoutePoints = (
  points: RoutePoint[],
  minDistanceMeters: number = 6,
): RoutePoint[] => {
  if (points.length <= 2) return points;

  const compressed: RoutePoint[] = [points[0]];

  for (let i = 1; i < points.length - 1; i += 1) {
    const candidate = points[i];
    const prev = compressed[compressed.length - 1];
    const dist = haversineDistanceMeters(prev, candidate);
    if (dist >= minDistanceMeters) {
      compressed.push(candidate);
    }
  }

  compressed.push(points[points.length - 1]);
  return compressed;
};

export const getRouteBounds = (
  points: Array<{ lat: number; lng: number }>,
): RouteBounds | null => {
  if (!points.length) return null;

  let minLat = points[0].lat;
  let maxLat = points[0].lat;
  let minLng = points[0].lng;
  let maxLng = points[0].lng;

  for (const point of points) {
    if (point.lat < minLat) minLat = point.lat;
    if (point.lat > maxLat) maxLat = point.lat;
    if (point.lng < minLng) minLng = point.lng;
    if (point.lng > maxLng) maxLng = point.lng;
  }

  return { minLat, maxLat, minLng, maxLng };
};

export const getRouteDistanceMeters = (
  points: Array<{ lat: number; lng: number }>,
): number => {
  if (points.length < 2) return 0;

  let total = 0;
  for (let i = 1; i < points.length; i += 1) {
    total += haversineDistanceMeters(points[i - 1], points[i]);
  }

  return total;
};

const pointToSegmentDistanceMeters = (
  point: { lat: number; lng: number },
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number => {
  // Local equirectangular approximation around point latitude.
  const latRad = (point.lat * Math.PI) / 180;
  const metersPerDegLat = 111320;
  const metersPerDegLng = 111320 * Math.cos(latRad);

  const px = point.lng * metersPerDegLng;
  const py = point.lat * metersPerDegLat;
  const ax = a.lng * metersPerDegLng;
  const ay = a.lat * metersPerDegLat;
  const bx = b.lng * metersPerDegLng;
  const by = b.lat * metersPerDegLat;

  const abx = bx - ax;
  const aby = by - ay;
  const abLenSq = abx * abx + aby * aby;

  if (abLenSq === 0) {
    const dx = px - ax;
    const dy = py - ay;
    return Math.sqrt(dx * dx + dy * dy);
  }

  const t = Math.max(
    0,
    Math.min(1, ((px - ax) * abx + (py - ay) * aby) / abLenSq),
  );
  const cx = ax + t * abx;
  const cy = ay + t * aby;
  const dx = px - cx;
  const dy = py - cy;
  return Math.sqrt(dx * dx + dy * dy);
};

export const minDistanceToPolylineMeters = (
  point: { lat: number; lng: number },
  polyline: Array<{ lat: number; lng: number }>,
): number => {
  if (polyline.length === 0) return Number.POSITIVE_INFINITY;
  if (polyline.length === 1) {
    return haversineDistanceMeters(point, polyline[0]);
  }

  let minDistance = Number.POSITIVE_INFINITY;
  for (let i = 1; i < polyline.length; i += 1) {
    const dist = pointToSegmentDistanceMeters(
      point,
      polyline[i - 1],
      polyline[i],
    );
    if (dist < minDistance) minDistance = dist;
  }

  return minDistance;
};

export const summarizeRouteDeviation = (
  actualPath: Array<{ lat: number; lng: number }>,
  plannedPath: Array<{ lat: number; lng: number }>,
  deviationThresholdMeters: number = 70,
): RouteDeviationSummary => {
  if (!actualPath.length || !plannedPath.length) {
    return {
      maxDistanceMeters: 0,
      averageDistanceMeters: 0,
      deviatedPointCount: 0,
      totalPointCount: actualPath.length,
    };
  }

  let maxDistance = 0;
  let totalDistance = 0;
  let deviatedCount = 0;

  for (const point of actualPath) {
    const dist = minDistanceToPolylineMeters(point, plannedPath);
    totalDistance += dist;
    if (dist > maxDistance) maxDistance = dist;
    if (dist >= deviationThresholdMeters) deviatedCount += 1;
  }

  return {
    maxDistanceMeters: maxDistance,
    averageDistanceMeters: totalDistance / actualPath.length,
    deviatedPointCount: deviatedCount,
    totalPointCount: actualPath.length,
  };
};
