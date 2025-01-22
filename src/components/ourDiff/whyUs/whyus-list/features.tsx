import { Shield, Building2, Home, Clock, Key, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Top-level property management",
    description:
      "We hire experienced, caring professionals who are committed to providing outstanding service.",
  },
  {
    icon: Building2,
    title: "Wide selection of homes in desirable neighborhoods.",
    description:
      "We carefully select homes in great neighborhoods in close proximity to good schools and jobs.",
  },
  {
    icon: Home,
    title: "All homes recently updated and renovated.",
    description:
      "In 2020, we invested about $39,000 in each house we purchased to make sure it was ready to call home.",
  },
  {
    icon: Clock,
    title: "ProCare Service and 24/7 Emergency Maintenance.",
    description:
      "Our proactive maintenance program sets a new standard for care. And our maintenance app puts you in control.",
  },
  {
    icon: Key,
    title: "Smart Home technology features.",
    description:
      "Enjoy the ease and security of managing your home right from your phone.",
  },
  {
    icon: Users,
    title: "Good neighbors.",
    description:
      "We hire locally and are actively engaged in a broad range of community and philanthropic activities.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-[#336699]/10">
      <section className="py-10 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The YETI HOME Difference.
          </h2>
          <p className="text-xl text-gray-600">
            This is what it means to "live freer."
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-4">
                <feature.icon
                  className="w-8 h-8 text-[#336699]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
