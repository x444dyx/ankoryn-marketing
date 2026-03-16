import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-40 left-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Try Ankoryn for free
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Switch AI models <br />
            <span className="text-zinc-500 italic">without losing context.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Ankoryn is an AI Workspace OS that separates memory from models. 
            Your workspace remembers everything, even when you switch between GPT, Claude, and Gemini.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Start Workspace <ChevronRight size={20} />
            </button>
            <a 
              href="#demo"
              className="w-full sm:w-auto bg-zinc-900 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
            >
              <Play size={18} fill="currentColor" /> Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Hero Visual Placeholder */}
        <motion.div
          id="demo"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative group scroll-mt-32"
        >
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <video
              src="/ankoryn.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-auto block transition-all duration-700 group-hover:scale-[1.01] group-hover:brightness-105"
            />
          </div>
          
          {/* Floating Model Badges */}
          <div className="absolute -top-6 -right-6 bg-black border border-white/10 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-[10px] font-bold">GPT</div>
            <span className="text-xs text-zinc-400">Context Preserved</span>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-black border border-white/10 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-pulse">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-[10px] font-bold">CLD</div>
            <span className="text-xs text-zinc-400">Memory Active</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
