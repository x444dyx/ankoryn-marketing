import React from 'react';
import { motion } from 'motion/react';
import { Pin, FileText, Search, Sparkles } from 'lucide-react';

export default function MemoryShowcase() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-4">
               {/* User Input */}
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="flex gap-4 items-start"
               >
                 <div className="w-8 h-8 rounded-full bg-zinc-800 shrink-0" />
                 <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5 text-sm text-zinc-300">
                   "My project is a SaaS called <span className="text-emerald-400 font-bold">DoctorDoctor</span>. It helps veterinarians manage patient records using AI."
                 </div>
               </motion.div>

               {/* System Action */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.4 }}
                 className="flex justify-center py-4"
               >
                 <div className="flex items-center gap-2 text-emerald-500 text-xs font-mono bg-emerald-500/10 px-3 py-1 rounded-full">
                   <Sparkles size={12} /> EXTRACTING CORE FACTS...
                 </div>
               </motion.div>

               {/* Memory Block */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8 }}
                 className="p-6 rounded-2xl bg-zinc-900 border border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]"
               >
                 <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center gap-2 text-white font-bold text-sm">
                     <Pin size={14} className="text-emerald-500" /> Core Fact Stored
                   </div>
                   <div className="text-[10px] text-zinc-500 font-mono">WORKSPACE_ID: 882-X</div>
                 </div>
                 <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-xs text-zinc-500">Project Name</span>
                      <span className="text-xs text-emerald-400 font-bold">DoctorDoctor</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-xs text-zinc-500">Industry</span>
                      <span className="text-xs text-white">Veterinary SaaS</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-xs text-zinc-500">Core Feature</span>
                      <span className="text-xs text-white">AI Patient Records</span>
                    </div>
                 </div>
               </motion.div>

               <motion.p 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: 1.2 }}
                 className="text-center text-xs text-zinc-600 italic"
               >
                 This context is now available to GPT, Claude, and Gemini automatically.
               </motion.p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-white mb-6">Your workspace <span className="text-emerald-400">remembers.</span></h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Ankoryn doesn't just store chat history. It builds a living knowledge base of your project. 
              It automatically identifies core facts, project goals, and technical constraints.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FileText size={18} />, title: "Summaries", desc: "Auto-generated chat digests" },
                { icon: <Search size={18} />, title: "Semantic Search", desc: "Find anything instantly" },
                { icon: <Pin size={18} />, title: "Pinned Facts", desc: "Core project identity" },
                { icon: <Sparkles size={18} />, title: "Context Injection", desc: "Smart prompt building" }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-900/50 border border-white/5">
                  <div className="text-emerald-500 mb-2">{item.icon}</div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-zinc-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
