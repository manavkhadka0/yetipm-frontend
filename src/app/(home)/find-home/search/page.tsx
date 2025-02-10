"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { SlidersHorizontal, MapPin, DollarSign, Home, SquareIcon as SquareFoot } from "lucide-react"
import type { City } from "@/types/city"
import type { Rental } from "@/types/rentals"
import RentalCard from "@/components/cards/RentalCard"
import RentalCardSkeleton from "@/components/cards/RentalCardSkeleton"
import type { Features } from "@/types/features"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [cities, setCities] = useState<City[]>([])
  const [rentals, setRentals] = useState<Rental[]>([])
  const [isLoadingRentals, setIsLoadingRentals] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(searchParams.get("city"))
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(searchParams.get("price_range"))
  const [selectedPropertyType, setSelectedPropertyType] = useState<string | null>(searchParams.get("property_type"))
  const [selectedBeds, setSelectedBeds] = useState<number | null>(searchParams.get("beds") ? parseInt(searchParams.get("beds")!) : null)
  const [selectedBaths, setSelectedBaths] = useState<number | null>(searchParams.get("baths") ? parseInt(searchParams.get("baths")!) : null)
  const [selectedAreaRange, setSelectedAreaRange] = useState<string | null>(searchParams.get("area_range"))
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(searchParams.getAll("amenities"))
  const [features, setFeatures] = useState<Features[]>([]);
  const fetchCities = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cities/`)
      const data = await response.json()
      setCities(data.results)
    } catch {
      setError("Failed to fetch cities")
    }
  }

  const fetchFeatures = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/features/`)
      const data = await response.json()
      setFeatures(data.results)
    } catch {
      setError("Failed to fetch features")
    }
  }

  // Fetch rentals
  const fetchRentals = async () => {
    setIsLoadingRentals(true)
    try {
      const params = new URLSearchParams()
      if (selectedCity) params.append("city", selectedCity)
      if (selectedPriceRange) {
        const [min, max] = selectedPriceRange.split("-")
        params.append("min_price", min)
        params.append("max_price", max === "+" ? "1000000" : max)
      }
      if (selectedPropertyType) params.append("property_type", selectedPropertyType)
      if (selectedBeds) params.append("beds", selectedBeds.toString())
      if (selectedBaths) params.append("baths", selectedBaths.toString())
      if (selectedAreaRange) {
        const [min, max] = selectedAreaRange.split("-")
        params.append("min_area_square_footage", min)
        params.append("max_area_square_footage", max === "+" ? "1000000" : max)
      }
      if (selectedAmenities.length > 0) {
        selectedAmenities.forEach((feature) => {
          params.append("features", feature)
        })
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/?${params.toString()}`)
      const data = await response.json()
      setRentals(data.results)
    } catch {
      setError("Failed to fetch rentals")
    } finally {
      setIsLoadingRentals(false)
    }
  }

  useEffect(() => {
    fetchCities()
    fetchFeatures()
  }, [])

  useEffect(() => {
    fetchRentals()
  }, [
    selectedCity,
    selectedPriceRange,
    selectedPropertyType,
    selectedBeds,
    selectedBaths,
    selectedAreaRange,
    selectedAmenities,
  ])

  const handleCityChange = (value: string) => setSelectedCity(value)
  const handlePriceChange = (value: string) => setSelectedPriceRange(value)
  const handlePropertyTypeChange = (value: string) => setSelectedPropertyType(value)
  const handleBedsChange = (value: number) => setSelectedBeds(value)
  const handleBathsChange = (value: number) => setSelectedBaths(value)
  const handleAreaChange = (value: string) => setSelectedAreaRange(value)
  const handleAmenityChange = (value: string) => {
    setSelectedAmenities((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image src="/single.png" alt="Beautiful homes landscape" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Rental Home</h1>
          <p className="text-xl max-w-2xl text-center">
            Discover the perfect rental property that matches your lifestyle and preferences
          </p>
        </div>
      </div>

      {/* Search Filters Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 -mt-24 relative z-10">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px]">
              <Select onValueChange={handleCityChange} value={selectedCity || undefined}>
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
              <Select onValueChange={handlePriceChange} value={selectedPriceRange || undefined}>
                <SelectTrigger className="h-12">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000-1500">$1,000 - $1,500</SelectItem>
                  <SelectItem value="1500-2000">$1,500 - $2,000</SelectItem>
                  <SelectItem value="2000-+">$2,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-48">
              <Select onValueChange={handlePropertyTypeChange} value={selectedPropertyType || undefined}>
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
        </div>

        {/* Advanced Filters Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Advanced Filters</h2>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              More Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3 text-gray-700">Bedrooms</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <Button
                    key={num}
                    variant={selectedBeds === num ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => handleBedsChange(num)}
                  >
                    {num}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3 text-gray-700">Bathrooms</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <Button
                    key={num}
                    variant={selectedBaths === num ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => handleBathsChange(num)}
                  >
                    {num}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3 text-gray-700">Square Feet</h3>
              <Select onValueChange={handleAreaChange} value={selectedAreaRange || undefined}>
                <SelectTrigger>
                  <SquareFoot className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500-1000">500 - 1,000 sq ft</SelectItem>
                  <SelectItem value="1000-1500">1,000 - 1,500 sq ft</SelectItem>
                  <SelectItem value="1500-2000">1,500 - 2,000 sq ft</SelectItem>
                  <SelectItem value="2000-+">2,000+ sq ft</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3 text-gray-700">Features</h3>
              <div className="space-y-2">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-center">
                    <Checkbox
                      id={feature.id.toString()}
                      checked={selectedAmenities.includes(feature.id.toString())}
                      onCheckedChange={() => handleAmenityChange(feature.id.toString())}
                    />
                    <label
                      htmlFor={feature.id.toString()}
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {feature.name.charAt(0).toUpperCase() + feature.name.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Properties</h2>

          {error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <Button
                onClick={() => {
                  fetchCities()
                  fetchRentals()
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
              <p className="text-gray-600">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}