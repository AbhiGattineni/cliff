import { useEffect, useState } from 'react';
import { ROTATING_HEADINGS } from '../data/site';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING_HEADINGS.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-ink-900 pt-24"
    >
      {/* background fx */}
      <div className="absolute inset-0 -z-10 bg-grid-fade" />
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 -right-10 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div className="container-x grid min-h-[calc(100vh-6rem)] items-center gap-10 py-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Since 2008 · Global technology consulting
          </div>

          <p className="mt-6 eyebrow">Beyond Human Cognition</p>

          <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl">
            <motion.span
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="block text-gradient"
            >
              {ROTATING_HEADINGS[idx]}
            </motion.span>
            <span className="block">Innovation</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            Pioneering intelligent solutions that adapt, learn, and evolve beyond conventional
            systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="btn-primary">
              Discover Innovations <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Talk to an expert
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs uppercase tracking-widest text-white/50">
            <span className="inline-flex h-px w-10 bg-white/20" />
            Scroll <ChevronDown size={14} className="animate-bounce" />
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500/40 to-indigo-500/40 blur-3xl" />
            <div className="relative h-full w-full rounded-[2rem] border border-white/10 bg-white/[0.03] overflow-hidden">
              <img
                src="/img/s1.jpg"
                alt="AI innovation"
                className="h-full w-full object-cover animate-float"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/img/s2.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <p className="text-xs uppercase tracking-widest text-brand-300">Now live</p>
                <p className="mt-1 text-sm text-white/80">
                  Enterprise-grade AI copilots with secure retrieval and governed tooling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
