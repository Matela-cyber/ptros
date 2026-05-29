import { useEffect, useState } from "react";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const GOOGLE_MAPS_LIBRARIES: Libraries = ["places", "geometry", "marker"];

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
  const [mapsRuntimeError, setMapsRuntimeError] = useState<string | null>(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";
  const currentOrigin =
    typeof window !== "undefined" ? window.location.origin : "(unknown origin)";
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: GOOGLE_MAPS_LIBRARIES,
    id: "ptros-google-maps-script",
  });

  useEffect(() => {
    window.gm_authFailure = () => {
      setAuthFailure(true);
    };

    const billingRegex =
      /BillingNotEnabledMapError|ClientBillingNotEnabledMapError/i;
    const handleWindowError = (event: ErrorEvent) => {
      const msg = String(event?.message || "");
      if (billingRegex.test(msg)) {
        setMapsRuntimeError("BILLING_NOT_ENABLED");
      }
    };

    const originalConsoleError = console.error;
    console.error = (...args: unknown[]) => {
      const joined = args
        .map((arg) =>
          typeof arg === "string" ? arg : JSON.stringify(arg ?? ""),
        )
        .join(" ");
      if (billingRegex.test(joined)) {
        setMapsRuntimeError("BILLING_NOT_ENABLED");
      }
      originalConsoleError(...args);
    };

    window.addEventListener("error", handleWindowError);

    if (isLoaded && window.google?.maps) {
      window.mapsReady = true;
      console.log("Google Maps loaded successfully");
      window.dispatchEvent(new CustomEvent("mapsReady"));
    }

    return () => {
      delete window.gm_authFailure;
      window.removeEventListener("error", handleWindowError);
      console.error = originalConsoleError;
    };
  }, [isLoaded]);

  if (!apiKey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center max-w-lg px-4">
          <p className="text-red-600 font-medium">
            <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2" />
            Google Maps configuration is missing
          </p>
          <p className="text-gray-600 mt-2">
            Set <code>VITE_GOOGLE_MAPS_API_KEY</code> for this environment and
            redeploy.
          </p>
        </div>
      </div>
    );
  }

  if (mapsRuntimeError === "BILLING_NOT_ENABLED") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center max-w-xl px-4">
          <p className="text-red-600 font-medium">
            <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2" />
            Google Maps billing is not enabled
          </p>
          <p className="text-gray-600 mt-2">
            Enable billing for the Google Cloud project associated with this API
            key, then retry.
          </p>
          <p className="text-xs text-gray-700 mt-2">
            Current app origin: <code>{currentOrigin}/*</code>
          </p>
        </div>
      </div>
    );
  }

  if (authFailure || loadError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center max-w-xl px-4">
          <p className="text-red-600 font-medium">
            <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2" />
            Failed to load Google Maps
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
