// apps/coordinator/src/services/locationsService.ts
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { db } from "@config";

export interface KnownLocation {
  id: string;
  name: string;
  normalizedName: string;
  lat: number;
  lng: number;
  usageCount: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string; // coordinator uid
}

const DEDUP_RADIUS_METERS = 200;

/**
 * Calculate distance between two points (Haversine formula in km)
 */
export const calculateDistanceKm = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number => {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Normalize location name for comparison (lowercase, trim, normalize whitespace)
 */
export const normalizeLocationName = (value: string): string =>
  value.trim().toLowerCase().replace(/\s+/g, " ");

/**
 * Load all known locations from Firestore
 */
export const loadKnownLocations = async (): Promise<KnownLocation[]> => {
  try {
    const snapshot = await getDocs(collection(db, "knownLocations"));
    const locations: KnownLocation[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      locations.push({
        id: doc.id,
        name: data.name,
        normalizedName: data.normalizedName,
        lat: data.lat,
        lng: data.lng,
        usageCount: data.usageCount || 1,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        createdBy: data.createdBy,
      });
    });

    // Sort by usage count descending, then by recent
    return locations.sort((a, b) => {
      if (b.usageCount !== a.usageCount) {
        return b.usageCount - a.usageCount;
      }
      return (
        (b.updatedAt?.toMillis?.() || 0) - (a.updatedAt?.toMillis?.() || 0)
      );
    });
  } catch (error) {
    console.error("Error loading known locations:", error);
    return [];
  }
};

/**
 * Find duplicate location within 200m radius with same/similar name
 */
export const findNearbyDuplicate = (
  lat: number,
  lng: number,
  name: string,
  existingLocations: KnownLocation[],
): KnownLocation | null => {
  const normalizedName = normalizeLocationName(name);
  const radiusKm = DEDUP_RADIUS_METERS / 1000;

  for (const location of existingLocations) {
    const distanceKm = calculateDistanceKm(
      lat,
      lng,
      location.lat,
      location.lng,
    );

    // Within 200m AND same normalized name = duplicate
    if (distanceKm <= radiusKm) {
      if (location.normalizedName === normalizedName) {
        return location;
      }
    }
  }

  return null;
};

/**
 * Save or update a custom location
 * If duplicate exists within 200m with same name, increment usage count
 * Otherwise create new location
 */
export const saveCustomLocation = async (
  lat: number,
  lng: number,
  name: string,
  coordinatorUid: string,
  existingLocations: KnownLocation[],
): Promise<KnownLocation> => {
  const normalizedName = normalizeLocationName(name);
  const now = Timestamp.now();

  // Check for duplicate
  const duplicate = findNearbyDuplicate(lat, lng, name, existingLocations);

  if (duplicate) {
    // Update existing location: increment usage, update timestamp
    const updatedLocation: KnownLocation = {
      ...duplicate,
      usageCount: duplicate.usageCount + 1,
      updatedAt: now,
    };

    try {
      await updateDoc(doc(db, "knownLocations", duplicate.id), {
        usageCount: updatedLocation.usageCount,
        updatedAt: now,
      });
      return updatedLocation;
    } catch (error) {
      console.error("Error updating location:", error);
      throw error;
    }
  }

  // Create new location
  try {
    const newLocationRef = await addDoc(collection(db, "knownLocations"), {
      name,
      normalizedName,
      lat,
      lng,
      usageCount: 1,
      createdAt: now,
      updatedAt: now,
      createdBy: coordinatorUid,
    });

    return {
      id: newLocationRef.id,
      name,
      normalizedName,
      lat,
      lng,
      usageCount: 1,
      createdAt: now,
      updatedAt: now,
      createdBy: coordinatorUid,
    };
  } catch (error) {
    console.error("Error creating location:", error);
    throw error;
  }
};
