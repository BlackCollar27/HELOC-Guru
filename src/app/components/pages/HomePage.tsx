import React from 'react';
import { HeroSection } from '../HeroSection';
import { HowItWorks } from '../HowItWorks';
import { BenefitsSection } from '../BenefitsSection';
import { TrustSection } from '../TrustSection';
import { FinalCTA } from '../FinalCTA';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <BenefitsSection />
      <TrustSection />
      <FinalCTA />
    </>
  );
}
