// apps/coordinator/src/CarrierDetails.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "@config";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { format } from "date-fns";

interface Carrier {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  vehicleType: string;
  licensePlate: string;
  status: string;
  isApproved: boolean;
  earnings: number;
  completedDeliveries: number;
  rating: number;
  createdAt: Date;
  lastActive: Date;
  currentLocation?: {
    lat: number;
    lng: number;
    timestamp: Date;
  };
}

export default function CarrierDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [carrier, setCarrier] = useState<Carrier | null>(null);
  const [loading, setLoading] = useState(true);
  const [recentDeliveries, setRecentDeliveries] = useState<any[]>([]);
  const [deliveryStats, setDeliveryStats] = useState({
    total: 0,
    completed: 0,
    inProgress: 0,
    failed: 0,
  });

  useEffect(() => {
    if (id) {
      loadCarrier(id);
      loadCarrierDeliveries(id);
    }
  }, [id]);

  const loadCarrier = async (carrierId: string) => {
    try {
      const docRef = doc(db, "users", carrierId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setCarrier({
          id: docSnap.id,
          email: data.email || "",
          fullName: data.fullName || "Unknown",
          phone: data.phone || "",
          whatsapp: data.whatsapp || data.phone || "",
          address: data.address || "",
          city: data.city || "",
          vehicleType: data.vehicleType || "Not specified",
          licensePlate: data.licensePlate || "Not specified",
          status: data.status || "pending",
          isApproved: data.isApproved || false,
          earnings: data.earnings || 0,
          completedDeliveries: data.completedDeliveries || 0,
          rating: data.rating || 0,
          createdAt: data.createdAt?.toDate() || new Date(),
          lastActive: data.lastActive?.toDate() || new Date(),
          currentLocation: data.currentLocation
            ? {
                lat: data.currentLocation.lat,
                lng: data.currentLocation.lng,
                timestamp: data.currentLocation.timestamp?.toDate() || new Date(),
              }
            : undefined,
        });
      } else {
        toast.error("Carrier not found");
        navigate("/carriers");
      }
    } catch (error) {
      console.error("Error loading carrier:", error);
      toast.error("Failed to load carrier details");
    } finally {
      setLoading(false);
    }
  };

  const loadCarrierDeliveries = async (carrierId: string) => {
    try {
      const q = query(collection(db, "deliveries"), where("carrierId", "==", carrierId));
      const snapshot = await getDocs(q);
      
      const deliveries: any[] = [];
      let stats = { total: 0, completed: 0, inProgress: 0, failed: 0 };

      snapshot.forEach((doc) => {
        const data = doc.data();
        deliveries.push({
          id: doc.id,
          ...data,
        });

        stats.total++;
        if (data.status === "delivered") stats.completed++;
        else if (data.status === "in_transit" || data.status === "picked_up") stats.inProgress++;
        else if (data.status === "cancelled") stats.failed++;
      });

      setRecentDeliveries(deliveries.slice(0, 5));
      setDeliveryStats(stats);
    } catch (error) {
      console.error("Error loading carrier deliveries:", error);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    );
  }

  if (!carrier) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">Carrier not found</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate("/carriers")}
          className="mb-4 px-4 py-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Carriers
        </button>
      </div>

      {/* Carrier Header */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-8 border-l-4 border-green-600">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{carrier.fullName}</h1>
            <p className="text-gray-500 mt-1">Carrier ID: {carrier.id}</p>
          </div>
          <div className="text-right">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              carrier.status === 'active' ? 'bg-green-100 text-green-800' :
              carrier.status === 'inactive' ? 'bg-gray-100 text-gray-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {carrier.status.toUpperCase()}
            </span>
            {carrier.isApproved && (
              <p className="text-green-600 font-semibold mt-2">✓ Approved</p>
            )}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500 text-sm font-medium">Total Deliveries</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{deliveryStats.total}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500 text-sm font-medium">Completed</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{deliveryStats.completed}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500 text-sm font-medium">In Progress</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{deliveryStats.inProgress}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500 text-sm font-medium">Total Earnings</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">M{carrier.earnings.toFixed(2)}</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">📞 Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500">Email</label>
                <p className="mt-2 text-gray-800 truncate">{carrier.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Phone</label>
                <p className="mt-2 text-gray-800">{carrier.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">WhatsApp</label>
                <p className="mt-2 text-gray-800">{carrier.whatsapp}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">City</label>
                <p className="mt-2 text-gray-800">{carrier.city || "Not specified"}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <label className="block text-sm font-medium text-gray-500">Address</label>
              <p className="mt-2 text-gray-800">{carrier.address || "Not specified"}</p>
            </div>
            <div className="mt-4 flex space-x-3">
              <button
                onClick={() => window.location.href = `mailto:${carrier.email}`}
                className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 font-medium"
              >
                ✉️ Email
              </button>
              <button
                onClick={() => window.location.href = `tel:${carrier.phone}`}
                className="flex-1 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 font-medium"
              >
                📞 Call
              </button>
            </div>
          </div>

          {/* Vehicle Information */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">🚗 Vehicle Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500">Vehicle Type</label>
                <p className="mt-2 text-gray-800 capitalize">{carrier.vehicleType}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">License Plate</label>
                <p className="mt-2 text-gray-800 font-mono">{carrier.licensePlate}</p>
              </div>
            </div>
          </div>

          {/* Recent Deliveries */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">📦 Recent Deliveries</h2>
            {recentDeliveries.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">Tracking</th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">Customer</th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">Status</th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentDeliveries.map((delivery) => (
                      <tr key={delivery.id} className="border-t border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-2 text-gray-800 font-mono">{delivery.trackingCode}</td>
                        <td className="px-4 py-2 text-gray-800">{delivery.customerName}</td>
                        <td className="px-4 py-2">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            delivery.status === 'delivered' ? 'bg-green-100 text-green-800' :
                            delivery.status === 'in_transit' ? 'bg-blue-100 text-blue-800' :
                            delivery.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {delivery.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-gray-800">M{delivery.paymentAmount?.toFixed(2) || '0.00'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No deliveries yet</p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Performance */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">⭐ Performance</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">Rating</label>
                <p className="mt-2 text-2xl font-bold text-yellow-500">
                  {carrier.rating > 0 ? carrier.rating.toFixed(1) : "N/A"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Completed Deliveries</label>
                <p className="mt-2 text-2xl font-bold text-green-600">{carrier.completedDeliveries}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Total Earnings</label>
                <p className="mt-2 text-2xl font-bold text-purple-600">M{carrier.earnings.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">📋 Account Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">Status</label>
                <p className="mt-2 capitalize font-medium text-gray-800">{carrier.status}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Approval Status</label>
                <p className="mt-2">
                  {carrier.isApproved ? (
                    <span className="text-green-600 font-semibold">✓ Approved</span>
                  ) : (
                    <span className="text-yellow-600 font-semibold">⏳ Pending Approval</span>
                  )}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Joined</label>
                <p className="mt-2 text-gray-800">{format(carrier.createdAt, "MMM d, yyyy")}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Last Active</label>
                <p className="mt-2 text-gray-800">{format(carrier.lastActive, "MMM d, yyyy h:mm a")}</p>
              </div>
            </div>
          </div>

          {/* Current Location */}
          {carrier.currentLocation && (
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-bold mb-4">📍 Current Location</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Latitude</label>
                  <p className="mt-1 text-gray-800 font-mono text-sm">{carrier.currentLocation.lat.toFixed(6)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Longitude</label>
                  <p className="mt-1 text-gray-800 font-mono text-sm">{carrier.currentLocation.lng.toFixed(6)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Last Updated</label>
                  <p className="mt-1 text-sm text-gray-700">
                    {format(carrier.currentLocation.timestamp, "MMM d, yyyy h:mm a")}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
