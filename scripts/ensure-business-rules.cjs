#!/usr/bin/env node
// Ensure/repair businessConfig/orderEngine document in Firestore using Admin SDK.
// Usage:
//   node scripts/ensure-business-rules.cjs
// Env:
//   GOOGLE_APPLICATION_CREDENTIALS=<path to service account json>

const fs = require("fs");
const path = require("path");
const admin = require("firebase-admin");

const serviceAccountPath =
  process.env.GOOGLE_APPLICATION_CREDENTIALS ||
  path.resolve(process.cwd(), "serviceAccountKey.json");

if (!fs.existsSync(serviceAccountPath)) {
  console.error("Service account JSON not found at", serviceAccountPath);
  process.exit(1);
}

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const defaults = {
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

(async () => {
  try {
    const ref = db.collection("businessConfig").doc("orderEngine");
    const snap = await ref.get();

    if (!snap.exists) {
      await ref.set({
        ...defaults,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedBy: "script:ensure-business-rules",
      });
      console.log("Created businessConfig/orderEngine with defaults.");
      process.exit(0);
    }

    const existing = snap.data() || {};
    await ref.set(
      {
        ...defaults,
        ...existing,
        pricing: { ...defaults.pricing, ...(existing.pricing || {}) },
        recommendation: {
          ...defaults.recommendation,
          ...(existing.recommendation || {}),
        },
        locationOfficialThresholds: {
          ...defaults.locationOfficialThresholds,
          ...(existing.locationOfficialThresholds || {}),
        },
        vehicleProfiles: {
          ...defaults.vehicleProfiles,
          ...(existing.vehicleProfiles || {}),
        },
        coordinatorReviewTriggers: {
          ...defaults.coordinatorReviewTriggers,
          ...(existing.coordinatorReviewTriggers || {}),
        },
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedBy: "script:ensure-business-rules",
      },
      { merge: true },
    );

    console.log("Verified/merged businessConfig/orderEngine successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Failed to ensure business rules config:", error);
    process.exit(2);
  }
})();
