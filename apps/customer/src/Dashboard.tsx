// apps/customer/src/Dashboard.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "@config";
import { collection, query, where, getDocs } from "firebase/firestore";

type Props = {
  user: any;
  userProfile?: any;
};

export default function Dashboard({ user, userProfile }: Props) {
  const [deliveries, setDeliveries] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    activeOrders: 0,
    completedOrders: 0,
    totalSpent: 0,
  });

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const q = query(
          collection(db, "deliveries"),
          where("customerId", "==", user.uid),
        );
        const snapshot = await getDocs(q);
        const deliveryList: any[] = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          deliveryList.push({
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

        setDeliveries(deliveryList.slice(0, 5)); // Show recent 5

        // Calculate stats
        const totalSpent = deliveryList.reduce(
          (sum, delivery) => sum + (Number(delivery.paymentAmount) || 0),
          0,
        );

        setStats({
          totalOrders: deliveryList.length,
          activeOrders: deliveryList.filter((d) => d.status !== "delivered")
            .length,
          completedOrders: deliveryList.filter((d) => d.status === "delivered")
            .length,
          totalSpent,
        });
      } catch (error) {
        console.error("Error fetching deliveries:", error);
      }
    };

    fetchDeliveries();
  }, [user.uid]);

  const quickActions = [
    {
      label: "Create Order",
      icon: "📝",
      path: "/orders/new",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      label: "Track Order",
      icon: "📍",
      path: "/track",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      label: "Live Tracking",
      icon: "🗺️",
      path: "/track-map",
      color: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      label: "My Orders",
      icon: "📦",
      path: "/orders",
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <div>
      <div className="mb-5 sm:mb-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Welcome Back, {userProfile?.fullName || "Customer"}!
        </h1>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          Here's an overview of your deliveries and account.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mb-6 grid grid-cols-1 gap-3 sm:mb-8 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Link
          to="/orders?filter=all"
          className="rounded-xl bg-white p-4 shadow transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:p-6"
        >
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <span className="text-2xl">📦</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 sm:text-sm">Total Orders</p>
              <p className="text-2xl font-bold sm:text-3xl">{stats.totalOrders}</p>
              <p className="mt-1 text-xs font-medium text-blue-600">Tap to view all orders →</p>
            </div>
          </div>
        </Link>

        <Link
          to="/orders?filter=active"
          className="rounded-xl bg-white p-4 shadow transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:p-6"
        >
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg mr-4">
              <span className="text-2xl">⏳</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 sm:text-sm">Active Orders</p>
              <p className="text-2xl font-bold sm:text-3xl">{stats.activeOrders}</p>
              <p className="mt-1 text-xs font-medium text-yellow-700">Tap to view in-transit & assigned →</p>
            </div>
          </div>
        </Link>

        <Link
          to="/orders?filter=completed"
          className="rounded-xl bg-white p-4 shadow transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 sm:p-6"
        >
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <span className="text-2xl">✅</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 sm:text-sm">Completed</p>
              <p className="text-2xl font-bold sm:text-3xl">{stats.completedOrders}</p>
              <p className="mt-1 text-xs font-medium text-green-700">Tap to view delivered orders →</p>
            </div>
          </div>
        </Link>

        <Link
          to="/orders?filter=completed&focus=spent"
          className="rounded-xl bg-white p-4 shadow transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 sm:p-6"
        >
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <span className="text-2xl">💰</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 sm:text-sm">Total Spent</p>
              <p className="text-2xl font-bold sm:text-3xl">M{stats.totalSpent.toFixed(2)}</p>
              <p className="mt-1 text-xs font-medium text-purple-700">Tap to view spending details →</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="mb-6 rounded-xl bg-white p-4 shadow sm:mb-8 sm:p-8">
        <h3 className="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              className={`${action.color} rounded-lg p-3 text-center text-white transition transform hover:scale-105 sm:p-4`}
            >
              <span className="mb-1 block text-2xl sm:mb-2 sm:text-3xl">{action.icon}</span>
              <span className="text-sm font-medium sm:text-base">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Orders */}
      <div className="rounded-xl bg-white p-4 shadow sm:p-6">
        <h3 className="mb-4 text-lg font-bold sm:text-xl">Recent Orders</h3>
        {deliveries.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No orders yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Tracking Code</th>
                  <th className="text-left py-3 px-4">Delivery To</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.map((delivery) => (
                  <tr key={delivery.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">
                      {delivery.trackingCode}
                    </td>
                    <td className="py-3 px-4">{delivery.deliveryAddress}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          delivery.status === "delivered"
                            ? "bg-green-100 text-green-800"
                            : delivery.status === "in_transit"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {delivery.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {delivery.createdAt.toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
