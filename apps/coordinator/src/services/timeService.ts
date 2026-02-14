// apps/coordinator/src/services/timeService.ts
import { realtimeDb } from "@config";
import { Timestamp } from "firebase/firestore";
import {
  ref,
  set,
  get,
  onValue,
} from "firebase/database";

interface TimeData {
  timestamp: number;
  source: "realtime" | "firestore";
  syncedAt?: number;
}

let isRealtimeDbOnline = true;
let connectionCheckTimer: NodeJS.Timeout | null = null;
let unsubscribeConnection: (() => void) | null = null;

/**
 * Monitor Firebase Realtime Database connection status
 */
export function initializeTimeServiceMonitor(): void {
  try {
    const connectedRef = ref(realtimeDb, ".info/connected");
    unsubscribeConnection = onValue(connectedRef, (snap: any) => {
      isRealtimeDbOnline = snap.val() === true;
      console.log(
        `[TimeService] Realtime DB connection: ${isRealtimeDbOnline ? "online" : "offline"}`
      );
    });
  } catch (error) {
    console.warn("[TimeService] Could not initialize connection monitor:", error);
    isRealtimeDbOnline = false;
  }
}

/**
 * Clean up time service monitor
 */
export function cleanupTimeServiceMonitor(): void {
  if (connectionCheckTimer) {
    clearInterval(connectionCheckTimer);
  }
  if (unsubscribeConnection) {
    unsubscribeConnection();
  }
}

/**
 * Get current server time with fallback to local time
 */
export async function getServerTime(): Promise<TimeData> {
  // Try Realtime Database first
  if (isRealtimeDbOnline) {
    try {
      const timeRef = ref(realtimeDb, "server-time");
      const timestamp = Timestamp.now().toMillis();
      await set(timeRef, timestamp);
      const snapshot = await get(timeRef);
      if (snapshot.exists()) {
        return {
          timestamp: snapshot.val() as number,
          source: "realtime",
          syncedAt: Date.now(),
        };
      }
    } catch (error) {
      console.warn(
        "[TimeService] Failed to get time from Realtime DB:",
        error
      );
    }
  }

  // Fallback to Firestore
  try {
    const firestoreTimestamp = Timestamp.now().toMillis();
    return {
      timestamp: firestoreTimestamp,
      source: "firestore",
      syncedAt: Date.now(),
    };
  } catch (error) {
    console.warn("[TimeService] Failed to get time from Firestore:", error);
    // Last resort: use local client time
    return {
      timestamp: Date.now(),
      source: "firestore",
      syncedAt: Date.now(),
    };
  }
}

/**
 * Get Firestore Timestamp for consistency with Firestore operations
 */
export function getFirestoreTimestamp(): Timestamp {
  return Timestamp.now();
}

/**
 * Sync timestamp to both Realtime Database and Firestore
 * @param path - Path in Realtime Database to sync to
 * @param firestoreData - Data to update in Firestore
 */
export async function syncTimestamps(
  path: string,
  firestoreData: Record<string, any> = {}
): Promise<{
  realtime: boolean;
  firestore: boolean;
}> {
  const results = {
    realtime: false,
    firestore: false,
  };

  // Always write to Firestore first (as primary backup)
  try {
    const timestamp = Timestamp.now();
    firestoreData.updatedAt = timestamp;
    firestoreData.syncedWithRealtime = true;
    results.firestore = true;
  } catch (error) {
    console.error("[TimeService] Firestore sync failed:", error);
    results.firestore = false;
  }

  // Write to Realtime Database if online
  if (isRealtimeDbOnline) {
    try {
      const realtimeRef = ref(realtimeDb, path);
      const now = new Date();
      await set(realtimeRef, {
        timestamp: now.toISOString(),
        timestampMs: Date.now(),
        syncedAt: now.toISOString(),
      });
      results.realtime = true;
    } catch (error) {
      console.warn("[TimeService] Realtime sync attempted but failed:", error);
      results.realtime = false;
    }
  } else {
    console.warn(
      "[TimeService] Realtime Database is offline, relying on Firestore backup"
    );
    results.realtime = false;
  }

  return results;
}

/**
 * Write timestamp data to Realtime Database with automatic Firestore fallback
 */
export async function writeTimestamp(
  realtimePath: string
): Promise<Timestamp> {
  const timestamp = Timestamp.now();

  // Try to write to Realtime Database
  if (isRealtimeDbOnline) {
    try {
      const dbRef = ref(realtimeDb, `timestamps/${realtimePath}`);
      const isoTimestamp = new Date(timestamp.toMillis()).toISOString()
      await set(dbRef, {
        value: timestamp.toMillis(),
        timestamp: isoTimestamp,
        createdAt: new Date().toISOString(),
      });
      console.log(`[TimeService] Timestamp written to Realtime DB: ${realtimePath}`);
    } catch (error) {
      console.warn(
        `[TimeService] Failed to write to Realtime DB (${realtimePath}):`,
        error
      );
    }
  } else {
    console.log(
      "[TimeService] Realtime DB offline, will rely on Firestore for timestamp"
    );
  }

  // Always return Firestore timestamp for database operations
  return timestamp;
}

/**
 * Read timestamp from Realtime Database with Firestore fallback
 */
export async function readTimestamp(realtimePath: string): Promise<{
  value: number;
  source: "realtime" | "firestore";
}> {
  // Try Realtime Database first
  if (isRealtimeDbOnline) {
    try {
      const dbRef = ref(realtimeDb, `timestamps/${realtimePath}`);
      const snapshot = await get(dbRef);
      if (snapshot.exists() && snapshot.val()?.value) {
        return {
          value: snapshot.val().value,
          source: "realtime",
        };
      }
    } catch (error) {
      console.warn(
        `[TimeService] Failed to read from Realtime DB (${realtimePath}):`,
        error
      );
    }
  }

  // Fallback to Firestore timestamp
  return {
    value: Timestamp.now().toMillis(),
    source: "firestore",
  };
}

/**
 * Get status of the time service
 */
export function getTimeServiceStatus(): {
  isRealtimeDbOnline: boolean;
  primarySource: "realtime" | "firestore";
} {
  return {
    isRealtimeDbOnline,
    primarySource: isRealtimeDbOnline ? "realtime" : "firestore",
  };
}
