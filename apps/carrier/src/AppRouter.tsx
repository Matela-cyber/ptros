import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { User } from "firebase/auth";
import Dashboard from "./Dashboard";
import AvailableTasks from "./AvailableTasks";
import MyDeliveries from "./MyDeliveries";
import Header from "./Header";

interface AppRouterProps {
  user: User;
}

export default function AppRouter({ user }: AppRouterProps) {
  return (
    <div className="carrier-interface min-h-screen bg-gray-50">
      <div className="flex min-h-screen min-w-0 flex-col">
        <Header user={user} />

        <main className="flex-1 overflow-x-hidden p-3 pb-24 sm:p-4 sm:pb-24 lg:p-6 lg:pb-24">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/tasks" element={<AvailableTasks />} />
            <Route path="/deliveries" element={<MyDeliveries />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto grid max-w-3xl grid-cols-3">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`
              }
            >
              <i className="fa-solid fa-chart-column text-base" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/deliveries"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`
              }
            >
              <i className="fa-solid fa-box text-base" />
              <span>Deliveries</span>
            </NavLink>

            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`
              }
            >
              <i className="fa-solid fa-clipboard-list text-base" />
              <span>Tasks</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
