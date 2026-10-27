import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, FlaskConical, Stethoscope, Users, type LucideIcon } from 'lucide-react';
import { services } from '../data/services';

// Four equal cards in a 2x2 grid. Each card carries its own capability
// links, so every service detail page has a way in.

type Line = {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
  // slugs from ../data/services that belong to this line
  slugs: string[];
};

const LINES: Line[] = [
  {
    num: '01',
    icon: Cpu,
    title: 'Technology project delivery',
    body: 'Data engineering and analytics, cloud, cybersecurity, AI and GenAI, SAP, mainframe modernization, web, and quality engineering.',
    slugs: [
      'AI-ML-Solutions',
      'Cloud-Technologies',
      'Cyber-Security',
      'Business-Intelligence',
      'SAP-Solutions',
      'Oracle',
      'Mainframe-Modernization',
      'Web-Development',
      'QA-Services',
    ],
  },
  {
    num: '02',
    icon: FlaskConical,
    title: 'Clinical and life sciences',
    body: 'SAS clinical programming, clinical data management, biostatistics and pharmacovigilance for pharma, biotech and CROs.',
    slugs: ['SAS-CDM'],
  },
  {
    num: '03',
    icon: Stethoscope,
    title: 'Healthcare revenue cycle',
    body: 'Revenue cycle management, medical coding and billing operations, HIPAA-aligned and globally scalable.',
    slugs: ['RCMServices', 'Healthcare'],
  },
  {
    num: '04',
    icon: Users,
    title: 'Professional staffing and RPO',
    body: 'Technology, engineering, clinical and scientific, healthcare operations, finance and business support roles.',
    slugs: ['Workforce-Management', 'PMC', 'GSI'],
  },
];

const bySlug = new Map(services.map((s) => [s.slug, s]));
const assigned = new Set(LINES.flatMap((l) => l.slugs));
// Any capability not listed above still shows, in a row under the grid.
const unassigned = services.filter((s) => !assigned.has(s.slug));

function Chip({ slug, title }: { slug: string; title: string }) {
  return (
    <Link
      to={`/services/${slug}`}
      className="inline-flex min-h-[36px] items-center rounded-full border border-white/15 px-3.5 text-[13px] text-slate-200 transition hover:border-gold-400 hover:text-gold-400"
    >
      {title}
    </Link>
  );
}

function ServiceCard({ line }: { line: Line }) {
  const Icon = line.icon;
  const chips = line.slugs.map((s) => bySlug.get(s)).filter(Boolean) as typeof services;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-400/70 sm:p-9">
      {/* Big faint number */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-5 font-display text-6xl font-bold leading-none text-gold-400/15 sm:text-7xl"
      >
        {line.num}
      </span>

      {/* Icon */}
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/10 text-gold-400">
        <Icon size={26} strokeWidth={1.8} />
      </span>

      {/* Title + description */}
      <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-white">
        {line.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-300">{line.body}</p>

      {/* Capability chips */}
      {chips.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map((s) => (
            <Chip key={s.slug} slug={s.slug} title={s.title} />
          ))}
        </div>
      )}

      {/* Link — pushed to the bottom so all four cards line up */}
      <a
        href="#contact"
        className="mt-auto inline-flex items-center gap-2 pt-7 text-[15px] font-semibold text-gold-400 transition hover:text-white"
      >
        Talk to us about this
        <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </a>
    </article>
  );
}

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="band-navy band-lift py-20 sm:py-24">
      <div className="container-x">
        {/* Heading left, intro right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow-on-navy">What we do</p>
            <h2 className="h-section-on-navy mt-4">Four service lines, one delivery engine</h2>
          </div>
          <p className="lede-on-navy max-w-md">
            Whether you need an outcome delivered, an operation run, or talent placed, the same
            teams and the same controls stand behind it.
          </p>
        </div>

        {/* 2 x 2 grid of equal cards */}
        <div id="services" className="mt-14 grid auto-rows-fr gap-5 md:grid-cols-2">
          {LINES.map((line) => (
            <ServiceCard key={line.num} line={line} />
          ))}
        </div>

        {unassigned.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm font-semibold text-slate-400">More capabilities</span>
            {unassigned.map((s) => (
              <Chip key={s.slug} slug={s.slug} title={s.title} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}