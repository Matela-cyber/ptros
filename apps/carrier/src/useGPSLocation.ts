import { useState, useEffect, useRef } from "react";
import { CarrierService } from "./carrierService";
import { LocationUpdate } from "./types";
import { auth } from "@config";

export const useGPSLocation = (activeDeliveryId?: string) => {
  const [isSharing, setIsSharing] = useState(() =>
    CarrierService.isLocationSharingActive(),
  );
  const [lastLocation, setLastLocation] = useState<LocationUpdate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [accuracy, setAccuracy] = useState<number>(0);
  const seedAttemptedRef = useRef(false);

  const startSharing = async () => {
    const success = CarrierService.startLocationSharing(activeDeliveryId);
    if (success) {
      setIsSharing(true);
      setError(null);
      await CarrierService.updateShareLocation(true);
    }
    return success;
  };

  const stopSharing = async () => {
    CarrierService.stopLocationSharing();
    setIsSharing(false);
    await CarrierService.updateShareLocation(false);
  };

  const toggleSharing = async () => {
    if (isSharing) {
      await stopSharing();
    } else {
      await startSharing();
    }
  };

  // Subscribe to live GPS updates from the service
  useEffect(() => {
    const unsubscribe = CarrierService.subscribeToLocationUpdates(
      (location) => {
        if (location) {
          setLastLocation(location);
          setAccuracy(location.accuracy || 0);
          setIsSharing(true); // GPS fired → must be active
        }
      },
    );
    return () => unsubscribe();
  }, []);

  // Keep isSharing in sync with the static GPS service (survives tab switches)
  useEffect(() => {
    const interval = setInterval(() => {
      const actual = CarrierService.isLocationSharingActive();
      setIsSharing((prev) => (prev !== actual ? actual : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Seed initial position from RTDB on first mount (so RouteTab gets a position
  // immediately even if GPS hasn't fired a new event yet this session)
  useEffect(() => {
    if (seedAttemptedRef.current) return;
    seedAttemptedRef.current = true;
    const user = auth.currentUser;
    if (!user) return;
    CarrierService.getLocationPreferRealtime(user.uid)
      .then((loc) => {
        if (loc && !lastLocation) {
          setLastLocation(loc);
          setAccuracy(loc.accuracy || 0);
        }
      })
      .catch(() => {}); // silent — GPS events will follow
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-resume GPS if carrier had sharing enabled before the page refreshed.
  // We check the Firestore profile once on mount and restart the singleton if needed.
  useEffect(() => {
    if (CarrierService.isLocationSharingActive()) return; // already running
    CarrierService.getCarrierProfile()
      .then((profile) => {
        if (profile?.shareLocation) {
          CarrierService.startLocationSharing(activeDeliveryId);
          setIsSharing(true);
        }
      })
      .catch(() => {});
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    isSharing,
    lastLocation,
    error,
    accuracy,
    startSharing,
    stopSharing,
    toggleSharing,
  };
};
