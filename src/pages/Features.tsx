import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Brain, 
  Pin, 
  Search, 
  Layers, 
  ShieldCheck, 
  ChevronRight, 
  Database,
  RefreshCw,
  Sparkles,
  Zap
} from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <main className="bg-black text-white selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Features that make AI <br />
              <span className="text-emerald-400">workspaces persistent.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Ankoryn separates workspace memory from AI models so conversations and project context 
              persist across GPT, Claude, Gemini, Mistral and local models.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Feature: Model Switching */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
              <RefreshCw className="text-emerald-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Model Switching Without Context Loss</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              The core innovation of Ankoryn is the decoupling of intelligence from memory. 
              Switch between models inside the same conversation without the AI "forgetting" what you were talking about.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/5">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center text-[8px] font-bold text-black">GPT</div>
                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-black flex items-center justify-center text-[8px] font-bold text-black">CLD</div>
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-black flex items-center justify-center text-[8px] font-bold text-black">GEM</div>
              </div>
              <span className="text-sm text-zinc-500">Context remains intact across transitions.</span>
            </div>
          </motion.div>
          <div className="relative p-8 rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm">
             <div className="space-y-4">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">CURRENT_MODEL</span>
                  <span className="text-xs font-mono text-emerald-400">GPT-4o</span>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="h-full w-1/3 bg-emerald-500/50" 
                  />
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">MEMORY_SYNC</span>
                  <span className="text-xs font-mono text-blue-400">SYNCHRONIZED</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Core Feature: Persistent Memory */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="p-6 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-6 text-zinc-400 text-xs font-mono">
                <Database size={14} /> WORKSPACE_MEMORY_DUMP
              </div>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[10px] text-emerald-500 mb-1 font-bold uppercase">Semantic Summary</div>
                  <p className="text-xs text-zinc-400">User is building a Rust-based CLI tool for cloud orchestration.</p>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[10px] text-blue-500 mb-1 font-bold uppercase">Pinned Fact</div>
                  <p className="text-xs text-zinc-400">Target cloud: AWS. Preferred SDK: aws-sdk-rust.</p>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[10px] text-purple-500 mb-1 font-bold uppercase">Conversation History</div>
                  <p className="text-xs text-zinc-400">Last discussed: IAM policy generation for S3 buckets.</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
              <Brain className="text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Persistent Workspace Memory</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Ankoryn automatically builds a structured memory of your project. 
              It extracts semantic summaries, maintains conversation history, and tracks core facts so you never have to repeat yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Feature: Fact Pinning */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
              <Pin className="text-purple-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Fact Pinning</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Manually pin critical project details that the AI should always remember. 
              Project goals, technical constraints, and naming conventions are injected into every prompt.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {["Project Name", "Tech Stack", "Architecture", "Constraints"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-900 p-3 rounded-lg border border-white/5">
                  <Sparkles size={14} className="text-purple-400" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-purple-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <Pin size={16} className="text-purple-500" />
              </div>
              <h4 className="text-white font-bold mb-2">Project Constraint</h4>
              <p className="text-zinc-400 text-sm italic">"All backend services must be written in Go and follow the Clean Architecture pattern."</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-emerald-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <Pin size={16} className="text-emerald-500" />
              </div>
              <h4 className="text-white font-bold mb-2">Naming Convention</h4>
              <p className="text-zinc-400 text-sm italic">"Use camelCase for JSON keys and PascalCase for Go structs."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Feature: Intelligent Retrieval */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 mx-auto">
            <Search className="text-orange-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Memory Retrieval</h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Ankoryn uses semantic similarity to retrieve only the most relevant context for your current query. 
            This keeps prompts efficient while ensuring the AI has the "big picture."
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
           <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 relative">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <div className="w-2 h-2 rounded-full bg-orange-500" /> Semantic Ranking Engine
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex justify-between items-center">
                    <span className="text-sm text-white font-medium">Pinned Facts</span>
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Priority 1</span>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex justify-between items-center">
                    <span className="text-sm text-white font-medium">Recent Context</span>
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Priority 2</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-800 border border-white/5 flex justify-between items-center opacity-50">
                    <span className="text-sm text-zinc-400 font-medium">Relevant Memories</span>
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Priority 3</span>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Core Feature: BYO Models */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-xl bg-zinc-500/10 flex items-center justify-center mb-6">
              <Layers className="text-zinc-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bring Your Own Models</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Ankoryn is a workspace layer, not an AI provider. Connect your own API keys for OpenAI, Anthropic, Google, Mistral, or run local models via Ollama.
            </p>
            <div className="flex flex-wrap gap-3">
              {["OpenAI", "Claude", "Gemini", "Mistral", "Ollama"].map((m, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-xs font-bold text-zinc-300">
                  {m}
                </span>
              ))}
            </div>
          </motion.div>
          <div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
               <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default">
                 <span className="font-bold text-xs">OpenAI</span>
               </div>
               <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default">
                 <span className="font-bold text-xs">Anthropic</span>
               </div>
               <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default">
                 <span className="font-bold text-xs">Google</span>
               </div>
               <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default">
                 <span className="font-bold text-xs">Ollama</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Feature: Workspace Isolation */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-1 gap-4">
             <div className="p-4 rounded-xl bg-zinc-900 border border-emerald-500/20 flex items-center gap-4">
               <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">S</div>
               <div>
                 <div className="text-sm font-bold text-white">Startup Project</div>
                 <div className="text-[10px] text-zinc-500">24 Pinned Facts • 1.2k Memories</div>
               </div>
             </div>
             <div className="p-4 rounded-xl bg-zinc-900 border border-blue-500/20 flex items-center gap-4">
               <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">R</div>
               <div>
                 <div className="text-sm font-bold text-white">Research Project</div>
                 <div className="text-[10px] text-zinc-500">12 Pinned Facts • 450 Memories</div>
               </div>
             </div>
             <div className="p-4 rounded-xl bg-zinc-900 border border-purple-500/20 flex items-center gap-4">
               <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold">T</div>
               <div>
                 <div className="text-sm font-bold text-white">Trading Strategy</div>
                 <div className="text-[10px] text-zinc-500">8 Pinned Facts • 89 Memories</div>
               </div>
             </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
              <ShieldCheck className="text-emerald-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Workspace Isolation</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Maintain separate contexts for every project. Memories, facts, and history are strictly isolated between workspaces, ensuring no cross-contamination of ideas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<RefreshCw className="text-emerald-400" />}
              title="Model Switching"
              description="Switch between GPT, Claude, and Gemini mid-conversation without context loss."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Brain className="text-blue-400" />}
              title="Persistent Memory"
              description="Workspace memory persists independently of the AI model being used."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Pin className="text-purple-400" />}
              title="Core Fact Pinning"
              description="Pin critical project details that are always included in the AI context."
              delay={0.3}
            />
            <FeatureCard 
              icon={<Search className="text-orange-400" />}
              title="Semantic Retrieval"
              description="Intelligently retrieve the most relevant memories for every prompt."
              delay={0.4}
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-emerald-400" />}
              title="Workspace Isolation"
              description="Keep projects separate with isolated memory and context for each workspace."
              delay={0.5}
            />
            <FeatureCard 
              icon={<Cpu className="text-zinc-400" />}
              title="Local Model Support"
              description="Connect to Ollama to run local models while keeping context in Ankoryn."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Stop restarting AI conversations.
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Build workspaces that remember your projects. 
              Experience the future of persistent AI intelligence.
            </p>
            <Link to="/" className="inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform gap-2">
              Start Workspace <ChevronRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
