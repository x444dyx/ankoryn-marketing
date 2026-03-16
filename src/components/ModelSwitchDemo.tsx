import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const demoSteps = [
  {
    model: "GPT-4o",
    color: "bg-emerald-500",
    text: "I've analyzed the DoctorDoctor database schema. I recommend using PostgreSQL for the patient records to ensure ACID compliance.",
    action: "Switching to Claude 3.5..."
  },
  {
    model: "Claude 3.5",
    color: "bg-orange-500",
    text: "Building on GPT's recommendation for PostgreSQL, here is the optimized schema for the 'patient_visits' table with proper indexing for AI search.",
    action: "Switching to Gemini 1.5..."
  },
  {
    model: "Gemini 1.5",
    color: "bg-blue-500",
    text: "I've reviewed the PostgreSQL schema. Given the long-term growth of DoctorDoctor, we should also consider a vector extension like pgvector for the semantic memory features.",
    action: "Restarting Demo..."
  }
];

export default function ModelSwitchDemo() {
  const [step, setStep] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSwitching(true);
      setTimeout(() => {
        setStep((prev) => (prev + 1) % demoSteps.length);
        setIsSwitching(false);
      }, 1000);
    }, 5000);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <section className="py-24 px-6 bg-zinc-950 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Same conversation. Different model.</h2>
        <p className="text-zinc-400 text-lg">
          No reset. No re-explaining. No lost context. 
          The AI continues exactly where the last one left off.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-20" />
        <div className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="p-4 border-b border-white/5 flex items-center justify-between bg-black/20">
            <div className="flex items-center gap-3">
              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold text-black transition-colors", demoSteps[step].color)}>
                {demoSteps[step].model.substring(0, 3).toUpperCase()}
              </div>
              <div>
                <div className="text-white text-xs font-bold">{demoSteps[step].model}</div>
                <div className="text-zinc-500 text-[10px]">Active in Workspace: DoctorDoctor</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-zinc-400 font-mono">CONTEXT_SYNCED</span>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-8 min-h-[240px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSwitching ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="flex gap-4">
                    <div className={cn("w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-black", demoSteps[step].color)}>
                      AI
                    </div>
                    <p className="text-zinc-300 leading-relaxed text-sm">
                      {demoSteps[step].text}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="switching"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center gap-4 py-10"
                >
                  <RefreshCw className="text-emerald-500 animate-spin" size={32} />
                  <div className="text-zinc-400 text-sm font-mono tracking-widest uppercase">
                    {demoSteps[step].action}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer / Status */}
          <div className="p-3 bg-black/40 border-t border-white/5 flex items-center justify-center gap-6">
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
              <CheckCircle2 size={12} className="text-emerald-500" /> Memory Loaded
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
              <CheckCircle2 size={12} className="text-emerald-500" /> Context Injected
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
              <CheckCircle2 size={12} className="text-emerald-500" /> Model Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
