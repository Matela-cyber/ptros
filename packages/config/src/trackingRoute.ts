export interface TrackingRouteStop {
  key: string;
  id: string;
  type: "pickup" | "dropoff";
  lat: number;
  lng: number;
  address?: string;
  prevId?: string | null;
  nextId?: string | null;
  visited?: boolean;
}

export interface DeliveryTrackingRouteSummaryStop {
  key: string;
  lat: number;
  lng: number;
  type: "pickup" | "dropoff";
}

export interface DeliveryTrackingRouteSummary {
  targetStopKey: string | null;
  targetType: "pickup" | "dropoff" | null;
  stopsAheadCount: number;
  remainingRouteStopCount: number;
  routeChain: DeliveryTrackingRouteSummaryStop[];
  updatedAtMs: number;
}

const PRE_PICKUP_STATUSES = new Set(["pending", "assigned", "accepted"]);
const HIDDEN_CARRIER_STATUSES = new Set([
  "pending",
  "assigned",
  "accepted",
  "delivered",
  "cancelled",
]);

const hasFiniteCoordinate = (value: unknown): value is number =>
  typeof value === "number" && Number.isFinite(value);

export const isTrackingBeforePickup = (status?: string | null) =>
  PRE_PICKUP_STATUSES.has(status || "");

export const shouldShowTrackingCarrierMarker = (status?: string | null) =>
  !!status && !HIDDEN_CARRIER_STATUSES.has(status);

export const getTrackingEtaLabel = (status?: string | null) =>
  isTrackingBeforePickup(status) ? "ETA to pickup" : "ETA to delivery";

export const formatTrackingEta = (seconds: number) => {
  const minutes = Math.max(1, Math.round(seconds / 60));
  return minutes < 60
    ? `${minutes} min`
    : `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
};

export const toTrackingRouteStop = (
  key: string,
  raw: any,
): TrackingRouteStop | null => {
  if (!raw) return null;

  const lat = Number(raw.lat);
  const lng = Number(raw.lng);
  const [id, inferredType] = key.split("_");
  const type = raw.type || inferredType;

  if (
    !id ||
    (type !== "pickup" && type !== "dropoff") ||
    !hasFiniteCoordinate(lat) ||
    !hasFiniteCoordinate(lng)
  ) {
    return null;
  }

  return {
    key,
    id,
    type,
    lat,
    lng,
    address: raw.address,
    prevId: raw.prevId ?? null,
    nextId: raw.nextId ?? null,
    visited: !!raw.visited,
  };
};

export const orderTrackingRouteStops = (
  stops: TrackingRouteStop[],
): TrackingRouteStop[] => {
  if (!stops.length) return [];

  const byKey: Record<string, TrackingRouteStop> = {};
  stops.forEach((stop) => {
    byKey[stop.key] = stop;
  });

  let start = stops.find((stop) => !stop.prevId || !byKey[stop.prevId]);
  if (!start) start = stops[0];

  const ordered: TrackingRouteStop[] = [];
  const seen = new Set<string>();
  let current: TrackingRouteStop | undefined = start;

  while (current && !seen.has(current.key)) {
    ordered.push(current);
    seen.add(current.key);
    current = current.nextId ? byKey[current.nextId] : undefined;
  }

  return ordered;
};

export const getTrackingTargetStopKey = (
  deliveryId: string,
  status?: string | null,
) => {
  if (
    !deliveryId ||
    !status ||
    status === "delivered" ||
    status === "cancelled"
  ) {
    return null;
  }

  return `${deliveryId}_${isTrackingBeforePickup(status) ? "pickup" : "dropoff"}`;
};

export const getTrackingStopChain = (
  deliveryId: string,
  status: string | null | undefined,
  stops: TrackingRouteStop[],
): TrackingRouteStop[] => {
  const targetKey = getTrackingTargetStopKey(deliveryId, status);
  if (!targetKey) return [];

  const ordered = orderTrackingRouteStops(stops);
  const targetIndex = ordered.findIndex((stop) => stop.key === targetKey);
  if (targetIndex === -1) return [];

  return ordered
    .slice(0, targetIndex + 1)
    .filter(
      (stop) => hasFiniteCoordinate(stop.lat) && hasFiniteCoordinate(stop.lng),
    );
};

export const getTrackingStopsAheadCount = (
  deliveryId: string,
  status: string | null | undefined,
  stops: TrackingRouteStop[],
) => {
  const chain = getTrackingStopChain(deliveryId, status, stops);
  return Math.max(0, chain.length - 1);
};

export const buildDeliveryTrackingRouteSummary = (
  deliveryId: string,
  orderedStops: TrackingRouteStop[],
): DeliveryTrackingRouteSummary | null => {
  if (!deliveryId || !orderedStops.length) return null;

  const targetIndex = orderedStops.findIndex((stop) => stop.id === deliveryId);
  if (targetIndex === -1) return null;

  const targetStop = orderedStops[targetIndex];
  const routeChain = orderedStops.slice(0, targetIndex + 1).map((stop) => ({
    key: stop.key,
    lat: stop.lat,
    lng: stop.lng,
    type: stop.type,
  }));

  return {
    targetStopKey: targetStop.key,
    targetType: targetStop.type,
    stopsAheadCount: Math.max(0, routeChain.length - 1),
    remainingRouteStopCount: orderedStops.length,
    routeChain,
    updatedAtMs: Date.now(),
  };
};

export const toDeliveryTrackingRouteSummary = (
  raw: any,
): DeliveryTrackingRouteSummary | null => {
  if (!raw || !Array.isArray(raw.routeChain)) return null;

  const routeChain = raw.routeChain
    .map((stop: any) => {
      const lat = Number(stop?.lat);
      const lng = Number(stop?.lng);
      const type = stop?.type;
      const key = String(stop?.key || "");
      if (
        !key ||
        !hasFiniteCoordinate(lat) ||
        !hasFiniteCoordinate(lng) ||
        (type !== "pickup" && type !== "dropoff")
      ) {
        return null;
      }

      return { key, lat, lng, type } as DeliveryTrackingRouteSummaryStop;
    })
    .filter((stop: DeliveryTrackingRouteSummaryStop | null) => !!stop);

  return {
    targetStopKey: raw.targetStopKey ? String(raw.targetStopKey) : null,
    targetType:
      raw.targetType === "pickup" || raw.targetType === "dropoff"
        ? raw.targetType
        : null,
    stopsAheadCount: Math.max(0, Number(raw.stopsAheadCount || 0)),
    remainingRouteStopCount: Math.max(
      0,
      Number(raw.remainingRouteStopCount || 0),
    ),
    routeChain,
    updatedAtMs: Number(raw.updatedAtMs || 0),
  };
};
