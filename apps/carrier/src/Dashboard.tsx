import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@config";
import { CarrierService } from "./carrierService";
import { useGPSLocation } from "./hooks";
import { useCarrierStats } from "./hooks";
import {
  formatCurrency,
  formatTime,
  formatDate,
  getStatusColor,
  getStatusIcon,
  calculateDeliveryProgress,
} from "./utils";
import { Delivery } from "./types";
import { toast, Toaster } from "react-hot-toast";
import { getCarrierLiveTrackUrl } from "./liveTrackUrl";

interface DashboardProps {
  user: User;
}

export default function Dashboard({ user }: DashboardProps) {
  const navigate = useNavigate();
  type StatKey =
    | "todayDeliveries"
    | "totalDeliveries"
    | "totalEarnings"
    | "rating";

  const [carrierProfile, setCarrierProfile] = useState<any>(null);
  const [activeDelivery, setActiveDelivery] = useState<Delivery | null>(null);
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [deliveredHistory, setDeliveredHistory] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [status, setStatus] = useState<"active" | "inactive" | "busy">(
    "inactive",
  );
  const [showJobDetailsModal, setShowJobDetailsModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [selectedStat, setSelectedStat] = useState<StatKey | null>(null);
  const [statsModalLoading, setStatsModalLoading] = useState(false);

  const { stats, loading: statsLoading } = useCarrierStats();
  const {
    isSharing,
    lastLocation,
    error: locationError,
    accuracy,
    toggleSharing,
    startSharing,
  } = useGPSLocation(activeDelivery?.id);

  // Load carrier data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Load carrier profile
        const profile = await CarrierService.getCarrierProfile();
        setCarrierProfile(profile);
        if (profile?.status) {
          setStatus(profile.status as "active" | "inactive" | "busy");
        }

        // Auto-restore location sharing if it was enabled previously
        if (profile?.shareLocation && !isSharing) {
          console.log("🔄 Restoring location sharing from profile...");
          startSharing();
        }

        // Load active delivery
        const active = await CarrierService.getActiveDelivery();
        setActiveDelivery(active);

        // Load recent deliveries
        const recentDeliveries = await CarrierService.getDeliveries(5);
        setDeliveries(recentDeliveries);

        // Load full delivered history for stats drill-down
        const delivered = await CarrierService.getDeliveredDeliveries();
        setDeliveredHistory(delivered);
      } catch (error) {
        console.error("Error loading data:", error);
        toast.error("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // Subscribe to real-time delivery updates
    const unsubscribe =
      CarrierService.subscribeToActiveDelivery(setActiveDelivery);

    return () => unsubscribe();
  }, []);

  const handleStatusChange = async (
    newStatus: "active" | "inactive" | "busy",
  ) => {
    // Prevent status change while on delivery
    if (
      activeDelivery &&
      ["picked_up", "in_transit", "out_for_delivery"].includes(
        activeDelivery.status,
      ) &&
      newStatus === "inactive"
    ) {
      toast.error("Cannot go offline while on a delivery");
      return;
    }

    // Require accepted job to be "busy"
    if (newStatus === "busy" && activeDelivery?.status !== "accepted") {
      toast.error("Cannot mark as on delivery without accepting the job first");
      return;
    }

    try {
      const success = await CarrierService.updateCarrierStatus(
        newStatus,
        activeDelivery?.id,
      );
      if (success) {
        setStatus(newStatus);
        toast.success(`Status updated to ${newStatus}`);
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const handlePickup = async () => {
    if (!activeDelivery) return;

    try {
      // Generate OTP
      const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

      const success = await CarrierService.updateDeliveryStatus(
        activeDelivery.id,
        "picked_up",
        generatedOtp,
      );

      if (success) {
        setOtpCode(generatedOtp);
        setShowOtpModal(true);
        toast.success("Package picked up. OTP generated.");
      } else {
        toast.error("Failed to update delivery status");
      }
    } catch (error) {
      console.error("Error picking up package:", error);
      toast.error("Failed to pick up package");
    }
  };

  const handleVerifyOTP = async () => {
    if (!activeDelivery || !otpCode) return;

    try {
      const success = await CarrierService.verifyOTP(
        activeDelivery.id,
        otpCode,
      );
      if (success) {
        toast.success("OTP verified. Delivery completed.");
        setShowOtpModal(false);
        setOtpCode("");
        setActiveDelivery(null);
      } else {
        toast.error("Invalid OTP code");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Failed to verify OTP");
    }
  };

  const handleLogout = async () => {
    try {
      if (isSharing) {
        toggleSharing(); // Stop location sharing
      }
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout");
    }
  };

  const isSameDate = (dateA: Date, dateB: Date) =>
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate();

  const toDate = (value: any): Date | null => {
    if (!value) return null;
    if (value instanceof Date) return value;
    if (typeof value?.toDate === "function") return value.toDate();
    return null;
  };

  const today = new Date();
  const todayDeliveriesList = deliveredHistory.filter((delivery) => {
    const deliveryDate = toDate(delivery.deliveryTime);
    return deliveryDate ? isSameDate(deliveryDate, today) : false;
  });

  const openStatModal = async (stat: StatKey) => {
    setSelectedStat(stat);
    setShowStatsModal(true);
    setStatsModalLoading(true);

    try {
      const delivered = await CarrierService.getDeliveredDeliveries();
      setDeliveredHistory(delivered);
    } catch (error) {
      console.error("Error loading stats details:", error);
      toast.error("Failed to load stats details");
    } finally {
      setStatsModalLoading(false);
    }
  };

  // Determine if location sharing should ask for confirmation
  const shouldAskLocationConfirmation =
    activeDelivery && activeDelivery.status !== "assigned";

  if (loading || statsLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="mt-6 text-gray-700 font-semibold text-lg">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="carrier-clean-ui min-h-screen bg-gray-50">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
            borderRadius: "12px",
            padding: "16px",
          },
          success: {
            style: {
              background: "#10b981",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#10b981",
            },
          },
          error: {
            style: {
              background: "#ef4444",
            },
          },
        }}
      />

      {/* Offline Banner */}

      {/* Header */}
      <header className="hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-4">
            <div>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                PTROS Carrier
              </h1>
              <p className="text-sm text-purple-200 mt-1 font-semibold">
                Welcome back,{" "}
                {carrierProfile?.fullName || user.email?.split("@")[0]}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Status Indicator */}
              <div
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl shadow-lg ${
                  isSharing
                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                    : "bg-gradient-to-r from-red-400 to-rose-500"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full shadow-md ${
                    isSharing ? "bg-white animate-pulse" : "bg-white"
                  }`}
                ></div>
                <span className="text-sm font-bold text-white">
                  {isSharing ? "Online" : "Offline"}
                </span>
              </div>

              {/* Location Share Button */}
              <button
                onClick={() => setShowLocationModal(true)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-xl ${
                  isSharing
                    ? "bg-gradient-to-r from-yellow-300 to-yellow-400 text-purple-900 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105"
                    : "bg-white/20 text-white border-2 border-white/40 hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                <i
                  className={`fa-solid ${isSharing ? "fa-location-dot" : "fa-location-crosshairs"} mr-2`}
                ></i>
                {isSharing ? "Sharing Location" : "Share Location"}
              </button>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-5 py-2.5 bg-white/20 text-white rounded-xl text-sm font-bold border-2 border-white/40 hover:bg-white/30 transition-all shadow-lg backdrop-blur-sm"
              >
                <i className="fa-solid fa-sign-out-alt mr-2"></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Status Controls - Column 1 */}
          <div>
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-2xl p-5 border-2 border-purple-200 h-full">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
                    <i className="fa-solid fa-signal text-blue-600"></i>
                    Your Status
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Control your availability
                  </p>
                </div>
                <div
                  className={`px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                    status === "active"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : status === "busy"
                        ? "bg-amber-100 text-amber-700 border border-amber-200"
                        : "bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      status === "active"
                        ? "bg-green-500"
                        : status === "busy"
                          ? "bg-amber-500"
                          : "bg-gray-500"
                    }`}
                  ></div>
                  {status === "active"
                    ? "Available"
                    : status === "busy"
                      ? "On Delivery"
                      : "Offline"}
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => handleStatusChange("active")}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    status === "active"
                      ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/50 transform scale-105"
                      : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 border border-gray-300 shadow-sm"
                  }`}
                >
                  <i className="fa-solid fa-bolt text-xs"></i>
                  Available
                </button>

                <button
                  onClick={() => handleStatusChange("busy")}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    status === "busy"
                      ? "bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 text-white shadow-md shadow-amber-500/50 transform scale-105"
                      : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 border border-gray-300 shadow-sm"
                  }`}
                >
                  <i className="fa-solid fa-truck-moving text-xs"></i>
                  On Delivery
                </button>

                <button
                  onClick={() => handleStatusChange("inactive")}
                  disabled={
                    !!(
                      activeDelivery &&
                      ["picked_up", "in_transit", "out_for_delivery"].includes(
                        activeDelivery.status,
                      )
                    )
                  }
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    status === "inactive"
                      ? "bg-gradient-to-r from-rose-600 via-red-600 to-red-700 text-white shadow-md shadow-red-500/50 transform scale-105"
                      : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 border border-gray-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  }`}
                >
                  <i className="fa-solid fa-moon text-xs"></i>
                  Offline
                </button>
              </div>

              {status === "inactive" && (
                <div className="mt-3 p-3 bg-gradient-to-r from-red-50 to-rose-100 border border-red-300 rounded-lg shadow-sm">
                  <div className="flex items-start gap-2">
                    <i className="fa-solid fa-circle-exclamation text-red-600 mt-0.5 text-sm"></i>
                    <div>
                      <p className="text-xs font-bold text-red-900">
                        You are Offline
                      </p>
                      <p className="text-xs text-red-700 mt-0.5">
                        You won't receive new job assignments while offline.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stats Grid - Columns 2 & 3 */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <button
                type="button"
                onClick={() => openStatModal("todayDeliveries")}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition text-left"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                      Today's Deliveries
                    </p>
                    <p className="text-3xl font-bold mt-2 text-emerald-700">
                      {stats.todayDeliveries}
                    </p>
                  </div>
                  <div className="bg-emerald-100 text-emerald-700 rounded-xl p-3">
                    <i className="fa-solid fa-truck-fast text-xl"></i>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => openStatModal("totalDeliveries")}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition text-left"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                      Total Deliveries
                    </p>
                    <p className="text-3xl font-bold mt-2 text-blue-700">
                      {stats.totalDeliveries}
                    </p>
                  </div>
                  <div className="bg-blue-100 text-blue-700 rounded-xl p-3">
                    <i className="fa-solid fa-box-open text-xl"></i>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => openStatModal("totalEarnings")}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition text-left"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                      Total Earnings
                    </p>
                    <p className="text-3xl font-bold mt-2 text-purple-700">
                      {formatCurrency(stats.totalEarnings)}
                    </p>
                  </div>
                  <div className="bg-purple-100 text-purple-700 rounded-xl p-3">
                    <i className="fa-solid fa-chart-line text-xl"></i>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => openStatModal("rating")}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition text-left"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                      Rating
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-3xl font-bold text-amber-700">
                        {parseFloat(stats.rating.toFixed(2))}
                      </span>
                      <i className="fa-solid fa-star text-amber-500 text-xl"></i>
                    </div>
                  </div>
                  <div className="bg-amber-100 text-amber-700 rounded-xl p-3">
                    <i className="fa-solid fa-face-smile text-xl"></i>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Quick Access Cards 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            type="button"
            onClick={() => navigate("/tasks")}
            className="text-left bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
                  Tasks
                </p>
                <p className="text-xl font-bold mt-1 text-gray-800">
                  Open Tasks
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Accept assigned or available jobs
                </p>
              </div>
              <i className="fa-solid fa-list-check text-2xl text-emerald-600"></i>
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigate("/deliveries")}
            className="text-left bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
                  Deliveries
                </p>
                <p className="text-xl font-bold mt-1 text-gray-800">
                  My Deliveries
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Update delivery statuses quickly
                </p>
              </div>
              <i className="fa-solid fa-box text-2xl text-purple-600"></i>
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigate("/deliveries")}
            className="text-left bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
                  Recent Deliveries
                </p>
                <p className="text-xl font-bold mt-1 text-gray-800">
                  View History
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  See completed and active deliveries
                </p>
              </div>
              <i className="fa-solid fa-clock-rotate-left text-2xl text-slate-600"></i>
            </div>
          </button>
        </div>
        */}

        {/* Two Column Layout for Active Delivery and Recent Deliveries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Active Delivery / Empty State - Left Column */}
          <div>
            {activeDelivery ? (
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-200 h-full">
                {/* Delivery Header */}
                <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 p-6 text-white shadow-lg">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold">Active Delivery</h2>
                      <p className="text-blue-100 text-sm mt-1">
                        Status: {activeDelivery.status.replace("_", " ")}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <span className="px-3 py-1.5 bg-white/20 rounded-lg text-sm flex items-center gap-2">
                          <i className="fa-solid fa-barcode"></i>
                          {activeDelivery.trackingCode}
                        </span>
                        <span className="px-3 py-1.5 bg-white/20 rounded-lg text-sm flex items-center gap-2">
                          <i className="fa-solid fa-wallet"></i>
                          {formatCurrency(
                            activeDelivery.earnings ||
                              activeDelivery.estimatedEarnings ||
                              0,
                          )}
                        </span>
                        <span className="px-3 py-1.5 bg-white/20 rounded-lg text-sm flex items-center gap-2">
                          <i className="fa-solid fa-route"></i>
                          {activeDelivery.route?.distance != null
                            ? parseFloat(
                                Number(activeDelivery.route.distance).toFixed(
                                  2,
                                ),
                              )
                            : "--"}{" "}
                          km
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 text-sm backdrop-blur-sm">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                      <span>Live Tracking Active</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() =>
                          window.open(
                            getCarrierLiveTrackUrl(activeDelivery.id),
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                        className="px-4 py-2 bg-cyan-500/90 text-white rounded-lg text-sm font-semibold hover:bg-cyan-500"
                      >
                        Live Track
                      </button>
                      <button
                        onClick={() => setShowJobDetailsModal(true)}
                        className="px-4 py-2 bg-white/20 border border-white/40 text-white rounded-lg text-sm font-semibold hover:bg-white/30"
                      >
                        Route Details
                      </button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-blue-100">Delivery Progress</span>
                      <span className="font-semibold">
                        {calculateDeliveryProgress(activeDelivery)}%
                      </span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5">
                      <div
                        className={
                          `h-2.5 rounded-full transition-all duration-500 ` +
                          (
                            calculateDeliveryProgress(activeDelivery) < 40
                              ? "bg-red-500"
                              : calculateDeliveryProgress(activeDelivery) < 70
                              ? "bg-yellow-400"
                              : calculateDeliveryProgress(activeDelivery) < 100
                              ? "bg-blue-500"
                              : "bg-green-500"
                          )
                        }
                        style={{
                          width: `${calculateDeliveryProgress(activeDelivery)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Delivery Body */}
                <div className="p-6">
                  {/* Assignment Notice */}
                  {activeDelivery.status === "assigned" && (
                    <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                      <div className="flex items-start gap-3">
                        <i className="fa-regular fa-clock text-amber-600 text-lg"></i>
                        <div className="flex-1">
                          <p className="font-semibold text-amber-800">
                            New Job Assignment
                          </p>
                          <p className="text-sm text-amber-700 mt-1">
                            This job has been assigned to you. Accept it to
                            proceed with delivery.
                          </p>
                          <button
                            onClick={() => navigate("/tasks")}
                            className="mt-3 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
                          >
                            Go to Tasks to Accept
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Delivery Steps */}
                  <div className="space-y-4 mb-6">
                    {/* Pickup Step */}
                    <div
                      className={`flex items-start gap-4 p-4 rounded-xl border-2 ${
                        [
                          "accepted",
                          "picked_up",
                          "in_transit",
                          "out_for_delivery",
                          "delivered",
                        ].includes(activeDelivery.status)
                          ? "border-green-200 bg-green-50"
                          : "border-gray-200"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          [
                            "accepted",
                            "picked_up",
                            "in_transit",
                            "out_for_delivery",
                            "delivered",
                          ].includes(activeDelivery.status)
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {[
                          "accepted",
                          "picked_up",
                          "in_transit",
                          "out_for_delivery",
                          "delivered",
                        ].includes(activeDelivery.status) ? (
                          <i className="fa-solid fa-check"></i>
                        ) : (
                          "1"
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">
                          Pickup Location
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {activeDelivery.pickupAddress}
                        </p>
                      </div>
                      {activeDelivery.status === "accepted" && (
                        <button
                          onClick={handlePickup}
                          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-md"
                        >
                          Mark as Picked Up
                        </button>
                      )}
                    </div>

                    {/* Delivery Step */}
                    <div
                      className={`flex items-start gap-4 p-4 rounded-xl border-2 ${
                        [
                          "in_transit",
                          "out_for_delivery",
                          "delivered",
                        ].includes(activeDelivery.status)
                          ? "border-green-200 bg-green-50"
                          : "border-gray-200"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          [
                            "in_transit",
                            "out_for_delivery",
                            "delivered",
                          ].includes(activeDelivery.status)
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {[
                          "in_transit",
                          "out_for_delivery",
                          "delivered",
                        ].includes(activeDelivery.status) ? (
                          <i className="fa-solid fa-check"></i>
                        ) : (
                          "2"
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">
                          Delivery Location
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {activeDelivery.deliveryAddress}
                        </p>
                      </div>
                      {activeDelivery.status === "picked_up" && (
                        <button
                          onClick={() => setShowOtpModal(true)}
                          className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg text-sm font-medium hover:from-green-700 hover:to-green-800 transition-all shadow-md"
                        >
                          Confirm Delivery
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Package Details */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-800">
                        Package Details
                      </h4>
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2">
                        <i className="fa-regular fa-note-sticky"></i>
                        Notes
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">
                      {activeDelivery.packageDescription}
                    </p>
                    {activeDelivery.deliveryInstructions && (
                      <div className="mt-3 p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-700 flex items-start gap-2">
                        <i className="fa-solid fa-lightbulb mt-0.5"></i>
                        <span>{activeDelivery.deliveryInstructions}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              // Empty State
              <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-2xl shadow-2xl p-12 text-center border-2 border-purple-200 h-full">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fa-solid fa-box-open text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  No Active Deliveries
                </h3>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  {status === "active"
                    ? "You're available! Browse available tasks to get started with your first delivery."
                    : "Set your status to available to start receiving delivery assignments."}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  {status !== "active" && (
                    <button
                      onClick={() => handleStatusChange("active")}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 transition-all shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105"
                    >
                      <i className="fa-solid fa-bolt mr-2"></i>
                      Go Available
                    </button>
                  )}
                  {status === "active" && (
                    <>
                      <button
                        onClick={() => navigate("/tasks")}
                        className="px-6 py-3 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white rounded-xl font-bold hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 transition-all shadow-2xl hover:shadow-green-500/50 transform hover:scale-105"
                      >
                        <i className="fa-solid fa-list-check mr-2"></i>
                        View Available Tasks
                      </button>
                      <button
                        onClick={() => navigate("/deliveries")}
                        className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 text-white rounded-xl font-bold hover:from-fuchsia-700 hover:via-purple-700 hover:to-violet-700 transition-all shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105"
                      >
                        <i className="fa-solid fa-clock-rotate-left mr-2"></i>
                        View My Deliveries
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Recent Deliveries - Right Column */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-200 h-full">
              <div className="bg-gradient-to-r from-slate-800 via-gray-900 to-zinc-900 px-6 py-4 shadow-md">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <i className="fa-solid fa-clock-rotate-left"></i>
                  Recent Deliveries
                </h2>
              </div>

              {deliveries.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <i className="fa-regular fa-inbox text-2xl text-gray-400"></i>
                  </div>
                  <p className="text-gray-500">No completed deliveries yet</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {deliveries.map((delivery) => (
                    <button
                      key={delivery.id}
                      type="button"
                      onClick={() => navigate("/deliveries")}
                      className="w-full text-left p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono font-semibold text-gray-800">
                              {delivery.trackingCode}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${getStatusColor(delivery.status)}`}
                            >
                              <i className={getStatusIcon(delivery.status)}></i>
                              {delivery.status.replace("_", " ")}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">
                            {delivery.customerName}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">
                            {formatCurrency(delivery.earnings)}
                          </p>
                          <p className="text-xs text-gray-400">
                            {formatDate(delivery.deliveryTime?.toDate())}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* OTP Modal */}
      {showStatsModal && selectedStat && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden animate-fadeIn">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedStat === "todayDeliveries" && "Today's Deliveries"}
                {selectedStat === "totalDeliveries" && "Total Deliveries"}
                {selectedStat === "totalEarnings" && "Total Earnings"}
                {selectedStat === "rating" && "Rating Details"}
              </h3>
              <button
                onClick={() => {
                  setShowStatsModal(false);
                  setSelectedStat(null);
                }}
                className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {statsModalLoading ? (
                <div className="py-12 text-center">
                  <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto"></div>
                  <p className="mt-4 text-gray-600">
                    Loading true stats details...
                  </p>
                </div>
              ) : (
                <>
                  {selectedStat === "todayDeliveries" && (
                    <div>
                      <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                        <p className="text-sm text-emerald-700">
                          Today's completed deliveries
                        </p>
                        <p className="text-3xl font-bold text-emerald-800">
                          {todayDeliveriesList.length}
                        </p>
                      </div>

                      {todayDeliveriesList.length === 0 ? (
                        <p className="text-gray-500">
                          No delivered jobs recorded today.
                        </p>
                      ) : (
                        <div className="space-y-3">
                          {todayDeliveriesList.map((delivery) => (
                            <div
                              key={delivery.id}
                              className="p-4 border border-gray-200 rounded-xl"
                            >
                              <div className="flex items-center justify-between gap-4">
                                <div className="min-w-0">
                                  <p className="font-mono text-sm font-semibold text-gray-800">
                                    {delivery.trackingCode}
                                  </p>
                                  <p className="text-sm text-gray-600 truncate">
                                    {delivery.customerName || "Customer"}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="font-bold text-green-600">
                                    {formatCurrency(
                                      delivery.earnings ||
                                        delivery.estimatedEarnings ||
                                        0,
                                    )}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {toDate(delivery.deliveryTime)
                                      ? formatTime(
                                          toDate(delivery.deliveryTime) as Date,
                                        )
                                      : "Time N/A"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {selectedStat === "totalDeliveries" && (
                    <div>
                      <div className="mb-6 p-4 rounded-xl bg-cyan-50 border border-cyan-200">
                        <p className="text-sm text-cyan-700">
                          All completed deliveries
                        </p>
                        <p className="text-3xl font-bold text-cyan-800">
                          {stats.totalDeliveries}
                        </p>
                      </div>

                      {deliveredHistory.length === 0 ? (
                        <p className="text-gray-500">
                          No completed deliveries found yet.
                        </p>
                      ) : (
                        <div className="space-y-3">
                          {deliveredHistory.slice(0, 30).map((delivery) => (
                            <div
                              key={delivery.id}
                              className="p-4 border border-gray-200 rounded-xl"
                            >
                              <div className="flex items-center justify-between gap-4">
                                <div className="min-w-0">
                                  <p className="font-mono text-sm font-semibold text-gray-800">
                                    {delivery.trackingCode}
                                  </p>
                                  <p className="text-sm text-gray-600 truncate">
                                    {delivery.customerName || "Customer"}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-semibold text-gray-800">
                                    {toDate(delivery.deliveryTime)
                                      ? formatDate(
                                          toDate(delivery.deliveryTime) as Date,
                                        )
                                      : "Date N/A"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                          {deliveredHistory.length > 30 && (
                            <p className="text-xs text-gray-500">
                              Showing latest 30 of {deliveredHistory.length}{" "}
                              deliveries.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {selectedStat === "totalEarnings" && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
                        <p className="text-sm text-purple-700">
                          Lifetime earnings
                        </p>
                        <p className="text-3xl font-bold text-purple-800">
                          {formatCurrency(stats.totalEarnings)}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                        <p className="text-sm text-blue-700">
                          Today's earnings
                        </p>
                        <p className="text-2xl font-bold text-blue-800">
                          {formatCurrency(stats.todayEarnings)}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="text-sm text-slate-700">
                          Average earnings per completed delivery
                        </p>
                        <p className="text-xl font-bold text-slate-800">
                          {formatCurrency(
                            stats.totalDeliveries > 0
                              ? stats.totalEarnings / stats.totalDeliveries
                              : 0,
                          )}
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedStat === "rating" && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                        <p className="text-sm text-amber-700">
                          Current customer rating
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <p className="text-3xl font-bold text-amber-800">
                            {parseFloat(stats.rating.toFixed(2))}
                          </p>
                          <i className="fa-solid fa-star text-amber-500 text-xl"></i>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="text-sm text-slate-700">
                          Completed deliveries contributing to experience
                        </p>
                        <p className="text-2xl font-bold text-slate-800">
                          {stats.totalDeliveries}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {showOtpModal && activeDelivery && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md animate-fadeIn">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Delivery OTP
              </h3>
              <p className="text-gray-500 mb-6">
                Share this code with the recipient to verify delivery
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6">
                <div className="text-center">
                  <p className="text-sm text-blue-600 mb-2">OTP Code</p>
                  <p className="text-4xl font-bold text-blue-800 tracking-widest font-mono">
                    {otpCode || activeDelivery.otpCode}
                  </p>
                  <p className="text-xs text-blue-500 mt-3">
                    Valid for this delivery only
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter OTP from recipient
                </label>
                <input
                  type="text"
                  value={otpCode}
                  onChange={(e) =>
                    setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 4))
                  }
                  className="w-full p-4 text-3xl text-center border-2 border-gray-200 rounded-xl font-mono tracking-widest focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="0000"
                  maxLength={4}
                  autoFocus
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowOtpModal(false);
                    setOtpCode("");
                  }}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleVerifyOTP}
                  disabled={otpCode.length !== 4}
                  className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                    otpCode.length === 4
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Verify & Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Location Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md animate-fadeIn">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Location Sharing
              </h3>

              <div className="mb-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isSharing ? "bg-green-100" : "bg-gray-200"
                    }`}
                  >
                    <i
                      className={`fa-solid fa-location-dot text-xl ${
                        isSharing ? "text-green-600" : "text-gray-500"
                      }`}
                    ></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {isSharing ? "Sharing Location" : "Location Sharing Off"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {isSharing
                        ? "Your location is being shared with coordinators"
                        : "Enable to receive real-time job assignments"}
                    </p>
                  </div>
                </div>

                {lastLocation && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                    <p className="text-sm font-medium text-blue-800 mb-2">
                      Current Location
                    </p>
                    <p className="text-xs text-blue-600 font-mono mb-1">
                      {lastLocation.lat.toFixed(6)},{" "}
                      {lastLocation.lng.toFixed(6)}
                    </p>
                    <p className="text-xs text-blue-500">
                      Accuracy: ±{parseFloat(accuracy.toFixed(2))}m
                    </p>
                    <p className="text-xs text-blue-500 mt-1">
                      Updated: {formatTime(lastLocation.timestamp)}
                    </p>
                  </div>
                )}

                {locationError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
                    <p className="text-sm text-red-600">{locationError}</p>
                  </div>
                )}

                {shouldAskLocationConfirmation && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <i className="fa-solid fa-triangle-exclamation text-amber-600 mt-0.5"></i>
                      <p className="text-sm text-amber-700">
                        You have an active delivery. Disabling location sharing
                        may affect tracking.
                      </p>
                    </div>
                  </div>
                )}

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <i className="fa-regular fa-lightbulb text-blue-600 mt-0.5"></i>
                    <p className="text-sm text-blue-700">
                      Location sharing uses GPS and may consume more battery.
                      You can disable it anytime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowLocationModal(false)}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
                {isSharing ? (
                  <button
                    onClick={() => {
                      if (shouldAskLocationConfirmation) {
                        if (
                          window.confirm(
                            "Disabling location sharing may affect tracking. Are you sure?",
                          )
                        ) {
                          toggleSharing();
                          CarrierService.updateShareLocation(false);
                          setShowLocationModal(false);
                        }
                      } else {
                        toggleSharing();
                        CarrierService.updateShareLocation(false);
                        setShowLocationModal(false);
                      }
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-medium hover:from-red-700 hover:to-red-800 transition-all shadow-lg"
                  >
                    Stop Sharing
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      toggleSharing();
                      CarrierService.updateShareLocation(true);
                      setShowLocationModal(false);
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-medium hover:from-green-700 hover:to-green-800 transition-all shadow-lg"
                  >
                    Start Sharing
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Job Details Modal */}
      {showJobDetailsModal && activeDelivery && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fadeIn">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-800">
                  Route Details
                </h3>
                <button
                  onClick={() => setShowJobDetailsModal(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <i className="fa-solid fa-xmark text-xl"></i>
                </button>
              </div>
            </div>

            <div className="p-6">
              {activeDelivery.route ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                      <p className="text-sm text-blue-600 font-medium mb-2">
                        Distance
                      </p>
                      <p className="text-2xl font-bold text-blue-900">
                        {activeDelivery.route.distance || "?"} km
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                      <p className="text-sm text-green-600 font-medium mb-2">
                        Est. Time
                      </p>
                      <p className="text-2xl font-bold text-green-900">
                        {activeDelivery.route.duration || "?"} min
                      </p>
                    </div>
                  </div>

                  <div className="border-2 border-gray-100 rounded-xl p-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-location-dot text-blue-500"></i>
                      Pickup Address
                    </p>
                    <p className="text-gray-800">
                      {activeDelivery.pickupAddress}
                    </p>
                  </div>

                  <div className="border-2 border-gray-100 rounded-xl p-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-flag-checkered text-green-500"></i>
                      Delivery Address
                    </p>
                    <p className="text-gray-800">
                      {activeDelivery.deliveryAddress}
                    </p>
                  </div>

                  {activeDelivery.route.polyline && (
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <i className="fa-solid fa-map"></i>
                        Full route map available in navigation
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-route text-2xl text-gray-400"></i>
                  </div>
                  <p className="text-gray-500">
                    Route details not available yet
                  </p>
                </div>
              )}

              <button
                onClick={() => setShowJobDetailsModal(false)}
                className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add custom animation keyframes in your global CSS or use Tailwind config */}
      <style>
        {`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .carrier-clean-ui [class*="bg-gradient-to"] {
          background-image: none !important;
        }

        .carrier-clean-ui .shadow-2xl,
        .carrier-clean-ui .shadow-xl,
        .carrier-clean-ui .shadow-lg {
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12) !important;
        }

        .carrier-clean-ui .border-2 {
          border-width: 1px !important;
        }

        .carrier-clean-ui .transform {
          transform: none !important;
        }

        .carrier-clean-ui [class*="text-transparent"] {
          color: #111827 !important;
          -webkit-text-fill-color: currentColor !important;
        }
      `}{" "}
        as any
      </style>
    </div>
  );
}
