// apps/coordinator/src/CreateDelivery.tsx
import AddressAutocomplete from "./AddressAutocomplete";
import { useState, useEffect } from "react";
import { db } from "@config";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useGeocoder } from "./hooks/useGeocoder";
import {
  writeTimestamp,
  getTimeServiceStatus,
} from "./services/timeService";

declare global {
  interface Window {
    google: any;
  }
}

interface Customer {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
}

interface Carrier {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  vehicleType?: string;
  status: string;
  isApproved: boolean;
}

interface Coordinates {
  lat: number;
  lng: number;
  address: string;
}

export default function CreateDelivery() {
  const navigate = useNavigate();
  const { geocodeAddress } = useGeocoder();

  // Form state
  const [formData, setFormData] = useState({
    // Customer & Package Info
    customerId: "",
    packageDescription: "",
    packageWeight: "",
    packageValue: "",
    packageDimensions: "",

    // Pickup Information
    pickupAddress: "",
    pickupCoordinates: null as Coordinates | null,
    pickupContactName: "",
    pickupContactPhone: "",
    pickupInstructions: "",
    pickupDate: new Date().toISOString().split("T")[0],
    pickupTime: "09:00",

    // Delivery Information
    deliveryAddress: "",
    deliveryCoordinates: null as Coordinates | null,
    deliveryContactName: "",
    deliveryContactPhone: "",
    deliveryInstructions: "",
    deliveryDate: new Date().toISOString().split("T")[0],
    deliveryTimeWindow: "09:00-17:00",

    // Assignment & Payment
    carrierId: "",
    priority: "standard",
    paymentMethod: "cash_on_delivery",
    paymentAmount: "",
    paymentStatus: "pending",

    // Special Instructions
    isFragile: false,
    requiresSignature: true,
    insuranceRequired: false,
    notes: "",
  });

  // Data for dropdowns
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [carriers, setCarriers] = useState<Carrier[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [geocoding, setGeocoding] = useState(false);

  // Load customers and carriers
  useEffect(() => {
    loadCustomersAndCarriers();
  }, []);

  const loadCustomersAndCarriers = async () => {
    try {
      // Load customers
      const customersQuery = query(
        collection(db, "users"),
        where("role", "==", "customer")
      );
      const customersSnapshot = await getDocs(customersQuery);
      const customersList: Customer[] = [];
      customersSnapshot.forEach((doc) => {
        const data = doc.data();
        customersList.push({
          id: doc.id,
          email: data.email,
          fullName: data.fullName,
          phone: data.phone,
          address: data.address,
          city: data.city,
        });
      });
      setCustomers(customersList);

      // Load approved carriers
      const carriersQuery = query(
        collection(db, "users"),
        where("role", "==", "carrier"),
        where("isApproved", "==", true),
        where("status", "==", "active")
      );
      const carriersSnapshot = await getDocs(carriersQuery);
      const carriersList: Carrier[] = [];
      carriersSnapshot.forEach((doc) => {
        const data = doc.data();
        carriersList.push({
          id: doc.id,
          email: data.email,
          fullName: data.fullName,
          phone: data.phone,
          vehicleType: data.vehicleType,
          status: data.status,
          isApproved: data.isApproved,
        });
      });
      setCarriers(carriersList);
    } catch (error) {
      console.error("Error loading data:", error);
      toast.error("Failed to load customers and carriers");
    } finally {
      setLoading(false);
    }
  };

  // Geocode an address to get coordinates
  const handleGeocodeAddress = async (address: string): Promise<Coordinates | null> => {
    const result = await geocodeAddress(address, "ls");
    if (result) {
      return {
        lat: result.lat,
        lng: result.lng,
        address: result.address,
      };
    }
    return null;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "number") {
      setFormData((prev) => ({
        ...prev,
        [name]: value === "" ? "" : Number(value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle pickup address change with geocoding
  const handlePickupAddressChange = async (address: string) => {
    setFormData((prev) => ({ 
      ...prev, 
      pickupAddress: address,
      pickupCoordinates: null
    }));

    if (address.length > 10) {
      const coords = await geocodeAddress(address);
      if (coords) {
        setFormData((prev) => ({ 
          ...prev, 
          pickupCoordinates: coords 
        }));
      }
    }
  };

  // Handle delivery address change with geocoding
  const handleDeliveryAddressChange = async (address: string) => {
    setFormData((prev) => ({ 
      ...prev, 
      deliveryAddress: address,
      deliveryCoordinates: null
    }));

    if (address.length > 10) {
      const coords = await geocodeAddress(address);
      if (coords) {
        setFormData((prev) => ({ 
          ...prev, 
          deliveryCoordinates: coords 
        }));
      }
    }
  };

  const handleCustomerSelect = (customerId: string) => {
    const customer = customers.find((c) => c.id === customerId);
    if (customer) {
      setFormData((prev) => ({
        ...prev,
        customerId,
        pickupContactName: customer.fullName,
        pickupContactPhone: customer.phone,
        pickupAddress: customer.address,
      }));
    }
  };

  const generateTrackingCode = () => {
    const prefix = "PTR";
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `${prefix}-${randomNum}`;
  };

  const validateForm = () => {
    if (!formData.customerId) {
      toast.error("Please select a customer");
      return false;
    }
    if (!formData.packageDescription) {
      toast.error("Package description is required");
      return false;
    }
    if (!formData.pickupAddress || !formData.deliveryAddress) {
      toast.error("Pickup and delivery addresses are required");
      return false;
    }
    if (!formData.deliveryContactName || !formData.deliveryContactPhone) {
      toast.error("Delivery contact information is required");
      return false;
    }
    return true;
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const getEstimatedDeliveryTime = (distance: number): string => {
    if (distance < 10) return "Same day";
    if (distance < 50) return "1 day";
    return "1-2 days";
  };

  const calculateEarnings = (packageValue: number, distance: number): number => {
    const baseValue = packageValue || 100;
    const distanceFee = distance * 10; // M10 per km
    const valueFee = Math.round(baseValue * 0.15);
    return Math.max(50, valueFee + distanceFee);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true);
    setGeocoding(true);

    try {
      // Geocode addresses if not already done
      let pickupCoords = formData.pickupCoordinates;
      let deliveryCoords = formData.deliveryCoordinates;

      if (!pickupCoords) {
        pickupCoords = await handleGeocodeAddress(formData.pickupAddress);
      }

      if (!deliveryCoords) {
        deliveryCoords = await handleGeocodeAddress(formData.deliveryAddress);
      }

      setGeocoding(false);

      if (!pickupCoords || !deliveryCoords) {
        toast.error("Unable to get coordinates for addresses. Delivery will be created without location data.", {
          duration: 5000,
        });
      }

      const trackingCode = generateTrackingCode();

      // Calculate distance and estimates
      let distance = 0;
      let estimatedDeliveryTime = "1-2 days";
      let estimatedEarnings = 0;

      if (pickupCoords && deliveryCoords) {
        distance = calculateDistance(
          pickupCoords.lat,
          pickupCoords.lng,
          deliveryCoords.lat,
          deliveryCoords.lng
        );
        estimatedDeliveryTime = getEstimatedDeliveryTime(distance);
        estimatedEarnings = calculateEarnings(
          formData.packageValue ? Number(formData.packageValue) : 0,
          distance
        );
      }

      // Get selected customer
      const selectedCustomer = customers.find(c => c.id === formData.customerId);

      // Get selected carrier if assigned
      const selectedCarrier = formData.carrierId ? 
        carriers.find(c => c.id === formData.carrierId) : null;

      // Get server timestamp from Realtime DB with Firestore fallback
      const createdTimestamp = await writeTimestamp(
        `deliveries/${trackingCode}/created`
      );
      const timeServiceStatus = getTimeServiceStatus();

      // Prepare delivery data
      const deliveryData = {
        // Basic Info
        trackingCode,
        status: formData.carrierId ? "assigned" : "pending",
        priority: formData.priority,

        // Customer Info
        customerId: formData.customerId,
        customerEmail: selectedCustomer?.email || "",
        customerName: selectedCustomer?.fullName || "",
        customerPhone: selectedCustomer?.phone || "",

        // Package Details
        packageDescription: formData.packageDescription,
        packageWeight: formData.packageWeight ? Number(formData.packageWeight) : null,
        packageValue: formData.packageValue ? Number(formData.packageValue) : null,
        packageDimensions: formData.packageDimensions,

        // Pickup Details
        pickupAddress: formData.pickupAddress,
        pickupLocation: pickupCoords ? {
          lat: pickupCoords.lat,
          lng: pickupCoords.lng,
          address: pickupCoords.address,
          timestamp: createdTimestamp
        } : null,
        pickupContactName: formData.pickupContactName,
        pickupContactPhone: formData.pickupContactPhone,
        pickupInstructions: formData.pickupInstructions,
        pickupDateTime: Timestamp.fromDate(
          new Date(`${formData.pickupDate}T${formData.pickupTime}`)
        ),

        // Delivery Details
        deliveryAddress: formData.deliveryAddress,
        deliveryLocation: deliveryCoords ? {
          lat: deliveryCoords.lat,
          lng: deliveryCoords.lng,
          address: deliveryCoords.address,
          timestamp: createdTimestamp
        } : null,
        deliveryContactName: formData.deliveryContactName,
        deliveryContactPhone: formData.deliveryContactPhone,
        deliveryInstructions: formData.deliveryInstructions,
        deliveryDate: Timestamp.fromDate(new Date(formData.deliveryDate)),
        deliveryTimeWindow: formData.deliveryTimeWindow,

        // Route Information
        distance: distance > 0 ? Math.round(distance * 100) / 100 : null,
        estimatedDeliveryTime,
        estimatedEarnings,

        // Carrier Assignment
        carrierId: formData.carrierId || null,
        carrierEmail: selectedCarrier?.email || null,
        carrierName: selectedCarrier?.fullName || null,
        assignedAt: formData.carrierId ? createdTimestamp : null,

        // Payment Info
        paymentMethod: formData.paymentMethod,
        paymentAmount: formData.paymentAmount ? 
          Number(formData.paymentAmount) : estimatedEarnings,
        paymentStatus: formData.paymentStatus,

        // Special Requirements
        isFragile: formData.isFragile,
        requiresSignature: formData.requiresSignature,
        insuranceRequired: formData.insuranceRequired,
        notes: formData.notes,

        // System Fields
        createdAt: createdTimestamp,
        updatedAt: createdTimestamp,
        createdBy: "coordinator",
        timeSource: timeServiceStatus.primarySource,

        // Proof of Delivery
        proofOfDelivery: {
          otp: null,
          verified: false,
          verifiedAt: null,
          photoUrl: null,
          signatureUrl: null,
        },

        // 🚨 CRITICAL: Current Location starts at PICKUP location
        currentLocation: pickupCoords ? {
          lat: pickupCoords.lat,
          lng: pickupCoords.lng,
          timestamp: createdTimestamp,
          address: formData.pickupAddress,
          locationType: "pickup_point",
          status: "waiting_for_pickup"
        } : null,

        // Location History (for tracking route)
        locationHistory: pickupCoords ? [{
          lat: pickupCoords.lat,
          lng: pickupCoords.lng,
          timestamp: createdTimestamp,
          status: "created_at_pickup",
          address: formData.pickupAddress
        }] : [],

        // Milestones
        milestones: {
          created: createdTimestamp,
          assigned: formData.carrierId ? createdTimestamp : null,
          pickedUp: null,
          inTransit: null,
          outForDelivery: null,
          delivered: null
        }
      };

      // Save to Firestore
      const docRef = await addDoc(collection(db, "deliveries"), deliveryData);

      // Show success message with details
      const successMessage = (
        <div>
          <p className="font-bold">✅ Delivery Created Successfully!</p>
          <div className="mt-2 space-y-1">
            <p className="text-sm">
              <span className="font-semibold">Tracking Code:</span> {trackingCode}
            </p>
            {distance > 0 && (
              <p className="text-sm">
                <span className="font-semibold">Distance:</span> {distance.toFixed(1)} km
              </p>
            )}
            {pickupCoords && deliveryCoords && (
              <p className="text-sm text-green-600">
                ✓ Location tracking initialized at pickup point
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Package location is set to pickup address until carrier picks it up.
            </p>
          </div>
        </div>
      );

      toast.success(successMessage, { duration: 6000 });

      // Reset form
      setFormData({
        customerId: "",
        packageDescription: "",
        packageWeight: "",
        packageValue: "",
        packageDimensions: "",
        pickupAddress: "",
        pickupCoordinates: null,
        pickupContactName: "",
        pickupContactPhone: "",
        pickupInstructions: "",
        pickupDate: new Date().toISOString().split("T")[0],
        pickupTime: "09:00",
        deliveryAddress: "",
        deliveryCoordinates: null,
        deliveryContactName: "",
        deliveryContactPhone: "",
        deliveryInstructions: "",
        deliveryDate: new Date().toISOString().split("T")[0],
        deliveryTimeWindow: "09:00-17:00",
        carrierId: "",
        priority: "standard",
        paymentMethod: "cash_on_delivery",
        paymentAmount: "",
        paymentStatus: "pending",
        isFragile: false,
        requiresSignature: true,
        insuranceRequired: false,
        notes: "",
      });

      // Navigate to delivery details
      setTimeout(() => {
        navigate(`/deliveries/${docRef.id}`);
      }, 2000);

    } catch (error: any) {
      console.error("Error creating delivery:", error);
      toast.error(`Failed to create delivery: ${error.message}`);
    } finally {
      setSubmitting(false);
      setGeocoding(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="ml-4 text-gray-600">Loading data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Create New Delivery
            </h1>
            <p className="text-gray-600 mt-2">
              Fill in delivery details. Package location will start at pickup address.
            </p>
          </div>
          <button
            onClick={() => navigate("/deliveries")}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            ← Back to Deliveries
          </button>
        </div>
      </div>

      {/* Location Status Banner */}
      <div className="mb-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm">📍</span>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800">Location Tracking</h3>
            <p className="text-sm text-blue-700">
              Package location will be initialized at the pickup address and updated as the carrier moves.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Customer & Package */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6 pb-4 border-b">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Customer & Package Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Customer Selection */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Customer *
              </label>
              <select
                name="customerId"
                value={formData.customerId}
                onChange={(e) => handleCustomerSelect(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              >
                <option value="">Select a customer...</option>
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.fullName} • {customer.phone} • {customer.city}
                  </option>
                ))}
              </select>
              {customers.length === 0 && (
                <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-700">
                    No customers found. Customers must register through the customer portal first.
                  </p>
                </div>
              )}
            </div>

            {/* Package Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Package Description *
              </label>
              <textarea
                name="packageDescription"
                value={formData.packageDescription}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Describe what's being delivered (e.g., Documents, Electronics, Food, etc.)"
                required
              />
            </div>

            {/* Package Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight (kg)
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="packageWeight"
                  value={formData.packageWeight}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="e.g., 2.5"
                />
                <span className="absolute right-3 top-3 text-gray-500">kg</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dimensions (L×W×H cm)
              </label>
              <input
                type="text"
                name="packageDimensions"
                value={formData.packageDimensions}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="e.g., 30×20×15"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Declared Value (M)
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="packageValue"
                  value={formData.packageValue}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="e.g., 500"
                />
                <span className="absolute right-3 top-3 text-gray-500">M</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority Level
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                <option value="standard">Standard (1-2 days)</option>
                <option value="express">Express (Same day)</option>
                <option value="urgent">Urgent (Within hours)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Pickup Details */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6 pb-4 border-b">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Pickup Details (Start Location)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <AddressAutocomplete
                label="Pickup Address *"
                value={formData.pickupAddress}
                onChange={handlePickupAddressChange}
                placeholder="Start typing address (e.g., Maseru Mall, Kingsway, Maseru)..."
                required
              />
              {formData.pickupCoordinates && (
                <div className="mt-2 flex items-center text-sm text-green-600">
                  <span className="mr-2">✓</span>
                  <span>
                    Coordinates ready: {formData.pickupCoordinates.lat.toFixed(6)},{" "}
                    {formData.pickupCoordinates.lng.toFixed(6)}
                  </span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Name *
              </label>
              <input
                type="text"
                name="pickupContactName"
                value={formData.pickupContactName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Phone *
              </label>
              <input
                type="tel"
                name="pickupContactPhone"
                value={formData.pickupContactPhone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Date
              </label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Time
              </label>
              <input
                type="time"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Instructions
              </label>
              <textarea
                name="pickupInstructions"
                value={formData.pickupInstructions}
                onChange={handleChange}
                rows={2}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Special instructions for pickup (e.g., call before arrival, security gate code, etc.)"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Delivery Details */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6 pb-4 border-b">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Delivery Details (Destination)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <AddressAutocomplete
                label="Delivery Address *"
                value={formData.deliveryAddress}
                onChange={handleDeliveryAddressChange}
                placeholder="Start typing address (e.g., Teyateyaneng Main Road, Teyateyaneng)..."
                required
              />
              {formData.deliveryCoordinates && (
                <div className="mt-2 flex items-center text-sm text-green-600">
                  <span className="mr-2">✓</span>
                  <span>
                    Coordinates ready: {formData.deliveryCoordinates.lat.toFixed(6)},{" "}
                    {formData.deliveryCoordinates.lng.toFixed(6)}
                  </span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipient Name *
              </label>
              <input
                type="text"
                name="deliveryContactName"
                value={formData.deliveryContactName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipient Phone *
              </label>
              <input
                type="tel"
                name="deliveryContactPhone"
                value={formData.deliveryContactPhone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Date
              </label>
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Window
              </label>
              <select
                name="deliveryTimeWindow"
                value={formData.deliveryTimeWindow}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                <option value="09:00-17:00">9:00 AM - 5:00 PM</option>
                <option value="08:00-16:00">8:00 AM - 4:00 PM</option>
                <option value="10:00-18:00">10:00 AM - 6:00 PM</option>
                <option value="anytime">Anytime</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Instructions
              </label>
              <textarea
                name="deliveryInstructions"
                value={formData.deliveryInstructions}
                onChange={handleChange}
                rows={2}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Special instructions for delivery (e.g., leave at reception, require ID check, etc.)"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Assignment & Requirements */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6 pb-4 border-b">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
              4
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Assignment & Requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Carrier Assignment */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Carrier Assignment
              </h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assign Carrier (Optional)
                </label>
                <select
                  name="carrierId"
                  value={formData.carrierId}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  <option value="">Auto-assign later (recommended)</option>
                  {carriers.map((carrier) => (
                    <option key={carrier.id} value={carrier.id}>
                      {carrier.fullName} • {carrier.vehicleType || "Vehicle"} • {carrier.phone}
                    </option>
                  ))}
                </select>
                {carriers.length === 0 && (
                  <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-700">
                      No active carriers available. Approve carriers in the Carrier Management section.
                    </p>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  <option value="cash_on_delivery">Cash on Delivery</option>
                  <option value="card_prepaid">Card Prepaid</option>
                  <option value="mobile_money">Mobile Money</option>
                  <option value="bank_transfer">Bank Transfer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Amount (M)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="paymentAmount"
                    value={formData.paymentAmount}
                    onChange={handleChange}
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter amount or leave blank for auto-calculation"
                  />
                  <span className="absolute right-3 top-3 text-gray-500">M</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Leave blank to auto-calculate based on distance and package value
                </p>
              </div>
            </div>

            {/* Special Requirements */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Special Requirements
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="isFragile"
                    name="isFragile"
                    checked={formData.isFragile}
                    onChange={handleChange}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="isFragile" className="ml-3 text-gray-700">
                    <span className="font-medium">Fragile items</span>
                    <span className="block text-sm text-gray-500">Handle with care</span>
                  </label>
                </div>

                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="requiresSignature"
                    name="requiresSignature"
                    checked={formData.requiresSignature}
                    onChange={handleChange}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="requiresSignature" className="ml-3 text-gray-700">
                    <span className="font-medium">Signature required</span>
                    <span className="block text-sm text-gray-500">Upon delivery</span>
                  </label>
                </div>

                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="insuranceRequired"
                    name="insuranceRequired"
                    checked={formData.insuranceRequired}
                    onChange={handleChange}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="insuranceRequired" className="ml-3 text-gray-700">
                    <span className="font-medium">Insurance required</span>
                    <span className="block text-sm text-gray-500">For high-value items</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Any additional information or special requests..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Location Summary */}
        {(formData.pickupCoordinates || formData.deliveryCoordinates) && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <span className="mr-2">✅</span>
              Location Tracking Ready
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.pickupCoordinates && (
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="font-medium text-green-700 mb-1">📍 Pickup Location</div>
                  <div className="text-sm text-gray-600">
                    <div className="truncate">{formData.pickupAddress}</div>
                    <div className="text-xs font-mono mt-1">
                      {formData.pickupCoordinates.lat.toFixed(6)}, {formData.pickupCoordinates.lng.toFixed(6)}
                    </div>
                  </div>
                </div>
              )}
              {formData.deliveryCoordinates && (
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="font-medium text-green-700 mb-1">🎯 Delivery Location</div>
                  <div className="text-sm text-gray-600">
                    <div className="truncate">{formData.deliveryAddress}</div>
                    <div className="text-xs font-mono mt-1">
                      {formData.deliveryCoordinates.lat.toFixed(6)}, {formData.deliveryCoordinates.lng.toFixed(6)}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <p className="text-sm text-green-700 mt-4">
              Package location will start at pickup coordinates and update as the carrier moves.
            </p>
          </div>
        )}

        {/* Form Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm text-gray-600">
                {customers.length} customers available • {carriers.length} active carriers
              </p>
              {formData.pickupCoordinates && formData.deliveryCoordinates && (
                <p className="text-sm text-green-600 mt-1">
                  ✓ Ready for location-based tracking
                </p>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => navigate("/deliveries")}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting || customers.length === 0}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center shadow-md"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    {geocoding ? 'Getting coordinates...' : 'Creating Delivery...'}
                  </>
                ) : (
                  <>
                    <span className="mr-2">📦</span>
                    Create Delivery
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Help Information */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="text-blue-600 font-medium mb-2">📍 Location Tracking</div>
          <p className="text-sm text-blue-700">
            Package location starts at pickup address and updates automatically as the carrier moves.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="text-green-600 font-medium mb-2">💰 Pricing</div>
          <p className="text-sm text-green-700">
            Distance-based calculation: M10 per km + 15% of package value (minimum M50).
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <div className="text-purple-600 font-medium mb-2">🚚 Carrier Assignment</div>
          <p className="text-sm text-purple-700">
            Auto-assigns nearest available carrier if not manually assigned. OTP verification included.
          </p>
        </div>
      </div>
    </div>
  );
}
