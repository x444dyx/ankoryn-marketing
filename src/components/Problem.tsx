import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareOff, RotateCcw, BrainCircuit } from 'lucide-react';

const problems = [
  {
    icon: <MessageSquareOff className="text-red-400" />,
    title: "Context Amnesia",
    description: "Every new chat is a blank slate. You spend 10 minutes re-explaining your project before the AI can help."
  },
  {
    icon: <RotateCcw className="text-orange-400" />,
    title: "Model Lock-in",
    description: "Switching from GPT to Claude means starting over. Your history and context don't follow you."
  },
  {
    icon: <BrainCircuit className="text-blue-400" />,
    title: "Fragmented Memory",
    description: "Important facts are buried in thousands of messages. There's no single source of truth for your workspace."
  }
];

export default function Problem() {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI tools are built to forget.</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Current AI interfaces treat conversations as isolated events. 
            When the context window fills up or you switch models, your progress resets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
