// apps/coordinator/src/Settings.tsx
import { useEffect, useMemo, useState } from "react";
import { auth, db } from "@config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import {
  FaFloppyDisk,
  FaMoon,
  FaRotateLeft,
  FaSun,
  FaUserPen,
  FaUsersGear,
  FaXmark,
} from "react-icons/fa6";
import {
  CoordinatorSettings,
  applyDarkMode,
  defaultSettings,
  loadCoordinatorSettings,
  saveCoordinatorSettings,
} from "./settingsStore";

type EditableProfile = {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  avatarUrl: string;
};

type UserProfileRow = {
  id: string;
  role: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  status: string;
  avatarUrl: string;
};

export default function Settings() {
  const [settings, setSettings] =
    useState<CoordinatorSettings>(defaultSettings);
  const [profile, setProfile] = useState<EditableProfile>({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    avatarUrl: "",
  });
  const [profileEmail, setProfileEmail] = useState("");
  const [users, setUsers] = useState<UserProfileRow[]>([]);
  const [userSearch, setUserSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<
    "all" | "carrier" | "customer" | "coordinator"
  >("all");
  const [editingUser, setEditingUser] = useState<UserProfileRow | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = loadCoordinatorSettings();
      setSettings(stored);
      // Initial mode remains normal until user preference is loaded from DB.
      applyDarkMode(false);
    } catch (error) {
      console.error("Failed to load settings:", error);
      toast.error("Could not load saved settings, using defaults.");
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    const loadProfileData = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      try {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (!userSnap.exists()) return;

        const data = userSnap.data();
        setProfileEmail(data.email || currentUser.email || "");
        setProfile({
          fullName: data.fullName || "",
          phone: data.phone || "",
          address: data.address || "",
          city: data.city || "",
          avatarUrl:
            data.avatarUrl ||
            data.photoURL ||
            data.photoUrl ||
            data.profileImage ||
            "",
        });

        const dbDarkMode = Boolean(
          data?.preferences?.darkMode ?? data?.darkMode ?? false,
        );
        setSettings((prev) => ({ ...prev, darkMode: dbDarkMode }));
        applyDarkMode(dbDarkMode);
      } catch (error) {
        console.error("Failed to load profile:", error);
      }
    };

    if (loaded) {
      loadProfileData();
    }
  }, [loaded]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersQuery = query(
          collection(db, "users"),
          where("role", "in", ["carrier", "customer", "coordinator"]),
        );
        const snap = await getDocs(usersQuery);
        const rows: UserProfileRow[] = snap.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            role: data.role || "customer",
            fullName:
              data.fullName || data.name || data.displayName || "Unnamed User",
            email: data.email || "",
            phone: data.phone || "",
            city: data.city || "",
            status: data.status || "active",
            avatarUrl:
              data.avatarUrl ||
              data.photoURL ||
              data.photoUrl ||
              data.profileImage ||
              "",
          };
        });

        rows.sort((a, b) => a.fullName.localeCompare(b.fullName));
        setUsers(rows);
      } catch (error) {
        console.error("Failed to load users:", error);
      }
    };

    if (loaded) {
      loadUsers();
    }
  }, [loaded]);

  const update = <K extends keyof CoordinatorSettings>(
    key: K,
    value: CoordinatorSettings[K],
  ) => {
    setSettings((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "darkMode") {
        applyDarkMode(Boolean(value));
      }
      return next;
    });
  };

  const saveSettings = async () => {
    try {
      saveCoordinatorSettings(settings);
      applyDarkMode(settings.darkMode);

      const currentUser = auth.currentUser;
      if (currentUser) {
        await updateDoc(doc(db, "users", currentUser.uid), {
          darkMode: settings.darkMode,
          "preferences.darkMode": settings.darkMode,
          updatedAt: new Date(),
        });
      }

      toast.success("Settings saved successfully.");
    } catch (error) {
      console.error("Failed to save settings:", error);
      toast.error("Failed to save settings.");
    }
  };

  const resetSettings = async () => {
    const resetValues = { ...defaultSettings, darkMode: false };
    setSettings(resetValues);
    saveCoordinatorSettings(defaultSettings);
    applyDarkMode(false);

    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        await updateDoc(doc(db, "users", currentUser.uid), {
          darkMode: false,
          "preferences.darkMode": false,
          updatedAt: new Date(),
        });
      }
      toast.success("Settings reset to defaults.");
    } catch (error) {
      console.error("Failed to reset dark mode in DB:", error);
      toast.error("Settings reset locally, but failed to sync dark mode.");
    }
  };

  const updateProfile = <K extends keyof EditableProfile>(
    key: K,
    value: EditableProfile[K],
  ) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const saveMyProfile = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        toast.error("You need to be logged in.");
        return;
      }

      await updateDoc(doc(db, "users", currentUser.uid), {
        fullName: profile.fullName,
        phone: profile.phone,
        address: profile.address,
        city: profile.city,
        avatarUrl: profile.avatarUrl,
        updatedAt: new Date(),
      });

      toast.success("Your profile has been updated.");
    } catch (error) {
      console.error("Failed to save profile:", error);
      toast.error("Could not save profile changes.");
    }
  };

  const filteredUsers = useMemo(() => {
    const term = userSearch.trim().toLowerCase();
    return users.filter((user) => {
      if (roleFilter !== "all" && user.role !== roleFilter) return false;
      if (!term) return true;

      return (
        user.fullName.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.phone.toLowerCase().includes(term) ||
        user.city.toLowerCase().includes(term)
      );
    });
  }, [users, userSearch, roleFilter]);

  const saveUserProfile = async () => {
    if (!editingUser) return;
    try {
      await updateDoc(doc(db, "users", editingUser.id), {
        fullName: editingUser.fullName,
        phone: editingUser.phone,
        city: editingUser.city,
        status: editingUser.status,
        avatarUrl: editingUser.avatarUrl,
        updatedAt: new Date(),
      });

      setUsers((prev) =>
        prev.map((row) => (row.id === editingUser.id ? editingUser : row)),
      );
      setEditingUser(null);
      toast.success("User profile updated.");
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Could not update this user profile.");
    }
  };

  if (!loaded) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Toaster position="top-right" />

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Coordinator Settings
        </h1>
        <p className="text-gray-600 mt-2">
          Manage appearance, your profile, and team user profiles from one
          place.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Operations</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Auto-refresh interval (seconds)
            </label>
            <input
              type="number"
              min={10}
              max={300}
              value={settings.autoRefreshSeconds}
              onChange={(e) =>
                update("autoRefreshSeconds", Number(e.target.value) || 30)
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Used by dashboard/live monitoring pages for polling and refresh.
            </p>
          </div>

          <div className="p-4 border border-gray-200 rounded-xl bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-black inline-flex items-center gap-2">
                  {settings.darkMode ? <FaMoon /> : <FaSun />} Dark mode
                </p>
                <p className="text-xs text-black mt-1">
                  Applied instantly across the coordinator portal.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={(e) => update("darkMode", e.target.checked)}
                className="h-4 w-4"
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>

          <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <span className="text-sm font-medium text-gray-700">
              Desktop notifications
            </span>
            <input
              type="checkbox"
              checked={settings.enableDesktopNotifications}
              onChange={(e) =>
                update("enableDesktopNotifications", e.target.checked)
              }
              className="h-4 w-4"
            />
          </label>

          <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <span className="text-sm font-medium text-gray-700">
              Email alerts
            </span>
            <input
              type="checkbox"
              checked={settings.emailAlerts}
              onChange={(e) => update("emailAlerts", e.target.checked)}
              className="h-4 w-4"
            />
          </label>

          <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <span className="text-sm font-medium text-gray-700">
              SMS alerts
            </span>
            <input
              type="checkbox"
              checked={settings.smsAlerts}
              onChange={(e) => update("smsAlerts", e.target.checked)}
              className="h-4 w-4"
            />
          </label>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800">Map Defaults</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default map style
              </label>
              <select
                value={settings.defaultMapStyle}
                onChange={(e) =>
                  update(
                    "defaultMapStyle",
                    e.target.value as CoordinatorSettings["defaultMapStyle"],
                  )
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="roadmap">Roadmap</option>
                <option value="satellite">Satellite</option>
                <option value="hybrid">Hybrid</option>
                <option value="terrain">Terrain</option>
              </select>
            </div>

            <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg mt-7 md:mt-0">
              <span className="text-sm font-medium text-gray-700">
                Show traffic by default
              </span>
              <input
                type="checkbox"
                checked={settings.showTrafficByDefault}
                onChange={(e) =>
                  update("showTrafficByDefault", e.target.checked)
                }
                className="h-4 w-4"
              />
            </label>
          </div>
        </section>
      </div>

      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 inline-flex items-center gap-2 mb-4">
          <FaUserPen /> My Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full name
            </label>
            <input
              type="text"
              value={profile.fullName}
              onChange={(e) => updateProfile("fullName", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={profileEmail}
              disabled
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="text"
              value={profile.phone}
              onChange={(e) => updateProfile("phone", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              value={profile.city}
              onChange={(e) => updateProfile("city", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              value={profile.address}
              onChange={(e) => updateProfile("address", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Avatar image URL
            </label>
            <input
              type="url"
              value={profile.avatarUrl}
              onChange={(e) => updateProfile("avatarUrl", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={saveMyProfile}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center gap-2"
          >
            <FaFloppyDisk /> Save My Profile
          </button>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 inline-flex items-center gap-2 mb-4">
          <FaUsersGear /> Manage Other Profiles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <input
            type="text"
            placeholder="Search users by name, email, phone or city..."
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
            className="md:col-span-2 p-3 border border-gray-300 rounded-lg"
          />
          <select
            value={roleFilter}
            onChange={(e) =>
              setRoleFilter(
                e.target.value as
                  | "all"
                  | "carrier"
                  | "customer"
                  | "coordinator",
              )
            }
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option value="all">All roles</option>
            <option value="carrier">Carriers</option>
            <option value="customer">Customers</option>
            <option value="coordinator">Coordinators</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  User
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Contact
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        {user.avatarUrl ? (
                          <img
                            src={user.avatarUrl}
                            alt={user.fullName}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          user.fullName[0] || "U"
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {user.fullName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {user.city || "No city"}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 capitalize">
                    {user.role}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    <p>{user.email || "No email"}</p>
                    <p className="text-xs text-gray-500">
                      {user.phone || "No phone"}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 capitalize">
                    {user.status}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setEditingUser(user)}
                      className="px-3 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 text-sm"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
        <button
          type="button"
          onClick={resetSettings}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 inline-flex items-center justify-center gap-2"
        >
          <FaRotateLeft /> Reset Defaults
        </button>
        <button
          type="button"
          onClick={saveSettings}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center justify-center gap-2"
        >
          <FaFloppyDisk /> Save Settings
        </button>
      </div>

      {editingUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Edit User Profile
              </h3>
              <button
                onClick={() => setEditingUser(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaXmark />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full name
                </label>
                <input
                  value={editingUser.fullName}
                  onChange={(e) =>
                    setEditingUser((prev) =>
                      prev ? { ...prev, fullName: e.target.value } : prev,
                    )
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  value={editingUser.phone}
                  onChange={(e) =>
                    setEditingUser((prev) =>
                      prev ? { ...prev, phone: e.target.value } : prev,
                    )
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  value={editingUser.city}
                  onChange={(e) =>
                    setEditingUser((prev) =>
                      prev ? { ...prev, city: e.target.value } : prev,
                    )
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={editingUser.status}
                  onChange={(e) =>
                    setEditingUser((prev) =>
                      prev ? { ...prev, status: e.target.value } : prev,
                    )
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <input
                  disabled
                  value={editingUser.role}
                  className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 capitalize"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Avatar URL
                </label>
                <input
                  value={editingUser.avatarUrl}
                  onChange={(e) =>
                    setEditingUser((prev) =>
                      prev ? { ...prev, avatarUrl: e.target.value } : prev,
                    )
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setEditingUser(null)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={saveUserProfile}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center gap-2"
              >
                <FaFloppyDisk /> Save User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
