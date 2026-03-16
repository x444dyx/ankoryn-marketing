import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 flex items-center justify-center">
              <img src="/logo.png" alt="Ankoryn Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg font-bold text-white">Ankoryn</span>
          </Link>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
            The AI Workspace OS for developers. Persistent context across every model, local or cloud.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://x.com/ankoryn" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 text-sm">About</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link to="/roadmap" className="hover:text-white transition-colors">Roadmap</Link></li>
            <li><a href="https://ayteelabs.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">AyTee Labs <ExternalLink size={12} /></a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 text-sm">Resources</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><Link to="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 text-sm">Legal</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-600 text-xs">
          © {new Date().getFullYear()} Ankoryn. All rights reserved.
        </p>
        <p className="text-zinc-600 text-xs">
          Created by <a href="https://ayteelabs.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors">AyTee Labs</a>
        </p>
      </div>
    </footer>
  );
}
