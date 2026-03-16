import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Cpu, Layers, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const models = [
  { name: 'GPT-4o', color: 'bg-emerald-500' },
  { name: 'Claude 3.5', color: 'bg-orange-500' },
  { name: 'Gemini 1.5', color: 'bg-blue-500' },
  { name: 'Mistral Large', color: 'bg-zinc-500' },
  { name: 'Ollama (Local)', color: 'bg-purple-500' },
];

export default function Solution() {
  const [activeModel, setActiveModel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModel((prev) => (prev + 1) % models.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            The Architecture of <br />
            <span className="text-emerald-400">Persistent Intelligence.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Ankoryn decouples the <strong>Memory Layer</strong> from the <strong>Inference Layer</strong>. 
            Your workspace acts as a permanent brain that feeds context to whichever model you choose to use.
          </p>
          
          <ul className="space-y-6">
            {[
              "Workspace Memory remains constant",
              "Context Engine optimizes prompts for each model",
              "Switch models mid-conversation instantly",
              "Local-first storage for maximum privacy"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative p-8 rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm">
          <div className="flex flex-col gap-8">
            {/* Memory Layer */}
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                  <Database className="text-black" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Workspace Memory</h4>
                  <p className="text-emerald-400/60 text-xs">Permanent Context</p>
                </div>
              </div>
              <div className="text-emerald-400 text-xs font-mono">ACTIVE</div>
            </div>

            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowRight className="rotate-90 text-zinc-700" />
              </motion.div>
            </div>

            {/* Context Engine */}
            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <Layers className="text-black" />
              </div>
              <div>
                <h4 className="text-white font-bold">Context Engine</h4>
                <p className="text-blue-400/60 text-xs">Semantic Synthesis</p>
              </div>
            </div>

            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowRight className="rotate-90 text-zinc-700" />
              </motion.div>
            </div>

            {/* Model Layer */}
            <div className="p-6 rounded-2xl bg-zinc-800/50 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center">
                    <Cpu className="text-white" />
                  </div>
                  <h4 className="text-white font-bold">AI Models</h4>
                </div>
                <div className="text-zinc-500 text-xs font-mono">SWITCHING...</div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {models.map((m, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: activeModel === i ? 1 : 0.3,
                      scale: activeModel === i ? 1.05 : 1,
                      borderColor: activeModel === i ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)'
                    }}
                    className={cn(
                      "px-3 py-1.5 rounded-lg border text-[10px] font-bold uppercase tracking-wider transition-all",
                      activeModel === i ? "bg-white text-black" : "bg-transparent text-zinc-500"
                    )}
                  >
                    {m.name}
                  </motion.div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModel}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="mt-6 p-4 rounded-xl bg-black/40 border border-white/5 text-sm text-zinc-400 italic"
                >
                  "{models[activeModel].name} is now processing your workspace context..."
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
