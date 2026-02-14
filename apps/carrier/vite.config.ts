import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// Look for locally generated certs (created by mkcert) under /certs
const certDir = process.env.CERT_DIR || path.resolve(__dirname, "../../certs")
const certPath = path.join(certDir, "localhost.pem")
const keyPath = path.join(certDir, "localhost-key.pem")

let httpsOption: boolean | { key: Buffer; cert: Buffer } = false
try {
  if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
    httpsOption = {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath)
    }
    console.log(`⚡ Using local HTTPS certs from ${certDir}`)
  }
} catch (e) {
  // ignore and fall back to non-HTTPS
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@config": path.resolve(__dirname, "../../packages/config/src"),
    },
  },
  server: {
    port: 3001, // FIXED PORT for Carrier
    strictPort: true,
    // Allow network IP access (e.g. http://10.82.70.238:3001)
    host: true,
    // Allow localtunnel and other domains
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '10.82.70.238',
      '.loca.lt' // Allow all localtunnel subdomains
    ],
    // If local certs exist, serve HTTPS so mobile browsers will allow geolocation
    https: httpsOption
  },
});
