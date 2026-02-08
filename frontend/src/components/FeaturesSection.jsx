import React from 'react';
import { Award, HeadphonesIcon } from 'lucide-react';
import { images } from '../data/mock';

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-gray-500 uppercase tracking-wide text-sm font-medium">Learn about us</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-green leading-tight">
              Crafting Beautiful Outdoor Spaces With Passion & Precision
            </h2>
            
            {/* Big Number */}
            <div className="flex items-baseline gap-4">
              <span className="text-8xl font-bold text-primary">25+</span>
              <span className="text-xl text-gray-600">Years of Work Experience</span>
            </div>

            {/* Stats Blocks */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4 p-5 bg-light-bg rounded-2xl">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-green text-lg">Expert Landscaping</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Professional designs tailored to your unique outdoor space.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-light-bg rounded-2xl">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HeadphonesIcon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-green text-lg">Reliable Support</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Dedicated customer service available when you need us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={images.features}
                alt="Gardener trimming hedge"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
