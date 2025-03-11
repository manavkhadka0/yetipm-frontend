"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import HeadingSection from "@/components/common/heading-section";
import ResponsiveContainer from "@/components/common/responsive-container";
import { Faq } from "@/types/faqs";
import { useState } from "react";

interface QnaProps {
  faqs: Faq[];
}

const ITEMS_PER_PAGE = 5;
const CATEGORY_CHOICES = [
  "General Questions",
  "Property Owners/Landlords",
  "Tenants",
] as const;

const FAQ = ({ faqs }: QnaProps) => {
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  // Group FAQs by category
  const faqsByCategory = faqs.reduce<Record<string, Faq[]>>((acc, faq) => {
    const category = faq.category || "General Questions";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(faq);
    return acc;
  }, {});

  // Ensure all predefined categories exist, even if empty
  CATEGORY_CHOICES.forEach((category) => {
    if (!faqsByCategory[category]) {
      faqsByCategory[category] = [];
    }
  });

  // Filter out categories with no FAQs
  const categories = CATEGORY_CHOICES.filter(
    (category) => faqsByCategory[category].length > 0
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const getVisibleFaqs = (category: string) => {
    const isExpanded = expandedCategories[category];
    const categoryFaqs = faqsByCategory[category];
    return isExpanded ? categoryFaqs : categoryFaqs.slice(0, ITEMS_PER_PAGE);
  };

  return (
    <ResponsiveContainer variant="narrow" paddingY="xl">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
        <HeadingSection
          badge="FAQ"
          title="Why Choose YETI PM?"
          subtitle="Find answers to commonly asked questions about our services"
        />

        <div className="mt-8">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent p-2 ">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-6 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="w-full border border-gray-200 rounded-xl shadow-sm bg-white overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    {getVisibleFaqs(category).map((faq) => (
                      <AccordionItem
                        key={faq.id}
                        value={`item-${faq.id}`}
                        className="border-b last:border-none"
                      >
                        <AccordionTrigger className="text-base sm:text-lg font-medium p-4 sm:p-6 hover:no-underline hover:bg-gray-50 transition-colors duration-200">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="p-4 sm:p-6 bg-gray-50">
                          <div
                            className="prose prose-sm sm:prose-base max-w-none text-gray-700"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  {faqsByCategory[category].length > ITEMS_PER_PAGE && (
                    <div className="p-4 sm:p-6 border-t bg-gray-50/50">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => toggleCategory(category)}
                      >
                        {expandedCategories[category]
                          ? "Show Less"
                          : `See ${
                              faqsByCategory[category].length - ITEMS_PER_PAGE
                            } More`}
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default FAQ;
