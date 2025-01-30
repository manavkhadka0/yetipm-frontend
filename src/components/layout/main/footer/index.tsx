"use client";

import Link from "next/link";
import Image from "next/image";
import ResponsiveContainer from "@/components/common/responsive-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  locations,
  findYourHome,
  about,
  helpCenter,
  currentResidents,
  ourServices,
  socialLinks,
  legalLinks,
} from "./footer-config";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// Helper component for links with tooltip
function FooterLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className: string;
}) {
  if (href === "#") {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={cn(className, "cursor-not-allowed")}>{label}</span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Coming soon</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <TooltipProvider>
      <ResponsiveContainer paddingX="xs" paddingY="xl">
        {/* Mobile Accordion View */}
        <div className="md:hidden space-y-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="locations" className="border-b border-border">
              <AccordionTrigger className="text-base font-semibold py-3">
                Locations
              </AccordionTrigger>
              <AccordionContent className="pb-3">
                <div className="space-y-2">
                  {locations.map((link, index) => (
                    <FooterLink
                      key={index}
                      href={link.href}
                      label={link.label}
                      className="block text-sm text-muted-foreground hover:text-primary"
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="find-home" className="border-b border-border">
              <AccordionTrigger className="text-base font-semibold py-3">
                Find your home
              </AccordionTrigger>
              <AccordionContent className="pb-3">
                <div className="space-y-2">
                  {findYourHome.map((link, index) => (
                    <FooterLink
                      key={index}
                      href={link.href}
                      label={link.label}
                      className="block text-sm text-muted-foreground hover:text-primary"
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="our-services"
              className="border-b border-border"
            >
              <AccordionTrigger className="text-base font-semibold py-3">
                Our services
              </AccordionTrigger>
              <AccordionContent className="pb-3">
                <div className="space-y-2">
                  {ourServices.map((link, index) => (
                    <FooterLink
                      key={index}
                      href={link.href}
                      label={link.label}
                      className="block text-sm text-muted-foreground hover:text-primary"
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="about" className="border-b border-border">
              <AccordionTrigger className="text-base font-semibold py-3">
                About
              </AccordionTrigger>
              <AccordionContent className="pb-3">
                <div className="space-y-2">
                  {about.map((link, index) => (
                    <FooterLink
                      key={index}
                      href={link.href}
                      label={link.label}
                      className="block text-sm text-muted-foreground hover:text-primary"
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="help-center"
              className="border-b border-border"
            >
              <AccordionTrigger className="text-base font-semibold py-3">
                Help center
              </AccordionTrigger>
              <AccordionContent className="pb-3">
                <div className="space-y-2">
                  {helpCenter.map((link, index) => (
                    <FooterLink
                      key={index}
                      href={link.href}
                      label={link.label}
                      className="block text-sm text-muted-foreground hover:text-primary"
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="current-residents"
              className="border-b border-border"
            >
              <AccordionTrigger className="text-base font-semibold py-3">
                Current residents
              </AccordionTrigger>
              <AccordionContent className="pb-3">
                <div className="space-y-2">
                  {currentResidents.map((link, index) => (
                    <FooterLink
                      key={index}
                      href={link.href}
                      label={link.label}
                      className="block text-sm text-muted-foreground hover:text-primary"
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-5 gap-8">
          {/* Locations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Locations</h3>
            <div className="space-y-2">
              {locations.map((link, index) => (
                <FooterLink
                  key={index}
                  href={link.href}
                  label={link.label}
                  className="block text-muted-foreground hover:text-primary"
                />
              ))}
            </div>
          </div>

          {/* Find your home */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Find your home</h3>
            <div className="space-y-2">
              {findYourHome.map((link, index) => (
                <FooterLink
                  key={index}
                  href={link.href}
                  label={link.label}
                  className="block text-muted-foreground hover:text-primary"
                />
              ))}
            </div>

            <h3 className="font-semibold text-lg pt-4">Our services</h3>
            <div className="space-y-2">
              {ourServices.map((link, index) => (
                <FooterLink
                  key={index}
                  href={link.href}
                  label={link.label}
                  className="block text-muted-foreground hover:text-primary"
                />
              ))}
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">About</h3>
            <div className="space-y-2">
              {about.map((link, index) => (
                <FooterLink
                  key={index}
                  href={link.href}
                  label={link.label}
                  className="block text-muted-foreground hover:text-primary"
                />
              ))}
            </div>
          </div>

          {/* Help center */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Help center</h3>
            <div className="space-y-2">
              {helpCenter.map((link, index) => (
                <FooterLink
                  key={index}
                  href={link.href}
                  label={link.label}
                  className="block text-muted-foreground hover:text-primary"
                />
              ))}
            </div>
          </div>

          {/* Current residents */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Current residents</h3>
            <div className="space-y-2">
              {currentResidents.map((link, index) => (
                <FooterLink
                  key={index}
                  href={link.href}
                  label={link.label}
                  className="block text-muted-foreground hover:text-primary"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 md:mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link href="/">
                <Image
                  src="/image.png"
                  alt="Yetpm"
                  width={150}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </Link>
              <p className="text-xs md:text-sm text-center md:text-left text-muted-foreground">
                YETI PM Inc. © {new Date().getFullYear()} All Rights Reserved.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="flex flex-wrap justify-center gap-4">
                {legalLinks.map((link, index) => (
                  <FooterLink
                    key={index}
                    href={link.href}
                    label={link.label}
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary"
                  />
                ))}
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-[#003d21] font-bold"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 " />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </TooltipProvider>
  );
}
