/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          dark: "#1E40AF",
          light: "#3B82F6",
          lighter: "#60A5FA",
          bg: "#EFF6FF",
        },
        accent: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
          light: "#FBBF24",
          bg: "#FEF3C7",
        },
        success: {
          DEFAULT: "#10B981",
          dark: "#059669",
          light: "#34D399",
          bg: "#D1FAE5",
        },
      },
    },
  },
  plugins: [],
};
