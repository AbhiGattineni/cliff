import { Link } from 'react-router-dom';
import { Cpu, FlaskConical, Stethoscope, Users } from 'lucide-react';
import { services } from '../data/services';

// The four service lines, and the capabilities under them.
//
// The capability list used to be its own section: fifteen cards with a
// category filter above them, which is a lot of machinery for what is really a
// list of links. It is folded in here instead, because "what we do" and "the
// things we do it with" are one question, and because those fifteen detail
// pages have no other way in.

const LINES = [
  {
    icon: Cpu,
    title: 'Technology project delivery',
    body: 'Data engineering and analytics, cloud, cybersecurity, AI and GenAI, SAP, mainframe modernization, web, and quality engineering.',
  },
  {
    icon: FlaskConical,
    title: 'Clinical & life sciences',
    body: 'SAS clinical programming, clinical data management, biostatistics and pharmacovigilance for pharma, biotech and CROs.',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare revenue cycle',
    body: 'Revenue cycle management, medical coding and billing operations, HIPAA-aligned and globally scalable.',
  },
  {
    icon: Users,
    title: 'Professional staffing & RPO',
    body: 'Technology, engineering, clinical and scientific, healthcare operations, finance and business support roles.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 sm:py-24">
      <div className="container-x">
        <h2 className="h-section">What we do</h2>
        <p className="lede mt-4 max-w-2xl">
          Four service lines, one delivery model. Whether you need an outcome delivered, an
          operation run, or talent placed, the same teams and the same controls stand behind it.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {LINES.map((l) => {
            const Icon = l.icon;
            return (
              <div key={l.title} className="card">
                <Icon size={20} className="text-brand-600 dark:text-brand-300" />
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {l.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {l.body}
                </p>
              </div>
            );
          })}
        </div>

        <div id="services" className="mt-14 border-t border-slate-200 pt-10 dark:border-white/10">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Capabilities
          </h3>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group inline-flex items-baseline gap-2 text-sm text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
                >
                  <span className="underline-offset-4 group-hover:underline">{s.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
