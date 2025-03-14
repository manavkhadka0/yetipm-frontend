import Link from "next/link";
import HeadingSection from "@/components/common/heading-section";
import Image from "next/image";

const tipsSections = [
  {
    id: "before-apply",
    title: "Before You Apply",
    description:
      "Before submitting your application, review these key points to ensure a smooth process.",
    image: "/tips.png",
    alt: "Family discussing home leasing",
  },
  {
    id: "qualification-requirements",
    title: "Qualification Requirements",
    description: "Applicants must meet the following criteria:",
    image: "/tips2.png",
    alt: "Family in kitchen",
  },
  {
    id: "application-process",
    title: "Application Process",
    description: "Follow these steps to apply:",
    image: "/tips3.png",
    alt: "Family cooking together",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <HeadingSection
          title="Home-leasing, Simplified"
          subtitle="Your journey to finding the perfect home starts here"
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {tipsSections.map((section) => (
            <Link
              href={`/leasing/${section.id}`}
              key={section.id}
              className="group"
            >
              <div className="relative group transition-all duration-300 hover:scale-[1.02]">
                <div className="relative h-72 mb-6 overflow-hidden border-2 border-gray-100">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="relative p-8 bg-white border-2 border-gray-100">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                    <span>Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
