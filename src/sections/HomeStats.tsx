import { motion } from 'framer-motion';
import { HOMEPAGE_STATS } from '../data/site';

export default function HomeStats() {
  return (
    <section
      aria-label="Company highlights"
      className="relative border-y border-white/10 bg-ink-900/95"
    >
      <div className="container-x py-10 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HOMEPAGE_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className={`text-center lg:text-left ${
                i < HOMEPAGE_STATS.length - 1 ? 'lg:border-r lg:border-white/10 lg:pr-10' : ''
              }`}
            >
              <p className="font-display text-4xl font-black tracking-tight text-white md:text-5xl">
                <span className="text-gradient">{stat.value}</span>
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                {stat.label}
              </p>
              <p className="mt-2 text-sm text-white/55">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
