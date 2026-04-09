// apps/coordinator/src/Dashboard.tsx - UPDATED
import { useState, useEffect } from "react";
import { db } from "@config";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import {
  FaBox,
  FaChartColumn,
  FaChartLine,
  FaLocationDot,
  FaMoneyBill,
  FaMotorcycle,
  FaPlus,
  FaTriangleExclamation,
  FaUser,
  FaCircleCheck,
} from "react-icons/fa6";

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

interface DashboardActivity {
  id: string;
  type: "delivery" | "carrier" | "customer";
  action: string;
  details: string;
  time: string;
}

const formatRelativeTime = (date: Date): string => {
  const diffMs = Date.now() - date.getTime();
  const minutes = Math.max(1, Math.floor(diffMs / (1000 * 60)));

  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
};

export default function Dashboard({ user, userProfile }: Props) {
  const [stats, setStats] = useState<Stats>({
    activeDeliveries: 0,
    activeCarriers: 0,
    completedToday: 0,
    revenueToday: 0,
    pendingCarriers: 0,
  });
  const [loading, setLoading] = useState(true);
  const [recentActivities, setRecentActivities] = useState<DashboardActivity[]>(
    [],
  );

  const activeAlertCount =
    (stats.pendingCarriers > 0 ? 1 : 0) + (stats.activeDeliveries > 0 ? 1 : 0);

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
        where("status", "in", [
          "pending",
          "assigned",
          "picked_up",
          "in_transit",
        ]),
      );
      const activeDeliveriesSnapshot = await getDocs(activeDeliveriesQuery);

      // Fetch active carriers (approved and active status)
      const activeCarriersQuery = query(
        collection(db, "users"),
        where("role", "==", "carrier"),
        where("isApproved", "==", true),
        where("status", "==", "active"),
      );
      const activeCarriersSnapshot = await getDocs(activeCarriersQuery);

      // Fetch pending carriers for approval queue
      const pendingCarriersQuery = query(
        collection(db, "users"),
        where("role", "==", "carrier"),
        where("isApproved", "==", false),
      );
      const pendingCarriersSnapshot = await getDocs(pendingCarriersQuery);

      // Fetch delivered deliveries and count today's completions client-side.
      // This avoids requiring a composite Firestore index on (status + createdAt).
      const completedTodayQuery = query(
        collection(db, "deliveries"),
        where("status", "==", "delivered"),
      );
      const completedTodaySnapshot = await getDocs(completedTodayQuery);

      // Calculate revenue today from paymentAmount field
      let completedToday = 0;
      let revenueToday = 0;
      completedTodaySnapshot.forEach((doc) => {
        const data = doc.data();
        const deliveredAt: Date | null = data.deliveredAt?.toDate
          ? data.deliveredAt.toDate()
          : null;
        const createdAt: Date | null = data.createdAt?.toDate
          ? data.createdAt.toDate()
          : null;

        const completedAt = deliveredAt || createdAt;
        if (completedAt && completedAt >= todayTimestamp.toDate()) {
          completedToday += 1;
          revenueToday += data.paymentAmount || 0;
        }
      });

      // Build real recent activities from latest deliveries
      const latestDeliveriesQuery = query(
        collection(db, "deliveries"),
        orderBy("createdAt", "desc"),
        limit(6),
      );
      const latestDeliveriesSnapshot = await getDocs(latestDeliveriesQuery);

      const activities: DashboardActivity[] = latestDeliveriesSnapshot.docs.map(
        (deliveryDoc) => {
          const data = deliveryDoc.data();
          const trackingCode =
            data.trackingCode || `PTR-${deliveryDoc.id.slice(0, 6)}`;
          const createdAt = data.createdAt?.toDate?.() || new Date();
          const status = data.status || "pending";

          let action = "Delivery updated";
          if (status === "pending" || status === "created") {
            action = "New delivery created";
          } else if (status === "assigned") {
            action = "Delivery assigned";
          } else if (status === "delivered") {
            action = "Delivery completed";
          } else if (status === "in_transit") {
            action = "Delivery in transit";
          }

          return {
            id: deliveryDoc.id,
            type: "delivery",
            action,
            details: `${trackingCode} • ${data.customerName || "Customer"}`,
            time: formatRelativeTime(createdAt),
          };
        },
      );

      setRecentActivities(activities);

      setStats({
        activeDeliveries: activeDeliveriesSnapshot.size,
        activeCarriers: activeCarriersSnapshot.size,
        completedToday,
        revenueToday,
        pendingCarriers: pendingCarriersSnapshot.size,
      });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };
  const quickActions: {
    label: string;
    icon: IconType;
    path: string;
    color: string;
  }[] = [
    {
      label: "Create Delivery",
      icon: FaPlus,
      path: "/deliveries/create",
      color: "bg-accent hover:bg-accent-dark",
    },
    {
      label: "Manage Carriers",
      icon: FaCircleCheck,
      path: "/carriers/active",
      color: "bg-success hover:bg-success-dark",
    },
    {
      label: "Live Tracking",
      icon: FaLocationDot,
      path: "/tracking/live",
      color: "bg-primary hover:bg-primary-dark",
    },
    {
      label: "View Reports",
      icon: FaChartColumn,
      path: "/analytics",
      color: "bg-primary-light hover:bg-primary",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
          Coordinator Dashboard
        </h1>
        <p className="text-sm text-gray-600 mt-1.5">
          Welcome back, {userProfile?.fullName || user.email}. Here's what's
          happening.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Link
          to="/deliveries/active"
          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 block"
        >
          <div className="flex items-center">
            <div className="p-2.5 bg-accent-bg rounded-md mr-3">
              <FaBox className="text-lg" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                Deliveries
              </p>
              <p className="text-2xl font-semibold text-accent mt-0.5">
                {loading ? "..." : stats.activeDeliveries}
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/carriers/active"
          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 block"
        >
          <div className="flex items-center">
            <div className="p-2.5 bg-success-bg rounded-md mr-3">
              <FaMotorcycle className="text-lg" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                Carriers
              </p>
              <p className="text-2xl font-semibold text-success mt-0.5">
                {loading ? "..." : stats.activeCarriers}
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/deliveries/active"
          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 block"
        >
          <div className="flex items-center">
            <div className="p-2.5 bg-primary-bg rounded-md mr-3">
              <FaCircleCheck className="text-lg" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                Completed Today
              </p>
              <p className="text-2xl font-semibold text-primary mt-0.5">
                {loading ? "..." : stats.completedToday}
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/analytics"
          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 block"
        >
          <div className="flex items-center">
            <div className="p-2.5 bg-success-bg rounded-md mr-3">
              <FaMoneyBill className="text-lg" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                Revenue Today
              </p>
              <p className="text-2xl font-semibold text-success mt-0.5">
                {loading ? "..." : `M${stats.revenueToday.toFixed(2)}`}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              className={`${action.color} text-white p-4 rounded-md flex flex-col items-center justify-center text-center transition-all hover:opacity-95`}
            >
              <action.icon className="text-2xl mb-2" />
              <span className="font-medium text-sm">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.length === 0 && (
              <div className="text-sm text-gray-500">
                No recent activity found yet.
              </div>
            )}
            {recentActivities.map((activity) => (
              <Link
                key={activity.id}
                to={
                  activity.type === "delivery"
                    ? `/deliveries/${activity.id}`
                    : "/deliveries/active"
                }
                className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-all"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center mr-3 ${
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
                    {activity.type === "delivery" ? (
                      <FaBox />
                    ) : activity.type === "carrier" ? (
                      <FaMotorcycle />
                    ) : (
                      <FaUser />
                    )}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.details}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
          <h3 className="text-lg font-semibold mb-3">System Alerts</h3>
          <div className="space-y-4">
            {stats.pendingCarriers > 0 && (
              <div className="p-4 bg-accent-bg border-l-4 border-accent rounded-lg shadow-sm">
                <div className="flex items-start">
                  <FaTriangleExclamation className="text-2xl mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {stats.pendingCarriers} carrier
                      {stats.pendingCarriers !== 1 ? "s" : ""} pending approval
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Review carrier applications in the Carriers section.
                    </p>
                    <Link
                      to="/carriers/active"
                      className="text-sm text-accent hover:text-accent-dark font-semibold mt-2 inline-block transition-colors"
                    >
                      Review now →
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {stats.activeDeliveries > 0 && (
              <div className="p-4 bg-primary-bg border-l-4 border-primary rounded-lg shadow-sm">
                <div className="flex items-start">
                  <FaChartLine className="text-2xl mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {stats.activeDeliveries} active deliver
                      {stats.activeDeliveries === 1 ? "y" : "ies"} in progress
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Track and optimize current fleet movement.
                    </p>
                    <Link
                      to="/tracking/live"
                      className="text-sm text-primary hover:text-primary-dark font-semibold mt-2 inline-block transition-colors"
                    >
                      Open live tracking →
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeAlertCount === 0 && (
              <div className="p-4 bg-success-bg border-l-4 border-success rounded-lg shadow-sm">
                <div className="flex items-start">
                  <FaCircleCheck className="text-2xl mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      No active alerts right now
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Delivery and carrier queues are currently clear.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
