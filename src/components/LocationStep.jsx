import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";

export const LocationStep = ({ formData, updateFormData, handleNext }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1); // Track focused result index
  const [error, setError] = useState(""); // For validation message

  const searchLocation = async (query) => {
    if (!query) {
      setSearchResults([]);
      setFocusedIndex(-1);
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query},USA&format=json&countrycodes=us`
      );
      const data = await response.json();
      const usLocations = data.filter((result) =>
        result.display_name.includes("United States")
      );
      setSearchResults(usLocations);
      setFocusedIndex(-1); // Reset focus index
    } catch (error) {
      console.error("Error searching locations:", error);
      toast.error("Error searching locations. Please try again.");
    }
    setIsSearching(false);
  };

  const handleLocationSelect = (location) => {
    updateFormData("cityToBuy", location.display_name);
    updateFormData("coordinates", {
      lat: parseFloat(location.lat),
      lng: parseFloat(location.lon),
    });
    setSearchResults([]);
    setFocusedIndex(-1);
    setError(""); // Clear error if any
  };

  const handleKeyDown = (event) => {
    if (searchResults.length === 0) return;

    if (event.key === "ArrowDown") {
      // Navigate down
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex < searchResults.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      // Navigate up
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : searchResults.length - 1
      );
    } else if (event.key === "Enter" && focusedIndex >= 0) {
      // Select the focused result
      handleLocationSelect(searchResults[focusedIndex]);
    }
  };

  // Attach keydown listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchResults, focusedIndex]);

  const handleSubmit = () => {
    if (!formData.cityToBuy.trim()) {
      setError("City name is required.");
      return;
    }
    handleNext();
  };

  return (
    <div className="lg:w-[1087px] bg-white flex flex-col">
      <div className="p-4">
        <div className="mb-4 flex items-center gap-4">
          <Input
            className={`py-7 placeholder:text-xl flex-grow ${
              error ? "border-red-500" : ""
            }`}
            placeholder="Enter your city name"
            value={formData.cityToBuy}
            onChange={(e) => {
              updateFormData("cityToBuy", e.target.value);
              searchLocation(e.target.value);
              setError(""); // Clear error on input change
            }}
          />
          <Button
            className="flex items-center gap-1"
            variant="primary"
            onClick={handleSubmit}
          >
            Next
          </Button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {isSearching && <div className="mt-2 text-gray-600">Searching...</div>}
        {searchResults.length > 0 && (
          <div className="mt-2 border rounded-md shadow-lg">
            {searchResults.map((result, index) => (
              <div
                key={index}
                className={`p-2 cursor-pointer ${
                  index === focusedIndex ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
                onClick={() => handleLocationSelect(result)}
              >
                {result.display_name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
