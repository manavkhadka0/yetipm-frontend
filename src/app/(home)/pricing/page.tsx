"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";

interface PricingTier {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  leasingFee: string;
  leaseRenewal: number;
  popular?: boolean;
  features: {
    startManaging: boolean;
    virtualTour: boolean;
    rentalMarketAnalysis: boolean;
    dedicatedManager: boolean;
    priceAssurance: boolean;
    satisfactionGuarantee: boolean;
    accountingTracking: boolean;
    evictionProtection: boolean;
    tenantPlacement10: boolean;
    rentalIncome10: boolean;
    tenantPlacement12: boolean;
    rentalIncome12: boolean;
    freeEvaluation: boolean;
    priorityTenantPlacement: boolean;
    photographyStaging: boolean;
    customMarketing: boolean;
    emergencySupport: boolean;
  };
}

const pricingTiers: PricingTier[] = [
  {
    name: "Yeti Essential",
    monthlyPrice: 109,
    yearlyPrice: 109,
    leasingFee: "80%",
    leaseRenewal: 350,
    features: {
      startManaging: false,
      virtualTour: true,
      rentalMarketAnalysis: true,
      dedicatedManager: true,
      priceAssurance: false, // Not listed
      satisfactionGuarantee: true, // 90-Day
      accountingTracking: true,
      evictionProtection: true,
      tenantPlacement10: true,
      rentalIncome10: false,
      tenantPlacement12: false,
      rentalIncome12: false,
      freeEvaluation: false,
      priorityTenantPlacement: false,
      photographyStaging: false,
      customMarketing: false,
      emergencySupport: false,
    },
  },
  {
    name: "Yeti Advantage",
    monthlyPrice: 149,
    yearlyPrice: 149,
    leasingFee: "60%",
    leaseRenewal: 350,
    popular: true,
    features: {
      startManaging: true,
      virtualTour: true,
      rentalMarketAnalysis: true,
      dedicatedManager: true,
      priceAssurance: false, // Not listed
      satisfactionGuarantee: true, // 90-Day
      accountingTracking: true,
      evictionProtection: true,
      tenantPlacement10: true,
      rentalIncome10: false,
      tenantPlacement12: false,
      rentalIncome12: false,
      freeEvaluation: false,
      priorityTenantPlacement: false,
      photographyStaging: false,
      customMarketing: false,
      emergencySupport: false,
    },
  },
  {
    name: "Yeti Elite",
    monthlyPrice: 199,
    yearlyPrice: 199,
    leasingFee: "40%",
    leaseRenewal: 199,
    features: {
      startManaging: true,
      virtualTour: true,
      rentalMarketAnalysis: true,
      dedicatedManager: true,
      priceAssurance: false, // Not listed
      satisfactionGuarantee: true, // 90-Day
      accountingTracking: true,
      evictionProtection: true,
      tenantPlacement10: true,
      rentalIncome10: false,
      tenantPlacement12: false,
      rentalIncome12: false,
      freeEvaluation: true,
      priorityTenantPlacement: true,
      photographyStaging: true,
      customMarketing: true,
      emergencySupport: true,
    },
  },
];

export default function PricingPage() {
  // Group features by tier for better organization
  const essentialFeatures = [
    "virtualTour",
    "rentalMarketAnalysis",
    "dedicatedManager",
    "satisfactionGuarantee",
    "accountingTracking",
    "evictionProtection",
    "tenantPlacement10",
  ];

  const advantageOnlyFeatures = ["startManaging", ...essentialFeatures];

  const eliteOnlyFeatures = [
    "startManaging",
    ...essentialFeatures,
    "freeEvaluation",
    "priorityTenantPlacement",
    "photographyStaging",
    "customMarketing",
    "emergencySupport",
  ];

  const renderFeatureLabel = (key: string) => {
    const labels: Record<string, string> = {
      startManaging: "Start Managing with Yeti",
      virtualTour: "Virtual Property Tours",
      rentalMarketAnalysis: "Rental Market Analysis",
      dedicatedManager: "Dedicated Property Manager",
      priceAssurance: "Yeti Price Assurance",
      satisfactionGuarantee: "90-Day Satisfaction Guarantee",
      accountingTracking: "Accounting & Financial Tracking",
      evictionProtection: "Eviction Protection ($20/month)",
      tenantPlacement10: "Tenant Placement Guarantee – 10 Months",
      rentalIncome10: "Rental Income Security – 10 Months",
      tenantPlacement12: "Tenant Placement Guarantee – 12 Months",
      rentalIncome12: "Rental Income Security – 12 Months",
      freeEvaluation: "Free Property Evaluation",
      priorityTenantPlacement: "Priority Tenant Placement",
      photographyStaging: "Professional Photography & Staging",
      customMarketing: "Custom Marketing Plan",
      emergencySupport: "24/7 Emergency Maintenance Support",
    };
    return labels[key] || key;
  };

  const renderFeatureSection = (tierName: string) => {
    let featuresToShow: string[] = [];
    const includedText = "";

    switch (tierName) {
      case "Yeti Essential":
        featuresToShow = essentialFeatures;
        break;
      case "Yeti Advantage":
        featuresToShow = advantageOnlyFeatures;
        // includedText = "Everything in Yeti Essential +";
        break;
      case "Yeti Elite":
        featuresToShow = eliteOnlyFeatures;
        // includedText = "Everything in Yeti Advantage +";
        break;
    }

    return (
      <div className="space-y-4">
        {includedText && (
          <div className="pb-2 text-sm font-bold text-[#003d21] border-b-2 border-[#c8a977]/50 bg-[#c8a977]/5 px-3 py-2 rounded-md shadow-sm">
            <span className="text-[#003d21]">{includedText}</span>
          </div>
        )}
        <ul className="space-y-3">
          {featuresToShow.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-sm text-gray-700 hover:bg-gray-50 px-2 py-1 rounded-md transition-colors duration-200"
            >
              <CheckIcon className="h-5 w-5 text-[#c8a977] flex-shrink-0" />
              <span className="font-medium">{renderFeatureLabel(feature)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl">
            <span className="text-[#003d21]">Property Management</span>{" "}
            <span className="text-[#c8a977]">Plans</span>
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Choose the perfect plan for your property management needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-5xl lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-3xl shadow-xl  transition-all duration-300 ease-in-out ${
                tier.popular
                  ? "relative border-2 border-[#003d21]/20 bg-white ring-4 ring-[#c8a977]/10 transform -translate-y-2 scale-105"
                  : "border border-gray-200 bg-white hover:shadow-2xl hover:border-[#c8a977]/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-40">
                  <Badge
                    className="w-full justify-center bg-[#003d21] text-white shadow-lg"
                    variant="default"
                  >
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="p-8 pb-0">
                <h3 className="text-2xl font-bold text-[#003d21] mb-4">
                  {tier.name}
                </h3>

                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight text-[#c8a977]">
                    ${tier.monthlyPrice}
                  </span>
                  <span className="ml-2 text-xl font-medium text-gray-500">
                    /month
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="group flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-[#c8a977]/5">
                    <span className="text-gray-600 font-medium">
                      Leasing Fee
                    </span>
                    <span className="font-bold text-lg text-[#003d21]">
                      {tier.leasingFee}
                    </span>
                  </div>
                  <div className="group flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-[#c8a977]/5">
                    <span className="text-gray-600 font-medium">
                      Lease Renewal
                    </span>
                    <span className="font-bold text-lg text-[#003d21]">
                      ${tier.leaseRenewal}
                    </span>
                  </div>
                </div>

                <Button
                  className={`mt-8 w-full text-base py-6 rounded-xl ${
                    tier.popular
                      ? "bg-[#003d21] hover:bg-[#003d21]/90"
                      : "border-2 border-[#003d21] hover:bg-[#c8a977]/10 text-[#003d21]"
                  }`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </div>

              <div className="flex flex-1 flex-col border-t border-gray-200 bg-gray-50 p-8 rounded-b-3xl">
                <div>
                  <h4 className="text-base font-semibold text-[#003d21] mb-6 border-b pb-2 border-[#c8a977]/30">
                    Features included:
                  </h4>
                  {renderFeatureSection(tier.name)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
