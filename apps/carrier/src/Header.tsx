import { auth } from "@config";
import { User, signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useGPSLocation } from "./hooks";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  user: User;
};

export default function Header({ user }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  // Use GPS sharing logic (no delivery context in header)
  const { isSharing, toggleSharing } = useGPSLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (showMenu && menuRef.current && !menuRef.current.contains(target)) {
        setShowMenu(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
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
  }, [showMenu]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const activeLabel =
    location.pathname === "/deliveries"
      ? "My Deliveries"
      : location.pathname === "/tasks"
        ? "Available Tasks"
        : "Carrier Dashboard";

  return (
    <>
      <header className="border-b bg-white px-3 py-2 shadow-sm sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              PTROS Carrier
            </p>
            <h1 className="truncate text-sm font-semibold text-gray-800 sm:text-base">
              {activeLabel}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            {/* Share Location Button */}
            <button
              onClick={() => setShowLocationModal(true)}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all shadow hover:shadow-md flex items-center gap-1 ${
                isSharing
                  ? "bg-yellow-200 text-yellow-900 border border-yellow-300"
                  : "bg-gray-100 text-gray-600 border border-gray-200"
              }`}
              title={isSharing ? "Sharing Location" : "Share Location"}
            >
              <i
                className={`fa-solid ${isSharing ? "fa-location-dot" : "fa-location-crosshairs"} text-base`}
              />
              {isSharing ? "Sharing Location" : "Share Location"}
            </button>

            {/* Profile/Menu Button */}
            <div className="relative flex-shrink-0" ref={menuRef}>
              <button
                onClick={() => setShowMenu((prev) => !prev)}
                className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                aria-label="Open carrier menu"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 ring-1 ring-blue-200">
                  <span className="text-sm font-semibold text-blue-600">
                    {(user.email?.[0] || "C").toUpperCase()}
                  </span>
                </div>
              </button>

              {showMenu && (
                <div className="absolute right-0 z-50 mt-2 w-52 rounded-lg border bg-white shadow-lg">
                  <div className="border-b p-4">
                    <p className="truncate font-medium text-gray-800">
                      {user.email}
                    </p>
                    <p className="text-sm text-gray-500">Carrier</p>
                  </div>
                  <div className="py-2">
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="block w-full border-t px-4 py-2 text-left text-red-600 hover:bg-gray-100 hover:text-red-700"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Location Modal (simple toggle) */}
        {showLocationModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center">
              <h2 className="text-lg font-bold mb-2">
                {isSharing ? "Stop Sharing Location" : "Share Location"}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {isSharing
                  ? "Your live location is currently being shared with the coordinator."
                  : "Enable live location sharing so the coordinator can assign you jobs based on your real-time position."}
              </p>
              <button
                className={`w-full py-2 rounded-lg font-semibold mb-2 ${
                  isSharing
                    ? "bg-red-100 text-red-700 hover:bg-red-200"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={() => {
                  toggleSharing();
                  setShowLocationModal(false);
                }}
              >
                {isSharing ? "Stop Sharing" : "Start Sharing"}
              </button>
              <button
                className="w-full py-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                onClick={() => setShowLocationModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </header>
      {/* Offline/Location Sharing Banner (now below header) */}
      {!isSharing && (
        <div className="bg-red-50 border-b border-red-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-red-900">You are Offline</p>
                <p className="text-sm text-red-700 font-medium">
                  Location sharing is disabled. Enable it to accept jobs and be
                  visible to the system.
                </p>
              </div>
              <button
                onClick={() => setShowLocationModal(true)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition"
              >
                Enable Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
