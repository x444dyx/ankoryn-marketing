import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Create Workspace",
    description: "Define your project, upload docs, or just start typing. Ankoryn builds your initial context."
  },
  {
    number: "02",
    title: "Chat Normally",
    description: "Interact with the AI as you always do. Our memory engine works silently in the background."
  },
  {
    number: "03",
    title: "Switch Freely",
    description: "Need a different perspective? Switch models instantly. The new AI knows exactly where you are."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-black" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Simple flow. Complex intelligence.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            We've removed the friction of AI context management so you can focus on building.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent -z-10" />
          
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto mb-8 text-2xl font-bold text-emerald-500 shadow-xl">
                {s.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
