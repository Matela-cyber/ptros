import { useState } from "react";
import { auth, db } from "@config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Personal Information
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",

    // Contact Details
    phone: "",
    whatsapp: "",

    // HOME Address (Permanent - for profile)
    homeAddress: "",
    city: "Maseru",

    // Terms
    acceptTerms: false,
    marketingOptIn: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateStep1 = () => {
    if (!formData.fullName.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Valid email is required");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.phone.match(/^\+?[0-9\s\-]{10,}$/)) {
      setError("Valid phone number is required");
      return false;
    }
    if (!formData.homeAddress.trim()) {
      setError("Home address is required");
      return false;
    }
    return true;
  };

  const nextStep = () => {
    setError("");
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep(step + 1);
  };

  const prevStep = () => {
    setError("");
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.acceptTerms) {
      setError("You must accept the terms and conditions");
      setLoading(false);
      return;
    }

    try {
      // 1. Create Firebase Auth user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // 2. Send email verification (but don't block login)
      await sendEmailVerification(user, {
        url: window.location.origin + "/dashboard", // Redirect after verification
        handleCodeInApp: true,
      });

      // 3. Save customer profile to Firestore
      await setDoc(doc(db, "users", user.uid), {
        // Personal Information
        email: formData.email,
        role: "customer",
        fullName: formData.fullName,

        // Contact Details
        phone: formData.phone,
        whatsapp: formData.whatsapp || formData.phone,

        // HOME Address (Permanent - for profile)
        homeAddress: formData.homeAddress,
        city: formData.city,
        country: "Lesotho",
        coordinates: null, // Will be set later with Google Maps Geocoding

        // Address Book (for future deliveries)
        addressBook: [
          {
            id: "home",
            name: "Home",
            address: formData.homeAddress,
            city: formData.city,
            isDefault: true,
            type: "home",
            createdAt: new Date(),
          },
        ],

        // Email Verification Status
        emailVerified: false,

        // Approval & Status
        isApproved: true, // Customers auto-approve
        status: "active",

        // Preferences
        marketingOptIn: formData.marketingOptIn,
        notificationPreferences: {
          email: true,
          sms: true,
          whatsapp: !!formData.whatsapp,
          push: true,
        },

        // Stats
        totalOrders: 0,
        totalSpent: 0,
        loyaltyPoints: 0,

        // Metadata
        createdAt: new Date(),
        updatedAt: new Date(),
        registrationMethod: "website",
        lastLogin: null,
      });

      console.log("✅ Customer profile saved to Firestore");

      // 4. Set registration as complete (show verification message but allow login)
      setRegistrationComplete(true);
    } catch (err: any) {
      console.error("Registration error:", err);

      // User-friendly error messages
      if (err.code === "auth/email-already-in-use") {
        setError(
          "This email is already registered. Please login or use a different email."
        );
      } else if (err.code === "auth/weak-password") {
        setError(
          "Password is too weak. Use at least 8 characters with letters and numbers."
        );
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address. Please enter a valid email.");
      } else if (err.code === "auth/operation-not-allowed") {
        setError(
          "Email/password accounts are not enabled. Please contact support."
        );
      } else {
        setError(err.message || "Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const citiesOfLesotho = [
    "Maseru",
    "Teyateyaneng",
    "Mafeteng",
    "Hlotse",
    "Mohale's Hoek",
    "Maputsoe",
    "Qacha's Nek",
    "Quthing",
    "Butha-Buthe",
    "Mokhotlong",
    "Thaba-Tseka",
    "Semonkong",
    "Roma",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h1 className="text-3xl font-bold text-green-800">
                PTROS Customer
              </h1>
            </div>
          </Link>
          <h2 className="text-2xl font-semibold text-gray-700">
            Create Your Account
          </h2>
          <p className="text-gray-600 mt-2">
            Register to track deliveries and manage your orders
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <div
              className={`text-sm font-medium ${
                step >= 1 ? "text-green-600" : "text-gray-400"
              }`}
            >
              1. Account
            </div>
            <div
              className={`text-sm font-medium ${
                step >= 2 ? "text-green-600" : "text-gray-400"
              }`}
            >
              2. Contact & Address
            </div>
            <div
              className={`text-sm font-medium ${
                step >= 3 ? "text-green-600" : "text-gray-400"
              }`}
            >
              3. Complete
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-green-600 rounded-full transition-all duration-300"
              style={{ width: `${(step - 1) * 50}%` }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {registrationComplete ? (
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-4xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Account Created Successfully!
              </h3>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 text-left max-w-md mx-auto">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <span className="text-blue-500 text-xl">📧</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-blue-800 mb-1">
                      Check Your Email
                    </h4>
                    <p className="text-sm text-blue-700">
                      We've sent a verification email to{" "}
                      <span className="font-semibold">{formData.email}</span>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-green-500 text-xl">✅</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-green-800 mb-1">
                      You Can Login Now
                    </h4>
                    <p className="text-sm text-green-700">
                      Your account is active! You can login immediately. Verify
                      your email later for full features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <button
                  onClick={() => navigate("/login")}
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                >
                  Go to Login
                </button>

                <div className="text-sm text-gray-500">
                  <p>Need help? Contact support: support@ptros.co.ls</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 m-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-red-500">⚠️</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Step 1: Account Information */}
                {step === 1 && (
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Account Information
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="john@example.com"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          We'll send a verification email to this address
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password *
                          </label>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="At least 8 characters"
                            minLength={8}
                            required
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Minimum 8 characters
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password *
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Confirm your password"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition"
                      >
                        Next: Contact & Address →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact & HOME Address */}
                {step === 2 && (
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Contact Details & Home Address
                    </h3>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="+266 5000 0000"
                            required
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            For delivery notifications
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            WhatsApp Number (Optional)
                          </label>
                          <input
                            type="tel"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="+266 5000 0000"
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            For WhatsApp delivery updates
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          required
                        >
                          {citiesOfLesotho.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Home Address *
                          </label>
                          <span className="text-xs text-gray-500">
                            Your permanent address
                          </span>
                        </div>
                        <textarea
                          name="homeAddress"
                          value={formData.homeAddress}
                          onChange={handleChange}
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Your complete home address (house number, street, area)"
                          required
                        />
                        <div className="mt-2 text-sm text-gray-600">
                          <p className="font-medium mb-1">ℹ️ Important:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              This is your <strong>home address</strong> for
                              your profile
                            </li>
                            <li>
                              You can add <strong>delivery addresses</strong>{" "}
                              later when creating orders
                            </li>
                            <li>
                              Delivery addresses can be pinned on a map for
                              accuracy
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            id="marketingOptIn"
                            name="marketingOptIn"
                            checked={formData.marketingOptIn}
                            onChange={handleChange}
                            className="mt-1 mr-3"
                          />
                          <label
                            htmlFor="marketingOptIn"
                            className="text-sm text-gray-700"
                          >
                            I'd like to receive special offers, promotions, and
                            delivery updates via email and SMS
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                      >
                        Next: Review & Create →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Review & Create */}
                {step === 3 && (
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Review Your Information
                    </h3>

                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                      <h4 className="font-semibold text-lg mb-4">
                        Account Details
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Full Name</p>
                          <p className="font-medium">{formData.fullName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium">{formData.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">City</p>
                          <p className="font-medium">{formData.city}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-500">Home Address</p>
                          <p className="font-medium">{formData.homeAddress}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-start mb-4">
                        <input
                          type="checkbox"
                          id="acceptTerms"
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleChange}
                          className="mt-1 mr-3"
                          required
                        />
                        <label
                          htmlFor="acceptTerms"
                          className="text-sm text-gray-700"
                        >
                          I agree to the PTROS Terms of Service and Privacy
                          Policy. I understand that:
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                            <li>My account will be active immediately</li>
                            <li>I should verify my email for security</li>
                            <li>
                              Delivery addresses will be selected per order
                            </li>
                            <li>
                              PTROS will process my data according to the
                              Privacy Policy
                            </li>
                          </ul>
                        </label>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <span className="text-green-600">✓</span>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-green-800">
                            Instant Access
                          </h4>
                          <div className="text-sm text-green-700 mt-1">
                            <p>• Your account will be active immediately</p>
                            <p>• You can login right after registration</p>
                            <p>• Verify email later for enhanced security</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading || !formData.acceptTerms}
                        className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <span className="flex items-center">
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
                            Creating Account...
                          </span>
                        ) : (
                          "Create Account & Send Verification"
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </>
          )}
        </div>

        {/* Footer Links */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 hover:text-green-800 font-medium"
            >
              Login here
            </Link>
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Need help? Contact PTROS Support: support@ptros.co.ls or +266 2222
            3333
          </p>
        </div>
      </div>
    </div>
  );
}