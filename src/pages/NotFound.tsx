import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSeo } from '../lib/seo';

/**
 * Replaces the previous catch-all that rendered <Home /> for any unknown URL.
 * That returned the homepage for every mistyped or stale link, which search
 * engines treat as a soft 404 and which gave visitors no signal at all.
 */
export default function NotFound() {
  useSeo({
    title: 'Page not found',
    description: 'The page you are looking for does not exist.',
    path: '/404',
    noindex: true,
  });

  return (
    <section className="relative flex min-h-screen items-center bg-ink-900 pt-28 pb-20">
      <div className="absolute inset-0 -z-10 bg-grid-fade" />
      <div className="container-x max-w-2xl text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 font-display text-5xl font-black text-white md:text-6xl">
          Page <span className="text-gradient">not found</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-white/65">
          The page you are looking for does not exist, or it may have moved. The links below cover
          most of what people come here for.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>
          <a
            href="/#services"
            className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white/85 transition hover:border-white/30 hover:text-white"
          >
            Services
          </a>
          <a
            href="/#contact"
            className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white/85 transition hover:border-white/30 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
