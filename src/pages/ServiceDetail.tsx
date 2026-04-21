import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import { useState } from 'react';

const TABS = ['Overview', 'What We Do', 'Challenges & Solutions', 'Our Differentiators', 'Our Approaches'] as const;

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [tab, setTab] = useState<(typeof TABS)[number]>('Overview');

  if (!service) return <Navigate to="/#services" replace />;

  const content: Record<(typeof TABS)[number], React.ReactNode> = {
    Overview: <p className="text-gray-700 leading-relaxed">{service.overview}</p>,
    'What We Do': (
      <ul className="grid gap-3 sm:grid-cols-2">
        {service.whatWeDo.map((x) => (
          <li key={x} className="flex items-start gap-2 rounded-xl border border-gray-100 bg-white p-4">
            <CheckCircle2 className="mt-0.5 text-brand-600" size={18} /> <span>{x}</span>
          </li>
        ))}
      </ul>
    ),
    'Challenges & Solutions': (
      <ul className="space-y-3">
        {service.challenges.map((x) => (
          <li key={x} className="rounded-xl border border-gray-100 bg-white p-4 text-gray-700">
            <span className="mr-2 text-brand-600">▸</span>{x}
          </li>
        ))}
      </ul>
    ),
    'Our Differentiators': (
      <ul className="grid gap-3 sm:grid-cols-2">
        {service.differentiators.map((x) => (
          <li key={x} className="rounded-xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-4 text-gray-800">
            {x}
          </li>
        ))}
      </ul>
    ),
    'Our Approaches': (
      <ol className="relative space-y-4 border-l border-gray-200 pl-6">
        {service.approach.map((x, i) => (
          <li key={x} className="relative">
            <span className="absolute -left-[29px] top-1 grid h-6 w-6 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
              {i + 1}
            </span>
            <p className="text-gray-700">{x}</p>
          </li>
        ))}
      </ol>
    ),
  };

  return (
    <>
      <section className="relative bg-ink-900 pt-28 pb-10 text-white">
        <div className="absolute inset-0 -z-10 bg-grid-fade" />
        <div className="container-x">
          <Link to="/#services" className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white">
            <ArrowLeft size={14} /> Back to Services
          </Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
            <div>
              <p className="eyebrow">Our Services</p>
              <h1 className="mt-3 font-display text-4xl font-extrabold text-gradient md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-xl text-white/70">{service.tagline}. {service.description}</p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-gray-900">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  tab === t
                    ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow'
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-gray-50 p-6 md:p-10">
            <h2 className="font-display text-2xl font-bold">{tab}</h2>
            <div className="mt-4">{content[tab]}</div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                    {s.category}
                  </p>
                  <p className="mt-2 font-bold">{s.title}</p>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-brand-600 group-hover:text-brand-700">
                    Read more <ChevronRight size={14} />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
