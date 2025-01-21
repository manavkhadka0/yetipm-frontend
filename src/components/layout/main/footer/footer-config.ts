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
  { label: "Atlanta", href: "/atlanta" },
  { label: "Carolinas", href: "/carolinas" },
  { label: "Chicago", href: "/chicago" },
  { label: "Dallas", href: "/dallas" },
  { label: "Denver", href: "/denver" },
  { label: "Houston", href: "/houston" },
  { label: "Jacksonville", href: "/jacksonville" },
  { label: "Las Vegas", href: "/las-vegas" },
  { label: "Minneapolis", href: "/minneapolis" },
  { label: "Northern California", href: "/northern-california" },
  { label: "Orlando", href: "/orlando" },
  { label: "Phoenix", href: "/phoenix" },
  { label: "Seattle", href: "/seattle" },
  { label: "South Florida/ Miami", href: "/south-florida-miami" },
  { label: "Southern California", href: "/southern-california" },
  { label: "Tampa", href: "/tampa" },
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
  { label: "Sustainability", href: "/sustainability" },
  { label: "Investors", href: "/investors" },
  { label: "Vendors", href: "/vendors" },
  { label: "Careers", href: "/careers" },
];

export const helpCenter: FooterLink[] = [
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Local Directory", href: "/directory" },
  { label: "Blog", href: "/blog" },
  { label: "COVID-19", href: "/covid-19" },
  { label: "Fraud prevention", href: "/fraud-prevention" },
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
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Do Not Sell", href: "/do-not-sell" },
  { label: "Cookie Preference", href: "/cookie-preference" },
];
