// apps/customer/src/AddressAutocomplete.tsx
import { useState, useRef, useEffect } from "react";

type AddressAutocompleteProps = {
  value: string;
  onChange: (value: string) => void;
  onSelect?: (place: any) => void;
  placeholder?: string;
};

declare global {
  interface Window {
    google: any;
  }
}

export default function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  placeholder = "Enter address...",
}: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteServiceRef = useRef<any>(null);
  const placesServiceRef = useRef<any>(null);

  useEffect(() => {
    if (window.google && window.google.maps) {
      autocompleteServiceRef.current = new window.google.maps.places.AutocompleteService();
      placesServiceRef.current = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);

    if (val.length > 2 && autocompleteServiceRef.current) {
      autocompleteServiceRef.current.getPlacePredictions(
        { input: val, componentRestrictions: { country: "ls" } },
        (predictions: any[]) => {
          setSuggestions(predictions || []);
        }
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (placeId: string, description: string) => {
    onChange(description);
    setSuggestions([]);

    if (onSelect && placesServiceRef.current) {
      placesServiceRef.current.getDetails({ placeId }, (place: any) => {
        onSelect(place);
      });
    }
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-50">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() =>
                handleSelectSuggestion(
                  suggestion.place_id,
                  suggestion.description
                )
              }
              className="w-full text-left px-4 py-2 hover:bg-gray-100 border-b last:border-b-0"
            >
              <p className="font-medium text-sm">{suggestion.main_text}</p>
              <p className="text-xs text-gray-500">
                {suggestion.secondary_text}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
