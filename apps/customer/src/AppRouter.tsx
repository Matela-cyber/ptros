// apps/customer/src/AppRouter.tsx
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "@config";
import { doc, getDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faHouse,
  faMapLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header.tsx";
import Dashboard from "./Dashboard.tsx";
import OrderHistory from "./OrderHistory.tsx";
import OrderDetails from "./OrderDetails.tsx";
import CreateOrder from "./CreateOrder";
import TrackingMap from "./TrackingMap";
import PackageTracking from "./components/PackageTracking.tsx";
import Profile from "./Profile.tsx";
import Settings from "./Settings.tsx";

type Props = {
  user: any;
};

export default function AppRouter({ user }: Props) {
  const [userProfile, setUserProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserProfile(userDoc.data());
        }
      }
      setLoading(false);
    };
    fetchProfile();
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen min-w-0 flex-col">
        <Header user={user} userProfile={userProfile} />

        <main className="flex-1 overflow-x-hidden p-3 pb-24 sm:p-4 sm:pb-24 lg:p-6 lg:pb-24">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/dashboard"
              element={<Dashboard user={user} userProfile={userProfile} />}
            />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/orders/new" element={<CreateOrder user={user} />} />
            <Route
              path="/create-order"
              element={<Navigate to="/orders/new" replace />}
            />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route
              path="/track/:id"
              element={<PackageTracking isGuest={false} />}
            />
            <Route
              path="/track"
              element={<Navigate to="/track-map" replace />}
            />
            <Route path="/track-map" element={<TrackingMap user={user} />} />
            <Route
              path="/profile"
              element={<Profile user={user} userProfile={userProfile} />}
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto grid max-w-3xl grid-cols-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`
              }
            >
              <FontAwesomeIcon icon={faHouse} className="text-base" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`
              }
            >
              <FontAwesomeIcon icon={faBox} className="text-base" />
              <span>Orders</span>
            </NavLink>

            <NavLink
              to="/track-map"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`
              }
            >
              <FontAwesomeIcon icon={faMapLocationDot} className="text-base" />
              <span>Tracking</span>
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`
              }
            >
              <FontAwesomeIcon icon={faUser} className="text-base" />
              <span>Profile</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
