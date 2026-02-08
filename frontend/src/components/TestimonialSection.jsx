import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonial, images } from '../data/mock';
import { Button } from './ui/button';

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-dark-green relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              The Best Customers Says About Our Action
            </h2>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              View all reviews
              <span className="ml-2">→</span>
            </Button>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Rating Box */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white">{testimonial.rating}</div>
                  <div className="flex items-center gap-1 mt-2 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-white/80">
                  <p className="text-sm">From {testimonial.reviewCount} Members</p>
                  <p className="text-sm">Reviewed by Google</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-3xl p-8 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={images.testimonial}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-dark-green text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
