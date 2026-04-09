// apps/customer/src/Header.tsx
import { auth } from "@config";
import { signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useNotifications } from "./hooks/useNotifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBox,
  faCircleCheck,
  faCircleInfo,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  user: any;
  userProfile?: any;
};

export default function Header({ user, userProfile }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const notificationsRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    clearNotification,
  } = useNotifications();

  useEffect(() => {
    if (location.pathname === "/track-map") {
      const params = new URLSearchParams(location.search);
      setSearchValue((params.get("trackingCode") || "").toUpperCase());
      return;
    }

    setSearchValue("");
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
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

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowNotifications(false);
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showNotifications, showMenu]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "delivery":
        return "bg-blue-50 border-l-4 border-blue-500";
      case "order":
        return "bg-green-50 border-l-4 border-green-500";
      case "alert":
        return "bg-red-50 border-l-4 border-red-500";
      default:
        return "bg-gray-50 border-l-4 border-gray-500";
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "delivery":
        return faBox;
      case "order":
        return faCircleCheck;
      case "alert":
        return faTriangleExclamation;
      default:
        return faCircleInfo;
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const normalized = searchValue.trim().toUpperCase();
    if (!normalized) {
      navigate("/track-map");
      return;
    }

    navigate(`/track-map?trackingCode=${encodeURIComponent(normalized)}`);
  };

  return (
    <header className="border-b bg-white px-3 py-2 shadow-sm sm:px-4 lg:px-6">
      <div className="flex items-center justify-between gap-2 sm:gap-3 lg:gap-4">
        {/* Left: Search */}
        <div className="flex items-center gap-2 sm:gap-3">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-2"
          >
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value.toUpperCase())}
                placeholder="Search by tracking code..."
                className="w-40 rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <svg
                className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              type="button"
              onClick={() => navigate("/orders/new")}
              className="px-2.5 py-2 text-xs sm:text-sm border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Create Order
            </button>
          </form>

          {/* Notification bell */}
          <div className="relative" ref={notificationsRef}>
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowMenu(false);
              }}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="fixed left-2 right-2 top-16 z-50 max-h-[70vh] overflow-y-auto rounded-lg border bg-white shadow-xl sm:absolute sm:left-auto sm:right-0 sm:top-auto sm:mt-2 sm:w-96 sm:max-h-96">
                {/* Header */}
                <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-blue-100 sticky top-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-800">Notifications</h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={() => markAllAsRead()}
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>
                </div>

                {/* Notifications List */}
                {notifications.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <div className="text-3xl mb-2">
                      <FontAwesomeIcon icon={faBell} />
                    </div>
                    <p>No notifications yet</p>
                  </div>
                ) : (
                  <div className="divide-y">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-4 hover:bg-gray-50 transition-colors ${getNotificationColor(
                          notif.type,
                        )} cursor-pointer ${!notif.isRead ? "bg-blue-50" : ""}`}
                        onClick={() => !notif.isRead && markAsRead(notif.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">
                                <FontAwesomeIcon
                                  icon={getNotificationIcon(notif.type)}
                                />
                              </span>
                              <p className="font-semibold text-gray-800 text-sm">
                                {notif.title}
                              </p>
                              {!notif.isRead && (
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {notif.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                              {new Date(notif.createdAt).toLocaleDateString()}{" "}
                              {new Date(notif.createdAt).toLocaleTimeString(
                                [],
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                },
                              )}
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              clearNotification(notif.id);
                            }}
                            className="text-gray-400 hover:text-gray-600 ml-2"
                          >
                            <FontAwesomeIcon icon={faXmark} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer */}
                {notifications.length > 0 && (
                  <div className="p-3 border-t bg-gray-50 text-center">
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View all notifications
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right: User profile dropdown */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 flex-shrink-0">
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => {
                setShowMenu(!showMenu);
                setShowNotifications(false);
              }}
              className="flex items-center p-2 hover:bg-gray-100 rounded-lg"
            >
              <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center ring-1 ring-blue-200">
                <span className="text-blue-600 font-semibold text-sm">
                  {userProfile?.fullName?.[0] || user.email?.[0] || "C"}
                </span>
              </div>
            </button>

            {/* Dropdown menu */}
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                <div className="p-4 border-b">
                  <p className="font-medium">{user.email}</p>
                  <p className="text-sm text-gray-500">Customer</p>
                </div>
                <div className="py-2">
                  <a
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
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
                    My Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
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
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Help & Support
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-600 hover:text-red-700 border-t"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
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
