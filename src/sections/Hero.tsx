import { ArrowRight } from 'lucide-react';

export default function Hero() {
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
            Global IT Solutions &amp; Services · Since 2008
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white md:text-6xl">
            Global Information Technology
            <span className="block text-gradient">Solutions &amp; Services</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            Technology project delivery, clinical and life-sciences services, healthcare revenue
            cycle management, and professional staffing, delivered across six countries through a
            blended global delivery model, since 2008.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="btn-primary">
              Explore Our Services <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Partner With Us
            </a>
          </div>

        </div>

        <div className="relative">
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500/40 to-indigo-500/40 blur-3xl" />
            <div className="relative h-full w-full rounded-[2rem] border border-white/10 bg-white/[0.03] overflow-hidden">
              <img
                src="/img/s1.jpg"
                alt="Cliff Services global delivery"
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/img/s2.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <p className="text-xs uppercase tracking-widest text-brand-300">Global delivery</p>
                <p className="mt-1 text-sm text-white/80">
                  Herndon, Virginia headquarters with delivery teams across six countries and 24×7
                  capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
