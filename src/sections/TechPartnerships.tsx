import { motion } from 'framer-motion';
import { Cloud, Server, BarChart3 } from 'lucide-react';

type Partnership = {
  icon: typeof Cloud;
  program: string;
  track: string;
  /** What client-facing work this partnership actually backs. */
  backs: string;
};

/**
 * Only programs where membership is active and verifiable belong here. Applications
 * that are submitted but not yet approved stay off the site until the vendor confirms,
 * same honesty rule the Certifications section follows.
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
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300">
                  <Ico size={20} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{p.program}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
                  {p.track}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{p.backs}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-white/45">
          Our engineers hold and are actively pursuing certifications across these platforms, with
          delivery teams in the United States, United Kingdom, and India. Additional partner
          programs are currently in review and will be listed once confirmed. Program names and
          trademarks belong to their respective owners.
        </p>
      </div>
    </section>
  );
}
