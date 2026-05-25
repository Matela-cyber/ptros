import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth, db, realtimeDb } from "@config";
import { doc, onSnapshot } from "firebase/firestore";
import { ref as rtdbRef, onValue } from "firebase/database";
import { MapContainer, TileLayer, CircleMarker, useMap, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CarrierService } from "./carrierService";
import { CarrierProfile } from "./types";
import toast, { Toaster } from "react-hot-toast";

interface MyProfileProps {
  user: User;
}

// Imperatively re-centers the map when coordinates change
function MapRecenter({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], map.getZoom());
  }, [lat, lng, map]);
  return null;
}

// Custom center-on-me button rendered as a Leaflet control
function CenterButton({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  return (
    <div className="leaflet-bottom leaflet-right">
      <div className="leaflet-control leaflet-bar" style={{ marginBottom: 10, marginRight: 10 }}>
        <a
          href="#"
          role="button"
          title="Center on my location"
          onClick={(e) => { e.preventDefault(); map.setView([lat, lng], 15); }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 30, height: 30 }}
        >
          <i className="fa-solid fa-location-dot" style={{ fontSize: 13, color: "#2563eb" }} />
        </a>
      </div>
    </div>
  );
}

export default function MyProfile({ user }: MyProfileProps) {
  const [profile, setProfile] = useState<CarrierProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [rtdbLocation, setRtdbLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [isSharing, setIsSharing] = useState<boolean>(() =>
    CarrierService.isLocationSharingActive(),
  );

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    whatsapp: "",
    city: "",
    address: "",
    vehicleType: "",
    licensePlate: "",
    capacityWeight: "",
    capacityVolume: "",
  });


  // Subscribe to Firestore user doc — profile data and form only
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", user.uid), (snap) => {
      if (!snap.exists()) {
        setLoading(false);
        return;
      }
      const data = snap.data();
      const p = { id: snap.id, ...data } as CarrierProfile;
      setProfile(p);
      // Populate form only on first load; don't overwrite in-progress edits
      setForm((prev) =>
        prev.fullName
          ? prev
          : {
              fullName: p.fullName ?? "",
              phone: p.phone ?? "",
              whatsapp: p.whatsapp ?? "",
              city: p.city ?? "",
              address: p.address ?? "",
              vehicleType: p.vehicleType ?? "",
              licensePlate: p.licensePlate ?? "",
              capacityWeight:
                p.capacityWeight != null ? String(p.capacityWeight) : "",
              capacityVolume:
                p.capacityVolume != null ? String(p.capacityVolume) : "",
            },
      );
      // Use Firestore currentLocation only as fallback when RTDB has no data
      setRtdbLocation((prev) => {
        if (prev) return prev; // RTDB already gave us a location
        const loc = data.currentLocation;
        return loc?.lat != null && loc?.lng != null
          ? { lat: loc.lat, lng: loc.lng }
          : null;
      });
      setLoading(false);
    });
    return () => unsub();
  }, [user.uid]);

  // RTDB subscription — primary location source (cheap, real-time)
  useEffect(() => {
    const trackRef = rtdbRef(realtimeDb, `tracks/${user.uid}`);
    const unsub = onValue(trackRef, (snap) => {
      const val = snap.val();
      if (val?.lat != null && val?.lng != null) {
        setRtdbLocation({ lat: val.lat, lng: val.lng });
      }
    });
    return () => unsub();
  }, [user.uid]);

  // Sync isSharing with the static GPS service state
  useEffect(() => {
    setIsSharing(CarrierService.isLocationSharingActive());
    const interval = setInterval(() => {
      setIsSharing(CarrierService.isLocationSharingActive());
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  const handleSave = async () => {
    setSaving(true);
    try {
      const ok = await CarrierService.updateCarrierProfile({
        fullName: form.fullName || undefined,
        phone: form.phone || undefined,
        whatsapp: form.whatsapp || undefined,
        city: form.city || undefined,
        address: form.address || undefined,
        vehicleType: form.vehicleType || undefined,
        licensePlate: form.licensePlate || undefined,
        capacityWeight: form.capacityWeight
          ? parseFloat(form.capacityWeight)
          : null,
        capacityVolume: form.capacityVolume
          ? parseFloat(form.capacityVolume)
          : null,
      });
      if (ok) {
        toast.success("Profile saved");
        setEditMode(false);
        // form will auto-refresh from onSnapshot — no manual reload needed
      } else {
        toast.error("Failed to save");
      }
    } catch {
      toast.error("Failed to save");
    } finally {
      setSaving(false);
    }
  };

  // markerPos: show wherever we have data; color tells live vs last-known
  const firestoreLocation = profile?.currentLocation
    ? { lat: profile.currentLocation.lat, lng: profile.currentLocation.lng }
    : null;
  const markerPos = rtdbLocation ?? firestoreLocation;
  const isLive = !!rtdbLocation && isSharing;

  const statusColors: Record<string, string> = {
    active: "bg-green-100 text-green-700 border-green-300",
    inactive: "bg-gray-100 text-gray-600 border-gray-300",
    busy: "bg-yellow-100 text-yellow-700 border-yellow-300",
    pending: "bg-orange-100 text-orange-600 border-orange-300",
  };
  const statusColor =
    statusColors[profile?.status ?? "inactive"] ?? statusColors.inactive;
  const initials = (form.fullName || user.email || "C")
    .slice(0, 2)
    .toUpperCase();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <i className="fa-solid fa-spinner animate-spin text-blue-500 text-2xl" />
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto space-y-4 pb-6">
      <Toaster position="top-center" />

      {/* ── Header card ── */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-bold text-gray-900 truncate">
            {form.fullName || user.email}
          </h1>
          <p className="text-sm text-gray-500 truncate">{user.email}</p>
          <div className="flex flex-wrap items-center gap-2 mt-1.5">
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${statusColor}`}
            >
              {profile?.status ?? "inactive"}
            </span>
            {profile?.isApproved ? (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border bg-blue-50 text-blue-700 border-blue-200">
                <i className="fa-solid fa-circle-check mr-1" />
                Approved
              </span>
            ) : (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border bg-orange-50 text-orange-600 border-orange-200">
                Pending approval
              </span>
            )}
          </div>
        </div>
        <button
          onClick={() => setEditMode((e) => !e)}
          className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition ${
            editMode
              ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
              : "bg-blue-50 text-blue-600 hover:bg-blue-100"
          }`}
          aria-label={editMode ? "Cancel edit" : "Edit profile"}
        >
          <i
            className={`fa-solid ${editMode ? "fa-xmark" : "fa-pen"} text-sm`}
          />
        </button>
      </div>

      {/* ── Business Overview ── */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
        <h2 className="font-semibold text-gray-700 text-sm mb-3">
          Business Overview
        </h2>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center bg-blue-50 rounded-xl py-3">
            <p className="text-2xl font-bold text-blue-600">
              {profile?.completedDeliveries ?? 0}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">Deliveries</p>
          </div>
          <div className="text-center bg-green-50 rounded-xl py-3">
            <p className="text-lg font-bold text-green-600 leading-tight">
              M {(profile?.earnings ?? 0).toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">Total Earned</p>
          </div>
          <div className="text-center bg-yellow-50 rounded-xl py-3">
            <p className="text-2xl font-bold text-yellow-500">
              {profile?.rating ? profile.rating.toFixed(1) : "—"}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {profile?.rating ? "Rating ★" : "No rating"}
            </p>
          </div>
        </div>
      </div>

      {/* ── Live location map ── */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="px-4 pt-3 pb-2 flex items-center justify-between">
          <h2 className="font-semibold text-gray-700 text-sm">My Location</h2>
          {isLive ? (
            <span className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live
            </span>
          ) : markerPos ? (
            <span className="text-xs text-gray-500 font-medium">
              Last location
            </span>
          ) : (
            <span className="text-xs text-gray-400">No location saved yet</span>
          )}
        </div>
        <div className="relative" style={{ height: 220 }}>
          {markerPos ? (
            <MapContainer
              center={[markerPos.lat, markerPos.lng]}
              zoom={15}
              style={{ width: "100%", height: "220px" }}
              zoomControl={true}
              attributionControl={false}
            >
              <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="Street">
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Satellite">
                  <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                </LayersControl.BaseLayer>
              </LayersControl>
              <MapRecenter lat={markerPos.lat} lng={markerPos.lng} />
              <CenterButton lat={markerPos.lat} lng={markerPos.lng} />
              <CircleMarker
                center={[markerPos.lat, markerPos.lng]}
                radius={9}
                pathOptions={{
                  fillColor: isLive ? "#2563eb" : "#6b7280",
                  fillOpacity: 1,
                  color: "white",
                  weight: 3,
                }}
              />
            </MapContainer>
          ) : (
            <div className="h-full bg-gray-100 flex flex-col items-center justify-center gap-2 text-gray-400">
              <i className="fa-solid fa-location-crosshairs text-2xl" />
              <span className="text-sm text-center px-4">
                Enable location sharing on Dashboard to see your pin
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── Personal Info ── */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-4 shadow-sm">
        <h2 className="font-semibold text-gray-700 text-sm">Personal Info</h2>
        {(
          [
            {
              label: "Full Name",
              key: "fullName",
              icon: "fa-user",
              type: "text",
            },
            { label: "Phone", key: "phone", icon: "fa-phone", type: "tel" },
            {
              label: "WhatsApp",
              key: "whatsapp",
              icon: "fa-brands fa-whatsapp",
              type: "tel",
            },
            { label: "City", key: "city", icon: "fa-city", type: "text" },
            {
              label: "Address",
              key: "address",
              icon: "fa-location-dot",
              type: "text",
            },
          ] as const
        ).map(({ label, key, icon, type }) => (
          <div key={key}>
            <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1.5">
              <i className={`fa-solid ${icon} w-3.5 text-gray-400`} />
              {label}
            </label>
            {editMode ? (
              <input
                type={type}
                value={form[key]}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [key]: e.target.value }))
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            ) : (
              <p className="text-sm text-gray-800">
                {form[key] || (
                  <span className="text-gray-400 italic">Not set</span>
                )}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* ── Vehicle & Capacity ── */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-4 shadow-sm">
        <h2 className="font-semibold text-gray-700 text-sm">
          Vehicle & Carrying Capacity
        </h2>
        {(
          [
            { label: "Vehicle Type", key: "vehicleType", icon: "fa-truck" },
            { label: "License Plate", key: "licensePlate", icon: "fa-id-card" },
          ] as const
        ).map(({ label, key, icon }) => (
          <div key={key}>
            <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1.5">
              <i className={`fa-solid ${icon} w-3.5 text-gray-400`} />
              {label}
            </label>
            {editMode ? (
              <input
                type="text"
                value={form[key]}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [key]: e.target.value }))
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            ) : (
              <p className="text-sm text-gray-800">
                {form[key] || (
                  <span className="text-gray-400 italic">Not set</span>
                )}
              </p>
            )}
          </div>
        ))}

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1.5">
              <i className="fa-solid fa-weight-hanging w-3.5 text-gray-400" />
              Max Weight (kg)
            </label>
            {editMode ? (
              <input
                type="number"
                min="0"
                value={form.capacityWeight}
                onChange={(e) =>
                  setForm((f) => ({ ...f, capacityWeight: e.target.value }))
                }
                placeholder="e.g. 500"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            ) : (
              <p className="text-sm text-gray-800 font-medium">
                {form.capacityWeight ? (
                  `${form.capacityWeight} kg`
                ) : (
                  <span className="text-gray-400 italic font-normal">
                    Not set
                  </span>
                )}
              </p>
            )}
          </div>
          <div>
            <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1.5">
              <i className="fa-solid fa-cube w-3.5 text-gray-400" />
              Max Volume (m³)
            </label>
            {editMode ? (
              <input
                type="number"
                min="0"
                step="0.1"
                value={form.capacityVolume}
                onChange={(e) =>
                  setForm((f) => ({ ...f, capacityVolume: e.target.value }))
                }
                placeholder="e.g. 2.5"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            ) : (
              <p className="text-sm text-gray-800 font-medium">
                {form.capacityVolume ? (
                  `${form.capacityVolume} m³`
                ) : (
                  <span className="text-gray-400 italic font-normal">
                    Not set
                  </span>
                )}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Save button (edit mode only) ── */}
      {editMode && (
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full bg-blue-600 active:bg-blue-700 text-white rounded-2xl py-3 font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60 shadow-sm transition"
        >
          {saving ? (
            <i className="fa-solid fa-spinner animate-spin" />
          ) : (
            <i className="fa-solid fa-floppy-disk" />
          )}
          {saving ? "Saving…" : "Save Changes"}
        </button>
      )}

      {/* ── Sign out ── */}
      <button
        onClick={() => signOut(auth)}
        className="w-full bg-white border border-red-200 text-red-500 rounded-2xl py-3 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-red-50 transition shadow-sm"
      >
        <i className="fa-solid fa-right-from-bracket" />
        Sign Out
      </button>
    </div>
  );
}
