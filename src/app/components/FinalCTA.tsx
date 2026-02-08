import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function FinalCTA() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '20%', right: '10%' }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-white">Start Your Journey Today</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
            Ready to Unlock Your<br />Home's Hidden Value?
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of homeowners who've discovered financial freedom through their home equity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-white text-purple-600 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontWeight: 600 }}
            >
              <span className="flex items-center gap-2">
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontWeight: 600 }}
            >
              Learn More
            </motion.button>
          </div>

          <p className="text-sm text-white/70 mt-8">
            No credit check required • Takes less than 60 seconds • 100% free
          </p>
        </motion.div>
      </div>
    </div>
  );
}
