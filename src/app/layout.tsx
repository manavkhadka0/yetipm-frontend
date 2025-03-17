import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/ui/ProgressBarProvider";
import ProgressProviderComponent from "@/providers/progress-provider";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider>
      <html lang="en">
        <body className={`${playfair.variable} antialiased`}>
          <ProgressProviderComponent>
            <Providers>{children}</Providers>
          </ProgressProviderComponent>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
