import React from 'react';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { ComparisonSection } from './ComparisonSection';
import { PlatformSnapshot } from './PlatformSnapshot';
import { PlatformSection } from './PlatformSection';
import { MexiSection } from './MexiSection';
import { IndustriesSection } from './IndustriesSection';
import { WhySection } from './WhySection';
import { AboutSection } from './AboutSection';
import { FinalCtaSection } from './FinalCtaSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <HeroSection />
        <ComparisonSection />
        <PlatformSnapshot />
        <PlatformSection />
        <MexiSection />
        <IndustriesSection />
        <WhySection />
        <AboutSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}