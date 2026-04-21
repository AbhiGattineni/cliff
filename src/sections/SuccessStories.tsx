import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/site';

export default function SuccessStories() {
  return (
    <section id="success-stories" className="relative border-t border-white/10 bg-ink-900 py-24 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Product success stories</p>
          <h2 className="mt-4 font-display text-4xl font-black text-white md:text-5xl">
            Reviews from <span className="text-gradient">product rollouts</span>
          </h2>
          <p className="mt-4 text-white/65">
            Real feedback on our catalog—alongside how teams combine{' '}
            <span className="text-white/85">consulting</span>,{' '}
            <span className="text-white/85">staffing</span>, and{' '}
            <span className="text-white/85">services</span> to implement, staff, and run what we
            ship.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.productSlug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-dark flex h-full flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
                    Product review
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">
                    <Link
                      to={`/products/${t.productSlug}`}
                      className="hover:text-brand-300 focus-visible:rounded focus-visible:outline-none"
                    >
                      {t.productName}
                    </Link>
                  </h3>
                </div>
                <div className="flex shrink-0 gap-0.5" aria-label="5 out of 5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-amber-400/90 text-amber-400/90"
                      aria-hidden
                    />
                  ))}
                </div>
              </div>

              <Quote className="mt-4 h-7 w-7 text-brand-400/70" aria-hidden />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-white/80">
                “{t.quote}”
              </blockquote>

              <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-xs leading-relaxed text-white/60">
                <span className="font-semibold text-white/80">How Cliff supported this: </span>
                {t.engagement}
              </p>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{t.attribution}</p>
                <p className="mt-0.5 text-xs text-white/50">{t.role}</p>
                <Link
                  to={`/products/${t.productSlug}`}
                  className="mt-3 inline-block text-sm font-medium text-brand-300 hover:text-brand-200"
                >
                  View product details →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-white/45">
          Organization names are generalized where engagements are confidential. We can share
          relevant context under NDA.
        </p>
      </div>
    </section>
  );
}
