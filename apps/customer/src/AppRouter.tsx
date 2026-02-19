// apps/customer/src/AppRouter.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "@config";
import { doc, getDoc } from "firebase/firestore";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";
import OrderHistory from "./OrderHistory";
import OrderDetails from "./OrderDetails";
import CreateOrder from "./CreateOrder";
import TrackOrder from "./TrackOrder";
import TrackingMap from "./TrackingMap";
import Profile from "./Profile";
import Settings from "./Settings";

type Props = {
  user: any;
};

export default function AppRouter({ user }: Props) {
  const [userProfile, setUserProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserProfile(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
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
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header user={user} userProfile={userProfile} />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/dashboard"
              element={<Dashboard user={user} />}
            />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/orders/new" element={<CreateOrder user={user} />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/track" element={<TrackOrder />} />
            <Route path="/track-map" element={<TrackingMap user={user} />} />
            <Route
              path="/profile"
              element={<Profile user={user} userProfile={userProfile} />}
            />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
