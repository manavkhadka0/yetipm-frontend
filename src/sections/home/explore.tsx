import Image from "next/image";
import Link from "next/link";
import { MapPin, Home, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const highlights = [
  {
    icon: Home,
    title: "Premium Homes",
    description: "Carefully curated properties with modern amenities",
    delay: "delay-100",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Strategically located across DFW Metroplex",
    delay: "delay-200",
  },
  {
    icon: Star,
    title: "Quality Living",
    description: "Move-in ready homes with thoughtful designs",
    delay: "delay-300",
  },
];

export default function ExploreSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Add decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-4 top-1/4 w-24 h-24 bg-[#f5e6d3]/30 rounded-full blur-2xl" />
        <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-[#003d21]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative group animate-fade-in-up">
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/image2.png"
                alt="Brand new houses for rent"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card - Updated with animations */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg transform transition-all duration-500 group-hover:translate-y-[-8px]">
              <div className="grid grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "text-center transform transition-all duration-500",
                      "hover:scale-105",
                      item.delay
                    )}
                  >
                    <div className="inline-flex p-2 rounded-lg bg-[#f5e6d3]/30 mb-3 transition-colors duration-300 hover:bg-[#f5e6d3]/50">
                      <item.icon className="w-5 h-5 text-[#003d21]" />
                    </div>
                    <h4 className="text-sm font-semibold text-[#003d21]">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section - Updated with better animations */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#003d21] leading-tight animate-fade-in-up">
                Find Your Dream Home in{" "}
                <span className="text-[#c8a977] relative">
                  Exceptional Communities
                  <span className="absolute bottom-0 left-0 w-full h-[0.2em] bg-[#f5e6d3] transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up delay-100">
                Explore our collection of single-family homes for lease in prime
                locations across DFW Metroplex. Step into a spacious,
                move-in-ready home featuring modern amenities, thoughtful
                design, and a seamless leasing experience. Don&apos;t miss your
                chance to secure the perfect home—apply now before it&apos;s too
                late!
              </p>
            </div>
            {/* Features List - Updated with staggered animations */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start space-x-3 text-gray-600",
                    "transform transition-all duration-500 hover:translate-x-2",
                    "animate-fade-in-up",
                    item.delay
                  )}
                >
                  <div className="flex-shrink-0 p-1 rounded-lg transition-colors duration-300 hover:bg-[#f5e6d3]/30">
                    <item.icon className="w-5 h-5 text-[#c8a977]" />
                  </div>
                  <p className="transition-colors duration-300 hover:text-[#003d21]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link
                href="/find-home/search"
                className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white border-2 border-[#003d21]/20 text-[#003d21] rounded-full font-semibold hover:border-[#003d21]/40 transition-all duration-300 hover:shadow-lg"
              >
                <span className="relative">
                  Explore Our Communities
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
            ;
          </div>
        </div>
      </div>
    </section>
  );
}
