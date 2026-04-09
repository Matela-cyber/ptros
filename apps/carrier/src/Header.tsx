import { auth } from "@config";
import { User, signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  user: User;
};

export default function Header({ user }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

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
                  onClick={() => {
                    navigate("/dashboard");
                    setShowMenu(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Dashboard
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/deliveries");
                    setShowMenu(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  My Deliveries
                </button>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/tasks");
                    setShowMenu(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Available Tasks
                </button>
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
    </header>
  );
}
