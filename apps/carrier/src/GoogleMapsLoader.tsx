import { Libraries, useJsApiLoader } from "@react-google-maps/api";

const GOOGLE_MAPS_LIBRARIES: Libraries = ["places", "geometry"];

interface GoogleMapsLoaderProps {
  children: React.ReactNode;
}

export default function GoogleMapsLoader({ children }: GoogleMapsLoaderProps) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: GOOGLE_MAPS_LIBRARIES,
    id: "ptros-carrier-google-maps-script",
  });

  if (loadError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg m-4">
        <p className="text-red-700 font-semibold">Google Maps failed to load</p>
        <p className="text-sm text-red-600 mt-1">
          Check your `VITE_GOOGLE_MAPS_API_KEY` in `.env`.
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
