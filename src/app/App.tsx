import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { BenefitsSection } from './components/BenefitsSection';
import { TrustSection } from './components/TrustSection';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <HeroSection />
      <HowItWorks />
      <BenefitsSection />
      <TrustSection />
      <FinalCTA />
    </div>
  );
}
