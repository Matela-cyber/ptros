// apps/coordinator/src/Sidebar.tsx
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "@config";
import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { IconType } from "react-icons";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaBox,
  FaChartColumn,
  FaChartLine,
  FaGear,
  FaHourglassHalf,
  FaLocationDot,
  FaMapLocationDot,
  FaMotorcycle,
  FaPlus,
  FaRoute,
  FaUsers,
} from "react-icons/fa6";

interface QuickStats {
  active: number;
  today: number;
  revenue: number;
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [stats, setStats] = useState<QuickStats>({
    active: 0,
    today: 0,
    revenue: 0,
  });

  useEffect(() => {
    fetchQuickStats();
    const interval = setInterval(fetchQuickStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchQuickStats = async () => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayTimestamp = Timestamp.fromDate(today);

      // Fetch active deliveries
      const activeQuery = query(
        collection(db, "deliveries"),
        where("status", "in", [
          "pending",
          "created",
          "assigned",
          "accepted",
          "picked_up",
          "in_transit",
          "out_for_delivery",
        ]),
      );
      const activeSnapshot = await getDocs(activeQuery);

      // Fetch delivered and compute today's values client-side
      // to support records missing deliveredAt (fallback to createdAt)
      const todayQuery = query(
        collection(db, "deliveries"),
        where("status", "==", "delivered"),
      );
      const todaySnapshot = await getDocs(todayQuery);

      // Calculate completed today + revenue today
      let completedToday = 0;
      let revenue = 0;
      todaySnapshot.forEach((doc) => {
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
          revenue += data.paymentAmount || data.price || 0;
        }
      });

      setStats({
        active: activeSnapshot.size,
        today: completedToday,
        revenue: Math.round(revenue),
      });
    } catch (error) {
      console.error("Error fetching quick stats:", error);
    }
  };

  const navItems: { path: string; icon: IconType; label: string }[] = [
    { path: "/dashboard", icon: FaChartColumn, label: "Dashboard" },
    { path: "/deliveries/create", icon: FaPlus, label: "Create Delivery" },
    { path: "/deliveries/active", icon: FaBox, label: "Active Deliveries" },
    {
      path: "/carriers/pending",
      icon: FaHourglassHalf,
      label: "Pending Carriers",
    },
    { path: "/carriers/active", icon: FaMotorcycle, label: "Active Carriers" },
    { path: "/customers", icon: FaUsers, label: "Customers" },
    { path: "/tracking/live", icon: FaLocationDot, label: "Live Tracking" },
    {
      path: "/routes/optimization",
      icon: FaRoute,
      label: "Route Optimization",
    },
    {
      path: "/routes/management",
      icon: FaMapLocationDot,
      label: "Map Management",
    },
    { path: "/analytics", icon: FaChartLine, label: "Analytics" },
    { path: "/settings", icon: FaGear, label: "Settings" },
  ];

  return (
    <aside
      className={`bg-primary text-white ${
        collapsed ? "w-20" : "w-64"
      } transition-all duration-300 flex flex-col h-screen sticky top-0 shadow-xl flex-shrink-0 overflow-hidden`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-primary-dark">
        <div className="flex items-center justify-between">
          <Link
            to="/dashboard"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
            aria-label="Go to dashboard"
          >
            {!collapsed && (
              <>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-primary font-bold text-xl">P</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">PTROS</h2>
                  <p className="text-xs text-blue-200">Coordinator</p>
                </div>
              </>
            )}
            {collapsed && (
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                <span className="text-primary font-bold text-xl">P</span>
              </div>
            )}
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-blue-200 hover:text-white transition-colors"
          >
            {collapsed ? <FaAnglesRight /> : <FaAnglesLeft />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto min-h-0">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-white text-primary shadow-md font-semibold"
                      : "text-blue-100 hover:bg-primary-dark hover:text-white hover:translate-x-1"
                  }`
                }
              >
                <item.icon className="text-xl mr-3" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Quick Stats (only when expanded) */}
      {!collapsed && (
        <div className="p-4 border-t border-primary-dark bg-primary">
          <div className="bg-primary-dark rounded-lg p-4 shadow-inner">
            <h3 className="font-semibold text-sm mb-3 text-blue-100">
              Quick Stats
            </h3>
            <div className="text-xs space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-blue-200">Active Deliveries:</span>
                <span className="font-bold text-lg text-accent">
                  {stats.active}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200">Delivered Today:</span>
                <span className="font-bold text-lg text-white">
                  {stats.today}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200">Revenue Today:</span>
                <span className="font-bold text-lg text-success">
                  M{stats.revenue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
