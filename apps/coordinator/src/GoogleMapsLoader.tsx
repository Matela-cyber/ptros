import { useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

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
  const API_KEY = "AIzaSyAwX-3N2xv84NUElCJRpKMh7UJpQEQnNH0";
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries: ["places", "geometry"],
    id: "ptros-google-maps-script",
  });

  useEffect(() => {
    if (isLoaded && window.google?.maps) {
      window.mapsReady = true;
      console.log("✅ Google Maps loaded successfully");
      window.dispatchEvent(new CustomEvent("mapsReady"));
    }
  }, [isLoaded]);

  if (loadError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-700">⚠️ Google Maps Error</p>
        <p className="text-sm text-red-600 mt-1">
          Failed to load Google Maps. Check your API key and internet
          connection.
        </p>
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
