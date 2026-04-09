// apps/coordinator/src/CreateDelivery.tsx
import AddressAutocomplete from "./AddressAutocomplete";
import { useState, useEffect, useRef } from "react";
import { db, auth } from "@config";
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
import { writeTimestamp, getTimeServiceStatus } from "./services/timeService";
import {
  loadKnownLocations,
  findNearbyDuplicate,
  calculateDistanceKm,
  saveCustomLocation,
  type KnownLocation,
} from "./services/locationsService";
import { getCarrierRecommendationsForDraft } from "./services/routeIntelligenceService";
import {
  FaBox,
  FaCircleCheck,
  FaLocationDot,
  FaMoneyBill,
  FaTruck,
  FaBullseye,
} from "react-icons/fa6";

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
  currentLocation?: {
    lat: number;
    lng: number;
  };
  routeLearningStats?: {
    shortcutsReported?: number;
  };
}

interface Coordinates {
  lat: number;
  lng: number;
  address: string;
}

interface SelectedLocation {
  name: string;
  lat: number;
  lng: number;
}

type CustomerMode = "existing" | "guest";

// KnownLocation interface imported from locationsService

const getLocationOfficialLevel = (usageCount: number) => {
  if (usageCount >= 5) return "core_official";
  if (usageCount >= 2) return "official";
  return "candidate";
};

const getVehicleAverageSpeedKmh = (vehicleType?: string) => {
  const value = (vehicleType || "").toLowerCase();
  if (value.includes("bicycle")) return 15;
  if (
    value.includes("motor") ||
    value.includes("scooter") ||
    value.includes("bike")
  ) {
    return 35;
  }
  if (value.includes("pickup")) return 45;
  if (value.includes("van")) return 42;
  if (value.includes("truck")) return 38;
  if (value.includes("car") || value.includes("sedan")) return 50;
  return 40;
};

interface CarrierRecommendation extends Carrier {
  recommendationScore: number;
  distanceToPickupKm: number;
  estimatedDetourKm: number;
  estimatedDeliveryHours?: number | null;
  estimatedPrice?: number | null;
  activeDeliveries: number;
  recommendationReason: string;
  autoAssignable: boolean;
  shortcutContributionScore: number;
}

type CarrierSelectionMode = "auto" | "manual";

const LESOTHO_DEFAULT_CENTER = { lat: -29.3142, lng: 27.4833 };

function AddressMapPreview({
  lat,
  lng,
  label,
  clickable = false,
  onPick,
  fullHeight = false,
}: {
  lat: number;
  lng: number;
  label: string;
  clickable?: boolean;
  onPick?: (lat: number, lng: number) => void;
  fullHeight?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const clickListenerRef = useRef<any>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!mapRef.current || !window.google?.maps) return;
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 15,
        mapId: import.meta.env.VITE_GOOGLE_MAPS_MAP_ID || "DEMO_MAP_ID",
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
      });
    }

    if (!markerRef.current) {
      if (window.google?.maps?.marker?.AdvancedMarkerElement) {
        markerRef.current = new window.google.maps.marker.AdvancedMarkerElement(
          {
            position: { lat, lng },
            map: mapInstanceRef.current,
            title: label,
          },
        );
        markerRef.current._isAdvanced = true;
      } else {
        markerRef.current = new window.google.maps.Marker({
          position: { lat, lng },
          map: mapInstanceRef.current,
          title: label,
        });
        markerRef.current._isAdvanced = false;
      }
    }

    if (markerRef.current._isAdvanced) {
      markerRef.current.position = { lat, lng };
      markerRef.current.title = label;
    } else {
      markerRef.current.setPosition({ lat, lng });
      markerRef.current.setTitle(label);
    }
    mapInstanceRef.current.setCenter({ lat, lng });

    if (clickListenerRef.current) {
      window.google.maps.event.removeListener(clickListenerRef.current);
      clickListenerRef.current = null;
    }

    if (clickable && onPick) {
      clickListenerRef.current = mapInstanceRef.current.addListener(
        "click",
        (e: any) => {
          const nextLat = e?.latLng?.lat?.();
          const nextLng = e?.latLng?.lng?.();
          if (typeof nextLat === "number" && typeof nextLng === "number") {
            if (markerRef.current?._isAdvanced) {
              markerRef.current.position = { lat: nextLat, lng: nextLng };
            } else {
              markerRef.current?.setPosition({ lat: nextLat, lng: nextLng });
            }
            onPick(nextLat, nextLng);
          }
        },
      );
    }

    return () => {
      if (clickListenerRef.current && window.google?.maps?.event) {
        window.google.maps.event.removeListener(clickListenerRef.current);
        clickListenerRef.current = null;
      }
    };
  }, [lat, lng, label, clickable, onPick]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const expanded = document.fullscreenElement === containerRef.current;
      setIsExpanded(expanded);
      if (mapInstanceRef.current && window.google?.maps?.event) {
        window.google.maps.event.trigger(mapInstanceRef.current, "resize");
        mapInstanceRef.current.setCenter({ lat, lng });
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [lat, lng]);

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.style.cursor = clickable ? "crosshair" : "default";
  }, [clickable]);

  const toggleExpanded = async () => {
    if (fullHeight || !containerRef.current) return;

    try {
      if (document.fullscreenElement === containerRef.current) {
        await document.exitFullscreen();
      } else {
        await containerRef.current.requestFullscreen();
      }
    } catch (error) {
      console.error("Failed to toggle map fullscreen:", error);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${fullHeight ? "h-full" : "mt-3"} border border-green-200 rounded-lg overflow-hidden shadow-sm bg-white`}
    >
      <div className="bg-green-50 px-3 py-1.5 text-xs text-green-700 font-medium flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <span>
            <FaLocationDot />
          </span>
          <span className="truncate">
            {clickable
              ? "Click map to pin exact location:"
              : "Confirm location:"}{" "}
            {label}
          </span>
        </div>
        {!fullHeight && (
          <button
            type="button"
            onClick={toggleExpanded}
            className="shrink-0 px-2 py-1 rounded border border-green-300 text-green-700 hover:bg-green-100"
            title={isExpanded ? "Minimize map" : "Maximize map"}
          >
            {isExpanded ? "Minimize" : "Maximize"}
          </button>
        )}
      </div>
      <div
        ref={mapRef}
        style={{
          height: fullHeight
            ? "calc(100% - 34px)"
            : isExpanded
              ? "calc(100vh - 34px)"
              : "200px",
        }}
      />
    </div>
  );
}

function FullscreenMapPicker({
  title,
  lat,
  lng,
  label,
  loading = false,
  onClose,
  onDone,
}: {
  title: string;
  lat: number;
  lng: number;
  label: string;
  loading?: boolean;
  onClose: () => void;
  onDone: (lat: number, lng: number) => void;
}) {
  const [draftPin, setDraftPin] = useState({ lat, lng });

  useEffect(() => {
    setDraftPin({ lat, lng });
  }, [lat, lng]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !loading) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [loading, onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">
            Click anywhere on the map to adjust your pin. Use map type controls
            (Map/Satellite) and press Done when you are happy.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onDone(draftPin.lat, draftPin.lng)}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            Done
          </button>
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className="relative h-full rounded-2xl overflow-hidden bg-white shadow-2xl">
          <AddressMapPreview
            lat={draftPin.lat}
            lng={draftPin.lng}
            label={label}
            clickable
            onPick={(nextLat, nextLng) =>
              setDraftPin({ lat: nextLat, lng: nextLng })
            }
            fullHeight
          />

          <div className="absolute left-4 bottom-4 rounded-lg bg-white/95 border border-gray-200 px-3 py-2 text-xs text-gray-700 shadow">
            Pin: {draftPin.lat.toFixed(6)}, {draftPin.lng.toFixed(6)}
          </div>

          {loading && (
            <div className="absolute inset-0 bg-white/75 flex items-center justify-center">
              <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-lg border border-blue-100">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                <span className="text-sm font-medium text-blue-700">
                  Confirming pinned location...
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LocationNamingModal({
  isOpen,
  type,
  lat,
  lng,
  value,
  onChange,
  onCancel,
  onSave,
  saving,
}: {
  isOpen: boolean;
  type: "pickup" | "delivery";
  lat: number;
  lng: number;
  value: string;
  onChange: (value: string) => void;
  onCancel: () => void;
  onSave: () => void;
  saving: boolean;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-gray-200">
        <div className="px-5 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Name this {type} location
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            This point has no clear name. Add a meaningful place name so
            tracking and routing stay accurate.
          </p>
        </div>

        <div className="px-5 py-4 space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Location name
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={
              type === "pickup"
                ? "e.g., Maseru Mall Main Gate"
                : "e.g., NUL Roma Campus Reception"
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <p className="text-xs text-gray-500">
            Coordinates: {lat.toFixed(6)}, {lng.toFixed(6)}
          </p>
        </div>

        <div className="px-5 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={saving}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSave}
            disabled={saving}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save & Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CreateDelivery() {
  const navigate = useNavigate();
  const { geocodeAddress, reverseGeocode } = useGeocoder();

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
  const [customerMode, setCustomerMode] = useState<CustomerMode>("existing");
  const [guestCustomer, setGuestCustomer] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
  });
  const [pickupLocation, setPickupLocation] = useState<SelectedLocation | null>(
    null,
  );
  const [deliveryLocation, setDeliveryLocation] =
    useState<SelectedLocation | null>(null);
  const [pickupConfirmed, setPickupConfirmed] = useState(false);
  const [deliveryConfirmed, setDeliveryConfirmed] = useState(false);
  const isLocationReady = pickupConfirmed && deliveryConfirmed;
  const [knownLocations, setKnownLocations] = useState<KnownLocation[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [carriers, setCarriers] = useState<Carrier[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [geocoding, setGeocoding] = useState(false);
  const [showPickupManualMap, setShowPickupManualMap] = useState(false);
  const [showDeliveryManualMap, setShowDeliveryManualMap] = useState(false);
  const [resolvingPickupPin, setResolvingPickupPin] = useState(false);
  const [resolvingDeliveryPin, setResolvingDeliveryPin] = useState(false);
  const [pendingNamingLocation, setPendingNamingLocation] = useState<{
    type: "pickup" | "delivery";
    lat: number;
    lng: number;
    suggestedName: string;
  } | null>(null);
  const [manualLocationName, setManualLocationName] = useState("");
  const [savingManualLocationName, setSavingManualLocationName] =
    useState(false);
  const geocodePickupTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const geocodeDeliveryTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [recommendationLoading, setRecommendationLoading] = useState(false);
  const [recommendedCarriers, setRecommendedCarriers] = useState<
    CarrierRecommendation[]
  >([]);
  const [selectedCarrierId, setSelectedCarrierId] = useState("");
  const [carrierSelectionMode, setCarrierSelectionMode] =
    useState<CarrierSelectionMode>("auto");

  const formatPinnedAddress = (lat: number, lng: number) =>
    `Pinned location (${lat.toFixed(6)}, ${lng.toFixed(6)})`;

  // Load customers and carriers
  useEffect(() => {
    loadCustomersAndCarriers();
  }, []);

  const loadCustomersAndCarriers = async () => {
    try {
      // Load customers
      const customersQuery = query(
        collection(db, "users"),
        where("role", "==", "customer"),
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
          currentLocation: data.currentLocation
            ? {
                lat: data.currentLocation.lat,
                lng: data.currentLocation.lng,
              }
            : undefined,
          routeLearningStats: data.routeLearningStats || {
            shortcutsReported: 0,
          },
        });
      });
      setCarriers(carriersList);

      // Load custom known locations from knownLocations collection
      const customLocations = await loadKnownLocations();
      setKnownLocations(customLocations);
    } catch (error) {
      console.error("Error loading data:", error);
      toast.error("Failed to load customers and carriers");
    } finally {
      setLoading(false);
    }
  };

  // Geocode an address to get coordinates
  const handleGeocodeAddress = async (
    address: string,
  ): Promise<Coordinates | null> => {
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
    >,
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

  // Handle pickup address text change — geocoding is debounced so dropdown
  // selection via onSelectWithCoords can cancel it before it fires.
  const handlePickupAddressChange = (address: string) => {
    setPickupConfirmed(false);
    setFormData((prev) => ({
      ...prev,
      pickupAddress: address,
      pickupCoordinates: null,
    }));

    if (!address.trim()) {
      setPickupLocation(null);
      if (geocodePickupTimeout.current)
        clearTimeout(geocodePickupTimeout.current);
      return;
    }

    // Debounce so a dropdown selection can cancel this before it overwrites coords
    if (geocodePickupTimeout.current)
      clearTimeout(geocodePickupTimeout.current);
    if (address.length > 10) {
      geocodePickupTimeout.current = setTimeout(async () => {
        const coords = await geocodeAddress(address);
        if (coords) {
          // Only set if no more-accurate coords arrived (e.g. from place selection)
          setPickupLocation((prev) =>
            prev ? prev : { name: address, lat: coords.lat, lng: coords.lng },
          );
          setFormData((prev) => ({
            ...prev,
            pickupCoordinates: prev.pickupCoordinates || coords,
          }));
        }
      }, 600);
    }
  };

  // Called when user selects a suggestion from the dropdown (has real coordinates)
  const handlePickupSelectWithCoords = (
    address: string,
    lat: number,
    lng: number,
  ) => {
    if (geocodePickupTimeout.current)
      clearTimeout(geocodePickupTimeout.current);
    setPickupConfirmed(false);
    setPickupLocation({ name: address, lat, lng });
    setFormData((prev) => ({
      ...prev,
      pickupAddress: address,
      pickupCoordinates: { lat, lng, address },
    }));
  };

  // Handle delivery address text change — debounced geocoding fallback
  const handleDeliveryAddressChange = (address: string) => {
    setDeliveryConfirmed(false);
    setFormData((prev) => ({
      ...prev,
      deliveryAddress: address,
      deliveryCoordinates: null,
    }));

    if (!address.trim()) {
      setDeliveryLocation(null);
      if (geocodeDeliveryTimeout.current)
        clearTimeout(geocodeDeliveryTimeout.current);
      return;
    }

    if (geocodeDeliveryTimeout.current)
      clearTimeout(geocodeDeliveryTimeout.current);
    if (address.length > 10) {
      geocodeDeliveryTimeout.current = setTimeout(async () => {
        const coords = await geocodeAddress(address);
        if (coords) {
          setDeliveryLocation((prev) =>
            prev ? prev : { name: address, lat: coords.lat, lng: coords.lng },
          );
          setFormData((prev) => ({
            ...prev,
            deliveryCoordinates: prev.deliveryCoordinates || coords,
          }));
        }
      }, 600);
    }
  };

  // Called when user selects a delivery suggestion from the dropdown
  const handleDeliverySelectWithCoords = (
    address: string,
    lat: number,
    lng: number,
  ) => {
    if (geocodeDeliveryTimeout.current)
      clearTimeout(geocodeDeliveryTimeout.current);
    setDeliveryConfirmed(false);
    setDeliveryLocation({ name: address, lat, lng });
    setFormData((prev) => ({
      ...prev,
      deliveryAddress: address,
      deliveryCoordinates: { lat, lng, address },
    }));
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

  const getKnownLocationMeta = (address: string) => {
    const normalized = address.trim().toLowerCase().replace(/\s+/g, " ");
    const known = knownLocations.find(
      (item) => item.normalizedName === normalized,
    );
    const usageCount = (known?.usageCount || 0) + 1;
    return {
      usageCount,
      officialLevel: getLocationOfficialLevel(usageCount),
      knownBefore: Boolean(known),
    };
  };

  const handlePickupMapPick = async (lat: number, lng: number) => {
    setResolvingPickupPin(true);
    const resolvedAddress = await reverseGeocode(lat, lng);
    const nextAddress = resolvedAddress || formatPinnedAddress(lat, lng);
    setPickupLocation({ name: nextAddress, lat, lng });
    setPickupConfirmed(false);
    setFormData((prev) => ({
      ...prev,
      pickupAddress: nextAddress,
      pickupCoordinates: {
        lat,
        lng,
        address: nextAddress,
      },
    }));
    setResolvingPickupPin(false);
  };

  const handleDeliveryMapPick = async (lat: number, lng: number) => {
    setResolvingDeliveryPin(true);
    const resolvedAddress = await reverseGeocode(lat, lng);
    const nextAddress = resolvedAddress || formatPinnedAddress(lat, lng);
    setDeliveryLocation({ name: nextAddress, lat, lng });
    setDeliveryConfirmed(false);
    setFormData((prev) => ({
      ...prev,
      deliveryAddress: nextAddress,
      deliveryCoordinates: {
        lat,
        lng,
        address: nextAddress,
      },
    }));
    setResolvingDeliveryPin(false);
  };

  const isUnclearLocationName = (name: string) => {
    const value = name.trim();
    if (!value) return true;

    const plusCodePattern =
      /\b[23456789CFGHJMPQRVWX]{4,8}\+[23456789CFGHJMPQRVWX]{2,3}\b/i;
    const coordLikePattern = /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/;
    const unclearKeywords = /unnamed|unknown|plus code|pinned location/i;

    return (
      plusCodePattern.test(value) ||
      coordLikePattern.test(value) ||
      unclearKeywords.test(value)
    );
  };

  const getKnownLocationMatch = (selected: SelectedLocation) => {
    const normalized = selected.name.trim().toLowerCase().replace(/\s+/g, " ");

    const exactMatch = knownLocations.find(
      (item) =>
        item.normalizedName === normalized &&
        Math.abs(item.lat - selected.lat) < 0.00001 &&
        Math.abs(item.lng - selected.lng) < 0.00001,
    );

    if (exactMatch) return exactMatch;

    const namedNearbyMatch = findNearbyDuplicate(
      selected.lat,
      selected.lng,
      selected.name,
      knownLocations,
    );
    if (namedNearbyMatch) return namedNearbyMatch;

    return (
      knownLocations.find(
        (location) =>
          calculateDistanceKm(
            selected.lat,
            selected.lng,
            location.lat,
            location.lng,
          ) <= 0.2,
      ) || null
    );
  };

  const resolveAndPersistLocationName = async (
    selected: SelectedLocation,
    explicitName?: string,
  ): Promise<SelectedLocation | null> => {
    const finalName = (explicitName ?? selected.name).trim();

    if (!finalName) {
      toast.error("Please enter a clear location name.");
      return null;
    }

    try {
      const coordinatorUid = auth.currentUser?.uid || "unknown";
      await saveCustomLocation(
        selected.lat,
        selected.lng,
        finalName,
        coordinatorUid,
        knownLocations,
      );

      const updated = await loadKnownLocations();
      setKnownLocations(updated);
    } catch (error) {
      console.error("Error saving confirmed location:", error);
      toast.error("Failed to save location name. Please try again.");
      return null;
    }

    return { ...selected, name: finalName };
  };

  const applyConfirmedLocation = (
    type: "pickup" | "delivery",
    resolved: SelectedLocation,
  ) => {
    const isPickup = type === "pickup";
    const meta = getKnownLocationMeta(resolved.name);

    if (isPickup) {
      setPickupLocation(resolved);
      setFormData((prev) => ({
        ...prev,
        pickupAddress: resolved.name,
        pickupCoordinates: {
          lat: resolved.lat,
          lng: resolved.lng,
          address: resolved.name,
        },
      }));
      setPickupConfirmed(true);
      toast.success(
        `Pickup confirmed (${meta.officialLevel.replace("_", " ")})`,
      );
      return;
    }

    setDeliveryLocation(resolved);
    setFormData((prev) => ({
      ...prev,
      deliveryAddress: resolved.name,
      deliveryCoordinates: {
        lat: resolved.lat,
        lng: resolved.lng,
        address: resolved.name,
      },
    }));
    setDeliveryConfirmed(true);
    toast.success(
      `Delivery confirmed (${meta.officialLevel.replace("_", " ")})`,
    );
  };

  const confirmLocation = async (type: "pickup" | "delivery") => {
    const isPickup = type === "pickup";
    const selected = isPickup ? pickupLocation : deliveryLocation;

    if (!selected) {
      toast.error(
        `Please select ${isPickup ? "pickup" : "delivery"} location first.`,
      );
      return;
    }

    const knownMatch = getKnownLocationMatch(selected);
    if (knownMatch) {
      const resolved = await resolveAndPersistLocationName(
        { ...selected, name: knownMatch.name },
        knownMatch.name,
      );
      if (!resolved) return;
      applyConfirmedLocation(type, resolved);
      return;
    }

    setManualLocationName(
      isUnclearLocationName(selected.name) ? "" : selected.name,
    );
    setPendingNamingLocation({
      type,
      lat: selected.lat,
      lng: selected.lng,
      suggestedName: selected.name,
    });
  };

  const handleSaveManualLocationName = async () => {
    if (!pendingNamingLocation) return;

    const typed = manualLocationName.trim();
    if (!typed) {
      toast.error("Please type a meaningful location name.");
      return;
    }

    setSavingManualLocationName(true);
    try {
      const resolved = await resolveAndPersistLocationName(
        {
          name: pendingNamingLocation.suggestedName,
          lat: pendingNamingLocation.lat,
          lng: pendingNamingLocation.lng,
        },
        typed,
      );

      if (!resolved) return;

      applyConfirmedLocation(pendingNamingLocation.type, resolved);

      setPendingNamingLocation(null);
      setManualLocationName("");
    } finally {
      setSavingManualLocationName(false);
    }
  };

  const generateTrackingCode = () => {
    const prefix = "PTR";
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `${prefix}-${randomNum}`;
  };

  const validateForm = () => {
    if (customerMode === "existing" && !formData.customerId) {
      toast.error("Please select an existing customer");
      return false;
    }

    if (customerMode === "guest") {
      if (!guestCustomer.fullName.trim() || !guestCustomer.phone.trim()) {
        toast.error("Guest customer name and phone are required");
        return false;
      }
    }

    if (!formData.packageDescription) {
      toast.error("Package description is required");
      return false;
    }
    const effectivePickupAddress =
      formData.pickupAddress?.trim() ||
      pickupLocation?.name?.trim() ||
      formData.pickupCoordinates?.address?.trim() ||
      "";
    const effectiveDeliveryAddress =
      formData.deliveryAddress?.trim() ||
      deliveryLocation?.name?.trim() ||
      formData.deliveryCoordinates?.address?.trim() ||
      "";

    if (!effectivePickupAddress || !effectiveDeliveryAddress) {
      toast.error("Pickup and delivery addresses are required");
      return false;
    }
    if (!formData.deliveryContactName || !formData.deliveryContactPhone) {
      toast.error("Delivery contact information is required");
      return false;
    }

    if (!pickupConfirmed || !deliveryConfirmed) {
      toast.error("Please confirm both pickup and delivery locations first");
      return false;
    }

    return true;
  };

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const getEstimatedDeliveryTime = (distance: number): string => {
    if (distance < 10) return "Same day";
    if (distance < 50) return "1 day";
    return "1-2 days";
  };

  const calculateEarnings = (
    packageValue: number,
    distance: number,
  ): number => {
    const baseValue = packageValue || 100;
    const distanceFee = distance * 10; // M10 per km
    const valueFee = Math.round(baseValue * 0.15);
    return Math.max(50, valueFee + distanceFee);
  };

  const generateCarrierRecommendations = async (
    pickup: Coordinates,
    packageWeight?: number,
  ) => {
    setRecommendationLoading(true);
    try {
      const weighted = await getCarrierRecommendationsForDraft({
        pickupLocation: pickup,
        deliveryLocation: formData.deliveryCoordinates,
        pickupAddress: formData.pickupAddress,
        deliveryAddress: formData.deliveryAddress,
        packageWeightKg: packageWeight,
        packageValue: formData.packageValue ? Number(formData.packageValue) : 0,
        packageDimensions: formData.packageDimensions,
        priority: formData.priority,
      });

      const routeDistanceKm = formData.deliveryCoordinates
        ? calculateDistance(
            pickup.lat,
            pickup.lng,
            formData.deliveryCoordinates.lat,
            formData.deliveryCoordinates.lng,
          )
        : 0;
      const packageValue = formData.packageValue
        ? Number(formData.packageValue)
        : 0;

      setRecommendedCarriers(
        weighted.map((carrier) => {
          const speedKmh = getVehicleAverageSpeedKmh(carrier.vehicleType);
          const fallbackEtaHours = Math.max(
            0.5,
            (carrier.distanceToPickupKm + routeDistanceKm) / speedKmh +
              carrier.activeDeliveries * 0.35,
          );
          const fallbackPrice = Math.round(
            calculateEarnings(packageValue, routeDistanceKm) *
              (1 + carrier.activeDeliveries * 0.05),
          );

          return {
            id: carrier.id,
            email: carriers.find((item) => item.id === carrier.id)?.email || "",
            fullName: carrier.fullName,
            phone: carriers.find((item) => item.id === carrier.id)?.phone || "",
            vehicleType: carrier.vehicleType,
            status: carrier.status,
            isApproved: true,
            currentLocation: carriers.find((item) => item.id === carrier.id)
              ?.currentLocation,
            routeLearningStats: {
              shortcutsReported: carrier.shortcutContributionScore,
            },
            recommendationScore: carrier.recommendationScore,
            distanceToPickupKm: carrier.distanceToPickupKm,
            estimatedDetourKm: carrier.estimatedDetourKm,
            estimatedDeliveryHours: Number(
              (
                (carrier as any).estimatedDeliveryHours ?? fallbackEtaHours
              ).toFixed(1),
            ),
            estimatedPrice: (carrier as any).estimatedPrice ?? fallbackPrice,
            activeDeliveries: carrier.activeDeliveries,
            recommendationReason: carrier.recommendationReason,
            autoAssignable: carrier.autoAssignable,
            shortcutContributionScore: carrier.shortcutContributionScore,
          };
        }),
      );
    } catch (error) {
      console.error("Error generating carrier recommendations:", error);
      setRecommendedCarriers([]);
    } finally {
      setRecommendationLoading(false);
    }
  };

  useEffect(() => {
    if (
      !formData.pickupCoordinates ||
      !formData.deliveryCoordinates ||
      carriers.length === 0
    ) {
      setRecommendedCarriers([]);
      return;
    }

    generateCarrierRecommendations(
      formData.pickupCoordinates,
      formData.packageWeight ? Number(formData.packageWeight) : undefined,
    );
  }, [
    formData.pickupCoordinates,
    formData.deliveryCoordinates,
    formData.packageWeight,
    carriers,
  ]);

  useEffect(() => {
    setSelectedCarrierId((prev) => {
      if (!recommendedCarriers.length) return "";
      return recommendedCarriers.some((carrier) => carrier.id === prev)
        ? prev
        : recommendedCarriers[0].id;
    });
  }, [recommendedCarriers]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true);
    setGeocoding(true);

    try {
      const effectivePickupAddress =
        formData.pickupAddress?.trim() ||
        pickupLocation?.name?.trim() ||
        formData.pickupCoordinates?.address?.trim() ||
        "";
      const effectiveDeliveryAddress =
        formData.deliveryAddress?.trim() ||
        deliveryLocation?.name?.trim() ||
        formData.deliveryCoordinates?.address?.trim() ||
        "";

      // Geocode addresses if not already done
      let pickupCoords = formData.pickupCoordinates;
      let deliveryCoords = formData.deliveryCoordinates;

      if (!pickupCoords) {
        pickupCoords = await handleGeocodeAddress(effectivePickupAddress);
      }

      if (!deliveryCoords) {
        deliveryCoords = await handleGeocodeAddress(effectiveDeliveryAddress);
      }

      setGeocoding(false);

      if (!pickupCoords || !deliveryCoords) {
        toast.error(
          "Unable to get coordinates for addresses. Delivery will be created without location data.",
          {
            duration: 5000,
          },
        );
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
          deliveryCoords.lng,
        );
        estimatedDeliveryTime = getEstimatedDeliveryTime(distance);
        estimatedEarnings = calculateEarnings(
          formData.packageValue ? Number(formData.packageValue) : 0,
          distance,
        );
      }

      // Get selected or guest customer
      const selectedCustomer =
        customerMode === "existing"
          ? customers.find((c) => c.id === formData.customerId)
          : null;

      const effectiveCustomer = {
        id:
          customerMode === "existing"
            ? formData.customerId
            : `guest-${Date.now()}`,
        email:
          customerMode === "existing"
            ? selectedCustomer?.email || ""
            : guestCustomer.email.trim(),
        fullName:
          customerMode === "existing"
            ? selectedCustomer?.fullName || ""
            : guestCustomer.fullName.trim(),
        phone:
          customerMode === "existing"
            ? selectedCustomer?.phone || ""
            : guestCustomer.phone.trim(),
      };

      const pickupLocationMeta = getKnownLocationMeta(effectivePickupAddress);
      const deliveryLocationMeta = getKnownLocationMeta(
        effectiveDeliveryAddress,
      );

      const bestRecommendedCarrier = recommendedCarriers[0] || null;
      const manuallySelectedCarrier = recommendedCarriers.find(
        (carrier) => carrier.id === selectedCarrierId,
      );
      const preferredCarrier =
        carrierSelectionMode === "auto"
          ? bestRecommendedCarrier
          : manuallySelectedCarrier || null;

      const effectiveSelectedCarrierId =
        formData.carrierId ||
        preferredCarrier?.id ||
        (bestRecommendedCarrier?.autoAssignable
          ? bestRecommendedCarrier.id
          : "");

      // Get selected carrier if assigned
      const selectedCarrier = effectiveSelectedCarrierId
        ? carriers.find((c) => c.id === effectiveSelectedCarrierId)
        : null;

      // Get server timestamp from Realtime DB with Firestore fallback
      const createdTimestamp = await writeTimestamp(
        `deliveries/${trackingCode}/created`,
      );
      const timeServiceStatus = getTimeServiceStatus();

      // Prepare delivery data
      const deliveryData = {
        // Basic Info
        trackingCode,
        status: effectiveSelectedCarrierId ? "assigned" : "pending",
        priority: formData.priority,

        // Customer Info
        customerId: effectiveCustomer.id,
        customerEmail: effectiveCustomer.email,
        customerName: effectiveCustomer.fullName,
        customerPhone: effectiveCustomer.phone,
        customerType: customerMode,
        guestCustomer:
          customerMode === "guest"
            ? {
                fullName: guestCustomer.fullName.trim(),
                phone: guestCustomer.phone.trim(),
                email: guestCustomer.email.trim(),
                address: guestCustomer.address.trim(),
                city: guestCustomer.city.trim(),
              }
            : null,

        // Package Details
        packageDescription: formData.packageDescription,
        packageWeight: formData.packageWeight
          ? Number(formData.packageWeight)
          : null,
        packageValue: formData.packageValue
          ? Number(formData.packageValue)
          : null,
        packageDimensions: formData.packageDimensions,

        // Pickup Details
        pickupAddress: effectivePickupAddress,
        pickupLocation: pickupCoords
          ? {
              lat: pickupCoords.lat,
              lng: pickupCoords.lng,
              address: pickupCoords.address,
              label: effectivePickupAddress,
              usageCount: pickupLocationMeta.usageCount,
              officialLevel: pickupLocationMeta.officialLevel,
              timestamp: createdTimestamp,
            }
          : null,
        pickupContactName: formData.pickupContactName,
        pickupContactPhone: formData.pickupContactPhone,
        pickupInstructions: formData.pickupInstructions,
        pickupDateTime: Timestamp.fromDate(
          new Date(`${formData.pickupDate}T${formData.pickupTime}`),
        ),

        // Delivery Details
        deliveryAddress: effectiveDeliveryAddress,
        deliveryLocation: deliveryCoords
          ? {
              lat: deliveryCoords.lat,
              lng: deliveryCoords.lng,
              address: deliveryCoords.address,
              label: effectiveDeliveryAddress,
              usageCount: deliveryLocationMeta.usageCount,
              officialLevel: deliveryLocationMeta.officialLevel,
              timestamp: createdTimestamp,
            }
          : null,
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
        carrierId: effectiveSelectedCarrierId || null,
        carrierEmail: selectedCarrier?.email || null,
        carrierName: selectedCarrier?.fullName || null,
        assignedAt: effectiveSelectedCarrierId ? createdTimestamp : null,

        // Recommendation telemetry
        carrierRecommendations: recommendedCarriers.map((carrier, index) => ({
          rank: index + 1,
          carrierId: carrier.id,
          carrierName: carrier.fullName,
          score: Number(carrier.recommendationScore.toFixed(2)),
          shortcutContributionScore: carrier.shortcutContributionScore,
          distanceToPickupKm: Number(carrier.distanceToPickupKm.toFixed(2)),
          estimatedDetourKm: Number(carrier.estimatedDetourKm.toFixed(2)),
          estimatedDeliveryHours: carrier.estimatedDeliveryHours ?? null,
          estimatedPrice: carrier.estimatedPrice ?? null,
          activeDeliveries: carrier.activeDeliveries,
          status: carrier.status,
          autoAssignable: carrier.autoAssignable,
          reason: carrier.recommendationReason,
        })),

        // Optimization Reasons for tracking
        optimizationReasons: effectiveSelectedCarrierId
          ? [
              {
                type: "carrier_assignment",
                reason:
                  selectedCarrier &&
                  bestRecommendedCarrier?.id === effectiveSelectedCarrierId
                    ? `Auto-assigned to ${selectedCarrier.fullName} (Top recommendation): ${bestRecommendedCarrier.recommendationReason}`
                    : selectedCarrier
                      ? `Manually assigned to ${selectedCarrier.fullName} by coordinator`
                      : "Carrier assignment",
                timestamp: createdTimestamp,
                carrierId: effectiveSelectedCarrierId,
                carrierName: selectedCarrier?.fullName || "Unknown",
                details:
                  bestRecommendedCarrier?.id === effectiveSelectedCarrierId &&
                  bestRecommendedCarrier
                    ? {
                        distanceKm: bestRecommendedCarrier.distanceToPickupKm,
                        estimatedDetourKm:
                          bestRecommendedCarrier.estimatedDetourKm,
                        carrierStatus: bestRecommendedCarrier.status,
                        activeDeliveries:
                          bestRecommendedCarrier.activeDeliveries,
                        score: bestRecommendedCarrier.recommendationScore,
                        factors: [
                          `${bestRecommendedCarrier.distanceToPickupKm.toFixed(1)}km from pickup`,
                          `Status: ${bestRecommendedCarrier.status}`,
                          `${bestRecommendedCarrier.activeDeliveries} deliveries`,
                          bestRecommendedCarrier.estimatedDetourKm > 0.5
                            ? `Detour: ${bestRecommendedCarrier.estimatedDetourKm.toFixed(1)}km`
                            : "No significant detour",
                        ],
                      }
                    : undefined,
              },
            ]
          : [],

        // Payment Info
        paymentMethod: formData.paymentMethod,
        paymentAmount: formData.paymentAmount
          ? Number(formData.paymentAmount)
          : estimatedEarnings,
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
        currentLocation: pickupCoords
          ? {
              lat: pickupCoords.lat,
              lng: pickupCoords.lng,
              timestamp: createdTimestamp,
              address: effectivePickupAddress,
              locationType: "pickup_point",
              status: "waiting_for_pickup",
            }
          : null,

        // Location History (for tracking route)
        locationHistory: pickupCoords
          ? [
              {
                lat: pickupCoords.lat,
                lng: pickupCoords.lng,
                timestamp: createdTimestamp,
                status: "created_at_pickup",
                address: effectivePickupAddress,
              },
            ]
          : [],

        // Milestones
        milestones: {
          created: createdTimestamp,
          assigned: effectiveSelectedCarrierId ? createdTimestamp : null,
          pickedUp: null,
          inTransit: null,
          outForDelivery: null,
          delivered: null,
        },

        locationIntelligence: {
          pickup: {
            name: effectivePickupAddress,
            usageCount: pickupLocationMeta.usageCount,
            officialLevel: pickupLocationMeta.officialLevel,
          },
          delivery: {
            name: effectiveDeliveryAddress,
            usageCount: deliveryLocationMeta.usageCount,
            officialLevel: deliveryLocationMeta.officialLevel,
          },
        },
      };

      // Save to Firestore
      const docRef = await addDoc(collection(db, "deliveries"), deliveryData);

      if (!formData.carrierId && bestRecommendedCarrier?.autoAssignable) {
        toast.success(
          `Auto-assigned to ${bestRecommendedCarrier.fullName} (best route fit)`,
          { duration: 3500 },
        );
      }

      // Show success message with details
      const successMessage = (
        <div>
          <p className="font-bold inline-flex items-center gap-2">
            <FaCircleCheck /> Delivery Created Successfully!
          </p>
          <div className="mt-2 space-y-1">
            <p className="text-sm">
              <span className="font-semibold">Tracking Code:</span>{" "}
              {trackingCode}
            </p>
            {distance > 0 && (
              <p className="text-sm">
                <span className="font-semibold">Distance:</span>{" "}
                {parseFloat(distance.toFixed(2))} km
              </p>
            )}
            {pickupCoords && deliveryCoords && (
              <p className="text-sm text-green-600">
                <span className="inline-flex items-center gap-1">
                  <FaCircleCheck /> Location tracking initialized at pickup
                  point
                </span>
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Package location is set to pickup address until carrier picks it
              up.
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
      setGuestCustomer({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        city: "",
      });
      setPickupConfirmed(false);
      setDeliveryConfirmed(false);
      setPickupLocation(null);
      setDeliveryLocation(null);
      setSelectedCarrierId("");
      setCarrierSelectionMode("auto");

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
        <h1 className="text-3xl font-bold text-gray-800">
          Create New Delivery
        </h1>
        <p className="text-gray-600 mt-2">
          Fill in delivery details. Package location will start at pickup
          address.
        </p>
      </div>

      {/* Location Status Banner */}
      <div className="mb-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <FaLocationDot className="text-white text-sm" />
          </div>
          <div>
            <h3 className="font-semibold text-blue-800">
              Smart Location Capture
            </h3>
            <p className="text-sm text-blue-700">
              1) Select address or pin map → 2) Confirm location → 3) Continue.
              This helps prevent routing errors and failed pickups.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span
            className={`px-3 py-1 rounded-full font-medium ${
              pickupConfirmed
                ? "bg-green-100 text-green-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            Pickup: {pickupConfirmed ? "Confirmed" : "Needs confirmation"}
          </span>
          <span
            className={`px-3 py-1 rounded-full font-medium ${
              deliveryConfirmed
                ? "bg-green-100 text-green-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            Drop-off: {deliveryConfirmed ? "Confirmed" : "Needs confirmation"}
          </span>
          <span className="text-gray-600">
            {isLocationReady
              ? "✅ Route is locked and ready"
              : "Confirm both locations to unlock reliable routing"}
          </span>
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
                Customer Source *
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => setCustomerMode("existing")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                    customerMode === "existing"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Existing Customer Account
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCustomerMode("guest");
                    setFormData((prev) => ({ ...prev, customerId: "" }));
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                    customerMode === "guest"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Guest (No Account)
                </button>
              </div>

              {customerMode === "existing" ? (
                <>
                  <select
                    name="customerId"
                    value={formData.customerId}
                    onChange={(e) => handleCustomerSelect(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required={customerMode === "existing"}
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
                        No registered customers found. You can still create an
                        delivery using Guest mode.
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={guestCustomer.fullName}
                    onChange={(e) =>
                      setGuestCustomer((prev) => ({
                        ...prev,
                        fullName: e.target.value,
                      }))
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Guest full name *"
                    required={customerMode === "guest"}
                  />
                  <input
                    type="tel"
                    value={guestCustomer.phone}
                    onChange={(e) =>
                      setGuestCustomer((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Guest phone *"
                    required={customerMode === "guest"}
                  />
                  <input
                    type="email"
                    value={guestCustomer.email}
                    onChange={(e) =>
                      setGuestCustomer((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Guest email (optional)"
                  />
                  <input
                    type="text"
                    value={guestCustomer.city}
                    onChange={(e) =>
                      setGuestCustomer((prev) => ({
                        ...prev,
                        city: e.target.value,
                      }))
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Guest city (optional)"
                  />
                  <textarea
                    value={guestCustomer.address}
                    onChange={(e) =>
                      setGuestCustomer((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                    rows={2}
                    className="md:col-span-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Guest address (optional)"
                  />
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
                label="Pickup Address"
                value={formData.pickupAddress}
                onChange={handlePickupAddressChange}
                onSelectWithCoords={handlePickupSelectWithCoords}
                knownLocations={knownLocations}
                placeholder="Start typing address..."
                required
              />
              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowPickupManualMap((prev) => !prev)}
                  className="text-sm px-3 py-1.5 rounded-md border border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  {showPickupManualMap
                    ? "Close fullscreen map"
                    : "Open fullscreen map picker"}
                </button>
                {resolvingPickupPin && (
                  <span className="text-xs text-blue-600">
                    Resolving selected point...
                  </span>
                )}
              </div>
              {formData.pickupCoordinates && (
                <AddressMapPreview
                  lat={formData.pickupCoordinates.lat}
                  lng={formData.pickupCoordinates.lng}
                  label={formData.pickupAddress || "Pickup location"}
                />
              )}

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => confirmLocation("pickup")}
                  disabled={!pickupLocation}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Pickup Location
                </button>

                {pickupLocation && (
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      pickupConfirmed
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {pickupConfirmed
                      ? "Confirmed ✓"
                      : "Selected (not confirmed)"}
                  </span>
                )}

                {pickupLocation && (
                  <span className="text-xs text-gray-600">
                    {pickupLocation.lat.toFixed(6)},{" "}
                    {pickupLocation.lng.toFixed(6)}
                  </span>
                )}
              </div>

              {pickupLocation && !pickupConfirmed && (
                <p className="mt-2 text-sm text-amber-700">
                  Final step: click “Confirm Pickup Location” to lock this
                  point.
                </p>
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
                label="Delivery Address"
                value={formData.deliveryAddress}
                onChange={handleDeliveryAddressChange}
                onSelectWithCoords={handleDeliverySelectWithCoords}
                knownLocations={knownLocations}
                placeholder="Start typing address..."
                required
              />
              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowDeliveryManualMap((prev) => !prev)}
                  className="text-sm px-3 py-1.5 rounded-md border border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  {showDeliveryManualMap
                    ? "Close fullscreen map"
                    : "Open fullscreen destination picker"}
                </button>
                {resolvingDeliveryPin && (
                  <span className="text-xs text-blue-600">
                    Resolving selected point...
                  </span>
                )}
              </div>
              {formData.deliveryCoordinates && (
                <AddressMapPreview
                  lat={formData.deliveryCoordinates.lat}
                  lng={formData.deliveryCoordinates.lng}
                  label={formData.deliveryAddress || "Delivery location"}
                />
              )}

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => confirmLocation("delivery")}
                  disabled={!deliveryLocation}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Delivery Location
                </button>

                {deliveryLocation && (
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      deliveryConfirmed
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {deliveryConfirmed
                      ? "Confirmed ✓"
                      : "Selected (not confirmed)"}
                  </span>
                )}

                {deliveryLocation && (
                  <span className="text-xs text-gray-600">
                    {deliveryLocation.lat.toFixed(6)},{" "}
                    {deliveryLocation.lng.toFixed(6)}
                  </span>
                )}
              </div>

              {deliveryLocation && !deliveryConfirmed && (
                <p className="mt-2 text-sm text-amber-700">
                  Final step: click “Confirm Delivery Location” to lock this
                  point.
                </p>
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

        {/* Section 4: Requirements & Payment */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6 pb-4 border-b">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
              4
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Special Requirements & Payment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Payment */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Payment Information
              </h3>

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
                  <option value="card_prepaid">Card Prepaid</option>
                  <option value="cash_on_delivery">Cash on Delivery</option>
                  <option value="mobile_money">Mobile Money</option>
                  <option value="bank_transfer">Bank Transfer</option>
                </select>
              </div>

              <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
                <p className="text-sm font-medium text-blue-800">
                  Payment amount is auto-determined from selected carrier
                  pricing
                </p>
                <p className="text-xs text-blue-700 mt-1">
                  Final amount is calculated automatically during submission
                  based on recommendation and route factors.
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
                    <span className="block text-sm text-gray-500">
                      Handle with care
                    </span>
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
                  <label
                    htmlFor="requiresSignature"
                    className="ml-3 text-gray-700"
                  >
                    <span className="font-medium">Signature required</span>
                    <span className="block text-sm text-gray-500">
                      Upon delivery
                    </span>
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
                  <label
                    htmlFor="insuranceRequired"
                    className="ml-3 text-gray-700"
                  >
                    <span className="font-medium">Insurance required</span>
                    <span className="block text-sm text-gray-500">
                      For high-value items
                    </span>
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

        {/* Section 5: Carrier Assignment */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6 pb-4 border-b">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
              5
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Carrier Assignment
            </h2>
          </div>

          {formData.pickupCoordinates && formData.deliveryCoordinates && (
            <div>
              {carriers.length === 0 && (
                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-700">
                    No carriers available. Approve carriers in the Carrier
                    Management section.
                  </p>
                </div>
              )}

              <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 p-3">
                <div className="text-sm font-medium text-gray-800 mb-2">
                  Assignment mode
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setCarrierSelectionMode("auto")}
                    className={`px-3 py-1.5 rounded-md text-sm border ${
                      carrierSelectionMode === "auto"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
                    }`}
                  >
                    Auto-pick top recommendation
                  </button>
                  <button
                    type="button"
                    onClick={() => setCarrierSelectionMode("manual")}
                    className={`px-3 py-1.5 rounded-md text-sm border ${
                      carrierSelectionMode === "manual"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
                    }`}
                  >
                    I will choose manually
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Top 5 Optimized Carriers
                </label>
                {recommendationLoading && (
                  <span className="text-xs text-blue-600">Computing…</span>
                )}
              </div>

              {recommendedCarriers.length === 0 ? (
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600">
                  Add valid pickup and delivery coordinates to generate
                  recommendations.
                </div>
              ) : (
                <div className="space-y-3">
                  {recommendedCarriers.map((carrier, index) => {
                    const isSelected = carrier.id === selectedCarrierId;
                    return (
                      <label
                        key={carrier.id}
                        className={`block rounded-xl border p-4 cursor-pointer transition ${
                          isSelected
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <input
                            type="radio"
                            name="selectedCarrier"
                            value={carrier.id}
                            checked={
                              carrierSelectionMode === "auto"
                                ? carrier.id === recommendedCarriers[0]?.id
                                : isSelected
                            }
                            onChange={() => {
                              setCarrierSelectionMode("manual");
                              setSelectedCarrierId(carrier.id);
                              setFormData((prev) => ({
                                ...prev,
                                carrierId: "",
                              }));
                            }}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="font-semibold text-gray-900">
                                #{index + 1} {carrier.fullName}
                              </div>
                              <div className="text-sm text-blue-700 font-medium">
                                Score:{" "}
                                {parseFloat(
                                  carrier.recommendationScore.toFixed(2),
                                )}
                              </div>
                            </div>

                            <div className="mt-2 grid grid-cols-2 md:grid-cols-6 gap-2 text-sm text-gray-700">
                              <div>
                                <span className="text-gray-500">Status:</span>{" "}
                                {carrier.status}
                              </div>
                              <div>
                                <span className="text-gray-500">Pickup:</span>{" "}
                                {parseFloat(
                                  carrier.distanceToPickupKm.toFixed(2),
                                )}
                                km
                              </div>
                              <div>
                                <span className="text-gray-500">Detour:</span>{" "}
                                {parseFloat(
                                  carrier.estimatedDetourKm.toFixed(2),
                                )}
                                km
                              </div>
                              <div>
                                <span className="text-gray-500">Active:</span>{" "}
                                {carrier.activeDeliveries}
                              </div>
                              <div>
                                <span className="text-gray-500">ETA:</span> ~
                                {carrier.estimatedDeliveryHours != null
                                  ? parseFloat(
                                      carrier.estimatedDeliveryHours.toFixed(2),
                                    )
                                  : "-"}
                                h
                              </div>
                              <div>
                                <span className="text-gray-500">
                                  Est. Cost:
                                </span>{" "}
                                M{carrier.estimatedPrice ?? "-"}
                              </div>
                            </div>

                            <p className="mt-2 text-xs text-gray-600">
                              {carrier.recommendationReason}
                            </p>
                            {carrierSelectionMode === "auto" &&
                              carrier.id === recommendedCarriers[0]?.id && (
                                <p className="mt-2 text-xs text-blue-700 font-medium">
                                  Auto mode: this carrier will be selected by
                                  the system.
                                </p>
                              )}
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Location Summary */}
        {(pickupLocation || deliveryLocation) && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <FaCircleCheck className="mr-2" />
              Location Tracking Ready
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pickupLocation && (
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="font-medium text-green-700 mb-1">
                    <span className="inline-flex items-center gap-2">
                      <FaLocationDot /> Pickup Location
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="truncate">{pickupLocation.name}</div>
                    <div className="text-xs font-mono mt-1">
                      {pickupLocation.lat.toFixed(6)},{" "}
                      {pickupLocation.lng.toFixed(6)}
                    </div>
                  </div>
                </div>
              )}
              {deliveryLocation && (
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="font-medium text-green-700 mb-1">
                    <span className="inline-flex items-center gap-2">
                      <FaBullseye /> Delivery Location
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="truncate">{deliveryLocation.name}</div>
                    <div className="text-xs font-mono mt-1">
                      {deliveryLocation.lat.toFixed(6)},{" "}
                      {deliveryLocation.lng.toFixed(6)}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <p className="text-sm text-green-700 mt-4">
              {isLocationReady
                ? "Ready for location-based tracking"
                : "Confirm both pickup and delivery points before submitting."}
            </p>
          </div>
        )}

        {/* Form Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div />

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
                disabled={
                  submitting ||
                  (customerMode === "existing" && customers.length === 0)
                }
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center shadow-md"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    {geocoding
                      ? "Getting coordinates..."
                      : "Creating Delivery..."}
                  </>
                ) : (
                  <>
                    <FaBox className="mr-2" />
                    Create Delivery
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      {showPickupManualMap && (
        <FullscreenMapPicker
          title="Pick pickup location"
          lat={pickupLocation?.lat ?? LESOTHO_DEFAULT_CENTER.lat}
          lng={pickupLocation?.lng ?? LESOTHO_DEFAULT_CENTER.lng}
          label={pickupLocation?.name || formData.pickupAddress || "Pickup"}
          loading={resolvingPickupPin}
          onClose={() => setShowPickupManualMap(false)}
          onDone={(lat, lng) => {
            setShowPickupManualMap(false);
            handlePickupMapPick(lat, lng);
          }}
        />
      )}

      {showDeliveryManualMap && (
        <FullscreenMapPicker
          title="Pick delivery destination"
          lat={deliveryLocation?.lat ?? LESOTHO_DEFAULT_CENTER.lat}
          lng={deliveryLocation?.lng ?? LESOTHO_DEFAULT_CENTER.lng}
          label={
            deliveryLocation?.name || formData.deliveryAddress || "Drop-off"
          }
          loading={resolvingDeliveryPin}
          onClose={() => setShowDeliveryManualMap(false)}
          onDone={(lat, lng) => {
            setShowDeliveryManualMap(false);
            handleDeliveryMapPick(lat, lng);
          }}
        />
      )}

      <LocationNamingModal
        isOpen={Boolean(pendingNamingLocation)}
        type={pendingNamingLocation?.type || "pickup"}
        lat={pendingNamingLocation?.lat || 0}
        lng={pendingNamingLocation?.lng || 0}
        value={manualLocationName}
        onChange={setManualLocationName}
        onCancel={() => {
          if (savingManualLocationName) return;
          setPendingNamingLocation(null);
          setManualLocationName("");
        }}
        onSave={handleSaveManualLocationName}
        saving={savingManualLocationName}
      />

      {/* Help Information */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="text-blue-600 font-medium mb-2 flex items-center">
            <FaLocationDot className="mr-2" />
            Location Tracking
          </div>
          <p className="text-sm text-blue-700">
            Package location starts at pickup address and updates automatically
            as the carrier moves.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="text-green-600 font-medium mb-2 flex items-center">
            <FaMoneyBill className="mr-2" />
            Pricing
          </div>
          <p className="text-sm text-green-700">
            Distance-based calculation: M10 per km + 15% of package value
            (minimum M50).
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <div className="text-purple-600 font-medium mb-2 flex items-center">
            <FaTruck className="mr-2" />
            Carrier Assignment
          </div>
          <p className="text-sm text-purple-700">
            Choose from top recommended carriers instantly (ranked by route fit,
            workload, capacity and rating).
          </p>
        </div>
      </div>
    </div>
  );
}
