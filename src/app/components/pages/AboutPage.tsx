import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Award, Users, TrendingUp, Shield } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Homeowner First',
    description: 'Every decision we make puts homeowners and their financial wellbeing at the center.',
  },
  {
    icon: Shield,
    title: 'Transparency',
    description: 'No hidden fees, no surprises. We believe in complete honesty and clarity.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We partner only with the most trusted and reputable lenders in the industry.',
  },
  {
    icon: Users,
    title: 'Education',
    description: 'We empower homeowners with knowledge to make informed financial decisions.',
  },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    bio: 'Former VP at a major mortgage company with 15+ years in lending',
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-Founder',
    bio: 'Built fintech platforms at Stripe and Square, passionate about accessible finance',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Partnerships',
    bio: '20 years connecting homeowners with the right lending solutions',
  },
  {
    name: 'David Park',
    role: 'Chief Product Officer',
    bio: 'Product leader from SoFi, focused on delightful user experiences',
  },
];

export function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl sm:text-6xl mb-6"
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About EquityKey
          </motion.h1>
          <motion.p
            className="text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're on a mission to help homeowners unlock their financial potential
          </motion.p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl mb-6">
              <Target className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Most homeowners don't realize they're sitting on a financial goldmine. We founded EquityKey 
              because we believe accessing your home equity should be simple, transparent, and empowering—not 
              confusing and intimidating like traditional lending.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
              <TrendingUp className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-2xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>
                Our Story
              </h3>
              <p className="text-gray-700">
                Founded in 2020, EquityKey was born from the frustration of seeing friends and family 
                struggle with high-interest debt while sitting on substantial home equity. We knew there 
                had to be a better way.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>
                Our Approach
              </h3>
              <p className="text-gray-700">
                We use cutting-edge technology to match homeowners with the best HELOC options from 
                our network of trusted partners. No bias, no hidden agendas—just the best fit for your 
                unique situation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900" style={{ fontWeight: 600 }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced leaders from fintech and lending
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                  <span className="text-4xl text-white" style={{ fontWeight: 700 }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl mb-1 text-gray-900" style={{ fontWeight: 600 }}>
                  {member.name}
                </h3>
                <div className="text-purple-600 mb-3" style={{ fontWeight: 600 }}>
                  {member.role}
                </div>
                <p className="text-sm text-gray-600">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50,000+', label: 'Happy Homeowners' },
              { value: '$2.5B+', label: 'Equity Unlocked' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '15+', label: 'Lending Partners' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-2" style={{ fontWeight: 800 }}>
                  {stat.value}
                </div>
                <div className="text-xl text-white/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
