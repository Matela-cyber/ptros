type CustomerSettings = {
  darkMode: boolean;
};

const SETTINGS_STORAGE_KEY = "ptros.customer.settings";

const DEFAULT_SETTINGS: CustomerSettings = {
  darkMode: false,
};

export const getStoredSettings = (): CustomerSettings => {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;

    const parsed = JSON.parse(raw) as Partial<CustomerSettings>;
    return {
      darkMode: Boolean(parsed.darkMode),
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
};

export const saveStoredSettings = (settings: CustomerSettings): void => {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
};

export const applyDarkMode = (enabled: boolean): void => {
  const root = document.documentElement;
  root.classList.toggle("dark", enabled);
};
