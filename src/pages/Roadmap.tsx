import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  ChevronRight, 
  Milestone,
  Shield,
  Eye,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface RoadmapItemProps {
  status: 'completed' | 'in-progress' | 'planned';
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  delay?: number;
}

function RoadmapCard({ status, title, description, items, icon, delay = 0 }: RoadmapItemProps) {
  const statusConfig = {
    completed: {
      label: 'Completed',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      icon: <CheckCircle2 size={14} />
    },
    'in-progress': {
      label: 'In Progress',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      icon: <Clock size={14} className="animate-spin-slow" />
    },
    planned: {
      label: 'Planned',
      color: 'text-zinc-500',
      bg: 'bg-zinc-500/10',
      border: 'border-zinc-500/20',
      icon: <Circle size={14} />
    }
  };

  const config = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.1)' }}
      className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 transition-all relative group"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className={cn("flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", config.bg, config.color, config.border, "border")}>
          {config.icon} {config.label}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-xs text-zinc-500">
            <div className={cn("mt-1 w-1.5 h-1.5 rounded-full shrink-0", status === 'completed' ? 'bg-emerald-500' : 'bg-zinc-700')} />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Roadmap() {
  return (
    <main className="bg-black text-white selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Ankoryn <span className="text-zinc-500 italic">Roadmap</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Ankoryn is evolving into a persistent AI workspace layer. 
              This roadmap outlines what has already been built and what is coming next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Grid */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Completed */}
            <RoadmapCard 
              status="completed"
              icon={<Milestone />}
              title="Core Workspace Engine"
              description="The foundation of Ankoryn is built. We have successfully decoupled memory from inference."
              items={[
                "Multi-model switching (GPT, Claude, Gemini)",
                "Persistent workspace memory",
                "Conversation summaries",
                "Semantic memory retrieval",
                "Pinned core facts",
                "Ollama local model support"
              ]}
              delay={0.1}
            />

            {/* In Progress */}
            <RoadmapCard 
              status="in-progress"
              icon={<Shield />}
              title="Stabilisation"
              description="Focusing on making the memory system more reliable, consistent, and performant."
              items={[
                "Token-aware memory trimming",
                "Memory injection safeguards",
                "Improved memory ranking",
                "Model health checks"
              ]}
              delay={0.2}
            />

            {/* Planned */}
            <RoadmapCard 
              status="planned"
              icon={<Cpu />}
              title="Deterministic Memory"
              description="Evolving toward a more structured and predictable memory management system."
              items={[
                "Improved core fact management",
                "Workspace identity persistence",
                "Better control over pinned facts",
                "Transparent memory behaviour"
              ]}
              delay={0.3}
            />

            <RoadmapCard 
              status="planned"
              icon={<Eye />}
              title="Transparency Layer"
              description="Visibility improvements so you understand exactly why the AI knows what it knows."
              items={[
                "Workspace summary viewer",
                "Memory inspection panel",
                "Prompt injection visibility",
                "Context audit logs"
              ]}
              delay={0.4}
            />

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              The future of AI is <br />
              <span className="text-blue-400">persistent workspaces.</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Ankoryn is building a layer where conversations, context, and projects survive model changes.
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
