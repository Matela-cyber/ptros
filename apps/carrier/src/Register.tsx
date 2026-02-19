import { useState, useRef } from "react";
import { auth, db, storage } from "@config";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    // Personal Information
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",

    // Contact Details
    phone: "",
    whatsapp: "",

    // Physical Address
    address: "",
    city: "Maseru",

    // Vehicle Information
    vehicleType: "",
    licensePlate: "",
    idNumber: "",

    // Profile Picture - REQUIRED
    profilePicture: null as File | null,

    // Terms
    acceptTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [isProcessingImage, setIsProcessingImage] = useState(false);

  // Function to resize and crop image to 200x200 square
  const resizeAndCropImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;

        img.onload = () => {
          // Create canvas for processing
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          if (!ctx) {
            reject(new Error("Could not get canvas context"));
            return;
          }

          // Set target size for the final image
          const targetSize = 200;
          canvas.width = targetSize;
          canvas.height = targetSize;

          // Calculate scaling and cropping
          const width = img.width;
          const height = img.height;

          // Determine the shorter side to maintain aspect ratio while cropping
          const minSide = Math.min(width, height);

          // Calculate source dimensions for cropping (centered)
          const sx = (width - minSide) / 2;
          const sy = (height - minSide) / 2;

          // Draw the image cropped and resized
          ctx.drawImage(
            img,
            sx,
            sy,
            minSide,
            minSide,
            0,
            0,
            targetSize,
            targetSize,
          );

          // Convert canvas to Blob, then to File
          canvas.toBlob(
            (blob) => {
              if (blob) {
                const timestamp = Date.now();
                const filename = `profile_${timestamp}.jpg`;

                const resizedFile = new File([blob], filename, {
                  type: "image/jpeg",
                  lastModified: Date.now(),
                });
                resolve(resizedFile);
              } else {
                reject(new Error("Failed to create image blob"));
              }
            },
            "image/jpeg",
            0.85,
          );
        };

        img.onerror = () => reject(new Error("Failed to load image"));
      };

      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  };

  const handleChange = async (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setIsProcessingImage(true);
        setError("");

        try {
          // Validate file type
          const validTypes = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp",
            "image/gif",
          ];
          if (!validTypes.includes(file.type)) {
            setError("Please upload an image file (JPEG, PNG, WebP, GIF)");
            setIsProcessingImage(false);
            return;
          }

          // Validate file size (max 5MB)
          if (file.size > 5 * 1024 * 1024) {
            setError("Image size should be less than 5MB");
            setIsProcessingImage(false);
            return;
          }

          console.log("🖼️ Processing image...");

          // Resize and crop the image
          const resizedFile = await resizeAndCropImage(file);

          console.log("Image processed successfully");
          console.log("Original size:", file.size, "bytes");
          console.log("Processed size:", resizedFile.size, "bytes");

          if (resizedFile.size === 0) {
            throw new Error("Processed image is empty");
          }

          // Update form data
          setFormData((prev) => ({ ...prev, profilePicture: resizedFile }));

          // Create preview
          const reader = new FileReader();
          reader.onloadend = () => {
            setProfilePreview(reader.result as string);
            setIsProcessingImage(false);
          };
          reader.readAsDataURL(resizedFile);
        } catch (err: any) {
          console.error("Image processing error:", err);
          setError("Failed to process image. Please try another image.");
          setIsProcessingImage(false);
        }
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRemovePicture = () => {
    setFormData((prev) => ({ ...prev, profilePicture: null }));
    setProfilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateStep1 = () => {
    // Validate Profile Picture - REQUIRED
    if (!formData.profilePicture) {
      setError("Profile picture is required");
      return false;
    }

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

    console.log("Starting registration process...");

    if (!formData.acceptTerms) {
      setError("You must accept the terms and conditions");
      setLoading(false);
      return;
    }

    try {
      // 1. Create Firebase Auth user
      console.log("Step 1: Creating Firebase Auth user...");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      const userId = userCredential.user.uid;
      console.log("Auth user created. User ID:", userId);

      // 2. Upload profile picture (MANDATORY)
      if (!formData.profilePicture) {
        throw new Error("Profile picture is required");
      }

      console.log("Step 2: Uploading profile picture...");
      console.log("File details:", {
        name: formData.profilePicture.name,
        size: formData.profilePicture.size,
        type: formData.profilePicture.type,
      });

      if (formData.profilePicture.size === 0) {
        throw new Error("Profile picture file is empty (0 bytes)");
      }

      // Create storage reference
      const storagePath = `carriers/${userId}/profile.jpg`;
      console.log("Storage path:", storagePath);

      const storageRef = ref(storage, storagePath);

      console.log("Uploading file to Firebase Storage...");
      // Upload the file
      await uploadBytes(storageRef, formData.profilePicture);
      console.log("File uploaded successfully");

      // Get the download URL
      console.log("🔗 Getting download URL...");
      const photoURL = await getDownloadURL(storageRef);
      console.log("Download URL obtained");

      // 3. Save detailed profile to Firestore
      console.log("💾 Saving user data to Firestore...");
      await setDoc(doc(db, "users", userId), {
        email: formData.email,
        role: "carrier",
        fullName: formData.fullName,
        phone: formData.phone,
        whatsapp: formData.whatsapp || formData.phone,
        address: formData.address,
        city: formData.city,
        country: "Lesotho",
        vehicleType: formData.vehicleType || "Not specified",
        licensePlate: formData.licensePlate || "Not specified",
        idNumber: formData.idNumber || "Not specified",
        photoURL, // Required photo URL
        isApproved: false,
        status: "pending",
        earnings: 0,
        completedDeliveries: 0,
        rating: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        registrationStep: "completed",
        hasProfilePicture: true,
      });

      console.log("Firestore document saved");

      // 4. Show success and redirect
      alert(
        "Registration Successful!\n\n" +
          "Your application has been submitted. Please wait for coordinator approval.\n\n" +
          "Your profile picture has been uploaded successfully.",
      );

      console.log("🎉 Registration complete! Redirecting to login...");

      // 5. Redirect to login
      navigate("/login");
    } catch (err: any) {
      console.error("Registration error:", err);

      if (err.code === "auth/email-already-in-use") {
        try {
          const methods = await fetchSignInMethodsForEmail(
            auth,
            formData.email,
          );
          console.log("Existing sign-in methods for email:", methods);
          if (methods.length === 0) {
            setError(
              "This email is already registered. Please login or use a different email.",
            );
          } else {
            setError(
              `This email is already registered. Sign-in methods: ${methods.join(", ")}. If you used a password, try signing in or reset your password from the login screen.`,
            );
          }
        } catch (fetchErr) {
          console.error("Error fetching sign-in methods:", fetchErr);
          setError(
            "This email is already registered. Please login or use a different email.",
          );
        }
      } else if (err.code === "auth/weak-password") {
        setError(
          "Password is too weak. Use at least 8 characters with letters and numbers.",
        );
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address. Please enter a valid email.");
      } else if (err.code === "storage/unknown") {
        setError("Storage error. Please check if Firebase Storage is enabled.");
      } else if (err.code === "storage/unauthorized") {
        setError(
          "Storage permission denied. Please check Firebase Storage rules.",
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

  const vehicleTypes = [
    "Motorcycle",
    "Car",
    "Van",
    "Pickup Truck",
    "Bicycle",
    "Scooter",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h1 className="text-3xl font-bold text-blue-800">
                PTROS Carrier
              </h1>
            </div>
          </Link>
          <h2 className="text-2xl font-semibold text-gray-700">
            Join Our Delivery Network
          </h2>
          <p className="text-gray-600 mt-2">
            Register as a carrier and start earning today
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <div
              className={`text-sm font-medium ${
                step >= 1 ? "text-blue-600" : "text-gray-400"
              }`}
            >
              1. Account
            </div>
            <div
              className={`text-sm font-medium ${
                step >= 2 ? "text-blue-600" : "text-gray-400"
              }`}
            >
              2. Contact
            </div>
            <div
              className={`text-sm font-medium ${
                step >= 3 ? "text-blue-600" : "text-gray-400"
              }`}
            >
              3. Vehicle
            </div>
            <div
              className={`text-sm font-medium ${
                step >= 4 ? "text-blue-600" : "text-gray-400"
              }`}
            >
              4. Review
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${(step - 1) * 33.33}%` }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 m-6">
              <p className="text-red-700">{error}</p>
              {error.includes("already registered") && (
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm block mt-1"
                >
                  Click here to login instead
                </Link>
              )}
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
                      Profile Picture <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {isProcessingImage ? (
                          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300">
                            <div className="text-center">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                              <span className="text-xs text-gray-500 mt-2 block">
                                Processing...
                              </span>
                            </div>
                          </div>
                        ) : profilePreview ? (
                          <div className="relative">
                            <img
                              src={profilePreview}
                              alt="Profile preview"
                              className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
                              style={{ objectFit: "cover" }}
                            />
                            <button
                              type="button"
                              onClick={handleRemovePicture}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                            >
                              ×
                            </button>
                          </div>
                        ) : (
                          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300">
                            <div className="text-center">
                              <span className="text-gray-500 block text-xs">
                                Upload photo
                              </span>
                              <span className="text-xs text-red-500 block mt-1">
                                Required
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <input
                          ref={fileInputRef}
                          type="file"
                          name="profilePicture"
                          onChange={handleChange}
                          accept="image/*"
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                          disabled={isProcessingImage}
                        />
                        <p className="mt-2 text-xs text-gray-500">
                          Clear front-facing photo. Max 5MB. Cropped to square.
                        </p>
                        {!formData.profilePicture && !isProcessingImage && (
                          <p className="text-red-500 font-medium mt-2 text-xs">
                            Please upload your profile picture to continue.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="At least 8 characters"
                        minLength={8}
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Minimum 8 characters with letters and numbers
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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    disabled={!formData.profilePicture || isProcessingImage}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessingImage ? (
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
                        Processing Image...
                      </span>
                    ) : (
                      "Next: Contact Details →"
                    )}
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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+266 5000 0000"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+266 5000 0000 (optional)"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Provide if different from phone number
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="House number, street, area"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      This is where you'll receive official correspondence
                    </p>
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
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Next: Vehicle Details →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Vehicle Information */}
            {step === 3 && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Vehicle Information
                </h3>
                <p className="text-gray-600 mb-6">
                  This information helps us assign appropriate deliveries
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Type
                    </label>
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select your vehicle type</option>
                      {vehicleTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        License Plate
                      </label>
                      <input
                        type="text"
                        name="licensePlate"
                        value={formData.licensePlate}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., A1234BC"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ID Number
                      </label>
                      <input
                        type="text"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="National ID or Passport"
                      />
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
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Next: Review & Submit →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Review & Terms */}
            {step === 4 && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Review & Submit
                </h3>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="font-semibold text-lg mb-4">
                    Your Information
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
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">{formData.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Vehicle Type</p>
                      <p className="font-medium">
                        {formData.vehicleType || "Not specified"}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-gray-500">Profile Picture</p>
                      <div className="flex items-center mt-2">
                        {profilePreview ? (
                          <>
                            <div className="relative">
                              <img
                                src={profilePreview}
                                alt="Profile preview"
                                className="w-20 h-20 rounded-full object-cover border-2 border-green-500"
                                style={{ objectFit: "cover" }}
                              />
                              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                                <i className="fa-solid fa-check" />
                              </div>
                            </div>
                            <div className="ml-3">
                              <span className="text-green-600 font-medium block">
                                <span className="inline-flex items-center gap-2">
                                  <i className="fa-solid fa-circle-check" />
                                  Uploaded and optimized
                                </span>
                              </span>
                              <span className="text-xs text-gray-500 block mt-1">
                                Cropped to square (200×200 pixels)
                              </span>
                            </div>
                          </>
                        ) : (
                          <span className="text-red-500 font-medium inline-flex items-center gap-2">
                            <i className="fa-solid fa-circle-xmark" />
                            No picture uploaded
                          </span>
                        )}
                      </div>
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
                      I agree to the PTROS Carrier Terms and Conditions. I
                      understand that my account requires coordinator approval
                      before I can start working. I confirm that the profile
                      picture I uploaded is a clear, recent photo of myself.
                    </label>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="fa-solid fa-circle-info text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-blue-800">
                        Profile Picture Requirement
                      </h4>
                      <div className="text-sm text-blue-700 mt-1">
                        <p>
                          Your profile picture is mandatory for identification
                          and security verification. Applications without a
                          clear profile picture will be rejected.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="fa-solid fa-triangle-exclamation text-yellow-600" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-yellow-800">
                        Important Notice
                      </h4>
                      <div className="text-sm text-yellow-700 mt-1">
                        <p>
                          Your registration will be reviewed by a coordinator.
                          Approval typically takes 1-2 business days.
                        </p>
                        <p className="mt-2 font-semibold">
                          Your profile picture will be used for:
                        </p>
                        <ul className="list-disc pl-4 mt-1 space-y-1">
                          <li>Identity verification by coordinators</li>
                          <li>Customer identification during deliveries</li>
                          <li>Security and safety purposes</li>
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
                    disabled={
                      loading ||
                      !formData.acceptTerms ||
                      !formData.profilePicture
                    }
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
                        Submitting...
                      </span>
                    ) : (
                      "Submit Registration"
                    )}
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
              className="text-blue-600 hover:text-blue-800 font-medium"
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
