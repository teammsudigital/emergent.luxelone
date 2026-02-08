import React from 'react';
import { processSteps, images } from '../data/mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ProcessSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-gray-500 uppercase tracking-wide text-sm font-medium">How It Works</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-green leading-tight mb-8">
              How We Bring Your Landscape Vision to Life
            </h2>

            {/* Process Images */}
            <div className="grid grid-cols-3 gap-4">
              {images.process.map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden">
                  <img
                    src={img}
                    alt={`Process step ${index + 1}`}
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Accordion */}
          <div>
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {processSteps.map((step, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-2xl px-6 overflow-hidden data-[state=open]:border-primary data-[state=open]:bg-lime-50"
                >
                  <AccordionTrigger className="text-lg font-bold text-dark-green hover:no-underline py-5">
                    {step.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 pb-5">
                    {step.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
