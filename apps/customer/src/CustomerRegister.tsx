import { useState } from "react";
import { auth, db } from "@config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function CustomerRegister() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    city: "Maseru",
    acceptTerms: false,
  });

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
    if (!formData.phone.match(/^\+?[0-9\s\-()]{10,}$/)) {
      setError("Valid phone number is required");
      return false;
    }

    if (!formData.address.trim()) {
      setError("Physical address is required");
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

      const userId = userCredential.user.uid;

      // 2. Save customer profile to Firestore
      await setDoc(doc(db, "users", userId), {
        email: formData.email,
        role: "customer",
        fullName: formData.fullName,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        country: "Lesotho",
        createdAt: new Date(),
        updatedAt: new Date(),
        emailVerified: false,
      });

      toast.success("Account created successfully!");
      navigate("/login");
    } catch (err: any) {
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
      } else {
        setError(err.message || "Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
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
            Join PTROS and start tracking your deliveries
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
              2. Details
            </div>
            <div
              className={`text-sm font-medium ${
                step >= 3 ? "text-green-600" : "text-gray-400"
              }`}
            >
              3. Review
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
                    Next: Contact Details →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Contact Details */}
            {step === 2 && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Contact Details
                </h3>

                <div className="space-y-6">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Physical Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="House number, street, area"
                      required
                    />
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
                    Next: Review →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Terms */}
            {step === 3 && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Review & Submit
                </h3>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="font-semibold text-lg mb-4">
                    Your Information
                  </h4>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium">{formData.fullName}</p>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{formData.email}</p>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{formData.phone}</p>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <p className="text-sm text-gray-500">City</p>
                      <p className="font-medium">{formData.city}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium text-right max-w-xs">
                        {formData.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-start">
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
                      I agree to the PTROS Customer Terms and Conditions and
                      Privacy Policy. I understand how my delivery data will be
                      used and managed.
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
                        Welcome Benefits
                      </h4>
                      <div className="text-sm text-green-700 mt-1">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Track your deliveries in real-time</li>
                          <li>Receive SMS/email notifications</li>
                          <li>View complete delivery history</li>
                          <li>Access customer support 24/7</li>
                        </ul>
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
                    {loading ? "Creating Account..." : "Create Account"}
                  </button>
                </div>
              </div>
            )}
          </form>
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
        </div>
      </div>
    </div>
  );
}
