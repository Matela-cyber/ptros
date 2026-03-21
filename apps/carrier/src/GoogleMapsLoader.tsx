import { useEffect, useState } from "react";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";

const GOOGLE_MAPS_LIBRARIES: Libraries = ["places", "geometry"];

declare global {
  interface Window {
    google: any;
    gm_authFailure?: () => void;
    mapsReady?: boolean;
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
    id: "ptros-carrier-google-maps-script",
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
      window.dispatchEvent(new CustomEvent("mapsReady"));
    }
  }, [isLoaded]);

  if (!apiKey) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg m-4">
        <p className="text-red-700 font-semibold">Google Maps configuration error</p>
        <p className="text-sm text-red-600 mt-1">
          Missing <code>VITE_GOOGLE_MAPS_API_KEY</code>. Add it to the carrier
          environment variables for the hosted app and redeploy.
        </p>
      </div>
    );
  }

  if (authFailure || loadError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg m-4">
        <p className="text-red-700 font-semibold">Google Maps failed to load</p>
        <p className="text-sm text-red-600 mt-1">
          Hosted builds often fail here when the API key is missing or the
          domain is not allowed in Google Cloud.
        </p>
        <p className="text-xs text-gray-700 mt-2">
          Required authorized referrer: <code>{currentOrigin}/*</code>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          API key: {apiKey ? "Present" : "Missing"}
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[120px]">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-2 text-sm text-gray-600">Loading maps...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
