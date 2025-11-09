import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

const AboutDerry = () => {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white/80">
              <BookOpen className="h-5 w-5" />
              <h3 className="text-lg font-semibold">About the Town</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Derry, Maine is a quaint New England town with a terrifying mystery. Every 27 years,
              a cycle of disappearances and tragedies sweeps through, leaving scars on the people who
              live there. The Losers Club confronts this evil in their youth and again as adults,
              facing their fears and rediscovering their bond.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-5 w-5" />
              <h3 className="text-lg font-semibold">27-Year Cycle</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              The evil haunting Derry awakens roughly every 27 years, feeding on fear before returning
              to hibernation. Those who leave often forget, while those who remain remember too much.
              When the cycle returns, so must the courage to face it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDerry;
