// apps/coordinator/src/DeliveryDetails.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "@config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { format } from "date-fns";
import { writeTimestamp, getTimeServiceStatus } from "./services/timeService";
import { assignDeliveryIntelligently } from "./services/routeIntelligenceService";
import {
  FaArrowLeft,
  FaBolt,
  FaBox,
  FaFlagCheckered,
  FaLocationDot,
  FaMap,
  FaMoneyBill,
  FaMotorcycle,
  FaNotesMedical,
  FaPhone,
  FaChartColumn,
  FaUser,
  FaEnvelope,
} from "react-icons/fa6";

interface CustomerProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
}

interface CarrierProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  vehicleType?: string;
  licensePlate?: string;
  status?: string;
}

interface ProposedCarrier {
  carrierId: string;
  carrierName: string;
  recommendationScore: number;
  recommendationReason: string;
  selectedByCustomer: boolean;
  selectionMode: string;
}

interface DeliveryDetails {
  id: string;
  trackingCode: string;
  status: string;
  customerName: string;
  customerPhone: string;
  customerId: string;
  pickupAddress: string;
  pickupContactName: string;
  pickupContactPhone: string;
  pickupInstructions: string;
  pickupDateTime: Date;
  deliveryAddress: string;
  deliveryContactName: string;
  deliveryContactPhone: string;
  deliveryInstructions: string;
  deliveryDate: Date;
  carrierName?: string;
  carrierId?: string;
  carrierPhone?: string;
  packageDescription: string;
  packageWeight?: number;
  packageDimensions?: string;
  paymentMethod: string;
  paymentAmount: number;
  paymentStatus: string;
  priority: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
  coordinatorReviewRequired?: boolean;
  coordinatorReviewReasons?: string[];
  proposedCarrier?: ProposedCarrier | null;
}

export default function DeliveryDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState<DeliveryDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [customerProfile, setCustomerProfile] =
    useState<CustomerProfile | null>(null);
  const [carrierProfile, setCarrierProfile] = useState<CarrierProfile | null>(
    null,
  );
  const [loadingProfiles, setLoadingProfiles] = useState(false);

  useEffect(() => {
    if (id) {
      loadDelivery(id);
    }
  }, [id]);

  const loadDelivery = async (deliveryId: string) => {
    try {
      const docRef = doc(db, "deliveries", deliveryId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setDelivery({
          id: docSnap.id,
          trackingCode: data.trackingCode,
          status: data.status,
          customerName: data.customerName,
          customerPhone: data.customerPhone,
          customerId: data.customerId,
          pickupAddress: data.pickupAddress,
          pickupContactName: data.pickupContactName,
          pickupContactPhone: data.pickupContactPhone,
          pickupInstructions: data.pickupInstructions,
          pickupDateTime: data.pickupDateTime?.toDate(),
          deliveryAddress: data.deliveryAddress,
          deliveryContactName: data.deliveryContactName,
          deliveryContactPhone: data.deliveryContactPhone,
          deliveryInstructions: data.deliveryInstructions,
          deliveryDate: data.deliveryDate?.toDate(),
          carrierName: data.carrierName,
          carrierId: data.carrierId,
          carrierPhone: data.carrierPhone,
          packageDescription: data.packageDescription,
          packageWeight: data.packageWeight,
          packageDimensions: data.packageDimensions,
          paymentMethod: data.paymentMethod,
          paymentAmount: data.paymentAmount,
          paymentStatus: data.paymentStatus,
          priority: data.priority,
          notes: data.notes,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate(),
          coordinatorReviewRequired: data.coordinatorReviewRequired ?? false,
          coordinatorReviewReasons: data.coordinatorReviewReasons ?? [],
          proposedCarrier: data.proposedCarrier ?? null,
        });

        // Fetch customer and carrier profiles
        if (data.customerId) {
          fetchCustomerProfile(data.customerId);
        }
        if (data.carrierId) {
          fetchCarrierProfile(data.carrierId);
        }
      } else {
        toast.error("Delivery not found");
        navigate("/deliveries/active");
      }
    } catch (error) {
      console.error("Error loading delivery:", error);
      toast.error("Failed to load delivery details");
    } finally {
      setLoading(false);
    }
  };

  const fetchCustomerProfile = async (customerId: string) => {
    try {
      setLoadingProfiles(true);
      const userRef = doc(db, "users", customerId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        setCustomerProfile({
          id: userSnap.id,
          fullName: data.fullName || "Unknown",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address,
          city: data.city,
        });
      }
    } catch (error) {
      console.error("Error fetching customer profile:", error);
    } finally {
      setLoadingProfiles(false);
    }
  };

  const fetchCarrierProfile = async (carrierId: string) => {
    try {
      setLoadingProfiles(true);
      const userRef = doc(db, "users", carrierId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        setCarrierProfile({
          id: userSnap.id,
          fullName: data.fullName || "Unknown",
          email: data.email || "",
          phone: data.phone || "",
          vehicleType: data.vehicleType,
          licensePlate: data.licensePlate,
          status: data.status,
        });
      }
    } catch (error) {
      console.error("Error fetching carrier profile:", error);
    } finally {
      setLoadingProfiles(false);
    }
  };

  const updateStatus = async (newStatus: string) => {
    if (!delivery) return;

    try {
      const timestamp = await writeTimestamp(
        `deliveries/${delivery.id}/status`,
      );
      const timeServiceStatus = getTimeServiceStatus();

      await updateDoc(doc(db, "deliveries", delivery.id), {
        status: newStatus,
        updatedAt: timestamp,
        timeSource: timeServiceStatus.primarySource,
      });

      toast.success(`Status updated to ${newStatus.replace("_", " ")}`);
      loadDelivery(delivery.id); // Reload
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const smartAssignCarrier = async () => {
    if (!delivery) return;

    try {
      const result = await assignDeliveryIntelligently(delivery.id);
      const recommendation = result.selected;
      const graphSync = result.graphSyncResult;
      const syncText = graphSync
        ? graphSync.success
          ? graphSync.warnings.length
            ? `Graph sync OK with ${graphSync.warnings.length} warning(s)`
            : "Graph sync OK"
          : `Graph sync failed: ${graphSync.message}`
        : "Graph sync not executed";

      toast.success(
        `Smart assigned to ${recommendation.fullName} • ${parseFloat(recommendation.remainingCapacityKg.toFixed(2))}kg left • ${parseFloat(recommendation.distanceToPickupKm.toFixed(2))}km away • ${syncText}`,
        { duration: 4500 },
      );
      await loadDelivery(delivery.id);
    } catch (error) {
      console.error("Error assigning carrier:", error);
      toast.error("Failed to assign carrier");
    }
  };

  const cancelDelivery = async () => {
    if (!delivery) return;
    const reason = window.prompt("Reason for cancellation (required):")?.trim();
    if (!reason) return;

    try {
      const timestamp = await writeTimestamp(
        `deliveries/${delivery.id}/cancelled`,
      );
      const timeServiceStatus = getTimeServiceStatus();

      await updateDoc(doc(db, "deliveries", delivery.id), {
        status: "cancelled",
        cancelledAt: timestamp,
        cancelledReason: reason,
        updatedAt: timestamp,
        timeSource: timeServiceStatus.primarySource,
      });

      toast.success("Delivery cancelled");
      loadDelivery(delivery.id);
    } catch (error) {
      console.error("Error cancelling delivery:", error);
      toast.error("Failed to cancel delivery");
    }
  };

  const shareDelivery = async () => {
    const url = `${window.location.origin}/deliveries/${delivery?.id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `Delivery ${delivery?.trackingCode}`,
          text: `Track delivery ${delivery?.trackingCode}`,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("Delivery link copied to clipboard");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!delivery) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Delivery not found</h2>
        <button
          onClick={() => navigate("/deliveries/active")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          Back to Deliveries
        </button>
      </div>
    );
  }

  const statusSteps = [
    { key: "pending", label: "Created" },
    { key: "assigned", label: "Assigned" },
    { key: "picked_up", label: "Picked Up" },
    { key: "in_transit", label: "In Transit" },
    { key: "delivered", label: "Delivered" },
  ];

  const currentStepIndex = statusSteps.findIndex(
    (step) => step.key === delivery.status,
  );

  return (
    <div className="max-w-6xl mx-auto">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <button
              onClick={() => navigate("/deliveries/active")}
              className="text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center"
            >
              <span className="inline-flex items-center gap-2">
                <FaArrowLeft /> Back to Deliveries
              </span>
            </button>
            <h1 className="text-3xl font-bold text-gray-800">
              Delivery: {delivery.trackingCode}
            </h1>
            <p className="text-gray-600 mt-2">
              Created on{" "}
              {format(delivery.createdAt, "MMMM d, yyyy 'at' h:mm a")}
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => navigate(`/deliveries/${delivery.id}/track`)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center gap-2"
            >
              <>
                <FaMap /> Live Track
              </>
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Print
            </button>
            <button
              onClick={shareDelivery}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Share
            </button>
          </div>
        </div>

        {/* Status Progress Bar */}
        <div className="mb-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">Delivery Status</h2>
          <div className="flex items-center justify-between mb-6">
            {statusSteps.map((step, index) => (
              <div
                key={step.key}
                className="flex flex-col items-center relative"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= currentStepIndex
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="mt-2 text-sm font-medium">{step.label}</span>
                {index < statusSteps.length - 1 && (
                  <div
                    className={`absolute top-5 left-10 w-full h-0.5 ${
                      index < currentStepIndex ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Status Actions */}
          <div className="flex space-x-3">
            {(delivery.status === "pending" ||
              delivery.status === "created") && (
              <button
                onClick={smartAssignCarrier}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                Smart Assign Carrier
              </button>
            )}
            {delivery.status === "pending" && (
              <button
                onClick={() => updateStatus("assigned")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Assign to Carrier
              </button>
            )}
            {delivery.status === "assigned" && (
              <button
                onClick={() => updateStatus("picked_up")}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Mark as Picked Up
              </button>
            )}
            {delivery.status === "picked_up" && (
              <button
                onClick={() => updateStatus("in_transit")}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Start Transit
              </button>
            )}
            {delivery.status === "in_transit" && (
              <button
                onClick={() => updateStatus("delivered")}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Mark as Delivered
              </button>
            )}
            <span
              className={`px-4 py-2 rounded-full font-medium ${
                delivery.status === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : delivery.status === "assigned"
                    ? "bg-blue-100 text-blue-800"
                    : delivery.status === "picked_up"
                      ? "bg-purple-100 text-purple-800"
                      : delivery.status === "in_transit"
                        ? "bg-indigo-100 text-indigo-800"
                        : "bg-green-100 text-green-800"
              }`}
            >
              {delivery.status.replace("_", " ").toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Customer & Carrier Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Customer Profile */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-blue-600">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold inline-flex items-center gap-2">
              <FaUser /> Customer Profile
            </h2>
            {customerProfile && (
              <button
                onClick={() => navigate(`/customers/${customerProfile.id}`)}
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View Profile
              </button>
            )}
          </div>
          {loadingProfiles ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : customerProfile ? (
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-200">
                <p className="text-2xl font-bold text-gray-800">
                  {customerProfile.fullName}
                </p>
                <p className="text-sm text-gray-500">{customerProfile.id}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Email
                  </label>
                  <p className="mt-1 text-sm text-gray-800 truncate">
                    {customerProfile.email}
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Phone
                  </label>
                  <p className="mt-1 text-sm text-gray-800">
                    {customerProfile.phone}
                  </p>
                </div>
              </div>
              {(customerProfile.address || customerProfile.city) && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Location
                  </label>
                  <p className="mt-1 text-sm text-gray-800">
                    {[customerProfile.address, customerProfile.city]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                </div>
              )}
              <div className="pt-3 flex space-x-2">
                <button
                  onClick={() =>
                    (window.location.href = `mailto:${customerProfile.email}`)
                  }
                  className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 text-sm font-medium"
                >
                  <span className="inline-flex items-center gap-2">
                    <FaEnvelope /> Email
                  </span>
                </button>
                <button
                  onClick={() =>
                    (window.location.href = `tel:${customerProfile.phone}`)
                  }
                  className="flex-1 px-3 py-2 bg-green-50 text-green-600 rounded hover:bg-green-100 text-sm font-medium"
                >
                  <span className="inline-flex items-center gap-2">
                    <FaPhone /> Call
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No customer profile found</p>
          )}
        </div>

        {/* Carrier Profile */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-green-600">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold inline-flex items-center gap-2">
              <FaMotorcycle /> Carrier Profile
            </h2>
            {carrierProfile && (
              <button
                onClick={() => navigate(`/carriers/${carrierProfile.id}`)}
                className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                View Profile
              </button>
            )}
          </div>
          {loadingProfiles ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
            </div>
          ) : carrierProfile ? (
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-200">
                <p className="text-2xl font-bold text-gray-800">
                  {carrierProfile.fullName}
                </p>
                <p className="text-sm text-gray-500">{carrierProfile.id}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Email
                  </label>
                  <p className="mt-1 text-sm text-gray-800 truncate">
                    {carrierProfile.email}
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Phone
                  </label>
                  <p className="mt-1 text-sm text-gray-800">
                    {carrierProfile.phone}
                  </p>
                </div>
              </div>
              {carrierProfile.vehicleType && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Vehicle Type
                  </label>
                  <p className="mt-1 text-sm text-gray-800 capitalize">
                    {carrierProfile.vehicleType}
                  </p>
                </div>
              )}
              {carrierProfile.licensePlate && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    License Plate
                  </label>
                  <p className="mt-1 text-sm text-gray-800">
                    {carrierProfile.licensePlate}
                  </p>
                </div>
              )}
              {carrierProfile.status && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Status
                  </label>
                  <p className="mt-1">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${carrierProfile.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                    >
                      {carrierProfile.status}
                    </span>
                  </p>
                </div>
              )}
              <div className="pt-3 flex space-x-2">
                <button
                  onClick={() =>
                    (window.location.href = `mailto:${carrierProfile.email}`)
                  }
                  className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 text-sm font-medium"
                >
                  <span className="inline-flex items-center gap-2">
                    <FaEnvelope /> Email
                  </span>
                </button>
                <button
                  onClick={() =>
                    (window.location.href = `tel:${carrierProfile.phone}`)
                  }
                  className="flex-1 px-3 py-2 bg-green-50 text-green-600 rounded hover:bg-green-100 text-sm font-medium"
                >
                  <span className="inline-flex items-center gap-2">
                    <FaPhone /> Call
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {delivery?.coordinatorReviewRequired &&
              delivery.coordinatorReviewReasons &&
              delivery.coordinatorReviewReasons.length > 0 ? (
                <>
                  <div className="flex items-center gap-2 text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                    <span className="text-lg">⚠️</span>
                    <p className="text-sm font-semibold">
                      Awaiting coordinator assignment
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                      Reasons not auto-assigned
                    </p>
                    <ul className="space-y-2">
                      {delivery.coordinatorReviewReasons.map((reason) => {
                        const reasonInfo: Record<
                          string,
                          { label: string; detail: string; color: string }
                        > = {
                          missing_verified_coordinates: {
                            label: "Unverified GPS Coordinates",
                            detail:
                              "Addresses could not be confirmed on map. Resolve location accuracy before assigning.",
                            color: "red",
                          },
                          no_recommended_carrier_available: {
                            label: "No Carrier Available",
                            detail:
                              "No suitable carrier was found nearby at the time of order. Manually select one.",
                            color: "orange",
                          },
                          carrier_capacity_or_availability_risk: {
                            label: "Carrier Capacity / Availability Risk",
                            detail:
                              "The suggested carrier exceeded safe workload or availability limits. Review before confirming.",
                            color: "yellow",
                          },
                          urgent_priority_requires_coordinator_confirmation: {
                            label: "Urgent Priority — Manual Approval Required",
                            detail:
                              "Urgent deliveries require a coordinator to confirm assignment before dispatch.",
                            color: "purple",
                          },
                        };
                        const info = reasonInfo[reason] ?? {
                          label: reason,
                          detail: "Unknown review flag.",
                          color: "gray",
                        };
                        const colorMap: Record<
                          string,
                          { bg: string; border: string; text: string }
                        > = {
                          red: {
                            bg: "bg-red-50",
                            border: "border-red-200",
                            text: "text-red-700",
                          },
                          orange: {
                            bg: "bg-orange-50",
                            border: "border-orange-200",
                            text: "text-orange-700",
                          },
                          yellow: {
                            bg: "bg-yellow-50",
                            border: "border-yellow-200",
                            text: "text-yellow-700",
                          },
                          purple: {
                            bg: "bg-purple-50",
                            border: "border-purple-200",
                            text: "text-purple-700",
                          },
                          gray: {
                            bg: "bg-gray-50",
                            border: "border-gray-200",
                            text: "text-gray-700",
                          },
                        };
                        const c = colorMap[info.color];
                        return (
                          <li
                            key={reason}
                            className={`rounded-lg border ${c.bg} ${c.border} px-3 py-2`}
                          >
                            <p className={`text-sm font-semibold ${c.text}`}>
                              {info.label}
                            </p>
                            <p className="text-xs text-gray-600 mt-0.5">
                              {info.detail}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {delivery.proposedCarrier && (
                    <div className="border border-blue-200 bg-blue-50 rounded-lg px-3 py-3">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        Proposed Carrier (pending approval)
                      </p>
                      <p className="text-sm font-bold text-blue-800">
                        {delivery.proposedCarrier.carrierName}
                      </p>
                      <p className="text-xs text-blue-600 mt-0.5">
                        Score:{" "}
                        <span className="font-semibold">
                          {delivery.proposedCarrier.recommendationScore}
                        </span>{" "}
                        — {delivery.proposedCarrier.recommendationReason}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-gray-500">No carrier assigned yet</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Package & Customer */}
        <div className="lg:col-span-2 space-y-8">
          {/* Package Details */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4 inline-flex items-center gap-2">
              <FaBox /> Package Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Description
                </label>
                <p className="mt-1 font-medium">
                  {delivery.packageDescription}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Weight
                </label>
                <p className="mt-1 font-medium">
                  {delivery.packageWeight != null
                    ? `${parseFloat(Number(delivery.packageWeight).toFixed(2))} kg`
                    : "Not specified"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Dimensions
                </label>
                <p className="mt-1 font-medium">
                  {delivery.packageDimensions || "Not specified"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Priority
                </label>
                <p className="mt-1 font-medium capitalize">
                  {delivery.priority}
                </p>
              </div>
            </div>
          </div>

          {/* Pickup Details */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4 inline-flex items-center gap-2">
              <FaLocationDot /> Pickup Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Address
                </label>
                <p className="mt-1 font-medium">{delivery.pickupAddress}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Contact Name
                  </label>
                  <p className="mt-1 font-medium">
                    {delivery.pickupContactName}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Contact Phone
                  </label>
                  <p className="mt-1 font-medium">
                    {delivery.pickupContactPhone}
                  </p>
                </div>
              </div>
              {delivery.pickupInstructions && (
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Instructions
                  </label>
                  <p className="mt-1 font-medium">
                    {delivery.pickupInstructions}
                  </p>
                </div>
              )}
              {delivery.pickupDateTime && (
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Scheduled Pickup
                  </label>
                  <p className="mt-1 font-medium">
                    {format(
                      delivery.pickupDateTime,
                      "MMMM d, yyyy 'at' h:mm a",
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4 inline-flex items-center gap-2">
              <FaFlagCheckered /> Delivery Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Address
                </label>
                <p className="mt-1 font-medium">{delivery.deliveryAddress}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Recipient Name
                  </label>
                  <p className="mt-1 font-medium">
                    {delivery.deliveryContactName}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Recipient Phone
                  </label>
                  <p className="mt-1 font-medium">
                    {delivery.deliveryContactPhone}
                  </p>
                </div>
              </div>
              {delivery.deliveryInstructions && (
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Instructions
                  </label>
                  <p className="mt-1 font-medium">
                    {delivery.deliveryInstructions}
                  </p>
                </div>
              )}
              {delivery.deliveryDate && (
                <div>
                  <label className="block text-sm font-medium text-gray-500">
                    Delivery Date
                  </label>
                  <p className="mt-1 font-medium">
                    {format(delivery.deliveryDate, "MMMM d, yyyy")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Info */}
        <div className="space-y-8">
          {/* Status & Tracking */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4 inline-flex items-center gap-2">
              <FaChartColumn /> Status & Tracking
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Tracking Code
                </label>
                <p className="mt-1 font-mono font-bold text-gray-800">
                  {delivery.trackingCode}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Current Status
                </label>
                <p className="mt-1">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      delivery.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : delivery.status === "assigned"
                          ? "bg-blue-100 text-blue-800"
                          : delivery.status === "picked_up"
                            ? "bg-purple-100 text-purple-800"
                            : delivery.status === "in_transit"
                              ? "bg-indigo-100 text-indigo-800"
                              : "bg-green-100 text-green-800"
                    }`}
                  >
                    {delivery.status.replace("_", " ").toUpperCase()}
                  </span>
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Created
                </label>
                <p className="mt-1 text-sm text-gray-700">
                  {delivery.createdAt &&
                    format(delivery.createdAt, "MMM d, yyyy h:mm a")}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Last Updated
                </label>
                <p className="mt-1 text-sm text-gray-700">
                  {delivery.updatedAt &&
                    format(delivery.updatedAt, "MMM d, yyyy h:mm a")}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4 inline-flex items-center gap-2">
              <FaMoneyBill /> Payment Information
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Amount
                </label>
                <p className="mt-1 text-2xl font-bold text-gray-800">
                  M{delivery.paymentAmount.toFixed(2)}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Method
                </label>
                <p className="mt-1 font-medium capitalize">
                  {delivery.paymentMethod.replace("_", " ")}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Status
                </label>
                <span
                  className={`mt-1 inline-block px-3 py-1 rounded-full text-sm ${
                    delivery.paymentStatus === "paid"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {delivery.paymentStatus.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Notes */}
          {delivery.notes && (
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-bold mb-4 inline-flex items-center gap-2">
                <FaNotesMedical /> Notes
              </h2>
              <p className="text-gray-700">{delivery.notes}</p>
            </div>
          )}

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4 inline-flex items-center gap-2">
              <FaBolt /> Quick Actions
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => {
                  const phone =
                    delivery.customerPhone || delivery.deliveryContactPhone;
                  if (!phone) {
                    toast.error("No customer phone available");
                    return;
                  }
                  window.location.href = `tel:${phone}`;
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Send Update to Customer
              </button>
              <button
                onClick={() => {
                  if (!delivery.carrierPhone) {
                    toast.error("No carrier phone available");
                    return;
                  }
                  window.location.href = `tel:${delivery.carrierPhone}`;
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Contact Carrier
              </button>
              <button
                onClick={cancelDelivery}
                className="w-full px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50"
              >
                Cancel Delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
