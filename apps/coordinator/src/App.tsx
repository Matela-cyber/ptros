// apps/coordinator/src/App.tsx

import { useEffect, useState } from "react";
import { auth, db } from "@config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { BrowserRouter } from "react-router-dom";
import {
  initializeTimeServiceMonitor,
  cleanupTimeServiceMonitor,
} from "./services/timeService";

import GoogleMapsLoader from "./GoogleMapsLoader";
import AppRouter from "./AppRouter";
import Login from "./Login";
import { Toaster } from "react-hot-toast";

const REQUIRED_ROLE = "coordinator";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // Initialize time service monitor for Realtime Database
    initializeTimeServiceMonitor();

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

    return () => {
      unsub();
      cleanupTimeServiceMonitor();
    };
  }, []);

  return (
    <BrowserRouter>
      <GoogleMapsLoader>
        {loading && (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-gray-700">Loading PTROS Coordinator...</p>
            </div>
          </div>
        )}

        {!loading && !user && <Login />}

        {!loading && user && userRole !== REQUIRED_ROLE && (
          <div className="min-h-screen flex items-center justify-center bg-red-50">
            <div className="text-center p-10">
              <h1 className="text-4xl font-bold text-red-600 mb-6">
                Access Denied
              </h1>
              <p className="text-xl mb-4">
                This portal is for <strong>Coordinators</strong> only.
              </p>
              <p className="text-lg mb-6">
                Your role: <strong>{userRole || "none"}</strong>
              </p>
              <button
                onClick={() => auth.signOut()}
                className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
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
