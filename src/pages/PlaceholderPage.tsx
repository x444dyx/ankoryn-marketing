import React from 'react';
import { motion } from 'motion/react';

export default function PlaceholderPage({ title, description }: { title: string, description: string }) {
  return (
    <main className="pt-32 pb-20 px-6 min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-zinc-400 text-xl mb-12 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5">
                <div className="h-4 w-24 bg-emerald-500/20 rounded mb-4" />
                <div className="h-8 w-3/4 bg-white/5 rounded mb-4" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white/5 rounded" />
                  <div className="h-4 w-5/6 bg-white/5 rounded" />
                  <div className="h-4 w-4/6 bg-white/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
