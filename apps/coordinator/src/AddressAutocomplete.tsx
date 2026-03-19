import { useState, useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";

declare global {
  interface Window {
    google: any;
  }
}

interface AddressAutocompleteProps {
  label: string;
  value: string;
  onChange: (address: string) => void;
  placeholder?: string;
  required?: boolean;
}

interface AddressSuggestion {
  id: string;
  description: string;
  mainText: string;
  secondaryText?: string;
}

export default function AddressAutocomplete({
  label,
  value,
  onChange,
  placeholder = "Start typing address...",
  required = false,
}: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const autocompleteService = useRef<any>(null);
  const supportsNewAutocomplete = useRef(false);

  // Initialize Google Places Autocomplete
  useEffect(() => {
    if (window.google && window.google.maps) {
      const places = window.google.maps.places;
      supportsNewAutocomplete.current =
        !!places?.AutocompleteSuggestion?.fetchAutocompleteSuggestions;

      if (!supportsNewAutocomplete.current && places?.AutocompleteService) {
        autocompleteService.current = new places.AutocompleteService();
      }
    }
  }, []);

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
        const placeId = prediction?.placeId || `new-suggestion-${index}`;

        return {
          id: placeId,
          description:
            text || [mainText, secondaryText].filter(Boolean).join(", "),
          mainText: mainText || text,
          secondaryText,
        };
      })
      .filter((item: AddressSuggestion) => !!item.description);
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);

    // Get suggestions from Google Places
    if (newValue.length > 2 && window.google?.maps?.places) {
      setIsLoading(true);
      try {
        if (supportsNewAutocomplete.current) {
          const response =
            await window.google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
              {
                input: newValue,
                componentRestrictions: { country: "ls" },
              },
            );

          const mapped = mapNewSuggestions(response);
          setSuggestions(mapped);
          setShowSuggestions(mapped.length > 0);
          setIsLoading(false);
          return;
        }

        if (autocompleteService.current) {
          autocompleteService.current.getPlacePredictions(
            {
              input: newValue,
              componentRestrictions: { country: "ls" }, // Lesotho only
            },
            (predictions: any[], status: any) => {
              if (
                status === window.google.maps.places.PlacesServiceStatus.OK &&
                predictions
              ) {
                const mapped = mapLegacyPredictions(predictions);
                setSuggestions(mapped);
                setShowSuggestions(mapped.length > 0);
              } else {
                setSuggestions([]);
                setShowSuggestions(false);
              }
              setIsLoading(false);
            },
          );
          return;
        }

        setSuggestions([]);
        setShowSuggestions(false);
        setIsLoading(false);
      } catch (err) {
        console.error("Error getting suggestions:", err);
        setSuggestions([]);
        setShowSuggestions(false);
        setIsLoading(false);
      }
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: AddressSuggestion) => {
    const address = suggestion.description;
    setInputValue(address);
    setShowSuggestions(false);
    onChange(address);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleFocus = () => {
    if (inputValue.length > 2 && suggestions.length > 0) {
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
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-4 py-3 hover:bg-blue-50 focus:bg-blue-50 focus:outline-none border-b border-gray-100 last:border-b-0"
            >
              <div className="font-medium text-gray-900">
                {suggestion.mainText}
              </div>
              {suggestion.secondaryText && (
                <div className="text-sm text-gray-500">
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
