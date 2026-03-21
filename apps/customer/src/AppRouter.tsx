// apps/customer/src/AppRouter.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "@config";
import { doc, getDoc } from "firebase/firestore";
import Sidebar from "./Sidebar.tsx";
import Header from "./Header.tsx";
import Dashboard from "./Dashboard.tsx";
import OrderHistory from "./OrderHistory.tsx";
import OrderDetails from "./OrderDetails.tsx";
import CreateOrder from "./CreateOrder";
import TrackOrder from "./TrackOrder.tsx";
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
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

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
    <div className="min-h-screen bg-gray-50 lg:flex">
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {mobileSidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      <div className="flex min-h-screen flex-1 min-w-0 flex-col">
        <Header
          user={user}
          userProfile={userProfile}
          onToggleSidebar={() => setMobileSidebarOpen((prev) => !prev)}
        />
        <main className="flex-1 overflow-x-hidden p-3 sm:p-4 lg:p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/dashboard"
              element={<Dashboard user={user} userProfile={userProfile} />}
            />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/orders/new" element={<CreateOrder user={user} />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route
              path="/track/:id"
              element={<PackageTracking isGuest={false} />}
            />
            <Route path="/track" element={<TrackOrder />} />
            <Route path="/track-map" element={<TrackingMap user={user} />} />
            <Route
              path="/profile"
              element={<Profile user={user} userProfile={userProfile} />}
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
