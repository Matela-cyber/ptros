// apps/customer/src/AddressAutocomplete.tsx
import { useState, useEffect, useRef } from "react";

interface KnownLocationSuggestion {
  id: string;
  name: string;
  lat: number;
  lng: number;
  usageCount?: number;
}

interface AddressAutocompleteProps {
  value: string;
  onChange: (address: string) => void;
  onSelect?: (place: any) => void;
  onSelectWithCoords?: (address: string, lat: number, lng: number) => void;
  placeholder?: string;
  knownLocations?: KnownLocationSuggestion[];
}

interface AddressSuggestion {
  id: string;
  description: string;
  mainText: string;
  secondaryText?: string;
  placeId?: string;
  placePrediction?: any;
  isKnown?: boolean;
  lat?: number;
  lng?: number;
}

declare global {
  interface Window {
    google: any;
  }
}

export default function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  onSelectWithCoords,
  placeholder = "Enter address...",
  knownLocations = [],
}: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const autocompleteServiceRef = useRef<any>(null);
  const placesServiceRef = useRef<any>(null);
  const supportsAutocompleteSuggestionRef = useRef(false);
  const requestIdRef = useRef(0);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (window.google && window.google.maps) {
      supportsAutocompleteSuggestionRef.current = Boolean(
        window.google.maps.places?.AutocompleteSuggestion
          ?.fetchAutocompleteSuggestions,
      );

      if (!supportsAutocompleteSuggestionRef.current) {
        autocompleteServiceRef.current =
          new window.google.maps.places.AutocompleteService();
        placesServiceRef.current = new window.google.maps.places.PlacesService(
          document.createElement("div"),
        );
      }
    }
  }, []);

  const getFilteredKnownSuggestions = (input: string): AddressSuggestion[] => {
    if (!knownLocations.length || input.length < 2) return [];
    const query = input.toLowerCase().trim();
    return knownLocations
      .filter((loc) => loc.name.toLowerCase().includes(query))
      .slice(0, 3)
      .map((loc) => ({
        id: `known-${loc.id}`,
        description: loc.name,
        mainText: loc.name,
        secondaryText: `Saved location · ${loc.usageCount ?? 1}× used`,
        isKnown: true,
        lat: loc.lat,
        lng: loc.lng,
      }));
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const currentRequestId = ++requestIdRef.current;
    setInputValue(val);
    onChange(val);

    const knownSuggestions = getFilteredKnownSuggestions(val);

    if (val.length > 2 && supportsAutocompleteSuggestionRef.current) {
      try {
        setIsLoading(true);
        const { suggestions: apiSuggestions } =
          await window.google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
            {
              input: val,
              includedRegionCodes: ["ls"],
            },
          );

        if (currentRequestId !== requestIdRef.current) return;

        const mapped = (apiSuggestions || []).map((suggestion: any) => {
          const placePrediction = suggestion?.placePrediction;
          const mainText =
            placePrediction?.text?.text ||
            placePrediction?.mainText?.text ||
            "";
          const secondaryText =
            placePrediction?.secondaryText?.text || "Google suggestion";
          const description =
            mainText + (secondaryText ? `, ${secondaryText}` : "");

          return {
            id:
              placePrediction?.placeId ||
              placePrediction?.text?.text ||
              Math.random().toString(36).slice(2),
            description,
            mainText: mainText || description,
            secondaryText,
            placeId: placePrediction?.placeId,
            placePrediction,
          } as AddressSuggestion;
        });

        const merged = [...knownSuggestions, ...mapped];
        setSuggestions(merged);
        setShowSuggestions(merged.length > 0);
      } catch (error) {
        console.error("Autocomplete (new) failed, falling back:", error);
        setSuggestions(knownSuggestions);
        setShowSuggestions(knownSuggestions.length > 0);
      } finally {
        if (currentRequestId === requestIdRef.current) {
          setIsLoading(false);
        }
      }
      return;
    }

    if (val.length > 2 && autocompleteServiceRef.current) {
      setIsLoading(true);
      autocompleteServiceRef.current.getPlacePredictions(
        {
          input: val,
          componentRestrictions: { country: "ls" },
          locationBias: {
            center: { lat: -29.3142, lng: 27.4833 },
            radius: 25000,
          },
        },
        (predictions: any[]) => {
          if (currentRequestId !== requestIdRef.current) return;
          const mapped = (predictions || []).map((prediction: any) => ({
            id: prediction.place_id || prediction.description,
            placeId: prediction.place_id || undefined,
            description: prediction.description || "",
            mainText:
              prediction.structured_formatting?.main_text ||
              prediction.description,
            secondaryText:
              prediction.structured_formatting?.secondary_text || "",
          })) as AddressSuggestion[];

          const merged = [...knownSuggestions, ...mapped];
          setSuggestions(merged);
          setShowSuggestions(merged.length > 0);
          setIsLoading(false);
        },
      );
    } else {
      setSuggestions(knownSuggestions);
      setShowSuggestions(knownSuggestions.length > 0);
    }
  };

  const resolveGooglePlaceCoords = (
    placeId: string,
  ): Promise<{ lat: number; lng: number } | null> => {
    return new Promise((resolve) => {
      if (!placesServiceRef.current) {
        resolve(null);
        return;
      }
      placesServiceRef.current.getDetails(
        { placeId, fields: ["geometry"] },
        (place: any, status: any) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            place?.geometry?.location
          ) {
            resolve({
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            });
          } else {
            resolve(null);
          }
        },
      );
    });
  };

  const handleSelectSuggestion = async (suggestion: AddressSuggestion) => {
    const description = suggestion.mainText || suggestion.description;
    onChange(description);
    setInputValue(description);
    setSuggestions([]);
    setShowSuggestions(false);

    if (
      onSelectWithCoords &&
      suggestion.isKnown &&
      suggestion.lat != null &&
      suggestion.lng != null
    ) {
      onSelectWithCoords(description, suggestion.lat, suggestion.lng);
    }

    if (onSelectWithCoords && suggestion.placeId) {
      const coords = await resolveGooglePlaceCoords(suggestion.placeId);
      if (coords) {
        onSelectWithCoords(description, coords.lat, coords.lng);
      }
    }

    if (onSelectWithCoords && suggestion.placePrediction?.toPlace) {
      try {
        const place = suggestion.placePrediction.toPlace();
        await place.fetchFields({
          fields: ["displayName", "formattedAddress", "location"],
        });
        const formattedAddress = place.formattedAddress || description;
        if (place.location) {
          onSelectWithCoords(
            formattedAddress,
            place.location.lat(),
            place.location.lng(),
          );
        }
      } catch (error) {
        console.error("Failed to fetch place details from new API:", error);
      }
    }

    if (onSelect && suggestion.placeId && placesServiceRef.current) {
      placesServiceRef.current.getDetails(
        {
          placeId: suggestion.placeId,
          fields: ["geometry", "formatted_address", "name"],
        },
        (place: any) => {
          onSelect(place);
        },
      );
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        onFocus={() => {
          if (inputValue.length >= 2 && suggestions.length > 0) {
            setShowSuggestions(true);
          }
        }}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <div className="absolute right-3 top-2.5 flex items-center gap-2">
        {isLoading && (
          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        )}

        {!isLoading && inputValue && (
          <button
            type="button"
            onClick={() => {
              setInputValue("");
              onChange("");
              setSuggestions([]);
              setShowSuggestions(false);
              inputRef.current?.focus();
            }}
            className="text-gray-400 hover:text-gray-600 text-sm"
            title="Clear"
          >
            ×
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-50">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSelectSuggestion(suggestion)}
              className={`w-full text-left px-4 py-2 border-b last:border-b-0 ${
                suggestion.isKnown
                  ? "bg-emerald-50 hover:bg-emerald-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <p className="font-medium text-sm">
                {suggestion.mainText || suggestion.description}
              </p>
              <p className="text-xs text-gray-500">
                {suggestion.secondaryText || ""}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
