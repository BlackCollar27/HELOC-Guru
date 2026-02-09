import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import logo from 'figma:asset/ff4a416c4f7e438ef1715fb8c96936568b791dfe.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand - Always visible */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="HELOC Guru" className="h-[140px] md:h-[80px]" />
          </div>
          <p className="text-gray-600 mb-6">
            Unlock your home's hidden value and discover financial freedom with trusted HELOC partners.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#026EC4] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile: Collapsible sections */}
        <div className="md:hidden space-y-4 mb-12">
          {/* Quick Links */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('quick-links')}
              className="w-full flex items-center justify-between py-4 text-gray-900"
              style={{ fontWeight: 600 }}
            >
              <span className="text-lg">Quick Links</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openSection === 'quick-links' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === 'quick-links' && (
              <ul className="space-y-3 pb-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'why-helocs', label: 'Why HELOCs' },
                  { id: 'calculators', label: 'Calculators' },
                  { id: 'partners', label: 'Top Partners' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigate(item.id)}
                      className="text-gray-600 hover:text-[#026EC4] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Company */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('company')}
              className="w-full flex items-center justify-between py-4 text-gray-900"
              style={{ fontWeight: 600 }}
            >
              <span className="text-lg">Company</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openSection === 'company' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === 'company' && (
              <ul className="space-y-3 pb-4">
                {[
                  { id: 'about', label: 'About Us' },
                  { id: 'contact', label: 'Contact' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigate(item.id)}
                      className="text-gray-600 hover:text-[#026EC4] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#026EC4] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#026EC4] transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Get in Touch */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('contact')}
              className="w-full flex items-center justify-between py-4 text-gray-900"
              style={{ fontWeight: 600 }}
            >
              <span className="text-lg">Get in Touch</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openSection === 'contact' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === 'contact' && (
              <ul className="space-y-3 pb-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#026EC4] mt-0.5" />
                  <a href="mailto:hello@equitykey.com" className="text-gray-600 hover:text-[#026EC4] transition-colors">
                    hello@equitykey.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#026EC4] mt-0.5" />
                  <a href="tel:1-800-EQUITY" className="text-gray-600 hover:text-[#026EC4] transition-colors">
                    1-800-EQUITY
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#026EC4] mt-0.5" />
                  <span className="text-gray-600">
                    123 Financial Plaza<br />
                    San Francisco, CA 94105
                  </span>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Desktop: Grid layout (unchanged) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand - Hidden on desktop since it's shown above */}
          <div className="hidden"></div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 text-gray-900" style={{ fontWeight: 600 }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'why-helocs', label: 'Why HELOCs' },
                { id: 'calculators', label: 'Calculators' },
                { id: 'partners', label: 'Top Partners' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className="text-gray-600 hover:text-[#026EC4] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg mb-4 text-gray-900" style={{ fontWeight: 600 }}>
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className="text-gray-600 hover:text-[#026EC4] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-600 hover:text-[#026EC4] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#026EC4] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 text-gray-900" style={{ fontWeight: 600 }}>
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#026EC4] mt-0.5" />
                <a href="mailto:hello@equitykey.com" className="text-gray-600 hover:text-[#026EC4] transition-colors">
                  hello@equitykey.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#026EC4] mt-0.5" />
                <a href="tel:1-800-EQUITY" className="text-gray-600 hover:text-[#026EC4] transition-colors">
                  1-800-EQUITY
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#026EC4] mt-0.5" />
                <span className="text-gray-600">
                  123 Financial Plaza<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 EquityKey. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              A lead generation service connecting homeowners with lenders.
            </p>
          </div>
          <p className="text-gray-400 text-xs mt-4 text-center">
            Disclaimer: EquityKey is not a lender. We connect homeowners with lending partners. 
            Actual loan terms, rates, and fees may vary. All loans subject to credit approval.
          </p>
        </div>
      </div>
    </footer>
  );
}