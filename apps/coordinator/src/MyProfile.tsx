import { useEffect, useState } from "react";
import { auth, db } from "@config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import { FaFloppyDisk, FaUserPen } from "react-icons/fa6";

type EditableProfile = {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  avatarUrl: string;
};

const emptyProfile: EditableProfile = {
  fullName: "",
  phone: "",
  address: "",
  city: "",
  avatarUrl: "",
};

export default function MyProfile() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profileEmail, setProfileEmail] = useState("");
  const [profile, setProfile] = useState<EditableProfile>(emptyProfile);

  useEffect(() => {
    const loadProfile = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        setLoading(false);
        return;
      }

      try {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
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
        } else {
          setProfileEmail(currentUser.email || "");
        }
      } catch (error) {
        console.error("Failed to load profile:", error);
        toast.error("Could not load your profile.");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const updateProfile = <K extends keyof EditableProfile>(
    key: K,
    value: EditableProfile[K],
  ) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const saveMyProfile = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      toast.error("You need to be logged in.");
      return;
    }

    setSaving(true);
    try {
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
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Toaster position="top-right" />

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-3xl font-bold text-gray-800 inline-flex items-center gap-3">
          <FaUserPen /> My Profile
        </h1>
        <p className="text-gray-600 mt-2">
          Update your coordinator profile details.
        </p>
      </div>

      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
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
            disabled={saving}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center gap-2 disabled:opacity-60"
          >
            <FaFloppyDisk /> {saving ? "Saving..." : "Save My Profile"}
          </button>
        </div>
      </section>
    </div>
  );
}
