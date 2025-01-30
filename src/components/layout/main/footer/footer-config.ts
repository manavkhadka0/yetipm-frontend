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
  { label: "Search locations", href: "#" },
  { label: "Rental communities", href: "#" },
  { label: "Qualification requirements", href: "#" },
  { label: "Before you apply", href: "#" },
  { label: "Application process", href: "#" },
  { label: "Leasing fees", href: "#" },
];

export const about: FooterLink[] = [
  { label: "Our story", href: "#" },
  { label: "Our values", href: "/our-values" },
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
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];
