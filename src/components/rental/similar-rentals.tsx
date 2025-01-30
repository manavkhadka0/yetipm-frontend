import HeadingSection from "@/components/common/heading-section";
import RentalCard from "@/components/cards/RentalCard";
import Link from "next/link";
import { Rental } from "@/types/rentals";

type SimilarRentalsProps = {
  similarRentals: Rental[];
};

export default function SimilarRentals({
  similarRentals,
}: SimilarRentalsProps) {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <HeadingSection
          badge="Similar Properties"
          title="Explore Similar Properties"
          subtitle="Discover properties that match your criteria."
        />

        {/* Featured Properties Grid */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {similarRentals.map((rental) => (
              <RentalCard key={rental.id} rental={rental} />
            ))}
          </div>

          {/* View All Properties Button */}
          <div className="text-center mt-12 md:mt-16">
            <Link
              href="/find-home/search"
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white border-2 border-[#003d21]/20 text-[#003d21] rounded-full font-semibold hover:border-[#003d21]/40 transition-all duration-300 hover:shadow-lg"
            >
              <span className="relative">
                View All Properties
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003d21] transition-all group-hover:w-full"></span>
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
