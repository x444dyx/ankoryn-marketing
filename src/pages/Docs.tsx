import React from 'react';
import { motion } from 'motion/react';
import { 
  Book, 
  Cpu, 
  Brain, 
  RefreshCw, 
  Database, 
  ShieldCheck, 
  Zap, 
  Pin,
  Terminal,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function Docs() {
  return (
    <main className="bg-black text-white selection:bg-emerald-500/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-emerald-500 mb-6">
              <Book size={24} />
              <span className="text-sm font-bold uppercase tracking-widest">Documentation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
              How Ankoryn Works
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Ankoryn is an AI Workspace OS designed to decouple intelligence from memory. 
              This technical guide explains our architecture, memory engine, and local-first philosophy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* What is Ankoryn */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Layers className="text-emerald-500" /> What is Ankoryn?
            </h2>
            <div className="prose prose-invert max-w-none text-zinc-400 space-y-4">
              <p>
                Ankoryn is an <strong>AI Workspace OS</strong>. Unlike traditional AI interfaces where the model owns the conversation context, Ankoryn places the <strong>Workspace</strong> at the center of the architecture.
              </p>
              <p>
                It separates <strong>Workspace Memory</strong> from <strong>AI Models</strong>. This allows you to switch between different models inside the same conversation without losing context.
              </p>
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">Supported Models</h4>
                  <ul className="text-xs space-y-2">
                    <li>• OpenAI (GPT-4o, o1)</li>
                    <li>• Anthropic (Claude 3.5 Sonnet)</li>
                    <li>• Google (Gemini 1.5 Pro)</li>
                    <li>• Mistral Large</li>
                    <li>• Ollama (Local Models)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-sm">BYO Keys</h4>
                  <p className="text-xs">
                    Ankoryn does not host models. Users bring their own API keys, ensuring direct communication with providers and full control over usage costs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Concept */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <RefreshCw className="text-blue-500" /> Core Concept: Model Agnostic Context
            </h2>
            <div className="prose prose-invert max-w-none text-zinc-400 space-y-4">
              <p>
                In most AI tools, the model is the "brain" and the "memory." When you switch models, the memory is lost.
              </p>
              <p className="text-white font-medium">
                In Ankoryn, the Workspace is the brain. The models are just inference engines.
              </p>
              <p>
                This means a conversation can continue seamlessly even when switching providers:
              </p>
              <div className="flex items-center gap-4 text-xs font-mono py-4 overflow-x-auto">
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded">GPT-4o</div>
                <ChevronRight size={14} className="text-zinc-700 shrink-0" />
                <div className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded">Claude 3.5</div>
                <ChevronRight size={14} className="text-zinc-700 shrink-0" />
                <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded">Gemini 1.5</div>
                <span className="text-zinc-600 whitespace-nowrap">Context Preserved</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Start */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Zap className="text-yellow-500" /> Quick Start
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { step: "01", title: "Create Workspace", desc: "Initialize a new project context." },
                { step: "02", title: "Select Provider", desc: "Connect your API key or local Ollama." },
                { step: "03", title: "Chat Normally", desc: "Ankoryn builds memory as you talk." },
                { step: "04", title: "Switch Anytime", desc: "Change models mid-flow with one click." }
              ].map((s, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-900/30 border border-white/5">
                  <div className="text-emerald-500 font-bold text-xs mb-1">{s.step}</div>
                  <h4 className="text-white font-bold text-sm mb-1">{s.title}</h4>
                  <p className="text-zinc-500 text-xs">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Workspace System */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Database className="text-purple-500" /> The Workspace System
            </h2>
            <div className="prose prose-invert max-w-none text-zinc-400 space-y-4">
              <p>
                Each workspace is an isolated environment with its own:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Conversation History</strong>: Full logs of all interactions.</li>
                <li><strong>Semantic Memory</strong>: Vector-indexed snippets of important information.</li>
                <li><strong>Summaries</strong>: Periodically generated digests of the project state.</li>
                <li><strong>Core Facts</strong>: Explicitly pinned project constraints and goals.</li>
              </ul>
              <p>
                This allows you to maintain multiple contexts—like a "Startup Project" and a "Trading Strategy"—without any cross-contamination of data.
              </p>
            </div>
          </motion.div>

          {/* Memory Engine */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Brain className="text-emerald-500" /> The Memory Engine
            </h2>
            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Terminal size={16} className="text-emerald-500" /> Semantic Memory
                </h4>
                <p className="text-sm text-zinc-400">
                  Ankoryn embeds important messages and stores them in a local vector database. When you ask a question, the system performs a similarity search to retrieve the most relevant historical context.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <RefreshCw size={16} className="text-blue-500" /> Workspace Summary
                </h4>
                <p className="text-sm text-zinc-400">
                  To handle long-running projects, Ankoryn periodically generates a compressed summary of the workspace. This ensures the AI always understands the "big picture" without hitting token limits.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Pin size={16} className="text-purple-500" /> Core Facts
                </h4>
                <p className="text-sm text-zinc-400">
                  Users can manually pin critical facts (e.g., "Project uses Rust", "Target audience is developers"). These facts are prioritised and always injected into the model's context window.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Local First */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20"
          >
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <ShieldCheck className="text-emerald-500" /> Local-First Design
            </h2>
            <div className="prose prose-invert max-w-none text-zinc-400 space-y-4">
              <p>
                Privacy is not a feature; it is the foundation. Ankoryn is built with a local-first philosophy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Local Storage</strong>: All workspace data and conversation history are stored on your device.</li>
                <li><strong>Local Keys</strong>: Your API keys are stored locally on your device.</li>
                <li><strong>Direct Communication</strong>: Ankoryn does not proxy your requests. You communicate directly with AI providers.</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
