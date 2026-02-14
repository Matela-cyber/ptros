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
      window.dispatchEvent(new CustomEvent("mapsReady"));
    };

    // Assign to window
    window.initMap = initMapCallback;

    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places,geometry&callback=initMap`;
    script.async = true;
    script.defer = true;

    script.onerror = () => {
      const errorMsg = "Failed to load Google Maps";
      console.error(errorMsg);
      setError(errorMsg);
    };

    document.head.appendChild(script);

    return () => {
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
      if (window.initMap) {
        delete window.initMap;
      }
      window.mapsReady = false;
    };
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center">
          <p className="text-red-600 font-medium">⚠️ {error}</p>
          <p className="text-gray-600 mt-2">
            Please check your Google Maps API key configuration.
          </p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Initializing maps...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
