// apps/customer/src/Settings.tsx
import { useEffect, useRef, useState } from "react";
import { auth, db } from "@config";
import {
  signOut,
  deleteUser,
  EmailAuthProvider,
  multiFactor,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  RecaptchaVerifier,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faKey,
  faLock,
  faRightFromBracket,
  faTrashCan,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  applyDarkMode,
  getStoredSettings,
  saveStoredSettings,
} from "./settingsStore";

export default function Settings() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
    showProfile: true,
    darkMode: false,
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [changingPassword, setChangingPassword] = useState(false);
  const [mfaPhoneNumber, setMfaPhoneNumber] = useState("");
  const [mfaPassword, setMfaPassword] = useState("");
  const [mfaVerificationCode, setMfaVerificationCode] = useState("");
  const [mfaVerificationId, setMfaVerificationId] = useState("");
  const [mfaLoading, setMfaLoading] = useState(false);
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);

  useEffect(() => {
    const loadSecurityProfile = async () => {
      const user = auth.currentUser;
      if (!user) {
        const stored = getStoredSettings();
        setSettings((prev) => ({ ...prev, darkMode: stored.darkMode }));
        applyDarkMode(stored.darkMode);
        return;
      }

      setMfaEnabled(multiFactor(user).enrolledFactors.length > 0);

      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setMfaPhoneNumber(String(data.phone || data.whatsapp || ""));

          const docDarkMode = Boolean(
            data?.preferences?.darkMode ?? data?.darkMode,
          );
          setSettings((prev) => ({ ...prev, darkMode: docDarkMode }));
          applyDarkMode(docDarkMode);
          saveStoredSettings({ darkMode: docDarkMode });
        } else {
          const stored = getStoredSettings();
          setSettings((prev) => ({ ...prev, darkMode: stored.darkMode }));
          applyDarkMode(stored.darkMode);
        }
      } catch (error) {
        console.error("Error loading security profile:", error);
      }
    };

    loadSecurityProfile();

    return () => {
      recaptchaVerifierRef.current?.clear();
      recaptchaVerifierRef.current = null;
    };
  }, []);

  const normalizePhoneNumber = (value: string) => {
    const digits = value.replace(/[\s\-()]/g, "");

    if (!digits) return "";
    if (digits.startsWith("+")) return digits;
    if (digits.startsWith("266")) return `+${digits}`;
    if (/^\d{8}$/.test(digits)) return `+266${digits}`;
    return digits;
  };

  const ensureRecaptchaVerifier = async () => {
    if (recaptchaVerifierRef.current) {
      return recaptchaVerifierRef.current;
    }

    if (!recaptchaContainerRef.current) {
      throw new Error("reCAPTCHA container not ready");
    }

    const verifier = new RecaptchaVerifier(
      auth,
      recaptchaContainerRef.current,
      {
        size: "invisible",
      },
    );

    await verifier.render();
    recaptchaVerifierRef.current = verifier;
    return verifier;
  };

  const handleToggle = async (key: keyof typeof settings) => {
    const nextSettings = {
      ...settings,
      [key]: !settings[key],
    };

    setSettings(nextSettings);

    if (key === "darkMode") {
      applyDarkMode(Boolean(nextSettings.darkMode));
      saveStoredSettings({ darkMode: Boolean(nextSettings.darkMode) });
    }

    const user = auth.currentUser;
    if (user) {
      try {
        await updateDoc(doc(db, "users", user.uid), {
          preferences: nextSettings,
          darkMode: Boolean(nextSettings.darkMode),
        });
      } catch (error) {
        console.error("Error saving preference:", error);
        toast.error("Could not sync preference, saved locally.");
        return;
      }
    }

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

  const handleChangePassword = async () => {
    const user = auth.currentUser;

    if (!user) {
      toast.error("Please login again to change password.");
      return;
    }

    if (!user.email) {
      toast.error("Account email not found. Please login again.");
      return;
    }

    if (!passwordForm.currentPassword.trim()) {
      toast.error("Enter your current password.");
      return;
    }

    if (!passwordForm.newPassword.trim()) {
      toast.error("Enter a new password.");
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      toast.error("New password must be at least 8 characters.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
      toast.error("New password and confirmation do not match.");
      return;
    }

    if (passwordForm.currentPassword === passwordForm.newPassword) {
      toast.error("New password must be different from current password.");
      return;
    }

    setChangingPassword(true);
    try {
      const credential = EmailAuthProvider.credential(
        user.email,
        passwordForm.currentPassword,
      );

      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, passwordForm.newPassword);

      toast.success("Password changed successfully.");
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
      setShowChangePassword(false);
    } catch (error) {
      console.error("Error changing password:", error);
      const err = error as { code?: string };

      if (
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential"
      ) {
        toast.error("Current password is incorrect.");
      } else if (err.code === "auth/weak-password") {
        toast.error("New password is too weak.");
      } else if (err.code === "auth/requires-recent-login") {
        toast.error("Please log in again and retry changing your password.");
      } else {
        toast.error("Failed to change password. Please try again later.");
      }
    } finally {
      setChangingPassword(false);
    }
  };

  const handleStartTwoFactorEnrollment = async () => {
    const user = auth.currentUser;

    if (!user) {
      toast.error("Please login again to configure two-factor authentication.");
      return;
    }

    if (!user.email) {
      toast.error("Account email not found. Please login again.");
      return;
    }

    if (!mfaPassword.trim()) {
      toast.error("Enter your current password to continue.");
      return;
    }

    const normalizedPhone = normalizePhoneNumber(mfaPhoneNumber);
    if (!/^\+[1-9]\d{7,14}$/.test(normalizedPhone)) {
      toast.error("Enter a valid phone number with country code.");
      return;
    }

    setMfaLoading(true);
    try {
      const credential = EmailAuthProvider.credential(user.email, mfaPassword);
      await reauthenticateWithCredential(user, credential);

      const verifier = await ensureRecaptchaVerifier();
      const mfaSession = await multiFactor(user).getSession();
      const phoneAuthProvider = new PhoneAuthProvider(auth);

      const verificationId = await phoneAuthProvider.verifyPhoneNumber(
        {
          phoneNumber: normalizedPhone,
          session: mfaSession,
        },
        verifier,
      );

      setMfaPhoneNumber(normalizedPhone);
      setMfaVerificationId(verificationId);
      toast.success("Verification code sent to your phone.");
    } catch (error) {
      console.error("Error starting 2FA enrollment:", error);
      const err = error as { code?: string };

      if (
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential"
      ) {
        toast.error("Current password is incorrect.");
      } else if (err.code === "auth/operation-not-allowed") {
        toast.error(
          "Phone authentication must be enabled in Firebase Console.",
        );
      } else if (err.code === "auth/invalid-phone-number") {
        toast.error("Phone number format is invalid.");
      } else if (err.code === "auth/quota-exceeded") {
        toast.error("SMS quota exceeded. Please try again later.");
      } else {
        toast.error("Failed to start two-factor setup. Please try again.");
      }
    } finally {
      setMfaLoading(false);
    }
  };

  const handleConfirmTwoFactorEnrollment = async () => {
    const user = auth.currentUser;

    if (!user) {
      toast.error("Please login again to configure two-factor authentication.");
      return;
    }

    if (!mfaVerificationId || !mfaVerificationCode.trim()) {
      toast.error("Enter the SMS verification code.");
      return;
    }

    setMfaLoading(true);
    try {
      const phoneCredential = PhoneAuthProvider.credential(
        mfaVerificationId,
        mfaVerificationCode.trim(),
      );
      const multiFactorAssertion =
        PhoneMultiFactorGenerator.assertion(phoneCredential);

      await multiFactor(user).enroll(multiFactorAssertion, mfaPhoneNumber);
      await updateDoc(doc(db, "users", user.uid), {
        phone: mfaPhoneNumber,
        twoFactorEnabled: true,
      });

      setMfaEnabled(true);
      setMfaVerificationId("");
      setMfaVerificationCode("");
      setMfaPassword("");
      toast.success("Two-factor authentication enabled.");
    } catch (error) {
      console.error("Error confirming 2FA enrollment:", error);
      const err = error as { code?: string };

      if (err.code === "auth/invalid-verification-code") {
        toast.error("Invalid SMS code. Please try again.");
      } else {
        toast.error("Failed to enable two-factor authentication.");
      }
    } finally {
      setMfaLoading(false);
    }
  };

  const handleDisableTwoFactor = async () => {
    const user = auth.currentUser;

    if (!user) {
      toast.error("Please login again to update two-factor settings.");
      return;
    }

    if (!user.email) {
      toast.error("Account email not found. Please login again.");
      return;
    }

    if (!mfaPassword.trim()) {
      toast.error(
        "Enter your current password to disable two-factor authentication.",
      );
      return;
    }

    const factor = multiFactor(user).enrolledFactors[0];
    if (!factor) {
      setMfaEnabled(false);
      toast.error("No enrolled second factor was found.");
      return;
    }

    setMfaLoading(true);
    try {
      const credential = EmailAuthProvider.credential(user.email, mfaPassword);
      await reauthenticateWithCredential(user, credential);
      await multiFactor(user).unenroll(factor);
      await updateDoc(doc(db, "users", user.uid), {
        twoFactorEnabled: false,
      });

      setMfaEnabled(false);
      setMfaVerificationId("");
      setMfaVerificationCode("");
      setMfaPassword("");
      toast.success("Two-factor authentication disabled.");
    } catch (error) {
      console.error("Error disabling 2FA:", error);
      const err = error as { code?: string };

      if (
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential"
      ) {
        toast.error("Current password is incorrect.");
      } else {
        toast.error("Failed to disable two-factor authentication.");
      }
    } finally {
      setMfaLoading(false);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600 mt-2">
          Manage your preferences and account
        </p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Appearance */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-6">Appearance</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Dark Mode</p>
              <p className="text-sm text-gray-500">
                Reduce brightness and use a darker interface theme
              </p>
            </div>
            <button
              onClick={() => handleToggle("darkMode")}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                settings.darkMode ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span className="absolute left-2 text-[10px] text-white/90">
                <FontAwesomeIcon icon={faCircleHalfStroke} />
              </span>
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  settings.darkMode ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

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
                    settings.emailNotifications
                      ? "translate-x-7"
                      : "translate-x-1"
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
                    settings.smsNotifications
                      ? "translate-x-7"
                      : "translate-x-1"
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
                    settings.pushNotifications
                      ? "translate-x-7"
                      : "translate-x-1"
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
          <button
            onClick={() => setShowChangePassword((prev) => !prev)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 mb-3"
          >
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Change Password
          </button>

          {showChangePassword && (
            <div className="mb-3 rounded-lg border border-gray-200 bg-gray-50 p-4 space-y-3">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) =>
                    setPasswordForm((prev) => ({
                      ...prev,
                      currentPassword: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="current-password"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) =>
                    setPasswordForm((prev) => ({
                      ...prev,
                      newPassword: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="new-password"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={passwordForm.confirmNewPassword}
                  onChange={(e) =>
                    setPasswordForm((prev) => ({
                      ...prev,
                      confirmNewPassword: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="new-password"
                />
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setShowChangePassword(false);
                    setPasswordForm({
                      currentPassword: "",
                      newPassword: "",
                      confirmNewPassword: "",
                    });
                  }}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleChangePassword}
                  disabled={changingPassword}
                  className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {changingPassword ? "Updating..." : "Update Password"}
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowTwoFactor((prev) => !prev)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
          >
            <FontAwesomeIcon icon={faKey} className="mr-2" />
            Two-Factor Authentication
          </button>

          {showTwoFactor && (
            <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">
                    SMS two-factor authentication
                  </p>
                  <p className="text-sm text-gray-500">
                    Protect your account with a one-time code sent by SMS.
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    mfaEnabled
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {mfaEnabled ? "Enabled" : "Disabled"}
                </span>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={mfaPhoneNumber}
                  onChange={(e) => setMfaPhoneNumber(e.target.value)}
                  placeholder="e.g. +26650123456"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={mfaEnabled || Boolean(mfaVerificationId)}
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  value={mfaPassword}
                  onChange={(e) => setMfaPassword(e.target.value)}
                  placeholder="Enter your current password"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="current-password"
                />
              </div>

              {!mfaEnabled && mfaVerificationId && (
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    value={mfaVerificationCode}
                    onChange={(e) => setMfaVerificationCode(e.target.value)}
                    placeholder="Enter SMS code"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    inputMode="numeric"
                  />
                </div>
              )}

              <div className="flex gap-2">
                {!mfaEnabled && !mfaVerificationId && (
                  <button
                    type="button"
                    onClick={handleStartTwoFactorEnrollment}
                    disabled={mfaLoading}
                    className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {mfaLoading ? "Sending code..." : "Send Verification Code"}
                  </button>
                )}

                {!mfaEnabled && mfaVerificationId && (
                  <button
                    type="button"
                    onClick={handleConfirmTwoFactorEnrollment}
                    disabled={mfaLoading}
                    className="flex-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {mfaLoading ? "Enabling..." : "Confirm & Enable"}
                  </button>
                )}

                {mfaEnabled && (
                  <button
                    type="button"
                    onClick={handleDisableTwoFactor}
                    disabled={mfaLoading}
                    className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {mfaLoading ? "Disabling..." : "Disable 2FA"}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setShowTwoFactor(false);
                    setMfaPassword("");
                    setMfaVerificationCode("");
                    setMfaVerificationId("");
                  }}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white"
                >
                  Close
                </button>
              </div>

              <div
                ref={recaptchaContainerRef}
                className="min-h-[1px]"
                aria-hidden="true"
              />

              <p className="text-xs text-gray-500">
                Make sure Phone Authentication is enabled in Firebase Console
                and your phone number uses international format.
              </p>
            </div>
          )}
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-6">Account</h2>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 mb-3"
          >
            <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
            Logout
          </button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="w-full px-4 py-3 border border-red-300 rounded-lg text-red-600 font-medium hover:bg-red-50"
          >
            <FontAwesomeIcon icon={faTrashCan} className="mr-2" />
            Delete Account
          </button>
        </div>

        {/* Delete Confirmation */}
        {showDeleteConfirm && (
          <div className="bg-red-50 rounded-xl shadow p-6 border border-red-200">
            <h3 className="text-lg font-bold text-red-800 mb-3">
              <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2" />
              Delete Account
            </h3>
            <p className="text-red-700 mb-6">
              Are you sure you want to delete your account? This action cannot
              be undone and all your data will be permanently removed.
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
