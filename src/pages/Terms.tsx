import React from 'react';
import { motion } from 'motion/react';
import { FileText, Scale, AlertCircle, Info } from 'lucide-react';

export default function Terms() {
  return (
    <main className="bg-black text-white selection:bg-emerald-500/30 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 text-emerald-500 mb-6">
            <FileText size={24} />
            <span className="text-sm font-bold uppercase tracking-widest">Terms of Service</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
            Terms of Use
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-16">
            By using Ankoryn, you agree to these terms. Ankoryn is a product created by AyTee Labs.
          </p>

          <div className="space-y-16">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Scale className="text-emerald-500" /> 1. Service "As-Is"
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Ankoryn is provided on an "as-is" and "as-available" basis. AyTee Labs makes no warranties, expressed or implied, regarding the reliability, accuracy, or availability of the service. We do not guarantee 100% uptime or the absence of bugs.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <AlertCircle className="text-blue-500" /> 2. API Usage & Responsibility
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Users are solely responsible for the API keys they provide and any costs incurred through third-party AI providers (OpenAI, Anthropic, etc.). Ankoryn is a workspace layer and does not control the billing or usage limits of these providers.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Info className="text-purple-500" /> 3. Compliance
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Users must comply with the terms of service of any third-party AI providers they connect to Ankoryn. Any misuse of AI models or violation of provider terms is the sole responsibility of the user.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Scale className="text-orange-500" /> 4. Ownership
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Ankoryn is a proprietary tool created by AyTee Labs. Users retain full ownership of their workspace data and conversation history, which are stored locally on their own devices.
              </p>
            </section>

            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5">
              <p className="text-sm text-zinc-500 italic">
                Last updated: March 11, 2026. Created by AyTee Labs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
