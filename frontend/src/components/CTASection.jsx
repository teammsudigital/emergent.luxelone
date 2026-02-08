import React from 'react';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';
import { images, ctaFeatures } from '../data/mock';

const CTASection = () => {
  const iconMap = [TrendingUp, Clock, DollarSign];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-gray-500 uppercase tracking-wide text-sm font-medium">The Results</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-dark-green mb-12 max-w-3xl">
          Experience a Greener, Cleaner Outdoor Space Effortlessly
        </h2>

        {/* Full Width Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <img
            src={images.cta}
            alt="Beautiful garden pathway"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-green/40 to-transparent" />
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {ctaFeatures.map((feature, index) => {
            const Icon = iconMap[index];
            return (
              <div 
                key={index}
                className="bg-light-bg rounded-2xl p-6 hover:bg-lime-50 transition-colors duration-200"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-dark-green text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
