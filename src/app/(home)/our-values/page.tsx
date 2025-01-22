import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Mission & Values",
  description:
    "Learn about our commitment to excellence in property management and family-focused service",
};

export default function MissionAndValuesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Our Mission & Values
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Dedicated to providing exceptional property management services while
          maintaining the personal touch that makes every client feel like
          family.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/whyus.png"
            alt="Luxury Property Exterior"
            fill
            className="object-cover"
            quality={95}
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Excellence in Property Management
          </h2>
          <p className="text-muted-foreground">
            We take pride in managing distinguished properties with the highest
            standards of professionalism and attention to detail. Our commitment
            to excellence ensures that every property under our care maintains
            its pristine condition and value.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full" />
              <span>Professional property management services</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full" />
              <span>Dedicated customer support</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full" />
              <span>Transparent communication</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Family Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <h2 className="text-3xl font-semibold">Family-Focused Values</h2>
          <p className="text-muted-foreground">
            At the heart of our business is a commitment to treating every
            client like family. We understand that a home is more than just a
            property – it&apos;s where life&apos;s most precious moments unfold.
            Our team brings this understanding to every interaction and service
            we provide.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full" />
              <span>Personal attention to every client</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full" />
              <span>Trust and reliability</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full" />
              <span>Long-term relationships</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/resi.png"
            alt="Our Family Values"
            fill
            className="object-cover"
            quality={95}
          />
        </div>
      </div>
    </div>
  );
}
