"use client";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Navigation Breadcrumb */}
      <nav className="absolute top-0 left-0 z-10 p-6 text-white flex gap-2">
        <Link href="/" className="hover:opacity-80">
          <Home className="w-5 h-5" />
        </Link>
        <span>/</span>
        <span className="uppercase text-sm tracking-wider">
          Lease Easy bundle
        </span>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/resiBenifit.png"
            alt="Inviting home porch scene"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-1 text-white text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Lease Easy bundle
          </h1>
          <p className="text-xl md:text-2xl">3 great services all in one</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Live your best life – <span className="text-[#336699]">today.</span>
        </h2>

        <div className="space-y-6 text-gray-700">
          <p className="text-lg text-justify">
            As the leader in single-family home leasing, were always coming up
            with new ways for you to enjoy living in your home. With our Lease
            Easy bundle, your Smart Home technology, air filter delivery, and
            utility management all come standard for a small monthly fee.*
          </p>

          <p className="text-lg">
            Looking for something you can call your own without feeling like
            you're tied down? We get you. And we're constantly innovating for
            you, too.
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
