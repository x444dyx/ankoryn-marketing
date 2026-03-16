import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Features from '../components/Features';
import MemoryShowcase from '../components/MemoryShowcase';
import ModelSwitchDemo from '../components/ModelSwitchDemo';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-emerald-500/30">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <MemoryShowcase />
      <ModelSwitchDemo />
      <HowItWorks />
      <CTA />
    </main>
  );
}
