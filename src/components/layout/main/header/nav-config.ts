import { NavItem } from "@/types/nav";

export const navigation: NavItem[] = [
  {
    name: "Pricing",
    href: "/pricing",
  },
  // {
  //   name: "Owners",
  //   href: "/owners",
  //   items: [
  //     {
  //       name: "Management",
  //       href: "/owners/managemnet",
  //       description: "Browse available homes in your area",
  //     },
  //     {
  //       name: "Rental-IQ",
  //       href: "/owners/rentaliq",
  //       description: "View our featured rental properties",
  //     },
  //     {
  //       name: "Concierge",
  //       href: "/owners/concierge",
  //       description: "Explore homes by location",
  //     },
  //     {
  //       name: "Same Day Lease",
  //       href: "/owners/samedaylease",
  //       description: "Learn about our rental rates",
  //     },
  //     {
  //       name: "Smart Maintenance",
  //       href: "/owners/maintenance",
  //       description: "Learn about our maintenance services",
  //     },
  //     {
  //       name: "Owner Resource Center",
  //       href: "/owners/resource-center",
  //       description: "Access owner resources and information",
  //     },
  //   ],
  // },
  {
    name: "Resources",
    href: "/resources",
    items: [
      {
        name: "Buy Rentals",
        href: "/find-home/search",
        description: "Browse available homes in your area",
      },
      {
        name: "Sell My Property",
        href: "/sell-property",
        description: "List your property for lease",
      },
      {
        name: "Owner Referral",
        href: "/owner-referral",
        description: "Refer property owners to YetiPM",
      },
      {
        name: "Agent Referral",
        href: "/agent-referral",
        description: "Refer real estate agents to YetiPM",
      },
    ],
  },
  {
    name: "Search Rentals",
    href: "/rentals",
  },
  // {
  //   name: "Residents",
  //   href: "/residents",
  //   items: [
  //     {
  //       name: "Pay my rent",
  //       href: "/residents/pay-rent",
  //       description: "Pay your rent online",
  //     },
  //     {
  //       name: "Tenant Portal",
  //       href: "/residents/portal",
  //       description: "Access your resident portal",
  //     },
  //     {
  //       name: "Resident Benefit",
  //       href: "/residents/benefits",
  //       description: "Explore exclusive resident benefits",
  //     },
  //     {
  //       name: "Package",
  //       href: "/residents/packages",
  //       description: "Manage your package deliveries",
  //     },
  //     {
  //       name: "Maintenance",
  //       href: "/residents/maintenance",
  //       description: "Submit and track maintenance requests",
  //     },
  //     {
  //       name: "Requests",
  //       href: "/residents/requests",
  //       description: "Submit general requests",
  //     },
  //     {
  //       name: "Move-Out",
  //       href: "/residents/move-out",
  //       description: "Access move-out information and procedures",
  //     },
  //   ],
  // },
  {
    name: "Company",
    href: "/company",
    items: [
      {
        name: "Our Team",
        href: "/our-team",
        description: "Meet the people behind YetiPM",
      },
      {
        name: "Our Values",
        href: "/our-values",
        description: "Learn about our core principles and mission",
      },
      {
        name: "News",
        href: "/news",
        description: "Stay updated with our latest announcements",
      },
    ],
  },
  {
    name: " Contact",
    href: "/contact-us",
  },
];
