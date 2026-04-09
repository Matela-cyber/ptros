// apps/coordinator/src/Header.tsx
import { auth, db } from "@config";
import { useState, useEffect, useRef } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  FaBell,
  FaBox,
  FaCaretDown,
  FaChartLine,
  FaGear,
  FaHourglassHalf,
  FaMagnifyingGlass,
  FaMotorcycle,
  FaRightFromBracket,
  FaWandMagicSparkles,
} from "react-icons/fa6";

type Props = {
  user: any;
  userProfile?: any;
};

type NotificationSummary = {
  pendingCarriers: number;
  pendingDeliveries: number;
  inTransitDeliveries: number;
  newDeliveries: number;
};

export default function Header({ user, userProfile }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [notificationSummary, setNotificationSummary] =
    useState<NotificationSummary>({
      pendingCarriers: 0,
      pendingDeliveries: 0,
      inTransitDeliveries: 0,
      newDeliveries: 0,
    });
  const [searchQuery, setSearchQuery] = useState("");
  const notificationsRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const goToProfile = () => {
    navigate("/profile");
    setShowMenu(false);
  };

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        showNotifications &&
        notificationsRef.current &&
        !notificationsRef.current.contains(target)
      ) {
        setShowNotifications(false);
      }

      if (showMenu && menuRef.current && !menuRef.current.contains(target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showNotifications, showMenu]);

  const fetchNotificationCount = async () => {
    try {
      const today = new Date();
      today.setDate(today.getDate() - 1); // Last 24 hours

      // Pending deliveries
      const pendingDeliveriesQuery = query(
        collection(db, "deliveries"),
        where("status", "in", ["pending", "created"]),
      );

      // Deliveries currently in progress
      const inTransitDeliveriesQuery = query(
        collection(db, "deliveries"),
        where("status", "in", [
          "assigned",
          "accepted",
          "picked_up",
          "in_transit",
          "out_for_delivery",
        ]),
      );

      // Pending carrier approvals
      const pendingCarriersQuery = query(
        collection(db, "users"),
        where("role", "==", "carrier"),
        where("isApproved", "==", false),
      );

      // Count new deliveries (created in last 24 hours)
      const newDeliveriesQuery = query(
        collection(db, "deliveries"),
        where("createdAt", ">=", Timestamp.fromDate(today)),
      );

      const [
        pendingDeliveriesSnapshot,
        inTransitDeliveriesSnapshot,
        pendingCarriersSnapshot,
        newDeliveriesSnapshot,
      ] = await Promise.all([
        getDocs(pendingDeliveriesQuery),
        getDocs(inTransitDeliveriesQuery),
        getDocs(pendingCarriersQuery),
        getDocs(newDeliveriesQuery),
      ]);

      const summary: NotificationSummary = {
        pendingCarriers: pendingCarriersSnapshot.size,
        pendingDeliveries: pendingDeliveriesSnapshot.size,
        inTransitDeliveries: inTransitDeliveriesSnapshot.size,
        newDeliveries: newDeliveriesSnapshot.size,
      };

      setNotificationSummary(summary);

      // Total notifications shown on bell
      const total =
        summary.pendingCarriers +
        summary.pendingDeliveries +
        summary.inTransitDeliveries +
        summary.newDeliveries;
      setNotificationCount(total);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const visibleNotifications = [
    {
      key: "pendingCarriers",
      label: "Carrier Approvals",
      hint: "Pending inside Carriers",
      count: notificationSummary.pendingCarriers,
      icon: <FaMotorcycle />,
      badgeClass: "bg-blue-100 text-blue-700",
      route: "/carriers/active?filter=pending",
    },
    {
      key: "pendingDeliveries",
      label: "Pending Deliveries",
      hint: "Awaiting assignment",
      count: notificationSummary.pendingDeliveries,
      icon: <FaHourglassHalf />,
      badgeClass: "bg-amber-100 text-amber-700",
      route: "/deliveries/active",
    },
    {
      key: "inTransitDeliveries",
      label: "In-Transit Deliveries",
      hint: "Currently in progress",
      count: notificationSummary.inTransitDeliveries,
      icon: <FaBox />,
      badgeClass: "bg-emerald-100 text-emerald-700",
      route: "/deliveries/active",
    },
    {
      key: "newDeliveries",
      label: "New Deliveries",
      hint: "Created in the last 24 hours",
      count: notificationSummary.newDeliveries,
      icon: <FaWandMagicSparkles />,
      badgeClass: "bg-purple-100 text-purple-700",
      route: "/deliveries/active",
    },
  ].filter((item) => item.count > 0);

  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-5 py-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left: Search and notifications */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const trimmed = searchQuery.trim();
              if (!trimmed) return;
              navigate(
                `/deliveries/active?search=${encodeURIComponent(trimmed)}`,
              );
            }}
            className="flex items-center space-x-1.5"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search deliveries, carriers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md w-44 sm:w-60 md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
              />
              <FaMagnifyingGlass className="absolute left-3 top-2.5 text-gray-400 text-sm" />
            </div>
            <button
              type="submit"
              className="px-3 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary-dark transition-colors font-medium"
            >
              Search
            </button>
          </form>

          {/* Notification bell - Only show if there are notifications */}
          {notificationCount > 0 && (
            <div ref={notificationsRef} className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                title="View notifications"
              >
                <FaBell className="text-lg" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-accent text-white text-[10px] rounded-full flex items-center justify-center font-semibold">
                    {notificationCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="p-3 border-b border-gray-100 bg-gray-50">
                    <p className="font-semibold text-gray-800">Notifications</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Total items: {notificationCount}
                    </p>
                  </div>
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {visibleNotifications.map((item, index) => (
                      <button
                        key={item.key}
                        onClick={() => {
                          navigate(item.route);
                          setShowNotifications(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                          index < visibleNotifications.length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-medium text-gray-800 inline-flex items-center gap-2">
                              {item.icon} {item.label}
                            </p>
                            <p className="text-xs text-gray-500">{item.hint}</p>
                          </div>
                          <span
                            className={`text-xs font-semibold px-2 py-1 rounded-full ${item.badgeClass}`}
                          >
                            {item.count}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: User profile */}
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={goToProfile}
            className="text-right hidden md:block hover:opacity-80 transition-opacity"
            title="Open My Profile"
          >
            <p className="font-semibold text-gray-800">
              {userProfile?.fullName || user.email}
            </p>
            <p className="text-sm text-gray-500">My Profile</p>
          </button>

          <div ref={menuRef} className="relative">
            <div className="flex items-center space-x-2 p-2">
              <button
                type="button"
                onClick={goToProfile}
                className="hover:bg-gray-50 rounded-md transition-colors"
                title="Open My Profile"
              >
                <div className="w-9 h-9 bg-primary-bg rounded-full flex items-center justify-center ring-1 ring-primary/20">
                  <span className="text-primary font-semibold text-sm">
                    {userProfile?.fullName?.[0] || user.email?.[0] || "C"}
                  </span>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setShowMenu(!showMenu)}
                className="p-1 hover:bg-gray-50 rounded-md transition-colors"
                title="Open account menu"
              >
                <FaCaretDown className="text-gray-500" />
              </button>
            </div>

            {/* Dropdown menu */}
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                  <button
                    type="button"
                    onClick={goToProfile}
                    className="font-medium text-gray-800 hover:text-primary transition-colors text-left"
                  >
                    {user.email}
                  </button>
                  <p className="text-sm text-gray-500">Coordinator</p>
                </div>
                <div className="py-2">
                  <button
                    onClick={goToProfile}
                    className="w-full text-left block px-4 py-2 hover:bg-primary-bg hover:text-primary transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FaGear /> My Profile
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      navigate("/settings");
                      setShowMenu(false);
                    }}
                    className="w-full text-left block px-4 py-2 hover:bg-primary-bg hover:text-primary transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FaGear /> Settings
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      navigate("/analytics");
                      setShowMenu(false);
                    }}
                    className="w-full text-left block px-4 py-2 hover:bg-primary-bg hover:text-primary transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FaChartLine /> Analytics
                    </span>
                  </button>
                </div>
                <div className="border-t border-gray-100 py-2">
                  <button
                    onClick={() => auth.signOut()}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors font-medium"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FaRightFromBracket /> Logout
                    </span>
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
