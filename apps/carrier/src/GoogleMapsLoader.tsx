import { useEffect, useState } from "react";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";

const GOOGLE_MAPS_LIBRARIES: Libraries = ["places", "geometry", "marker"];

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
  const [mapsRuntimeError, setMapsRuntimeError] = useState<string | null>(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";
  const currentOrigin =
    typeof window !== "undefined" ? window.location.origin : "(unknown origin)";

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: GOOGLE_MAPS_LIBRARIES,
    id: "ptros-carrier-google-maps-script",
  });

  useEffect(() => {
    window.gm_authFailure = () => {
      console.error(
        "Google Maps authentication failed. Ensure this origin is whitelisted:",
        `${currentOrigin}/*`,
      );
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

    return () => {
      delete window.gm_authFailure;
      window.removeEventListener("error", handleWindowError);
      console.error = originalConsoleError;
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
        <p className="text-red-700 font-semibold">
          Google Maps configuration error
        </p>
        <p className="text-sm text-red-600 mt-1">
          Missing <code>VITE_GOOGLE_MAPS_API_KEY</code>. Add it to the carrier
          environment variables for the hosted app and redeploy.
        </p>
      </div>
    );
  }

  if (mapsRuntimeError === "BILLING_NOT_ENABLED") {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg m-4">
        <p className="text-red-700 font-semibold">
          Google Maps billing is not enabled
        </p>
        <p className="text-sm text-red-600 mt-1">
          Enable billing on the Google Cloud project linked to this API key, and
          ensure <code>Maps JavaScript API</code> is enabled.
        </p>
        <p className="text-xs text-gray-700 mt-2">
          Current app origin: <code>{currentOrigin}/*</code>
        </p>
      </div>
    );
  }

  if (authFailure || loadError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg m-4">
        <p className="text-red-700 font-semibold">Google Maps failed to load</p>
        <p className="text-sm text-red-600 mt-1">
          This usually means the Google Maps key restriction does not match the
          carrier app referrer being sent by the browser.
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
