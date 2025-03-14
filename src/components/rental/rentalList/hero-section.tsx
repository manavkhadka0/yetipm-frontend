"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Rental } from "@/types/rentals";
import { RentalShareButtons } from "../rental-share-buttons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "@/sections/contact-us/components/contact-form";

type RentalComponentProps = {
  rentalDetail: Rental;
};

export default function PropertyListingHeroSection({
  rentalDetail,
}: RentalComponentProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Search</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{rentalDetail?.project_address}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <RentalShareButtons
          rentalSlug={rentalDetail.slug}
          rentalTitle={rentalDetail.name}
        />
      </div>

      {/* Image carousel */}
      <div className="relative mb-6">
        <Carousel
          className="w-full"
          setApi={(api) => {
            if (!api) return;

            api.on("select", () => {
              setCurrentSlide(api.selectedScrollSnap());
            });
          }}
        >
          <CarouselContent>
            {rentalDetail?.images?.map((img, index) => (
              <CarouselItem key={index}>
                <div className="aspect-[16/9] relative">
                  <Image
                    src={img.image || "/placeholder-rental.jpg"}
                    alt={`Property image ${index + 1}`}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/80" />
          <CarouselNext className="right-4 bg-white/80" />
        </Carousel>

        {rentalDetail && rentalDetail.images && (
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white rounded-full text-sm">
            {currentSlide + 1} of {rentalDetail.images.length}
          </div>
        )}
      </div>

      {/* Property details */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold">
              ${rentalDetail?.price}
            </span>
            <span className="text-gray-600">/mo rent</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-1">
              <span className="font-semibold">{rentalDetail?.bedrooms}</span>{" "}
              bed
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">{rentalDetail?.bathrooms}</span>{" "}
              bath
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">
                {rentalDetail?.area_square_footage}
              </span>{" "}
              sqft
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div>Available</div>
            <div className="font-semibold">
              {rentalDetail?.available_date
                ? new Date(rentalDetail.available_date).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                    }
                  )
                : ""}
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-700 hover:bg-green-800 text-white px-8">
                Contact Us
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
        </div>
      </div>
    </div>
  );
}
