// apps/customer/src/App.tsx

import { useEffect, useState } from "react";
import { auth, db } from "@config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import GoogleMapsLoader from "./GoogleMapsLoader";
import AppRouter from "./AppRouter";
import Login from "./Login";
import CustomerRegister from "./CustomerRegister";
import ForgotPassword from "./ForgotPassword";
import { Toaster } from "react-hot-toast";

const REQUIRED_ROLE = "customer";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        const role = userDoc.exists() ? userDoc.data()?.role : null;

        setUser(currentUser);
        setUserRole(role);
      } else {
        setUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <BrowserRouter>
      <GoogleMapsLoader>
        {loading && (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-gray-700">Loading PTROS Customer...</p>
            </div>
          </div>
        )}

        {!loading && !user && (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<CustomerRegister />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}

        {!loading && user && userRole !== REQUIRED_ROLE && (
          <div className="min-h-screen flex items-center justify-center bg-red-50">
            <div className="text-center p-10">
              <h1 className="text-4xl font-bold text-red-600 mb-4">
                Access Denied
              </h1>
              <p className="text-xl mb-4">This portal is for customers only.</p>
              <p className="text-lg">
                You are logged in as: <strong>{userRole}</strong>
              </p>
              <button
                onClick={() => auth.signOut()}
                className="mt-8 px-8 py-4 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        )}

        {!loading && user && userRole === REQUIRED_ROLE && (
          <AppRouter user={user} />
        )}
      </GoogleMapsLoader>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
