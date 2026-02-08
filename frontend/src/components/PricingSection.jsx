import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/mock';
import { Button } from './ui/button';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-gray-500 uppercase tracking-wide text-sm font-medium">Our Packages</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-green">
            Select a Plan According to Your<br />Requirements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-3xl p-8 relative ${
                plan.popular 
                  ? 'ring-2 ring-primary shadow-xl' 
                  : 'shadow-sm hover:shadow-lg'
              } transition-shadow duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-bold text-dark-green text-2xl mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500">
                  {plan.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold text-dark-green">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full rounded-full py-6 text-lg font-semibold group ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-dark-green hover:bg-dark-green/90 text-white'
                }`}
              >
                Book a Landscaper Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
