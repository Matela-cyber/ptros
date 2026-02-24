import { useState } from "react";
import { auth, db } from "@config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailNotVerified, setEmailNotVerified] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setEmailNotVerified(false);

    try {
      // 1. Sign in with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 2. Check user profile in Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (!userDoc.exists()) {
        // User doesn't have a profile
        setError("Account not found. Please contact support.");
        await auth.signOut();
        setLoading(false);
        return;
      }

      const userData = userDoc.data();

      // 3. Check if this is a customer account
      if (userData.role !== "customer") {
        setError(
          "This account is not a customer account. Please use the correct portal."
        );
        await auth.signOut();
        setLoading(false);
        return;
      }

      // 4. Check email verification status (INFO ONLY - DON'T BLOCK)
      const isEmailVerified =
        user.emailVerified || userData.emailVerified === true;

      if (!isEmailVerified) {
        setEmailNotVerified(true);

        // Update Firestore with verification status if email is verified
        if (user.emailVerified && !userData.emailVerified) {
          await updateDoc(doc(db, "users", user.uid), {
            emailVerified: true,
            updatedAt: new Date(),
          });
        }
      } else {
        // Update Firestore if needed
        if (user.emailVerified && !userData.emailVerified) {
          await updateDoc(doc(db, "users", user.uid), {
            emailVerified: true,
            updatedAt: new Date(),
          });
        }
      }

      // 5. Login successful - always allow login
      console.log("Customer login successful for:", user.email);
    } catch (err: any) {
      console.error("Login error:", err);

      // User-friendly error messages
      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        setError("Invalid email or password. Please try again.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many failed attempts. Please try again later.");
      } else if (err.code === "auth/user-disabled") {
        setError("This account has been disabled. Please contact support.");
      } else if (err.code === "auth/network-request-failed") {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(err.message || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-emerald-900 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <h1 className="text-3xl font-bold text-green-800">
              PTROS Customer
            </h1>
          </div>
          <p className="text-gray-600">
            Sign in to track deliveries and manage orders
          </p>
        </div>

        {/* Email Not Verified Warning (Non-blocking) */}
        {emailNotVerified && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-yellow-600">⚠️</span>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-yellow-800">
                  Verify Your Email
                </h4>
                <p className="text-sm text-yellow-700 mt-1">
                  Please verify your email for full account security. Check your
                  inbox for the verification email.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-red-500">⚠️</span>
              </div>
              <div className="ml-3">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              required
              minLength={6}
              disabled={loading}
            />
            <div className="text-right mt-2">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-green-600 hover:text-green-800"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Registration Link */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">New to PTROS?</p>
          <Link
            to="/register"
            className="inline-block w-full py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            Create Customer Account
          </Link>
        </div>

        {/* Benefits */}
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="text-sm font-medium text-green-800 mb-2">
            Customer Benefits
          </h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Track deliveries in real-time</li>
            <li>• View delivery history</li>
            <li>• Get SMS/email notifications</li>
            <li>• Manage your delivery addresses</li>
          </ul>
        </div>

        {/* Support Link */}
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <a
              href="mailto:support@ptros.co.ls"
              className="text-green-600 hover:text-green-800"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
