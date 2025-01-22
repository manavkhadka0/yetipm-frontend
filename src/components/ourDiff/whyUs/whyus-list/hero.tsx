"use client";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Navigation Breadcrumb */}
      <nav className="absolute top-0 left-0 z-10 p-6 text-white flex items-center gap-2">
        <Link href="/" className="hover:opacity-80">
          <Home className="w-5 h-5" />
        </Link>
        <span>/</span>
        <span className="uppercase text-sm tracking-wider">Why YETI PM?</span>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/whyus.png"
            alt="Inviting home porch scene"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-1 text-white text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Why YETI PM?</h1>
          <p className="text-xl md:text-2xl">
            The nation&apos;s premier home leasing company.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Live your best life – <span className="text-[#336699]">today.</span>
        </h2>

        <div className="space-y-6 text-gray-700">
          <p className="text-lg text-justify">
            YETI PM is enabling more than 110,000 people to live in the home of
            their dreams without the worry of a mortgage. They come for the
            quality, updated houses in awesome neighborhoods. They come for the
            high-quality schools and proximity to jobs and transportation. They
            stay for our consistent, superior service.
          </p>

          <p className="text-lg">
            Looking for something you can call your own without feeling like
            you&apos;re tied down? We get you. And we&apos;re constantly
            innovating for you, too.
          </p>
        </div>
      </section>

      {/* Custom styles for the theme color */}
      <style jsx global>{`
        :root {
          --theme-color: #336699;
        }
      `}</style>
    </main>
  );
}
