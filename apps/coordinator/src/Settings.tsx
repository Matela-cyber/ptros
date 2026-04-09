// apps/coordinator/src/Settings.tsx
import { useEffect, useState } from "react";
import {
  auth,
  db,
  defaultBusinessRules,
  loadBusinessRulesConfig,
  resetBusinessRulesConfig,
  saveBusinessRulesConfig,
  type BusinessRulesConfig,
  type VehicleProfileKey,
} from "@config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import {
  FaArrowRight,
  FaFloppyDisk,
  FaMoon,
  FaRotateLeft,
  FaSun,
  FaUserPen,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  CoordinatorSettings,
  applyDarkMode,
  defaultSettings,
  loadCoordinatorSettings,
  saveCoordinatorSettings,
} from "./settingsStore";

export default function Settings() {
  const navigate = useNavigate();
  const [settings, setSettings] =
    useState<CoordinatorSettings>(defaultSettings);
  const [businessRules, setBusinessRules] =
    useState<BusinessRulesConfig>(defaultBusinessRules);
  const [savingBusinessRules, setSavingBusinessRules] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = loadCoordinatorSettings();
      setSettings(stored);
      // Initial mode remains normal until user preference is loaded from DB.
      applyDarkMode(false);
    } catch (error) {
      console.error("Failed to load settings:", error);
      toast.error("Could not load saved settings, using defaults.");
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    const loadProfileData = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      try {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (!userSnap.exists()) return;

        const data = userSnap.data();
        const dbDarkMode = Boolean(
          data?.preferences?.darkMode ?? data?.darkMode ?? false,
        );
        setSettings((prev) => ({ ...prev, darkMode: dbDarkMode }));
        applyDarkMode(dbDarkMode);
      } catch (error) {
        console.error("Failed to load profile:", error);
      }
    };

    if (loaded) {
      loadProfileData();
    }
  }, [loaded]);

  useEffect(() => {
    const loadBusinessRules = async () => {
      try {
        const rules = await loadBusinessRulesConfig();
        setBusinessRules(rules);
      } catch (error) {
        console.error("Failed to load business rules:", error);
        toast.error("Could not load business rules. Using defaults.");
      }
    };

    if (loaded) {
      loadBusinessRules();
    }
  }, [loaded]);

  const update = <K extends keyof CoordinatorSettings>(
    key: K,
    value: CoordinatorSettings[K],
  ) => {
    setSettings((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "darkMode") {
        applyDarkMode(Boolean(value));
      }
      return next;
    });
  };

  const saveSettings = async () => {
    try {
      saveCoordinatorSettings(settings);
      applyDarkMode(settings.darkMode);

      const currentUser = auth.currentUser;
      if (currentUser) {
        await updateDoc(doc(db, "users", currentUser.uid), {
          darkMode: settings.darkMode,
          "preferences.darkMode": settings.darkMode,
          updatedAt: new Date(),
        });
      }

      toast.success("Settings saved successfully.");
    } catch (error) {
      console.error("Failed to save settings:", error);
      toast.error("Failed to save settings.");
    }
  };

  const resetSettings = async () => {
    const resetValues = { ...defaultSettings, darkMode: false };
    setSettings(resetValues);
    saveCoordinatorSettings(defaultSettings);
    applyDarkMode(false);

    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        await updateDoc(doc(db, "users", currentUser.uid), {
          darkMode: false,
          "preferences.darkMode": false,
          updatedAt: new Date(),
        });
      }
      toast.success("Settings reset to defaults.");
    } catch (error) {
      console.error("Failed to reset dark mode in DB:", error);
      toast.error("Settings reset locally, but failed to sync dark mode.");
    }
  };

  const updatePricing = (
    key: keyof BusinessRulesConfig["pricing"],
    value: number,
  ) => {
    setBusinessRules((prev) => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [key]: value,
      },
    }));
  };

  const updateRecommendation = (
    key: keyof BusinessRulesConfig["recommendation"],
    value: number,
  ) => {
    setBusinessRules((prev) => ({
      ...prev,
      recommendation: {
        ...prev.recommendation,
        [key]: value,
      },
    }));
  };

  const updateLocationThreshold = (
    key: keyof BusinessRulesConfig["locationOfficialThresholds"],
    value: number,
  ) => {
    setBusinessRules((prev) => ({
      ...prev,
      locationOfficialThresholds: {
        ...prev.locationOfficialThresholds,
        [key]: value,
      },
    }));
  };

  const updateVehicleProfile = (
    vehicle: VehicleProfileKey,
    key: "capacityKg" | "speedKmh",
    value: number,
  ) => {
    setBusinessRules((prev) => ({
      ...prev,
      vehicleProfiles: {
        ...prev.vehicleProfiles,
        [vehicle]: {
          ...prev.vehicleProfiles[vehicle],
          [key]: value,
        },
      },
    }));
  };

  const updateReviewTrigger = (
    key: keyof BusinessRulesConfig["coordinatorReviewTriggers"],
    value: boolean,
  ) => {
    setBusinessRules((prev) => ({
      ...prev,
      coordinatorReviewTriggers: {
        ...prev.coordinatorReviewTriggers,
        [key]: value,
      },
    }));
  };

  const saveBusinessRules = async () => {
    setSavingBusinessRules(true);
    try {
      const next = await saveBusinessRulesConfig(
        businessRules,
        auth.currentUser?.uid,
      );
      setBusinessRules(next);
      toast.success("Business strategy rules saved.");
    } catch (error) {
      console.error("Failed to save business rules:", error);
      toast.error("Failed to save business rules.");
    } finally {
      setSavingBusinessRules(false);
    }
  };

  const resetBusinessRules = async () => {
    setSavingBusinessRules(true);
    try {
      const reset = await resetBusinessRulesConfig(auth.currentUser?.uid);
      setBusinessRules(reset);
      toast.success("Business rules reset to defaults.");
    } catch (error) {
      console.error("Failed to reset business rules:", error);
      toast.error("Failed to reset business rules.");
    } finally {
      setSavingBusinessRules(false);
    }
  };

  if (!loaded) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Toaster position="top-right" />

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Coordinator Settings
            </h1>
            <p className="text-gray-600 mt-2">
              Manage appearance and business strategy settings from one place.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
            title="Open My Profile"
          >
            <FaUserPen /> My Profile <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Operations</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Auto-refresh interval (seconds)
            </label>
            <input
              type="number"
              min={10}
              max={300}
              value={settings.autoRefreshSeconds}
              onChange={(e) =>
                update("autoRefreshSeconds", Number(e.target.value) || 30)
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Used by dashboard/live monitoring pages for polling and refresh.
            </p>
          </div>

          <div className="p-4 border border-gray-200 rounded-xl bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-black inline-flex items-center gap-2">
                  {settings.darkMode ? <FaMoon /> : <FaSun />} Dark mode
                </p>
                <p className="text-xs text-black mt-1">
                  Applied instantly across the coordinator portal.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={(e) => update("darkMode", e.target.checked)}
                className="h-4 w-4"
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>

          <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <span className="text-sm font-medium text-gray-700">
              Desktop notifications
            </span>
            <input
              type="checkbox"
              checked={settings.enableDesktopNotifications}
              onChange={(e) =>
                update("enableDesktopNotifications", e.target.checked)
              }
              className="h-4 w-4"
            />
          </label>

          <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <span className="text-sm font-medium text-gray-700">
              Email alerts
            </span>
            <input
              type="checkbox"
              checked={settings.emailAlerts}
              onChange={(e) => update("emailAlerts", e.target.checked)}
              className="h-4 w-4"
            />
          </label>

          <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <span className="text-sm font-medium text-gray-700">
              SMS alerts
            </span>
            <input
              type="checkbox"
              checked={settings.smsAlerts}
              onChange={(e) => update("smsAlerts", e.target.checked)}
              className="h-4 w-4"
            />
          </label>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800">Map Defaults</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default map style
              </label>
              <select
                value={settings.defaultMapStyle}
                onChange={(e) =>
                  update(
                    "defaultMapStyle",
                    e.target.value as CoordinatorSettings["defaultMapStyle"],
                  )
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="roadmap">Roadmap</option>
                <option value="satellite">Satellite</option>
                <option value="hybrid">Hybrid</option>
                <option value="terrain">Terrain</option>
              </select>
            </div>

            <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg mt-7 md:mt-0">
              <span className="text-sm font-medium text-gray-700">
                Show traffic by default
              </span>
              <input
                type="checkbox"
                checked={settings.showTrafficByDefault}
                onChange={(e) =>
                  update("showTrafficByDefault", e.target.checked)
                }
                className="h-4 w-4"
              />
            </label>
          </div>
        </section>
      </div>

      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Business Strategy Engine
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Tune pricing and recommendation weights without redeploying apps.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={resetBusinessRules}
              disabled={savingBusinessRules}
              className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-60"
            >
              Reset Defaults
            </button>
            <button
              type="button"
              onClick={saveBusinessRules}
              disabled={savingBusinessRules}
              className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 inline-flex items-center gap-2"
            >
              <FaFloppyDisk />
              {savingBusinessRules ? "Saving..." : "Save Business Rules"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Pricing Controls</h3>

            <label className="block">
              <span className="text-sm text-gray-700">
                Base fallback value (M)
              </span>
              <input
                type="number"
                min={0}
                value={businessRules.pricing.baseValueFallback}
                onChange={(e) =>
                  updatePricing(
                    "baseValueFallback",
                    Number(e.target.value) || 0,
                  )
                }
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">
                Distance rate per km (M)
              </span>
              <input
                type="number"
                min={0}
                step="0.1"
                value={businessRules.pricing.distanceRatePerKm}
                onChange={(e) =>
                  updatePricing(
                    "distanceRatePerKm",
                    Number(e.target.value) || 0,
                  )
                }
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">Package value rate</span>
              <input
                type="number"
                min={0}
                step="0.01"
                value={businessRules.pricing.packageValueRate}
                onChange={(e) =>
                  updatePricing("packageValueRate", Number(e.target.value) || 0)
                }
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">Minimum charge (M)</span>
              <input
                type="number"
                min={0}
                value={businessRules.pricing.minimumCharge}
                onChange={(e) =>
                  updatePricing("minimumCharge", Number(e.target.value) || 0)
                }
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">
                Active delivery surcharge rate
              </span>
              <input
                type="number"
                min={0}
                step="0.01"
                value={businessRules.pricing.activeDeliverySurchargeRate}
                onChange={(e) =>
                  updatePricing(
                    "activeDeliverySurchargeRate",
                    Number(e.target.value) || 0,
                  )
                }
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </label>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">
              Recommendation Weights
            </h3>

            <label className="block">
              <span className="text-sm text-gray-700">
                Workload penalty per active delivery
              </span>
              <input
                type="number"
                min={0}
                step="0.1"
                value={businessRules.recommendation.workloadPenaltyPerActive}
                onChange={(e) =>
                  updateRecommendation(
                    "workloadPenaltyPerActive",
                    Number(e.target.value) || 0,
                  )
                }
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">
                Distance-to-pickup penalty per km
              </span>
              <input
                type="number"
                min={0}
                step="0.1"
                value={businessRules.recommendation.distancePenaltyPerKm}
                onChange={(e) =>
                  updateRecommendation(
                    "distancePenaltyPerKm",
                    Number(e.target.value) || 0,
                  )
                }
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">
                Route penalty per km
              </span>
              <input
                type="number"
                min={0}
                step="0.1"
                value={businessRules.recommendation.routePenaltyPerKm}
                onChange={(e) =>
                  updateRecommendation(
                    "routePenaltyPerKm",
                    Number(e.target.value) || 0,
                  )
                }
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">
                Capacity base penalty
              </span>
              <input
                type="number"
                min={0}
                value={businessRules.recommendation.capacityBasePenalty}
                onChange={(e) =>
                  updateRecommendation(
                    "capacityBasePenalty",
                    Number(e.target.value) || 0,
                  )
                }
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">
                Capacity penalty per overloaded kg
              </span>
              <input
                type="number"
                min={0}
                step="0.1"
                value={businessRules.recommendation.capacityPenaltyPerKg}
                onChange={(e) =>
                  updateRecommendation(
                    "capacityPenaltyPerKg",
                    Number(e.target.value) || 0,
                  )
                }
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-700">Busy status penalty</span>
              <input
                type="number"
                min={0}
                value={businessRules.recommendation.busyStatusPenalty}
                onChange={(e) =>
                  updateRecommendation(
                    "busyStatusPenalty",
                    Number(e.target.value) || 0,
                  )
                }
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800">Vehicle Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {(
              [
                "bicycle",
                "motorcycle",
                "car",
                "pickup",
                "van",
                "truck",
              ] as VehicleProfileKey[]
            ).map((vehicle) => (
              <div
                key={vehicle}
                className="border border-gray-200 rounded-lg p-3 space-y-2"
              >
                <p className="text-sm font-semibold capitalize text-gray-800">
                  {vehicle}
                </p>
                <label className="block text-xs text-gray-600">
                  Capacity (kg)
                  <input
                    type="number"
                    min={1}
                    value={businessRules.vehicleProfiles[vehicle].capacityKg}
                    onChange={(e) =>
                      updateVehicleProfile(
                        vehicle,
                        "capacityKg",
                        Number(e.target.value) || 1,
                      )
                    }
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
                  />
                </label>
                <label className="block text-xs text-gray-600">
                  Speed (km/h)
                  <input
                    type="number"
                    min={1}
                    value={businessRules.vehicleProfiles[vehicle].speedKmh}
                    onChange={(e) =>
                      updateVehicleProfile(
                        vehicle,
                        "speedKmh",
                        Number(e.target.value) || 1,
                      )
                    }
                    className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-gray-700">
              Official location usage threshold
            </span>
            <input
              type="number"
              min={1}
              value={
                businessRules.locationOfficialThresholds.officialUsageCount
              }
              onChange={(e) =>
                updateLocationThreshold(
                  "officialUsageCount",
                  Number(e.target.value) || 1,
                )
              }
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700">
              Core official usage threshold
            </span>
            <input
              type="number"
              min={1}
              value={
                businessRules.locationOfficialThresholds.coreOfficialUsageCount
              }
              onChange={(e) =>
                updateLocationThreshold(
                  "coreOfficialUsageCount",
                  Number(e.target.value) || 1,
                )
              }
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
            />
          </label>
        </div>
      </section>

      {/* Coordinator Review Triggers */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
        <div>
          <h3 className="text-base font-semibold text-gray-800">
            Coordinator Review Triggers
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            When enabled, orders matching these conditions are held for manual
            coordinator assignment instead of being auto-assigned. Reset
            restores all to ON.
          </p>
        </div>
        <div className="space-y-3">
          {(
            [
              {
                key: "missingVerifiedCoordinates" as const,
                label: "Unverified GPS Coordinates",
                detail:
                  "Hold order if pickup or delivery address could not be confirmed on map.",
                color: "red",
              },
              {
                key: "noRecommendedCarrierAvailable" as const,
                label: "No Carrier Available",
                detail:
                  "Hold order when no suitable nearby carrier is found at time of order.",
                color: "orange",
              },
              {
                key: "carrierCapacityOrAvailabilityRisk" as const,
                label: "Carrier Capacity / Availability Risk",
                detail:
                  "Hold order when the top carrier exceeds safe workload or availability limits.",
                color: "yellow",
              },
              {
                key: "urgentPriorityRequiresConfirmation" as const,
                label: "Urgent Priority — Requires Manual Approval",
                detail:
                  "Always hold urgent-priority orders for coordinator confirmation before dispatch.",
                color: "purple",
              },
            ] as const
          ).map(({ key, label, detail, color }) => {
            const colorMap: Record<
              string,
              { border: string; bg: string; badge: string; dot: string }
            > = {
              red: {
                border: "border-red-200",
                bg: "bg-red-50",
                badge: "bg-red-100 text-red-700",
                dot: "bg-red-400",
              },
              orange: {
                border: "border-orange-200",
                bg: "bg-orange-50",
                badge: "bg-orange-100 text-orange-700",
                dot: "bg-orange-400",
              },
              yellow: {
                border: "border-yellow-200",
                bg: "bg-yellow-50",
                badge: "bg-yellow-100 text-yellow-700",
                dot: "bg-yellow-400",
              },
              purple: {
                border: "border-purple-200",
                bg: "bg-purple-50",
                badge: "bg-purple-100 text-purple-700",
                dot: "bg-purple-400",
              },
            };
            const c = colorMap[color];
            const enabled = businessRules.coordinatorReviewTriggers[key];
            return (
              <div
                key={key}
                className={`flex items-start justify-between gap-4 rounded-xl border px-4 py-3 transition-colors ${
                  enabled ? `${c.border} ${c.bg}` : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span
                    className={`mt-1.5 h-2 w-2 rounded-full flex-shrink-0 ${
                      enabled ? c.dot : "bg-gray-300"
                    }`}
                  />
                  <div className="min-w-0">
                    <p
                      className={`text-sm font-semibold ${
                        enabled ? "text-gray-800" : "text-gray-400"
                      }`}
                    >
                      {label}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
                  </div>
                </div>
                <label className="flex-shrink-0 flex items-center gap-2 cursor-pointer pt-0.5">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      enabled ? c.badge : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {enabled ? "ON" : "OFF"}
                  </span>
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={(e) => updateReviewTrigger(key, e.target.checked)}
                    className="h-4 w-4 accent-blue-600"
                  />
                </label>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
        <button
          type="button"
          onClick={resetSettings}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 inline-flex items-center justify-center gap-2"
        >
          <FaRotateLeft /> Reset Defaults
        </button>
        <button
          type="button"
          onClick={saveSettings}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center justify-center gap-2"
        >
          <FaFloppyDisk /> Save Settings
        </button>
      </div>
    </div>
  );
}
