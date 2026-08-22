import { motion } from 'framer-motion';
import { Cloud, Server, BarChart3, Layers, Snowflake } from 'lucide-react';

type Partnership = {
  icon: typeof Cloud;
  program: string;
  track: string;
  /** What client-facing work this partnership actually backs. */
  backs: string;
};

type PendingPartnership = {
  program: string;
  track: string;
};

/**
 * Active memberships only, these are confirmed by the vendor and can be stated as fact.
 * When a program in PENDING is approved, move it up here with an icon and a `backs` line.
 */
const PARTNERSHIPS: Partnership[] = [
  {
    icon: Cloud,
    program: 'AWS Partner Network',
    track: 'Services Path',
    backs: 'Cloud migration and data engineering delivery on AWS.',
  },
  {
    icon: Server,
    program: 'IBM Partner Plus',
    track: 'Registered partner',
    backs: 'Our mainframe modernization practice, from IBM Z environments to hybrid cloud.',
  },
  {
    icon: BarChart3,
    program: 'Google Cloud Partner Advantage',
    track: 'Services track',
    backs: 'Data engineering and analytics delivery on Google Cloud.',
  },
  {
    icon: Layers,
    program: 'Databricks Partner Program',
    track: 'Consulting & Systems Integrator',
    backs: 'Lakehouse migrations and data engineering delivery on Databricks.',
  },
  {
    icon: Snowflake,
    program: 'Snowflake Partner Network',
    track: 'AI Data Cloud Services',
    backs: 'Snowflake implementation and data platform services.',
  },
];

/**
 * Submitted applications awaiting vendor approval. Deliberately labelled "In review",
 * these are not memberships yet and must not be described as such.
 */
const PENDING: PendingPartnership[] = [
  { program: 'Red Hat Partner Program', track: 'Partner Connect' },
  { program: 'CrowdStrike Partner Program', track: 'Solution provider' },
  { program: 'SAS Partner Program', track: 'Services partner' },
];

export default function TechPartnerships() {
  return (
    <section id="partnerships" className="relative bg-ink-900 py-24 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Technology Partnerships</p>
          <h2 className="mt-4 font-display text-4xl font-black text-white md:text-5xl">
            Partnerships that <span className="text-gradient">back our delivery</span>
          </h2>
          <p className="mt-4 text-white/65">
            Cliff Services builds and modernizes data platforms for clients in banking, healthcare,
            life sciences, and utilities. We invest in formal technology partnerships so our
            consultants train, certify, and deliver with direct vendor support behind them.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PARTNERSHIPS.map((p, i) => {
            const Ico = p.icon;
            return (
              <motion.div
                key={p.program}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                className="card-dark flex h-full flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300">
                    <Ico size={20} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                    Active
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{p.program}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
                  {p.track}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{p.backs}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
            Applications in review
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PENDING.map((p) => (
              <div
                key={p.program}
                className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-white/90">{p.program}</p>
                  <p className="mt-0.5 text-xs text-white/55">{p.track}</p>
                </div>
                <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  In review
                </span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Programs marked in review are submitted applications awaiting vendor approval, they are
            not active memberships. This section is updated as each approval is confirmed.
          </p>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-white/45">
          Our engineers hold and are actively pursuing certifications across these platforms, with
          delivery teams in the United States, United Kingdom, and India. Program names and
          trademarks belong to their respective owners.
        </p>
      </div>
    </section>
  );
}
