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
    <div className="carrier-shell min-h-screen bg-[#0b1020] text-slate-100">
      {/* Persistent Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-40 border-b border-slate-800 bg-[#0f172a]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          {/* Brand */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500">
              <i className="fa-solid fa-truck-fast text-white text-xs" />
            </span>
            <span className="hidden text-sm font-semibold text-slate-100 sm:block">
              PTROS Carrier
            </span>
          </div>

          {/* Page Tabs */}
          <div className="hidden items-center gap-1 rounded-full bg-slate-800 p-1 md:inline-flex">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-sm font-semibold transition inline-flex items-center gap-1.5 ${
                  isActive
                    ? "bg-slate-100 text-blue-700 shadow-sm"
                    : "text-slate-300 hover:text-slate-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs ${isActive ? "bg-blue-100 text-blue-700" : "bg-slate-700 text-slate-300"}`}
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
                    ? "bg-slate-100 text-blue-700 shadow-sm"
                    : "text-slate-300 hover:text-slate-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs ${isActive ? "bg-blue-100 text-blue-700" : "bg-slate-700 text-slate-300"}`}
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
                    ? "bg-slate-100 text-blue-700 shadow-sm"
                    : "text-slate-300 hover:text-slate-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs ${isActive ? "bg-blue-100 text-blue-700" : "bg-slate-700 text-slate-300"}`}
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
            <button
              type="button"
              className="hidden h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 md:inline-flex"
              title="Notifications"
            >
              <i className="fa-regular fa-bell" />
            </button>
            <span className="hidden h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-sm font-semibold text-slate-100 md:inline-flex">
              {(user.email?.[0] || "C").toUpperCase()}
            </span>
            <span className="text-xs text-slate-400 hidden md:block truncate max-w-[160px]">
              {user.email}
            </span>
            <button
              onClick={() => signOut(auth)}
              className="flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-700 hover:text-red-300"
            >
              <i className="fa-solid fa-right-from-bracket" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <main className="pb-24 pt-[72px] md:pb-6">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/tasks" element={<AvailableTasks />} />
          <Route path="/deliveries" element={<MyDeliveries />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-[#0f172a]/95 backdrop-blur md:hidden">
        <div className="flex justify-around">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex-1 py-3 text-center text-xs font-medium transition ${
                isActive
                  ? "text-blue-400 border-t-2 border-blue-400"
                  : "text-slate-400"
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
                  ? "text-blue-400 border-t-2 border-blue-400"
                  : "text-slate-400"
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
                  ? "text-blue-400 border-t-2 border-blue-400"
                  : "text-slate-400"
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
