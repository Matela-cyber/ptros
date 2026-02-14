// apps/customer/src/Profile.tsx
import { useState } from "react";
import { db } from "@config";
import { doc, updateDoc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";

type Props = {
  user: any;
  userProfile?: any;
};

export default function Profile({ user, userProfile }: Props) {
  const [profile, setProfile] = useState({
    fullName: userProfile?.fullName || "",
    email: user?.email || "",
    phone: userProfile?.phone || "",
    address: userProfile?.address || "",
    whatsapp: userProfile?.whatsapp || "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      if (user) {
        await updateDoc(doc(db, "users", user.uid), {
          fullName: profile.fullName,
          phone: profile.phone,
          address: profile.address,
          whatsapp: profile.whatsapp,
          updatedAt: new Date(),
        });
        toast.success("Profile updated successfully!");
        setEditing(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
        <p className="text-gray-600 mt-2">Manage your personal information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Personal Information</h2>
              <button
                onClick={() => setEditing(!editing)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                {editing ? "Cancel" : "Edit"}
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={profile.email}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={profile.whatsapp}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                />
              </div>

              {editing && (
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Account Info */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold mb-4">Account Information</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500">Member Since</p>
                <p className="font-medium">
                  {userProfile?.createdAt
                    ? new Date(
                        userProfile.createdAt.toDate?.() ||
                          userProfile.createdAt
                      ).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Account Status</p>
                <p className="font-medium text-green-600">Active</p>
              </div>
              <div>
                <p className="text-gray-500">Verified Email</p>
                <p className="font-medium">✓ Yes</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold mb-4">Activity</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <p className="text-gray-600">Total Orders</p>
                <p className="font-bold">12</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Completed</p>
                <p className="font-bold text-green-600">10</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">In Progress</p>
                <p className="font-bold text-blue-600">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
