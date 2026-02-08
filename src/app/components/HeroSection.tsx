import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
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
      {/* Background decorations - removed gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Removed animated gradient blobs */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            

            <h1 className="mb-6 text-gray-900 px-[0px] pt-[20px] pb-[0px] text-[42px]" style={{ fontWeight: 700, lineHeight: 1.1 }}>
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
              className="px-8 py-4 bg-[#026EC4] text-white rounded-full text-lg shadow-lg hover:shadow-xl hover:bg-[#0ECEEO] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('survey')}
              style={{ fontWeight: 600 }}
            >Shop Rates →</motion.button>
          </motion.div>

          {/* Right: Interactive Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-[32px] mx-[0px] mt-[40px] mb-[0px]"
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
                    background: `linear-gradient(to right, rgb(2 110 196) 0%, rgb(14 206 224) ${((homeValue - 100000) / (2000000 - 100000)) * 100}%, rgb(226 232 240) ${((homeValue - 100000) / (2000000 - 100000)) * 100}%, rgb(226 232 240) 100%)`
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
                    background: `linear-gradient(to right, rgb(2 110 196) 0%, rgb(14 206 224) ${(mortgageBalance / (homeValue * 0.9)) * 100}%, rgb(226 232 240) ${(mortgageBalance / (homeValue * 0.9)) * 100}%, rgb(226 232 240) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$0</span>
                  <span>{formatCurrency(homeValue * 0.9)}</span>
                </div>
              </div>

              {/* Results Display */}
              <div className="bg-cyan-50 rounded-2xl p-6 border-2 border-cyan-200">
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
                    className="text-4xl text-[#026EC4]"
                    style={{ fontWeight: 800 }}
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    ${animatedCash.toLocaleString()}
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
          background: #026EC4;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #026EC4;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}