import { useEffect } from "react";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";

const GOOGLE_MAPS_LIBRARIES: Libraries = ["places", "geometry"];

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
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";
  const currentOrigin =
    typeof window !== "undefined" ? window.location.origin : "(unknown origin)";
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: GOOGLE_MAPS_LIBRARIES,
    id: "ptros-google-maps-script",
  });

  useEffect(() => {
    if (isLoaded && window.google?.maps) {
      window.mapsReady = true;
      console.log("✅ Google Maps loaded successfully");
      window.dispatchEvent(new CustomEvent("mapsReady"));
    }
  }, [isLoaded]);

  if (!apiKey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center max-w-lg px-4">
          <p className="text-red-600 font-medium">
            ⚠️ Google Maps configuration is missing
          </p>
          <p className="text-gray-600 mt-2">
            Set <code>VITE_GOOGLE_MAPS_API_KEY</code> for this environment and
            redeploy.
          </p>
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center max-w-xl px-4">
          <p className="text-red-600 font-medium">
            ⚠️ Failed to load Google Maps
          </p>
          <p className="text-gray-600 mt-2">
            If you see <code>RefererNotAllowedMapError</code>, authorize this
            URL in Google Cloud Console API key restrictions.
          </p>
          <p className="text-xs text-gray-700 mt-2">
            Required authorized referrer: <code>{currentOrigin}/*</code>
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
