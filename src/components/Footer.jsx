import React from 'react';
import { Film, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-black/40">
      <div className="mx-auto max-w-7xl px-6 py-10 text-white/70">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-white/80">
            <Film className="h-5 w-5" />
            <span className="text-sm">IT: Welcome to Derry</span>
          </div>
          <p className="text-xs">Fan-made tribute site for educational/demo purposes.</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> Source
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
