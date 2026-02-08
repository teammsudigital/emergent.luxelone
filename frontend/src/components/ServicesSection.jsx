import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services, images } from '../data/mock';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-lime-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-gray-500 uppercase tracking-wide text-sm font-medium">Service Area</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-green">
            What We Are Offering to Our<br />Potential Client
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Number Badge */}
                <div className="p-6 pb-0">
                  <span className="inline-block bg-primary text-white text-sm font-bold px-4 py-2 rounded-full">
                    {service.id}
                  </span>
                </div>

                {/* Image */}
                <div className="p-6 pt-4">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={images.services[service.image]}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <h3 className="font-bold text-dark-green text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-200"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
