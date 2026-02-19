// apps/customer/src/Dashboard.tsx
import { useEffect, useState } from "react";
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
            createdAt: data.createdAt?.toDate() || new Date(),
            estimatedDelivery: data.estimatedDelivery?.toDate(),
          });
        });

        setDeliveries(deliveryList.slice(0, 5)); // Show recent 5

        // Calculate stats
        setStats({
          totalOrders: deliveryList.length,
          activeOrders: deliveryList.filter((d) => d.status !== "delivered")
            .length,
          completedOrders: deliveryList.filter((d) => d.status === "delivered")
            .length,
          totalSpent: 0, // TODO: Calculate from actual data
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Welcome Back, {userProfile?.fullName || "Customer"}!
          </h1>
          <p className="text-cyan-600 mt-2 font-semibold">
            Here's an overview of your deliveries and account.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all border border-blue-300/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-bold uppercase tracking-wide">
                  Total Orders
                </p>
                <p className="text-4xl font-extrabold mt-2">
                  {stats.totalOrders}
                </p>
              </div>
              <div className="p-4 bg-white/20 rounded-xl">
                <span className="text-4xl">📦</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-6 text-white shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all border border-yellow-300/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm font-bold uppercase tracking-wide">
                  Active Orders
                </p>
                <p className="text-4xl font-extrabold mt-2">
                  {stats.activeOrders}
                </p>
              </div>
              <div className="p-4 bg-white/20 rounded-xl">
                <span className="text-4xl">⏳</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all border border-emerald-300/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm font-bold uppercase tracking-wide">
                  Completed
                </p>
                <p className="text-4xl font-extrabold mt-2">
                  {stats.completedOrders}
                </p>
              </div>
              <div className="p-4 bg-white/20 rounded-xl">
                <span className="text-4xl">✅</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all border border-pink-300/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm font-bold uppercase tracking-wide">
                  Total Spent
                </p>
                <p className="text-4xl font-extrabold mt-2">
                  M{stats.totalSpent}
                </p>
              </div>
              <div className="p-4 bg-white/20 rounded-xl">
                <span className="text-4xl">💰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-2 border-cyan-100">
          <h3 className="text-2xl font-extrabold mb-6 text-gray-800">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.path}
                className={`${action.color === "bg-blue-600 hover:bg-blue-700" ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/50" : action.color === "bg-green-600 hover:bg-green-700" ? "bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 shadow-lg shadow-teal-500/50" : action.color === "bg-cyan-600 hover:bg-cyan-700" ? "bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 shadow-lg shadow-cyan-500/50" : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/50"} text-white p-6 rounded-xl flex flex-col items-center justify-center text-center transition transform hover:scale-110 font-bold`}
              >
                <span className="text-4xl mb-3">{action.icon}</span>
                <span className="font-bold text-lg">{action.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-cyan-100">
          <h3 className="text-xl font-extrabold mb-6 text-gray-800">
            Recent Orders
          </h3>
          {deliveries.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No orders yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
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
    </div>
  );
}
