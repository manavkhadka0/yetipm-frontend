import HeadingSection from "@/components/common/heading-section";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        {/* Hero Section */}

        <HeadingSection
          title="Home-leasing, simplified"
          subtitle="Your journey to finding the perfect home starts here"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {[
            {
              title: "Before you apply",
              description:
                "Whether you're new to leasing or have been renting houses for years, we'll make finding your home as smooth as possible.",
              image: "/tips.png",
              alt: "Family discussing home leasing",
            },
            {
              title: "Qualification requirements",
              description:
                "You're on your way to a worry-free leasing lifestyle. First, let's make sure you meet the qualification requirements.",
              image: "/tips2.png",
              alt: "Family in kitchen",
            },
            {
              title: "Application process",
              description:
                "Our application process couldn't be easier. No, really. You can do everything online, and we're always here to help.",
              image: "/tips3.png",
              alt: "Family cooking together",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-72 mb-6 overflow-hidden border-2 border-gray-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="relative p-8 bg-white border-2 border-gray-100  ">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
