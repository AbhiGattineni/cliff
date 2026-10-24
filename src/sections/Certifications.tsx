import { motion } from 'framer-motion';
import { Award, ShieldCheck, Lock, HeartPulse, BadgeCheck } from 'lucide-react';

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
  /** Awarded, or still being pursued. Drives which group the card renders in. */
  status: 'Certified' | 'In progress';
};

/**
 * Certifications are being formally pursued, the copy intentionally frames these
 * as "in progress / built to standard", not as awarded. Keep this honest.
 * CMMI Level 5 is deliberately omitted here (roadmap item, not in-progress).
 *
 * Status lives on each entry and drives grouping below. Awarded certifications
 * render in their own group above the ones still in progress, so completed work
 * reads as complete instead of every card carrying an identical amber pill.
 */
const CERTS: Cert[] = [
  {
    icon: Award,
    code: 'CMMI Level 3',
    name: 'Development & Services',
    plain: 'A standardized delivery playbook, we can own project outcomes, not just supply people.',
    status: 'In progress',
    scope:
      'Planning, design, development, testing, and delivery of software and IT solutions and services, data engineering, cloud, AI, SAP, and web development, with associated IT staffing, quality engineering, and RCM services.',
  },
  {
    icon: BadgeCheck,
    code: 'ISO 9001:2015',
    name: 'Quality Management System',
    plain: 'Documented, repeatable delivery processes, audited, not just intended.',
    status: 'In progress',
    scope:
      'Provision of technology project delivery, data engineering and analytics, cloud, cybersecurity, AI, SAP, web development, and quality engineering, with clinical data management, healthcare RCM, IT and professional staffing, and RPO.',
  },
  {
    icon: Lock,
    code: 'ISO/IEC 27001:2022',
    name: 'Information Security Management',
    plain: 'A formal security system protecting client and candidate data across US–India delivery.',
    status: 'In progress',
    scope:
      'Information security governing technology project delivery, cloud and cybersecurity, clinical data management, healthcare RCM, and IT and professional staffing, covering the confidentiality, integrity, and availability of client, personal, and protected health information.',
  },
  {
    icon: ShieldCheck,
    code: 'SOC 2 Type II',
    name: 'Trust Services Criteria',
    plain: 'Security controls independently verified by a CPA firm over 6–12 months.',
    status: 'In progress',
    scope:
      'Design and operating effectiveness of Security, Availability, and Confidentiality controls for IT managed services, cloud and data engineering, clinical data management, and healthcare RCM.',
    tag: 'Report under NDA',
  },
  {
    icon: HeartPulse,
    code: 'HIPAA',
    name: 'Protected Health Information',
    plain: 'Cleared to handle US health data, BAA-ready for PHI.',
    status: 'In progress',
    scope:
      'Handling, processing, and safeguarding of Protected Health Information (PHI) in healthcare RCM, medical coding and billing, and clinical data management, per the HIPAA Privacy, Security, and Breach Notification Rules.',
    tag: 'BAA-ready',
  },
];

function CertCard({ c, i }: { c: Cert; i: number }) {
  const Ico = c.icon;
  return (
    <motion.div
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
        {c.status === 'Certified' && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
            Certified
          </span>
        )}
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-white">{c.code}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-300">{c.name}</p>
      <p className="mt-3 text-sm font-medium leading-relaxed text-white/90">{c.plain}</p>
      <p className="mt-3 text-xs leading-relaxed text-white/55">{c.scope}</p>
      {c.tag && (
        <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
          {c.tag}
        </span>
      )}
    </motion.div>
  );
}

export default function Certifications() {
  const certified = CERTS.filter((c) => c.status === 'Certified');
  const inProgress = CERTS.filter((c) => c.status === 'In progress');

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
            cloud, cybersecurity, AI, SAP, mainframe modernization, web, and quality engineering; clinical data management;
            healthcare RCM; and IT and professional staffing. Our delivery processes are built to
            internationally recognized quality, security, and process-maturity frameworks, formal
            certification against the standards below is currently{' '}
            <span className="text-white/90">in progress</span>.
          </p>
        </div>

        {certified.length > 0 && (
          <div className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
              Certified
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certified.map((c, i) => (
                <CertCard key={c.code} c={c} i={i} />
              ))}
            </div>
          </div>
        )}

        {inProgress.length > 0 && (
          <div className="mt-14">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
                Certification in progress
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                {inProgress.length} in progress
              </span>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {inProgress.map((c, i) => (
                <CertCard key={c.code} c={c} i={i} />
              ))}
            </div>
          </div>
        )}

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-white/45">
          Certification scopes reflect the standards Cliff Services is actively pursuing. Current
          status and supporting documentation can be shared with clients and partners on request.
        </p>
      </div>
    </section>
  );
}
