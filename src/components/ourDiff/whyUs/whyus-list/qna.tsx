import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import HeadingSection from "@/components/common/heading-section";
import ResponsiveContainer from "@/components/common/responsive-container";
import { Faq } from "@/types/faqs";

interface QnaProps {
  faqs: Faq[];
}

const FAQ = ({ faqs }: QnaProps) => {
  return (
    <ResponsiveContainer variant="narrow" paddingY="xl">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
        <HeadingSection
          badge="FAQ"
          title="Why Choose YETI PM?"
          subtitle="Find answers to commonly asked questions about our services"
        />

        {/* Added explicit padding to Accordion */}
        <div className="w-full border border-gray-200 rounded-lg shadow-sm bg-white px-4 sm:px-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="border-b last:border-none"
              >
                <AccordionTrigger className="text-base sm:text-lg font-medium p-4 sm:p-6 md:p-8">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-6 md:p-8 bg-gray-50 rounded-b-lg">
                  <div
                    className="text-gray-700 leading-relaxed text-sm sm:text-base"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default FAQ;