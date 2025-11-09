import React from 'react';
import { MapPin, Clapperboard } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <MapPin className="h-3.5 w-3.5" />
              Welcome to Derry, Maine
            </div>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
              IT: Welcome to Derry
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-white/80 md:text-lg">
              Step into the eerie charm of Derry — meet the kids who stood together, the adults they
              became, and the ancient evil haunting the town every 27 years. Explore each character and
              their story.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#characters"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <Clapperboard className="h-4 w-4" /> Explore Characters
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                About Derry
              </a>
            </div>
          </div>
          <div>
            <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-rose-500/30 via-fuchsia-500/30 to-indigo-500/30 shadow-inner md:h-96">
              <img
                src="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1600&auto=format&fit=crop"
                alt="Moody foggy street in a small town"
                className="h-full w-full object-cover mix-blend-overlay"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,0,80,0.2),transparent_40%)]" />
              <div className="absolute inset-0" aria-hidden>
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-rose-500/30 blur-3xl" />
                <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-indigo-500/30 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
