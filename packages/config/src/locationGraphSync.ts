import {
  Timestamp,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  computeRouteOptimizationScore,
  type LocationNodeCoordinates,
  type LocationNodeEdgeCost,
} from "./locationGraph";
import { db } from "./index";

const LOCATION_NODES_COLLECTION = "locationNodes";
const LOCATION_NODE_EDGES_COLLECTION = "locationNodeEdges";

export type GraphSyncTrigger =
  | "manual_sync"
  | "assigned"
  | "accepted"
  | "picked_up"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "status_change";

export interface DeliveryGraphSyncResult {
  deliveryId: string;
  trigger: GraphSyncTrigger;
  success: boolean;
  message: string;
  warnings: string[];
  nodeRefs?: {
    pickupNodeId?: string;
    dropoffNodeId?: string;
    deliveryCurrentNodeId?: string;
    carrierCurrentNodeId?: string;
  };
  edgesSynced: number;
}

export interface BulkGraphSyncResult {
  attempted: number;
  succeeded: number;
  failed: number;
  trigger: GraphSyncTrigger;
  results: DeliveryGraphSyncResult[];
}

const haversineKm = (
  from: LocationNodeCoordinates,
  to: LocationNodeCoordinates,
) => {
  const dLat = ((to.lat - from.lat) * Math.PI) / 180;
  const dLng = ((to.lng - from.lng) * Math.PI) / 180;
  const lat1 = (from.lat * Math.PI) / 180;
  const lat2 = (to.lat * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

  return 6371 * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

const toCoords = (value: any): LocationNodeCoordinates | null => {
  if (
    !value ||
    typeof value.lat !== "number" ||
    typeof value.lng !== "number"
  ) {
    return null;
  }

  return { lat: value.lat, lng: value.lng };
};

const buildCosts = (
  from: LocationNodeCoordinates,
  to: LocationNodeCoordinates,
  base?: Partial<LocationNodeEdgeCost>,
): LocationNodeEdgeCost => {
  const roadDistanceKm = Number(
    (base?.roadDistanceKm || haversineKm(from, to) * 1.28).toFixed(3),
  );
  const optimizedDistanceKm = Number(
    (base?.optimizedDistanceKm !== undefined
      ? base.optimizedDistanceKm
      : roadDistanceKm * 0.94
    ).toFixed(3),
  );
  const estimatedDurationMin = Number(
    (base?.estimatedDurationMin !== undefined
      ? base.estimatedDurationMin
      : roadDistanceKm * 2.2
    ).toFixed(2),
  );
  const fuelCostEstimate = Number(
    (base?.fuelCostEstimate !== undefined
      ? base.fuelCostEstimate
      : roadDistanceKm * 0.18
    ).toFixed(3),
  );

  return {
    roadDistanceKm,
    optimizedDistanceKm,
    estimatedDurationMin,
    fuelCostEstimate,
    slopeScore: Number((base?.slopeScore ?? 0).toFixed(3)),
    roadQualityScore: Number((base?.roadQualityScore ?? 6).toFixed(3)),
    safetyScore: Number((base?.safetyScore ?? 6).toFixed(3)),
    trafficScore: Number((base?.trafficScore ?? 0).toFixed(3)),
    weatherScore: Number((base?.weatherScore ?? 0).toFixed(3)),
  };
};

const upsertNode = async (input: {
  deliveryId?: string;
  nodeType: string;
  name: string;
  coordinates: LocationNodeCoordinates;
  entityType?: "delivery" | "carrier" | "customer" | "route" | "system";
  entityId?: string;
  description?: string;
  urgency?: "low" | "normal" | "high" | "critical";
  packageWeightKg?: number;
  deadlineAt?: Date | null;
  capacity?: {
    maxDailyKm?: number;
    traveledTodayKm?: number;
    remainingDailyKm?: number;
  };
}) => {
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
        capacity: input.capacity || null,
        deliveryConstraints:
          input.entityType === "delivery"
            ? {
                urgency: input.urgency || "normal",
                deadlineAt: input.deadlineAt || null,
                packageWeightKg: Number(input.packageWeightKg || 0),
              }
            : null,
        updatedFromRealtime: true,
        lastRealtimeTsMs: Date.now(),
        status: "active",
        updatedAt: now,
      });

      return target.id;
    }
  }

  const created = doc(collection(db, LOCATION_NODES_COLLECTION));
  await setDoc(created, {
    nodeType: input.nodeType,
    status: "active",
    name: input.name,
    coordinates: input.coordinates,
    deliveryId: input.deliveryId || null,
    entityType: input.entityType || null,
    entityId: input.entityId || null,
    description: input.description || "",
    tags: [],
    capacity: input.capacity || null,
    deliveryConstraints:
      input.entityType === "delivery"
        ? {
            urgency: input.urgency || "normal",
            deadlineAt: input.deadlineAt || null,
            packageWeightKg: Number(input.packageWeightKg || 0),
          }
        : null,
    updatedFromRealtime: true,
    lastRealtimeTsMs: Date.now(),
    createdAt: now,
    updatedAt: now,
  });

  return created.id;
};

const upsertEdge = async (input: {
  deliveryId?: string;
  fromNodeId: string;
  toNodeId: string;
  costs: LocationNodeEdgeCost;
  trigger: GraphSyncTrigger;
}) => {
  const now = Timestamp.now();
  const existing = await getDocs(
    query(
      collection(db, LOCATION_NODE_EDGES_COLLECTION),
      where("fromNodeId", "==", input.fromNodeId),
      where("toNodeId", "==", input.toNodeId),
      where("deliveryId", "==", input.deliveryId || null),
    ),
  );

  const optimizationScore = computeRouteOptimizationScore({
    roadDistanceKm: input.costs.roadDistanceKm,
    optimizedDistanceKm: input.costs.optimizedDistanceKm,
    estimatedDurationMin: input.costs.estimatedDurationMin,
    fuelCostEstimate: input.costs.fuelCostEstimate,
    slopeScore: input.costs.slopeScore,
    roadQualityScore: input.costs.roadQualityScore,
    safetyScore: input.costs.safetyScore,
    trafficScore: input.costs.trafficScore,
    weatherScore: input.costs.weatherScore,
  });

  const payload = {
    deliveryId: input.deliveryId || null,
    fromNodeId: input.fromNodeId,
    toNodeId: input.toNodeId,
    status: "active",
    directed: false,
    source: "hybrid",
    costs: input.costs,
    metadata: {
      algorithm: "graph_sync_v1",
      confidence: 0.82,
      notes: `Synced via trigger: ${input.trigger}`,
      optimizationScore,
      lastSyncTrigger: input.trigger,
    },
    validFrom: now,
    updatedAt: now,
  };

  if (!existing.empty) {
    await updateDoc(
      doc(db, LOCATION_NODE_EDGES_COLLECTION, existing.docs[0].id),
      payload,
    );
    return;
  }

  const created = doc(collection(db, LOCATION_NODE_EDGES_COLLECTION));
  await setDoc(created, {
    ...payload,
    createdAt: now,
  });
};

const upsertBidirectionalEdge = async (input: {
  deliveryId?: string;
  aNodeId: string;
  bNodeId: string;
  abCosts: LocationNodeEdgeCost;
  baCosts?: LocationNodeEdgeCost;
  trigger: GraphSyncTrigger;
}) => {
  await Promise.all([
    upsertEdge({
      deliveryId: input.deliveryId,
      fromNodeId: input.aNodeId,
      toNodeId: input.bNodeId,
      costs: input.abCosts,
      trigger: input.trigger,
    }),
    upsertEdge({
      deliveryId: input.deliveryId,
      fromNodeId: input.bNodeId,
      toNodeId: input.aNodeId,
      costs: input.baCosts || input.abCosts,
      trigger: input.trigger,
    }),
  ]);
};

export const syncDeliveryLocationGraphStructure = async (input: {
  deliveryId: string;
  trigger: GraphSyncTrigger;
}): Promise<DeliveryGraphSyncResult> => {
  const warnings: string[] = [];

  try {
    const deliveryRef = doc(db, "deliveries", input.deliveryId);
    const deliverySnap = await getDoc(deliveryRef);

    if (!deliverySnap.exists()) {
      return {
        deliveryId: input.deliveryId,
        trigger: input.trigger,
        success: false,
        message: "Delivery not found",
        warnings,
        edgesSynced: 0,
      };
    }

    const data = deliverySnap.data() as any;
    const pickup = toCoords(data.pickupLocation);
    const dropoff = toCoords(data.deliveryLocation);
    const current = toCoords(data.currentLocation);

    if (!pickup) warnings.push("Missing pickup coordinates");
    if (!dropoff) warnings.push("Missing dropoff coordinates");

    let carrierLocation = toCoords(
      data.carrierCurrentLocation || data.currentCarrierLocation,
    );
    if (!carrierLocation && data.carrierId) {
      const carrierSnap = await getDoc(doc(db, "users", data.carrierId));
      if (carrierSnap.exists()) {
        carrierLocation = toCoords(
          (carrierSnap.data() as any)?.currentLocation,
        );
      }
    }

    if (!carrierLocation) warnings.push("Missing carrier current coordinates");

    const pickupNodeId = pickup
      ? await upsertNode({
          deliveryId: input.deliveryId,
          nodeType: "pickup",
          name:
            data.pickupAddress ||
            `Pickup • ${data.trackingCode || input.deliveryId}`,
          coordinates: pickup,
          entityType: "delivery",
          entityId: `${input.deliveryId}:pickup`,
          description: `Pickup node for ${data.trackingCode || input.deliveryId}`,
          urgency: String(data.priority || "normal").toLowerCase() as
            | "low"
            | "normal"
            | "high"
            | "critical",
          packageWeightKg: Number(data.packageWeight || 0),
          deadlineAt: data.deliveryDate?.toDate?.() || null,
        })
      : undefined;

    const dropoffNodeId = dropoff
      ? await upsertNode({
          deliveryId: input.deliveryId,
          nodeType: "dropoff",
          name:
            data.deliveryAddress ||
            `Dropoff • ${data.trackingCode || input.deliveryId}`,
          coordinates: dropoff,
          entityType: "delivery",
          entityId: `${input.deliveryId}:dropoff`,
          description: `Dropoff node for ${data.trackingCode || input.deliveryId}`,
          urgency: String(data.priority || "normal").toLowerCase() as
            | "low"
            | "normal"
            | "high"
            | "critical",
          packageWeightKg: Number(data.packageWeight || 0),
          deadlineAt: data.deliveryDate?.toDate?.() || null,
        })
      : undefined;

    const deliveryCurrentNodeId = current
      ? await upsertNode({
          deliveryId: input.deliveryId,
          nodeType: "delivery_current",
          name: `Delivery current • ${data.trackingCode || input.deliveryId}`,
          coordinates: current,
          entityType: "delivery",
          entityId: `${input.deliveryId}:current`,
          description: `Current delivery position for ${data.trackingCode || input.deliveryId}`,
        })
      : undefined;

    const carrierCurrentNodeId = carrierLocation
      ? await upsertNode({
          deliveryId: input.deliveryId,
          nodeType: "carrier_current",
          name: data.carrierName || "Carrier current",
          coordinates: carrierLocation,
          entityType: "carrier",
          entityId: data.carrierId,
          description: `Carrier node for ${data.carrierName || data.carrierId || "carrier"}`,
          capacity: {
            maxDailyKm: Number(data.carrierMaxDailyKm || 0) || undefined,
            traveledTodayKm:
              Number(data.carrierTraveledTodayKm || 0) || undefined,
            remainingDailyKm:
              Number(data.carrierMaxDailyKm || 0) > 0
                ? Math.max(
                    0,
                    Number(data.carrierMaxDailyKm || 0) -
                      Number(data.carrierTraveledTodayKm || 0),
                  )
                : undefined,
          },
        })
      : undefined;

    let edgesSynced = 0;

    if (pickupNodeId && dropoffNodeId && pickup && dropoff) {
      await upsertBidirectionalEdge({
        deliveryId: input.deliveryId,
        aNodeId: pickupNodeId,
        bNodeId: dropoffNodeId,
        abCosts: buildCosts(pickup, dropoff),
        trigger: input.trigger,
      });
      edgesSynced += 2;
    }

    if (carrierCurrentNodeId && pickupNodeId && carrierLocation && pickup) {
      await upsertBidirectionalEdge({
        deliveryId: input.deliveryId,
        aNodeId: carrierCurrentNodeId,
        bNodeId: pickupNodeId,
        abCosts: buildCosts(carrierLocation, pickup),
        trigger: input.trigger,
      });
      edgesSynced += 2;
    }

    if (carrierCurrentNodeId && dropoffNodeId && carrierLocation && dropoff) {
      await upsertBidirectionalEdge({
        deliveryId: input.deliveryId,
        aNodeId: carrierCurrentNodeId,
        bNodeId: dropoffNodeId,
        abCosts: buildCosts(carrierLocation, dropoff),
        trigger: input.trigger,
      });
      edgesSynced += 2;
    }

    if (deliveryCurrentNodeId && dropoffNodeId && current && dropoff) {
      await upsertBidirectionalEdge({
        deliveryId: input.deliveryId,
        aNodeId: deliveryCurrentNodeId,
        bNodeId: dropoffNodeId,
        abCosts: buildCosts(current, dropoff),
        trigger: input.trigger,
      });
      edgesSynced += 2;
    }

    const now = Timestamp.now();
    await updateDoc(deliveryRef, {
      locationGraph: {
        schemaVersion: 1,
        mode: "location_nodes",
        syncVersion: "graph_sync_v1",
        trigger: input.trigger,
        status: "success",
        nodeRefs: {
          pickupNodeId,
          dropoffNodeId,
          deliveryCurrentNodeId,
          carrierCurrentNodeId,
        },
        warnings,
        edgesSynced,
        updatedAt: now,
      },
      optimizationReasons: arrayUnion({
        type: "route_optimization",
        reason: `Graph sync successful (${input.trigger})`,
        timestamp: now,
        details: {
          trigger: input.trigger,
          warnings,
          edgesSynced,
          nodesSynced: [
            pickupNodeId,
            dropoffNodeId,
            deliveryCurrentNodeId,
            carrierCurrentNodeId,
          ].filter(Boolean).length,
        },
      }),
      updatedAt: now,
    });

    return {
      deliveryId: input.deliveryId,
      trigger: input.trigger,
      success: true,
      message: "Graph structure synchronized",
      warnings,
      nodeRefs: {
        pickupNodeId,
        dropoffNodeId,
        deliveryCurrentNodeId,
        carrierCurrentNodeId,
      },
      edgesSynced,
    };
  } catch (error: any) {
    const message = error?.message || "Unknown graph sync error";

    try {
      await updateDoc(doc(db, "deliveries", input.deliveryId), {
        locationGraph: {
          schemaVersion: 1,
          mode: "location_nodes",
          syncVersion: "graph_sync_v1",
          trigger: input.trigger,
          status: "failed",
          error: message,
          warnings,
          updatedAt: Timestamp.now(),
        },
        optimizationReasons: arrayUnion({
          type: "route_optimization",
          reason: `Graph sync failed (${input.trigger}): ${message}`,
          timestamp: Timestamp.now(),
          details: {
            trigger: input.trigger,
            warnings,
          },
        }),
      });
    } catch {
      // ignore nested logging errors
    }

    return {
      deliveryId: input.deliveryId,
      trigger: input.trigger,
      success: false,
      message,
      warnings,
      edgesSynced: 0,
    };
  }
};

export const syncSystemLocationGraphStructures = async (input?: {
  statuses?: string[];
  trigger?: GraphSyncTrigger;
  limit?: number;
}): Promise<BulkGraphSyncResult> => {
  const trigger = input?.trigger || "manual_sync";
  const statuses = input?.statuses || [
    "pending",
    "created",
    "assigned",
    "accepted",
    "picked_up",
    "in_transit",
    "out_for_delivery",
    "delivered",
    "waiting_for_pickup",
  ];

  const snap = await getDocs(
    query(
      collection(db, "deliveries"),
      where("status", "in", statuses.slice(0, 10)),
    ),
  );

  const docs = input?.limit ? snap.docs.slice(0, input.limit) : snap.docs;
  const results: DeliveryGraphSyncResult[] = [];

  for (const docSnap of docs) {
    const result = await syncDeliveryLocationGraphStructure({
      deliveryId: docSnap.id,
      trigger,
    });
    results.push(result);
  }

  const succeeded = results.filter((result) => result.success).length;
  const failed = results.length - succeeded;

  return {
    attempted: results.length,
    succeeded,
    failed,
    trigger,
    results,
  };
};
