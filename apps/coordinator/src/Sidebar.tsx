// apps/coordinator/src/Sidebar.tsx
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "@config";
import { collection, query, where, getDocs, Timestamp } from "firebase/firestore";

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
  }, []);

  const fetchQuickStats = async () => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayTimestamp = Timestamp.fromDate(today);

      // Fetch active deliveries
      const activeQuery = query(
        collection(db, "deliveries"),
        where("status", "in", ["pending", "assigned", "picked_up", "in_transit"])
      );
      const activeSnapshot = await getDocs(activeQuery);

      // Fetch completed today
      const todayQuery = query(
        collection(db, "deliveries"),
        where("status", "==", "delivered"),
        where("deliveredAt", ">=", todayTimestamp)
      );
      const todaySnapshot = await getDocs(todayQuery);

      // Calculate revenue today
      let revenue = 0;
      todaySnapshot.forEach((doc) => {
        const data = doc.data();
        revenue += data.price || 0;
      });

      setStats({
        active: activeSnapshot.size,
        today: todaySnapshot.size,
        revenue: Math.round(revenue),
      });
    } catch (error) {
      console.error("Error fetching quick stats:", error);
    }
  };

  const navItems = [
    { path: "/dashboard", icon: "📊", label: "Dashboard" },
    { path: "/deliveries/create", icon: "➕", label: "Create Delivery" },
    { path: "/deliveries/active", icon: "📦", label: "Active Deliveries" },
    { path: "/carriers/pending", icon: "⏳", label: "Pending Carriers" },
    { path: "/carriers/active", icon: "🏍️", label: "Active Carriers" },
    { path: "/customers", icon: "👥", label: "Customers" },
    { path: "/tracking/live", icon: "📍", label: "Live Tracking" },
    { path: "/analytics", icon: "📈", label: "Analytics" },
    { path: "/settings", icon: "⚙️", label: "Settings" },
  ];

  return (
    <aside
      className={`bg-primary text-white ${
        collapsed ? "w-20" : "w-64"
      } transition-all duration-300 flex flex-col h-screen shadow-xl flex-shrink-0`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-primary-dark">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                <span className="text-primary font-bold text-xl">P</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">PTROS</h2>
                <p className="text-xs text-blue-200">Coordinator</p>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto shadow-md">
              <span className="text-primary font-bold text-xl">P</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-blue-200 hover:text-white transition-colors"
          >
            {collapsed ? "→" : "←"}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
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
                <span className="text-xl mr-3">{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Quick Stats (only when expanded) */}
      {!collapsed && (
        <div className="p-4 border-t border-primary-dark">
          <div className="bg-primary-dark rounded-lg p-4 shadow-inner">
            <h3 className="font-semibold text-sm mb-3 text-blue-100">Quick Stats</h3>
            <div className="text-xs space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-blue-200">Active:</span>
                <span className="font-bold text-lg text-accent">{stats.active}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200">Today:</span>
                <span className="font-bold text-lg text-white">{stats.today}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-200">Revenue:</span>
                <span className="font-bold text-lg text-success">M{stats.revenue.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
