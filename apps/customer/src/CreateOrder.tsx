// apps/customer/src/CreateOrder.tsx
import AddressAutocomplete from "./AddressAutocomplete";
import { useState, useEffect, useRef } from "react";
import {
  db,
  defaultBusinessRules,
  loadBusinessRulesConfig,
  type BusinessRulesConfig,
} from "@config";
import {
  collection,
  addDoc,
  Timestamp,
  serverTimestamp,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useGeocoder } from "./hooks/useGeocoder";
import {
  findNearbyLocationByCoordinates,
  findNearbyDuplicate,
  loadKnownLocations,
  saveCustomLocation,
  type KnownLocation,
} from "./services/locationsService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faBullseye,
  faCircleCheck,
  faLocationDot,
  faMoneyBillWave,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const LESOTHO_DEFAULT_CENTER = { lat: -29.3142, lng: 27.4833 };

declare global {
  interface Window {
    google: any;
  }
}

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
            <FontAwesomeIcon icon={faLocationDot} />
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

type Props = { user: any };

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

interface CarrierCandidate {
  id: string;
  fullName: string;
  vehicleType: string;
  status: string;
  rating: number;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  activeDeliveries: number;
  capacityKg: number;
  recommendationScore: number;
  distanceToPickupKm: number;
  routeDistanceKm: number;
  estimatedDeliveryHours: number;
  estimatedPrice: number;
  recommendationReason: string;
  canAutoAssign: boolean;
}

type CarrierSelectionMode = "auto" | "manual";

const ACTIVE_DELIVERY_STATUSES = [
  "assigned",
  "accepted",
  "picked_up",
  "in_transit",
  "out_for_delivery",
  "stuck",
];

const normalizeVehicleType = (vehicleType?: string) => {
  const value = (vehicleType || "").toLowerCase();
  if (value.includes("bicycle")) return "bicycle";
  if (
    value.includes("motor") ||
    value.includes("scooter") ||
    value.includes("bike")
  ) {
    return "motorcycle";
  }
  if (value.includes("pickup")) return "pickup";
  if (value.includes("van")) return "van";
  if (value.includes("truck")) return "truck";
  if (value.includes("car") || value.includes("sedan")) return "car";
  return "unknown";
};

export default function CreateOrder({ user }: Props) {
  const navigate = useNavigate();
  const { geocodeAddress, reverseGeocode } = useGeocoder();

  // Called when user selects a suggestion from the pickup autocomplete dropdown
  const handlePickupPlaceSelect = (place: any) => {
    if (!place?.geometry?.location) return;
    const loc = place.geometry.location;
    const lat = typeof loc.lat === "function" ? loc.lat() : loc.lat;
    const lng = typeof loc.lng === "function" ? loc.lng() : loc.lng;
    setPickupConfirmed(false);
    setPickupLocation({
      name: place.formatted_address || "Pickup location",
      lat,
      lng,
    });
    setFormData((prev) => ({
      ...prev,
      pickupCoordinates: {
        lat,
        lng,
        address: place.formatted_address || prev.pickupAddress,
      },
    }));
  };

  // Called when user selects a suggestion from the delivery autocomplete dropdown
  const handleDeliveryPlaceSelect = (place: any) => {
    if (!place?.geometry?.location) return;
    const loc = place.geometry.location;
    const lat = typeof loc.lat === "function" ? loc.lat() : loc.lat;
    const lng = typeof loc.lng === "function" ? loc.lng() : loc.lng;
    setDeliveryConfirmed(false);
    setDeliveryLocation({
      name: place.formatted_address || "Delivery destination",
      lat,
      lng,
    });
    setFormData((prev) => ({
      ...prev,
      deliveryCoordinates: {
        lat,
        lng,
        address: place.formatted_address || prev.deliveryAddress,
      },
    }));
  };

  // Form state with all detailed fields
  const [formData, setFormData] = useState({
    // Package Info
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

    // Priority & Payment
    priority: "standard",
    paymentMethod: "card_prepaid",

    // Special Instructions
    isFragile: false,
    requiresSignature: true,
    insuranceRequired: false,
    notes: "",
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [geocoding, setGeocoding] = useState(false);
  const [showPickupManualMap, setShowPickupManualMap] = useState(false);
  const [showDeliveryManualMap, setShowDeliveryManualMap] = useState(false);
  const [resolvingPickupPin, setResolvingPickupPin] = useState(false);
  const [resolvingDeliveryPin, setResolvingDeliveryPin] = useState(false);
  const [pickupLocation, setPickupLocation] = useState<SelectedLocation | null>(
    null,
  );
  const [deliveryLocation, setDeliveryLocation] =
    useState<SelectedLocation | null>(null);
  const [pickupConfirmed, setPickupConfirmed] = useState(false);
  const [deliveryConfirmed, setDeliveryConfirmed] = useState(false);
  const [knownLocations, setKnownLocations] = useState<KnownLocation[]>([]);
  const [pendingNamingLocation, setPendingNamingLocation] = useState<{
    type: "pickup" | "delivery";
    lat: number;
    lng: number;
    suggestedName: string;
  } | null>(null);
  const [manualLocationName, setManualLocationName] = useState("");
  const [savingManualLocationName, setSavingManualLocationName] =
    useState(false);
  const [recommendedCarriers, setRecommendedCarriers] = useState<
    CarrierCandidate[]
  >([]);
  const [recommendationLoading, setRecommendationLoading] = useState(false);
  const [recommendationError, setRecommendationError] = useState<string | null>(
    null,
  );
  const [selectedCarrierId, setSelectedCarrierId] = useState("");
  const [carrierSelectionMode, setCarrierSelectionMode] =
    useState<CarrierSelectionMode>("auto");
  const [businessRules, setBusinessRules] =
    useState<BusinessRulesConfig>(defaultBusinessRules);

  const isLocationReady = pickupConfirmed && deliveryConfirmed;

  const formatPinnedAddress = (lat: number, lng: number) =>
    `Pinned location (${lat.toFixed(6)}, ${lng.toFixed(6)})`;

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

  const getLocationOfficialLevel = (usageCount: number) => {
    if (
      usageCount >=
      businessRules.locationOfficialThresholds.coreOfficialUsageCount
    ) {
      return "core_official";
    }
    if (
      usageCount >= businessRules.locationOfficialThresholds.officialUsageCount
    ) {
      return "official";
    }
    return "candidate";
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

    return findNearbyLocationByCoordinates(
      selected.lat,
      selected.lng,
      knownLocations,
    );
  };

  const resolveAndPersistLocationName = async (
    selected: SelectedLocation,
    type: "pickup" | "delivery",
    explicitName?: string,
  ): Promise<SelectedLocation | null> => {
    const finalName = (explicitName ?? selected.name).trim();

    if (!finalName) {
      toast.error(`Please enter a clear ${type} location name.`);
      return null;
    }

    try {
      await saveCustomLocation(
        selected.lat,
        selected.lng,
        finalName,
        user?.uid || "customer",
        knownLocations,
      );

      const updated = await loadKnownLocations();
      setKnownLocations(updated);
    } catch (error) {
      console.error("Error saving confirmed location:", error);
      toast.error("Failed to save location name. Please try again.");
      return null;
    }

    return {
      ...selected,
      name: finalName,
    };
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
      toast.error(`Please select ${type} location first.`);
      return;
    }

    const knownMatch = getKnownLocationMatch(selected);
    if (knownMatch) {
      const resolved = await resolveAndPersistLocationName(
        {
          ...selected,
          name: knownMatch.name,
        },
        type,
        knownMatch.name,
      );
      if (!resolved) return;
      applyConfirmedLocation(type, resolved);
      return;
    }

    // New or unclear locations still require naming before they are reused later.
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
        pendingNamingLocation.type,
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

  const handleLocationSelectWithCoords = async (
    type: "pickup" | "delivery",
    address: string,
    lat: number,
    lng: number,
  ) => {
    if (type === "pickup") {
      setPickupConfirmed(false);
      setPickupLocation({ name: address, lat, lng });
      setFormData((prev) => ({
        ...prev,
        pickupAddress: address,
        pickupCoordinates: { lat, lng, address },
      }));
      return;
    }

    setDeliveryConfirmed(false);
    setDeliveryLocation({ name: address, lat, lng });
    setFormData((prev) => ({
      ...prev,
      deliveryAddress: address,
      deliveryCoordinates: { lat, lng, address },
    }));
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

  // Load user profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!user) return;
        const [userDoc, known, rules] = await Promise.all([
          getDoc(doc(db, "users", user.uid)),
          loadKnownLocations(),
          loadBusinessRulesConfig(),
        ]);
        setKnownLocations(known);
        setBusinessRules(rules);
        if (userDoc.exists()) {
          const data = userDoc.data();
          setFormData((prev) => ({
            ...prev,
            pickupContactName: data.fullName || prev.pickupContactName,
            pickupContactPhone: data.phone || prev.pickupContactPhone,
          }));
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

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

  // Handle pickup address change with geocoding
  const handlePickupAddressChange = async (address: string) => {
    setPickupConfirmed(false);
    setPickupLocation(null);
    setFormData((prev) => ({
      ...prev,
      pickupAddress: address,
      pickupCoordinates: null,
    }));

    if (address.length > 10) {
      const coords = await handleGeocodeAddress(address);
      if (coords) {
        setFormData((prev) => ({
          ...prev,
          pickupCoordinates: coords,
        }));
        setPickupLocation({
          name: coords.address || address,
          lat: coords.lat,
          lng: coords.lng,
        });
      }
    }
  };

  // Handle delivery address change with geocoding
  const handleDeliveryAddressChange = async (address: string) => {
    setDeliveryConfirmed(false);
    setDeliveryLocation(null);
    setFormData((prev) => ({
      ...prev,
      deliveryAddress: address,
      deliveryCoordinates: null,
    }));

    if (address.length > 10) {
      const coords = await handleGeocodeAddress(address);
      if (coords) {
        setFormData((prev) => ({
          ...prev,
          deliveryCoordinates: coords,
        }));
        setDeliveryLocation({
          name: coords.address || address,
          lat: coords.lat,
          lng: coords.lng,
        });
      }
    }
  };

  const generateTrackingCode = () => {
    const prefix = "PTR";
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `${prefix}-${randomNum}`;
  };

  const validateForm = () => {
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
    if (!pickupConfirmed || !deliveryConfirmed) {
      toast.error(
        "Please confirm pickup and delivery locations before submitting.",
      );
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
    const baseValue = packageValue || businessRules.pricing.baseValueFallback;
    const distanceFee = distance * businessRules.pricing.distanceRatePerKm;
    const valueFee = Math.round(
      baseValue * businessRules.pricing.packageValueRate,
    );
    return Math.max(
      businessRules.pricing.minimumCharge,
      valueFee + distanceFee,
    );
  };

  useEffect(() => {
    let cancelled = false;

    const loadRecommendations = async () => {
      const pickup = formData.pickupCoordinates;
      const dropoff = formData.deliveryCoordinates;
      if (!pickup || !dropoff) {
        setRecommendedCarriers([]);
        setSelectedCarrierId("");
        setCarrierSelectionMode("auto");
        setRecommendationError(null);
        return;
      }

      setRecommendationLoading(true);
      setRecommendationError(null);

      try {
        const [carriersSnap, activeDeliveriesSnap] = await Promise.all([
          getDocs(
            query(
              collection(db, "users"),
              where("role", "==", "carrier"),
              where("isApproved", "==", true),
            ),
          ),
          getDocs(
            query(
              collection(db, "deliveries"),
              where("status", "in", ACTIVE_DELIVERY_STATUSES),
            ),
          ),
        ]);

        const activeByCarrier = activeDeliveriesSnap.docs.reduce<
          Record<string, number>
        >((acc, deliveryDoc) => {
          const data = deliveryDoc.data() as any;
          if (!data?.carrierId) return acc;
          acc[data.carrierId] = (acc[data.carrierId] || 0) + 1;
          return acc;
        }, {});

        const packageWeightKg = Number(formData.packageWeight || 0);
        const packageValue = Number(formData.packageValue || 0);
        const rules = businessRules;
        const routeDistanceKm = calculateDistance(
          pickup.lat,
          pickup.lng,
          dropoff.lat,
          dropoff.lng,
        );

        const recommendations = carriersSnap.docs
          .reduce<CarrierCandidate[]>((acc, carrierDoc) => {
            const data = carrierDoc.data() as any;
            const currentLocation =
              data.currentLocation &&
              Number.isFinite(data.currentLocation.lat) &&
              Number.isFinite(data.currentLocation.lng)
                ? {
                    lat: data.currentLocation.lat,
                    lng: data.currentLocation.lng,
                  }
                : undefined;

            if (!currentLocation) return acc;

            const status = data.status || "inactive";
            if (status === "inactive") return acc;

            const normalizedVehicle = normalizeVehicleType(data.vehicleType);
            const vehicleProfile =
              rules.vehicleProfiles[
                normalizedVehicle as keyof BusinessRulesConfig["vehicleProfiles"]
              ] || rules.vehicleProfiles.unknown;

            const activeDeliveries = activeByCarrier[carrierDoc.id] || 0;
            const distanceToPickupKm = calculateDistance(
              currentLocation.lat,
              currentLocation.lng,
              pickup.lat,
              pickup.lng,
            );
            const rating = Number(data.rating || 0);
            const capacityKg = vehicleProfile.capacityKg;
            const remainingCapacityKg = Math.max(
              0,
              capacityKg -
                activeDeliveries *
                  rules.recommendation.activeDeliveryCapacityKgImpact,
            );
            const overloadKg = Math.max(
              0,
              packageWeightKg - remainingCapacityKg,
            );
            const statusPenalty =
              status === "active"
                ? 0
                : status === "busy"
                  ? rules.recommendation.busyStatusPenalty
                  : rules.recommendation.unknownStatusPenalty;
            const workloadPenalty =
              activeDeliveries * rules.recommendation.workloadPenaltyPerActive;
            const distancePenalty =
              distanceToPickupKm * rules.recommendation.distancePenaltyPerKm;
            const routePenalty =
              routeDistanceKm * rules.recommendation.routePenaltyPerKm;
            const capacityPenalty =
              overloadKg > 0
                ? rules.recommendation.capacityBasePenalty +
                  overloadKg * rules.recommendation.capacityPenaltyPerKg
                : 0;
            const ratingBoost =
              Math.min(rules.recommendation.maxRatingForBoost, rating) *
              rules.recommendation.ratingBoostPerPoint;
            const bundleBoost =
              activeDeliveries > 0 &&
              routeDistanceKm < rules.recommendation.bundleRouteMaxKm &&
              distanceToPickupKm < rules.recommendation.bundlePickupMaxKm
                ? rules.recommendation.bundleBoost
                : 0;

            const recommendationScore =
              distancePenalty +
              routePenalty +
              workloadPenalty +
              statusPenalty +
              capacityPenalty -
              ratingBoost -
              bundleBoost;

            const avgSpeed = vehicleProfile.speedKmh;
            const estimatedDeliveryHours = Math.max(
              rules.recommendation.minimumEtaHours,
              routeDistanceKm / avgSpeed +
                distanceToPickupKm / avgSpeed +
                activeDeliveries *
                  rules.recommendation.activeDeliveryEtaHoursImpact,
            );
            const estimatedPrice = Math.round(
              calculateEarnings(packageValue, routeDistanceKm) *
                (1 +
                  activeDeliveries * rules.pricing.activeDeliverySurchargeRate),
            );

            const reasonBits = [
              `${parseFloat(distanceToPickupKm.toFixed(2))}km to pickup`,
              `${activeDeliveries} active deliveries`,
              `rating ${parseFloat(Math.max(0, rating).toFixed(2))}`,
              `${parseFloat(remainingCapacityKg.toFixed(2))}kg capacity left`,
            ];

            if (bundleBoost > 0) {
              reasonBits.push("good bundle fit");
            }

            acc.push({
              id: carrierDoc.id,
              fullName: data.fullName || "Carrier",
              vehicleType: data.vehicleType || "Unknown",
              status,
              rating,
              currentLocation,
              activeDeliveries,
              capacityKg,
              recommendationScore: Number(recommendationScore.toFixed(2)),
              distanceToPickupKm: Number(distanceToPickupKm.toFixed(2)),
              routeDistanceKm: Number(routeDistanceKm.toFixed(2)),
              estimatedDeliveryHours: Number(estimatedDeliveryHours.toFixed(1)),
              estimatedPrice,
              recommendationReason: reasonBits.join(" • "),
              canAutoAssign: overloadKg === 0 && status !== "inactive",
            } satisfies CarrierCandidate);

            return acc;
          }, [])
          .sort((a, b) => a.recommendationScore - b.recommendationScore)
          .slice(0, 5);

        if (!cancelled) {
          setRecommendedCarriers(recommendations);
          setSelectedCarrierId((prev) =>
            recommendations.some((carrier) => carrier.id === prev)
              ? prev
              : recommendations[0]?.id || "",
          );
          if (!recommendations.length) {
            setCarrierSelectionMode("auto");
          }
          if (!recommendations.length) {
            setRecommendationError(
              "No active carriers are currently available for this route.",
            );
          }
        }
      } catch (error) {
        console.error("Failed to load carrier recommendations:", error);
        if (!cancelled) {
          setRecommendedCarriers([]);
          setSelectedCarrierId("");
          setCarrierSelectionMode("auto");
          setRecommendationError("Could not load recommendations right now.");
        }
      } finally {
        if (!cancelled) {
          setRecommendationLoading(false);
        }
      }
    };

    loadRecommendations();

    return () => {
      cancelled = true;
    };
  }, [
    businessRules,
    formData.pickupCoordinates,
    formData.deliveryCoordinates,
    formData.packageWeight,
    formData.packageValue,
    formData.priority,
  ]);

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
        toast.error(
          "Unable to get coordinates for addresses. Order will be created without location data.",
          {
            duration: 5000,
          },
        );
      }

      const trackingCode = generateTrackingCode();
      const topRecommendedCarrier = recommendedCarriers[0];
      const manuallySelectedCarrier = recommendedCarriers.find(
        (carrier) => carrier.id === selectedCarrierId,
      );
      const preferredCarrier =
        carrierSelectionMode === "auto"
          ? topRecommendedCarrier
          : manuallySelectedCarrier;

      if (
        carrierSelectionMode === "manual" &&
        pickupCoords &&
        deliveryCoords &&
        recommendedCarriers.length > 0 &&
        !preferredCarrier
      ) {
        toast.error("Please choose a recommended carrier to continue.");
        setSubmitting(false);
        return;
      }

      const coordinatorReviewReasons: string[] = [];
      if (
        businessRules.coordinatorReviewTriggers.missingVerifiedCoordinates &&
        (!pickupCoords || !deliveryCoords)
      ) {
        coordinatorReviewReasons.push("missing_verified_coordinates");
      }
      if (
        businessRules.coordinatorReviewTriggers.noRecommendedCarrierAvailable &&
        !preferredCarrier
      ) {
        coordinatorReviewReasons.push("no_recommended_carrier_available");
      }
      if (
        businessRules.coordinatorReviewTriggers
          .carrierCapacityOrAvailabilityRisk &&
        preferredCarrier &&
        !preferredCarrier.canAutoAssign
      ) {
        coordinatorReviewReasons.push("carrier_capacity_or_availability_risk");
      }
      if (
        businessRules.coordinatorReviewTriggers
          .urgentPriorityRequiresConfirmation &&
        formData.priority === "urgent"
      ) {
        coordinatorReviewReasons.push(
          "urgent_priority_requires_coordinator_confirmation",
        );
      }

      const requiresCoordinatorReview = coordinatorReviewReasons.length > 0;
      const assignedCarrier = requiresCoordinatorReview
        ? null
        : preferredCarrier;

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

      const autoPaymentAmount =
        preferredCarrier?.estimatedPrice ?? estimatedEarnings;

      // Prepare delivery data
      const deliveryData = {
        // Basic Info
        trackingCode,
        status: assignedCarrier ? "assigned" : "pending",
        priority: formData.priority,

        // Customer Info (from logged-in user)
        customerId: user.uid,
        customerEmail: user.email || "",
        customerName: formData.pickupContactName || "",
        customerPhone: formData.pickupContactPhone || "",

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
        pickupAddress: formData.pickupAddress,
        pickupLocation: pickupCoords
          ? {
              lat: pickupCoords.lat,
              lng: pickupCoords.lng,
              address: pickupCoords.address,
              timestamp: Timestamp.now(),
            }
          : null,
        pickupContactName: formData.pickupContactName,
        pickupContactPhone: formData.pickupContactPhone,
        pickupInstructions: formData.pickupInstructions,
        pickupDateTime: Timestamp.fromDate(
          new Date(`${formData.pickupDate}T${formData.pickupTime}`),
        ),

        // Delivery Details
        deliveryAddress: formData.deliveryAddress,
        deliveryLocation: deliveryCoords
          ? {
              lat: deliveryCoords.lat,
              lng: deliveryCoords.lng,
              address: deliveryCoords.address,
              timestamp: Timestamp.now(),
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
        locationConfirmation: {
          pickupConfirmed,
          deliveryConfirmed,
          confirmedAt: Timestamp.now(),
          pickupLabel: pickupLocation?.name || formData.pickupAddress,
          deliveryLabel: deliveryLocation?.name || formData.deliveryAddress,
        },

        // Carrier Assignment (customer selects from recommendations)
        carrierId: assignedCarrier?.id || null,
        carrierEmail: null,
        carrierName: assignedCarrier?.fullName || null,
        assignedAt: assignedCarrier ? serverTimestamp() : null,
        carrierSelectionSource: assignedCarrier
          ? carrierSelectionMode === "auto"
            ? "customer_auto_top_recommendation"
            : "customer_manual_recommendation_choice"
          : null,
        carrierSelectionMode,
        coordinatorReviewRequired: requiresCoordinatorReview,
        coordinatorReviewReasons,
        proposedCarrier:
          requiresCoordinatorReview && preferredCarrier
            ? {
                carrierId: preferredCarrier.id,
                carrierName: preferredCarrier.fullName,
                recommendationScore: preferredCarrier.recommendationScore,
                recommendationReason: preferredCarrier.recommendationReason,
                selectedByCustomer: true,
                selectionMode: carrierSelectionMode,
              }
            : null,
        carrierRecommendations: recommendedCarriers.map((carrier, index) => ({
          rank: index + 1,
          carrierId: carrier.id,
          carrierName: carrier.fullName,
          score: carrier.recommendationScore,
          reason: carrier.recommendationReason,
          estimatedDeliveryHours: carrier.estimatedDeliveryHours,
          estimatedPrice: carrier.estimatedPrice,
          distanceToPickupKm: carrier.distanceToPickupKm,
          activeDeliveries: carrier.activeDeliveries,
          vehicleType: carrier.vehicleType,
          rating: carrier.rating,
        })),

        // Payment Info
        paymentMethod: formData.paymentMethod,
        paymentAmount: autoPaymentAmount,
        paymentStatus: "pending",

        // Special Requirements
        isFragile: formData.isFragile,
        requiresSignature: formData.requiresSignature,
        insuranceRequired: formData.insuranceRequired,
        notes: formData.notes,

        // System Fields
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        createdBy: user.uid,

        // Proof of Delivery
        proofOfDelivery: {
          otp: null,
          verified: false,
          verifiedAt: null,
          photoUrl: null,
          signatureUrl: null,
        },

        // Current Location starts at PICKUP location
        currentLocation: pickupCoords
          ? {
              lat: pickupCoords.lat,
              lng: pickupCoords.lng,
              timestamp: Timestamp.now(),
              address: formData.pickupAddress,
              locationType: "pickup_point",
              status: "waiting_for_pickup",
            }
          : null,

        // Location History
        locationHistory: pickupCoords
          ? [
              {
                lat: pickupCoords.lat,
                lng: pickupCoords.lng,
                timestamp: Timestamp.now(),
                status: "created_at_pickup",
                address: formData.pickupAddress,
              },
            ]
          : [],

        // Milestones
        milestones: {
          created: serverTimestamp(),
          assigned: assignedCarrier ? serverTimestamp() : null,
          pickedUp: null,
          inTransit: null,
          outForDelivery: null,
          delivered: null,
        },
        optimizationReasons: preferredCarrier
          ? [
              {
                type: "customer_carrier_selection_or_auto",
                reason: assignedCarrier
                  ? carrierSelectionMode === "auto"
                    ? `System auto-picked top carrier ${assignedCarrier.fullName} for customer order`
                    : `Customer selected ${assignedCarrier.fullName} from smart recommendations`
                  : `Coordinator review required before assignment${preferredCarrier ? `; proposed ${preferredCarrier.fullName}` : ""}`,
                timestamp: Timestamp.now(),
                carrierId: preferredCarrier.id,
                score: preferredCarrier.recommendationScore,
                requiresCoordinatorReview,
                coordinatorReviewReasons,
                details: {
                  selectionMode: carrierSelectionMode,
                  recommendationReason: preferredCarrier.recommendationReason,
                  estimatedDeliveryHours:
                    preferredCarrier.estimatedDeliveryHours,
                  estimatedPrice: preferredCarrier.estimatedPrice,
                  distanceToPickupKm: preferredCarrier.distanceToPickupKm,
                  activeDeliveries: preferredCarrier.activeDeliveries,
                },
              },
            ]
          : [],
      };

      // Save to Firestore
      const docRef = await addDoc(collection(db, "deliveries"), deliveryData);

      // Show success message with details
      const successMessage = (
        <div>
          <p className="font-bold">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="mr-2 text-green-600"
            />
            Order Created Successfully!
          </p>
          <div className="mt-2 space-y-1">
            <p className="text-sm">
              <span className="font-semibold">Tracking Code:</span>{" "}
              {trackingCode}
            </p>
            {distance > 0 && (
              <p className="text-sm">
                <span className="font-semibold">Distance:</span>{" "}
                {distance.toFixed(1)} km
              </p>
            )}
            {assignedCarrier && (
              <p className="text-sm text-blue-700">
                <span className="font-semibold">Assigned Carrier:</span>{" "}
                {assignedCarrier.fullName}
              </p>
            )}
            {!assignedCarrier && requiresCoordinatorReview && (
              <p className="text-sm text-amber-700">
                <span className="font-semibold">Coordinator review:</span>{" "}
                Required before assignment (
                {coordinatorReviewReasons.join(", ")})
              </p>
            )}
            {pickupCoords && deliveryCoords && (
              <p className="text-sm text-green-600">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                Location tracking initialized at pickup point
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
        priority: "standard",
        paymentMethod: "card_prepaid",
        isFragile: false,
        requiresSignature: true,
        insuranceRequired: false,
        notes: "",
      });
      setRecommendedCarriers([]);
      setRecommendationError(null);
      setSelectedCarrierId("");
      setCarrierSelectionMode("auto");
      setPickupLocation(null);
      setDeliveryLocation(null);
      setPickupConfirmed(false);
      setDeliveryConfirmed(false);

      // Navigate to order details
      setTimeout(() => {
        navigate(`/orders/${docRef.id}`);
      }, 2000);
    } catch (error: any) {
      console.error("Error creating order:", error);
      toast.error(`Failed to create order: ${error.message}`);
    } finally {
      setSubmitting(false);
      setGeocoding(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="ml-4 text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-3 py-6 sm:px-4 lg:px-6">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
              Create New Order
            </h1>
            <p className="mt-1.5 text-sm text-gray-600">
              Fill in delivery details. Package location will start at pickup
              address.
            </p>
          </div>
          <button
            onClick={() => navigate("/orders")}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            ← Back to Orders
          </button>
        </div>
      </div>

      {/* Location Status Banner */}
      <div className="mb-6 rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
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

      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
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

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1: Package */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center border-b pb-3">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
              1
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              Package Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center border-b pb-3">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
              2
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              Pickup Details (Start Location)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Address *
              </label>
              <AddressAutocomplete
                value={formData.pickupAddress}
                onChange={handlePickupAddressChange}
                onSelect={handlePickupPlaceSelect}
                onSelectWithCoords={(address, lat, lng) =>
                  handleLocationSelectWithCoords("pickup", address, lat, lng)
                }
                knownLocations={knownLocations}
                placeholder="Start typing address..."
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
                placeholder="Special instructions for pickup (e.g., call before arrival, etc.)"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Delivery Details */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center border-b pb-3">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
              3
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              Delivery Details (Destination)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Address *
              </label>
              <AddressAutocomplete
                value={formData.deliveryAddress}
                onChange={handleDeliveryAddressChange}
                onSelect={handleDeliveryPlaceSelect}
                onSelectWithCoords={(address, lat, lng) =>
                  handleLocationSelectWithCoords("delivery", address, lat, lng)
                }
                knownLocations={knownLocations}
                placeholder="Start typing address..."
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
                  label={formData.deliveryAddress || "Delivery destination"}
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
                placeholder="Special instructions for delivery (e.g., leave at reception, etc.)"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Requirements & Payment */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center border-b pb-3">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
              4
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
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

        {/* Location Summary */}
        {(formData.pickupCoordinates || formData.deliveryCoordinates) && (
          <div className="rounded-lg border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-5">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <span className="mr-2">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              Location Tracking Ready
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.pickupCoordinates && (
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="font-medium text-green-700 mb-1">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                    Pickup Location
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="truncate">{formData.pickupAddress}</div>
                    <div className="text-xs font-mono mt-1">
                      {formData.pickupCoordinates.lat.toFixed(6)},{" "}
                      {formData.pickupCoordinates.lng.toFixed(6)}
                    </div>
                  </div>
                </div>
              )}
              {formData.deliveryCoordinates && (
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="font-medium text-green-700 mb-1">
                    <FontAwesomeIcon icon={faBullseye} className="mr-2" />
                    Delivery Location
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="truncate">{formData.deliveryAddress}</div>
                    <div className="text-xs font-mono mt-1">
                      {formData.deliveryCoordinates.lat.toFixed(6)},{" "}
                      {formData.deliveryCoordinates.lng.toFixed(6)}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <p className="text-sm text-green-700 mt-4">
              {isLocationReady
                ? "Package location will start at pickup coordinates and update as the carrier moves."
                : "Please confirm both locations so we can lock accurate routing and tracking."}
            </p>
          </div>
        )}

        {/* Section 5: Recommended Carrier */}
        {formData.pickupCoordinates && formData.deliveryCoordinates && (
          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center border-b pb-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
                5
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Choose Recommended Carrier
              </h2>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Based on route, carrier distance, workload, rating and capacity,
              we ranked the best carriers for this delivery.
            </p>

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
              <p className="mt-2 text-xs text-gray-600">
                Standard orders work best with auto mode. Urgent or risky
                matches are automatically sent to coordinator review.
              </p>
            </div>

            {recommendationLoading && (
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-700 text-sm">
                Loading smart carrier recommendations...
              </div>
            )}

            {!recommendationLoading && recommendationError && (
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-700 text-sm">
                {recommendationError}
              </div>
            )}

            {!recommendationLoading &&
              !recommendationError &&
              recommendedCarriers.length > 0 && (
                <div className="space-y-3">
                  {recommendedCarriers.map((carrier, index) => {
                    const isSelected = carrier.id === selectedCarrierId;
                    return (
                      <label
                        key={carrier.id}
                        className={`block cursor-pointer rounded-lg border p-4 transition ${
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
                            }}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="font-semibold text-gray-900">
                                #{index + 1} {carrier.fullName}
                              </div>
                              <div className="text-sm text-blue-700 font-medium">
                                Score: {carrier.recommendationScore.toFixed(1)}
                              </div>
                            </div>

                            <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700">
                              <div>
                                <span className="text-gray-500">Vehicle:</span>{" "}
                                {carrier.vehicleType}
                              </div>
                              <div>
                                <span className="text-gray-500">Rating:</span>{" "}
                                {carrier.rating.toFixed(1)}
                              </div>
                              <div>
                                <span className="text-gray-500">ETA:</span> ~
                                {carrier.estimatedDeliveryHours.toFixed(1)}h
                              </div>
                              <div>
                                <span className="text-gray-500">
                                  Est. Cost:
                                </span>{" "}
                                M{carrier.estimatedPrice}
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

        {/* Form Actions */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              {formData.pickupCoordinates && formData.deliveryCoordinates && (
                <p className="text-sm text-green-600">
                  <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                  {isLocationReady
                    ? "Locations confirmed and ready for tracking"
                    : "Select and confirm both locations to proceed"}
                </p>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => navigate("/orders")}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="flex items-center rounded-md bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-blue-700 hover:to-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    {geocoding ? "Getting coordinates..." : "Creating Order..."}
                  </>
                ) : (
                  <>
                    <span className="mr-2">
                      <FontAwesomeIcon icon={faBox} />
                    </span>
                    Create Order
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Help Information */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <div className="text-blue-600 font-medium mb-2">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            Location Tracking
          </div>
          <p className="text-sm text-blue-700">
            Package location starts at pickup address and updates automatically
            as the carrier moves.
          </p>
        </div>

        <div className="rounded-lg border border-green-200 bg-green-50 p-4">
          <div className="text-green-600 font-medium mb-2">
            <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" />
            Pricing
          </div>
          <p className="text-sm text-green-700">
            Distance-based calculation: M10 per km + 15% of package value
            (minimum M50).
          </p>
        </div>

        <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
          <div className="text-purple-600 font-medium mb-2">
            <FontAwesomeIcon icon={faTruckFast} className="mr-2" />
            Carrier Assignment
          </div>
          <p className="text-sm text-purple-700">
            Choose from top recommended carriers instantly (ranked by route fit,
            workload, capacity and rating).
          </p>
        </div>
      </div>

      {showPickupManualMap && (
        <FullscreenMapPicker
          title="Pick pickup location"
          lat={formData.pickupCoordinates?.lat ?? LESOTHO_DEFAULT_CENTER.lat}
          lng={formData.pickupCoordinates?.lng ?? LESOTHO_DEFAULT_CENTER.lng}
          label={formData.pickupAddress || "Pickup location"}
          loading={resolvingPickupPin}
          onClose={() => setShowPickupManualMap(false)}
          onDone={async (lat, lng) => {
            await handlePickupMapPick(lat, lng);
            setShowPickupManualMap(false);
          }}
        />
      )}

      {showDeliveryManualMap && (
        <FullscreenMapPicker
          title="Pick delivery destination"
          lat={formData.deliveryCoordinates?.lat ?? LESOTHO_DEFAULT_CENTER.lat}
          lng={formData.deliveryCoordinates?.lng ?? LESOTHO_DEFAULT_CENTER.lng}
          label={formData.deliveryAddress || "Delivery destination"}
          loading={resolvingDeliveryPin}
          onClose={() => setShowDeliveryManualMap(false)}
          onDone={async (lat, lng) => {
            await handleDeliveryMapPick(lat, lng);
            setShowDeliveryManualMap(false);
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
    </div>
  );
}
