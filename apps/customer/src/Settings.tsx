// apps/customer/src/Settings.tsx
import { useState } from "react";
import { auth } from "@config";
import { signOut, deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

export default function Settings() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
    showProfile: true,
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    toast.success("Preference updated");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Failed to logout");
    }
  };

  const handleDeleteAccount = async () => {
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (user) {
        await deleteUser(user);
        toast.success("Account deleted successfully");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("Failed to delete account. Please try again later.");
    } finally {
      setLoading(false);
      setShowDeleteConfirm(false);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your preferences and account</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Notifications */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-6">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">Email Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive updates about your deliveries via email
                </p>
              </div>
              <button
                onClick={() => handleToggle("emailNotifications")}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.emailNotifications ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.emailNotifications ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">SMS Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive text message updates about your deliveries
                </p>
              </div>
              <button
                onClick={() => handleToggle("smsNotifications")}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.smsNotifications ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.smsNotifications ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">Push Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive push notifications from the app
                </p>
              </div>
              <button
                onClick={() => handleToggle("pushNotifications")}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.pushNotifications ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.pushNotifications ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-6">Privacy</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">Public Profile</p>
                <p className="text-sm text-gray-500">
                  Let other users see your profile information
                </p>
              </div>
              <button
                onClick={() => handleToggle("showProfile")}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  settings.showProfile ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    settings.showProfile ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-6">Security</h2>
          <button className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 mb-3">
            🔐 Change Password
          </button>
          <button className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
            🔑 Two-Factor Authentication
          </button>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-6">Account</h2>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 mb-3"
          >
            🚪 Logout
          </button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="w-full px-4 py-3 border border-red-300 rounded-lg text-red-600 font-medium hover:bg-red-50"
          >
            🗑️ Delete Account
          </button>
        </div>

        {/* Delete Confirmation */}
        {showDeleteConfirm && (
          <div className="bg-red-50 rounded-xl shadow p-6 border border-red-200">
            <h3 className="text-lg font-bold text-red-800 mb-3">
              ⚠️ Delete Account
            </h3>
            <p className="text-red-700 mb-6">
              Are you sure you want to delete your account? This action cannot be
              undone and all your data will be permanently removed.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2 border border-red-300 rounded-lg text-red-600 font-medium hover:bg-red-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                disabled={loading}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Deleting..." : "Delete Permanently"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
