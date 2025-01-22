import Image from "next/image";

const features = [
  {
    title: "Maintenance & Remodel",
    description: "Advanced Maintenance Management",
    icon: "/icons/maintenance.svg",
  },
  {
    title: "Tenants HVAC Filter Program",
    description: "Monthly Tenant Filter Delivery",
    icon: "/icons/hvac.svg",
  },
  {
    title: "Electronic Property Showings",
    description: "Quick and Easy 24/7 Online Access",
    icon: "/icons/electronic.svg",
  },
  {
    title: "24/7 Emergency Support",
    description: "Always at Your Service. Servicing your Tenant 24/7",
    icon: "/icons/support.svg",
  },
  {
    title: "Marketing & Advertising",
    description: "Most Homes Leased 23 Days or Less",
    icon: "/icons/marketing.svg",
  },
  {
    title: "Owner & Tenant Portal",
    description: "Quick and Easy 24/7 Online Access",
    icon: "/icons/portal.svg",
  },
  {
    title: "Online Rent Collections & Disbursements",
    description: "Convenient Payment Options and Owner Disbursements",
    icon: "/icons/payment.svg",
  },
  {
    title: "Comprehensive Tenant Screening",
    description: "Less than 1% Eviction Rates",
    icon: "/icons/screening.svg",
  },
  {
    title: "Reporting & Analytics",
    description: "Customizable Reports with Real Time Data",
    icon: "/icons/reporting.svg",
  },
];

export default function WeInclude() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary/90 mb-12">
          All Plans Include
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
