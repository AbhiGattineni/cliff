import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, FlaskConical, Stethoscope, Users } from 'lucide-react';
import { services } from '../data/services';

// The four service lines on navy, lifting over the section above on a large
// radius, which is the join the reference uses between its bands.
//
// The capability list used to be its own section, fifteen cards behind a
// category filter, which is a lot of machinery for a list of links. It is
// folded in here because "what we do" and "the things we do it with" are one
// question, and because those fifteen detail pages have no other way in.

const LINES = [
  {
    icon: Cpu,
    title: 'Technology project delivery',
    body: 'Data engineering and analytics, cloud, cybersecurity, AI and GenAI, SAP, mainframe modernization, web, and quality engineering.',
  },
  {
    icon: FlaskConical,
    title: 'Clinical and life sciences',
    body: 'SAS clinical programming, clinical data management, biostatistics and pharmacovigilance for pharma, biotech and CROs.',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare revenue cycle',
    body: 'Revenue cycle management, medical coding and billing operations, HIPAA-aligned and globally scalable.',
  },
  {
    icon: Users,
    title: 'Professional staffing and RPO',
    body: 'Technology, engineering, clinical and scientific, healthcare operations, finance and business support roles.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="band-navy band-lift py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-on-navy">What we do</p>
          <h2 className="h-section-on-navy mt-4">Four service lines, one delivery engine</h2>
          <p className="lede-on-navy mt-5">
            Whether you need an outcome delivered, an operation run, or talent placed, the same
            teams and the same controls stand behind it.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {LINES.map((l) => {
            const Icon = l.icon;
            return (
              <div key={l.title} className="card-navy">
                <Icon size={24} className="text-gold-400" />
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{l.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{l.body}</p>
              </div>
            );
          })}
        </div>

        <div id="services" className="mt-16 border-t border-white/10 pt-12">
          <p className="eyebrow-on-navy text-center">Capabilities</p>
          <ul className="mx-auto mt-7 grid max-w-4xl gap-x-10 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group inline-flex items-center gap-1.5 text-sm text-slate-300 transition hover:text-gold-400"
                >
                  <span className="underline-offset-4 group-hover:underline">{s.title}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:opacity-100"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
