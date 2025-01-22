import ResponsiveContainer from "@/components/common/responsive-container";
import Link from "next/link";

export default function HomeHero() {
  return (
    <ResponsiveContainer
      variant="wide"
      paddingX="xs"
      className="bg-white min-h-[90vh]"
    >
      <div className="relative overflow-hidden min-h-[90vh]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-2xl md:text-7xl font-black text-gray-900 tracking-tight max-w-5xl mx-auto leading-[1.1] mb-6">
              Find the Best Rentals
              <span className="block text-primary"> in United States</span>
            </h1>
            <p className="text-sm text-black max-w-xl mx-auto mb-10">
              Discover premium rental opportunities, from single-family homes to
              condos and townhomes across United States
            </p>

            {/* <div className="mt-8 max-w-3xl mx-auto">
              <SearchBar variant="hero" />
            </div> */}

            {/* Business Categories Quick Links */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                {
                  icon: "🏢",
                  title: "Offices",
                  link: "/offices-for-lease",
                  count: "250+",
                },
                {
                  icon: "🏠",
                  title: "Single Family Homes",
                  link: "/",
                  count: "180+",
                },
                {
                  icon: "🏬",
                  title: "Condos",
                  link: "/apartments",
                  count: "120+",
                },
                {
                  icon: "🏘️",
                  title: "Townhomes",
                  link: "/townhomes",
                  count: "90+",
                },
              ].map((category) => (
                <Link
                  key={category.title}
                  href={category.link}
                  className="group p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900">
                    {category.title}
                  </h3>
                  <p className="text-primary font-bold">{category.count}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
}
