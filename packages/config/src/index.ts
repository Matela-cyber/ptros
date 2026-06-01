import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD9Z19Ka5ftDSrdV1rVEZh6g21sPRfbTL0",
  authDomain: "ptros-ls.firebaseapp.com",
  databaseURL: "https://ptros-ls-default-rtdb.firebaseio.com",
  projectId: "ptros-ls",
  storageBucket: "ptros-ls.firebasestorage.app",
  messagingSenderId: "126837395384",
  appId: "1:126837395384:web:c729451b4d9d36a0a9094d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  // Helps on restrictive/proxy networks where streaming transports fail
  // (e.g. intermittent Listen channel / QUIC timeout issues).
  experimentalAutoDetectLongPolling: true,
  ignoreUndefinedProperties: true,
});
export const storage = getStorage(app);
export const realtimeDb = getDatabase(app);
export const functions = getFunctions(app);

if (
  typeof window !== "undefined" &&
  import.meta.env.DEV &&
  import.meta.env.VITE_USE_FUNCTIONS_EMULATOR === "true"
) {
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}

export default app;
export * from "./routeNetwork";
export * from "./locationGraph";
export * from "./locationGraphSync";
export * from "./businessRules";
export * from "./trackingRoute";
export * from "./otpEmail";
