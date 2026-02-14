import { useState, useEffect } from "react";
import { db, auth } from "@config";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { CarrierService } from "./carrierService";
import { useDeliveryStatus } from "./hooks/useDeliveryStatus";
import { formatCurrency, formatDate } from "./utils";

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
  };
  trackingCode?: string;
  packageDescription?: string;
  packageWeight: number; // Changed to non-optional with default value
  recipientName?: string;
  recipientPhone?: string;
  deliveryInstructions?: string;
  earnings?: number;
}

export default function MyDeliveries() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("active"); // active, completed, all
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState<Delivery | null>(null);
  const [otpInput, setOtpInput] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [updatingDeliveryId, setUpdatingDeliveryId] = useState<string | null>(null);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const { updateStatus, getAvailableStatuses, getStatusInfo } = useDeliveryStatus();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, "deliveries"),
      where("carrierId", "==", user.uid),
      orderBy("createdAt", "desc")
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
            trackingCode: data.trackingCode || `TRK${doc.id.slice(0, 8).toUpperCase()}`,
            packageDescription: data.packageDescription || "No description",
            packageWeight: data.packageWeight || 0, // Default value
            recipientName: data.recipientName || data.customerName,
            recipientPhone: data.recipientPhone || data.customerPhone,
            deliveryInstructions: data.deliveryInstructions,
          });
        });
        setDeliveries(deliveryList);
        setLoading(false);
      },
      (error) => {
        console.error("Error loading deliveries:", error);
        toast.error("Failed to load deliveries");
        setLoading(false);
      }
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
    newStatus: 'picked_up' | 'in_transit' | 'stuck' | 'delivered'
  ) => {
    setUpdatingDeliveryId(deliveryId);
    try {
      const delivery = deliveries.find(d => d.id === deliveryId);
      if (!delivery) throw new Error("Delivery not found");

      await updateStatus(deliveryId, newStatus, delivery.status);

      toast.success(`✅ Status updated to ${newStatus.replace('_', ' ')}`);
      
      // Update local state
      setDeliveries(prev => prev.map(d => 
        d.id === deliveryId ? { ...d, status: newStatus } : d
      ));

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

    if (!selectedDelivery.proofOfDelivery?.otp) {
      toast.error("No OTP set for this delivery");
      return;
    }

    if (otpInput !== selectedDelivery.proofOfDelivery.otp) {
      toast.error("Invalid OTP. Please try again.");
      setOtpInput("");
      return;
    }

    setVerifying(true);
    try {
      await handleStatusUpdate(selectedDelivery.id, 'delivered');
      
      toast.success("✅ Delivery completed successfully!");
      setShowOtpModal(false);
      setOtpInput("");
      setSelectedDelivery(null);

      // Check if carrier has more active deliveries
      const activeCount = deliveries.filter((d) =>
        [
          "assigned",
          "accepted",
          "picked_up",
          "in_transit",
          "stuck",
        ].includes(d.status) && d.id !== selectedDelivery.id
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
        return <span className={`${baseClass} bg-gray-100 text-gray-800`}>⏳ Pending</span>;
      case "assigned":
        return <span className={`${baseClass} bg-blue-100 text-blue-800`}>📍 Assigned</span>;
      case "accepted":
        return <span className={`${baseClass} bg-indigo-100 text-indigo-800`}>✋ Accepted</span>;
      case "picked_up":
        return <span className={`${baseClass} bg-blue-200 text-blue-800`}>📦 Picked Up</span>;
      case "in_transit":
        return <span className={`${baseClass} bg-purple-100 text-purple-800`}>🚚 In Transit</span>;
      case "stuck":
        return <span className={`${baseClass} bg-orange-100 text-orange-800`}>⚠️ Stuck</span>;
      case "delivered":
        return <span className={`${baseClass} bg-green-100 text-green-800`}>✅ Delivered</span>;
      default:
        return <span className={`${baseClass} bg-gray-100 text-gray-800`}>{status}</span>;
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
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <Toaster position="top-right" />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Deliveries</h1>
        <p className="text-gray-600 mt-2">
          Manage your active and completed deliveries
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-4 md:p-6 mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setFilter("active")}
            className={`px-4 py-2 rounded-lg transition ${
              filter === "active"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Active (
            {deliveries.filter((d) =>
              [
                "assigned",
                "accepted",
                "picked_up",
                "in_transit",
                "stuck",
              ].includes(d.status)
            ).length}
            )
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-lg transition ${
              filter === "completed"
                ? "bg-green-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Completed ({deliveries.filter((d) => d.status === "delivered").length})
          </button>
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg transition ${
              filter === "all"
                ? "bg-gray-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All ({deliveries.length})
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-xs text-blue-700 font-semibold">Total Earnings</p>
            <p className="text-lg font-bold text-blue-900">
              {formatCurrency(deliveries.reduce((sum, d) => sum + (d.earnings || 0), 0))}
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <p className="text-xs text-green-700 font-semibold">Active</p>
            <p className="text-lg font-bold text-green-900">
              {deliveries.filter(d => ["assigned", "accepted", "picked_up", "in_transit", "stuck"].includes(d.status)).length}
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3">
            <p className="text-xs text-purple-700 font-semibold">Completed</p>
            <p className="text-lg font-bold text-purple-900">
              {deliveries.filter(d => d.status === "delivered").length}
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-3">
            <p className="text-xs text-orange-700 font-semibold">Total</p>
            <p className="text-lg font-bold text-orange-900">
              {deliveries.length}
            </p>
          </div>
        </div>
      </div>

      {/* Delivery Cards */}
      {filteredDeliveries.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <div className="text-6xl mb-4">📦</div>
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
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition"
              >
                {/* Card Header */}
                <div className="p-4 border-b bg-gradient-to-r from-gray-50 to-gray-100">
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
                        {formatCurrency(delivery.earnings || delivery.estimatedEarnings || 0)}
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
                        <span className="text-blue-600 mr-2">📍</span>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500">Pickup</p>
                          <p className="text-sm font-medium text-gray-800 line-clamp-2">
                            {delivery.pickupAddress}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-600 mr-2">🏁</span>
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
                      <p className="text-sm font-semibold text-gray-700 mb-1">Package</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 truncate mr-2">
                          {delivery.packageDescription}
                        </span>
                        {delivery.packageWeight > 0 && (
                          <span className="font-medium whitespace-nowrap">
                            {delivery.packageWeight} kg
                          </span>
                        )}
                      </div>
                    </div>

                    {/* More Details Section */}
                    {isExpanded && (
                      <div className="pt-3 border-t space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Recipient</p>
                            <p className="text-sm font-medium">{delivery.recipientName}</p>
                            <p className="text-sm text-gray-600">{delivery.recipientPhone}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Created</p>
                            <p className="text-sm">{formatDate(delivery.createdAt)}</p>
                          </div>
                        </div>
                        
                        {delivery.deliveryInstructions && (
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-xs font-semibold text-yellow-800 mb-1">📝 Instructions</p>
                            <p className="text-sm text-yellow-900">{delivery.deliveryInstructions}</p>
                          </div>
                        )}

                        {delivery.distance > 0 && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Distance:</span>
                            <span className="font-medium">{delivery.distance.toFixed(1)} km</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Status Update Buttons */}
                    {availableStatuses.length > 0 && (
                      <div className="pt-3 border-t">
                        <div className="mb-2">
                          <p className="text-xs text-gray-500 font-medium mb-1">Update Status</p>
                          <div className="flex flex-wrap gap-2">
                            {availableStatuses.map((status) => {
                              const info = getStatusInfo(status);
                              return (
                                <button
                                  key={status}
                                  onClick={() => handleStatusUpdate(delivery.id, status)}
                                  disabled={updatingDeliveryId === delivery.id}
                                  className={`px-3 py-2 rounded-lg text-white text-xs font-medium transition ${info.color} hover:opacity-90 disabled:opacity-50 flex items-center gap-1`}
                                >
                                  <span>{info.icon}</span>
                                  <span>{info.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Delivery Complete Button */}
                    {delivery.status === 'in_transit' && !availableStatuses.includes('delivered') && (
                      <button
                        onClick={() => {
                          setSelectedDelivery(delivery);
                          setShowOtpModal(true);
                        }}
                        className="w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:shadow-md transition flex items-center justify-center gap-2"
                      >
                        <span>✅</span>
                        Complete Delivery
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-4 py-3 bg-gray-50 border-t flex justify-between items-center">
                  <button
                    onClick={() => setExpandedCardId(isExpanded ? null : delivery.id)}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                  >
                    <span>{isExpanded ? '▲' : '▼'}</span>
                    {isExpanded ? 'Show Less' : 'More Details'}
                  </button>
                  
                  <div className="text-xs text-gray-500">
                    {delivery.assignedAt && `Assigned: ${formatDate(delivery.assignedAt)}`}
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
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-blue-800 font-medium text-sm">
                    📍 {selectedDelivery.deliveryAddress}
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
                  The customer will provide this code from their delivery notification
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
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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

      {/* Footer Stats */}
      {filteredDeliveries.length > 0 && (
        <div className="mt-8 bg-white rounded-xl shadow p-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-bold text-gray-800">{filteredDeliveries.length}</span>{" "}
              of <span className="font-bold text-gray-800">{deliveries.length}</span>{" "}
              deliveries
            </div>
            <div className="text-sm text-gray-600">
              Last updated: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}