// apps/coordinator/src/Dashboard.tsx - UPDATED
import { useState, useEffect } from "react";
import { db } from "@config";
import { collection, query, where, getDocs, Timestamp } from "firebase/firestore";

type Props = {
  user: any;
  userProfile?: any;
};

interface Stats {
  activeDeliveries: number;
  activeCarriers: number;
  completedToday: number;
  revenueToday: number;
  pendingCarriers: number;
}

export default function Dashboard({ user, userProfile }: Props) {
  const [stats, setStats] = useState<Stats>({
    activeDeliveries: 0,
    activeCarriers: 0,
    completedToday: 0,
    revenueToday: 0,
    pendingCarriers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
    // Refresh stats every 30 seconds to keep them current
    const interval = setInterval(fetchDashboardStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayTimestamp = Timestamp.fromDate(today);

      // Fetch active deliveries (pending, assigned, picked up, in transit)
      const activeDeliveriesQuery = query(
        collection(db, "deliveries"),
        where("status", "in", ["pending", "assigned", "picked_up", "in_transit"])
      );
      const activeDeliveriesSnapshot = await getDocs(activeDeliveriesQuery);

      // Fetch active carriers (approved and active status)
      const activeCarriersQuery = query(
        collection(db, "users"),
        where("role", "==", "carrier"),
        where("isApproved", "==", true),
        where("status", "==", "active")
      );
      const activeCarriersSnapshot = await getDocs(activeCarriersQuery);

      // Fetch completed deliveries today (status = delivered and createdAt is today)
      const completedTodayQuery = query(
        collection(db, "deliveries"),
        where("status", "==", "delivered"),
        where("createdAt", ">=", todayTimestamp)
      );
      const completedTodaySnapshot = await getDocs(completedTodayQuery);

      // Calculate revenue today from paymentAmount field
      let revenueToday = 0;
      completedTodaySnapshot.forEach((doc) => {
        const data = doc.data();
        revenueToday += data.paymentAmount || 0;
      });

      setStats({
        activeDeliveries: activeDeliveriesSnapshot.size,
        activeCarriers: activeCarriersSnapshot.size,
        completedToday: completedTodaySnapshot.size,
        revenueToday: Math.round(revenueToday),
        pendingCarriers: 0,
      });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };
  const quickActions = [
    {
      label: "Create Delivery",
      icon: "➕",
      path: "/deliveries/create",
      color: "bg-accent hover:bg-accent-dark shadow-lg",
    },
    {
      label: "Approve Carriers",
      icon: "✅",
      path: "/carriers/pending",
      color: "bg-success hover:bg-success-dark shadow-lg",
    },
    {
      label: "Live Tracking",
      icon: "📍",
      path: "/tracking/live",
      color: "bg-primary hover:bg-primary-dark shadow-lg",
    },
    {
      label: "View Reports",
      icon: "📊",
      path: "/analytics",
      color: "bg-primary-light hover:bg-primary shadow-lg",
    },
  ];

  const recentActivities = [
    {
      type: "delivery",
      action: "New delivery created",
      details: "Tracking #PTR-001 to Maseru",
      time: "5 min ago",
    },
    {
      type: "carrier",
      action: "Carrier approved",
      details: "John Doe approved",
      time: "15 min ago",
    },
    {
      type: "delivery",
      action: "Delivery completed",
      details: "Tracking #PTR-045 delivered",
      time: "30 min ago",
    },
    {
      type: "customer",
      action: "New customer registered",
      details: "Jane Smith signed up",
      time: "1 hour ago",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Coordinator Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Welcome back, {userProfile?.fullName || user.email}. Here's what's
          happening.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent">
          <div className="flex items-center">
            <div className="p-3 bg-accent-bg rounded-lg mr-4">
              <span className="text-2xl">📦</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Active Deliveries</p>
              <p className="text-3xl font-bold text-accent">
                {loading ? "..." : stats.activeDeliveries}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-success">
          <div className="flex items-center">
            <div className="p-3 bg-success-bg rounded-lg mr-4">
              <span className="text-2xl">🏍️</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Active Carriers</p>
              <p className="text-3xl font-bold text-success">
                {loading ? "..." : stats.activeCarriers}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
          <div className="flex items-center">
            <div className="p-3 bg-primary-bg rounded-lg mr-4">
              <span className="text-2xl">✅</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Completed Today</p>
              <p className="text-3xl font-bold text-primary">
                {loading ? "..." : stats.completedToday}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-success">
          <div className="flex items-center">
            <div className="p-3 bg-success-bg rounded-lg mr-4">
              <span className="text-2xl">💰</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Revenue Today</p>
              <p className="text-3xl font-bold text-success">
                {loading ? "..." : `M${stats.revenueToday.toLocaleString()}`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.path}
              className={`${action.color} text-white p-6 rounded-lg flex flex-col items-center justify-center text-center transition-all transform hover:scale-105 hover:-translate-y-1`}
            >
              <span className="text-4xl mb-3">{action.icon}</span>
              <span className="font-semibold">{action.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center p-3 border rounded-lg hover:bg-gray-50"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    activity.type === "delivery"
                      ? "bg-primary-bg"
                      : activity.type === "carrier"
                      ? "bg-success-bg"
                      : "bg-accent-bg"
                  }`}
                >
                  <span
                    className={
                      activity.type === "delivery"
                        ? "text-primary"
                        : activity.type === "carrier"
                        ? "text-success"
                        : "text-accent"
                    }
                  >
                    {activity.type === "delivery"
                      ? "📦"
                      : activity.type === "carrier"
                      ? "🏍️"
                      : "👤"}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.details}</p>
                </div>
                <span className="text-sm text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">System Alerts</h3>
          <div className="space-y-4">
            {stats.pendingCarriers > 0 && (
              <div className="p-4 bg-accent-bg border-l-4 border-accent rounded-lg shadow-sm">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">⚠️</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {stats.pendingCarriers} carrier{stats.pendingCarriers !== 1 ? 's' : ''} pending approval
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Review carrier applications in the pending approvals
                      section.
                    </p>
                    <a
                      href="/carriers/pending"
                      className="text-sm text-accent hover:text-accent-dark font-semibold mt-2 inline-block transition-colors"
                    >
                      Review now →
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="p-4 bg-primary-bg border-l-4 border-primary rounded-lg shadow-sm">
              <div className="flex items-start">
                <span className="text-2xl mr-3">📊</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Monthly report ready
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    View delivery performance and analytics for this month.
                  </p>
                  <a
                    href="/analytics"
                    className="text-sm text-primary hover:text-primary-dark font-semibold mt-2 inline-block transition-colors"
                  >
                    View report →
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-success-bg border-l-4 border-success rounded-lg shadow-sm">
              <div className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    System is running smoothly
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    All services are operational. No issues detected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
