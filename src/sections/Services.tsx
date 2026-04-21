import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { services, SERVICE_CATEGORIES } from '../data/services';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const [cat, setCat] = useState<(typeof SERVICE_CATEGORIES)[number]>('All');

  const visible = useMemo(
    () => (cat === 'All' ? services : services.filter((s) => s.category === cat)),
    [cat],
  );

  return (
    <section id="services" className="relative bg-white py-24 text-gray-900">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow !text-brand-600">Our Services</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">
            Innovative Solutions Await
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover our unique blend of services crafted to elevate your business.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm font-semibold text-gray-700">Explore Categories</span>
          {SERVICE_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                cat === c
                  ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md shadow-brand-500/30'
                  : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s, i) => (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/2.6] overflow-hidden bg-gray-100">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                  {s.category}
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.description}</p>
                <Link
                  to={`/services/${s.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Discover More <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
