"use client";

import { Button } from "@/components/ui/button";
import { Rental } from "@/types/rentals";
import { Info, Home, DollarSign, FileText, MessageCircle } from "lucide-react";
import Image from "next/image";
import ContactForm from "@/sections/contact-us/components/contact-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type PropertyDetailsProps = {
  rentalDetail: Rental;
};

export default function PropertyDetails({
  rentalDetail,
}: PropertyDetailsProps) {
  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid md:grid-cols-[1fr,400px] gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Monthly Rent Section */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold p-6 border-b">
                Total monthly rent
              </h2>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline border-b border-dotted border-gray-300 pb-2">
                    <span className="text-lg font-semibold text-green-700">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-green-700">
                      ${rentalDetail.price}
                      <span className="text-sm font-normal">/mo</span>
                    </span>
                  </div>

                  <div
                    className="prose prose-green max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: rentalDetail.price_breakdown,
                    }}
                  />

                  <div className="text-sm text-gray-500 mt-4 space-y-2 bg-gray-50 p-4 rounded-lg">
                    <p>
                      Estimated total monthly rent does not include utilities or
                      optional and conditional fees including, but not limited
                      to, pet fees and renters&apos; or similar insurance.{" "}
                      <a href="#" className="text-green-700 hover:underline">
                        Learn more about leasing fees
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Home Features Section */}
            {rentalDetail?.features?.length > 0 && (
              <section className="bg-white rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold p-6 border-b">
                  Home features
                </h2>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {rentalDetail.features.map((feature) => (
                      <div
                        key={feature.id}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                      >
                        <Home className="w-5 h-5 text-green-700" />
                        <span className="text-gray-700">{feature.name}</span>
                        {feature.name.toLowerCase().includes("pet") && (
                          <Info className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Home Description Section */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold p-6 border-b">
                Home description
              </h2>
              <div className="p-6">
                <div
                  className="prose prose-green max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: rentalDetail.project_description,
                  }}
                />
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="sticky top-4">
              {/* Application Info Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <Image
                  src="/image.png"
                  alt="People looking at something together"
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="p-6 space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Before you apply
                  </h2>
                  <p className="text-gray-600">
                    Please read the Qualification Requirements and Leasing Fees
                    Guide before applying for a lease.
                  </p>
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      View Qualification Requirements
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full flex items-center gap-2"
                    >
                      <DollarSign className="w-4 h-4" />
                      Review the Leasing Guide
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Enquire Button and Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="fixed z-50 bottom-8 left-8 shadow-lg rounded-full px-6 py-6 bg-green-700 hover:bg-green-800">
            <MessageCircle className="w-5 h-5 mr-2" />
            Enquire Now
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Interested in this property?</DialogTitle>
          </DialogHeader>
          <ContactForm
            propertyId={rentalDetail.id.toString()}
            inquiryType="Specific Property"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
