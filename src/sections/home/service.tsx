"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import HeadingSection from "@/components/common/heading-section";

// Separate the types and data into their own sections for better organization
interface Service {
  id: string;
  name: string;
  title: string;
  description: string;
  imageSrc: string;
}

const services: Service[] = [
  {
    id: "procare",
    name: "ProCare™ service",
    title: "Resident-friendly, proactive service.",
    description:
      "As a valued resident, you'll get the VIP treatment with proactive maintenance visits and 24/7 emergency services available throughout the lease.",
    imageSrc: "/hero.png",
  },
  {
    id: "lease-easy",
    name: "Lease Easy™ bundle",
    title: "Simplify your leasing experience.",
    description:
      "Bundle your essential services including utilities, internet, and maintenance for a hassle-free living experience.",
    imageSrc: "/hero.png",
  },
  {
    id: "pet-friendly",
    name: "Pet-friendly homes",
    title: "Welcome home, furry friends!",
    description:
      "Our homes are designed to accommodate your pets with special amenities and pet-friendly policies to ensure everyone's comfort.",
    imageSrc: "/hero.png",
  },
  {
    id: "add-on",
    name: "Add-on services",
    title: "Customize your living experience.",
    description:
      "Choose from a variety of additional services including smart home features, premium appliances, and more.",
    imageSrc: "/hero.png",
  },
];

// Separate components for better organization
function ServiceNavButton({
  service,
  isActive,
  onClick,
}: {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left px-6 py-6 transition-all duration-300",
        "flex items-center justify-between group",
        isActive ? "bg-[#003d21] text-white" : "text-white/90 hover:bg-white/10"
      )}
      aria-label={`View details for ${service.name}`}
    >
      <span className="font-medium">{service.name}</span>
      <ChevronRight
        className={cn(
          "w-5 h-5 transition-transform duration-300",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
          isActive
            ? "translate-x-0"
            : "-translate-x-2 group-hover:translate-x-0"
        )}
      />
    </button>
  );
}

function ServiceContent({ service }: { service: Service }) {
  return (
    <div className="relative z-10 p-12 min-h-[500px] flex items-center">
      <div className="max-w-xl">
        <h3 className="text-4xl font-bold text-white mb-6 transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-white/90 text-lg mb-8 leading-relaxed transition-all duration-300">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-16 relative">
          <h2 className="text-[#003d21] font-bold text-5xl md:text-6xl">
            Live the worry-free leasing lifestyle.
          </h2>
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-50 blur-3xl -z-10" />
        </div> */}

        <HeadingSection
          title="Live the worry-free leasing lifestyle."
          subtitle="Your journey to finding the perfect home starts here"
        />

        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <nav className="md:w-72 flex-shrink-0 bg-[#003d21]/90 backdrop-blur-lg">
              {services.map((service) => (
                <ServiceNavButton
                  key={service.id}
                  service={service}
                  isActive={activeService.id === service.id}
                  onClick={() => setActiveService(service)}
                />
              ))}
            </nav>

            <div className="relative flex-grow">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/hero.png"
                  alt={`${activeService.name} illustration`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003d21]/90 to-transparent" />
              </div>
              <ServiceContent service={activeService} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
