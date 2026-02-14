import { useRef, useCallback } from "react";

interface CacheEntry {
  lat: number;
  lng: number;
  address: string;
  timestamp: number;
}

// 30 minute cache
const CACHE_DURATION = 30 * 60 * 1000;

export const useGeocoder = () => {
  const geocoderRef = useRef<any>(null);
  const cacheRef = useRef<Map<string, CacheEntry>>(new Map());

  // Initialize geocoder once
  const initializeGeocoder = useCallback(() => {
    if (!geocoderRef.current && window.google?.maps) {
      geocoderRef.current = new window.google.maps.Geocoder();
    }
    return geocoderRef.current;
  }, []);

  // Clear expired cache entries
  const clearExpiredCache = useCallback(() => {
    const now = Date.now();
    for (const [key, entry] of cacheRef.current.entries()) {
      if (now - entry.timestamp > CACHE_DURATION) {
        cacheRef.current.delete(key);
      }
    }
  }, []);

  // Geocode an address
  const geocodeAddress = useCallback(
    async (
      address: string,
      region = "ls"
    ): Promise<{ lat: number; lng: number; address: string } | null> => {
      if (!address.trim()) return null;

      // Check cache first
      const cacheKey = `${address}-${region}`;
      const cached = cacheRef.current.get(cacheKey);

      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        return cached;
      }

      return new Promise((resolve) => {
        try {
          const geocoder = initializeGeocoder();

          if (!geocoder) {
            console.warn("Geocoder not available");
            resolve(null);
            return;
          }

          geocoder.geocode(
            { address: address.trim(), componentRestrictions: { country: region } },
            (results: any[], status: string) => {
              if (status === "OK" && results?.[0]) {
                const result = {
                  lat: results[0].geometry.location.lat(),
                  lng: results[0].geometry.location.lng(),
                  address: results[0].formatted_address,
                };

                // Cache the result
                cacheRef.current.set(cacheKey, {
                  ...result,
                  timestamp: Date.now(),
                });

                resolve(result);
              } else {
                console.warn("Geocoding failed:", status);
                resolve(null);
              }
            }
          );
        } catch (error) {
          console.error("Geocoder error:", error);
          resolve(null);
        }
      });
    },
    [initializeGeocoder]
  );

  // Reverse geocode (get address from coordinates)
  const reverseGeocode = useCallback(
    async (lat: number, lng: number): Promise<string | null> => {
      const cacheKey = `${lat}-${lng}-reverse`;
      const cached = cacheRef.current.get(cacheKey);

      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        return cached.address;
      }

      return new Promise((resolve) => {
        try {
          const geocoder = initializeGeocoder();

          if (!geocoder) {
            resolve(null);
            return;
          }

          geocoder.geocode(
            { location: { lat, lng } },
            (results: any[], status: string) => {
              if (status === "OK" && results?.[0]) {
                const address = results[0].formatted_address;

                cacheRef.current.set(cacheKey, {
                  lat,
                  lng,
                  address,
                  timestamp: Date.now(),
                });

                resolve(address);
              } else {
                console.warn("Reverse geocoding failed:", status);
                resolve(null);
              }
            }
          );
        } catch (error) {
          console.error("Reverse geocoder error:", error);
          resolve(null);
        }
      });
    },
    [initializeGeocoder]
  );

  // Clear cache manually if needed
  const clearCache = useCallback(() => {
    cacheRef.current.clear();
  }, []);

  return {
    geocodeAddress,
    reverseGeocode,
    clearCache,
    clearExpiredCache,
  };
};
