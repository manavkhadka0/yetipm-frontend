import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="max-w-2xl mx-auto py-16">
      <h2 className="text-2xl font-semibold text-[#336699] mb-6">
        Why YETI PM Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium">
            What are the benefits of leasing with YETI PM?
          </AccordionTrigger>
          <AccordionContent>
            Leasing with YETI PM provides flexibility, affordability, and access
            to top-notch customer service, ensuring a hassle-free experience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium">
            What are the advantages of renting a house instead of buying?
          </AccordionTrigger>
          <AccordionContent>
            Renting provides flexibility, fewer responsibilities for
            maintenance, and no long-term financial commitment compared to
            buying a house.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium">
            What makes YETI PM different from its competitors?
          </AccordionTrigger>
          <AccordionContent>
            YETI PM offers a wide selection of homes, high-quality maintenance
            services, and tenant-focused support, making it a standout in the
            industry.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-medium">
            Does YETI PM offer any special programs or services for tenants?
          </AccordionTrigger>
          <AccordionContent>
            Yes, YETI PM offers various tenant programs, such as maintenance
            coverage and flexible payment options to enhance your leasing
            experience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
