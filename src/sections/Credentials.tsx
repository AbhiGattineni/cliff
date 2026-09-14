import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

type Diversity = {
  code: string;
  name: string;
  status: 'Certified' | 'In progress';
  highlight?: boolean;
  lead?: string;
  /**
   * Certification mark. Optional on purpose: a credential is certified whether or
   * not the issuer has sent artwork yet, and the card reserves no space when the
   * field is absent. The Disability:IN seal drops in here when it arrives, with
   * no other change to this file.
   */
  logo?: { src: string; alt: string };
};

/**
 * Certification numbers and validity dates are deliberately not published here.
 * They are available to buyers on request, and a date on a page is a date that
 * goes stale without anyone noticing.
 */
const DIVERSITY: Diversity[] = [
  {
    code: 'Disability:IN DOBE',
    name: 'Disability-Owned Business Enterprise',
    status: 'Certified',
    highlight: true,
    lead: "Cliff Services is a certified Disability-Owned Business Enterprise through Disability:IN's International track, the basis of our Certified-Bench-as-a-Service positioning for prime vendors and MSPs.",
  },
  {
    code: 'MSDUK',
    name: 'Minority Supplier Development UK',
    status: 'Certified',
    highlight: true,
    lead: 'Cliff Services holds MSDUK certification, giving us recognized diversity-supplier status in the UK market alongside our Disability:IN DOBE certification in the same entity.',
    logo: { src: '/img/msduk.jpg', alt: 'MSDUK' },
  },
  { code: 'HIPAA', name: 'Health data compliance, BAA-ready for PHI', status: 'In progress' },
];

const READINESS = [
  'US Corporation, Cliff Services Inc., Virginia',
  'E-Verify enrolled, federal employment verification',
  "Workers' compensation & liability insurance (COI on request)",
  'Background check program',
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
            Cliff Services holds diversity-supplier certifications in both the US and UK markets,
            Disability:IN DOBE and MSDUK, giving procurement teams on either side of the Atlantic a
            certified, audit-ready diversity partner rather than a self-declared one.
          </p>
          <p className="mt-4 text-white/65">
            Alongside them we maintain the procurement credentials that enterprise and public-sector
            buyers look for during supplier onboarding.
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
              className={`flex h-full flex-col rounded-2xl border p-6 transition ${
                d.highlight
                  ? 'border-brand-400/50 bg-brand-500/[0.08] ring-1 ring-brand-400/30'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  {d.highlight && (
                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-brand-400/40 bg-brand-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-200">
                      <Star size={12} className="fill-brand-300 text-brand-300" />
                      Flagship credential
                    </span>
                  )}
                  <h3
                    className={`font-display font-bold text-white ${
                      d.highlight ? 'text-2xl md:text-3xl' : 'text-xl'
                    }`}
                  >
                    {d.code}
                  </h3>
                </div>
                {d.status === 'Certified' ? (
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                    Certified
                  </span>
                ) : (
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                    In progress
                  </span>
                )}
              </div>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  d.highlight ? 'text-white/85' : 'text-white/65'
                }`}
              >
                {d.name}
              </p>
              {d.lead && <p className="mt-3 text-sm leading-relaxed text-white/70">{d.lead}</p>}
              {d.logo && (
                <>
                  <div className="flex-1" />
                  {/* The mark is supplied dark-on-white, so it sits on its own white
                      plate rather than on the card. Inverting or knocking out a
                      certification body's logo is not ours to do. */}
                  <div className="mt-5 inline-flex w-fit items-center rounded-xl bg-white px-4 py-2.5">
                    <img src={d.logo.src} alt={d.logo.alt} className="h-6 w-auto" loading="lazy" />
                  </div>
                </>
              )}
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
