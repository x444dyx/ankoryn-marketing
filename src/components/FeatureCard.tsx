import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, className, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 40px -20px rgba(16, 185, 129, 0.15)",
        borderColor: "rgba(16, 185, 129, 0.3)"
      }}
      className={cn(
        "p-8 rounded-2xl bg-zinc-900/40 border border-white/5 transition-all relative group overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 relative z-10">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed relative z-10">{description}</p>
    </motion.div>
  );
}
