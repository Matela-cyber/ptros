import { db } from "./index";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

export type VehicleProfileKey =
  | "bicycle"
  | "motorcycle"
  | "car"
  | "pickup"
  | "van"
  | "truck"
  | "unknown";

export type VehicleProfile = {
  capacityKg: number;
  speedKmh: number;
};

export type BusinessRulesConfig = {
  pricing: {
    baseValueFallback: number;
    distanceRatePerKm: number;
    packageValueRate: number;
    minimumCharge: number;
    activeDeliverySurchargeRate: number;
  };
  recommendation: {
    busyStatusPenalty: number;
    unknownStatusPenalty: number;
    workloadPenaltyPerActive: number;
    distancePenaltyPerKm: number;
    routePenaltyPerKm: number;
    capacityBasePenalty: number;
    capacityPenaltyPerKg: number;
    ratingBoostPerPoint: number;
    maxRatingForBoost: number;
    bundleBoost: number;
    bundleRouteMaxKm: number;
    bundlePickupMaxKm: number;
    activeDeliveryCapacityKgImpact: number;
    activeDeliveryEtaHoursImpact: number;
    minimumEtaHours: number;
  };
  locationOfficialThresholds: {
    officialUsageCount: number;
    coreOfficialUsageCount: number;
  };
  vehicleProfiles: Record<VehicleProfileKey, VehicleProfile>;
  coordinatorReviewTriggers: {
    missingVerifiedCoordinates: boolean;
    noRecommendedCarrierAvailable: boolean;
    carrierCapacityOrAvailabilityRisk: boolean;
    urgentPriorityRequiresConfirmation: boolean;
  };
};

export const BUSINESS_RULES_DOC_PATH = {
  collection: "businessConfig",
  document: "orderEngine",
} as const;

export const defaultBusinessRules: BusinessRulesConfig = {
  pricing: {
    baseValueFallback: 100,
    distanceRatePerKm: 10,
    packageValueRate: 0.15,
    minimumCharge: 50,
    activeDeliverySurchargeRate: 0.03,
  },
  recommendation: {
    busyStatusPenalty: 12,
    unknownStatusPenalty: 80,
    workloadPenaltyPerActive: 9,
    distancePenaltyPerKm: 2.2,
    routePenaltyPerKm: 0.35,
    capacityBasePenalty: 350,
    capacityPenaltyPerKg: 16,
    ratingBoostPerPoint: 4,
    maxRatingForBoost: 5,
    bundleBoost: 8,
    bundleRouteMaxKm: 18,
    bundlePickupMaxKm: 6,
    activeDeliveryCapacityKgImpact: 20,
    activeDeliveryEtaHoursImpact: 0.35,
    minimumEtaHours: 0.5,
  },
  locationOfficialThresholds: {
    officialUsageCount: 2,
    coreOfficialUsageCount: 5,
  },
  vehicleProfiles: {
    bicycle: { capacityKg: 8, speedKmh: 18 },
    motorcycle: { capacityKg: 25, speedKmh: 45 },
    car: { capacityKg: 120, speedKmh: 42 },
    pickup: { capacityKg: 800, speedKmh: 40 },
    van: { capacityKg: 1200, speedKmh: 36 },
    truck: { capacityKg: 3500, speedKmh: 30 },
    unknown: { capacityKg: 80, speedKmh: 35 },
  },
  coordinatorReviewTriggers: {
    missingVerifiedCoordinates: true,
    noRecommendedCarrierAvailable: true,
    carrierCapacityOrAvailabilityRisk: true,
    urgentPriorityRequiresConfirmation: true,
  },
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const asNumber = (
  value: unknown,
  fallback: number,
  min: number,
  max: number,
) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return clamp(numeric, min, max);
};

export const sanitizeBusinessRulesConfig = (
  raw: unknown,
): BusinessRulesConfig => {
  const data = (raw || {}) as Partial<BusinessRulesConfig>;
  const pricing = data.pricing || {};
  const recommendation = data.recommendation || {};
  const locationOfficialThresholds = data.locationOfficialThresholds || {};
  const vehicleProfiles = data.vehicleProfiles || {};

  const sanitized: BusinessRulesConfig = {
    pricing: {
      baseValueFallback: asNumber(
        (pricing as any).baseValueFallback,
        defaultBusinessRules.pricing.baseValueFallback,
        0,
        100000,
      ),
      distanceRatePerKm: asNumber(
        (pricing as any).distanceRatePerKm,
        defaultBusinessRules.pricing.distanceRatePerKm,
        0,
        10000,
      ),
      packageValueRate: asNumber(
        (pricing as any).packageValueRate,
        defaultBusinessRules.pricing.packageValueRate,
        0,
        5,
      ),
      minimumCharge: asNumber(
        (pricing as any).minimumCharge,
        defaultBusinessRules.pricing.minimumCharge,
        0,
        100000,
      ),
      activeDeliverySurchargeRate: asNumber(
        (pricing as any).activeDeliverySurchargeRate,
        defaultBusinessRules.pricing.activeDeliverySurchargeRate,
        0,
        5,
      ),
    },
    recommendation: {
      busyStatusPenalty: asNumber(
        (recommendation as any).busyStatusPenalty,
        defaultBusinessRules.recommendation.busyStatusPenalty,
        0,
        10000,
      ),
      unknownStatusPenalty: asNumber(
        (recommendation as any).unknownStatusPenalty,
        defaultBusinessRules.recommendation.unknownStatusPenalty,
        0,
        10000,
      ),
      workloadPenaltyPerActive: asNumber(
        (recommendation as any).workloadPenaltyPerActive,
        defaultBusinessRules.recommendation.workloadPenaltyPerActive,
        0,
        1000,
      ),
      distancePenaltyPerKm: asNumber(
        (recommendation as any).distancePenaltyPerKm,
        defaultBusinessRules.recommendation.distancePenaltyPerKm,
        0,
        1000,
      ),
      routePenaltyPerKm: asNumber(
        (recommendation as any).routePenaltyPerKm,
        defaultBusinessRules.recommendation.routePenaltyPerKm,
        0,
        1000,
      ),
      capacityBasePenalty: asNumber(
        (recommendation as any).capacityBasePenalty,
        defaultBusinessRules.recommendation.capacityBasePenalty,
        0,
        10000,
      ),
      capacityPenaltyPerKg: asNumber(
        (recommendation as any).capacityPenaltyPerKg,
        defaultBusinessRules.recommendation.capacityPenaltyPerKg,
        0,
        1000,
      ),
      ratingBoostPerPoint: asNumber(
        (recommendation as any).ratingBoostPerPoint,
        defaultBusinessRules.recommendation.ratingBoostPerPoint,
        0,
        1000,
      ),
      maxRatingForBoost: asNumber(
        (recommendation as any).maxRatingForBoost,
        defaultBusinessRules.recommendation.maxRatingForBoost,
        1,
        10,
      ),
      bundleBoost: asNumber(
        (recommendation as any).bundleBoost,
        defaultBusinessRules.recommendation.bundleBoost,
        0,
        1000,
      ),
      bundleRouteMaxKm: asNumber(
        (recommendation as any).bundleRouteMaxKm,
        defaultBusinessRules.recommendation.bundleRouteMaxKm,
        0,
        1000,
      ),
      bundlePickupMaxKm: asNumber(
        (recommendation as any).bundlePickupMaxKm,
        defaultBusinessRules.recommendation.bundlePickupMaxKm,
        0,
        1000,
      ),
      activeDeliveryCapacityKgImpact: asNumber(
        (recommendation as any).activeDeliveryCapacityKgImpact,
        defaultBusinessRules.recommendation.activeDeliveryCapacityKgImpact,
        0,
        1000,
      ),
      activeDeliveryEtaHoursImpact: asNumber(
        (recommendation as any).activeDeliveryEtaHoursImpact,
        defaultBusinessRules.recommendation.activeDeliveryEtaHoursImpact,
        0,
        24,
      ),
      minimumEtaHours: asNumber(
        (recommendation as any).minimumEtaHours,
        defaultBusinessRules.recommendation.minimumEtaHours,
        0,
        24,
      ),
    },
    locationOfficialThresholds: {
      officialUsageCount: asNumber(
        (locationOfficialThresholds as any).officialUsageCount,
        defaultBusinessRules.locationOfficialThresholds.officialUsageCount,
        1,
        1000,
      ),
      coreOfficialUsageCount: asNumber(
        (locationOfficialThresholds as any).coreOfficialUsageCount,
        defaultBusinessRules.locationOfficialThresholds.coreOfficialUsageCount,
        1,
        1000,
      ),
    },
    vehicleProfiles: {
      bicycle: {
        capacityKg: asNumber(
          (vehicleProfiles as any)?.bicycle?.capacityKg,
          defaultBusinessRules.vehicleProfiles.bicycle.capacityKg,
          1,
          100000,
        ),
        speedKmh: asNumber(
          (vehicleProfiles as any)?.bicycle?.speedKmh,
          defaultBusinessRules.vehicleProfiles.bicycle.speedKmh,
          1,
          300,
        ),
      },
      motorcycle: {
        capacityKg: asNumber(
          (vehicleProfiles as any)?.motorcycle?.capacityKg,
          defaultBusinessRules.vehicleProfiles.motorcycle.capacityKg,
          1,
          100000,
        ),
        speedKmh: asNumber(
          (vehicleProfiles as any)?.motorcycle?.speedKmh,
          defaultBusinessRules.vehicleProfiles.motorcycle.speedKmh,
          1,
          300,
        ),
      },
      car: {
        capacityKg: asNumber(
          (vehicleProfiles as any)?.car?.capacityKg,
          defaultBusinessRules.vehicleProfiles.car.capacityKg,
          1,
          100000,
        ),
        speedKmh: asNumber(
          (vehicleProfiles as any)?.car?.speedKmh,
          defaultBusinessRules.vehicleProfiles.car.speedKmh,
          1,
          300,
        ),
      },
      pickup: {
        capacityKg: asNumber(
          (vehicleProfiles as any)?.pickup?.capacityKg,
          defaultBusinessRules.vehicleProfiles.pickup.capacityKg,
          1,
          100000,
        ),
        speedKmh: asNumber(
          (vehicleProfiles as any)?.pickup?.speedKmh,
          defaultBusinessRules.vehicleProfiles.pickup.speedKmh,
          1,
          300,
        ),
      },
      van: {
        capacityKg: asNumber(
          (vehicleProfiles as any)?.van?.capacityKg,
          defaultBusinessRules.vehicleProfiles.van.capacityKg,
          1,
          100000,
        ),
        speedKmh: asNumber(
          (vehicleProfiles as any)?.van?.speedKmh,
          defaultBusinessRules.vehicleProfiles.van.speedKmh,
          1,
          300,
        ),
      },
      truck: {
        capacityKg: asNumber(
          (vehicleProfiles as any)?.truck?.capacityKg,
          defaultBusinessRules.vehicleProfiles.truck.capacityKg,
          1,
          100000,
        ),
        speedKmh: asNumber(
          (vehicleProfiles as any)?.truck?.speedKmh,
          defaultBusinessRules.vehicleProfiles.truck.speedKmh,
          1,
          300,
        ),
      },
      unknown: {
        capacityKg: asNumber(
          (vehicleProfiles as any)?.unknown?.capacityKg,
          defaultBusinessRules.vehicleProfiles.unknown.capacityKg,
          1,
          100000,
        ),
        speedKmh: asNumber(
          (vehicleProfiles as any)?.unknown?.speedKmh,
          defaultBusinessRules.vehicleProfiles.unknown.speedKmh,
          1,
          300,
        ),
      },
    },
    coordinatorReviewTriggers: {
      missingVerifiedCoordinates:
        (data.coordinatorReviewTriggers as any)?.missingVerifiedCoordinates !==
        false,
      noRecommendedCarrierAvailable:
        (data.coordinatorReviewTriggers as any)
          ?.noRecommendedCarrierAvailable !== false,
      carrierCapacityOrAvailabilityRisk:
        (data.coordinatorReviewTriggers as any)
          ?.carrierCapacityOrAvailabilityRisk !== false,
      urgentPriorityRequiresConfirmation:
        (data.coordinatorReviewTriggers as any)
          ?.urgentPriorityRequiresConfirmation !== false,
    },
  };

  if (
    sanitized.locationOfficialThresholds.coreOfficialUsageCount <
    sanitized.locationOfficialThresholds.officialUsageCount
  ) {
    sanitized.locationOfficialThresholds.coreOfficialUsageCount =
      sanitized.locationOfficialThresholds.officialUsageCount;
  }

  return sanitized;
};

export const loadBusinessRulesConfig =
  async (): Promise<BusinessRulesConfig> => {
    const rulesRef = doc(
      db,
      BUSINESS_RULES_DOC_PATH.collection,
      BUSINESS_RULES_DOC_PATH.document,
    );

    const rulesSnap = await getDoc(rulesRef);
    if (!rulesSnap.exists()) {
      return sanitizeBusinessRulesConfig(defaultBusinessRules);
    }

    return sanitizeBusinessRulesConfig(rulesSnap.data());
  };

export const saveBusinessRulesConfig = async (
  config: BusinessRulesConfig,
  updatedBy?: string,
): Promise<BusinessRulesConfig> => {
  const sanitized = sanitizeBusinessRulesConfig(config);
  const rulesRef = doc(
    db,
    BUSINESS_RULES_DOC_PATH.collection,
    BUSINESS_RULES_DOC_PATH.document,
  );

  await setDoc(
    rulesRef,
    {
      ...sanitized,
      updatedAt: serverTimestamp(),
      updatedBy: updatedBy || null,
    },
    { merge: true },
  );

  return sanitized;
};

export const resetBusinessRulesConfig = async (
  updatedBy?: string,
): Promise<BusinessRulesConfig> => {
  return saveBusinessRulesConfig(defaultBusinessRules, updatedBy);
};
