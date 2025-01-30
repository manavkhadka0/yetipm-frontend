"use client";

import { useState, useEffect } from "react";
import { Rental } from "@/types/rentals";
import RentalCard from "@/components/cards/RentalCard";
import RentalCardSkeleton from "@/components/cards/RentalCardSkeleton";

export default function FeaturedListings() {
  const [featuredRentals, setFeaturedRentals] = useState<Rental[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFeaturedRentals();
  }, []);

  const fetchFeaturedRentals = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/projects/?page_size=4`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFeaturedRentals(data.results);
    } catch (error) {
      console.error("Error fetching featured rentals:", error);
      setError("Failed to load featured properties");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Why settle for traditional?
              <br />
              Lease smarter, the Yeti way.
            </h1>
            <p className="max-w-3xl mx-auto text-lg mb-10 text-gray-600 leading-relaxed">
              Love the home, skip the commitment - Yeti PM has you covered. We
              offer pet-friendly homes equipped with smart technology, spacious
              yards, and located in amazing neighborhoods, giving you the
              perfect blend of modern convenience and comfort—all without the
              headaches and long-term commitment of homeownership
            </p>
            <button className="bg-primary text-white px-10 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105 transform">
              Discover your dream home
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
      </section>

      {/* Featured Listings Section */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white"></div>
        <div className="absolute right-0 top-0 w-1/3 h-96 bg-primary/5 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="absolute left-0 bottom-0 w-1/4 h-96 bg-primary/5 blur-3xl rounded-full transform -translate-x-1/2"></div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto mb-12 md:mb-16">
            {/* Section Header */}
            <div className="space-y-4 text-center">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                Exclusive Listings
              </span>
              <h2 className="text-3xl md:text-5xl font-bold">
                Featured Properties
                <span className="block text-primary/80 mt-4 text-lg md:text-xl font-normal">
                  Discover our hand-picked selection of premium homes
                </span>
              </h2>
              <div className="flex items-center justify-center gap-2 pt-4">
                <div className="w-8 md:w-12 h-1 bg-primary/20 rounded-full"></div>
                <div className="w-2 md:w-3 h-2 md:h-3 bg-primary/30 rounded-full"></div>
                <div className="w-8 md:w-12 h-1 bg-primary/20 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Featured Properties Grid */}
          <div className="relative max-w-7xl mx-auto">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    <RentalCardSkeleton />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="max-w-lg mx-auto">
                <div className="text-center py-12 md:py-16 px-6 bg-red-50/50 rounded-xl border border-red-100">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-7 h-7 md:w-8 md:h-8 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <p className="text-red-500 font-medium text-lg">{error}</p>
                    <button
                      onClick={fetchFeaturedRentals}
                      className="mt-2 px-4 py-2 text-sm text-red-500 border border-red-200 rounded-full hover:bg-red-50 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {featuredRentals.map((rental) => (
                  <div
                    key={rental.id}
                    className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    <RentalCard rental={rental} />
                  </div>
                ))}
              </div>
            )}

            {/* View All Properties Button */}
            <div className="text-center mt-12 md:mt-16">
              <button className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white border-2 border-primary/20 text-primary rounded-full font-semibold hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <span className="relative">
                  View All Properties
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
