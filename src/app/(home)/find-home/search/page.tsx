"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  SlidersHorizontal,
  MapPin,
  DollarSign,
  Home,
  SquareIcon as SquareFoot,
  X,
  XCircle,
} from "lucide-react";
import type { City } from "@/types/city";
import type { Rental } from "@/types/rentals";
import RentalCard from "@/components/cards/RentalCard";
import RentalCardSkeleton from "@/components/cards/RentalCardSkeleton";
import type { Features } from "@/types/features";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PriceRange {
  min: string;
  max: string;
}

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [cities, setCities] = useState<City[]>([]);
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [isLoadingRentals, setIsLoadingRentals] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(
    searchParams.get("city")
  );
  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: searchParams.get("min_price") || "",
    max: searchParams.get("max_price") || "",
  });
  const [selectedPropertyType, setSelectedPropertyType] = useState<
    string | null
  >(searchParams.get("property_type"));
  const [selectedBeds, setSelectedBeds] = useState<number | null>(
    searchParams.get("beds") ? parseInt(searchParams.get("beds")!) : null
  );
  const [selectedBaths, setSelectedBaths] = useState<number | null>(
    searchParams.get("baths") ? parseInt(searchParams.get("baths")!) : null
  );
  const [selectedAreaRange, setSelectedAreaRange] = useState<string | null>(
    searchParams.get("area_range")
  );
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    searchParams.getAll("amenities")
  );
  const [features, setFeatures] = useState<Features[]>([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Function to update URL params
  const updateURLParams = () => {
    const params = new URLSearchParams();
    if (selectedCity) params.append("city", selectedCity);
    if (priceRange.min) params.append("min_price", priceRange.min);
    if (priceRange.max) params.append("max_price", priceRange.max);
    if (selectedPropertyType)
      params.append("property_type", selectedPropertyType);
    if (selectedBeds) params.append("beds", selectedBeds.toString());
    if (selectedBaths) params.append("baths", selectedBaths.toString());
    if (selectedAreaRange) params.append("area_range", selectedAreaRange);
    selectedAmenities.forEach((amenity) => params.append("amenities", amenity));

    router.push(`/find-home/search?${params.toString()}`, { scroll: false });
  };

  const fetchCities = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cities/`
      );
      const data = await response.json();
      setCities(data.results);
    } catch {
      setError("Failed to fetch cities");
    }
  };

  const fetchFeatures = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/features/`
      );
      const data = await response.json();
      setFeatures(data.results);
    } catch {
      setError("Failed to fetch features");
    }
  };

  // Fetch rentals
  const fetchRentals = async () => {
    setIsLoadingRentals(true);
    try {
      const params = new URLSearchParams();
      if (selectedCity) params.append("city", selectedCity);
      if (priceRange.min) params.append("min_price", priceRange.min);
      if (priceRange.max) params.append("max_price", priceRange.max);
      if (selectedPropertyType)
        params.append("property_type", selectedPropertyType);
      if (selectedBeds) params.append("beds", selectedBeds.toString());
      if (selectedBaths) params.append("baths", selectedBaths.toString());
      if (selectedAreaRange) {
        const [min, max] = selectedAreaRange.split("-");
        params.append("min_area_square_footage", min);
        params.append("max_area_square_footage", max === "+" ? "1000000" : max);
      }
      if (selectedAmenities.length > 0) {
        selectedAmenities.forEach((feature) => {
          params.append("features", feature);
        });
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects/?${params.toString()}`
      );
      const data = await response.json();
      setRentals(data.results);
    } catch {
      setError("Failed to fetch rentals");
    } finally {
      setIsLoadingRentals(false);
    }
  };

  useEffect(() => {
    fetchCities();
    fetchFeatures();
  }, []);

  useEffect(() => {
    fetchRentals();
    updateURLParams();
  }, [
    selectedCity,
    priceRange,
    selectedPropertyType,
    selectedBeds,
    selectedBaths,
    selectedAreaRange,
    selectedAmenities,
  ]);

  const handleCityChange = (value: string) => setSelectedCity(value);
  const handlePriceChange = (type: "min" | "max", value: string) => {
    // Only allow numbers and empty string
    if (value === "" || /^\d*$/.test(value)) {
      setPriceRange((prev) => ({
        ...prev,
        [type]: value,
      }));
    }
  };
  const handlePropertyTypeChange = (value: string) =>
    setSelectedPropertyType(value);
  const handleBedsChange = (value: number | null) => setSelectedBeds(value);
  const handleBathsChange = (value: number | null) => setSelectedBaths(value);
  const handleAreaChange = (value: string) => setSelectedAreaRange(value);
  const handleAmenityChange = (value: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setSelectedCity(null);
    setPriceRange({ min: "", max: "" });
    setSelectedPropertyType(null);
    setSelectedBeds(null);
    setSelectedBaths(null);
    setSelectedAreaRange(null);
    setSelectedAmenities([]);
  };

  const removeFilter = (type: string, value?: string) => {
    switch (type) {
      case "city":
        setSelectedCity(null);
        break;
      case "price_range":
        setPriceRange({ min: "", max: "" });
        break;
      case "property_type":
        setSelectedPropertyType(null);
        break;
      case "beds":
        setSelectedBeds(null);
        break;
      case "baths":
        setSelectedBaths(null);
        break;
      case "area_range":
        setSelectedAreaRange(null);
        break;
      case "amenities":
        if (value) {
          setSelectedAmenities((prev) => prev.filter((item) => item !== value));
        }
        break;
    }
  };

  // Function to get display value for filters
  const getFilterDisplayValue = (type: string, value: string) => {
    switch (type) {
      case "city":
        return (
          cities.find((city) => city.id.toString() === value)?.name || value
        );
      case "price_range":
        const min = priceRange.min
          ? `$${parseInt(priceRange.min).toLocaleString()}`
          : "";
        const max = priceRange.max
          ? `$${parseInt(priceRange.max).toLocaleString()}`
          : "";
        return `${min} - ${max}`;
      case "property_type":
        return value;
      case "beds":
        return `${value} Bed${value === "1" ? "" : "s"}`;
      case "baths":
        return `${value} Bath${value === "1" ? "" : "s"}`;
      case "area_range":
        return value.replace("-", " - ").replace("+", "+ ") + " sq ft";
      case "amenities":
        return (
          features.find((feature) => feature.id.toString() === value)?.name ||
          value
        );
      default:
        return value;
    }
  };

  // Active filters component
  const ActiveFilters = () => {
    const hasActiveFilters =
      selectedCity ||
      priceRange.min ||
      priceRange.max ||
      selectedPropertyType ||
      selectedBeds ||
      selectedBaths ||
      selectedAreaRange ||
      selectedAmenities.length > 0;

    if (!hasActiveFilters) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {selectedCity && (
          <Badge variant="secondary" className="gap-1">
            {getFilterDisplayValue("city", selectedCity)}
            <XCircle
              className="h-4 w-4 cursor-pointer"
              onClick={() => removeFilter("city")}
            />
          </Badge>
        )}
        {(priceRange.min || priceRange.max) && (
          <Badge variant="secondary" className="gap-1">
            Price: {getFilterDisplayValue("price_range", "")}
            <XCircle
              className="h-4 w-4 cursor-pointer"
              onClick={() => removeFilter("price_range")}
            />
          </Badge>
        )}
        {selectedPropertyType && (
          <Badge variant="secondary" className="gap-1">
            {getFilterDisplayValue("property_type", selectedPropertyType)}
            <XCircle
              className="h-4 w-4 cursor-pointer"
              onClick={() => removeFilter("property_type")}
            />
          </Badge>
        )}
        {selectedBeds && (
          <Badge variant="secondary" className="gap-1">
            {getFilterDisplayValue("beds", selectedBeds.toString())}
            <XCircle
              className="h-4 w-4 cursor-pointer"
              onClick={() => removeFilter("beds")}
            />
          </Badge>
        )}
        {selectedBaths && (
          <Badge variant="secondary" className="gap-1">
            {getFilterDisplayValue("baths", selectedBaths.toString())}
            <XCircle
              className="h-4 w-4 cursor-pointer"
              onClick={() => removeFilter("baths")}
            />
          </Badge>
        )}
        {selectedAreaRange && (
          <Badge variant="secondary" className="gap-1">
            {getFilterDisplayValue("area_range", selectedAreaRange)}
            <XCircle
              className="h-4 w-4 cursor-pointer"
              onClick={() => removeFilter("area_range")}
            />
          </Badge>
        )}
        {selectedAmenities.map((amenity) => (
          <Badge key={amenity} variant="secondary" className="gap-1">
            {getFilterDisplayValue("amenities", amenity)}
            <XCircle
              className="h-4 w-4 cursor-pointer"
              onClick={() => removeFilter("amenities", amenity)}
            />
          </Badge>
        ))}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="gap-2"
          >
            Clear All
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/single.png"
          alt="Beautiful homes landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Find Your Dream Rental Home
          </h1>
          <p className="text-xl max-w-2xl text-center">
            Discover the perfect rental property that matches your lifestyle and
            preferences
          </p>
        </div>
      </div>

      {/* Search Filters Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 -mt-24 relative z-10">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-[200px]">
              <Select
                onValueChange={handleCityChange}
                value={selectedCity || undefined}
              >
                <SelectTrigger className="h-12">
                  <MapPin className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.id} value={city.id.toString()}>
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-72">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Price Range</Label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      type="text"
                      placeholder="Min"
                      className="pl-8 h-12"
                      value={priceRange.min}
                      onChange={(e) => handlePriceChange("min", e.target.value)}
                    />
                  </div>
                  <span className="text-gray-500">-</span>
                  <div className="relative flex-1">
                    <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      type="text"
                      placeholder="Max"
                      className="pl-8 h-12"
                      value={priceRange.max}
                      onChange={(e) => handlePriceChange("max", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-48">
              <Select
                onValueChange={handlePropertyTypeChange}
                value={selectedPropertyType || undefined}
              >
                <SelectTrigger className="h-12">
                  <Home className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Single Family">Single Family</SelectItem>
                  <SelectItem value="Condominium">Condominium</SelectItem>
                  <SelectItem value="Townhouse">Townhouse</SelectItem>
                  <SelectItem value="Duplex">Duplex</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <ActiveFilters />
        </div>

        {/* Advanced Filters Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Advanced Filters
            </h2>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              {showAdvancedFilters ? "Hide Filters" : "More Filters"}
            </Button>
          </div>

          <div
            className={cn(
              "transition-all duration-300",
              !showAdvancedFilters && "hidden"
            )}
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Bedrooms Section */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium">Bedrooms</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <Button
                        key={num}
                        variant={selectedBeds === num ? "default" : "outline"}
                        className={cn(
                          "h-12 w-full",
                          selectedBeds === num &&
                            "bg-primary text-primary-foreground"
                        )}
                        onClick={() =>
                          handleBedsChange(selectedBeds === num ? null : num)
                        }
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Bathrooms Section */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium">Bathrooms</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <Button
                        key={num}
                        variant={selectedBaths === num ? "default" : "outline"}
                        className={cn(
                          "h-12 w-full",
                          selectedBaths === num &&
                            "bg-primary text-primary-foreground"
                        )}
                        onClick={() =>
                          handleBathsChange(selectedBaths === num ? null : num)
                        }
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Square Feet Section */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium">Square Feet</Label>
                  <Select
                    onValueChange={handleAreaChange}
                    value={selectedAreaRange || undefined}
                  >
                    <SelectTrigger className="h-12">
                      <SquareFoot className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Select Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500-1000">
                        500 - 1,000 sq ft
                      </SelectItem>
                      <SelectItem value="1000-1500">
                        1,000 - 1,500 sq ft
                      </SelectItem>
                      <SelectItem value="1500-2000">
                        1,500 - 2,000 sq ft
                      </SelectItem>
                      <SelectItem value="2000-+">2,000+ sq ft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Features Section */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium">Features</Label>
                  <div className="bg-gray-50 rounded-lg p-3 max-h-[200px] overflow-y-auto space-y-2">
                    {features.map((feature) => (
                      <div
                        key={feature.id}
                        className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
                      >
                        <Checkbox
                          id={feature.id.toString()}
                          checked={selectedAmenities.includes(
                            feature.id.toString()
                          )}
                          onCheckedChange={() =>
                            handleAmenityChange(feature.id.toString())
                          }
                          className="rounded-sm"
                        />
                        <label
                          htmlFor={feature.id.toString()}
                          className="text-sm font-medium leading-none cursor-pointer select-none"
                        >
                          {feature.name.charAt(0).toUpperCase() +
                            feature.name.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Available Properties
          </h2>

          {error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <Button
                onClick={() => {
                  fetchCities();
                  fetchRentals();
                }}
                className="mt-4"
                variant="outline"
              >
                Try Again
              </Button>
            </div>
          ) : isLoadingRentals ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <RentalCardSkeleton key={index} />
              ))}
            </div>
          ) : rentals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rentals.map((rental) => (
                <RentalCard key={rental.id} rental={rental} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No properties found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
