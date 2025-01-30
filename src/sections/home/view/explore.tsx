import Image from "next/image";
import Link from "next/link";

export default function NewHomes() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/image2.png"
              alt="Brand new houses for rent"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Find Your Dream Home in Exceptional Communities
            </h1>

            <p className="text-lg text-gray-600">
              Explore our collection of single-family homes for lease in prime
              locations across DFW Metroplex. Step into a spacious,
              move-in-ready home featuring modern amenities, thoughtful design,
              and a seamless leasing experience. Don&apos;t miss your chance to
              secure the perfect home—apply now before it’s too late!
            </p>

            {/* <p className="text-lg text-gray-600"></p> */}

            {/* <p className="text-lg text-gray-600"></p> */}

            <div className="pt-4">
              <Link
                href="/communities"
                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-[#003d21] rounded-lg hover:bg-[#2a547d] transition-colors duration-300"
              >
                Explore Our Communities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
