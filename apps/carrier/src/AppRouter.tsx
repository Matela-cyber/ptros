import { useState } from "react";
import { User } from "firebase/auth";
import Dashboard from "./Dashboard";
import AvailableTasks from "./AvailableTasks";
import MyDeliveries from "./MyDeliveries";

interface AppRouterProps {
  user: User;
}

export default function AppRouter({ user }: AppRouterProps) {
  // Update the state type to include 'deliveries'
  const [currentPage, setCurrentPage] = useState<
    "dashboard" | "tasks" | "deliveries"
  >("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard user={user} onNavigate={setCurrentPage} />;
      case "tasks":
        return <AvailableTasks />;
      case "deliveries":
        return <MyDeliveries />;
      default:
        return <Dashboard user={user} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop/Tablet Top Tabs */}
      <div className="hidden md:block sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setCurrentPage("dashboard")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${
                currentPage === "dashboard"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <span
                className={`w-7 h-7 rounded-full inline-flex items-center justify-center ${
                  currentPage === "dashboard"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <i className="fa-solid fa-chart-column" />
              </span>
              Dashboard
            </button>
            <button
              onClick={() => setCurrentPage("deliveries")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${
                currentPage === "deliveries"
                  ? "bg-white text-purple-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <span
                className={`w-7 h-7 rounded-full inline-flex items-center justify-center ${
                  currentPage === "deliveries"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <i className="fa-solid fa-box" />
              </span>
              Deliveries
            </button>
            <button
              onClick={() => setCurrentPage("tasks")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${
                currentPage === "tasks"
                  ? "bg-white text-emerald-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <span
                className={`w-7 h-7 rounded-full inline-flex items-center justify-center ${
                  currentPage === "tasks"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <i className="fa-regular fa-clipboard" />
              </span>
              Tasks
            </button>
          </div>
        </div>
      </div>

      {renderPage()}

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-200 z-50 md:hidden">
        <div className="max-w-full mx-auto flex justify-around">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className={`flex-1 py-3 text-center text-xs font-medium transition ${
              currentPage === "dashboard"
                ? "text-blue-600 border-t-2 border-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <i className="fa-solid fa-chart-column text-lg" />
              <span>Dashboard</span>
            </div>
          </button>
          <button
            onClick={() => setCurrentPage("deliveries")}
            className={`flex-1 py-3 text-center text-xs font-medium transition ${
              currentPage === "deliveries"
                ? "text-blue-600 border-t-2 border-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <i className="fa-solid fa-box text-lg" />
              <span>Deliveries</span>
            </div>
          </button>
          <button
            onClick={() => setCurrentPage("tasks")}
            className={`flex-1 py-3 text-center text-xs font-medium transition ${
              currentPage === "tasks"
                ? "text-blue-600 border-t-2 border-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <i className="fa-regular fa-clipboard text-lg" />
              <span>Tasks</span>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}
