"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Property {
  id: number;
  city: string;
  region: "West" | "South" | "Midwest";
  homes: number;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    city: "Atlanta",
    region: "South",
    homes: 556,
    image: "/arozona.png",
  },
  {
    id: 2,
    city: "Austin",
    region: "South",
    homes: 17,
    image: "/California.png",
  },
  {
    id: 3,
    city: "Carolinas",
    region: "South",
    homes: 235,
    image: "/calgary.jpg",
  },
  {
    id: 4,
    city: "Chicago",
    region: "Midwest",
    homes: 36,
    image: "/single.png",
  },
  {
    id: 5,
    city: "Dallas",
    region: "South",
    homes: 215,
    image: "/florida.png",
  },
];

export default function Home() {
  const [activeRegion, setActiveRegion] = useState<
    "All" | "West" | "South" | "Midwest"
  >("All");

  const filteredProperties =
    activeRegion === "All"
      ? properties
      : properties.filter((property) => property.region === activeRegion);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          There&apos;s the old way to lease a home,
          <br />
          then there&apos;s our way.
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-8 text-gray-600">
          At YETI PM, we offer pet-friendly, yard-having homes for lease with
          Smart Home technology in awesome neighborhoods across the country.
          Live in a great house without the headache and long-term commitment of
          owning.
        </p>
        <button className="bg-[#336699] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2a547d] transition-colors">
          Discover your dream home
        </button>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            You just want to be you.{" "}
            <span className="text-[#336699]">
              We have a home for <p className="text-center">that.</p>
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center">
            Search homes for rent by region.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-8 mb-12 border-b border-gray-200">
          {["All", "West", "South", "Midwest"].map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region as typeof activeRegion)}
              className={`pb-4 px-4 relative ${
                activeRegion === region
                  ? "text-[#336699] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#336699]"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={`Homes in ${property.city}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{property.city}</h3>
                <p className="text-gray-600">{property.homes} HOMES</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
