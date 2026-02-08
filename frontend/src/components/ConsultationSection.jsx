import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { images } from '../data/mock';
import { toast } from 'sonner';

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-light-bg relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={images.consultation}
                alt="Gardener working with plants"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/30 to-transparent" />
            </div>
          </div>

          {/* Right - Form Card */}
          <div className="lg:-ml-20 relative z-10">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-green mb-2">
                Book A Free Consultation
              </h2>
              <p className="text-gray-500 mb-8">
                Get expert advice for your outdoor space transformation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-5 py-4 rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-5 py-4 rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 text-lg font-semibold"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
