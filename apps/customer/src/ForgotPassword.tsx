import { useState } from "react";
import { auth } from "@config";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
      toast.success("Password reset email sent!");
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err: any) {
      console.error("Password reset error:", err);

      if (err.code === "auth/user-not-found") {
        setError(
          "No account found with this email address. Please check and try again."
        );
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address. Please try again.");
      } else if (err.code === "auth/too-many-requests") {
        setError(
          "Too many reset requests. Please try again later or contact support."
        );
      } else if (err.code === "auth/network-request-failed") {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(err.message || "Failed to send reset email. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-emerald-900 p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">✓</span>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Check Your Email
            </h1>

            <p className="text-gray-600 mb-6">
              We've sent a password reset link to:
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 break-all">
              <p className="font-medium text-gray-800">{email}</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h4 className="text-sm font-medium text-blue-800 mb-2">
                What to do next:
              </h4>
              <ol className="text-sm text-blue-700 space-y-2 list-decimal list-inside">
                <li>Check your email (including spam folder)</li>
                <li>Click the reset link in the email</li>
                <li>Create a new password</li>
                <li>Return here to sign in</li>
              </ol>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              The reset link expires in 1 hour for security.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Back to Login
            </button>

            <p className="text-sm text-gray-500 mt-4">
              Didn't receive the email?{" "}
              <button
                onClick={() => {
                  setSuccess(false);
                  setEmail("");
                }}
                className="text-green-600 hover:text-green-800 font-medium"
              >
                Try again
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-emerald-900 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <h1 className="text-3xl font-bold text-green-800">
              PTROS Customer
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">
            Reset Your Password
          </h2>
          <p className="text-gray-600 mt-2">
            Enter your email address and we'll send you a reset link
          </p>
        </div>

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

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              required
              disabled={loading}
            />
            <p className="text-xs text-gray-500 mt-2">
              Enter the email address associated with your account
            </p>
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
                Sending...
              </>
            ) : (
              "Send Reset Email"
            )}
          </button>
        </form>

        {/* Information Box */}
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="text-sm font-medium text-green-800 mb-2">
            💡 Password Reset Process
          </h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• We'll send a reset link to your email</li>
            <li>• The link is valid for 1 hour</li>
            <li>• Click the link to create a new password</li>
            <li>• You can then log in with your new password</li>
          </ul>
        </div>

        {/* Back to Login */}
        <div className="mt-8 text-center pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">Remember your password?</p>
          <Link
            to="/login"
            className="inline-block w-full py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            Back to Login
          </Link>
        </div>

        {/* Support Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <a
              href="mailto:support@ptros.co.ls"
              className="text-green-600 hover:text-green-800 font-medium"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
