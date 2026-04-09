// apps/customer/src/Sidebar.tsx
import { NavLink } from "react-router-dom";
import { useState } from "react";

type SidebarProps = {
  mobileOpen?: boolean;
  onClose?: () => void;
};

export default function Sidebar({ mobileOpen = false, onClose }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { path: "/dashboard", icon: "home", label: "Home" },
    { path: "/orders", icon: "box", label: "My Orders" },
    { path: "/track-map", icon: "map", label: "Live Tracking" },
    { path: "/profile", icon: "user", label: "My Profile" },
    { path: "/settings", icon: "settings", label: "Settings" },
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-5 h-5";
    switch (iconName) {
      case "home":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9M9 21h6a2 2 0 002-2V9l-7-4-7 4v10a2 2 0 002 2z"
            />
          </svg>
        );
      case "box":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 015.646 5.646 9.003 9.003 0 0012 2c4.97 0 9.185 3.364 9.88 7.848.005.033.01.066.015.099a5.003 5.003 0 01-.9 9.407"
            />
          </svg>
        );
      case "map":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6.553 3.276A1 1 0 0121 20.382V9.618a1 1 0 00-1.447-.894L15 11m0 0V5m0 13V5m0 0L9 7m6 4v8m0-13v.382a1 1 0 00-.553.894L15 11"
            />
          </svg>
        );
      case "user":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        );
      case "settings":
        return (
          <svg
            className={iconClass}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleNavClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      onClose?.();
    }
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex h-screen w-64 shrink-0 flex-col bg-emerald-900 text-white transition-transform duration-300 lg:sticky lg:top-0 lg:translate-x-0 ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      } ${collapsed ? "lg:w-20" : "lg:w-64"}`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-emerald-800">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-emerald-900 font-bold text-xl">P</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">PTROS</h2>
                <p className="text-xs text-emerald-200">Customer</p>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto">
              <span className="text-emerald-900 font-bold text-xl">P</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden text-emerald-200 hover:text-white lg:block"
          >
            {collapsed ? "→" : "←"}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 overflow-y-auto">
        <ul className="space-y-1.5">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-emerald-800 text-white"
                      : "text-emerald-100 hover:bg-emerald-800 hover:text-white"
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
    </aside>
  );
}
