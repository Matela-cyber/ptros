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

interface DashboardProps {
  user: User;
  onNavigate?: (page: "dashboard" | "tasks" | "deliveries") => void;
}

export default function Dashboard({ user, onNavigate }: DashboardProps) {
  const navigate = useNavigate();
  const [carrierProfile, setCarrierProfile] = useState<any>(null);
  const [activeDelivery, setActiveDelivery] = useState<Delivery | null>(null);
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [status, setStatus] = useState<"active" | "inactive" | "busy">(
    "inactive",
  );
  const [showJobDetailsModal, setShowJobDetailsModal] = useState(false);

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

  // Determine if location sharing should ask for confirmation
  const shouldAskLocationConfirmation =
    activeDelivery && activeDelivery.status !== "assigned";

  if (loading || statsLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-300 border-t-indigo-600 rounded-full animate-spin mx-auto shadow-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-pulse"></div>
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
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
      {!isSharing && (
        <div className="bg-gradient-to-r from-rose-100 via-red-100 to-orange-100 border-b-2 border-red-300 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-red-900">You are Offline</p>
                <p className="text-sm text-red-700 font-medium">
                  Location sharing is disabled. Enable it to accept jobs and be
                  visible to coordinators.
                </p>
              </div>
              <button
                onClick={() => setShowLocationModal(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl text-sm font-bold hover:from-red-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Enable Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white sticky top-0 z-40 shadow-2xl border-b-2 border-purple-600">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all hover:shadow-cyan-500/50 border-2 border-cyan-400/30">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                  Today's Earnings
                </p>
                <p className="text-3xl font-bold mt-2">
                  {formatCurrency(stats.todayEarnings)}
                </p>
                <p className="text-blue-100 text-xs mt-2">Live tracked</p>
              </div>
              <div className="bg-white/20 rounded-xl p-3">
                <i className="fa-solid fa-wallet text-2xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all hover:shadow-green-500/50 border-2 border-emerald-400/30">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium uppercase tracking-wider">
                  Today's Deliveries
                </p>
                <p className="text-3xl font-bold mt-2">
                  {stats.todayDeliveries}
                </p>
                <p className="text-green-100 text-xs mt-2">Completed</p>
              </div>
              <div className="bg-white/20 rounded-xl p-3">
                <i className="fa-solid fa-truck-fast text-2xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-fuchsia-500 via-purple-600 to-violet-600 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all hover:shadow-purple-500/50 border-2 border-fuchsia-400/30">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium uppercase tracking-wider">
                  Total Earnings
                </p>
                <p className="text-3xl font-bold mt-2">
                  {formatCurrency(stats.totalEarnings)}
                </p>
                <p className="text-purple-100 text-xs mt-2">Lifetime</p>
              </div>
              <div className="bg-white/20 rounded-xl p-3">
                <i className="fa-solid fa-chart-line text-2xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all hover:shadow-amber-500/50 border-2 border-yellow-400/30">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-amber-100 text-sm font-medium uppercase tracking-wider">
                  Rating
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-3xl font-bold">
                    {stats.rating.toFixed(1)}
                  </span>
                  <i className="fa-solid fa-star text-amber-200 text-xl"></i>
                </div>
                <p className="text-amber-100 text-xs mt-2">Customer score</p>
              </div>
              <div className="bg-white/20 rounded-xl p-3">
                <i className="fa-solid fa-face-smile text-2xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout for Status and Active Delivery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Status Controls - Left Column */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-2xl p-6 sticky top-24 border-2 border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <i className="fa-solid fa-signal text-blue-600"></i>
                    Your Status
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Control your availability
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 ${
                    status === "active"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : status === "busy"
                        ? "bg-amber-100 text-amber-700 border border-amber-200"
                        : "bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
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

              <div className="space-y-3">
                <button
                  onClick={() => handleStatusChange("active")}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all ${
                    status === "active"
                      ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-500/50 transform scale-105"
                      : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 border-2 border-gray-300 shadow-md"
                  }`}
                >
                  <i className="fa-solid fa-bolt"></i>
                  Available
                </button>

                <button
                  onClick={() => handleStatusChange("busy")}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all ${
                    status === "busy"
                      ? "bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 text-white shadow-2xl shadow-amber-500/50 transform scale-105"
                      : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 border-2 border-gray-300 shadow-md"
                  }`}
                >
                  <i className="fa-solid fa-truck-moving"></i>
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
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all ${
                    status === "inactive"
                      ? "bg-gradient-to-r from-rose-600 via-red-600 to-red-700 text-white shadow-2xl shadow-red-500/50 transform scale-105"
                      : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 border-2 border-gray-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  }`}
                >
                  <i className="fa-solid fa-moon"></i>
                  Offline
                </button>
              </div>

              {status === "inactive" && (
                <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-rose-100 border-2 border-red-300 rounded-xl shadow-lg">
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-exclamation text-red-600 mt-0.5 text-xl"></i>
                    <div>
                      <p className="text-sm font-bold text-red-900">
                        You are Offline
                      </p>
                      <p className="text-xs text-red-700 mt-1 font-semibold">
                        You won't receive new job assignments while offline.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Active Delivery / Empty State - Right Column (2/3 width) */}
          <div className="lg:col-span-2">
            {activeDelivery ? (
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-200">
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
                          {activeDelivery.route?.distance || "--"} km
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 text-sm backdrop-blur-sm">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                      <span>Live Tracking Active</span>
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
                        className="bg-gradient-to-r from-green-400 to-green-500 h-2.5 rounded-full transition-all duration-500"
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
                            onClick={() => onNavigate?.("tasks")}
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
              <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-2xl shadow-2xl p-12 text-center border-2 border-purple-200">
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
                  {status === "active" && onNavigate && (
                    <>
                      <button
                        onClick={() => onNavigate("tasks")}
                        className="px-6 py-3 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white rounded-xl font-bold hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 transition-all shadow-2xl hover:shadow-green-500/50 transform hover:scale-105"
                      >
                        <i className="fa-solid fa-list-check mr-2"></i>
                        View Available Tasks
                      </button>
                      <button
                        onClick={() => onNavigate("deliveries")}
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
        </div>

        {/* Recent Deliveries */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-200">
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
                <div
                  key={delivery.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
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
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* OTP Modal */}
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
                      Accuracy: ±{accuracy.toFixed(0)}m
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
      `}{" "}
        as any
      </style>
    </div>
  );
}
