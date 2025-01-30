import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import TawkChat from "@/components/twak-to-messenger";

export const metadata: Metadata = {
  title: "Yeti PM",
  description: "Property Management for Rentals in United States of America ",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>
        {children}
        <Toaster />
        <TawkChat />
      </body>
    </html>
  );
}
