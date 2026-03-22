import {
  db,
  realtimeDb,
  computeRouteOptimizationScore,
  type DeliveryConstraintProfile,
  type LocationNode,
  type LocationNodeCoordinates,
  type LocationNodeEdge,
  type LocationNodeEdgeCost,
  type LocationNodeType,
} from "@config";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { ref as rtdbRef, set as rtdbSet } from "firebase/database";
import { haversineKm } from "../routeHistory";

const LOCATION_NODES_COLLECTION = "locationNodes";
const LOCATION_NODE_EDGES_COLLECTION = "locationNodeEdges";

interface UpsertLocationNodeInput {
  deliveryId?: string;
  nodeType: LocationNodeType;
  name: string;
  coordinates: LocationNodeCoordinates;
  entityType?: "delivery" | "carrier" | "customer" | "route" | "system";
  entityId?: string;
  description?: string;
  tags?: string[];
  capacity?: LocationNode["capacity"];
  deliveryConstraints?: DeliveryConstraintProfile;
  updatedFromRealtime?: boolean;
  lastRealtimeTsMs?: number;
}

interface UpsertLocationNodeEdgeInput {
  deliveryId?: string;
  fromNodeId: string;
  toNodeId: string;
  directed?: boolean;
  source?: "google_maps" | "learned" | "manual" | "hybrid";
  status?: "active" | "stale" | "blocked";
  costs: LocationNodeEdgeCost;
  metadata?: LocationNodeEdge["metadata"];
  validUntil?: Timestamp | Date;
}

interface BuildDeliveryGraphInput {
  deliveryId: string;
  trackingCode?: string;
  pickupAddress?: string;
  deliveryAddress?: string;
  pickupLocation?: LocationNodeCoordinates | null;
  dropoffLocation?: LocationNodeCoordinates | null;
  deliveryCurrentLocation?: LocationNodeCoordinates | null;
  carrierId?: string;
  carrierName?: string;
  carrierLocation?: LocationNodeCoordinates | null;
  packageWeightKg?: number;
  urgency?: "low" | "normal" | "high" | "critical";
  deadlineAt?: Date | null;
  carrierMaxDailyKm?: number;
  carrierTraveledTodayKm?: number;
  relationshipCosts?: {
    pickupToDropoff?: Partial<LocationNodeEdgeCost>;
    carrierToPickup?: Partial<LocationNodeEdgeCost>;
    carrierToDropoff?: Partial<LocationNodeEdgeCost>;
    deliveryCurrentToDropoff?: Partial<LocationNodeEdgeCost>;
  };
}

const normalizeNode = (id: string, data: any): LocationNode => ({
  id,
  nodeType: data.nodeType,
  status: data.status || "active",
  name: data.name || "Location node",
  coordinates: data.coordinates,
  entityType: data.entityType,
  entityId: data.entityId,
  description: data.description,
  tags: Array.isArray(data.tags) ? data.tags : [],
  capacity: data.capacity,
  deliveryConstraints: data.deliveryConstraints,
  updatedFromRealtime: !!data.updatedFromRealtime,
  lastRealtimeTsMs: Number(data.lastRealtimeTsMs || 0) || undefined,
  createdAt: data.createdAt,
  updatedAt: data.updatedAt,
});

const normalizeEdge = (id: string, data: any): LocationNodeEdge => ({
  id,
  fromNodeId: data.fromNodeId,
  toNodeId: data.toNodeId,
  status: data.status || "active",
  directed: data.directed !== false,
  costs: data.costs,
  source: data.source || "google_maps",
  validFrom: data.validFrom,
  validUntil: data.validUntil,
  metadata: data.metadata,
  updatedAt: data.updatedAt,
  createdAt: data.createdAt,
});

const mergeEdgeCosts = (
  from: LocationNodeCoordinates,
  to: LocationNodeCoordinates,
  partial?: Partial<LocationNodeEdgeCost>,
): LocationNodeEdgeCost => {
  const fallbackRoadDistanceKm = haversineKm(from, to) * 1.28;
  const roadDistanceKm = Number(
    partial?.roadDistanceKm || fallbackRoadDistanceKm,
  );

  return {
    roadDistanceKm: Number(roadDistanceKm.toFixed(3)),
    optimizedDistanceKm:
      partial?.optimizedDistanceKm !== undefined
        ? Number(partial.optimizedDistanceKm.toFixed(3))
        : Number((roadDistanceKm * 0.94).toFixed(3)),
    estimatedDurationMin:
      partial?.estimatedDurationMin !== undefined
        ? Number(partial.estimatedDurationMin.toFixed(2))
        : Number((roadDistanceKm * 2.2).toFixed(2)),
    fuelCostEstimate:
      partial?.fuelCostEstimate !== undefined
        ? Number(partial.fuelCostEstimate.toFixed(3))
        : Number((roadDistanceKm * 0.18).toFixed(3)),
    slopeScore: Number((partial?.slopeScore ?? 0).toFixed(3)),
    roadQualityScore: Number((partial?.roadQualityScore ?? 6).toFixed(3)),
    safetyScore: Number((partial?.safetyScore ?? 6).toFixed(3)),
    trafficScore: Number((partial?.trafficScore ?? 0).toFixed(3)),
    weatherScore: Number((partial?.weatherScore ?? 0).toFixed(3)),
  };
};

const applyOptimizationMetadata = (costs: LocationNodeEdgeCost) => {
  const optimizationScore = computeRouteOptimizationScore({
    roadDistanceKm: costs.roadDistanceKm,
    optimizedDistanceKm: costs.optimizedDistanceKm,
    estimatedDurationMin: costs.estimatedDurationMin,
    fuelCostEstimate: costs.fuelCostEstimate,
    slopeScore: costs.slopeScore,
    roadQualityScore: costs.roadQualityScore,
    safetyScore: costs.safetyScore,
    trafficScore: costs.trafficScore,
    weatherScore: costs.weatherScore,
  });

  return {
    optimizationScore,
    distanceSavingKm: Number(
      Math.max(
        0,
        (costs.roadDistanceKm || 0) -
          (costs.optimizedDistanceKm || costs.roadDistanceKm),
      ).toFixed(3),
    ),
    distanceSavingPct: Number(
      (costs.roadDistanceKm > 0
        ? Math.max(
            0,
            ((costs.roadDistanceKm -
              (costs.optimizedDistanceKm || costs.roadDistanceKm)) /
              costs.roadDistanceKm) *
              100,
          )
        : 0
      ).toFixed(2),
    ),
  };
};

export const subscribeLocationNodes = (
  callback: (nodes: LocationNode[]) => void,
) => {
  return onSnapshot(collection(db, LOCATION_NODES_COLLECTION), (snapshot) => {
    callback(
      snapshot.docs.map((docSnap) => normalizeNode(docSnap.id, docSnap.data())),
    );
  });
};

export const subscribeLocationNodeEdges = (
  callback: (edges: LocationNodeEdge[]) => void,
) => {
  return onSnapshot(
    collection(db, LOCATION_NODE_EDGES_COLLECTION),
    (snapshot) => {
      callback(
        snapshot.docs.map((docSnap) =>
          normalizeEdge(docSnap.id, docSnap.data()),
        ),
      );
    },
  );
};

export const upsertLocationNode = async (
  input: UpsertLocationNodeInput,
): Promise<{ id: string; created: boolean }> => {
  const now = Timestamp.now();

  if (input.entityType && input.entityId) {
    const existing = await getDocs(
      query(
        collection(db, LOCATION_NODES_COLLECTION),
        where("entityType", "==", input.entityType),
        where("entityId", "==", input.entityId),
      ),
    );

    if (!existing.empty) {
      const target = existing.docs[0];
      await updateDoc(doc(db, LOCATION_NODES_COLLECTION, target.id), {
        nodeType: input.nodeType,
        name: input.name,
        coordinates: input.coordinates,
        deliveryId: input.deliveryId || null,
        description: input.description || "",
        tags: input.tags || [],
        capacity: input.capacity || null,
        deliveryConstraints: input.deliveryConstraints || null,
        updatedFromRealtime: !!input.updatedFromRealtime,
        lastRealtimeTsMs: input.lastRealtimeTsMs || null,
        status: "active",
        updatedAt: now,
      });
      return { id: target.id, created: false };
    }
  }

  const created = await addDoc(collection(db, LOCATION_NODES_COLLECTION), {
    nodeType: input.nodeType,
    status: "active",
    name: input.name,
    coordinates: input.coordinates,
    deliveryId: input.deliveryId || null,
    entityType: input.entityType || null,
    entityId: input.entityId || null,
    description: input.description || "",
    tags: input.tags || [],
    capacity: input.capacity || null,
    deliveryConstraints: input.deliveryConstraints || null,
    updatedFromRealtime: !!input.updatedFromRealtime,
    lastRealtimeTsMs: input.lastRealtimeTsMs || null,
    createdAt: now,
    updatedAt: now,
  });

  return { id: created.id, created: true };
};

export const upsertLocationNodeEdge = async (
  input: UpsertLocationNodeEdgeInput,
): Promise<{ id: string; created: boolean }> => {
  const now = Timestamp.now();
  const edgeQ = query(
    collection(db, LOCATION_NODE_EDGES_COLLECTION),
    where("fromNodeId", "==", input.fromNodeId),
    where("toNodeId", "==", input.toNodeId),
    where("deliveryId", "==", input.deliveryId || null),
  );

  const existing = await getDocs(edgeQ);
  const metadata = {
    ...input.metadata,
    ...applyOptimizationMetadata(input.costs),
  };

  if (!existing.empty) {
    const target = existing.docs[0];
    await updateDoc(doc(db, LOCATION_NODE_EDGES_COLLECTION, target.id), {
      status: input.status || "active",
      directed: input.directed !== false,
      source: input.source || "google_maps",
      costs: input.costs,
      metadata,
      validUntil: input.validUntil || null,
      updatedAt: now,
    });

    return { id: target.id, created: false };
  }

  const created = await addDoc(collection(db, LOCATION_NODE_EDGES_COLLECTION), {
    deliveryId: input.deliveryId || null,
    fromNodeId: input.fromNodeId,
    toNodeId: input.toNodeId,
    status: input.status || "active",
    directed: input.directed !== false,
    source: input.source || "google_maps",
    costs: input.costs,
    metadata,
    validFrom: now,
    validUntil: input.validUntil || null,
    createdAt: now,
    updatedAt: now,
  });

  return { id: created.id, created: true };
};

export const upsertBidirectionalNodeEdge = async (
  deliveryId: string | undefined,
  aNodeId: string,
  bNodeId: string,
  costsAB: LocationNodeEdgeCost,
  costsBA?: LocationNodeEdgeCost,
  source: "google_maps" | "learned" | "manual" | "hybrid" = "google_maps",
) => {
  const [ab, ba] = await Promise.all([
    upsertLocationNodeEdge({
      deliveryId,
      fromNodeId: aNodeId,
      toNodeId: bNodeId,
      directed: false,
      source,
      costs: costsAB,
    }),
    upsertLocationNodeEdge({
      deliveryId,
      fromNodeId: bNodeId,
      toNodeId: aNodeId,
      directed: false,
      source,
      costs: costsBA || costsAB,
    }),
  ]);

  return { ab, ba };
};

export const updateRealtimeLocationNodePosition = async (
  nodeId: string,
  coordinates: LocationNodeCoordinates,
) => {
  const now = Date.now();

  await Promise.all([
    updateDoc(doc(db, LOCATION_NODES_COLLECTION, nodeId), {
      coordinates,
      updatedFromRealtime: true,
      lastRealtimeTsMs: now,
      updatedAt: Timestamp.now(),
    }),
    rtdbSet(rtdbRef(realtimeDb, `locationNodeLive/${nodeId}`), {
      lat: coordinates.lat,
      lng: coordinates.lng,
      timestampMs: now,
      timestampISO: new Date(now).toISOString(),
    }),
  ]);
};

export const buildDeliveryGraphSnapshot = async (
  input: BuildDeliveryGraphInput,
) => {
  const pickup = input.pickupLocation
    ? await upsertLocationNode({
        deliveryId: input.deliveryId,
        nodeType: "pickup",
        name:
          input.pickupAddress ||
          `Pickup • ${input.trackingCode || input.deliveryId}`,
        coordinates: input.pickupLocation,
        entityType: "delivery",
        entityId: `${input.deliveryId}:pickup`,
        description: `Pickup node for ${input.trackingCode || input.deliveryId}`,
      })
    : null;

  const dropoff = input.dropoffLocation
    ? await upsertLocationNode({
        deliveryId: input.deliveryId,
        nodeType: "dropoff",
        name:
          input.deliveryAddress ||
          `Dropoff • ${input.trackingCode || input.deliveryId}`,
        coordinates: input.dropoffLocation,
        entityType: "delivery",
        entityId: `${input.deliveryId}:dropoff`,
        description: `Dropoff node for ${input.trackingCode || input.deliveryId}`,
        deliveryConstraints: {
          urgency: input.urgency || "normal",
          deadlineAt: input.deadlineAt || null,
          packageWeightKg: Number(input.packageWeightKg || 0),
        },
      })
    : null;

  const deliveryCurrent = input.deliveryCurrentLocation
    ? await upsertLocationNode({
        deliveryId: input.deliveryId,
        nodeType: "delivery_current",
        name: `Delivery current • ${input.trackingCode || input.deliveryId}`,
        coordinates: input.deliveryCurrentLocation,
        entityType: "delivery",
        entityId: `${input.deliveryId}:current`,
        description: `Live delivery position for ${input.trackingCode || input.deliveryId}`,
        updatedFromRealtime: true,
        lastRealtimeTsMs: Date.now(),
      })
    : null;

  const carrierCurrent = input.carrierLocation
    ? await upsertLocationNode({
        deliveryId: input.deliveryId,
        nodeType: "carrier_current",
        name: input.carrierName || "Carrier current",
        coordinates: input.carrierLocation,
        entityType: "carrier",
        entityId: input.carrierId,
        description: `Live carrier position for ${input.carrierName || input.carrierId || "carrier"}`,
        capacity: {
          maxDailyKm: input.carrierMaxDailyKm,
          traveledTodayKm: input.carrierTraveledTodayKm,
          remainingDailyKm:
            typeof input.carrierMaxDailyKm === "number"
              ? Math.max(
                  0,
                  Number(input.carrierMaxDailyKm || 0) -
                    Number(input.carrierTraveledTodayKm || 0),
                )
              : undefined,
        },
        updatedFromRealtime: true,
        lastRealtimeTsMs: Date.now(),
      })
    : null;

  const edgeWrites: Array<Promise<any>> = [];

  if (pickup && dropoff && input.pickupLocation && input.dropoffLocation) {
    edgeWrites.push(
      upsertBidirectionalNodeEdge(
        input.deliveryId,
        pickup.id,
        dropoff.id,
        mergeEdgeCosts(
          input.pickupLocation,
          input.dropoffLocation,
          input.relationshipCosts?.pickupToDropoff,
        ),
      ),
    );
  }

  if (
    carrierCurrent &&
    pickup &&
    input.carrierLocation &&
    input.pickupLocation
  ) {
    edgeWrites.push(
      upsertBidirectionalNodeEdge(
        input.deliveryId,
        carrierCurrent.id,
        pickup.id,
        mergeEdgeCosts(
          input.carrierLocation,
          input.pickupLocation,
          input.relationshipCosts?.carrierToPickup,
        ),
      ),
    );
  }

  if (
    carrierCurrent &&
    dropoff &&
    input.carrierLocation &&
    input.dropoffLocation
  ) {
    edgeWrites.push(
      upsertBidirectionalNodeEdge(
        input.deliveryId,
        carrierCurrent.id,
        dropoff.id,
        mergeEdgeCosts(
          input.carrierLocation,
          input.dropoffLocation,
          input.relationshipCosts?.carrierToDropoff,
        ),
      ),
    );
  }

  if (
    deliveryCurrent &&
    dropoff &&
    input.deliveryCurrentLocation &&
    input.dropoffLocation
  ) {
    edgeWrites.push(
      upsertBidirectionalNodeEdge(
        input.deliveryId,
        deliveryCurrent.id,
        dropoff.id,
        mergeEdgeCosts(
          input.deliveryCurrentLocation,
          input.dropoffLocation,
          input.relationshipCosts?.deliveryCurrentToDropoff,
        ),
      ),
    );
  }

  if (edgeWrites.length) {
    await Promise.all(edgeWrites);
  }

  return {
    pickupNodeId: pickup?.id,
    dropoffNodeId: dropoff?.id,
    deliveryCurrentNodeId: deliveryCurrent?.id,
    carrierCurrentNodeId: carrierCurrent?.id,
  };
};
