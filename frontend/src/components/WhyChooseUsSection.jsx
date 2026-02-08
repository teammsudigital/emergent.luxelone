import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { images, whyChooseUsPoints } from '../data/mock';

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-gray-500 uppercase tracking-wide text-sm font-medium">Why Choose Us</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden">
              <img
                src={images.whyChooseUs}
                alt="Happy gardener holding plants"
                className="w-full h-[550px] object-cover"
              />
            </div>
            {/* Decorative leaf shapes */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lime-100 rounded-full -z-10" />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-green leading-tight">
              Why Homeowners Trust Our Landscaping Expertise
            </h2>

            <p className="text-gray-500 text-lg">
              We combine years of experience with a passion for creating stunning outdoor spaces that exceed expectations.
            </p>

            <div className="space-y-5">
              {whyChooseUsPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-light-bg rounded-2xl hover:bg-lime-50 transition-colors duration-200">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-green text-lg">{point.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
