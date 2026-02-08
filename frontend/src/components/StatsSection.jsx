import React from 'react';
import { stats } from '../data/mock';

const StatsSection = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-gray-500 uppercase tracking-wide text-sm font-medium">
            Our Experience Speaks for Itself
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center relative"
            >
              {/* Divider */}
              {index !== 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-200" />
              )}
              
              <div className="space-y-2">
                <span className="text-5xl lg:text-6xl font-bold text-dark-green">
                  {stat.value}
                </span>
                <p className="text-gray-500 text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
