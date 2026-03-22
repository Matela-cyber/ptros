import { Timestamp } from "firebase/firestore";

export type LocationNodeType =
  | "pickup"
  | "dropoff"
  | "delivery_current"
  | "carrier_current"
  | "hub"
  | "known_location"
  | "waypoint";

export type LocationNodeStatus = "active" | "inactive" | "archived";

export type LocationEdgeStatus = "active" | "stale" | "blocked";

export interface LocationNodeCoordinates {
  lat: number;
  lng: number;
}

export interface LocationNodeCapacity {
  maxDailyKm?: number;
  traveledTodayKm?: number;
  remainingDailyKm?: number;
  maxWeightKg?: number;
  currentLoadKg?: number;
  remainingWeightKg?: number;
  activeDeliveries?: number;
}

export interface DeliveryConstraintProfile {
  urgency?: "low" | "normal" | "high" | "critical";
  deadlineAt?: Timestamp | Date | null;
  packageWeightKg?: number;
  fuelCostWeight?: number;
  slopeRiskWeight?: number;
  roadQualityWeight?: number;
  safetyWeight?: number;
}

export interface LocationNode {
  id: string;
  nodeType: LocationNodeType;
  status: LocationNodeStatus;
  name: string;
  coordinates: LocationNodeCoordinates;
  deliveryId?: string;
  entityType?: "delivery" | "carrier" | "customer" | "route" | "system";
  entityId?: string;
  description?: string;
  tags?: string[];
  capacity?: LocationNodeCapacity;
  deliveryConstraints?: DeliveryConstraintProfile;
  updatedFromRealtime?: boolean;
  lastRealtimeTsMs?: number;
  createdAt?: Timestamp | Date;
  updatedAt?: Timestamp | Date;
}

export interface LocationNodeEdgeCost {
  roadDistanceKm: number;
  optimizedDistanceKm?: number;
  estimatedDurationMin?: number;
  fuelCostEstimate?: number;
  slopeScore?: number;
  roadQualityScore?: number;
  safetyScore?: number;
  trafficScore?: number;
  weatherScore?: number;
}

export interface LocationNodeEdge {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  deliveryId?: string;
  status: LocationEdgeStatus;
  directed: boolean;
  costs: LocationNodeEdgeCost;
  source: "google_maps" | "learned" | "manual" | "hybrid";
  validFrom?: Timestamp | Date;
  validUntil?: Timestamp | Date;
  metadata?: {
    algorithm?: string;
    confidence?: number;
    notes?: string;
  };
  updatedAt?: Timestamp | Date;
  createdAt?: Timestamp | Date;
}

export interface RouteOptimizationScoreInput {
  roadDistanceKm: number;
  optimizedDistanceKm?: number;
  estimatedDurationMin?: number;
  fuelCostEstimate?: number;
  slopeScore?: number;
  roadQualityScore?: number;
  safetyScore?: number;
  trafficScore?: number;
  weatherScore?: number;
  constraintWeight?: number;
}

/**
 * Lower score is better.
 * This score intentionally blends pure distance with practical operational costs.
 */
export const computeRouteOptimizationScore = (
  input: RouteOptimizationScoreInput,
): number => {
  const distance = Math.max(
    0,
    Number(input.optimizedDistanceKm ?? input.roadDistanceKm ?? 0),
  );
  const duration = Math.max(
    0,
    Number(input.estimatedDurationMin ?? distance * 2.2),
  );
  const fuel = Math.max(0, Number(input.fuelCostEstimate ?? distance * 0.18));
  const slopePenalty = Math.max(0, Number(input.slopeScore ?? 0)) * 0.35;
  const qualityPenalty =
    Math.max(0, 10 - Number(input.roadQualityScore ?? 6)) * 0.25;
  const safetyPenalty = Math.max(0, 10 - Number(input.safetyScore ?? 6)) * 0.3;
  const trafficPenalty = Math.max(0, Number(input.trafficScore ?? 0)) * 0.2;
  const weatherPenalty = Math.max(0, Number(input.weatherScore ?? 0)) * 0.18;
  const constraintWeight = Math.max(0.5, Number(input.constraintWeight ?? 1));

  const raw =
    distance * 1.8 +
    duration * 0.9 +
    fuel * 2.1 +
    slopePenalty +
    qualityPenalty +
    safetyPenalty +
    trafficPenalty +
    weatherPenalty;

  return Number((raw * constraintWeight).toFixed(3));
};
