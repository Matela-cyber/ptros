import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./index";

export interface LatLngPoint {
  lat: number;
  lng: number;
}

export type RouteNetworkSegmentType =
  | "shortcut"
  | "blocked_path"
  | "restricted_path"
  | "preferred_corridor";

export type RouteNetworkSegmentStatus =
  | "active"
  | "under_review"
  | "deprecated";

export interface RouteNetworkSegment {
  id: string;
  name: string;
  type: RouteNetworkSegmentType;
  status: RouteNetworkSegmentStatus;
  note?: string;
  start: LatLngPoint;
  end: LatLngPoint;
  blocked: boolean;
  temporary?: boolean;
  maxWeightKg?: number | null;
  allowedVehicleTypes: string[];
  createdAt?: Date;
  updatedAt?: Date;
  source?: string;
  createdByName?: string;
  usageCount?: number;
}

export interface RouteNetworkSegmentStyle {
  strokeColor: string;
  strokeOpacity: number;
  strokeWeight: number;
  markerColor: string;
  iconMode: "arrow" | "dash" | "cross" | "dot" | "solid";
  label: string;
}

const toDateSafe = (value: any): Date | undefined => {
  if (!value) return undefined;
  if (value instanceof Date) return value;
  if (typeof value?.toDate === "function") return value.toDate();
  if (typeof value === "number") return new Date(value);
  if (typeof value === "string") {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? undefined : parsed;
  }
  return undefined;
};

const mapRouteNetworkSegment = (
  id: string,
  data: any,
): RouteNetworkSegment => ({
  id,
  name: data.name || "Unnamed segment",
  type: data.type || "shortcut",
  status: data.status || "active",
  note: data.note,
  start: data.start,
  end: data.end,
  blocked: !!data.blocked,
  temporary: !!data.temporary,
  maxWeightKg: typeof data.maxWeightKg === "number" ? data.maxWeightKg : null,
  allowedVehicleTypes: Array.isArray(data.allowedVehicleTypes)
    ? data.allowedVehicleTypes
    : [],
  createdAt: toDateSafe(data.createdAt),
  updatedAt: toDateSafe(data.updatedAt),
  source: data.source,
  createdByName: data.createdByName,
  usageCount: Number(data.usageCount || 0),
});

export const subscribeRouteNetworkSegments = (
  callback: (segments: RouteNetworkSegment[]) => void,
) => {
  return onSnapshot(collection(db, "routeNetworkSegments"), (snapshot) => {
    const segments = snapshot.docs
      .map((docSnap) => mapRouteNetworkSegment(docSnap.id, docSnap.data()))
      .sort(
        (a, b) => (b.updatedAt?.getTime() || 0) - (a.updatedAt?.getTime() || 0),
      );
    callback(segments);
  });
};

export const formatRouteNetworkSegmentType = (type: RouteNetworkSegmentType) =>
  type.replace(/_/g, " ");

export const getRouteNetworkSegmentStyle = (
  segment: Pick<RouteNetworkSegment, "type" | "temporary" | "blocked">,
): RouteNetworkSegmentStyle => {
  switch (segment.type) {
    case "blocked_path":
      return {
        strokeColor: segment.temporary ? "#f59e0b" : "#dc2626",
        strokeOpacity: 0.95,
        strokeWeight: 6,
        markerColor: segment.temporary ? "#fbbf24" : "#ef4444",
        iconMode: "cross",
        label: segment.temporary ? "Temporary block" : "Blocked path",
      };
    case "restricted_path":
      return {
        strokeColor: "#7c3aed",
        strokeOpacity: 0.9,
        strokeWeight: 5,
        markerColor: "#8b5cf6",
        iconMode: "dash",
        label: "Restricted path",
      };
    case "preferred_corridor":
      return {
        strokeColor: "#0891b2",
        strokeOpacity: 0.85,
        strokeWeight: 5,
        markerColor: "#06b6d4",
        iconMode: "dot",
        label: "Preferred corridor",
      };
    case "shortcut":
    default:
      return {
        strokeColor: "#16a34a",
        strokeOpacity: 0.92,
        strokeWeight: 5,
        markerColor: "#22c55e",
        iconMode: "arrow",
        label: "Shortcut",
      };
  }
};

export const haversineKm = (a: LatLngPoint, b: LatLngPoint): number => {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const sinLat = Math.sin(dLat / 2);
  const sinLng = Math.sin(dLng / 2);
  const inner =
    sinLat * sinLat + Math.cos(lat1) * Math.cos(lat2) * sinLng * sinLng;

  return 2 * earthRadiusKm * Math.asin(Math.min(1, Math.sqrt(inner)));
};

export const isRouteNetworkSegmentRelevant = (
  segment: RouteNetworkSegment,
  points: Array<LatLngPoint | null | undefined>,
  thresholdKm = 8,
) => {
  const validPoints = points.filter(Boolean) as LatLngPoint[];
  if (!validPoints.length) return false;

  return validPoints.some(
    (point) =>
      haversineKm(segment.start, point) < thresholdKm ||
      haversineKm(segment.end, point) < thresholdKm,
  );
};

interface RouteNetworkDisplayOptions {
  thresholdKm?: number;
  fallbackLimit?: number;
  alwaysShowActive?: boolean;
}

export const getDisplayRouteNetworkSegments = (
  segments: RouteNetworkSegment[],
  points: Array<LatLngPoint | null | undefined>,
  options?: RouteNetworkDisplayOptions,
) => {
  const activeSegments = segments.filter(
    (segment) => segment.status === "active",
  );
  if (!activeSegments.length) return [];

  const thresholdKm = options?.thresholdKm ?? 8;
  const fallbackLimit = options?.fallbackLimit ?? 80;

  if (options?.alwaysShowActive) {
    return activeSegments.slice(0, fallbackLimit);
  }

  const relevant = activeSegments.filter((segment) =>
    isRouteNetworkSegmentRelevant(segment, points, thresholdKm),
  );

  if (relevant.length) return relevant;

  return activeSegments.slice(0, fallbackLimit);
};
