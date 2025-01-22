import { NavItem } from "@/@types/nav";

export const navigation: NavItem[] = [
  {
    name: "Find your home",
    href: "/find-home",
    items: [
      {
        name: "Search Homes",
        href: "/find-home/search",
        description: "Browse available homes in your area",
      },
      {
        name: "Featured Listings",
        href: "/find-home/featured",
        description: "View our featured rental properties",
      },
      {
        name: "Locations",
        href: "/find-home/locations",
        description: "Explore homes by location",
      },
      {
        name: "Pricing",
        href: "/find-home/pricing",
        description: "Learn about our rental rates",
      },
    ],
  },
  {
    name: "Our difference",
    href: "/our-difference",
    items: [
      {
        name: "Why Choose Us",
        href: "/ourDiff",
        description: "What sets us apart",
      },
      {
        name: "Resident Benefits",
        href: "/resiBenifit",
        description: "Exclusive benefits for our residents",
      },
      {
        name: "Our Services",
        href: "/our-difference/services",
        description: "Professional property management services",
      },
      {
        name: "Success Stories",
        href: "/our-difference/testimonials",
        description: "Hear from our happy residents",
      },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    items: [
      {
        name: "Resident Guide",
        href: "/resources/resident-guide",
        description: "Essential information for residents",
      },
      {
        name: "FAQs",
        href: "/resources/faqs",
        description: "Frequently asked questions",
      },
      {
        name: "Blog",
        href: "/resources/blog",
        description: "Tips, news, and updates",
      },
      {
        name: "Support Center",
        href: "/resources/support",
        description: "Get help and support",
      },
    ],
  },
  {
    name: "About",
    href: "/about",
    items: [
      {
        name: "Our Story",
        href: "/about/story",
        description: "Learn about our company",
      },
      {
        name: "Leadership",
        href: "/about/leadership",
        description: "Meet our team",
      },
      {
        name: "Careers",
        href: "/about/careers",
        description: "Join our team",
      },
      {
        name: "News & Press",
        href: "/about/news",
        description: "Company updates and press releases",
      },
    ],
  },
];
