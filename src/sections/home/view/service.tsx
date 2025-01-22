"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type Service = {
  id: string;
  name: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
};

const services: Service[] = [
  {
    id: "procare",
    name: "ProCare™ service",
    title: "Resident-friendly, proactive service.",
    description:
      "As a valued resident, you'll get the VIP treatment with proactive maintenance visits and 24/7 emergency services available throughout the lease.",
    buttonText: "Learn more",
    imageSrc: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "lease-easy",
    name: "Lease Easy™ bundle",
    title: "Simplify your leasing experience.",
    description:
      "Bundle your essential services including utilities, internet, and maintenance for a hassle-free living experience.",
    buttonText: "View bundle details",
    imageSrc: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "pet-friendly",
    name: "Pet-friendly homes",
    title: "Welcome home, furry friends!",
    description:
      "Our homes are designed to accommodate your pets with special amenities and pet-friendly policies to ensure everyone's comfort.",
    buttonText: "See pet policy",
    imageSrc: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "add-on",
    name: "Add-on services",
    title: "Customize your living experience.",
    description:
      "Choose from a variety of additional services including smart home features, premium appliances, and more.",
    buttonText: "Explore services",
    imageSrc: "/placeholder.svg?height=600&width=800",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#336699] to-[#1a334d] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-5xl font-bold text-center mb-12">
          Live the worry-free leasing lifestyle.
        </h2>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Service Navigation */}
            <div className="md:w-72 flex-shrink-0 bg-white/5 backdrop-blur-lg">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`w-full text-left px-6 py-6 transition-all duration-300 flex items-center justify-between group
                    ${
                      activeService.id === service.id
                        ? "bg-[#336699] text-white"
                        : "text-white/90 hover:bg-white/10"
                    }
                  `}
                  aria-label={`View details for ${service.name}`} // Added aria-label for accessibility
                >
                  <span className="font-medium">{service.name}</span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300
                    ${
                      activeService.id === service.id
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                    ${
                      activeService.id === service.id
                        ? "translate-x-0"
                        : "-translate-x-2 group-hover:translate-x-0"
                    }
                  `}
                  />
                </button>
              ))}
            </div>

            {/* Service Content */}
            <div className="relative flex-grow">
              <div className="absolute inset-0 z-0">
                <Image
                  src={"/hero.png"}
                  alt="Hero image for services section" // Added alt text for accessibility
                  fill
                  className="object-cover"
                  priority
                  // Lazy loading image for better performance
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#336699]/90 to-transparent" />
              </div>

              <div className="relative z-10 p-12 min-h-[500px] flex items-center">
                <div className="max-w-xl">
                  <h3 className="text-4xl font-bold text-white mb-6 transition-all duration-300">
                    {activeService.title}
                  </h3>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed transition-all duration-300">
                    {activeService.description}
                  </p>
                  <Button
                    className="bg-white text-[#336699] hover:bg-white/90 transition-all duration-300 px-8 py-6 text-lg font-medium"
                    size="lg"
                  >
                    {activeService.buttonText}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
