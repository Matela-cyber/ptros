import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@config": path.resolve(__dirname, "../../packages/config/src"),
    },
  },
  server: {
    port: 3002, // FIXED PORT for Customer
    strictPort: true,
    host: true,
  },
});
