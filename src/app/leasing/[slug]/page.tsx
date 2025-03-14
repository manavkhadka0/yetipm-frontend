import Link from "next/link";
import { notFound } from "next/navigation";
import HeadingSection from "@/components/common/heading-section";

type LeasingSection = {
  title: string;
  details: string[];
};

type LeasingDetails = {
  title: string;
  sections: LeasingSection[];
  description: string;
  footer?: string;
};

const leasingDetails: Record<string, LeasingDetails> = {
  "before-apply": {
    title: "Before You Apply",
    sections: [
      {
        title: "1. Research Available Properties",
        details: [
          "Browse our listings and select a property that fits your needs.",
          "Review rent, lease terms, and policies.",
        ],
      },
      {
        title: "2. Understand Lease Terms",
        details: [
          "Standard leases are 12 months unless otherwise stated.",
          "Be aware of rent payment policies, security deposits, and maintenance responsibilities.",
        ],
      },
      {
        title: "3. Know the Move-In Costs",
        details: [
          "Be prepared to pay the first month's rent and security deposit.",
          "Additional fees may apply (e.g., pet fees, parking fees).",
        ],
      },
      {
        title: "4. Gather Required Documents",
        details: [
          "Proof of Income: Pay stubs, tax returns, or bank statements.",
          "Identification: Government-issued ID (driver's license, passport).",
          "Rental History: Contact details of previous landlords.",
          "Employment Verification: Letter from employer or contract for self-employed applicants.",
        ],
      },
      {
        title: "5. Application Fees",
        details: ["A non-refundable fee covers background and credit checks."],
      },
      {
        title: "6. Co-Signers & Guarantors",
        details: [
          "If income or credit requirements aren't met, a co-signer may be needed.",
        ],
      },
      {
        title: "7. Pet Policy",
        details: [
          "Check the property's pet policy, including breed restrictions and pet fees.",
        ],
      },
      {
        title: "8. Screening Process",
        details: ["A credit and background check will be conducted."],
      },
    ],
    description:
      "Before submitting your application, review these key points to ensure a smooth process.",
    footer: "If you have any questions, contact our team before applying.",
  },
  "qualification-requirements": {
    title: "Qualification Requirements",
    sections: [
      {
        title: "1. Income",
        details: ["Combined monthly income must be at least 3x the rent."],
      },
      {
        title: "2. Credit",
        details: [
          "A credit check is required. Minimum score requirements vary.",
          "Outstanding collections, excessive debt, or recent bankruptcies may affect approval.",
        ],
      },
      {
        title: "3. Rental History",
        details: [
          "Positive rental references are required.",
          "Evictions, broken leases, or excessive late payments may result in disqualification.",
        ],
      },
      {
        title: "4. Employment Verification",
        details: [
          "Applicants must have a stable employment history.",
          "Self-employed applicants must provide tax returns or bank statements.",
        ],
      },
      {
        title: "5. Background Check",
        details: ["A criminal background check will be conducted."],
      },
      {
        title: "6. Co-Signers",
        details: [
          "If needed, a co-signer must meet all qualification requirements.",
        ],
      },
      {
        title: "7. Pet Policy",
        details: ["Pet approval depends on property-specific policies."],
      },
    ],
    description: "Applicants must meet the following criteria:",
    footer: "For further details, reach out to our team.",
  },
  "application-process": {
    title: "Application Process",
    sections: [
      {
        title: "1. Find a Property",
        details: ["Choose a home that fits your needs and review its terms."],
      },
      {
        title: "2. Submit an Application",
        details: [
          "Complete the online application and upload required documents.",
        ],
      },
      {
        title: "3. Pay the Application Fee",
        details: ["A non-refundable fee covers background and credit checks."],
      },
      {
        title: "4. Application Review",
        details: [
          "Our team verifies income, rental history, and conducts background checks.",
          "Processing typically takes 24-72 hours",
        ],
      },
      {
        title: "5. Approval & Lease Signing",
        details: [
          "If approved, you'll receive a lease agreement to review and sign.",
        ],
      },
      {
        title: "6. Pay Move-In Cost",
        details: [
          "Pay the security deposit and first month's rent. Additional fees may apply.",
        ],
      },
      {
        title: "7. Move-In Day",
        details: ["Receive keys and move-in instructions."],
      },
    ],
    description: "Follow these steps to apply:",
  },
};

export default function LeasingDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const details = leasingDetails[params.slug];

  if (!details) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <HeadingSection title={details.title} subtitle={details.description} />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1 md:sticky md:top-24 md:self-start h-fit">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Leasing Sections
                </h3>
                <nav className="space-y-2">
                  {Object.entries(leasingDetails).map(([slug, section]) => (
                    <Link
                      key={slug}
                      href={`/leasing/${slug}`}
                      className={`block py-2 px-4 rounded-md transition-colors ${
                        params.slug === slug
                          ? "bg-blue-100 text-blue-800"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {section.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {details.sections.map((section, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2 text-gray-600">
                  {section.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {details.footer && (
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-gray-600 italic">
                {details.footer}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
