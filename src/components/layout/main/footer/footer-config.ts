import { Facebook, Instagram, Linkedin } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const locations: FooterLink[] = [
  { label: "Arlington", href: "/rentals/cities/arlington" },
  { label: "Austin", href: "/rentals/cities/austin" },
  { label: "Dallas", href: "/rentals/cities/dallas" },
  { label: "El Paso", href: "/rentals/cities/el-paso" },
  { label: "Fort Worth", href: "/rentals/cities/fort-worth" },
  { label: "Garland", href: "/rentals/cities/garland" },
  { label: "Houston", href: "/rentals/cities/houston" },
  { label: "Irving", href: "/rentals/cities/irving" },
  { label: "Laredo", href: "/rentals/cities/laredo" },
  { label: "Lubbock", href: "/rentals/cities/lubbock" },
  { label: "Plano", href: "/rentals/cities/plano" },
  { label: "San Antonio", href: "/rentals/cities/san-antonio" },
];

export const findYourHome: FooterLink[] = [
  { label: "Search locations", href: "/find-home/search" },
  { label: "Rental communities", href: "/find-home/search" },
  { label: "Before you apply", href: "/leasing/before-apply" },
  {
    label: "Qualification requirements",
    href: "/leasing/qualification-requirements",
  },
  { label: "Application process", href: "/leasing/application-process" },
];

export const about: FooterLink[] = [
  { label: "Our story", href: "/our-story" },
  // { label: "Our values", href: "/our-values" },
  { label: "Our Team", href: "/our-team" },
];

export const helpCenter: FooterLink[] = [
  { label: "Contact Us", href: "/contact-us" },
  { label: "Blog", href: "/blogs" },
];

export const currentResidents: FooterLink[] = [
  { label: "Pay my rent", href: "#" },
  { label: "Request maintenance", href: "#" },
  { label: "Resident resources", href: "#" },
  { label: "Resident responsibilities", href: "#" },
  { label: "Resident offers", href: "#" },
  { label: "Renewal", href: "#" },
  { label: "Move-out guide", href: "/move-out" },
];

export const ourServices: FooterLink[] = [
  { label: "Lease Easy", href: "#" },
  { label: "Pets", href: "#" },
  { label: "ProCare", href: "#" },
  { label: "Pool information", href: "#" },
];

export const socialLinks: SocialLink[] = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/yeti_property_management?igsh=MjU2dzBmcWNkNWVx&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: " https://www.facebook.com/share/1CqKDHroKL/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: " https://www.linkedin.com/company/yeti-property-management/",
    label: "LinkedIn",
  },
];

export const legalLinks: FooterLink[] = [
  {
    label: "Privacy Policy",
    href: "https://www.neighborly.com/your-privacy-rights",
  },
  {
    label: "Terms & Conditions",
    href: "https://www.neighborly.com/terms-of-use",
  },
];
