import React from 'react';
import { motion } from 'motion/react';
import { HardDrive, Repeat, ListTree, Key, Box, Zap } from 'lucide-react';

const features = [
  {
    icon: <HardDrive className="w-6 h-6 text-emerald-400" />,
    title: "Persistent Workspace",
    description: "Your project context, files, and core facts stay pinned forever. No more re-explaining."
  },
  {
    icon: <Repeat className="w-6 h-6 text-blue-400" />,
    title: "Model Switching",
    description: "Start with GPT-4 for logic, switch to Claude for creative writing, then Gemini for long context."
  },
  {
    icon: <ListTree className="w-6 h-6 text-purple-400" />,
    title: "Structured Memory",
    description: "Ankoryn automatically extracts semantic summaries and core facts from your chats."
  },
  {
    icon: <Key className="w-6 h-6 text-orange-400" />,
    title: "Local-first Keys",
    description: "Your API keys never leave your device. Workspace data is stored locally for maximum privacy."
  },
  {
    icon: <Box className="w-6 h-6 text-pink-400" />,
    title: "Bring Your Own Models",
    description: "Connect to OpenAI, Anthropic, Google, or your local Ollama instance with ease."
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Context Engine",
    description: "Advanced RAG and semantic search ensure the AI always has the right info at the right time."
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-zinc-950" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for the AI-native workflow.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Stop treating AI as a chatbot. Start treating it as an operating system for your ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px -20px rgba(16, 185, 129, 0.1)",
                borderColor: "rgba(255,255,255,0.15)"
              }}
              className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 transition-all relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 relative z-10">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{f.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed relative z-10">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
