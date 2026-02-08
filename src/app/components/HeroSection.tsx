import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';

export function HeroSection() {
  const [homeValue, setHomeValue] = useState(500000);
  const [mortgageBalance, setMortgageBalance] = useState(250000);
  const [animatedEquity, setAnimatedEquity] = useState(0);
  const [animatedCash, setAnimatedCash] = useState(0);

  const equity = homeValue - mortgageBalance;
  const availableCash = Math.floor(equity * 0.85); // 85% LTV typical

  // Animate numbers when values change
  useEffect(() => {
    const duration = 800;
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      
      setAnimatedEquity(Math.floor(equity * easeProgress));
      setAnimatedCash(Math.floor(availableCash * easeProgress));
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedEquity(equity);
        setAnimatedCash(availableCash);
      }
    }, stepDuration);
    
    return () => clearInterval(interval);
  }, [homeValue, mortgageBalance, equity, availableCash]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '50%', right: '10%' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-900">Unlock Your Home's Potential</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent" style={{ fontWeight: 700, lineHeight: 1.1 }}>
              Your Home Might Be Hiding Six Figures.
            </h1>

            <p className="text-xl text-gray-600 mb-8" style={{ fontWeight: 400 }}>
              Find out what you could access in under 60 seconds.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">No credit impact</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">No obligation</span>
              </div>
            </div>

            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontWeight: 600 }}
            >
              Discover My Equity
            </motion.button>
          </motion.div>

          {/* Right: Interactive Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Home Value Slider */}
              <div className="mb-8">
                <label className="block text-sm text-gray-600 mb-3" style={{ fontWeight: 500 }}>
                  Estimated Home Value
                </label>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>
                    {formatCurrency(homeValue)}
                  </span>
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <input
                  type="range"
                  min="100000"
                  max="2000000"
                  step="10000"
                  value={homeValue}
                  onChange={(e) => setHomeValue(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, rgb(147 51 234) 0%, rgb(59 130 246) ${((homeValue - 100000) / (2000000 - 100000)) * 100}%, rgb(226 232 240) ${((homeValue - 100000) / (2000000 - 100000)) * 100}%, rgb(226 232 240) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$100K</span>
                  <span>$2M</span>
                </div>
              </div>

              {/* Mortgage Balance Slider */}
              <div className="mb-8">
                <label className="block text-sm text-gray-600 mb-3" style={{ fontWeight: 500 }}>
                  Remaining Mortgage Balance
                </label>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>
                    {formatCurrency(mortgageBalance)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={homeValue * 0.9}
                  step="5000"
                  value={mortgageBalance}
                  onChange={(e) => setMortgageBalance(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, rgb(147 51 234) 0%, rgb(59 130 246) ${(mortgageBalance / (homeValue * 0.9)) * 100}%, rgb(226 232 240) ${(mortgageBalance / (homeValue * 0.9)) * 100}%, rgb(226 232 240) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$0</span>
                  <span>{formatCurrency(homeValue * 0.9)}</span>
                </div>
              </div>

              {/* Results Display */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-200">
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Your Equity</div>
                  <motion.div
                    key={animatedEquity}
                    className="text-2xl text-gray-900"
                    style={{ fontWeight: 700 }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {formatCurrency(animatedEquity)}
                  </motion.div>
                </div>

                <div className="h-px bg-purple-200 my-4" />

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <div className="text-sm text-gray-600">Cash You Could Access</div>
                  </div>
                  <motion.div
                    key={animatedCash}
                    className="text-4xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                    style={{ fontWeight: 800 }}
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {formatCurrency(animatedCash)}
                  </motion.div>
                  <p className="text-xs text-gray-500 mt-2">Based on 85% loan-to-value ratio</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgb(147 51 234), rgb(59 130 246));
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(147, 51, 234, 0.5);
          transition: all 0.2s;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(147, 51, 234, 0.6);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgb(147 51 234), rgb(59 130 246));
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(147, 51, 234, 0.5);
          transition: all 0.2s;
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(147, 51, 234, 0.6);
        }
      `}</style>
    </div>
  );
}
