// apps/coordinator/src/Header.tsx
import { auth, db } from "@config";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs, Timestamp } from "firebase/firestore";
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = {
  user: any;
  userProfile?: any;
};

export default function Header({ user, userProfile }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const initialQuery = searchParams.get("search") || "";
    setSearchQuery(initialQuery);
  }, [searchParams]);

  useEffect(() => {
    fetchNotificationCount();
    // Refresh notifications every 30 seconds
    const interval = setInterval(fetchNotificationCount, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchNotificationCount = async () => {
    try {
      // Count pending deliveries
      const pendingDeliveriesQuery = query(
        collection(db, "deliveries"),
        where("status", "==", "pending")
      );
      const pendingDeliveriesSnapshot = await getDocs(pendingDeliveriesQuery);
      const pendingCount = pendingDeliveriesSnapshot.size;

      // Count new deliveries (created in last 24 hours)
      const today = new Date();
      today.setDate(today.getDate() - 1); // Last 24 hours
      const newDeliveriesQuery = query(
        collection(db, "deliveries"),
        where("createdAt", ">=", Timestamp.fromDate(today))
      );
      const newDeliveriesSnapshot = await getDocs(newDeliveriesQuery);
      const newCount = newDeliveriesSnapshot.size;

      // Total notifications = pending + new
      const total = pendingCount + newCount;
      setNotificationCount(total);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Left: Search and notifications */}
        <div className="flex items-center space-x-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const trimmed = searchQuery.trim();
              if (!trimmed) return;
              navigate(`/deliveries/active?search=${encodeURIComponent(trimmed)}`);
            }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search deliveries, carriers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
            >
              Search
            </button>
          </form>

          {/* Notification bell - Only show if there are notifications */}
          {notificationCount > 0 && (
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer animate-pulse"
                title="View notifications"
              >
                <span className="text-xl">🔔</span>
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center font-semibold shadow-md">
                    {notificationCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-3 border-b border-gray-100 bg-gray-50">
                    <p className="font-semibold text-gray-800">Notifications</p>
                  </div>
                  <div className="py-2 max-h-96 overflow-y-auto">
                    <button
                      onClick={() => {
                        navigate("/deliveries/active");
                        setShowNotifications(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors border-b border-gray-100"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">⏳ Pending Deliveries</p>
                          <p className="text-xs text-gray-500">Awaiting assignment</p>
                        </div>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        navigate("/deliveries/active");
                        setShowNotifications(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-gray-800">✨ New Deliveries</p>
                          <p className="text-xs text-gray-500">Created in the last 24 hours</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: User profile */}
        <div className="flex items-center space-x-4">
          <div className="text-right hidden md:block">
            <p className="font-semibold text-gray-800">
              {userProfile?.fullName || user.email}
            </p>
            <p className="text-sm text-gray-500">Coordinator</p>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 bg-primary-bg rounded-full flex items-center justify-center ring-2 ring-primary/20">
                <span className="text-primary font-bold text-lg">
                  {userProfile?.fullName?.[0] || user.email?.[0] || "C"}
                </span>
              </div>
              <span className="text-gray-500">▼</span>
            </button>

            {/* Dropdown menu */}
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                  <p className="font-medium text-gray-800">{user.email}</p>
                  <p className="text-sm text-gray-500">Coordinator</p>
                </div>
                <div className="py-2">
                  <a
                    href="/settings"
                    className="block px-4 py-2 hover:bg-primary-bg hover:text-primary transition-colors"
                  >
                    ⚙️ Settings
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-primary-bg hover:text-primary transition-colors">
                    📊 Analytics
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-primary-bg hover:text-primary transition-colors">
                    🆘 Help
                  </a>
                </div>
                <div className="border-t border-gray-100 py-2">
                  <button
                    onClick={() => auth.signOut()}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors font-medium"
                  >
                    🚪 Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
