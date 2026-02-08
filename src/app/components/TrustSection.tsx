import React from 'react';
import { motion } from 'motion/react';
import { Star, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Homeowners Helped',
  },
  {
    icon: Award,
    value: '$2.5B+',
    label: 'Equity Unlocked',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Average Rating',
  },
  {
    icon: TrendingUp,
    value: '3 Days',
    label: 'Average Funding Time',
  },
];

const partners = [
  'Wells Fargo',
  'Bank of America',
  'Chase',
  'US Bank',
  'Regions Bank',
  'PNC Bank',
];

export function TrustSection() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-white/50">
                  <Icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent" style={{ fontWeight: 800 }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Partners */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl mb-8 text-gray-700" style={{ fontWeight: 600 }}>
            Trusted Lending Partners
          </h3>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-gray-400 text-lg" style={{ fontWeight: 600 }}>
                    {partner}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            {
              quote: "I unlocked $180K for my kitchen remodel. The process was incredibly smooth!",
              name: "Sarah M.",
              location: "Austin, TX",
            },
            {
              quote: "Better rates than I ever imagined. Paid off my credit cards and saved thousands.",
              name: "Michael R.",
              location: "Denver, CO",
            },
            {
              quote: "Fast, transparent, and trustworthy. Funded my daughter's college tuition.",
              name: "Linda K.",
              location: "Seattle, WA",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-white/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <div className="text-gray-900" style={{ fontWeight: 600 }}>{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
