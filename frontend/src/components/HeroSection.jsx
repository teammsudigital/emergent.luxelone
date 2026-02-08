import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { images } from '../data/mock';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-lime-300 via-lime-400 to-primary pt-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -left-20 bottom-20 w-80 h-80 bg-dark-green/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-dark-green" />
              <span className="text-dark-green font-medium">Professional Landscaping</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-dark-green leading-tight">
              Transforming Yards Into Beautiful Outdoor Spaces
            </h1>
            
            <p className="text-lg text-dark-green/80 max-w-lg">
              Create your dream outdoor space with our expert landscaping services. 
              From design to installation, we bring nature's beauty to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-dark-green hover:bg-dark-green/90 text-white rounded-full px-8 py-6 text-lg font-semibold group"
              >
                Book a Landscaper Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Decorative underline slider */}
            <div className="flex items-center gap-2 pt-4">
              <div className="w-16 h-1 bg-dark-green rounded-full" />
              <div className="w-8 h-1 bg-dark-green/40 rounded-full" />
              <div className="w-4 h-1 bg-dark-green/20 rounded-full" />
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative lg:pl-8">
            {/* Abstract shape background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-lime-200/50 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob" />
            </div>
            
            <div className="relative">
              <img
                src={images.hero.lawnMower}
                alt="Professional lawn mowing service"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/3]"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-dark-green">25+ Years</p>
                    <p className="text-sm text-gray-500">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
