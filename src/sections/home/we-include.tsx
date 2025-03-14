"use client";

import {
  Wrench,
  Wind,
  Home,
  HeadphonesIcon,
  Megaphone,
  LayoutDashboard,
  Wallet2,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";
import HeadingSection from "@/components/common/heading-section";

const features = [
  {
    title: "Maintenance & Remodel",
    description: "Advanced Maintenance Management",
    icon: Wrench,
    color: "text-[#003d21]",
    bgColor: "bg-[#003d21]/10",
    accentColor: "group-hover:text-[#C4A484]",
  },
  {
    title: "Tenants HVAC Filter Program",
    description: "Monthly Tenant Filter Delivery",
    icon: Wind,
    color: "text-[#003d21]",
    bgColor: "bg-[#003d21]/10",
    accentColor: "group-hover:text-[#C4A484]",
  },
  {
    title: "Electronic Property Showings",
    description: "Quick and Easy 24/7 Online Access",
    icon: Home,
    color: "text-[#003d21]",
    bgColor: "bg-[#003d21]/10",
    accentColor: "group-hover:text-[#C4A484]",
  },
  {
    title: "24/7 Emergency Support",
    description: "Always at Your Service. Servicing your Tenant 24/7",
    icon: HeadphonesIcon,
    color: "text-[#003d21]",
    bgColor: "bg-[#003d21]/10",
    accentColor: "group-hover:text-[#C4A484]",
  },
  {
    title: "Marketing & Advertising",
    description: "Most Homes Leased 23 Days or Less",
    icon: Megaphone,
    color: "text-[#003d21]",
    bgColor: "bg-[#003d21]/10",
    accentColor: "group-hover:text-[#C4A484]",
  },
  {
    title: "Owner & Tenant Portal",
    description: "Quick and Easy 24/7 Online Access",
    icon: LayoutDashboard,
    color: "text-[#003d21]",
    bgColor: "bg-[#003d21]/10",
    accentColor: "group-hover:text-[#C4A484]",
  },
  {
    title: "Online Rent Collections",
    description: "Convenient Payment Options and Owner Disbursements",
    icon: Wallet2,
    color: "text-[#003d21]",
    bgColor: "bg-[#003d21]/10",
    accentColor: "group-hover:text-[#C4A484]",
  },
  {
    title: "Comprehensive Screening",
    description: "Less than 1% Eviction Rates",
    icon: ShieldCheck,
    color: "text-[#003d21]",
    bgColor: "bg-[#003d21]/10",
    accentColor: "group-hover:text-[#C4A484]",
  },
  {
    title: "Reporting & Analytics",
    description: "Customizable Reports with Real Time Data",
    icon: BarChart3,
    color: "text-[#003d21]",
    bgColor: "bg-[#003d21]/10",
    accentColor: "group-hover:text-[#C4A484]",
  },
].map((feature) => ({
  ...feature,
  accentColor: feature.accentColor || "group-hover:text-[#C4A484]",
}));

export default function WeInclude() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div suppressHydrationWarning>
          <HeadingSection
            title='"Everything you need to manage your property effectively"'
            subtitle="Discover our hand-picked selection of premium homes"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "p-8  transition-all duration-300",
                "border-transparent",
                "shadow-[0_8px_30px_rgb(196,164,132,0.12)]",
                "border border-[#C4A484]/10"
              )}
            >
              <div className="flex items-start space-x-5">
                <div
                  className={cn(
                    "p-3 rounded-xl",
                    "bg-[#C4A484]/10",
                    "backdrop-blur-sm"
                  )}
                >
                  <feature.icon className={cn("w-6 h-6", "text-[#003d21]")} />
                </div>
                <div>
                  <h3
                    suppressHydrationWarning
                    className="text-lg font-semibold text-gray-900 mb-2"
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
