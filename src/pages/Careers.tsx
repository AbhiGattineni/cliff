import { Mail, MapPin, Briefcase } from 'lucide-react';
import { CONTACT } from '../data/site';

const CAREERS_EMAIL = 'careers@cliff-services.com';

type Job = {
  title: string;
  location: string;
  type: string;
  team: string;
  overview: string;
  responsibilities: string[];
  qualifications: string[];
  niceToHave?: string[];
};

const JOBS = [
  {
    title: 'Senior AI/ML Engineer (Applied AI)',
    location: 'Hyderabad, IN · Remote',
    type: 'Full-time',
    team: 'AI/ML',
    overview:
      'Build and ship applied ML systems for real products—recommendation, forecasting, NLP, and computer vision—with strong evaluation, monitoring, and responsible AI practices.',
    responsibilities: [
      'Design, train, and deploy ML models with measurable offline/online metrics.',
      'Build data/feature pipelines, experiment tracking, and reproducible training workflows.',
      'Implement monitoring for drift, performance regression, and safety constraints.',
      'Partner with product and engineering to define requirements and success criteria.',
    ],
    qualifications: [
      '3+ years of hands-on ML engineering experience with production deployments.',
      'Strong Python skills; experience with model evaluation and metrics.',
      'Solid understanding of supervised learning, embeddings, and basic MLOps practices.',
      'Ability to communicate trade-offs clearly to non-ML stakeholders.',
    ],
    niceToHave: ['Experience with RAG systems and search/retrieval.', 'Experience with time-series forecasting.'],
  },
  {
    title: 'Full-Stack Engineer (React + Node)',
    location: 'Remote · Global',
    type: 'Full-time',
    team: 'Engineering',
    overview:
      'Build modern web experiences and APIs that power our product catalog, customer portals, and internal tooling—fast, accessible, and secure.',
    responsibilities: [
      'Deliver frontend features in React with strong UX and performance.',
      'Build and maintain APIs and integrations; ensure reliability and security.',
      'Write maintainable, tested code and review PRs with a quality mindset.',
      'Collaborate with design to ship polished UI and smooth user journeys.',
    ],
    qualifications: [
      '3+ years building production web apps with React and backend APIs.',
      'Experience with REST, authentication/authorization, and common web security practices.',
      'Strong debugging skills and comfort owning features end-to-end.',
      'Good communication and ability to work in a distributed team.',
    ],
    niceToHave: ['Experience with TypeScript at scale.', 'Experience with CI/CD and cloud deployments.'],
  },
  {
    title: 'Cloud Platform Architect',
    location: 'Herndon, VA · Hybrid',
    type: 'Full-time',
    team: 'Cloud & Platform',
    overview:
      'Design secure, scalable cloud architectures and reference implementations across AWS/Azure/GCP, enabling product teams to move faster with strong guardrails.',
    responsibilities: [
      'Own target architectures, security baselines, and deployment patterns.',
      'Design network segmentation, identity, logging, and monitoring strategies.',
      'Guide teams on scalability, reliability, and cost optimization.',
      'Create technical documentation and architecture reviews for new initiatives.',
    ],
    qualifications: [
      '5+ years in cloud architecture or platform engineering roles.',
      'Deep experience in at least one major cloud provider; familiarity with others is a plus.',
      'Strong knowledge of IAM, networking, observability, and incident response fundamentals.',
      'Experience with infrastructure-as-code and modern deployment practices.',
    ],
    niceToHave: ['Experience with Zero Trust patterns.', 'Experience with compliance-driven environments (SOC2/ISO).'],
  },
  {
    title: 'Cybersecurity Analyst (SOC)',
    location: 'Mississauga, CA · On-site/Hybrid',
    type: 'Full-time',
    team: 'Security',
    overview:
      'Monitor, triage, and investigate security events; help improve detection engineering and incident response readiness across cloud and on-prem environments.',
    responsibilities: [
      'Triage alerts, investigate incidents, and document outcomes clearly.',
      'Improve playbooks, alert quality, and detection coverage.',
      'Coordinate incident response actions with stakeholders.',
      'Support continuous monitoring and evidence collection for audits.',
    ],
    qualifications: [
      '2+ years of SOC or security operations experience.',
      'Familiarity with SIEM concepts, log sources, and common attack patterns.',
      'Comfort with structured incident documentation and escalation procedures.',
      'Strong attention to detail and ability to stay calm under pressure.',
    ],
    niceToHave: ['Experience with cloud security (AWS/Azure/GCP).', 'Scripting skills (Python/Bash).'],
  },
  {
    title: 'Product Designer — AI Hub',
    location: 'Remote · Global',
    type: 'Contract / Full-time',
    team: 'Design',
    overview:
      'Design delightful, accessible product experiences for AI-powered workflows—balancing usability, trust, and clarity in complex systems.',
    responsibilities: [
      'Create user flows, wireframes, and high-fidelity UI designs.',
      'Define interaction patterns for AI-assisted workflows and approvals.',
      'Run lightweight research and iterate based on feedback and data.',
      'Work closely with engineering to ensure quality implementation.',
    ],
    qualifications: [
      'Strong portfolio demonstrating product design for web applications.',
      'Comfort designing complex flows with clear information hierarchy.',
      'Understanding of accessibility and design systems.',
      'Ability to collaborate cross-functionally and communicate decisions.',
    ],
    niceToHave: ['Experience designing AI/agentic workflow UIs.', 'Experience with enterprise admin consoles.'],
  },
  {
    title: 'Data Analyst (Product & Operations)',
    location: 'Remote · Global',
    type: 'Full-time',
    team: 'Data',
    overview:
      'Turn product and operational data into clear insights—dashboards, metrics definitions, and analyses that guide roadmap, growth, and delivery execution.',
    responsibilities: [
      'Define and maintain core metrics (activation, retention, funnel, service levels).',
      'Build dashboards and recurring reporting with clear interpretation.',
      'Run ad-hoc analyses and communicate insights to leadership and teams.',
      'Support experimentation measurement and basic forecasting where needed.',
    ],
    qualifications: [
      '2+ years in analytics; strong SQL and data storytelling skills.',
      'Experience building dashboards and defining KPI frameworks.',
      'Comfort working with ambiguous questions and structuring analysis.',
      'Strong communication and stakeholder management skills.',
    ],
    niceToHave: ['Experience with analytics for SaaS products.', 'Experience with data quality practices.'],
  },
  {
    title: 'SAP S/4HANA Consultant',
    location: 'Melton Mowbray, UK · Hybrid',
    type: 'Full-time',
    team: 'Enterprise Solutions',
    overview:
      'Lead SAP S/4HANA implementations and optimizations across finance, logistics, and operations—driving measurable business outcomes with clean process design.',
    responsibilities: [
      'Run discovery workshops, gather requirements, and define target processes.',
      'Configure and validate SAP modules; support integrations and testing.',
      'Produce functional specs, documentation, and user training materials.',
      'Support go-live planning and hypercare.',
    ],
    qualifications: [
      '3+ years in SAP consulting with S/4HANA exposure.',
      'Strong understanding of business processes and stakeholder alignment.',
      'Experience with testing cycles and cutover/go-live planning.',
      'Excellent documentation and communication skills.',
    ],
    niceToHave: ['Experience with integration patterns (APIs/IDocs).', 'Experience in regulated industries.'],
  },
  {
    title: 'Oracle / ERP Implementation Consultant',
    location: 'USA · Remote/Hybrid',
    type: 'Full-time',
    team: 'Enterprise Solutions',
    overview:
      'Deliver ERP implementations with a focus on finance and operations—requirements, configuration, validation, and user adoption.',
    responsibilities: [
      'Translate business needs into solution design and configuration.',
      'Plan and execute testing, training, and release readiness activities.',
      'Partner with technical teams on integrations and data migrations.',
      'Support change management and stakeholder communications.',
    ],
    qualifications: [
      '3+ years of ERP implementation experience (Oracle or similar).',
      'Strong requirements gathering and documentation skills.',
      'Experience with UAT, training, and rollout planning.',
      'Ability to manage timelines and communicate risks early.',
    ],
    niceToHave: ['Experience with reporting/BI tools.', 'Experience with procurement/logistics modules.'],
  },
  {
    title: 'RCM Coder (AAPC / CPC)',
    location: 'Hyderabad, IN',
    type: 'Full-time',
    team: 'RCM Services',
    overview:
      'Support healthcare revenue cycle management with accurate coding, documentation review, and compliance-aware workflows.',
    responsibilities: [
      'Review clinical documentation and assign accurate codes per guidelines.',
      'Collaborate with billing teams to resolve coding-related issues.',
      'Support audits and maintain compliance and quality benchmarks.',
      'Contribute to process improvements and documentation standards.',
    ],
    qualifications: [
      'AAPC certification (CPC) or equivalent.',
      'Proven experience in medical coding and documentation review.',
      'Strong attention to detail and compliance mindset.',
      'Comfort working with throughput and quality targets.',
    ],
    niceToHave: ['Experience in multiple specialties.', 'Experience with EHR systems and RCM tools.'],
  },
  {
    title: 'Technical Program Manager (Delivery & Ops)',
    location: 'Remote · Global',
    type: 'Full-time',
    team: 'Delivery',
    overview:
      'Drive end-to-end delivery for cross-functional initiatives: planning, execution, risk management, and stakeholder reporting—ensuring on-time, high-quality outcomes.',
    responsibilities: [
      'Own delivery plans, timelines, and dependency management.',
      'Run execution rituals (status, risks, change control) and keep teams aligned.',
      'Track outcomes, quality, and operational metrics; improve delivery processes.',
      'Coordinate releases and ensure clear communication to stakeholders.',
    ],
    qualifications: [
      '3+ years in program/project management for software or IT initiatives.',
      'Strong organization, communication, and stakeholder management skills.',
      'Ability to de-risk complex initiatives with clear planning and escalation.',
      'Comfort working with engineers, product, and design teams.',
    ],
    niceToHave: ['Experience with Agile delivery at scale.', 'Experience with enterprise clients.'],
  },
] satisfies Job[];

function buildApplyMailto(job: Job) {
  const subject = `Application — ${job.title}`;
  const body = [
    `Hello Cliff Services Careers Team,`,
    ``,
    `I would like to apply for the role: ${job.title}`,
    `Location/Type: ${job.location} · ${job.type}`,
    ``,
    `My details:`,
    `- Full name:`,
    `- Phone:`,
    `- Current location/timezone:`,
    `- LinkedIn/GitHub/Portfolio:`,
    ``,
    `Relevant experience summary (please write 4–6 bullet points):`,
    `-`,
    ``,
    `Why I’m a fit for this role:`,
    ``,
    `Resume/CV: (attach to this email)`,
    ``,
    `Thank you,`,
    ``,
  ].join('\n');

  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Careers() {
  return (
    <>
      <section className="relative bg-ink-900 pt-28 pb-16 text-white">
        <div className="absolute inset-0 -z-10 bg-grid-fade" />
        <div className="container-x text-center">
          <p className="eyebrow">Careers</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold md:text-6xl">
            Join Our <span className="text-gradient">Innovation Journey</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Build the future with a team that values creativity and impact.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 text-gray-900">
        <div className="container-x">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold">Open roles</h2>
              <p className="mt-2 text-gray-600">We hire globally across 6 countries.</p>
            </div>
            <a href={`mailto:${CAREERS_EMAIL}`} className="btn-primary">
              <Mail size={16} /> Send a speculative CV
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {JOBS.map((j) => (
              <article
                key={j.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 transition hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">{j.team}</p>
                  <p className="mt-2 font-display text-xl font-bold text-gray-900">{j.title}</p>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1"><MapPin size={14} /> {j.location}</span>
                    <span className="inline-flex items-center gap-1"><Briefcase size={14} /> {j.type}</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-700 leading-relaxed">{j.overview}</p>
                </div>

                <div className="mt-5 grid gap-4 text-sm text-gray-800">
                  <div>
                    <p className="font-semibold text-gray-900">Job description</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                      {j.responsibilities.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Qualifications</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                      {j.qualifications.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>

                  {j.niceToHave && j.niceToHave.length > 0 && (
                    <div>
                      <p className="font-semibold text-gray-900">Nice to have</p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                        {j.niceToHave.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={buildApplyMailto(j)} className="btn-primary">
                    Apply via email
                  </a>
                  <a
                    href={`mailto:${CAREERS_EMAIL}`}
                    className="btn-ghost !text-gray-700 !border-gray-200 !bg-white hover:!bg-gray-50"
                  >
                    Ask a question
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-gradient-to-br from-brand-600 to-indigo-600 p-10 text-center text-white">
            <h3 className="font-display text-2xl font-bold">Ready to Make a Difference?</h3>
            <p className="mt-2 text-white/90">Reach out to explore opportunities with us.</p>
            <a href={`mailto:${CAREERS_EMAIL}`} className="mt-5 inline-flex btn-ghost !text-white">
              {CAREERS_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
