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
  createdBy: string;
}

const DEDUP_RADIUS_METERS = 200;

export const calculateDistanceKm = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number => {
  const R = 6371;
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

export const normalizeLocationName = (value: string): string =>
  value.trim().toLowerCase().replace(/\s+/g, " ");

export const loadKnownLocations = async (): Promise<KnownLocation[]> => {
  try {
    const snapshot = await getDocs(collection(db, "knownLocations"));
    const locations: KnownLocation[] = [];

    snapshot.forEach((docSnap) => {
      const data = docSnap.data() as any;
      locations.push({
        id: docSnap.id,
        name: data.name,
        normalizedName: data.normalizedName,
        lat: data.lat,
        lng: data.lng,
        usageCount: data.usageCount || 1,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        createdBy: data.createdBy || "unknown",
      });
    });

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
    if (distanceKm <= radiusKm && location.normalizedName === normalizedName) {
      return location;
    }
  }

  return null;
};

export const findNearbyLocationByCoordinates = (
  lat: number,
  lng: number,
  existingLocations: KnownLocation[],
): KnownLocation | null => {
  const radiusKm = DEDUP_RADIUS_METERS / 1000;
  let nearest: KnownLocation | null = null;
  let nearestDistanceKm = Number.POSITIVE_INFINITY;

  for (const location of existingLocations) {
    const distanceKm = calculateDistanceKm(
      lat,
      lng,
      location.lat,
      location.lng,
    );

    if (distanceKm <= radiusKm && distanceKm < nearestDistanceKm) {
      nearest = location;
      nearestDistanceKm = distanceKm;
    }
  }

  return nearest;
};

export const saveCustomLocation = async (
  lat: number,
  lng: number,
  name: string,
  userUid: string,
  existingLocations: KnownLocation[],
): Promise<KnownLocation> => {
  const normalizedName = normalizeLocationName(name);
  const now = Timestamp.now();

  const duplicate = findNearbyDuplicate(lat, lng, name, existingLocations);

  if (duplicate) {
    const updatedLocation: KnownLocation = {
      ...duplicate,
      usageCount: duplicate.usageCount + 1,
      updatedAt: now,
    };

    await updateDoc(doc(db, "knownLocations", duplicate.id), {
      usageCount: updatedLocation.usageCount,
      updatedAt: now,
    });

    return updatedLocation;
  }

  const newLocationRef = await addDoc(collection(db, "knownLocations"), {
    name,
    normalizedName,
    lat,
    lng,
    usageCount: 1,
    createdAt: now,
    updatedAt: now,
    createdBy: userUid,
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
    createdBy: userUid,
  };
};
