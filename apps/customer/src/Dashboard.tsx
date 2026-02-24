// apps/customer/src/Dashboard.tsx
import { useEffect, useState } from "react";
import { db } from "@config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { createSampleNotifications } from "./services/notificationService";
import toast from "react-hot-toast";

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
          where("customerId", "==", user.uid)
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
          activeOrders: deliveryList.filter(
            (d) => d.status !== "delivered"
          ).length,
          completedOrders: deliveryList.filter(
            (d) => d.status === "delivered"
          ).length,
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

  const handleCreateSampleNotifications = async () => {
    try {
      await createSampleNotifications(user.uid);
      toast.success("Sample notifications created! Check the bell icon.");
    } catch (error) {
      toast.error("Failed to create sample notifications");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome Back, {userProfile?.fullName || "Customer"}!
        </h1>
        <p className="text-gray-600 mt-2">
          Here's an overview of your deliveries and account.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <span className="text-2xl">📦</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <p className="text-3xl font-bold">{stats.totalOrders}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg mr-4">
              <span className="text-2xl">⏳</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Orders</p>
              <p className="text-3xl font-bold">{stats.activeOrders}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <span className="text-2xl">✅</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-3xl font-bold">{stats.completedOrders}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <span className="text-2xl">💰</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Spent</p>
              <p className="text-3xl font-bold">M{stats.totalSpent}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow p-8 mb-8">
        <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.path}
              className={`${action.color} text-white p-4 rounded-lg flex flex-col items-center justify-center text-center transition transform hover:scale-105`}
            >
              <span className="text-3xl mb-2">{action.icon}</span>
              <span className="font-medium">{action.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Development: Test Notifications */}
      {true && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <p className="text-sm text-blue-700 mb-3">
            <strong>Test Mode:</strong> Create sample notifications to test the notification system
          </p>
          <button
            onClick={handleCreateSampleNotifications}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Create Sample Notifications
          </button>
        </div>
      )}

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
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
  );
}
