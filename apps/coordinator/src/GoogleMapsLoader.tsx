import { useEffect, useState } from "react";

declare global {
  interface Window {
    google: any;
    initMap?: () => void;
    mapsReady?: boolean;
  }
}

interface GoogleMapsLoaderProps {
  children: React.ReactNode;
}

export default function GoogleMapsLoader({ children }: GoogleMapsLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = "AIzaSyAwX-3N2xv84NUElCJRpKMh7UJpQEQnNH0";

  useEffect(() => {
    // Check if already loaded
    if (window.google && window.google.maps) {
      setIsLoaded(true);
      window.mapsReady = true;
      // Emit ready event for other components
      window.dispatchEvent(new CustomEvent("mapsReady"));
      return;
    }

    if (!API_KEY) {
      setError("Google Maps API key is missing");
      return;
    }

    console.log("Loading Google Maps with API key...");

    // Define the callback
    const initMapCallback = () => {
      console.log("✅ Google Maps loaded successfully");
      window.mapsReady = true;
      setIsLoaded(true);
      setError(null);
      // Emit ready event for other components listening
      window.dispatchEvent(new CustomEvent("mapsReady"));
    };

    // Assign to window
    window.initMap = initMapCallback;

    // Load Google Maps script with Marker Clustering library
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places,geometry&callback=initMap`;
    script.async = true;
    script.defer = true;

    script.onerror = () => {
      console.error("❌ Failed to load Google Maps");
      setError(
        "Failed to load Google Maps. Check your API key and internet connection."
      );
    };

    document.head.appendChild(script);

    // Load MarkerClusterer separately after Maps API loads
    script.onload = () => {
      const clusterScript = document.createElement("script");
      clusterScript.src = "https://cdn.jsdelivr.net/npm/@googlemaps/markerclusterer@2.5.3/dist/index.min.js";
      clusterScript.async = true;
      clusterScript.onload = () => {
        console.log("✅ MarkerClusterer loaded");
      };
      clusterScript.onerror = () => {
        console.warn("⚠️ Failed to load MarkerClusterer - clustering disabled");
      };
      document.head.appendChild(clusterScript);
    };

    return () => {
      // Cleanup - remove script only if exists
      const existingScript = document.querySelector(
        'script[src*="maps.googleapis.com"]'
      );
      if (existingScript && document.head.contains(existingScript)) {
        try {
          document.head.removeChild(existingScript);
        } catch (e) {
          console.warn("Failed to remove script:", e);
        }
      }
      // Only delete if it exists
      if (window.initMap) {
        delete window.initMap;
      }
      window.mapsReady = false;
    };
  }, []);

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-700">⚠️ Google Maps Error</p>
        <p className="text-sm text-red-600 mt-1">{error}</p>
        <p className="text-xs text-gray-500 mt-2">
          API Key: {API_KEY ? "Present" : "Missing"}
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Initializing Google Maps...</p>
          <p className="text-xs text-gray-400 mt-2">
            This may take a few seconds
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
