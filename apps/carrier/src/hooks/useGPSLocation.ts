import { useState, useEffect, useRef } from "react";
import { LocationService } from "../services/locationService";

interface Location {
	latitude: number;
	longitude: number;
	accuracy?: number;
	timestamp: number;
}

export function useGPSLocation(deliveryId: string | null, enabled: boolean = true) {
	const [location, setLocation] = useState<Location | null>(null);
	const [error, setError] = useState<string | null>(null);
	const watchIdRef = useRef<number | null>(null);
	const updateIntervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (!enabled || !deliveryId) return;

		// Start GPS tracking
		if ("geolocation" in navigator) {
			watchIdRef.current = navigator.geolocation.watchPosition(
				(position) => {
					const newLocation = {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						accuracy: position.coords.accuracy || undefined,
						timestamp: Date.now(),
					};
					setLocation(newLocation);
					setError(null);

					// Update RTDB with new location (throttled to 5-20s via updateInterval)
					LocationService.updateCarrierLocation(
						deliveryId,
						newLocation.latitude,
						newLocation.longitude,
						newLocation.accuracy
					).catch(console.error);
				},
				(err) => {
					setError(err.message);
					console.error("Geolocation error:", err);
				},
				{
					enableHighAccuracy: true,
					timeout: 10000,
					maximumAge: 0,
				}
			);
		} else {
			setError("Geolocation not supported");
		}

		return () => {
			if (watchIdRef.current !== null) {
				navigator.geolocation.clearWatch(watchIdRef.current);
			}
		};
	}, [deliveryId, enabled]);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			if (updateIntervalRef.current) {
				clearInterval(updateIntervalRef.current);
			}
		};
	}, []);

	return { location, error };
}
