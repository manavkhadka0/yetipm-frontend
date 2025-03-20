import Link from "next/link";
import HeadingSection from "@/components/common/heading-section";

export default function FeaturedListings() {
  return (
    <main className="text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className=" mx-auto text-center">
            <HeadingSection
              title="Live the worry-free leasing lifestyle"
              subtitle="Your journey to finding the perfect home starts here"
            />
            <p className="max-w-3xl mx-auto text-lg mb-10 text-black-600 leading-relaxed">
              Love the home, skip the commitment - Yeti PM has you covered. We
              offer pet-friendly homes equipped with smart technology, spacious
              yards, and located in amazing neighborhoods, giving you the
              perfect blend of modern convenience and comfort—all without the
              headaches and long-term commitment of homeownership
            </p>
            <Link
              href="/find-home/search"
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white border-2 border-[#003d21]/20 text-[#003d21] rounded-full font-semibold hover:border-[#003d21]/40 transition-all duration-300 hover:shadow-lg"
            >
              <span className="relative">
                Discover Your Dream Home
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
      </section>
    </main>
  );
}
