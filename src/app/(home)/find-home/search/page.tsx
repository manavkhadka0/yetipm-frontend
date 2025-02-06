"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  DollarSign,
  Home,
} from "lucide-react";
import { City } from "@/types/city";
import { Rental } from "@/types/rentals";
import RentalCard from "@/components/cards/RentalCard";
import RentalCardSkeleton from "@/components/cards/RentalCardSkeleton";

export default function SearchPage() {
  const [cities, setCities] = useState<City[]>([]);
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [isLoadingRentals, setIsLoadingRentals] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
const [selectedPropertyType, setSelectedPropertyType] = useState<string | null>(null);


  // Fetch cities
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

  // Fetch rentals
  const fetchRentals = async () => {
  setIsLoadingRentals(true);
  try {
    const params: URLSearchParams = new URLSearchParams();
    if (selectedCity) params.append("city", selectedCity);
    if (selectedPriceRange) params.append("price_range", selectedPriceRange);
    if (selectedPropertyType) params.append("property_type", selectedPropertyType);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects/?availability=true&${params.toString()}`
    );
    const data = await response.json();
    setRentals(data.results);
  } catch {
    setError("Failed to fetch rentals");
  } finally {
    setIsLoadingRentals(false);
  }
};
const handleCityChange = (value: string) => {
  setSelectedCity(value);
  fetchRentals(); // Refetch rentals when city changes
};

const handlePriceChange = (value: string) => {
  setSelectedPriceRange(value);
  fetchRentals(); // Refetch rentals when price range changes
};

const handlePropertyTypeChange = (value: string) => {
  setSelectedPropertyType(value);
  fetchRentals(); // Refetch rentals when property type changes
};


  useEffect(() => {
    fetchCities();
    fetchRentals();
  }, []);

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
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px]">
              <Select onValueChange={handleCityChange}>
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
            <div className="w-48">
              <Select onValueChange={handlePriceChange}>
                <SelectTrigger className="h-12">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000-1500">$1,000 - $1,500</SelectItem>
                  <SelectItem value="1500-2000">$1,500 - $2,000</SelectItem>
                  <SelectItem value="2000+">$2,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-48">
              <Select onValueChange={handlePropertyTypeChange}>
                <SelectTrigger className="h-12">
                  <Home className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="h-12 px-8 bg-[#003d21] hover:bg-[#2d557d] text-white">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>

        {/* Advanced Filters Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Advanced Filters
            </h2>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              More Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3 text-gray-700">Bedrooms</h3>
              <div className="flex gap-2">
                {[1, 2, 3, "4+"].map((num) => (
                  <Button key={num} variant="outline" className="flex-1">
                    {num}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3 text-gray-700">Bathrooms</h3>
              <div className="flex gap-2">
                {[1, 2, 3, "4+"].map((num) => (
                  <Button key={num} variant="outline" className="flex-1">
                    {num}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3 text-gray-700">Square Feet</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500-1000">500 - 1,000 sq ft</SelectItem>
                  <SelectItem value="1000-1500">1,000 - 1,500 sq ft</SelectItem>
                  <SelectItem value="1500-2000">1,500 - 2,000 sq ft</SelectItem>
                  <SelectItem value="2000+">2,000+ sq ft</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3 text-gray-700">Amenities</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Amenities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="parking">Parking</SelectItem>
                  <SelectItem value="pool">Pool</SelectItem>
                  <SelectItem value="gym">Gym</SelectItem>
                  <SelectItem value="pets">Pet Friendly</SelectItem>
                </SelectContent>
              </Select>
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
