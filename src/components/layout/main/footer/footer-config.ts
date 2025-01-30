import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
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
  { label: "Search locations", href: "/search-locations" },
  { label: "Rental communities", href: "/rental-communities" },
  { label: "Qualification requirements", href: "/qualification-requirements" },
  { label: "Before you apply", href: "/before-you-apply" },
  { label: "Application process", href: "/application-process" },
  { label: "Leasing fees", href: "/leasing-fees" },
];

export const about: FooterLink[] = [
  { label: "Our story", href: "/our-story" },
  { label: "Our values", href: "/our-values" },
  { label: "Our Team", href: "/our-team" },
];

export const helpCenter: FooterLink[] = [
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export const currentResidents: FooterLink[] = [
  { label: "Pay my rent", href: "/pay-rent" },
  { label: "Request maintenance", href: "/maintenance" },
  { label: "Resident resources", href: "/resources" },
  { label: "Resident responsibilities", href: "/responsibilities" },
  { label: "Resident offers", href: "/offers" },
  { label: "Renewal", href: "/renewal" },
  { label: "Move-out guide", href: "/move-out" },
];

export const ourServices: FooterLink[] = [
  { label: "Lease Easy", href: "/lease-easy" },
  { label: "Pets", href: "/pets" },
  { label: "ProCare", href: "/procare" },
  { label: "Pool information", href: "/pool-information" },
];

export const socialLinks: SocialLink[] = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];
