// apps/customer/src/OrderHistory.tsx
import { useState, useEffect } from "react";
import { db } from "@config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth } from "@config";
import { toast, Toaster } from "react-hot-toast";
import { Link, useSearchParams } from "react-router-dom";

interface Order {
  id: string;
  trackingCode: string;
  status: string;
  pickupAddress: string;
  deliveryAddress: string;
  paymentAmount?: number;
  createdAt: Date;
  estimatedDelivery?: Date;
}

export default function OrderHistory() {
  const [searchParams] = useSearchParams();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const queryFilter = searchParams.get("filter");
    const validFilters = new Set(["all", "pending", "active", "completed"]);
    if (queryFilter && validFilters.has(queryFilter)) {
      setFilter(queryFilter);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const q = query(
        collection(db, "deliveries"),
        where("customerId", "==", user.uid),
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
          paymentAmount: Number(data.paymentAmount || 0),
          createdAt: data.createdAt?.toDate() || new Date(),
          estimatedDelivery: data.estimatedDelivery?.toDate(),
        });
      });

      orderList.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
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
      return (
        order.status === "assigned" ||
        order.status === "picked_up" ||
        order.status === "in_transit" ||
        order.status === "out_for_delivery"
      );
    if (filter === "completed") return order.status === "delivered";
    return true;
  });

  const totalSpent = orders.reduce(
    (sum, order) => sum + (Number(order.paymentAmount) || 0),
    0,
  );
  const completedSpent = orders
    .filter((order) => order.status === "delivered")
    .reduce((sum, order) => sum + (Number(order.paymentAmount) || 0), 0);
  const focusSpent = searchParams.get("focus") === "spent";

  return (
    <div>
      <Toaster position="top-right" />
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
          My Orders
        </h1>
        <p className="mt-1.5 text-sm text-gray-600">
          View and track all your deliveries
        </p>
      </div>

      {focusSpent && (
        <div className="mb-6 rounded-lg border border-purple-200 bg-purple-50 p-4 shadow-sm">
          <h2 className="text-base font-bold text-purple-900 sm:text-lg">
            Spending Information
          </h2>
          <p className="mt-1 text-sm text-purple-800">
            You are viewing completed orders with payment details.
          </p>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-3">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Total Spent (All Orders)
              </p>
              <p className="text-xl font-bold text-gray-900">
                M{totalSpent.toFixed(2)}
              </p>
            </div>
            <div className="rounded-lg bg-white p-3">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Spent on Completed Orders
              </p>
              <p className="text-xl font-bold text-gray-900">
                M{completedSpent.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Orders ({orders.length})
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
              filter === "pending"
                ? "bg-yellow-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
              filter === "active"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
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
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your orders...</p>
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-500 text-lg">No orders found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2 sm:gap-4">
                    <h3 className="text-base font-bold sm:text-lg">
                      {order.trackingCode}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium sm:text-sm ${
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
                  <p className="text-sm text-gray-600 sm:text-base">
                    To: {order.deliveryAddress}
                  </p>
                  <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                    Ordered on {order.createdAt.toLocaleDateString()}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-purple-700 sm:text-sm">
                    Amount: M{Number(order.paymentAmount || 0).toFixed(2)}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    <Link
                      to={`/track/${order.id}`}
                      className="rounded-md bg-cyan-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-cyan-700"
                    >
                      Live Track
                    </Link>
                    <Link
                      to={`/orders/${order.id}`}
                      className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
