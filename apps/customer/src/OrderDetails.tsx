// apps/customer/src/OrderDetails.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "@config";
import { doc, getDoc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";

interface OrderDetail {
  id: string;
  trackingCode: string;
  status: string;
  pickupAddress: string;
  deliveryAddress: string;
  packageDetails: string;
  carrierName?: string;
  createdAt: Date;
  estimatedDelivery?: Date;
  actualDelivery?: Date;
  currentLocation?: {
    lat: number;
    lng: number;
  };
}

export default function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        if (!id) return;
        const docRef = doc(db, "deliveries", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setOrder({
            id: docSnap.id,
            trackingCode: data.trackingCode,
            status: data.status,
            pickupAddress: data.pickupAddress,
            deliveryAddress: data.deliveryAddress,
            packageDetails: data.packageDetails,
            carrierName: data.carrierName,
            createdAt: data.createdAt?.toDate() || new Date(),
            estimatedDelivery: data.estimatedDelivery?.toDate(),
            actualDelivery: data.actualDelivery?.toDate(),
            currentLocation: data.currentLocation,
          });
        } else {
          toast.error("Order not found");
          navigate("/orders");
        }
      } catch (error) {
        console.error("Error fetching order:", error);
        toast.error("Failed to load order details");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center">
        <p className="text-gray-500 text-lg">Order not found</p>
      </div>
    );
  }

  const getStatusSteps = () => {
    const steps = ["pending", "assigned", "picked_up", "in_transit", "delivered"];
    return steps.map((step, index) => ({
      step,
      completed: steps.indexOf(order.status) >= index,
    }));
  };

  return (
    <div>
      <Toaster position="top-right" />
      <button
        onClick={() => navigate("/orders")}
        className="mb-6 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
      >
        ← Back to Orders
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Header */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold">{order.trackingCode}</h1>
                <p className="text-gray-600 mt-2">
                  Ordered on {order.createdAt.toLocaleDateString()}
                </p>
              </div>
              <span
                className={`px-4 py-2 rounded-full text-lg font-medium ${
                  order.status === "delivered"
                    ? "bg-green-100 text-green-800"
                    : order.status === "in_transit"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>

          {/* Status Timeline */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-6">Delivery Progress</h3>
            <div className="flex items-center justify-between">
              {getStatusSteps().map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 ${
                      item.completed
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {item.completed ? "✓" : index + 1}
                  </div>
                  <p
                    className={`text-sm text-center ${
                      item.completed ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    {item.step}
                  </p>
                  {index < getStatusSteps().length - 1 && (
                    <div
                      className={`h-1 w-full mx-2 mt-4 ${
                        item.completed ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4">Delivery Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Pickup Address</p>
                <p className="text-gray-800 font-medium">
                  {order.pickupAddress}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Delivery Address</p>
                <p className="text-gray-800 font-medium">
                  {order.deliveryAddress}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Package Details</p>
                <p className="text-gray-800 font-medium">
                  {order.packageDetails}
                </p>
              </div>
              {order.carrierName && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Carrier</p>
                  <p className="text-gray-800 font-medium">
                    {order.carrierName}
                  </p>
                </div>
              )}
              {order.estimatedDelivery && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Estimated Delivery
                  </p>
                  <p className="text-gray-800 font-medium">
                    {order.estimatedDelivery.toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Carrier */}
          {order.status !== "delivered" && (
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-bold mb-4">Need Help?</h3>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium">
                📞 Contact Carrier
              </button>
              <button className="w-full mt-2 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 font-medium">
                💬 Chat Support
              </button>
            </div>
          )}

          {/* Delivered Info */}
          {order.status === "delivered" && order.actualDelivery && (
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold mb-2">✓ Delivered</h3>
              <p className="text-sm text-green-800">
                Your package was delivered on{" "}
                {order.actualDelivery.toLocaleDateString()}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold mb-4">Actions</h3>
            <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium mb-2">
              📱 Share Tracking
            </button>
            <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
              🖨️ Print Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
