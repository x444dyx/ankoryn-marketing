import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Stop restarting AI. <br />
            <span className="text-emerald-400">Start building workspaces.</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Join the developers building persistent AI workflows with Ankoryn. 
            Get started with your first workspace today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Start Workspace <ChevronRight size={24} />
            </button>
          </div>
          
          <p className="mt-8 text-zinc-600 text-sm">
            Free for dual workspaces. Multiple workspaces available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
