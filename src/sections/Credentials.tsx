import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

type Diversity = { code: string; name: string; status: 'Active' | 'In progress' };

const DIVERSITY: Diversity[] = [
  { code: 'Virginia SWaM', name: 'Small, Women & Minority-owned Business', status: 'Active' },
  { code: 'NMSDC MBE', name: 'Minority Business Enterprise', status: 'In progress' },
  { code: 'Disability:IN DOBE', name: 'Disability-Owned Business Enterprise', status: 'In progress' },
];

const READINESS = [
  'US Corporation, Cliff Services Inc. (EIN), Virginia',
  'E-Verify enrolled, federal employment verification',
  "Workers' compensation & liability insurance (COI on request)",
  'Background check program, Sterling / Checkr',
];

const NETWORKS = ['SAP Ariba', 'Beeline', 'Coupa', 'IQNavigator / Workday', 'SAP Fieldglass'];

export default function Credentials() {
  return (
    <section id="credentials" className="relative bg-ink-900 py-24 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Supplier Diversity &amp; Procurement</p>
          <h2 className="mt-4 font-display text-4xl font-black text-white md:text-5xl">
            Ready for <span className="text-gradient">vendor onboarding</span>
          </h2>
          <p className="mt-4 text-white/65">
            Cliff Services maintains the diversity certifications and procurement credentials that
            enterprise and public-sector buyers look for during supplier onboarding.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {DIVERSITY.map((d, i) => (
            <motion.div
              key={d.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="card-dark flex h-full flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-white">{d.code}</h3>
                {d.status === 'Active' ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Active
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                    In progress
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{d.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-brand-400/20 bg-brand-500/[0.06] p-6 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/80">
            The result is a rare combination: a{' '}
            <span className="font-semibold text-white">diverse supplier</span> that also clears
            enterprise security and delivery requirements, diversity value for primes, plus the
            security and maturity floors they require.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card-dark">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
              Procurement readiness
            </p>
            <ul className="mt-4 space-y-3">
              {READINESS.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-white/75">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-dark">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
              Registered on supplier networks
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {NETWORKS.map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80"
                >
                  {n}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Requirements received through your VMS or e-procurement platform can be actioned
              directly. Mutual NDA and MSA available on request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
