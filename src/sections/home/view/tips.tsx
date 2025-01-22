import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Home-leasing, simplified
        </h1>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {/* Before you apply */}
          <div className="relative group">
            <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
              <Image
                src="/tips.png"
                alt="Family discussing home leasing"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative p-6 bg-white shadow-lg rounded-lg transform -translate-y-8 transition-transform group-hover:-translate-y-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Before you apply
              </h2>
              <p className="text-gray-600 mb-6">
                Whether you&apos;re new to leasing or have been renting houses
                for years, we&apos;ll make finding your home as smooth as
                possible.
              </p>
              <Button
                variant="link"
                className="text-[#336699] hover:text-[#264d73] font-semibold"
              >
                See helpful tips
              </Button>
            </div>
          </div>

          {/* Qualification requirements */}
          <div className="relative group">
            <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
              <Image
                src="/tips2.png"
                alt="Family in kitchen"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative p-6 bg-white shadow-lg rounded-lg transform -translate-y-8 transition-transform group-hover:-translate-y-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Qualification requirements
              </h2>
              <p className="text-gray-600 mb-6">
                You&apos;re on your way to a worry-free leasing lifestyle.
                First, let&apos;s make sure you meet the qualification
                requirements.
              </p>
              <Button
                variant="link"
                className="text-[#336699] hover:text-[#264d73] font-semibold"
              >
                See requirements
              </Button>
            </div>
          </div>

          {/* Application process */}
          <div className="relative group">
            <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
              <Image
                src="/tips3.png"
                alt="Family cooking together"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative p-6 bg-white shadow-lg rounded-lg transform -translate-y-8 transition-transform group-hover:-translate-y-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Application process
              </h2>
              <p className="text-gray-600 mb-6">
                Our application process couldn&apos;t be easier. No, really. You
                can do everything online, and we&apos;re always here to help.
              </p>
              <Button
                variant="link"
                className="text-[#336699] hover:text-[#264d73] font-semibold"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
