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
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center">
          <p className="text-red-600 font-medium">
            ⚠️ Failed to load Google Maps
          </p>
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
