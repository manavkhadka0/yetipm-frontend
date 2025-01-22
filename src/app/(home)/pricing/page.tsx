"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
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
    virtualTour: boolean;
    rentalIQTech: boolean;
    dedicatedManager: boolean;
    pricingPromise: boolean;
    hassleFreePromise: boolean;
    accountingPromise: boolean;
    evictionPayment: string | number;
    tenantPlacement: string;
    rentalProtection: boolean;
  };
}

const pricingTiers: PricingTier[] = [
  {
    name: "Professional",
    monthlyPrice: 99,
    yearlyPrice: 89,
    leasingFee: "60%",
    leaseRenewal: 375,
    features: {
      virtualTour: true,
      rentalIQTech: true,
      dedicatedManager: true,
      pricingPromise: true,
      hassleFreePromise: true,
      accountingPromise: true,
      evictionPayment: 20,
      tenantPlacement: "10 Months",
      rentalProtection: false,
    },
  },
  {
    name: "Premium",
    monthlyPrice: 139,
    yearlyPrice: 129,
    leasingFee: "50%",
    leaseRenewal: 375,
    popular: true,
    features: {
      virtualTour: true,
      rentalIQTech: true,
      dedicatedManager: true,
      pricingPromise: true,
      hassleFreePromise: true,
      accountingPromise: true,
      evictionPayment: "Included",
      tenantPlacement: "12 Months",
      rentalProtection: true,
    },
  },
  {
    name: "Executive",
    monthlyPrice: 189,
    yearlyPrice: 179,
    leasingFee: "No Leasing Fee",
    leaseRenewal: 375,
    features: {
      virtualTour: true,
      rentalIQTech: true,
      dedicatedManager: true,
      pricingPromise: true,
      hassleFreePromise: true,
      accountingPromise: true,
      evictionPayment: 20,
      tenantPlacement: "10 Months",
      rentalProtection: false,
    },
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = React.useState(false);

  const renderFeatureLabel = (key: string) => {
    const labels: Record<string, string> = {
      virtualTour: "Virtual Property Tours",
      rentalIQTech: "Rental IQ Technology",
      dedicatedManager: "Dedicated Asset Manager",
      pricingPromise: "Price Match Promise",
      hassleFreePromise: "60-Day Hassle-Free Promise",
      accountingPromise: "Accounting Guarantee",
      evictionPayment: "Eviction Protection",
      tenantPlacement: "Tenant Placement Guarantee",
      rentalProtection: "Rental Income Protection",
    };
    return labels[key] || key;
  };

  const renderFeatureValue = (
    key: string,
    value: boolean | string | number
  ) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckIcon className="h-4 w-4 text-primary flex-shrink-0" />
      ) : (
        <span className="h-4 w-4 block flex-shrink-0" />
      );
    }

    // Handle special cases for evictionPayment and tenantPlacement
    if (key === "evictionPayment") {
      return value === "Included" ? (
        <CheckIcon className="h-4 w-4 text-primary flex-shrink-0" />
      ) : (
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
          ${value}
        </span>
      );
    }

    if (key === "tenantPlacement") {
      return (
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
          {value}
        </span>
      );
    }

    return (
      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
        {value}
      </span>
    );
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Choose Your Plan
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Select the perfect plan for your property management needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-12 flex justify-center items-center gap-3">
          <Label htmlFor="billing-toggle" className="text-sm font-medium">
            Monthly
          </Label>
          <Switch
            id="billing-toggle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <div className="flex items-center gap-2">
            <Label htmlFor="billing-toggle" className="text-sm font-medium">
              Yearly
            </Label>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Save 10%
            </Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-5xl lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-lg shadow-lg transition-all duration-200 hover:scale-105 ${
                tier.popular
                  ? "relative border-2 border-primary bg-white"
                  : "border border-gray-200 bg-white"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32">
                  <Badge
                    className="w-full justify-center bg-primary text-primary-foreground"
                    variant="default"
                  >
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tier.name}
                </h3>

                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-bold tracking-tight">
                    ${isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                  <span className="ml-1 text-base font-semibold">/month</span>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Leasing Fee</span>
                    <span className="font-medium">{tier.leasingFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Lease Renewal</span>
                    <span className="font-medium">${tier.leaseRenewal}</span>
                  </div>
                </div>

                <Button
                  className="mt-6 w-full"
                  variant={tier.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </div>

              <div className="flex flex-1 flex-col border-t border-gray-200 bg-gray-50/50 p-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-4">
                    Features included:
                  </h4>
                  <ul className="space-y-3">
                    {Object.entries(tier.features).map(([key, value]) => (
                      <li
                        key={key}
                        className={`flex items-center justify-between gap-2 text-sm ${
                          typeof value === "boolean" && !value
                            ? "text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        <span className="text-sm">
                          {renderFeatureLabel(key)}
                        </span>
                        {renderFeatureValue(key, value)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
