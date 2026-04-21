export type Service = {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  overview: string;
  whatWeDo: string[];
  challenges: string[];
  differentiators: string[];
  approach: string[];
};

export const SERVICE_CATEGORIES = [
  'All',
  'Quality Assurance',
  'Technology',
  'Security',
  'Health',
  'Analytics',
  'Development',
  'Database',
  'Enterprise',
  'Management',
  'Integration',
] as const;

export const services: Service[] = [
  {
    slug: 'QA-Services',
    category: 'Quality Assurance',
    title: 'QA Services',
    tagline: 'Raising the bar for software quality',
    description:
      'Comprehensive software quality assurance services to ensure your applications meet the highest standards.',
    image: '/img/s1.jpg',
    overview:
      'We deliver end-to-end quality engineering — from test strategy and automation to performance, security, and accessibility testing — so your releases ship with confidence.',
    whatWeDo: [
      'Manual and automated functional testing',
      'Performance, load and stress testing',
      'Security and penetration testing',
      'Accessibility (WCAG) compliance audits',
    ],
    challenges: [
      'Flaky test suites slowing delivery',
      'Limited coverage across platforms',
      'Post-release regressions',
    ],
    differentiators: [
      'Shift-left QA baked into CI/CD',
      'Dedicated test architects per engagement',
      'Real device cloud + AI test generation',
    ],
    approach: [
      'Discovery & risk-based test plan',
      'Framework selection and automation',
      'Continuous execution and reporting',
      'Defect triage and release sign-off',
    ],
  },
  {
    slug: 'AI-ML-Solutions',
    category: 'Technology',
    title: 'AI/ML Solutions',
    tagline: 'Beyond human cognition',
    description:
      'We provide cutting-edge AI and Machine Learning solutions to optimize your business operations.',
    image: '/img/s2.jpg',
    overview:
      'Navigating the transformative world of AI/ML for a decade, we have been at the epicenter of its evolution, from foundational algorithms to today’s cutting-edge neural networks.',
    whatWeDo: [
      'Predictive analytics and forecasting',
      'Computer vision and NLP models',
      'Generative AI copilots and agents',
      'MLOps and responsible AI governance',
    ],
    challenges: [
      'Data quality and model drift',
      'Scaling from PoC to production',
      'Regulatory and ethical considerations',
    ],
    differentiators: [
      'Deep expertise across model lifecycles',
      'Industry-specific accelerators',
      'Transparent, auditable pipelines',
    ],
    approach: [
      'Use-case and feasibility assessment',
      'Data readiness and prototyping',
      'Model development and evaluation',
      'Production deployment and monitoring',
    ],
  },
  {
    slug: 'Cyber-Security',
    category: 'Security',
    title: 'Cyber Security',
    tagline: 'Fortify every layer',
    description:
      'Secure your data with state-of-the-art cybersecurity solutions and proactive risk assessment.',
    image: '/img/s3.jpg',
    overview:
      'From zero-trust architectures to 24/7 managed detection, our security practice helps you anticipate, withstand, and recover from modern threats.',
    whatWeDo: [
      'Threat modeling and risk assessments',
      'Identity and access management',
      'Cloud security posture management',
      'Incident response and forensics',
    ],
    challenges: [
      'Expanding attack surface',
      'Compliance across jurisdictions',
      'Talent shortage for 24/7 coverage',
    ],
    differentiators: [
      'Certified red & blue team specialists',
      'SOC-as-a-service with follow-the-sun',
      'Framework-aligned (NIST, ISO, SOC2)',
    ],
    approach: [
      'Maturity assessment',
      'Controls design and deployment',
      'Continuous monitoring',
      'Simulated attack exercises',
    ],
  },
  {
    slug: 'Healthcare',
    category: 'Health',
    title: 'Healthcare',
    tagline: 'Healthier outcomes through technology',
    description:
      'Innovative healthcare solutions to enhance patient care and streamline operations.',
    image: '/img/s4.jpg',
    overview:
      'We partner with providers, payers and life-science innovators to modernize care delivery, unlock data, and improve outcomes — securely and at scale.',
    whatWeDo: [
      'EHR integration and interoperability',
      'Telehealth and remote monitoring',
      'Clinical analytics and BI',
      'HIPAA-grade cloud platforms',
    ],
    challenges: [
      'Fragmented patient data',
      'Regulatory complexity',
      'Legacy system modernization',
    ],
    differentiators: [
      'Clinician-led product thinking',
      'HL7/FHIR accelerators',
      'Privacy-by-design architecture',
    ],
    approach: [
      'Clinical workflow discovery',
      'Secure data exchange design',
      'Pilot and evaluation',
      'Scale, measure, improve',
    ],
  },
  {
    slug: 'Business-Intelligence',
    category: 'Analytics',
    title: 'Business Intelligence',
    tagline: 'From data to decisions',
    description:
      'Transform raw data into actionable insights with our BI solutions.',
    image: '/img/s5.jpg',
    overview:
      'We turn sprawling datasets into clear, real-time decision surfaces — modern lakehouses, governed semantic layers and beautiful self-serve dashboards.',
    whatWeDo: [
      'Data warehouse and lakehouse design',
      'ETL/ELT pipelines',
      'Self-service analytics',
      'Executive KPI dashboards',
    ],
    challenges: [
      'Siloed, inconsistent metrics',
      'Slow time-to-insight',
      'Scaling governance',
    ],
    differentiators: [
      'Metric-first semantic modeling',
      'Tool-agnostic (Snowflake, BQ, Databricks)',
      'Built-in data quality checks',
    ],
    approach: [
      'KPI and data audit',
      'Platform selection',
      'Delivery in vertical slices',
      'Enablement and adoption',
    ],
  },
  {
    slug: 'Cloud-Technologies',
    category: 'Technology',
    title: 'Cloud Technologies',
    tagline: 'Elastic, secure, unstoppable',
    description:
      'Scalable and secure cloud solutions to accelerate digital transformation.',
    image: '/img/s6.jpg',
    overview:
      'We architect and operate cloud platforms on AWS, Azure and GCP — from green-field landing zones to complex mainframe migrations — with cost and security as first principles.',
    whatWeDo: [
      'Cloud strategy and landing zones',
      'Migration and modernization',
      'Kubernetes and platform engineering',
      'FinOps and cost optimization',
    ],
    challenges: [
      'Runaway cloud spend',
      'Multi-cloud complexity',
      'Lift-and-shift technical debt',
    ],
    differentiators: [
      'Certified architects across 3 clouds',
      'IaC accelerators',
      'SRE-style operating model',
    ],
    approach: [
      'Current state assessment',
      'Target architecture',
      'Migration waves',
      'Optimize and operate',
    ],
  },
  {
    slug: 'Web-Development',
    category: 'Development',
    title: 'Web Development',
    tagline: 'Experiences that move the business',
    description:
      'Custom web applications and responsive websites tailored to your needs.',
    image: '/img/s7.jpg',
    overview:
      'Beautifully crafted, performance-obsessed web apps — built with React, Next.js and edge platforms — that look great, ship fast and convert.',
    whatWeDo: [
      'Design systems and UI engineering',
      'SSR/SSG web applications',
      'Headless CMS integrations',
      'Core Web Vitals optimization',
    ],
    challenges: [
      'Slow, bloated front-ends',
      'Design & engineering misalignment',
      'SEO and accessibility gaps',
    ],
    differentiators: [
      'Product-grade engineering culture',
      'Reusable component libraries',
      'Edge-first architecture',
    ],
    approach: [
      'Discovery & UX audit',
      'Rapid prototyping',
      'Iterative delivery',
      'Measure, learn, iterate',
    ],
  },
  {
    slug: 'Oracle',
    category: 'Database',
    title: 'Oracle',
    tagline: 'Mission-critical data, modernized',
    description:
      'Comprehensive Oracle solutions for database management and enterprise applications.',
    image: '/img/s8.jpg',
    overview:
      'Our certified Oracle specialists help you extract more value from your Oracle estate — databases, EBS, Fusion and beyond — while reducing TCO.',
    whatWeDo: [
      'Database administration and tuning',
      'Oracle Cloud migrations',
      'EBS/Fusion implementations',
      '24/7 managed support',
    ],
    challenges: [
      'Legacy upgrade risk',
      'High licensing costs',
      'Skills scarcity',
    ],
    differentiators: [
      'Oracle ACE-level expertise',
      'Fixed-price upgrade paths',
      'Hybrid delivery model',
    ],
    approach: [
      'Estate discovery',
      'Risk and license assessment',
      'Phased modernization',
      'Ongoing optimization',
    ],
  },
  {
    slug: 'SAP-Solutions',
    category: 'Enterprise',
    title: 'SAP Solutions',
    tagline: 'Run better on S/4HANA',
    description:
      'SAP implementation and support services to enhance business efficiency.',
    image: '/img/s9.jpg',
    overview:
      'End-to-end SAP advisory and delivery — greenfield, brownfield and selective data migration — accelerating your move to S/4HANA.',
    whatWeDo: [
      'S/4HANA implementations',
      'SAP BTP extensions',
      'Application managed services',
      'Integration with non-SAP estate',
    ],
    challenges: [
      'Heavy customization debt',
      'Change management at scale',
      'Integration complexity',
    ],
    differentiators: [
      'Accelerators for 12+ industries',
      'Activate methodology',
      'Global delivery with onshore leads',
    ],
    approach: [
      'Business case and roadmap',
      'Explore and realize',
      'Deploy and stabilize',
      'Run and innovate',
    ],
  },
  {
    slug: 'SAS-CDM',
    category: 'Health',
    title: 'SAS CDM',
    tagline: 'Clinical data you can trust',
    description:
      'SAS Clinical Data Management solutions to streamline clinical trials and research.',
    image: '/img/s10.jpg',
    overview:
      'We help sponsors and CROs deliver high-quality, regulator-ready clinical data — from EDC setup through database lock — using SAS and modern standards.',
    whatWeDo: [
      'EDC design and build',
      'SDTM/ADaM standards mapping',
      'Data review and reconciliation',
      'Submission-ready deliverables',
    ],
    challenges: [
      'Evolving protocol amendments',
      'Cross-system reconciliation',
      'Tight submission deadlines',
    ],
    differentiators: [
      '21 CFR Part 11 compliant processes',
      'CDISC specialists',
      'Risk-based data review',
    ],
    approach: [
      'Protocol intake',
      'Build and validate',
      'Conduct and cleaning',
      'Lock and deliver',
    ],
  },
  {
    slug: 'PMC',
    category: 'Management',
    title: 'PMC',
    tagline: 'Delivery leadership that delivers',
    description:
      'Project Management Consultancy services to drive business success.',
    image: '/img/s11.jpg',
    overview:
      'Experienced PMOs, program directors and agile coaches who parachute into complex programs and leave behind healthier delivery organizations.',
    whatWeDo: [
      'Program and portfolio management',
      'PMO setup and operation',
      'Agile transformation coaching',
      'Vendor and risk management',
    ],
    challenges: [
      'Programs off track on cost or time',
      'Weak executive visibility',
      'Culture misaligned to agile',
    ],
    differentiators: [
      'Hands-on delivery, not slideware',
      'Outcome-based engagement models',
      'Certified PgMP/SAFe coaches',
    ],
    approach: [
      'Health check',
      'Recovery or setup',
      'Embed and coach',
      'Handover and measure',
    ],
  },
  {
    slug: 'Workforce-Management',
    category: 'Management',
    title: 'Workforce Management',
    tagline: 'The right talent at the right time',
    description:
      'End-to-end workforce management solutions to optimize human resources.',
    image: '/img/s12.jpg',
    overview:
      'Technology-enabled workforce solutions — permanent, contract and managed services — powered by AI matching and 15+ years of specialist sourcing.',
    whatWeDo: [
      'Talent acquisition and RPO',
      'Contingent workforce programs',
      'Workforce planning analytics',
      'Employer branding',
    ],
    challenges: [
      'Time-to-hire pressure',
      'Skills shortages in niche areas',
      'Unpredictable contractor spend',
    ],
    differentiators: [
      'AI-powered candidate matching',
      'Global sourcing footprint',
      'Retention analytics built-in',
    ],
    approach: [
      'Demand planning',
      'Pipeline building',
      'Placement and onboarding',
      'Retention and review',
    ],
  },
  {
    slug: 'GSI',
    category: 'Integration',
    title: 'GSI',
    tagline: 'Seamless at any scale',
    description:
      'Global System Integrator solutions for seamless digital transformation.',
    image: '/img/s13.jpg',
    overview:
      'Enterprise-grade systems integration across ERP, CRM, HCM and bespoke platforms — connected via modern event and API backbones.',
    whatWeDo: [
      'Integration architecture',
      'API and event platforms',
      'Iceberg/lake integrations',
      'Legacy connector development',
    ],
    challenges: [
      'Point-to-point spaghetti',
      'Slow partner onboarding',
      'Real-time data needs',
    ],
    differentiators: [
      'Reusable integration patterns',
      'Event-driven by default',
      'Observability-first',
    ],
    approach: [
      'Integration audit',
      'Reference architecture',
      'Pattern-led delivery',
      'Operate and evolve',
    ],
  },
  {
    slug: 'RCMServices',
    category: 'Health',
    title: 'RCM Services',
    tagline: 'Revenue, recovered',
    description:
      'Innovative RCM solutions to streamline financial processes and maximize revenue.',
    image: '/img/s14.jpg',
    overview:
      'End-to-end Revenue Cycle Management — from eligibility and coding through denials and analytics — helping providers capture every dollar earned.',
    whatWeDo: [
      'Patient access and eligibility',
      'Medical coding and auditing',
      'Claims and denial management',
      'RCM analytics and reporting',
    ],
    challenges: [
      'Rising denial rates',
      'Coding accuracy and compliance',
      'Staff burnout',
    ],
    differentiators: [
      'Certified coders (AAPC/AHIMA)',
      'AI-assisted denial prediction',
      'HIPAA-compliant offshore delivery',
    ],
    approach: [
      'Revenue leakage audit',
      'Process redesign',
      'Technology-enabled operations',
      'Continuous analytics',
    ],
  },
];
