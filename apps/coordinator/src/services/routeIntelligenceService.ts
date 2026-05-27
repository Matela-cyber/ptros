import {
  db,
  realtimeDb,
  defaultBusinessRules,
  syncDeliveryLocationGraphStructure,
  type DeliveryGraphSyncResult,
} from "@config";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { get as rtdbGet, ref as rtdbRef } from "firebase/database";
import { haversineKm, type LatLngPoint } from "../routeHistory";
import { buildDeliveryGraphSnapshot } from "./locationGraphService.ts";
import { getTimeServiceStatus, writeTimestamp } from "./timeService";

export type NormalizedVehicleType =
  | "bicycle"
  | "motorcycle"
  | "car"
  | "pickup"
  | "van"
  | "truck"
  | "unknown";

export type ManagedSegmentType =
  | "shortcut"
  | "blocked_path"
  | "restricted_path"
  | "preferred_corridor";

export type ManagedSegmentStatus = "active" | "under_review" | "deprecated";

export type RouteReportType =
  | "blocked_path"
  | "bad_road"
  | "unsafe_segment"
  | "shortcut_suggestion"
  | "wrong_map_road"
  | "vehicle_restriction";

export interface DeliveryDraftInput {
  pickupLocation?: LatLngPoint | null;
  deliveryLocation?: LatLngPoint | null;
  pickupAddress?: string;
  deliveryAddress?: string;
  packageWeightKg?: number | null;
  packageValue?: number | null;
  packageDimensions?: string | null;
  priority?: string | null;
  deliveryId?: string;
  trackingCode?: string;
}

export interface CarrierOptimizationProfile {
  id: string;
  email?: string;
  fullName: string;
  phone?: string;
  status: string;
  isApproved: boolean;
  vehicleType?: string;
  currentLocation?: LatLngPoint & { timestamp?: Date };
  routeLearningStats?: {
    shortcutsReported?: number;
  };
  maxWeightKg?: number;
  maxParcels?: number;
}

export interface CarrierRecommendation {
  id: string;
  fullName: string;
  status: string;
  vehicleType: string;
  carrierCurrentLocation?: LatLngPoint;
  normalizedVehicleType: NormalizedVehicleType;
  recommendationScore: number;
  recommendationReason: string;
  autoAssignable: boolean;
  distanceToPickupKm: number;
  estimatedDetourKm: number;
  activeDeliveries: number;
  activeLoadWeightKg: number;
  remainingCapacityKg: number;
  capacityPenalty: number;
  workloadPenalty: number;
  availabilityPenalty: number;
  routeGovernancePenalty: number;
  costEfficiencyScore: number;
  bundleSuitabilityScore: number;
  shortcutContributionScore: number;
  staleLocationMinutes: number;
  freshLocation: boolean;
  canBundle: boolean;
  reasonFactors: string[];
  estimatedDeliveryHours: number;
  estimatedPrice: number;
}

export interface ManagedRouteSegment {
  id: string;
  name: string;
  type: ManagedSegmentType;
  status: ManagedSegmentStatus;
  note?: string;
  start: LatLngPoint;
  end: LatLngPoint;
  blocked: boolean;
  temporary?: boolean;
  maxWeightKg?: number | null;
  allowedVehicleTypes: NormalizedVehicleType[];
  createdAt?: Date;
  updatedAt?: Date;
  source?: string;
  createdByName?: string;
  usageCount?: number;
}

export interface RouteReportRecord {
  id: string;
  deliveryId?: string;
  trackingCode?: string;
  type: RouteReportType;
  source: "carrier" | "coordinator";
  status: "open" | "reviewed" | "promoted" | "dismissed";
  note?: string;
  reason?: string;
  temporary?: boolean;
  start?: LatLngPoint;
  end?: LatLngPoint;
  vehicleType?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdByName?: string;
}

interface ManagedSegmentInput {
  name: string;
  type: ManagedSegmentType;
  note?: string;
  start: LatLngPoint;
  end: LatLngPoint;
  allowedVehicleTypes?: NormalizedVehicleType[];
  status?: ManagedSegmentStatus;
  temporary?: boolean;
  maxWeightKg?: number | null;
  createdByName?: string;
  source?: string;
}

interface RouteReportInput {
  deliveryId?: string;
  trackingCode?: string;
  type: RouteReportType;
  source: "carrier" | "coordinator";
  note?: string;
  reason?: string;
  temporary?: boolean;
  start?: LatLngPoint;
  end?: LatLngPoint;
  vehicleType?: string;
  createdByName?: string;
}

// Statuses where the carrier is actively carrying the package
const CARRYING_STATUSES = new Set([
  "picked_up",
  "in_transit",
  "out_for_delivery",
  "stuck",
]);

interface ActiveDeliveryLoad {
  carrierId: string;
  deliveryId: string;
  status: string;
  weightKg: number;
  pickupLocation?: LatLngPoint;
  deliveryLocation?: LatLngPoint;
  priority?: string;
  isCarrying: boolean; // true = already picked up; false = assigned/accepted only
}

const ACTIVE_DELIVERY_STATUSES = [
  "assigned",
  "accepted",
  "picked_up",
  "in_transit",
  "out_for_delivery",
  "stuck",
];

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

export const normalizeVehicleType = (
  vehicleType?: string,
): NormalizedVehicleType => {
  const type = (vehicleType || "").toLowerCase();
  if (type.includes("bicycle")) return "bicycle";
  if (type.includes("motor") || type.includes("scooter")) return "motorcycle";
  if (type.includes("bike")) return "motorcycle";
  if (type.includes("sedan") || type.includes("car")) return "car";
  if (type.includes("pickup")) return "pickup";
  if (type.includes("van")) return "van";
  if (type.includes("truck")) return "truck";
  return "unknown";
};

export const getVehicleCapacityKg = (vehicleType?: string): number => {
  const normalized = normalizeVehicleType(vehicleType);
  return (
    defaultBusinessRules.vehicleProfiles[normalized] ??
    defaultBusinessRules.vehicleProfiles.unknown
  ).capacityKg;
};

const getVehicleParcelLimit = (vehicleType?: string): number => {
  switch (normalizeVehicleType(vehicleType)) {
    case "bicycle":
      return 2;
    case "motorcycle":
      return 3;
    case "car":
      return 6;
    case "pickup":
      return 12;
    case "van":
      return 20;
    case "truck":
      return 40;
    default:
      return 4;
  }
};

const parseDimensionsVolumeFactor = (dimensions?: string | null): number => {
  if (!dimensions) return 0;
  const parts = dimensions
    .split(/[x×*]/i)
    .map((value) => Number(value.trim()))
    .filter((value) => Number.isFinite(value) && value > 0);
  if (parts.length !== 3) return 0;
  const cubicCm = parts[0] * parts[1] * parts[2];
  return cubicCm / 100000;
};

const isPriorityStrict = (priority?: string | null) =>
  ["urgent", "express"].includes((priority || "").toLowerCase());

const isSegmentRelevant = (
  segment: ManagedRouteSegment,
  pickup?: LatLngPoint | null,
  dropoff?: LatLngPoint | null,
) => {
  if (!pickup && !dropoff) return false;
  const thresholdKm = 4.5;
  const nearPickup =
    pickup &&
    (haversineKm(segment.start, pickup) < thresholdKm ||
      haversineKm(segment.end, pickup) < thresholdKm);
  const nearDropoff =
    dropoff &&
    (haversineKm(segment.start, dropoff) < thresholdKm ||
      haversineKm(segment.end, dropoff) < thresholdKm);
  return Boolean(nearPickup || nearDropoff);
};

const computeGovernancePenalty = (
  carrier: CarrierOptimizationProfile,
  delivery: DeliveryDraftInput,
  segments: ManagedRouteSegment[],
) => {
  const normalizedVehicle = normalizeVehicleType(carrier.vehicleType);
  const relevant = segments.filter(
    (segment) =>
      segment.status === "active" &&
      isSegmentRelevant(
        segment,
        delivery.pickupLocation,
        delivery.deliveryLocation,
      ),
  );

  let penalty = 0;
  for (const segment of relevant) {
    const vehicleAllowed =
      !segment.allowedVehicleTypes.length ||
      segment.allowedVehicleTypes.includes(normalizedVehicle);
    const weightBlocked =
      typeof segment.maxWeightKg === "number" &&
      (delivery.packageWeightKg || 0) > segment.maxWeightKg;

    if (segment.type === "blocked_path" && segment.blocked) {
      penalty += 10;
    }

    if (!vehicleAllowed) {
      penalty += 12;
    }

    if (weightBlocked) {
      penalty += 9;
    }
  }

  return penalty;
};

const mapManagedSegment = (id: string, data: any): ManagedRouteSegment => ({
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

const mapRouteReport = (id: string, data: any): RouteReportRecord => ({
  id,
  deliveryId: data.deliveryId,
  trackingCode: data.trackingCode,
  type: data.type || "blocked_path",
  source: data.source || "carrier",
  status: data.status || "open",
  note: data.note,
  reason: data.reason,
  temporary: !!data.temporary,
  start: data.start,
  end: data.end,
  vehicleType: data.vehicleType,
  createdAt: toDateSafe(data.createdAt),
  updatedAt: toDateSafe(data.updatedAt),
  createdByName: data.createdByName,
});

const buildActiveDeliveryLoads = async (): Promise<ActiveDeliveryLoad[]> => {
  const q = query(
    collection(db, "deliveries"),
    where("status", "in", ACTIVE_DELIVERY_STATUSES),
  );
  const snap = await getDocs(q);
  return snap.docs
    .map((docSnap) => {
      const data = docSnap.data() as any;
      if (!data.carrierId) return null;
      return {
        carrierId: data.carrierId,
        deliveryId: docSnap.id,
        status: data.status,
        weightKg: Number(data.packageWeight || 0),
        pickupLocation: data.pickupLocation,
        deliveryLocation: data.deliveryLocation,
        priority: data.priority,
        isCarrying: CARRYING_STATUSES.has(data.status),
      } as ActiveDeliveryLoad;
    })
    .filter(Boolean) as ActiveDeliveryLoad[];
};

const fetchManagedSegments = async (): Promise<ManagedRouteSegment[]> => {
  const snap = await getDocs(collection(db, "routeNetworkSegments"));
  return snap.docs.map((segment) =>
    mapManagedSegment(segment.id, segment.data()),
  );
};

const fetchCarrierProfiles = async (): Promise<
  CarrierOptimizationProfile[]
> => {
  const q = query(
    collection(db, "users"),
    where("role", "==", "carrier"),
    where("isApproved", "==", true),
  );
  const snap = await getDocs(q);
  return snap.docs.map((docSnap) => {
    const data = docSnap.data() as any;
    return {
      id: docSnap.id,
      email: data.email,
      fullName: data.fullName || "Carrier",
      phone: data.phone,
      status: data.status || "inactive",
      isApproved: !!data.isApproved,
      vehicleType: data.vehicleType || "Unknown",
      currentLocation: data.currentLocation
        ? {
            lat: data.currentLocation.lat,
            lng: data.currentLocation.lng,
            timestamp: toDateSafe(data.currentLocation.timestamp),
          }
        : undefined,
      routeLearningStats: data.routeLearningStats || {},
      maxWeightKg: data.maxWeightKg,
      maxParcels: data.maxParcels,
    } satisfies CarrierOptimizationProfile;
  });
};

// Vehicle speed — reads from shared businessRules so coordinator Settings changes take effect
const getVehicleSpeedKmh = (vehicleType?: string): number => {
  const normalized = normalizeVehicleType(vehicleType);
  return (
    defaultBusinessRules.vehicleProfiles[normalized] ??
    defaultBusinessRules.vehicleProfiles.unknown
  ).speedKmh;
};

// Fetch real-time carrier locations from RTDB /tracks/{uid}
const fetchCarrierRtdbLocations = async (
  carrierIds: string[],
): Promise<Record<string, { lat: number; lng: number; timestamp: Date }>> => {
  const results: Record<string, { lat: number; lng: number; timestamp: Date }> =
    {};
  await Promise.all(
    carrierIds.map(async (uid) => {
      try {
        const snap = await rtdbGet(rtdbRef(realtimeDb, `tracks/${uid}`));
        if (snap.exists()) {
          const data = snap.val();
          if (typeof data.lat === "number" && typeof data.lng === "number") {
            results[uid] = {
              lat: data.lat,
              lng: data.lng,
              timestamp: data.timestamp ? new Date(data.timestamp) : new Date(),
            };
          }
        }
      } catch {
        // ignore — fall back to Firestore cached location
      }
    }),
  );
  return results;
};

// Fetch each carrier's active routeStops subcollection for true pending
// stop count, peak planned load, and remaining chained distance (for ETA).
// Traverses the prevId/nextId linked list to compute the actual km remaining
// in the carrier's planned route rather than a flat per-stop proxy.
const fetchCarrierRouteStates = async (
  carrierIds: string[],
): Promise<
  Record<
    string,
    {
      activeStopCount: number;
      peakPlannedLoadKg: number;
      remainingRouteDistanceKm: number;
    }
  >
> => {
  const results: Record<
    string,
    {
      activeStopCount: number;
      peakPlannedLoadKg: number;
      remainingRouteDistanceKm: number;
    }
  > = {};
  await Promise.all(
    carrierIds.map(async (uid) => {
      try {
        const stopsSnap = await getDocs(
          collection(db, "users", uid, "routeStops"),
        );
        let peakLoad = 0;

        // Build a map of all stops for linked-list traversal
        const stopMap: Record<
          string,
          {
            lat: number;
            lng: number;
            nextId?: string | null;
            prevId?: string | null;
          }
        > = {};
        stopsSnap.forEach((d) => {
          const s = d.data();
          const cl = Number(s.cumulativeLoad || 0);
          if (cl > peakLoad) peakLoad = cl;
          if (typeof s.lat === "number" && typeof s.lng === "number") {
            stopMap[d.id] = {
              lat: s.lat,
              lng: s.lng,
              nextId: s.nextId ?? null,
              prevId: s.prevId ?? null,
            };
          }
        });

        // Walk the linked list from head (prevId == null) to tail, summing inter-stop haversine distances
        let remainingRouteDistanceKm = 0;
        let headId: string | undefined;
        for (const [id, stop] of Object.entries(stopMap)) {
          if (!stop.prevId) {
            headId = id;
            break;
          }
        }
        if (headId) {
          let cur = headId;
          while (cur && stopMap[cur]?.nextId) {
            const nxt = stopMap[cur].nextId as string;
            if (stopMap[nxt]) {
              remainingRouteDistanceKm += haversineKm(
                { lat: stopMap[cur].lat, lng: stopMap[cur].lng },
                { lat: stopMap[nxt].lat, lng: stopMap[nxt].lng },
              );
            }
            cur = nxt;
          }
        }

        results[uid] = {
          activeStopCount: stopsSnap.size,
          peakPlannedLoadKg: peakLoad,
          remainingRouteDistanceKm,
        };
      } catch {
        // ignore — scoring falls back to delivery counts and flat per-stop estimate
      }
    }),
  );
  return results;
};

export const subscribeManagedRouteSegments = (
  callback: (segments: ManagedRouteSegment[]) => void,
) => {
  return onSnapshot(collection(db, "routeNetworkSegments"), (snapshot) => {
    const segments = snapshot.docs
      .map((docSnap) => mapManagedSegment(docSnap.id, docSnap.data()))
      .sort(
        (a, b) => (b.updatedAt?.getTime() || 0) - (a.updatedAt?.getTime() || 0),
      );
    callback(segments);
  });
};

export const subscribeRouteReports = (
  callback: (reports: RouteReportRecord[]) => void,
) => {
  return onSnapshot(collection(db, "routeReports"), (snapshot) => {
    const reports = snapshot.docs
      .map((docSnap) => mapRouteReport(docSnap.id, docSnap.data()))
      .sort(
        (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0),
      );
    callback(reports);
  });
};

export const createManagedRouteSegment = async (input: ManagedSegmentInput) => {
  const now = Timestamp.now();
  return addDoc(collection(db, "routeNetworkSegments"), {
    name: input.name,
    type: input.type,
    note: input.note || "",
    start: input.start,
    end: input.end,
    blocked: input.type === "blocked_path",
    temporary: !!input.temporary,
    maxWeightKg:
      typeof input.maxWeightKg === "number" ? input.maxWeightKg : null,
    allowedVehicleTypes: input.allowedVehicleTypes || [],
    status: input.status || "active",
    createdByName: input.createdByName || "Coordinator",
    source: input.source || "coordinator",
    usageCount: 0,
    createdAt: now,
    updatedAt: now,
  });
};

export const updateManagedRouteSegmentStatus = async (
  segmentId: string,
  status: ManagedSegmentStatus,
) => {
  await updateDoc(doc(db, "routeNetworkSegments", segmentId), {
    status,
    updatedAt: Timestamp.now(),
  });
};

export const promoteRouteReportToManagedSegment = async (
  report: RouteReportRecord,
  overrides?: Partial<ManagedSegmentInput>,
) => {
  if (!report.start || !report.end) {
    throw new Error("Report is missing segment coordinates.");
  }

  const type: ManagedSegmentType =
    report.type === "shortcut_suggestion" ? "shortcut" : "blocked_path";

  const created = await createManagedRouteSegment({
    name:
      overrides?.name ||
      `${type === "shortcut" ? "Shortcut" : "Blocked path"} • ${report.trackingCode || report.deliveryId || "route"}`,
    type,
    note: overrides?.note || report.note || report.reason,
    start: report.start,
    end: report.end,
    allowedVehicleTypes:
      overrides?.allowedVehicleTypes ||
      (report.vehicleType ? [normalizeVehicleType(report.vehicleType)] : []),
    status: overrides?.status || "active",
    temporary: overrides?.temporary ?? report.temporary,
    maxWeightKg: overrides?.maxWeightKg,
    createdByName: overrides?.createdByName || report.createdByName,
    source: overrides?.source || report.source,
  });

  await updateDoc(doc(db, "routeReports", report.id), {
    status: "promoted",
    promotedSegmentId: created.id,
    updatedAt: Timestamp.now(),
  });

  return created;
};

export const submitRouteReport = async (input: RouteReportInput) => {
  const createdAt = Timestamp.now();
  const reportRef = await addDoc(collection(db, "routeReports"), {
    deliveryId: input.deliveryId || null,
    trackingCode: input.trackingCode || null,
    type: input.type,
    source: input.source,
    status: "open",
    note: input.note || "",
    reason: input.reason || "",
    temporary: !!input.temporary,
    start: input.start || null,
    end: input.end || null,
    vehicleType: input.vehicleType || null,
    createdByName: input.createdByName || input.source,
    createdAt,
    updatedAt: createdAt,
  });

  if (input.deliveryId) {
    const docRef = doc(db, "deliveries", input.deliveryId);
    const payload = {
      type: input.type,
      reason: input.reason || input.note || "Route report submitted",
      note: input.note || "",
      source: input.source,
      reportedAt: new Date().toISOString(),
      start: input.start || null,
      end: input.end || null,
      vehicleType: input.vehicleType || null,
      temporary: !!input.temporary,
    };

    const updatePayload: Record<string, any> = {
      updatedAt: createdAt,
    };

    if (
      ["blocked_path", "bad_road", "unsafe_segment", "wrong_map_road"].includes(
        input.type,
      )
    ) {
      updatePayload.routeReviews = arrayUnion({
        type: input.type,
        temporary: !!input.temporary,
        reason: input.reason || input.note || "Blocked/unsafe path",
        start: input.start || null,
        end: input.end || null,
        status: "active",
        createdAt,
        source: input.source,
      });
    } else {
      updatePayload.routeFeedback = arrayUnion(payload);
    }

    await updateDoc(docRef, updatePayload);
  }

  return reportRef;
};

export const getCarrierRecommendationsForDraft = async (
  delivery: DeliveryDraftInput,
): Promise<CarrierRecommendation[]> => {
  if (!delivery.pickupLocation) return [];

  // Pre-compute route distance once (pickup → dropoff)
  const routeDistanceKm = delivery.deliveryLocation
    ? haversineKm(delivery.pickupLocation, delivery.deliveryLocation)
    : 0;

  const [carriers, activeLoads, managedSegments] = await Promise.all([
    fetchCarrierProfiles(),
    buildActiveDeliveryLoads(),
    fetchManagedSegments(),
  ]);

  // Fetch RTDB live locations + routeStops state for all carriers in parallel
  const carrierIds = carriers.map((c) => c.id);
  const [rtdbLocations, routeStates] = await Promise.all([
    fetchCarrierRtdbLocations(carrierIds),
    fetchCarrierRouteStates(carrierIds),
  ]);

  // Split active loads into already-carrying vs incoming (assigned/accepted)
  const activeByCarrier = activeLoads.reduce<
    Record<
      string,
      {
        count: number;
        carryingWeightKg: number;
        incomingWeightKg: number;
        destinations: LatLngPoint[];
        priorities: string[];
      }
    >
  >((acc, active) => {
    if (!acc[active.carrierId]) {
      acc[active.carrierId] = {
        count: 0,
        carryingWeightKg: 0,
        incomingWeightKg: 0,
        destinations: [],
        priorities: [],
      };
    }
    acc[active.carrierId].count += 1;
    if (active.isCarrying) {
      acc[active.carrierId].carryingWeightKg += active.weightKg || 0;
    } else {
      acc[active.carrierId].incomingWeightKg += active.weightKg || 0;
    }
    if (active.deliveryLocation)
      acc[active.carrierId].destinations.push(active.deliveryLocation);
    if (active.priority) acc[active.carrierId].priorities.push(active.priority);
    return acc;
  }, {});

  return carriers
    .filter((carrier) => {
      const rtdbLoc = rtdbLocations[carrier.id];
      const firestoreLoc = carrier.currentLocation;
      return (
        (rtdbLoc && typeof rtdbLoc.lat === "number") ||
        (firestoreLoc?.lat && firestoreLoc?.lng)
      );
    })
    .map((carrier) => {
      // Prefer RTDB live GPS; fall back to Firestore cached location
      const rtdbLoc = rtdbLocations[carrier.id];
      const firestoreLoc = carrier.currentLocation;
      const locationSource = rtdbLoc ? "rtdb" : "firestore";
      const currentLocation = {
        lat: rtdbLoc?.lat ?? firestoreLoc!.lat,
        lng: rtdbLoc?.lng ?? firestoreLoc!.lng,
        timestamp: rtdbLoc?.timestamp ?? firestoreLoc?.timestamp,
      };

      const activeInfo = activeByCarrier[carrier.id] || {
        count: 0,
        carryingWeightKg: 0,
        incomingWeightKg: 0,
        destinations: [],
        priorities: [],
      };
      const routeState = routeStates[carrier.id];

      const normalizedVehicleType = normalizeVehicleType(carrier.vehicleType);
      const maxWeightKg =
        carrier.maxWeightKg || getVehicleCapacityKg(carrier.vehicleType);
      const maxParcels =
        carrier.maxParcels || getVehicleParcelLimit(carrier.vehicleType);
      const speedKmh = getVehicleSpeedKmh(carrier.vehicleType);
      const distanceToPickupKm = haversineKm(
        currentLocation,
        delivery.pickupLocation!,
      );
      const packageWeightKg = Number(delivery.packageWeightKg || 0);

      // Load: prefer routeStops peak (actual planned load) over simple delivery weight sum
      const deliveryBasedLoad =
        activeInfo.carryingWeightKg + activeInfo.incomingWeightKg;
      const activeLoadWeightKg = Math.max(
        deliveryBasedLoad,
        routeState?.peakPlannedLoadKg ?? 0,
      );
      const remainingCapacityKg = Math.max(0, maxWeightKg - activeLoadWeightKg);
      const overloadKg = Math.max(0, packageWeightKg - remainingCapacityKg);

      // Pending stop count: prefer routeStops count over delivery count
      const pendingStopCount = routeState?.activeStopCount ?? activeInfo.count;

      // Staleness: RTDB is updated every 5s — use tighter freshness threshold
      const staleLocationMinutes = currentLocation.timestamp
        ? Math.max(
            0,
            (Date.now() - currentLocation.timestamp.getTime()) / 60000,
          )
        : 999;
      const freshThresholdMinutes = locationSource === "rtdb" ? 5 : 20;
      const freshLocation = staleLocationMinutes <= freshThresholdMinutes;

      const volumeFactor = parseDimensionsVolumeFactor(
        delivery.packageDimensions,
      );
      const workloadPenalty =
        pendingStopCount * 7 + activeLoadWeightKg * 0.18 + volumeFactor * 2;
      const availabilityPenalty =
        carrier.status === "active" ? 0 : carrier.status === "busy" ? 8 : 120;
      const stalePenalty = freshLocation
        ? 0
        : Math.min(45, staleLocationMinutes * 1.25);
      const parcelPenalty = pendingStopCount >= maxParcels ? 80 : 0;

      const firstDestination = activeInfo.destinations[0];
      let estimatedDetourKm = 0;
      if (firstDestination) {
        const direct = haversineKm(currentLocation, firstDestination);
        const viaPickup =
          haversineKm(currentLocation, delivery.pickupLocation!) +
          haversineKm(delivery.pickupLocation!, firstDestination);
        estimatedDetourKm = Math.max(0, viaPickup - direct);
      }

      if (delivery.deliveryLocation && firstDestination) {
        const viaDropoff =
          haversineKm(currentLocation, delivery.pickupLocation!) +
          haversineKm(delivery.pickupLocation!, delivery.deliveryLocation) +
          haversineKm(delivery.deliveryLocation, firstDestination);
        const direct = haversineKm(currentLocation, firstDestination);
        estimatedDetourKm = Math.max(estimatedDetourKm, viaDropoff - direct);
      }

      const capacityPenalty = overloadKg > 0 ? 400 + overloadKg * 18 : 0;
      const strictPriorityPenalty =
        activeInfo.priorities.some((priority) => isPriorityStrict(priority)) &&
        isPriorityStrict(delivery.priority)
          ? 18
          : 0;
      const routeGovernancePenalty = computeGovernancePenalty(
        carrier,
        delivery,
        managedSegments,
      );
      const shortcutContributionScore = Math.min(
        Number(carrier.routeLearningStats?.shortcutsReported || 0),
        20,
      );
      const costEfficiencyScore = Math.max(
        0,
        18 - estimatedDetourKm * 2.4 - distanceToPickupKm * 0.6,
      );
      const canBundle =
        pendingStopCount > 0 &&
        overloadKg === 0 &&
        pendingStopCount < maxParcels &&
        estimatedDetourKm <= 8 &&
        freshLocation;
      const bundleSuitabilityScore = Math.max(
        0,
        100 -
          estimatedDetourKm * 8 -
          pendingStopCount * 14 -
          stalePenalty -
          strictPriorityPenalty,
      );

      const recommendationScore =
        distanceToPickupKm * 2.25 +
        estimatedDetourKm * 2.9 +
        workloadPenalty +
        availabilityPenalty +
        stalePenalty +
        capacityPenalty +
        parcelPenalty +
        routeGovernancePenalty +
        strictPriorityPenalty -
        shortcutContributionScore * 0.7 -
        costEfficiencyScore * 0.4;

      // ETA and price — both computed in service so coordinator/customer use same values.
      // Use actual linked-list chained distance when available (routeStops subcollection read);
      // fall back to pendingStopCount * 2.5 km per stop if routeStops data is missing.
      const chainedDistanceKm =
        routeState !== undefined
          ? routeState.remainingRouteDistanceKm
          : pendingStopCount * 2.5;
      const estimatedDeliveryHours = Math.max(
        0.5,
        (distanceToPickupKm + routeDistanceKm + chainedDistanceKm) / speedKmh,
      );
      const pv = Number(
        delivery.packageValue || defaultBusinessRules.pricing.baseValueFallback,
      );
      const estimatedPrice = Math.round(
        Math.max(
          defaultBusinessRules.pricing.minimumCharge,
          pv * defaultBusinessRules.pricing.packageValueRate +
            routeDistanceKm * defaultBusinessRules.pricing.distanceRatePerKm,
        ) *
          (1 +
            activeInfo.count *
              defaultBusinessRules.pricing.activeDeliverySurchargeRate),
      );

      const reasonFactors = [
        `${distanceToPickupKm.toFixed(1)}km from pickup`,
        carrier.status === "active"
          ? "available now"
          : `status: ${carrier.status}`,
        `${pendingStopCount} pending stops`,
        `${remainingCapacityKg.toFixed(0)}kg capacity left`,
        locationSource === "rtdb" ? "live GPS" : "cached location",
      ];

      if (estimatedDetourKm > 0.5) {
        reasonFactors.push(`detour ~${estimatedDetourKm.toFixed(1)}km`);
      }
      if (!freshLocation) {
        reasonFactors.push(
          `stale location ${staleLocationMinutes.toFixed(0)}min ago`,
        );
      }
      if (routeGovernancePenalty > 0) {
        reasonFactors.push("route governance restrictions nearby");
      }
      if (shortcutContributionScore > 0) {
        reasonFactors.push(
          `${shortcutContributionScore} shortcut contributions`,
        );
      }
      if (canBundle) {
        reasonFactors.push(
          `bundle fit ${bundleSuitabilityScore.toFixed(0)}/100`,
        );
      }
      if (overloadKg > 0) {
        reasonFactors.push(`over capacity by ${overloadKg.toFixed(1)}kg`);
      }
      if (activeInfo.carryingWeightKg > 0) {
        reasonFactors.push(
          `carrying ${activeInfo.carryingWeightKg.toFixed(1)}kg now`,
        );
      }

      return {
        id: carrier.id,
        fullName: carrier.fullName,
        status: carrier.status,
        vehicleType: carrier.vehicleType || "Unknown",
        carrierCurrentLocation: {
          lat: currentLocation.lat,
          lng: currentLocation.lng,
        },
        normalizedVehicleType,
        recommendationScore: Number(recommendationScore.toFixed(2)),
        recommendationReason: reasonFactors.join(" • "),
        autoAssignable:
          overloadKg === 0 &&
          freshLocation &&
          carrier.status !== "inactive" &&
          recommendationScore < 140,
        distanceToPickupKm: Number(distanceToPickupKm.toFixed(2)),
        estimatedDetourKm: Number(estimatedDetourKm.toFixed(2)),
        activeDeliveries: activeInfo.count,
        activeLoadWeightKg: Number(activeLoadWeightKg.toFixed(1)),
        remainingCapacityKg: Number(remainingCapacityKg.toFixed(1)),
        capacityPenalty: Number(capacityPenalty.toFixed(2)),
        workloadPenalty: Number(workloadPenalty.toFixed(2)),
        availabilityPenalty,
        routeGovernancePenalty,
        costEfficiencyScore: Number(costEfficiencyScore.toFixed(2)),
        bundleSuitabilityScore: Number(bundleSuitabilityScore.toFixed(2)),
        shortcutContributionScore,
        staleLocationMinutes: Number(staleLocationMinutes.toFixed(1)),
        freshLocation,
        canBundle,
        reasonFactors,
        estimatedDeliveryHours: Number(estimatedDeliveryHours.toFixed(1)),
        estimatedPrice,
      } satisfies CarrierRecommendation;
    })
    .filter((carrier) => carrier.status !== "inactive")
    .sort((a, b) => a.recommendationScore - b.recommendationScore)
    .slice(0, 5);
};

export const assignDeliveryIntelligently = async (deliveryId: string) => {
  const deliverySnap = await getDoc(doc(db, "deliveries", deliveryId));
  if (!deliverySnap.exists()) {
    throw new Error("Delivery not found");
  }

  const data = deliverySnap.data() as any;
  const recommendations = await getCarrierRecommendationsForDraft({
    deliveryId,
    trackingCode: data.trackingCode,
    pickupLocation: data.pickupLocation,
    deliveryLocation: data.deliveryLocation,
    pickupAddress: data.pickupAddress,
    deliveryAddress: data.deliveryAddress,
    packageWeightKg: Number(data.packageWeight || 0),
    packageValue: Number(data.packageValue || 0),
    packageDimensions: data.packageDimensions || "",
    priority: data.priority,
  });

  const selected =
    recommendations.find((item) => item.autoAssignable) || recommendations[0];
  if (!selected) {
    throw new Error("No suitable carrier found");
  }

  const timestamp = await writeTimestamp(`deliveries/${deliveryId}/assigned`);
  const timeServiceStatus = getTimeServiceStatus();

  // ── Compute initial ETA from selected carrier's recommendation data ──────
  const etaNowMs = Date.now();
  const ETA_SPEED_KMH = 30;
  const etaPickupMs =
    etaNowMs + (selected.distanceToPickupKm / ETA_SPEED_KMH) * 3_600_000;
  const etaTotalKm =
    selected.estimatedDeliveryHours != null
      ? selected.estimatedDeliveryHours * ETA_SPEED_KMH
      : selected.distanceToPickupKm + selected.estimatedDetourKm;
  const etaDeliveryMs = etaNowMs + (etaTotalKm / ETA_SPEED_KMH) * 3_600_000;
  // ────────────────────────────────────────────────────────────────────────

  let graphSnapshotNodeIds: {
    pickupNodeId?: string;
    dropoffNodeId?: string;
    deliveryCurrentNodeId?: string;
    carrierCurrentNodeId?: string;
  } | null = null;

  try {
    graphSnapshotNodeIds = await buildDeliveryGraphSnapshot({
      deliveryId,
      trackingCode: data.trackingCode,
      pickupAddress: data.pickupAddress,
      deliveryAddress: data.deliveryAddress,
      pickupLocation: data.pickupLocation,
      dropoffLocation: data.deliveryLocation,
      deliveryCurrentLocation: data.currentLocation,
      carrierId: selected.id,
      carrierName: selected.fullName,
      carrierLocation: selected.carrierCurrentLocation,
      packageWeightKg: Number(data.packageWeight || 0),
      urgency:
        (String(data.priority || "normal").toLowerCase() as
          | "low"
          | "normal"
          | "high"
          | "critical") || "normal",
      deadlineAt: data.estimatedDelivery?.toDate?.() || null,
      carrierMaxDailyKm: Number(data?.carrierMaxDailyKm || 0) || undefined,
      carrierTraveledTodayKm:
        Number(data?.carrierTraveledTodayKm || 0) || undefined,
    });
  } catch (graphError) {
    console.warn("Location graph snapshot creation failed:", graphError);
  }

  await updateDoc(doc(db, "deliveries", deliveryId), {
    status: "assigned",
    carrierId: selected.id,
    carrierName: selected.fullName,
    assignedAt: timestamp,
    updatedAt: timestamp,
    timeSource: timeServiceStatus.primarySource,
    eta: {
      pickupEtaMs: etaPickupMs,
      deliveryEtaMs: etaDeliveryMs,
      computedAtMs: etaNowMs,
      source: "assigned",
      distanceToPickupKm: selected.distanceToPickupKm,
      totalDistanceKm: etaTotalKm,
      avgSpeedKmh: ETA_SPEED_KMH,
    },
    locationGraph: {
      schemaVersion: 1,
      mode: "location_nodes",
      nodeRefs: graphSnapshotNodeIds,
      updatedAt: timestamp,
    },
    carrierRecommendations: recommendations.map((carrier, index) => ({
      rank: index + 1,
      carrierId: carrier.id,
      carrierName: carrier.fullName,
      score: carrier.recommendationScore,
      reason: carrier.recommendationReason,
      distanceToPickupKm: carrier.distanceToPickupKm,
      estimatedDetourKm: carrier.estimatedDetourKm,
      activeDeliveries: carrier.activeDeliveries,
      activeLoadWeightKg: carrier.activeLoadWeightKg,
      remainingCapacityKg: carrier.remainingCapacityKg,
      autoAssignable: carrier.autoAssignable,
      canBundle: carrier.canBundle,
      costEfficiencyScore: carrier.costEfficiencyScore,
      bundleSuitabilityScore: carrier.bundleSuitabilityScore,
      routeGovernancePenalty: carrier.routeGovernancePenalty,
      staleLocationMinutes: carrier.staleLocationMinutes,
      vehicleType: carrier.vehicleType,
      status: carrier.status,
      carrierCurrentLocation: carrier.carrierCurrentLocation || null,
    })),
    optimizationReasons: arrayUnion({
      type: "carrier_assignment",
      reason: `Smart-assigned to ${selected.fullName}: ${selected.recommendationReason}`,
      timestamp,
      carrierId: selected.id,
      carrierName: selected.fullName,
      details: {
        distanceKm: selected.distanceToPickupKm,
        estimatedDetourKm: selected.estimatedDetourKm,
        activeDeliveries: selected.activeDeliveries,
        activeLoadWeightKg: selected.activeLoadWeightKg,
        remainingCapacityKg: selected.remainingCapacityKg,
        costEfficiencyScore: selected.costEfficiencyScore,
        bundleSuitabilityScore: selected.bundleSuitabilityScore,
        routeGovernancePenalty: selected.routeGovernancePenalty,
        factors: selected.reasonFactors,
      },
    }),
  });

  let graphSyncResult: DeliveryGraphSyncResult | null = null;
  try {
    graphSyncResult = await syncDeliveryLocationGraphStructure({
      deliveryId,
      trigger: "assigned",
    });
  } catch (syncError) {
    console.warn("Graph sync after assignment failed:", syncError);
  }

  return { selected, recommendations, graphSyncResult };
};

export const recommendReassignmentCandidates = async (
  delivery: DeliveryDraftInput & {
    carrierId?: string | null;
    currentLocation?: LatLngPoint | null;
  },
) => {
  const effectivePickup = delivery.currentLocation || delivery.pickupLocation;
  const recommendations = await getCarrierRecommendationsForDraft({
    ...delivery,
    pickupLocation: effectivePickup || delivery.pickupLocation,
  });
  return recommendations
    .filter((candidate) => candidate.id !== delivery.carrierId)
    .slice(0, 3);
};

export const getRouteGovernanceOverview = async () => {
  const [segments, reports] = await Promise.all([
    fetchManagedSegments(),
    getDocs(collection(db, "routeReports")),
  ]);

  const reportItems = reports.docs.map((docSnap) =>
    mapRouteReport(docSnap.id, docSnap.data()),
  );

  return {
    segments,
    reports: reportItems,
    stats: {
      activeShortcuts: segments.filter(
        (segment) => segment.type === "shortcut" && segment.status === "active",
      ).length,
      blockedPaths: segments.filter(
        (segment) =>
          segment.type === "blocked_path" && segment.status === "active",
      ).length,
      vehicleRestricted: segments.filter(
        (segment) => segment.allowedVehicleTypes.length > 0,
      ).length,
      openReports: reportItems.filter((report) => report.status === "open")
        .length,
    },
  };
};
