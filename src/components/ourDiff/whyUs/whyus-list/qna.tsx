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
      <HeadingSection
        badge="FAQ"
        title="Why Choose YETI PM?"
        subtitle="Find answers to commonly asked questions about our services"
      />

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`}>
            <AccordionTrigger className="text-lg font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ResponsiveContainer>
  );
};

export default FAQ;
