import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "@config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";

export default function GuestTrack() {
  const navigate = useNavigate();
  const [trackingCode, setTrackingCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingCode.trim()) {
      toast.error("Please enter a tracking code");
      return;
    }

    setLoading(true);
    try {
      const q = query(
        collection(db, "deliveries"),
        where("trackingCode", "==", trackingCode.toUpperCase()),
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        toast.error("Tracking code not found. Please check and try again.");
        setLoading(false);
        return;
      }

      const deliveryId = snapshot.docs[0].id;
      // Navigate to the package tracking page with guest flag
      navigate(`/g/track/${deliveryId}`);
    } catch (error) {
      console.error("Error tracking order:", error);
      toast.error("Failed to find tracking information");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center p-4">
      <Toaster position="top-right" />

      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">📦</div>
          <h1 className="text-4xl font-bold text-white mb-2">PTROS</h1>
          <p className="text-blue-100 text-lg">Package Tracking System</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Track Your Package
          </h2>
          <p className="text-gray-600 mb-6">
            Enter your tracking code to see real-time updates
          </p>

          {/* Form */}
          <form onSubmit={handleTrack} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tracking Code
              </label>
              <input
                type="text"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value.toUpperCase())}
                placeholder="e.g., PTR-001234"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-lg"
                disabled={loading}
                autoFocus
              />
              <p className="text-xs text-gray-500 mt-2">
                You should have received this code via email or SMS
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Searching...
                </div>
              ) : (
                "Track Package"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Have an account?
              </span>
            </div>
          </div>

          {/* Login Link */}
          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            Sign In Instead
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 text-white text-center mb-6">
          <div>
            <div className="text-2xl mb-2">🗺️</div>
            <p className="text-sm">Live Map</p>
          </div>
          <div>
            <div className="text-2xl mb-2">⏱️</div>
            <p className="text-sm">Real-time Updates</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📞</div>
            <p className="text-sm">Driver Contact</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-blue-100 text-sm">
          Your package tracking code is private and secure.
        </p>
      </div>
    </div>
  );
}
