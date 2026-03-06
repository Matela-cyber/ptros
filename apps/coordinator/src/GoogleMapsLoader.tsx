import { useEffect, useState } from "react";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";

const GOOGLE_MAPS_LIBRARIES: Libraries = ["places", "geometry"];

declare global {
  interface Window {
    google: any;
    initMap?: () => void;
    mapsReady?: boolean;
    gm_authFailure?: () => void;
  }
}

interface GoogleMapsLoaderProps {
  children: React.ReactNode;
}

export default function GoogleMapsLoader({ children }: GoogleMapsLoaderProps) {
  const [authFailure, setAuthFailure] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";
  const currentOrigin =
    typeof window !== "undefined" ? window.location.origin : "(unknown origin)";
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: GOOGLE_MAPS_LIBRARIES,
    id: "ptros-google-maps-script",
    authReferrerPolicy: "origin",
  });

  useEffect(() => {
    window.gm_authFailure = () => {
      console.error(
        "Google Maps authentication failed. Ensure this origin is whitelisted:",
        `${currentOrigin}/*`,
      );
      setAuthFailure(true);
    };

    return () => {
      delete window.gm_authFailure;
    };
  }, [currentOrigin]);

  useEffect(() => {
    if (isLoaded && window.google?.maps) {
      window.mapsReady = true;
      console.log("✅ Google Maps loaded successfully");
      window.dispatchEvent(new CustomEvent("mapsReady"));
    }
  }, [isLoaded]);

  if (!apiKey) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-700">⚠️ Google Maps Configuration Error</p>
        <p className="text-sm text-red-600 mt-1">
          Missing <code>VITE_GOOGLE_MAPS_API_KEY</code>. Add it to your
          coordinator environment variables and redeploy.
        </p>
      </div>
    );
  }

  if (authFailure || loadError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-700">⚠️ Google Maps Error</p>
        <p className="text-sm text-red-600 mt-1">
          Failed to load Google Maps. If you see{" "}
          <code>RefererNotAllowedMapError</code>, authorize this URL in Google
          Cloud Console API key restrictions.
        </p>
        <p className="text-xs text-gray-700 mt-2">
          Required authorized referrer: <code>{currentOrigin}/*</code>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          API Key: {apiKey ? "Present" : "Missing"}
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
