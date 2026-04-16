import { useState, useEffect } from "react";
import { db, auth } from "@config";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  query,
  where,
  orderBy,
  onSnapshot,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { CarrierService } from "./carrierService";
import { useDeliveryStatus } from "./hooks/useDeliveryStatus";
import { getCarrierLiveTrackUrl } from "./liveTrackUrl";
import { formatCurrency, formatDate, formatNumber } from "./utils";

interface Delivery {
  id: string;
  customerId: string;
  carrierId: string;
  carrierName?: string;
  customerName?: string;
  customerPhone?: string;
  deliveryAddress: string;
  pickupAddress: string;
  status: string;
  createdAt: Date;
  assignedAt?: Date;
  deliveryDate?: Date;
  distance: number; // Changed to non-optional with default value
  estimatedEarnings?: number;
  proofOfDelivery?: {
    otp?: string;
    verified?: boolean;
  };
  otpCode?: string;
  otpVerified?: boolean;
  trackingCode?: string;
  packageDescription?: string;
  packageWeight: number; // Changed to non-optional with default value
  recipientName?: string;
  recipientPhone?: string;
  deliveryInstructions?: string;
  earnings?: number;
  pickupLocation?: { lat: number; lng: number };
  deliveryLocation?: { lat: number; lng: number };
}

export default function MyDeliveries() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("active"); // active, completed, all
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState<Delivery | null>(
    null,
  );
  const [otpInput, setOtpInput] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [updatingDeliveryId, setUpdatingDeliveryId] = useState<string | null>(
    null,
  );
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [routeReportDelivery, setRouteReportDelivery] =
    useState<Delivery | null>(null);
  const [routeReportType, setRouteReportType] = useState("blocked_path");
  const [routeReportNote, setRouteReportNote] = useState("");
  const [routeReportTemporary, setRouteReportTemporary] = useState(true);
  const [submittingRouteReport, setSubmittingRouteReport] = useState(false);

  const { updateStatus, getAvailableStatuses, getStatusInfo } =
    useDeliveryStatus();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, "deliveries"),
      where("carrierId", "==", user.uid),
      orderBy("createdAt", "desc"),
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const deliveryList: Delivery[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          deliveryList.push({
            id: doc.id,
            customerId: data.customerId,
            carrierId: data.carrierId,
            carrierName: data.carrierName || "",
            customerName: data.customerName || "Unknown",
            customerPhone: data.customerPhone || "",
            deliveryAddress: data.deliveryAddress || "",
            pickupAddress: data.pickupAddress || "",
            status: data.status || "pending",
            createdAt: data.createdAt?.toDate() || new Date(),
            assignedAt: data.assignedAt?.toDate(),
            deliveryDate: data.deliveryDate?.toDate(),
            distance: data.distance || 0, // Default value
            estimatedEarnings: data.estimatedEarnings || 0,
            earnings: data.earnings || 0,
            proofOfDelivery: data.proofOfDelivery,
            otpCode: data.otpCode,
            otpVerified: data.otpVerified,
            trackingCode:
              data.trackingCode || `TRK${doc.id.slice(0, 8).toUpperCase()}`,
            packageDescription: data.packageDescription || "No description",
            packageWeight: data.packageWeight || 0, // Default value
            recipientName: data.recipientName || data.customerName,
            recipientPhone: data.recipientPhone || data.customerPhone,
            deliveryInstructions: data.deliveryInstructions,
            pickupLocation: data.pickupLocation,
            deliveryLocation: data.deliveryLocation,
          });
        });
        setDeliveries(deliveryList);
        setLoading(false);
      },
      (error) => {
        console.error("Error loading deliveries:", error);
        toast.error("Failed to load deliveries");
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const filteredDeliveries = deliveries.filter((delivery) => {
    if (filter === "active")
      return [
        "assigned",
        "accepted",
        "picked_up",
        "in_transit",
        "stuck",
      ].includes(delivery.status);
    if (filter === "completed") return delivery.status === "delivered";
    return true; // all
  });

  const handleStatusUpdate = async (
    deliveryId: string,
    newStatus: "picked_up" | "in_transit" | "stuck" | "delivered",
  ) => {
    setUpdatingDeliveryId(deliveryId);
    try {
      const delivery = deliveries.find((d) => d.id === deliveryId);
      if (!delivery) throw new Error("Delivery not found");

      await updateStatus(deliveryId, newStatus, delivery.status);

      toast.success(`Status updated to ${newStatus.replace("_", " ")}`);

      // Update local state
      setDeliveries((prev) =>
        prev.map((d) =>
          d.id === deliveryId ? { ...d, status: newStatus } : d,
        ),
      );
    } catch (error: any) {
      console.error("Error updating delivery status:", error);
      toast.error(error.message || "Failed to update status");
    } finally {
      setUpdatingDeliveryId(null);
    }
  };

  const handleCompleteDelivery = async () => {
    if (!selectedDelivery || !otpInput) {
      toast.error("Please enter OTP");
      return;
    }

    setVerifying(true);
    try {
      const verified = await CarrierService.verifyOTP(
        selectedDelivery.id,
        otpInput,
      );

      if (!verified) {
        toast.error(
          "Invalid OTP or OTP not generated yet. Ask customer for the OTP shown in their tracking page.",
        );
        setOtpInput("");
        return;
      }

      toast.success("Delivery completed successfully.");
      setShowOtpModal(false);
      setOtpInput("");
      setSelectedDelivery(null);

      setDeliveries((prev) =>
        prev.map((d) =>
          d.id === selectedDelivery.id
            ? {
                ...d,
                status: "delivered",
                otpVerified: true,
                proofOfDelivery: {
                  ...(d.proofOfDelivery || {}),
                  verified: true,
                },
              }
            : d,
        ),
      );

      // Check if carrier has more active deliveries
      const activeCount = deliveries.filter(
        (d) =>
          ["assigned", "accepted", "picked_up", "in_transit", "stuck"].includes(
            d.status,
          ) && d.id !== selectedDelivery.id,
      ).length;

      // If no more active deliveries, update carrier status to active
      if (activeCount === 0) {
        await CarrierService.updateCarrierStatus("active");
        toast.success("Status updated to Active");
      }
    } catch (error) {
      console.error("Error completing delivery:", error);
      toast.error("Failed to complete delivery");
    } finally {
      setVerifying(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClass = "px-3 py-1 rounded-full text-xs font-bold";

    switch (status) {
      case "pending":
        return (
          <span
            className={`${baseClass} bg-gray-100 text-gray-800 inline-flex items-center gap-2`}
          >
            <i className="fa-regular fa-clock" />
            Pending
          </span>
        );
      case "assigned":
        return (
          <span
            className={`${baseClass} bg-blue-100 text-blue-800 inline-flex items-center gap-2`}
          >
            <i className="fa-solid fa-location-dot" />
            Assigned
          </span>
        );
      case "accepted":
        return (
          <span
            className={`${baseClass} bg-indigo-100 text-indigo-800 inline-flex items-center gap-2`}
          >
            <i className="fa-solid fa-hand" />
            Accepted
          </span>
        );
      case "picked_up":
        return (
          <span
            className={`${baseClass} bg-blue-200 text-blue-800 inline-flex items-center gap-2`}
          >
            <i className="fa-solid fa-box" />
            Picked Up
          </span>
        );
      case "in_transit":
        return (
          <span
            className={`${baseClass} bg-purple-100 text-purple-800 inline-flex items-center gap-2`}
          >
            <i className="fa-solid fa-truck" />
            In Transit
          </span>
        );
      case "stuck":
        return (
          <span
            className={`${baseClass} bg-orange-100 text-orange-800 inline-flex items-center gap-2`}
          >
            <i className="fa-solid fa-triangle-exclamation" />
            Stuck
          </span>
        );
      case "delivered":
        return (
          <span
            className={`${baseClass} bg-green-100 text-green-800 inline-flex items-center gap-2`}
          >
            <i className="fa-solid fa-circle-check" />
            Delivered
          </span>
        );
      default:
        return (
          <span className={`${baseClass} bg-gray-100 text-gray-800`}>
            {status}
          </span>
        );
    }
  };

  const openLiveTrack = (deliveryId: string) => {
    window.open(
      getCarrierLiveTrackUrl(deliveryId),
      "_blank",
      "noopener,noreferrer",
    );
  };

  const submitRouteReport = async () => {
    if (!routeReportDelivery || !routeReportNote.trim()) {
      toast.error("Please describe the route issue or shortcut");
      return;
    }

    setSubmittingRouteReport(true);
    try {
      const profile = await CarrierService.getCarrierProfile();
      const currentPoint = profile?.currentLocation
        ? {
            lat: profile.currentLocation.lat,
            lng: profile.currentLocation.lng,
          }
        : null;

      const endPoint =
        routeReportType === "shortcut_suggestion"
          ? routeReportDelivery.deliveryLocation || currentPoint
          : routeReportDelivery.deliveryLocation ||
            routeReportDelivery.pickupLocation ||
            currentPoint;

      await addDoc(collection(db, "routeReports"), {
        deliveryId: routeReportDelivery.id,
        trackingCode: routeReportDelivery.trackingCode || null,
        type: routeReportType,
        source: "carrier",
        status: "open",
        note: routeReportNote.trim(),
        reason: routeReportNote.trim(),
        temporary: routeReportTemporary,
        start: currentPoint,
        end: endPoint,
        vehicleType: profile?.vehicleType || null,
        createdByName: profile?.fullName || "Carrier",
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });

      await updateDoc(doc(db, "deliveries", routeReportDelivery.id), {
        routeFeedback: arrayUnion({
          type: routeReportType,
          reason: routeReportNote.trim(),
          note: routeReportNote.trim(),
          source: "carrier",
          reportedAt: new Date().toISOString(),
          start: currentPoint,
          end: endPoint,
          temporary: routeReportTemporary,
        }),
        ...(routeReportType !== "shortcut_suggestion"
          ? {
              routeReviews: arrayUnion({
                type: routeReportType,
                temporary: routeReportTemporary,
                reason: routeReportNote.trim(),
                start: currentPoint,
                end: endPoint,
                status: "active",
                createdAt: Timestamp.now(),
                source: "carrier",
              }),
            }
          : {}),
        updatedAt: Timestamp.now(),
      });

      toast.success("Route report submitted for coordinator review");
      setRouteReportDelivery(null);
      setRouteReportType("blocked_path");
      setRouteReportNote("");
      setRouteReportTemporary(true);
    } catch (error) {
      console.error("Error submitting route report:", error);
      toast.error("Failed to submit route report");
    } finally {
      setSubmittingRouteReport(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <Toaster position="top-right" />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Deliveries</h1>
        <div>
          <p className="text-xs text-blue-700 font-semibold">Total Earnings</p>
          <p className="text-lg font-bold text-blue-900">
            {formatCurrency(
              deliveries.reduce((sum, d) => sum + (d.earnings || 0), 0),
            )}
          </p>
        </div>
        <p className="text-gray-600 mt-2">
          Manage your active and completed deliveries
        </p>
      </div>

      {/* Filters & Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1 sm:p-2 md:p-1 mb-3 sm:mb-2">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-100 rounded-full p-0.5 sm:p-1">
            <button
              onClick={() => setFilter("active")}
              className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition inline-flex items-center gap-1 sm:gap-2 ${
                filter === "active"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <i className="fa-solid fa-bolt text-xs sm:text-sm" />
              Active
              <span className="text-[10px] sm:text-xs font-bold text-blue-700 bg-blue-100 px-1.5 sm:px-2 py-0.5 rounded-full">
                {
                  deliveries.filter((d) =>
                    [
                      "assigned",
                      "accepted",
                      "picked_up",
                      "in_transit",
                      "stuck",
                    ].includes(d.status),
                  ).length
                }
              </span>
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition inline-flex items-center gap-1 sm:gap-2 ${
                filter === "completed"
                  ? "bg-white text-emerald-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <i className="fa-solid fa-circle-check text-xs sm:text-sm" />
              Completed
              <span className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-100 px-1.5 sm:px-2 py-0.5 rounded-full">
                {deliveries.filter((d) => d.status === "delivered").length}
              </span>
            </button>
            <button
              onClick={() => setFilter("all")}
              className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition inline-flex items-center gap-1 sm:gap-2 ${
                filter === "all"
                  ? "bg-white text-gray-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <i className="fa-solid fa-layer-group text-xs sm:text-sm" />
              All
              <span className="text-[10px] sm:text-xs font-bold text-gray-700 bg-gray-200 px-1.5 sm:px-2 py-0.5 rounded-full">
                {deliveries.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Delivery Cards */}
      {filteredDeliveries.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="text-5xl mb-4 text-gray-400">
            <i className="fa-solid fa-box" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No deliveries found
          </h3>
          <p className="text-gray-500">
            {filter === "active"
              ? "No active deliveries at the moment"
              : filter === "completed"
                ? "You haven't completed any deliveries yet"
                : "You don't have any deliveries"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeliveries.map((delivery) => {
            const availableStatuses = getAvailableStatuses(delivery.status);
            const isExpanded = expandedCardId === delivery.id;

            return (
              <div
                key={delivery.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
              >
                {/* Card Header */}
                <div className="p-4 border-b bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {getStatusBadge(delivery.status)}
                        <span className="text-xs font-mono text-gray-600 bg-white px-2 py-1 rounded border">
                          {delivery.trackingCode}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-800">
                        {delivery.customerName}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-600">
                        {formatCurrency(
                          delivery.earnings || delivery.estimatedEarnings || 0,
                        )}
                      </div>
                      <p className="text-xs text-gray-500">Earnings</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  <div className="space-y-3">
                    {/* Pickup & Delivery */}
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-blue-600 mr-2">
                          <i className="fa-solid fa-location-dot" />
                        </span>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500">Pickup</p>
                          <p className="text-sm font-medium text-gray-800 line-clamp-2">
                            {delivery.pickupAddress}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">
                          <i className="fa-solid fa-flag-checkered" />
                        </span>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500">Delivery</p>
                          <p className="text-sm font-medium text-gray-800 line-clamp-2">
                            {delivery.deliveryAddress}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Package Info */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Package
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 truncate mr-2">
                          {delivery.packageDescription}
                        </span>
                        {delivery.packageWeight > 0 && (
                          <span className="font-medium whitespace-nowrap">
                            {formatNumber(delivery.packageWeight)} kg
                          </span>
                        )}
                      </div>
                    </div>

                    {/* More Details Section */}
                    {isExpanded && (
                      <div className="pt-3 border-t space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">
                              Recipient
                            </p>
                            <p className="text-sm font-medium">
                              {delivery.recipientName}
                            </p>
                            <p className="text-sm text-gray-600">
                              {delivery.recipientPhone}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">
                              Created
                            </p>
                            <p className="text-sm">
                              {formatDate(delivery.createdAt)}
                            </p>
                          </div>
                        </div>

                        {delivery.deliveryInstructions && (
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-xs font-semibold text-yellow-800 mb-1 inline-flex items-center gap-2">
                              <i className="fa-regular fa-note-sticky" />
                              Instructions
                            </p>
                            <p className="text-sm text-yellow-900">
                              {delivery.deliveryInstructions}
                            </p>
                          </div>
                        )}

                        {delivery.distance > 0 && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Distance:</span>
                            <span className="font-medium">
                              {formatNumber(delivery.distance)} km
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Status Update Buttons */}
                    {availableStatuses.length > 0 && (
                      <div className="pt-3 border-t">
                        <div className="mb-2">
                          <p className="text-xs text-gray-500 font-medium mb-1">
                            Update Status
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {availableStatuses.map((status) => {
                              const info = getStatusInfo(status);
                              return (
                                <button
                                  key={status}
                                  onClick={() =>
                                    handleStatusUpdate(delivery.id, status)
                                  }
                                  disabled={updatingDeliveryId === delivery.id}
                                  className={`px-3 py-2 rounded-lg text-white text-xs font-medium transition ${info.color} hover:opacity-90 disabled:opacity-50 flex items-center gap-1`}
                                >
                                  <i className={info.icon} />
                                  <span>{info.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Delivery Complete Button */}
                    {delivery.status === "in_transit" &&
                      !availableStatuses.includes("delivered") && (
                        <button
                          onClick={() => {
                            setSelectedDelivery(delivery);
                            setShowOtpModal(true);
                          }}
                          className="w-full py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition flex items-center justify-center gap-2"
                        >
                          <i className="fa-solid fa-circle-check" />
                          Complete Delivery
                        </button>
                      )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-4 py-3 bg-gray-50 border-t flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setExpandedCardId(isExpanded ? null : delivery.id)
                      }
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                    >
                      <span>{isExpanded ? "▲" : "▼"}</span>
                      {isExpanded ? "Show Less" : "More Details"}
                    </button>
                    <button
                      onClick={() => openLiveTrack(delivery.id)}
                      className="text-sm px-2.5 py-1.5 rounded-md bg-cyan-100 text-cyan-700 hover:bg-cyan-200 font-semibold"
                    >
                      Live Track
                    </button>
                    {["accepted", "picked_up", "in_transit", "stuck"].includes(
                      delivery.status,
                    ) && (
                      <button
                        onClick={() => setRouteReportDelivery(delivery)}
                        className="text-sm px-2.5 py-1.5 rounded-md bg-amber-100 text-amber-700 hover:bg-amber-200 font-semibold"
                      >
                        Route Report
                      </button>
                    )}
                  </div>

                  <div className="text-xs text-gray-500">
                    {delivery.assignedAt &&
                      `Assigned: ${formatDate(delivery.assignedAt)}`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* OTP Verification Modal */}
      {showOtpModal && selectedDelivery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                  Verify Delivery OTP
                </h2>
                <button
                  onClick={() => {
                    setShowOtpModal(false);
                    setOtpInput("");
                    setSelectedDelivery(null);
                  }}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>

              <div className="mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-blue-800 font-medium text-sm">
                    <i className="fa-solid fa-location-dot mr-2" />
                    {selectedDelivery.deliveryAddress}
                  </p>
                  <p className="text-blue-700 text-xs mt-2">
                    Ask the customer for their OTP code
                  </p>
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer OTP Code
                </label>
                <input
                  type="text"
                  placeholder="Enter 4-digit OTP"
                  maxLength={4}
                  value={otpInput}
                  onChange={(e) =>
                    setOtpInput(e.target.value.replace(/\D/g, "").slice(0, 4))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-green-500"
                  autoFocus
                />
                <p className="text-xs text-gray-500 mt-2">
                  Customer gets this OTP in Customer App → Track Orders → Order
                  Summary (shown after pickup).
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    setShowOtpModal(false);
                    setOtpInput("");
                    setSelectedDelivery(null);
                  }}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCompleteDelivery}
                  disabled={verifying || otpInput.length !== 4}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium ${
                    otpInput.length === 4 && !verifying
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {verifying ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    "✓ Complete Delivery"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {routeReportDelivery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
            <div className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Report Route Intelligence
                  </h2>
                  <p className="text-sm text-gray-500">
                    Share blocked roads, wrong map roads, or shortcuts while the
                    route is fresh.
                  </p>
                </div>
                <button
                  onClick={() => setRouteReportDelivery(null)}
                  className="text-2xl text-gray-400 hover:text-gray-600"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Report type
                  </label>
                  <select
                    value={routeReportType}
                    onChange={(e) => setRouteReportType(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  >
                    <option value="blocked_path">Blocked path</option>
                    <option value="bad_road">Bad road</option>
                    <option value="unsafe_segment">Unsafe segment</option>
                    <option value="wrong_map_road">Wrong map road</option>
                    <option value="shortcut_suggestion">
                      Shortcut suggestion
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    What should the coordinator know?
                  </label>
                  <textarea
                    value={routeReportNote}
                    onChange={(e) => setRouteReportNote(e.target.value)}
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="Example: bridge closed after rain, use left gravel path for motorcycles only"
                  />
                </div>

                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={routeReportTemporary}
                    onChange={(e) => setRouteReportTemporary(e.target.checked)}
                  />
                  Temporary issue / condition
                </label>

                <div className="rounded-lg bg-blue-50 p-3 text-sm text-blue-800">
                  This report will use your current live position as the route
                  start point when available.
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setRouteReportDelivery(null)}
                    className="flex-1 rounded-lg bg-gray-100 px-4 py-2.5 font-semibold text-gray-700 hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={submitRouteReport}
                    disabled={submittingRouteReport || !routeReportNote.trim()}
                    className="flex-1 rounded-lg bg-amber-600 px-4 py-2.5 font-semibold text-white hover:bg-amber-700 disabled:opacity-60"
                  >
                    {submittingRouteReport ? "Submitting…" : "Submit report"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Stats */}
      {filteredDeliveries.length > 0 && (
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-bold text-gray-800">
                {filteredDeliveries.length}
              </span>{" "}
              of{" "}
              <span className="font-bold text-gray-800">
                {deliveries.length}
              </span>{" "}
              deliveries
            </div>
            <div className="text-sm text-gray-600">
              Last updated:{" "}
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
