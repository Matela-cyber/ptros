// apps/coordinator/src/Sidebar.tsx
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

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
      className={`bg-blue-900 text-white ${
        collapsed ? "w-20" : "w-64"
      } transition-all duration-300 flex flex-col h-screen fixed left-0 top-0 z-50`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-blue-800">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">P</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">PTROS</h2>
                <p className="text-xs text-blue-300">Coordinator</p>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto">
              <span className="text-blue-900 font-bold text-xl">P</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-blue-300 hover:text-white"
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
                  `flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-800 text-white"
                      : "text-blue-200 hover:bg-blue-800 hover:text-white"
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
        <div className="p-4 border-t border-blue-800">
          <div className="bg-blue-800 rounded-lg p-4">
            <h3 className="font-semibold text-sm mb-2">Quick Stats</h3>
            <div className="text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-blue-300">Active:</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-300">Today:</span>
                <span className="font-semibold">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-300">Revenue:</span>
                <span className="font-semibold">M2,450</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
