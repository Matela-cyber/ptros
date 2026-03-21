export type RoutePoint = {
  lat: number;
  lng: number;
  timestamp: number;
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
