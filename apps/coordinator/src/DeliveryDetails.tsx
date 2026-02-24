// apps/coordinator/src/DeliveryDetails.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "@config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { format } from "date-fns";
import {
  writeTimestamp,
  getTimeServiceStatus,
} from "./services/timeService";

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
}

export default function DeliveryDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState<DeliveryDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [customerProfile, setCustomerProfile] = useState<CustomerProfile | null>(null);
  const [carrierProfile, setCarrierProfile] = useState<CarrierProfile | null>(null);
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
        `deliveries/${delivery.id}/status`
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
    (step) => step.key === delivery.status
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
              ← Back to Deliveries
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
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Print
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
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
            <h2 className="text-xl font-bold">👤 Customer Profile</h2>
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
                <p className="text-2xl font-bold text-gray-800">{customerProfile.fullName}</p>
                <p className="text-sm text-gray-500">{customerProfile.id}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">Email</label>
                  <p className="mt-1 text-sm text-gray-800 truncate">{customerProfile.email}</p>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">Phone</label>
                  <p className="mt-1 text-sm text-gray-800">{customerProfile.phone}</p>
                </div>
              </div>
              {(customerProfile.address || customerProfile.city) && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">Location</label>
                  <p className="mt-1 text-sm text-gray-800">
                    {[customerProfile.address, customerProfile.city].filter(Boolean).join(", ")}
                  </p>
                </div>
              )}
              <div className="pt-3 flex space-x-2">
                <button
                  onClick={() => window.location.href = `mailto:${customerProfile.email}`}
                  className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 text-sm font-medium"
                >
                  ✉️ Email
                </button>
                <button
                  onClick={() => window.location.href = `tel:${customerProfile.phone}`}
                  className="flex-1 px-3 py-2 bg-green-50 text-green-600 rounded hover:bg-green-100 text-sm font-medium"
                >
                  📞 Call
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
            <h2 className="text-xl font-bold">🏍️ Carrier Profile</h2>
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
                <p className="text-2xl font-bold text-gray-800">{carrierProfile.fullName}</p>
                <p className="text-sm text-gray-500">{carrierProfile.id}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">Email</label>
                  <p className="mt-1 text-sm text-gray-800 truncate">{carrierProfile.email}</p>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">Phone</label>
                  <p className="mt-1 text-sm text-gray-800">{carrierProfile.phone}</p>
                </div>
              </div>
              {carrierProfile.vehicleType && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">Vehicle Type</label>
                  <p className="mt-1 text-sm text-gray-800 capitalize">{carrierProfile.vehicleType}</p>
                </div>
              )}
              {carrierProfile.licensePlate && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">License Plate</label>
                  <p className="mt-1 text-sm text-gray-800">{carrierProfile.licensePlate}</p>
                </div>
              )}
              {carrierProfile.status && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">Status</label>
                  <p className="mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${carrierProfile.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {carrierProfile.status}
                    </span>
                  </p>
                </div>
              )}
              <div className="pt-3 flex space-x-2">
                <button
                  onClick={() => window.location.href = `mailto:${carrierProfile.email}`}
                  className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 text-sm font-medium"
                >
                  ✉️ Email
                </button>
                <button
                  onClick={() => window.location.href = `tel:${carrierProfile.phone}`}
                  className="flex-1 px-3 py-2 bg-green-50 text-green-600 rounded hover:bg-green-100 text-sm font-medium"
                >
                  📞 Call
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No carrier assigned yet</p>
          )}
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Package & Customer */}
        <div className="lg:col-span-2 space-y-8">
          {/* Package Details */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">📦 Package Details</h2>
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
                  {delivery.packageWeight
                    ? `${delivery.packageWeight} kg`
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
            <h2 className="text-xl font-bold mb-4">📍 Pickup Details</h2>
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
                      "MMMM d, yyyy 'at' h:mm a"
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">🏁 Delivery Details</h2>
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
            <h2 className="text-xl font-bold mb-4">📊 Status & Tracking</h2>
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
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    delivery.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    delivery.status === 'assigned' ? 'bg-blue-100 text-blue-800' :
                    delivery.status === 'picked_up' ? 'bg-purple-100 text-purple-800' :
                    delivery.status === 'in_transit' ? 'bg-indigo-100 text-indigo-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {delivery.status.replace('_', ' ').toUpperCase()}
                  </span>
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Created
                </label>
                <p className="mt-1 text-sm text-gray-700">
                  {delivery.createdAt && format(delivery.createdAt, "MMM d, yyyy h:mm a")}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Last Updated
                </label>
                <p className="mt-1 text-sm text-gray-700">
                  {delivery.updatedAt && format(delivery.updatedAt, "MMM d, yyyy h:mm a")}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">💰 Payment Information</h2>
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
              <h2 className="text-xl font-bold mb-4">📝 Notes</h2>
              <p className="text-gray-700">{delivery.notes}</p>
            </div>
          )}

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">⚡ Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Send Update to Customer
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Contact Carrier
              </button>
              <button className="w-full px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
                Cancel Delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
