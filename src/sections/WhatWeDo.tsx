import { motion } from 'framer-motion';
import { Cpu, FlaskConical, Stethoscope, Users } from 'lucide-react';

const LINES = [
  {
    icon: Cpu,
    title: 'Technology Project Delivery',
    body: 'Outcome-based delivery across data engineering & analytics, cloud, cybersecurity, AI & GenAI, SAP, web technologies, and quality engineering.',
  },
  {
    icon: FlaskConical,
    title: 'Clinical & Life Sciences',
    body: 'SAS clinical programming, clinical data management, biostatistics, and pharmacovigilance for pharma, biotech, and CROs.',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Revenue Cycle Management',
    body: 'RCM, medical coding, and billing operations — HIPAA-aligned and offshore-scalable.',
  },
  {
    icon: Users,
    title: 'Professional Staffing & RPO',
    body: 'IT and professional talent across technology, engineering, clinical & scientific, healthcare operations, finance & accounting, and business support roles.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative bg-ink-900 py-24 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-4 font-display text-4xl font-black text-white md:text-5xl">
            Four service lines, <span className="text-gradient">one delivery engine</span>
          </h2>
          <p className="mt-4 text-white/65">
            Whether you need an outcome delivered, an operation run, or talent placed, every
            engagement runs through the same quality-managed, security-focused global delivery model.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {LINES.map((l, i) => {
            const Ico = l.icon;
            return (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.08, duration: 0.5 }}
                className="card-dark flex h-full flex-col"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300">
                  <Ico size={20} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{l.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
