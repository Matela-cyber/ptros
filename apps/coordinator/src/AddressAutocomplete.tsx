import { useState, useEffect, useRef } from "react";
import { FaXmark, FaLocationDot } from "react-icons/fa6";

declare global {
  interface Window {
    google: any;
  }
}

interface KnownLocationSuggestion {
  id: string;
  name: string;
  lat: number;
  lng: number;
  usageCount?: number;
}

interface AddressAutocompleteProps {
  label: string;
  value: string;
  onChange: (address: string) => void;
  /** Called when a suggestion is selected and coordinates are resolved */
  onSelectWithCoords?: (address: string, lat: number, lng: number) => void;
  placeholder?: string;
  required?: boolean;
  knownLocations?: KnownLocationSuggestion[];
}

interface AddressSuggestion {
  id: string;
  description: string;
  mainText: string;
  secondaryText?: string;
  /** Google Places place_id for coordinate lookup */
  placeId?: string;
  /** True when this suggestion comes from the knownLocations collection */
  isKnown?: boolean;
  lat?: number;
  lng?: number;
}

export default function AddressAutocomplete({
  label,
  value,
  onChange,
  onSelectWithCoords,
  placeholder = "Start typing address...",
  required = false,
  knownLocations = [],
}: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const autocompleteService = useRef<any>(null);
  const placesService = useRef<any>(null);
  const placesServiceDiv = useRef<HTMLDivElement | null>(null);
  const supportsNewAutocomplete = useRef(false);
  const requestIdRef = useRef(0);

  // Update input value when prop changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Close suggestions when clicking outside
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

  const mapLegacyPredictions = (predictions: any[]): AddressSuggestion[] => {
    return (predictions || []).map((prediction: any) => ({
      id: prediction.place_id || prediction.description,
      placeId: prediction.place_id || undefined,
      description: prediction.description || "",
      mainText:
        prediction.structured_formatting?.main_text || prediction.description,
      secondaryText: prediction.structured_formatting?.secondary_text || "",
    }));
  };

  const mapNewSuggestions = (suggestionResponse: any): AddressSuggestion[] => {
    const list = suggestionResponse?.suggestions || [];
    return list
      .map((entry: any, index: number) => {
        const prediction = entry?.placePrediction;
        const text = prediction?.text?.text || "";
        const mainText = prediction?.mainText?.text || text;
        const secondaryText = prediction?.secondaryText?.text || "";
        const placeId = prediction?.placeId || undefined;

        return {
          id: placeId || `new-suggestion-${index}`,
          placeId,
          description:
            text || [mainText, secondaryText].filter(Boolean).join(", "),
          mainText: mainText || text,
          secondaryText,
        };
      })
      .filter((item: AddressSuggestion) => !!item.description);
  };

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

  // Lazy-initialize Places services in case Google Maps loaded after mount
  const ensurePlacesServices = () => {
    if (!window.google?.maps?.places) return;
    const places = window.google.maps.places;

    if (!supportsNewAutocomplete.current && !autocompleteService.current) {
      supportsNewAutocomplete.current =
        !!places?.AutocompleteSuggestion?.fetchAutocompleteSuggestions;
      if (!supportsNewAutocomplete.current && places?.AutocompleteService) {
        autocompleteService.current = new places.AutocompleteService();
      }
    }

    if (!placesService.current && places?.PlacesService) {
      if (!placesServiceDiv.current) {
        placesServiceDiv.current = document.createElement("div");
      }
      placesService.current = new places.PlacesService(
        placesServiceDiv.current,
      );
    }
  };

  useEffect(() => {
    ensurePlacesServices();
  }, []);

  const requestLegacyPredictions = (
    value: string,
    knownSuggestions: AddressSuggestion[],
    requestId: number,
  ) => {
    if (!autocompleteService.current) {
      setSuggestions(knownSuggestions);
      setShowSuggestions(knownSuggestions.length > 0);
      setIsLoading(false);
      return;
    }

    autocompleteService.current.getPlacePredictions(
      {
        input: value,
        componentRestrictions: { country: "ls" },
        locationBias: {
          center: { lat: -29.3142, lng: 27.4833 },
          radius: 25000,
        },
      },
      (predictions: any[], status: any) => {
        if (requestId !== requestIdRef.current) return;

        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          predictions
        ) {
          const mapped = mapLegacyPredictions(predictions);
          const merged = [...knownSuggestions, ...mapped];
          setSuggestions(merged);
          setShowSuggestions(merged.length > 0);
        } else {
          setSuggestions(knownSuggestions);
          setShowSuggestions(knownSuggestions.length > 0);
        }
        setIsLoading(false);
      },
    );
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const currentRequestId = ++requestIdRef.current;
    setInputValue(newValue);
    onChange(newValue);

    // Ensure services are ready (Google Maps may have loaded after mount)
    ensurePlacesServices();

    // Get suggestions from Google Places
    if (newValue.length > 2 && window.google?.maps?.places) {
      setIsLoading(true);
      const knownSuggestions = getFilteredKnownSuggestions(newValue);
      try {
        if (supportsNewAutocomplete.current) {
          const response =
            await window.google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
              {
                input: newValue,
                includedRegionCodes: ["ls"],
              },
            );

          if (currentRequestId !== requestIdRef.current) return;

          const mapped = mapNewSuggestions(response);
          const merged = [...knownSuggestions, ...mapped];
          setSuggestions(merged);
          setShowSuggestions(merged.length > 0);
          setIsLoading(false);
          return;
        }

        requestLegacyPredictions(newValue, knownSuggestions, currentRequestId);
        return;
      } catch (err) {
        console.error("Error getting suggestions:", err);
        requestLegacyPredictions(newValue, knownSuggestions, currentRequestId);
        return;
      }
    } else {
      const knownSuggestions = getFilteredKnownSuggestions(newValue);
      setSuggestions(knownSuggestions);
      setShowSuggestions(knownSuggestions.length > 0);
    }
  };

  const resolveGooglePlaceCoords = (
    placeId: string,
  ): Promise<{ lat: number; lng: number } | null> => {
    return new Promise((resolve) => {
      if (!placesService.current) {
        resolve(null);
        return;
      }
      placesService.current.getDetails(
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

  const handleSuggestionClick = async (suggestion: AddressSuggestion) => {
    const address = suggestion.description;
    setInputValue(address);
    setShowSuggestions(false);
    onChange(address);

    if (!onSelectWithCoords) return;

    // Known location — exact coordinates available immediately
    if (
      suggestion.isKnown &&
      suggestion.lat != null &&
      suggestion.lng != null
    ) {
      onSelectWithCoords(address, suggestion.lat, suggestion.lng);
      return;
    }

    // Google Places suggestion — resolve coordinates via place_id
    if (suggestion.placeId) {
      const coords = await resolveGooglePlaceCoords(suggestion.placeId);
      if (coords) {
        onSelectWithCoords(address, coords.lat, coords.lng);
      }
    }
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleFocus = () => {
    if (inputValue.length >= 2 && suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          required={required}
          autoComplete="off"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <div className="absolute right-3 top-3 flex items-center space-x-2">
          {isLoading && (
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          )}

          {!isLoading && inputValue && (
            <button
              type="button"
              onClick={() => {
                setInputValue("");
                onChange("");
                setSuggestions([]);
                inputRef.current?.focus();
              }}
              className="text-gray-400 hover:text-gray-600"
              title="Clear"
            >
              <FaXmark />
            </button>
          )}
        </div>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-[28rem] overflow-y-auto">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full text-left px-4 py-3 focus:outline-none border-b border-gray-100 last:border-b-0 ${
                suggestion.isKnown
                  ? "bg-emerald-50 hover:bg-emerald-100"
                  : "hover:bg-blue-50 focus:bg-blue-50"
              }`}
            >
              <div className="flex items-center gap-2">
                {suggestion.isKnown && (
                  <FaLocationDot className="text-emerald-600 shrink-0 text-xs mt-0.5" />
                )}
                <div className="font-medium text-gray-900 text-sm text-left break-words leading-snug">
                  {suggestion.mainText}
                </div>
              </div>
              {suggestion.secondaryText && (
                <div
                  className={`text-xs text-gray-500 mt-0.5 text-left break-words leading-snug ${suggestion.isKnown ? "pl-4" : ""}`}
                >
                  {suggestion.secondaryText}
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {!window.google && (
        <p className="mt-1 text-sm text-yellow-600">
          Google Maps not loaded. Check your API key.
        </p>
      )}
    </div>
  );
}
