import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places", "geometry"] as any;

export const useGoogleMaps = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey || "",
    libraries,
  });

  return {
    isLoaded,
    loadError,
    apiKey,
  };
};
