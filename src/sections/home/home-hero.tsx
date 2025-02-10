"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Search, MapPin } from "lucide-react"
import { locations } from "@/components/layout/main/footer/footer-config"

export default function Page() {
  const [activeTab, setActiveTab] = useState<"custom" | "location">("custom")
  const router = useRouter()

  const handleCitySelect = async (city: string,) => {
    try {
      const cityId = locations.find((loc) => loc.label === city)?.href || ""
      const response = await fetch(`https://yetipm.baliyoventures.com/api/projects/?city=${encodeURIComponent(cityId)}`)

      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const data = await response.json()
      router.push(
        `/find-home/search?city=${encodeURIComponent(cityId)}&data=${encodeURIComponent(JSON.stringify(data))}`,
      )
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const handleCustomSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const params = new URLSearchParams()

    const city = formData.get("city")
    const priceRange = formData.get("price_range")
    const bedrooms = formData.get("bedrooms")
    const bathrooms = formData.get("bathrooms")

    if (city) params.append("city", city.toString())
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.toString().split("-")
      params.append("min_price", minPrice)
      if (maxPrice) params.append("max_price", maxPrice)
    }
    if (bedrooms) params.append("beds", bedrooms.toString())
    if (bathrooms) params.append("baths", bathrooms.toString())
    router.push(`/find-home/search?${params.toString()}`)
  }

  // Mobile city selection sheet component
  const CitiesSheet = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full md:hidden flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          Select City
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh]">
        <SheetHeader>
          <SheetTitle>Select a City</SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-4 mt-6 overflow-y-auto">
          {locations.map((location) => (
            <Button
              key={location.href}
              variant="outline"
              className="justify-start h-12"
              onClick={() => handleCitySelect(location.label)}
            >
              <MapPin className="h-4 w-4 mr-2" />
              {location.label}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[700px]">
        <Image src="/hero.png" alt="People playing guitars in living room" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003d21]/80 to-[#003d21]/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <div className="space-y-4">
            <h1 suppressHydrationWarning className="text-4xl md:text-6xl font-bold text-shadow-lg">
              Your Property, Our Priority.
            </h1>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row">
          <Button
            variant="ghost"
            className={`px-6 sm:px-10 py-6 sm:py-8 font-medium rounded-none ${
              activeTab === "custom" ? "text-gray-900 bg-white" : "text-white bg-gray-600"
            }`}
            onClick={() => setActiveTab("custom")}
          >
            Custom Search
          </Button>
          <Button
            variant="ghost"
            className={`px-6 sm:px-10 py-6 sm:py-8 font-medium rounded-none ${
              activeTab === "location" ? "text-gray-900 bg-white" : "text-white bg-gray-600"
            }`}
            onClick={() => setActiveTab("location")}
          >
            View By Location
          </Button>
        </div>

        {/* Search Forms */}
        <div className="bg-white p-4 sm:p-10 rounded-lg shadow-lg">
          {activeTab === "custom" ? (
            <form onSubmit={handleCustomSearch} className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-full sm:flex-1">
                <Select name="city">
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location.href} value={location.label}>
                        {location.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-48">
                <Select name="price_range">
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                    <SelectItem value="1000-1500">$1,000 - $1,500</SelectItem>
                    <SelectItem value="1500-2000">$1,500 - $2,000</SelectItem>
                    <SelectItem value="2000+">$2,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-48">
                <Select name="bedrooms">
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Bedroom</SelectItem>
                    <SelectItem value="2">2 Bedrooms</SelectItem>
                    <SelectItem value="3">3 Bedrooms</SelectItem>
                    <SelectItem value="4">4+ Bedrooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-48">
                <Select name="bathrooms">
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Baths" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Bath</SelectItem>
                    <SelectItem value="2">2 Baths</SelectItem>
                    <SelectItem value="3">3 Baths</SelectItem>
                    <SelectItem value="4">4+ Baths</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="w-full sm:w-auto h-12 px-8 bg-[#003d21] hover:bg-[#003d21]/80 text-white"
              >
                <Search className="mr-2 h-4 w-4" />
                Search Now
              </Button>
            </form>
          ) : (
            <>
              {/* Mobile View */}
              <div className="md:hidden">
                <CitiesSheet />
              </div>

              {/* Desktop View */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
                {locations.map((location) => (
                  <Button
                    key={location.href}
                    variant="outline"
                    className="h-12 justify-start hover:bg-green-50"
                    onClick={() => handleCitySelect(location.label)}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    {location.label}
                  </Button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

