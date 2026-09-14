import { motion } from 'framer-motion';
import { Atom, ShieldCheck, Users, MapPin } from 'lucide-react';

/**
 * A forward-looking strip, deliberately not a navigable service page.
 *
 * The roadmap is real but years out, so every word here stays in
 * "building / roadmap / positioned to serve" terms. The status pill is its own
 * colour rather than the Active/Enrolled/In-review set used for partnerships,
 * because those describe things that exist today and this does not — a buyer
 * skimming pills should not read this as present-day deliverability.
 */
const POINTS = [
  {
    icon: ShieldCheck,
    text: 'Quantum-safe cryptography and NIST post-quantum cryptography (PQC) migration readiness',
  },
  {
    icon: Users,
    text: 'Specialist staffing for quantum research and defense-adjacent programs',
  },
  {
    icon: MapPin,
    text: 'Positioned within our Northern Virginia delivery footprint, close to NIST and DARPA',
  },
];

export default function Quantum() {
  return (
    <section id="quantum" className="relative bg-ink-900 pb-24 lg:pb-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-300">
              Emerging Practice
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-indigo-300">
              Roadmap &middot; active development
            </span>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-300">
              <Atom size={26} />
            </span>

            <div>
              <h2 className="font-display text-3xl font-black text-white md:text-4xl">
                Quantum Computing <span className="text-gradient">Readiness</span>
              </h2>
              <p className="mt-4 max-w-3xl text-white/70">
                Cliff Services is building a dedicated quantum computing practice, positioned to
                serve the defense, federal, and research ecosystem anchored in Northern Virginia,
                home to NIST, DARPA, and a dense concentration of cleared federal contractors. Our
                roadmap focuses on quantum-safe cryptography migration, algorithm development
                support, and specialist talent placement for organizations preparing for the
                post-quantum transition.
              </p>

              <ul className="mt-8 grid gap-4 md:grid-cols-3">
                {POINTS.map((p) => {
                  const Ico = p.icon;
                  return (
                    <li
                      key={p.text}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm leading-relaxed text-white/75"
                    >
                      <Ico size={16} className="mt-0.5 shrink-0 text-brand-300" />
                      <span>{p.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
