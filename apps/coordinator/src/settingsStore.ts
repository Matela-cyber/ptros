export type CoordinatorSettings = {
  autoRefreshSeconds: number;
  enableDesktopNotifications: boolean;
  emailAlerts: boolean;
  smsAlerts: boolean;
  defaultMapStyle: "roadmap" | "satellite" | "hybrid" | "terrain";
  showTrafficByDefault: boolean;
  darkMode: boolean;
};

export const SETTINGS_STORAGE_KEY = "ptros.coordinator.settings";

export const defaultSettings: CoordinatorSettings = {
  autoRefreshSeconds: 30,
  enableDesktopNotifications: false,
  emailAlerts: true,
  smsAlerts: false,
  defaultMapStyle: "roadmap",
  showTrafficByDefault: false,
  darkMode: false,
};

export const loadCoordinatorSettings = (): CoordinatorSettings => {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) return defaultSettings;
    const parsed = JSON.parse(raw) as Partial<CoordinatorSettings>;
    // darkMode is sourced from Firestore user profile, not local storage.
    return { ...defaultSettings, ...parsed, darkMode: false };
  } catch {
    return defaultSettings;
  }
};

export const saveCoordinatorSettings = (
  settings: CoordinatorSettings,
): void => {
  // Persist non-theme preferences locally.
  const { darkMode: _darkMode, ...rest } = settings;
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(rest));
};

export const applyDarkMode = (enabled: boolean): void => {
  const root = document.documentElement;
  root.classList.toggle("dark", enabled);
};
