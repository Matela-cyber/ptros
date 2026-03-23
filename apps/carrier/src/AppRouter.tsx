import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { User } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "@config";
import Dashboard from "./Dashboard";
import AvailableTasks from "./AvailableTasks";
import MyDeliveries from "./MyDeliveries";

interface AppRouterProps {
  user: User;
}

export default function AppRouter({ user }: AppRouterProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Persistent Navigation Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-truck-fast text-white text-xs" />
            </span>
            <span className="font-bold text-gray-800 text-sm hidden sm:block">
              PTROS Carrier
            </span>
          </div>

          {/* Page Tabs */}
          <div className="inline-flex items-center gap-1 bg-gray-100 rounded-full p-1">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-sm font-semibold transition inline-flex items-center gap-1.5 ${
                  isActive
                    ? "bg-white text-blue-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs ${isActive ? "bg-blue-100 text-blue-700" : "bg-gray-200 text-gray-500"}`}
                  >
                    <i className="fa-solid fa-chart-column" />
                  </span>
                  <span className="hidden sm:inline">Dashboard</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/deliveries"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-sm font-semibold transition inline-flex items-center gap-1.5 ${
                  isActive
                    ? "bg-white text-purple-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs ${isActive ? "bg-purple-100 text-purple-700" : "bg-gray-200 text-gray-500"}`}
                  >
                    <i className="fa-solid fa-box" />
                  </span>
                  <span className="hidden sm:inline">Deliveries</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-sm font-semibold transition inline-flex items-center gap-1.5 ${
                  isActive
                    ? "bg-white text-emerald-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs ${isActive ? "bg-emerald-100 text-emerald-700" : "bg-gray-200 text-gray-500"}`}
                  >
                    <i className="fa-regular fa-clipboard" />
                  </span>
                  <span className="hidden sm:inline">Tasks</span>
                </>
              )}
            </NavLink>
          </div>

          {/* User + Logout */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-gray-500 text-xs hidden md:block truncate max-w-[160px]">
              {user.email}
            </span>
            <button
              onClick={() => signOut(auth)}
              className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-red-600 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-red-50 transition font-medium"
            >
              <i className="fa-solid fa-right-from-bracket" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <main className="pb-20 md:pb-4">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/tasks" element={<AvailableTasks />} />
          <Route path="/deliveries" element={<MyDeliveries />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-200 z-50 md:hidden">
        <div className="flex justify-around">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex-1 py-3 text-center text-xs font-medium transition ${
                isActive
                  ? "text-blue-600 border-t-2 border-blue-600"
                  : "text-gray-600"
              }`
            }
          >
            <div className="flex flex-col items-center gap-0.5">
              <i className="fa-solid fa-chart-column text-lg" />
              <span>Dashboard</span>
            </div>
          </NavLink>
          <NavLink
            to="/deliveries"
            className={({ isActive }) =>
              `flex-1 py-3 text-center text-xs font-medium transition ${
                isActive
                  ? "text-blue-600 border-t-2 border-blue-600"
                  : "text-gray-600"
              }`
            }
          >
            <div className="flex flex-col items-center gap-0.5">
              <i className="fa-solid fa-box text-lg" />
              <span>Deliveries</span>
            </div>
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `flex-1 py-3 text-center text-xs font-medium transition ${
                isActive
                  ? "text-blue-600 border-t-2 border-blue-600"
                  : "text-gray-600"
              }`
            }
          >
            <div className="flex flex-col items-center gap-0.5">
              <i className="fa-regular fa-clipboard text-lg" />
              <span>Tasks</span>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
