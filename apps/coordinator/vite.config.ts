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
    port: 3000, // FIXED PORT for Coordinator
    strictPort: true, // Don't try other ports if 3000 is busy
    host: true,
  },
});
