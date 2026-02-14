// apps/coordinator/src/AppRouter.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "@config";
import { doc, getDoc } from "firebase/firestore";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";
import PendingCarriers from "./PendingCarriers";
import ActiveCarriers from "./ActiveCarriers";
import CarrierDetails from "./CarrierDetails";
import CreateDelivery from "./CreateDelivery";
import ActiveDeliveries from "./ActiveDeliveries";
import DeliveryDetails from "./DeliveryDetails";
import DeliveryHistory from "./DeliveryHistory";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import LiveMap from "./LiveMap";
import Analytics from "./Analytics";
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
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header user={user} userProfile={userProfile} />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/dashboard"
              element={<Dashboard user={user} userProfile={userProfile} />}
            />
            <Route path="/carriers/pending" element={<PendingCarriers />} />
            <Route path="/carriers/active" element={<ActiveCarriers />} />
            <Route path="/carriers/:id" element={<CarrierDetails />} />
            <Route path="/deliveries/create" element={<CreateDelivery />} />
            <Route path="/deliveries/active" element={<ActiveDeliveries />} />
            <Route path="/deliveries/:id" element={<DeliveryDetails />} />
            <Route path="/deliveries/history" element={<DeliveryHistory />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/customers/:id" element={<CustomerDetails />} />
            <Route path="/tracking/live" element={<LiveMap />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
