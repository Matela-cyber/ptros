// apps/customer/src/OrderHistory.tsx
import { useState, useEffect } from "react";
import { db } from "@config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth } from "@config";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

interface Order {
  id: string;
  trackingCode: string;
  status: string;
  pickupAddress: string;
  deliveryAddress: string;
  createdAt: Date;
  estimatedDelivery?: Date;
}

export default function OrderHistory() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const q = query(
        collection(db, "deliveries"),
        where("customerId", "==", user.uid)
      );

      const snapshot = await getDocs(q);
      const orderList: Order[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data();
        orderList.push({
          id: doc.id,
          trackingCode: data.trackingCode,
          status: data.status,
          pickupAddress: data.pickupAddress,
          deliveryAddress: data.deliveryAddress,
          createdAt: data.createdAt?.toDate() || new Date(),
          estimatedDelivery: data.estimatedDelivery?.toDate(),
        });
      });

      orderList.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      );
      setOrders(orderList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to load orders");
      setLoading(false);
    }
  };

  const filteredOrders = orders.filter((order) => {
    if (filter === "all") return true;
    if (filter === "pending") return order.status === "pending";
    if (filter === "active")
      return order.status === "assigned" || order.status === "in_transit";
    if (filter === "completed") return order.status === "delivered";
    return true;
  });

  return (
    <div>
      <Toaster position="top-right" />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
        <p className="text-gray-600 mt-2">View and track all your deliveries</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Orders ({orders.length})
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === "pending"
                ? "bg-yellow-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === "active"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            In Transit
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === "completed"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Orders List */}
      {loading ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your orders...</p>
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-gray-500 text-lg">No orders found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <Link
              key={order.id}
              to={`/orders/${order.id}`}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-lg font-bold">
                      {order.trackingCode}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "in_transit"
                          ? "bg-blue-100 text-blue-800"
                          : order.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    To: {order.deliveryAddress}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Ordered on {order.createdAt.toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
