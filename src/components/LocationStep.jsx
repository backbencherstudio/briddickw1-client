import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import TopArrowIcon from "../../public/icons/TopArrow";

export const LocationStep = ({ formData, updateFormData, handleNext }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1); // Track focused result index
  const [error, setError] = useState(""); // For validation message

  // 1) Helper function to reshape the display_name
  const formatDisplayName = (rawDisplayName) => {
    // Example raw display_name:
    // "2239, West Birch Street, Forest Ridge, Bellingham, Whatcom County, Washington, 98229, United States"

    // Split on commas & trim extra whitespace
    const parts = rawDisplayName.split(",").map((item) => item.trim());
    // parts[0] = "2239"
    // parts[1] = "West Birch Street"
    // parts[2] = "Forest Ridge"
    // parts[3] = "Bellingham"
    // parts[4] = "Whatcom County"
    // parts[5] = "Washington"
    // parts[6] = "98229"
    // parts[7] = "United States"

    // Combine first two as "2239 West Birch Street"
    const street = parts[0] && parts[1] ? `${parts[0]} ${parts[1]}` : parts[0];

    // Find next piece that might be the city (often index 3 or 4, but it can vary).
    // For simplicity, let's pick the first part that looks nothing like "Washington", "United States", or any numeric zip.
    // Alternatively, if you know for sure the city is always parts[3], just use parts[3].
    let city = "";
    for (let i = 2; i < parts.length; i++) {
      const val = parts[i].toLowerCase();
      // Skip if it's "washington", "united states", numeric (zip), or "county" text
      if (
        !val.includes("washington") &&
        !val.includes("united states") &&
        !val.includes("county") &&
        !/^\d+$/.test(val) // skip pure numbers (e.g. zip code)
      ) {
        city = parts[i];
        break;
      }
    }

    // Force state to "WA" since everything is in Washington
    const state = "WA";

    // Final format: "2239 West Birch Street, Bellingham, WA"
    // If city is missing, it’ll just be "2239 West Birch Street, , WA".
    // So you may want to handle that case if necessary.
    return `${street || ""}, ${city || ""}, ${state}`;
  };

  const searchLocation = async (query) => {
    if (!query) {
      setSearchResults([]);
      setFocusedIndex(-1);
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query},Washington&format=json&countrycodes=us`
      );
      const data = await response.json();
      console.log("data:", data);
      

      // Filter to ensure we only keep US addresses (if you want)
      const usLocations = data.filter((result) =>
        result.display_name.includes("United States")
      );
      setSearchResults(usLocations);
      setFocusedIndex(-1);
    } catch (error) {
      console.error("Error searching locations:", error);
      toast.error("Error searching locations. Please try again.");
    }
    setIsSearching(false);
  };

  const handleLocationSelect = (location) => {
    // 2) Format the display_name
    const formattedAddress = formatDisplayName(location.display_name);

    // 3) Update form data with the shorter version
    updateFormData("addressToSell", formattedAddress);
    // updateFormData("coordinates", {
    //   lat: parseFloat(location.lat),
    //   lng: parseFloat(location.lon),
    // });

    // Close search results
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
    if (!formData.addressToSell.trim()) {
      setError("City name is required.");
      return;
    }
    handleNext();
  };

  return (
    <div className="lg:w-[987px] flex flex-col rounded-2xl rounded-tl-none shadow-lg">
      <div className="p-4 md:w-[700px] lg:w-[987px] rounded-2xl">
        <div className="mb-4 flex items-center gap-4 rounded-2xl">
          <Input
            className={`py-7 lg:placeholder:text-xl flex-grow border-none outline-none ${
              error ? "border-red-500" : ""
            }`}
            placeholder="Enter the address you are selling"
            value={formData.addressToSell}
            onChange={(e) => {
              updateFormData("addressToSell", e.target.value);
              searchLocation(e.target.value);
              setError(""); // Clear error on input change
            }}
          />

          <Button
            className="flex items-center gap-1 md:px-4 md:py-3"
            variant="primary"
            onClick={handleSubmit}
          >
            Compare Agents
            <TopArrowIcon />
          </Button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {isSearching && <div className="mt-2 text-gray-600">Searching...</div>}

        {searchResults.length > 0 && (
          <div className="mt-2 border rounded-md shadow-lg">
            {searchResults.map((result, index) => {
              // Format each display_name for list rendering
              const formattedName = formatDisplayName(result.display_name);
              return (
                <div
                  key={index}
                  className={`p-2 cursor-pointer ${
                    index === focusedIndex
                      ? "bg-gray-200"
                      : "hover:bg-gray-100 rounded-2xl"
                  }`}
                  onClick={() => handleLocationSelect(result)}
                >
                  {formattedName}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
