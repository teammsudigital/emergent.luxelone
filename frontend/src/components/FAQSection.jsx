import React from 'react';
import { faqs } from '../data/mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-24 bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-gray-500 uppercase tracking-wide text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-green">
            Your Most Important Questions<br />Answered Here
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border-0 rounded-2xl px-6 shadow-sm overflow-hidden data-[state=open]:shadow-md data-[state=open]:ring-2 data-[state=open]:ring-primary/20"
              >
                <AccordionTrigger className="text-lg font-semibold text-dark-green hover:no-underline py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
