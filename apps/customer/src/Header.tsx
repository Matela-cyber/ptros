// apps/customer/src/Header.tsx
import { auth } from "@config";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  user: any;
  userProfile?: any;
};

export default function Header({ user, userProfile }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="bg-white border-b shadow-sm py-4 px-6 ml-64">
      <div className="flex items-center justify-between">
        {/* Left: Search */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search your orders..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-2.5">🔍</span>
          </div>

          {/* Notification bell */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <span>🔔</span>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        {/* Right: User profile */}
        <div className="flex items-center space-x-4">
          <div className="text-right hidden md:block">
            <p className="font-medium text-gray-800">
              {userProfile?.fullName || user.email}
            </p>
            <p className="text-sm text-gray-500">Customer</p>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  {userProfile?.fullName?.[0] || user.email?.[0] || "C"}
                </span>
              </div>
              <span>▼</span>
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
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    👤 My Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    ⚙️ Settings
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    🆘 Help & Support
                  </a>
                </div>
                <div className="border-t py-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
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
