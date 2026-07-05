import { motion } from 'framer-motion';
import { Award, ShieldCheck, Lock, FileCheck2, HeartPulse, BadgeCheck } from 'lucide-react';

type Cert = {
  icon: typeof Award;
  code: string;
  name: string;
  /** Customer-friendly, plain-language "what this means for you". */
  plain: string;
  /** Official certificate scope (aligned to certification-scope document). */
  scope: string;
  /** Optional procurement signal buyers scan for. */
  tag?: string;
};

/**
 * Certifications are being formally pursued, the copy intentionally frames these
 * as "in progress / built to standard", not as awarded. Keep this honest.
 * CMMI Level 5 is deliberately omitted here (roadmap item, not in-progress).
 */
const CERTS: Cert[] = [
  {
    icon: Award,
    code: 'CMMI Level 3',
    name: 'Development & Services',
    plain: 'A standardized delivery playbook, we can own project outcomes, not just supply people.',
    scope:
      'Planning, design, development, testing, and delivery of software and IT solutions and services, data engineering, cloud, AI, SAP, and web development, with associated IT staffing, quality engineering, and RCM services.',
  },
  {
    icon: BadgeCheck,
    code: 'ISO 9001:2015',
    name: 'Quality Management System',
    plain: 'Documented, repeatable delivery processes, audited, not just intended.',
    scope:
      'Provision of technology project delivery, data engineering and analytics, cloud, cybersecurity, AI, SAP, web development, and quality engineering, with clinical data management, healthcare RCM, IT and professional staffing, and RPO.',
  },
  {
    icon: Lock,
    code: 'ISO/IEC 27001:2022',
    name: 'Information Security Management',
    plain: 'A formal security system protecting client and candidate data across US–India delivery.',
    scope:
      'Information security governing technology project delivery, cloud and cybersecurity, clinical data management, healthcare RCM, and IT and professional staffing, covering the confidentiality, integrity, and availability of client, personal, and protected health information.',
  },
  {
    icon: ShieldCheck,
    code: 'SOC 2 Type II',
    name: 'Trust Services Criteria',
    plain: 'Security controls independently verified by a CPA firm over 6–12 months.',
    scope:
      'Design and operating effectiveness of Security, Availability, and Confidentiality controls for IT managed services, cloud and data engineering, clinical data management, and healthcare RCM.',
    tag: 'Report under NDA',
  },
  {
    icon: FileCheck2,
    code: 'SOC 3',
    name: 'Public Assurance Report',
    plain: 'The public, shareable summary of our SOC 2, no NDA required.',
    scope:
      'General-use report on Security, Availability, and Confidentiality controls for IT managed services, cloud and data engineering, clinical data management, and healthcare RCM.',
    tag: 'Public report',
  },
  {
    icon: HeartPulse,
    code: 'HIPAA',
    name: 'Protected Health Information',
    plain: 'Cleared to handle US health data, BAA-ready for PHI.',
    scope:
      'Handling, processing, and safeguarding of Protected Health Information (PHI) in healthcare RCM, medical coding and billing, and clinical data management, per the HIPAA Privacy, Security, and Breach Notification Rules.',
    tag: 'BAA-ready',
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative border-y border-white/10 bg-ink-900 py-24 lg:py-28"
    >
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Certifications &amp; Compliance</p>
          <h2 className="mt-4 font-display text-4xl font-black text-white md:text-5xl">
            Built to <span className="text-gradient">enterprise-grade standards</span>
          </h2>
          <p className="mt-4 text-white/65">
            Cliff Services delivers software and technology project delivery across data engineering,
            cloud, cybersecurity, AI, SAP, web, and quality engineering; clinical data management;
            healthcare RCM; and IT and professional staffing. Our delivery processes are built to
            internationally recognized quality, security, and process-maturity frameworks, formal
            certification against the standards below is currently{' '}
            <span className="text-white/90">in progress</span>.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c, i) => {
            const Ico = c.icon;
            return (
              <motion.div
                key={c.code}
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
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                    In progress
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{c.code}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
                  {c.name}
                </p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-white/90">{c.plain}</p>
                <p className="mt-3 text-xs leading-relaxed text-white/55">{c.scope}</p>
                {c.tag && (
                  <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                    {c.tag}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-white/45">
          Certification scopes reflect the standards Cliff Services is actively pursuing. Current
          status and supporting documentation can be shared with clients and partners on request.
        </p>
      </div>
    </section>
  );
}
