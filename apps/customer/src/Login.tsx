import { useEffect, useRef, useState } from "react";
import { auth, db } from "@config";
import {
  getMultiFactorResolver,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  RecaptchaVerifier,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import type { MultiFactorResolver } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailNotVerified, setEmailNotVerified] = useState(false);
  const [mfaResolver, setMfaResolver] = useState<MultiFactorResolver | null>(null);
  const [mfaVerificationId, setMfaVerificationId] = useState("");
  const [mfaCode, setMfaCode] = useState("");
  const [mfaHint, setMfaHint] = useState("");
  const [mfaLoading, setMfaLoading] = useState(false);
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);

  useEffect(() => {
    return () => {
      recaptchaVerifierRef.current?.clear();
      recaptchaVerifierRef.current = null;
    };
  }, []);

  const ensureRecaptchaVerifier = async () => {
    if (recaptchaVerifierRef.current) {
      return recaptchaVerifierRef.current;
    }

    if (!recaptchaContainerRef.current) {
      throw new Error("reCAPTCHA container not ready");
    }

    const verifier = new RecaptchaVerifier(auth, recaptchaContainerRef.current, {
      size: "invisible",
    });

    await verifier.render();
    recaptchaVerifierRef.current = verifier;
    return verifier;
  };

  const finalizeCustomerLogin = async (user: any) => {
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (!userDoc.exists()) {
      setError("Account not found. Please contact support.");
      await auth.signOut();
      return false;
    }

    const userData = userDoc.data();

    if (userData.role !== "customer") {
      setError(
        "This account is not a customer account. Please use the correct portal.",
      );
      await auth.signOut();
      return false;
    }

    const isEmailVerified =
      user.emailVerified || userData.emailVerified === true;

    if (!isEmailVerified) {
      setEmailNotVerified(true);

      if (user.emailVerified && !userData.emailVerified) {
        await updateDoc(doc(db, "users", user.uid), {
          emailVerified: true,
          updatedAt: new Date(),
        });
      }
    } else if (user.emailVerified && !userData.emailVerified) {
      await updateDoc(doc(db, "users", user.uid), {
        emailVerified: true,
        updatedAt: new Date(),
      });
    }

    console.log("Customer login successful for:", user.email);
    return true;
  };

  const startMfaSignIn = async (resolver: MultiFactorResolver) => {
    const phoneHint = resolver.hints[0];
    if (!phoneHint) {
      throw new Error("No enrolled second factor found for this account.");
    }

    const verifier = await ensureRecaptchaVerifier();
    const provider = new PhoneAuthProvider(auth);
    const verificationId = await provider.verifyPhoneNumber(
      {
        multiFactorHint: phoneHint,
        session: resolver.session,
      },
      verifier,
    );

    const phoneHintInfo = phoneHint as {
      phoneNumber?: string;
      displayName?: string | null;
    };

    setMfaResolver(resolver);
    setMfaVerificationId(verificationId);
    setMfaHint(
      phoneHintInfo.phoneNumber || phoneHintInfo.displayName || "your phone",
    );
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setEmailNotVerified(false);
    setMfaResolver(null);
    setMfaVerificationId("");
    setMfaCode("");
    setMfaHint("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await finalizeCustomerLogin(userCredential.user);
    } catch (err: any) {
      console.error("Login error:", err);

      if (err.code === "auth/multi-factor-auth-required") {
        try {
          const resolver = getMultiFactorResolver(auth, err);
          await startMfaSignIn(resolver);
          setError("");
          return;
        } catch (mfaError: any) {
          console.error("MFA setup error:", mfaError);
          if (mfaError?.code === "auth/operation-not-allowed") {
            setError("Phone authentication is not enabled for this project.");
          } else {
            setError("Failed to start two-factor sign in. Please try again.");
          }
          return;
        }
      }

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

  const handleVerifyMfaCode = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!mfaResolver || !mfaVerificationId || !mfaCode.trim()) {
      setError("Enter the verification code sent to your phone.");
      return;
    }

    setMfaLoading(true);
    setError("");
    try {
      const credential = PhoneAuthProvider.credential(
        mfaVerificationId,
        mfaCode.trim(),
      );
      const assertion = PhoneMultiFactorGenerator.assertion(credential);
      const userCredential = await mfaResolver.resolveSignIn(assertion);
      await finalizeCustomerLogin(userCredential.user);
    } catch (err: any) {
      console.error("MFA verification error:", err);
      if (err.code === "auth/invalid-verification-code") {
        setError("Invalid verification code. Please try again.");
      } else {
        setError("Failed to verify two-factor code. Please try again.");
      }
    } finally {
      setMfaLoading(false);
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
        {!mfaResolver ? (
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
        ) : (
          <form onSubmit={handleVerifyMfaCode} className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-medium text-blue-800">
                Two-factor authentication required
              </p>
              <p className="text-sm text-blue-700 mt-1">
                Enter the SMS code sent to {mfaHint || "your phone"}.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verification Code
              </label>
              <input
                type="text"
                placeholder="Enter SMS code"
                value={mfaCode}
                onChange={(e) => setMfaCode(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                required
                disabled={mfaLoading}
                inputMode="numeric"
              />
            </div>

            <button
              type="submit"
              disabled={mfaLoading}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {mfaLoading ? "Verifying..." : "Verify & Sign In"}
            </button>

            <button
              type="button"
              onClick={() => {
                setMfaResolver(null);
                setMfaVerificationId("");
                setMfaCode("");
                setMfaHint("");
                setError("");
              }}
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Back to Login
            </button>
          </form>
        )}

        <div ref={recaptchaContainerRef} className="min-h-[1px]" aria-hidden="true" />

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Guest Tracking */}
        <Link
          to="/g/track"
          className="w-full py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition flex items-center justify-center gap-2 mb-4"
        >
          📦 Track Without Account
        </Link>

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
