import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-[#026EC4] text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl sm:text-6xl mb-6"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're here to help answer your questions about home equity
          </motion.p>
        </div>
      </div>

      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900" style={{ fontWeight: 700 }}>
                Let's Talk About Your Home Equity
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions? Our team of home equity specialists is ready to help you discover your options.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#026EC4] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-gray-900" style={{ fontWeight: 600 }}>
                      Phone
                    </h3>
                    <a href="tel:1-800-EQUITY" className="text-[#026EC4] hover:text-[#0ECEEO] text-lg">
                      1-800-EQUITY (378-4897)
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri 8am-8pm ET</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0ECEEO] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-gray-900" style={{ fontWeight: 600 }}>
                      Email
                    </h3>
                    <a href="mailto:hello@equitykey.com" className="text-[#026EC4] hover:text-[#0ECEEO] text-lg">
                      hello@equitykey.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-gray-900" style={{ fontWeight: 600 }}>
                      Office
                    </h3>
                    <p className="text-gray-600">
                      123 Financial Plaza<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#026EC4] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-gray-900" style={{ fontWeight: 600 }}>
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8am - 8pm ET<br />
                      Saturday: 9am - 5pm ET<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-lg mb-4 text-gray-900" style={{ fontWeight: 600 }}>
                  Why Homeowners Choose Us
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Response Time</span>
                    <span className="text-[#026EC4]" style={{ fontWeight: 600 }}>2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="text-[#026EC4]" style={{ fontWeight: 600 }}>4.9/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Homeowners Helped</span>
                    <span className="text-[#026EC4]" style={{ fontWeight: 600 }}>50,000+</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-purple-600" />
                  <h3 className="text-2xl text-gray-900" style={{ fontWeight: 600 }}>
                    Send Us a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="heloc">HELOC Questions</option>
                      <option value="calculator">Calculator Help</option>
                      <option value="partners">Partner Information</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2" style={{ fontWeight: 500 }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#026EC4] text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontWeight: 600 }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-cyan-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900" style={{ fontWeight: 700 }}>
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to questions you may have
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to get a response?',
                a: 'We typically respond to all inquiries within 2 hours during business hours, and within 24 hours outside business hours.',
              },
              {
                q: 'Is there a fee for using your service?',
                a: 'No! EquityKey is completely free for homeowners. We\'re compensated by our lending partners.',
              },
              {
                q: 'Do I need to check my credit to use your calculator?',
                a: 'No credit check is required to use our calculators or get initial estimates. Credit checks only happen when you apply with a lender.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg mb-2 text-gray-900" style={{ fontWeight: 600 }}>
                  {faq.q}
                </h3>
                <p className="text-gray-600">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}