"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState<"custom" | "location">("custom");

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/hero.png"
          alt="People playing guitars in living room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold mb-4">Your Property,</h1>
          <h2 className="text-6xl font-bold">Our Priority.</h2>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        {/* Navigation Tabs */}
        <div className="flex mb-4">
          <Button
            variant="ghost"
            className={`px-10 py-8 font-medium rounded-none ${
              activeTab === "custom"
                ? "text-gray-900 bg-white"
                : "text-white bg-gray-600"
            }`}
            onClick={() => setActiveTab("custom")}
          >
            Custom Search
          </Button>
          <Button
            variant="ghost"
            className={`px-10 py-8 font-medium rounded-none ${
              activeTab === "location"
                ? "text-gray-900 bg-white"
                : "text-white bg-gray-600"
            }`}
            onClick={() => setActiveTab("location")}
          >
            View By Location
          </Button>
        </div>

        {/* Search Forms */}
        <div className="bg-white p-10 rounded-lg shadow-lg ">
          {activeTab === "custom" ? (
            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state.toLowerCase()}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-48">
                <Select>
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
              <div className="w-48">
                <Select>
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
              <div className="w-48">
                <Select>
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
              <Button className="h-12 px-8 bg-[#336699] hover:bg-[#2d557d] text-white">
                <Search className="mr-2 h-4 w-4" />
                Search Now
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {states.map((state) => (
                <Button
                  key={state}
                  variant="outline"
                  className="h-12 justify-start hover:bg-green-50"
                >
                  {state}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
