import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' }
  ];

  const trustedBrands = ['Sitemark', 'Sitemark', 'Sitemark', 'Sitemark'];

  return (
    <footer className="bg-dark-green">
      {/* Trusted Brands */}
      <div className="border-b border-white/10 py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-white/60 text-sm uppercase tracking-wide">Trusted By Leading Brands</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {trustedBrands.map((brand, index) => (
              <div key={index} className="flex items-center gap-2 text-white/40">
                <Leaf className="w-5 h-5" />
                <span className="font-semibold">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="font-bold text-xl text-white">LuxeLawn</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <p className="text-white/50 text-sm text-center">
              © {new Date().getFullYear()} LuxeLawn. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Green Accent Bar */}
      <div className="h-1 bg-primary" />
    </footer>
  );
};

export default Footer;
