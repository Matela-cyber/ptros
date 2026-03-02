export type LatLngPoint = { lat: number; lng: number };

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

export const decodePolyline = (encoded: string): LatLngPoint[] => {
  const points: LatLngPoint[] = [];
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

export const haversineKm = (a: LatLngPoint, b: LatLngPoint): number => {
  const r = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;

  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return 2 * r * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
};
