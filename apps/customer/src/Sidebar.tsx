// apps/customer/src/Sidebar.tsx
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { path: "/dashboard", icon: "home", label: "Home" },
    { path: "/orders", icon: "box", label: "My Orders" },
    { path: "/track", icon: "map-pin", label: "Track Order" },
    { path: "/track-map", icon: "map", label: "Live Tracking" },
    { path: "/profile", icon: "user", label: "My Profile" },
    { path: "/settings", icon: "settings", label: "Settings" },
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-5 h-5";
    switch (iconName) {
      case "home":
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9M9 21h6a2 2 0 002-2V9l-7-4-7 4v10a2 2 0 002 2z" /></svg>;
      case "box":
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 015.646 5.646 9.003 9.003 0 0012 2c4.97 0 9.185 3.364 9.88 7.848.005.033.01.066.015.099a5.003 5.003 0 01-.9 9.407" /></svg>;
      case "map-pin":
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
      case "map":
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6.553 3.276A1 1 0 0121 20.382V9.618a1 1 0 00-1.447-.894L15 11m0 0V5m0 13V5m0 0L9 7m6 4v8m0-13v.382a1 1 0 00-.553.894L15 11" /></svg>;
      case "user":
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
      case "settings":
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
      default:
        return null;
    }
  };

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
                <p className="text-xs text-blue-300">Customer</p>
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
                  `flex items-center px-4 py-3 rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-blue-800 text-white"
                      : "text-blue-200 hover:bg-blue-800 hover:text-white"
                  }`
                }
              >
                <span className="mr-3 flex-shrink-0">{getIcon(item.icon)}</span>
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
            <p className="text-xs text-blue-300 mb-2">Active Orders</p>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
      )}
    </aside>
  );
}
