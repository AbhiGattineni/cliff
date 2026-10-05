import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// A hero that says who we are and what we do, and then gets out of the way.
//
// What it replaces: a full-viewport dark panel with a grid overlay, two
// animated blur orbs, a pulsing status dot and a gradient-filled headline.
// None of that told anyone what the company does, and all of it had to be
// scrolled past before anything did.

export default function Hero() {
  return (
    <section id="home" className="border-b border-slate-200 pt-28 pb-16 sm:pt-32 sm:pb-24 dark:border-white/10">
      <div className="container-x">
        <p className="eyebrow">Global IT solutions &amp; services · Since 2008</p>

        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
          Technology, clinical and staffing services, delivered across six countries.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Cliff Services delivers technology projects, clinical and life-sciences work, healthcare
          revenue cycle management and professional staffing — through one global delivery model.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn-primary">
            Talk to us <ArrowRight size={16} />
          </a>
          <a href="#what-we-do" className="btn-ghost">
            What we do
          </a>
          <Link
            to="/careers"
            className="px-2 text-sm font-semibold text-slate-600 underline-offset-4 transition hover:text-brand-600 hover:underline dark:text-slate-400 dark:hover:text-brand-300"
          >
            Careers
          </Link>
        </div>
      </div>
    </section>
  );
}
