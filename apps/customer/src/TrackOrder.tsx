// apps/customer/src/TrackOrder.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "@config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";

interface TrackedOrder {
  id: string;
  trackingCode: string;
  status: string;
  deliveryAddress: string;
  carrierName?: string;
  estimatedDelivery?: Date;
}

export default function TrackOrder() {
  const [trackingCode, setTrackingCode] = useState("");
  const [order, setOrder] = useState<TrackedOrder | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingCode.trim()) {
      toast.error("Please enter a tracking code");
      return;
    }

    setLoading(true);
    try {
      const q = query(
        collection(db, "deliveries"),
        where("trackingCode", "==", trackingCode.toUpperCase())
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        toast.error("Tracking code not found");
        setOrder(null);
      } else {
        const doc = snapshot.docs[0];
        const data = doc.data();
        setOrder({
          id: doc.id,
          trackingCode: data.trackingCode,
          status: data.status,
          deliveryAddress: data.deliveryAddress,
          carrierName: data.carrierName,
          estimatedDelivery: data.estimatedDelivery?.toDate(),
        });
        toast.success("Order found!");
      }
    } catch (error) {
      console.error("Error tracking order:", error);
      toast.error("Failed to track order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Track Your Order</h1>
          <p className="text-gray-600 mt-2">
            Enter your tracking code to get real-time updates
          </p>
        </div>
        <Link
          to="/track-map"
          className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-medium flex items-center gap-2 h-fit"
        >
          🗺️ View Live Map
        </Link>
      </div>

      {/* Search Form */}
      <div className="bg-white rounded-xl shadow p-8 mb-8">
        <form onSubmit={handleTrack}>
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                placeholder="e.g., PTR-001234"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-lg"
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Tracking..." : "Track"}
            </button>
          </div>
        </form>

        {/* Recent Searches */}
        <div className="mt-6 pt-6 border-t">
          <p className="text-sm text-gray-600 mb-3">Recent Searches</p>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">
              PTR-001
            </button>
            <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">
              PTR-045
            </button>
            <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">
              PTR-089
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {order && (
        <div className="space-y-6">
          {/* Status Card */}
          <div className="bg-white rounded-xl shadow p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">{order.trackingCode}</h2>
                <p className="text-gray-600 mt-1">
                  Destination: {order.deliveryAddress}
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

            {/* Timeline */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 text-lg">✓</span>
                </div>
                <div>
                  <p className="font-medium">Order Received</p>
                  <p className="text-sm text-gray-500">
                    Your order has been received
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                    order.status !== "pending"
                      ? "bg-blue-100"
                      : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`text-lg ${
                      order.status !== "pending"
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  >
                    {order.status !== "pending" ? "✓" : "2"}
                  </span>
                </div>
                <div>
                  <p className="font-medium">
                    {order.carrierName ? `Assigned to ${order.carrierName}` : "Waiting for Carrier"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {order.carrierName
                      ? "Your carrier has been assigned"
                      : "Waiting for a carrier to pick up"}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                    order.status === "in_transit" || order.status === "delivered"
                      ? "bg-blue-100"
                      : "bg-gray-200"
                  }`}
                >
                  <span
                    className={
                      order.status === "in_transit" ||
                      order.status === "delivered"
                        ? "text-blue-600 text-lg"
                        : "text-gray-400"
                    }
                  >
                    {order.status === "in_transit" ||
                    order.status === "delivered"
                      ? "✓"
                      : "3"}
                  </span>
                </div>
                <div>
                  <p className="font-medium">In Transit</p>
                  <p className="text-sm text-gray-500">
                    Your package is on its way
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                    order.status === "delivered"
                      ? "bg-green-100"
                      : "bg-gray-200"
                  }`}
                >
                  <span
                    className={
                      order.status === "delivered"
                        ? "text-green-600 text-lg"
                        : "text-gray-400"
                    }
                  >
                    {order.status === "delivered" ? "✓" : "4"}
                  </span>
                </div>
                <div>
                  <p className="font-medium">Delivered</p>
                  <p className="text-sm text-gray-500">
                    {order.estimatedDelivery
                      ? `Estimated: ${order.estimatedDelivery.toLocaleDateString()}`
                      : "Delivery in progress"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold mb-4">Need Help?</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions about your delivery, our support team is
              here to help.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium">
              📞 Contact Support
            </button>
          </div>
        </div>
      )}

      {!order && trackingCode && !loading && (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-gray-600">
            Enter a tracking code and click Track to see order details
          </p>
        </div>
      )}
    </div>
  );
}
