import { useEffect, useState } from "react";
import { auth, db } from "@config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Login from "./Login";
import AppRouter from "./AppRouter";
import { Toaster } from "react-hot-toast";

const REQUIRED_ROLE = "carrier"; // Change in each app: "carrier" or "customer"

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        const role = userDoc.exists() ? userDoc.data()?.role : null;
        setUserRole(role);
        setUser(currentUser);
      } else {
        setUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <>
      {loading && (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <p className="text-2xl font-semibold text-gray-700">Loading PTROS...</p>
        </div>
      )}

      {!loading && !user && <Login />}

      {!loading && user && userRole !== REQUIRED_ROLE && (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="text-center p-10">
            <h1 className="text-5xl font-bold text-red-600 mb-6">
              Access Denied
            </h1>
            <p className="text-xl mb-4">
              This portal is for <strong>{REQUIRED_ROLE}s</strong> only.
            </p>
            <p className="text-lg">
              You are logged in with role: <strong>{userRole || "none"}</strong>
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
      <Toaster />
    </>
  );
}

export default App;
