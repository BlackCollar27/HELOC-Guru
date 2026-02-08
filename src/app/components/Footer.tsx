import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl" style={{ fontWeight: 700 }}>
                EquityKey
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Unlock your home's hidden value and discover financial freedom with trusted HELOC partners.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontWeight: 600 }}>
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
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontWeight: 600 }}>
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
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontWeight: 600 }}>
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 mt-0.5" />
                <a href="mailto:hello@equitykey.com" className="text-gray-300 hover:text-white transition-colors">
                  hello@equitykey.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-purple-400 mt-0.5" />
                <a href="tel:1-800-EQUITY" className="text-gray-300 hover:text-white transition-colors">
                  1-800-EQUITY
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                <span className="text-gray-300">
                  123 Financial Plaza<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 EquityKey. All rights reserved. NMLS #123456
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Licensed in all 50 states. Equal Housing Lender.
            </p>
          </div>
          <p className="text-gray-500 text-xs mt-4 text-center">
            Disclaimer: EquityKey is not a lender. We connect homeowners with lending partners. 
            Actual loan terms, rates, and fees may vary. All loans subject to credit approval.
          </p>
        </div>
      </div>
    </footer>
  );
}
