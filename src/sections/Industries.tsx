import { motion } from 'framer-motion';
import { Landmark, HeartPulse, Zap, RadioTower, Factory, ShoppingBag, Building2 } from 'lucide-react';

const INDUSTRIES = [
  {
    icon: Landmark,
    name: 'Banking, Financial Services & Insurance',
    body: 'Secure data, cloud, and delivery for BFSI, backed by information-security controls.',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare & Life Sciences',
    body: 'HIPAA-aligned RCM, clinical data management, and health platforms.',
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    body: 'SAP and data engineering for utilities and energy operations.',
  },
  {
    icon: RadioTower,
    name: 'Telecommunications',
    body: 'Cloud, data, and quality engineering for telecom networks and platforms.',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    body: 'SAP, analytics, and automation across the manufacturing value chain.',
  },
  {
    icon: ShoppingBag,
    name: 'Retail',
    body: 'Commerce platforms, data, and AI for retail and consumer brands.',
  },
  {
    icon: Building2,
    name: 'Public Sector',
    body: 'Compliant, secure delivery for government and public-sector programs.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative bg-ink-900 py-24 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Industries</p>
          <h2 className="mt-4 font-display text-4xl font-black text-white md:text-5xl">
            Industries we <span className="text-gradient">serve</span>
          </h2>
          <p className="mt-4 text-white/65">
            We deliver software, data, security, and specialist talent to clients across regulated
            and enterprise sectors worldwide.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => {
            const Ico = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                className="card-dark flex h-full flex-col"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300">
                  <Ico size={20} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{ind.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
