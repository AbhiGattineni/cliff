export const LOCATIONS = [
  {
    country: 'United States',
    city: 'Herndon, VA',
    address: '13873, Park Center Road, Suite 181, Herndon, VA 20171',
    flag: 'US',
  },
  {
    country: 'United Kingdom',
    city: 'Melton Mowbray',
    address:
      'Pera Business Park, Nottingham Road, Melton Mowbray, Leicestershire LE13 0PB',
    flag: 'UK',
  },
  {
    country: 'Canada',
    city: 'Mississauga, ON',
    address: '4 Robert Speck Parkway, Suite 1500, Mississauga, ON L4Z 1S1',
    flag: 'CA',
  },
  {
    country: 'India',
    city: 'Hyderabad, Telangana',
    address:
      'Spacion Business Center, Hitec City, Hyderabad, Telangana, 500081 - IN',
    flag: 'IN',
  },
  {
    country: 'Australia',
    city: 'Williams Landing, Victoria',
    address: '12 Spoonbill Cl, Williams Landing, Victoria, 3027',
    flag: 'AU',
  },
  {
    country: 'Ireland',
    city: 'Dublin',
    address:
      'Unit C4, Nutgrove Office Park Dundrum, Dublin 12, Ireland, D14W6K3',
    flag: 'IE',
  },
];

export const PRODUCTS = [
  {
    id: '01',
    slug: 'online-learning-platform',
    name: 'Online Learning Platform',
    blurb: 'A complete LMS for students and teachers.',
    image: '/img/product1.jpg',
    compatibility: 'Cross-platform',
    release: 'March 2025',
    license: 'Enterprise',
    tags: ['Cloud-based', 'AI-powered', '24/7 Support'],
    docs: {
      paperWriting:
        '## Research framing\n\nLearning Management Systems (LMS) exist to **deliver structured learning experiences** while producing **auditable evidence** of completion and performance. In practice, successful LMS deployments balance three competing goals:\n\n- **Pedagogy and UX** (learner engagement, accessibility, instructor workflows)\n- **Interoperability** (content and tool standards so institutions aren’t locked to a single vendor)\n- **Governance** (identity, data access, reporting, and long-term maintainability)\n\nThis product is positioned as a **cloud-based, cross‑platform LMS** aimed at students, teachers, and administrators, and should be specified with a standards-first approach.\n\n## Interoperability standards (why it matters)\n\nA research-backed LMS specification typically includes support for key eLearning interoperability standards:\n\n- **SCORM**: widely used for packaging content and basic tracking (completion/score/time). It’s still common in compliance and procurement contexts.\n- **xAPI (Experience API)**: enables richer event capture beyond the LMS runtime through a Learning Record Store (LRS) pattern.\n- **LTI**: enables secure external tool integration (e.g., assessments, simulations) without bespoke SSO and grade passback for every tool.\n\nDesigning around these standards reduces migration risk and supports enterprise integration patterns.\n\n## Architecture and data flows (cloud-based)\n\nA reference architecture for a cloud LMS typically describes:\n\n- **Identity and access**: SSO, roles (learner/instructor/admin), and least-privilege administration.\n- **Content lifecycle**: authoring/import, packaging validation, versioning, and publishing workflows.\n- **Learning telemetry**: what events are captured, where they’re stored, and which reports are produced.\n- **Auditability**: how the system can produce evidence for compliance training, accreditation, or internal policy enforcement.\n\n## “AI-powered” responsibly\n\nWhere AI is used, research writing should define **what is automated**, **what is advisory**, and **what requires human approval**:\n\n- Recommendation vs. decision-making\n- Model governance and change management\n- Evaluation metrics (quality, bias considerations, and drift monitoring)\n\n## References\n\n- SCORM overview and relevance in LMS ecosystems: `https://coggno.com/blog/what-is-scorm-and-why-is-it-important-for-lms-platforms-in-2026/`\n- Practical comparison of SCORM/xAPI/LTI in integrations: `https://lmspedia.org/lms-api-documentation-guide/`',
      mvpDemo:
        '## MVP demo scope (research-driven)\n\nAn LMS MVP should prove the **core learning loop** and the **admin/instructor loop**, end‑to‑end:\n\n### Learner loop\n\n- Course discovery and enrollment\n- Lesson delivery and basic navigation\n- Assessments (quiz/assignment) and grading outcomes\n- Progress view and completion evidence\n\n### Instructor/admin loop\n\n- Course creation and publishing\n- Enrollment management (manual + bulk workflows)\n- Role-based access control (RBAC) and permissions\n- Reporting exports (completion and performance)\n\n## MVP demo success criteria\n\nA research-backed demo ties features to measurable outcomes:\n\n- **Time-to-first-course** for a new learner\n- **Instructor publish latency** (create → publish)\n- **Completion evidence quality** (reporting completeness)\n- **Integration readiness** (SSO and standards validation)\n\n## References\n\n- LMS integration and interoperability considerations (SCORM/xAPI/LTI): `https://lmspedia.org/lms-api-documentation-guide/`',
      ideaPitch:
        '## Pitch narrative (institution + enterprise)\n\n### Problem\n\nOrganizations need learning delivery that is **consistent**, **trackable**, and **audit-ready** across distributed learners and fast-changing content.\n\n### Solution\n\nA **cloud-based LMS** that supports:\n\n- Interoperable content standards (SCORM/xAPI/LTI)\n- Role-aware workflows for learners, instructors, and admins\n- Analytics for engagement, progress, and outcomes\n\n### Differentiators\n\n- Cross‑platform delivery\n- “AI-powered” enhancements framed as **assistive** and governed (recommendations, insights, content help)\n- Support model (24/7) aligned to enterprise expectations\n\n### Commercial model\n\nEnterprise licensing aligns to governance, support, and integration needs.\n\n## References\n\n- Technical/operational view of LMS workflows and standards: `https://lmspedia.org/how-lms-works-a-technical-operational-deep-dive-2026-guide/`',
      timeline: [
        { label: 'Discovery', detail: 'Define users, outcomes, and MVP boundaries; confirm integrations and content approach.', duration: '1–2 weeks' },
        { label: 'MVP Demo Build', detail: 'Implement core LMS journeys + admin basics; prepare demo script and feedback loop.', duration: '4–6 weeks' },
        { label: 'Stakeholder Review', detail: 'Run demos, gather feedback, finalize backlog and rollout plan.', duration: '1–2 weeks' },
        { label: 'Hardening', detail: 'Security, performance, and support readiness aligned to enterprise use.', duration: '2–4 weeks' },
      ],
    },
  },
  {
    id: '02',
    slug: 'smart-health-monitor',
    name: 'Smart Health Monitor',
    blurb: 'AI-based device to monitor health parameters.',
    image: '/img/s1.jpg',
    compatibility: 'iOS / Android',
    release: 'Q3 2025',
    license: 'Clinical',
    tags: ['Wearable', 'HIPAA', 'Real-time'],
    docs: {
      paperWriting:
        '## Research framing\n\nRemote monitoring products sit at the intersection of **medical workflows**, **privacy/security**, and **human factors**. For a “Smart Health Monitor”, the paper should avoid unverified clinical performance claims and instead focus on:\n\n- The monitoring workflow (capture → review → escalation)\n- Data protection requirements when handling ePHI\n- System hardening and operational monitoring expectations\n\n## HIPAA-aligned privacy/security considerations\n\nIf used by HIPAA regulated entities, the HIPAA Security Rule requires safeguards around confidentiality, integrity, and availability of ePHI, typically operationalized through:\n\n- Risk analysis and risk management\n- Access control and authentication\n- Encryption where appropriate\n- Audit controls and monitoring\n- System hardening and vulnerability management\n\n## Real-time monitoring implications\n\n“Real-time” monitoring increases the need for clear definitions of:\n\n- Alert thresholds and responsibility (who responds?)\n- Alarm fatigue mitigation\n- Downtime and continuity expectations\n\n## References\n\n- HHS OCR: Security Rule expectations and system hardening context: `https://www.hhs.gov/hipaa/for-professionals/security/guidance/cybersecurity-newsletter-january-2026/index.html`\n- HHS OCR guidance on remote communication technologies under HIPAA Rules: `https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-audio-telehealth/index.html`',
      mvpDemo:
        '## MVP demo scope\n\nA credible MVP demo for a monitoring product demonstrates **end-to-end flow**:\n\n- Data ingestion from device to mobile app (iOS/Android)\n- Near real-time dashboarding and trend views\n- Alert creation, acknowledgment, and escalation workflow\n- Data export for analysis and audit\n\n## Security-focused MVP behaviors\n\n- Demonstrate authentication and access boundaries\n- Demonstrate audit logging (who accessed what and when)\n- Demonstrate safe defaults and hardening assumptions\n\n## References\n\n- HHS OCR cybersecurity newsletter (system hardening context): `https://www.hhs.gov/hipaa/for-professionals/security/guidance/cybersecurity-newsletter-january-2026/index.html`',
      ideaPitch:
        '## Pitch narrative (clinical + enterprise)\n\n### Problem\n\nCare teams need earlier signal visibility and more consistent follow‑up without overwhelming clinicians with noise.\n\n### Solution\n\nA wearable + mobile monitoring platform that emphasizes:\n\n- Real-time (or near real-time) telemetry visibility\n- Configurable workflows for alerts and escalation\n- Privacy/security readiness where ePHI is involved\n\n### Proof strategy\n\nStart with a pilot focused on workflow fit, alert quality, and operational monitoring.\n\n## References\n\n- HHS OCR guidance (privacy/security context for remote communications): `https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-audio-telehealth/index.html`',
      timeline: [
        { label: 'Discovery', detail: 'Define monitored parameters, workflows, and privacy/security requirements.', duration: '1–2 weeks' },
        { label: 'Prototype', detail: 'Device/app connectivity demo; real-time dashboard + alert rules.', duration: '3–5 weeks' },
        { label: 'MVP Demo', detail: 'Stabilize flows, add clinician view, data exports, and audit-friendly logging.', duration: '4–6 weeks' },
        { label: 'Pilot Planning', detail: 'Pilot protocol, feedback loops, and compliance documentation pack.', duration: '2–3 weeks' },
      ],
    },
  },
  {
    id: '03',
    slug: 'precision-farming-drone',
    name: 'Precision Farming Drone',
    blurb: 'Drones for monitoring crop health and yield.',
    image: '/img/s2.jpg',
    compatibility: 'Edge + Cloud',
    release: '2025',
    license: 'Commercial',
    tags: ['Autonomous', 'Vision AI', 'Weather-proof'],
    docs: {
      paperWriting:
        '## Research framing\n\nUAVs in precision agriculture are widely researched as a high-resolution sensing layer that can complement satellite imagery. Research literature commonly uses vegetation indices (e.g., **NDVI**, **OSAVI**, **NDRE**) derived from multispectral imagery to assess canopy vigor and spatial variability.\n\nA “Precision Farming Drone” paper should explain:\n\n- What data is captured (RGB/multispectral) and when (growth stages, acquisition protocols)\n- What indices and outputs are produced (maps, hotspot detection, trends)\n- Why edge + cloud matters (field connectivity, latency, scalable analytics)\n\n## Evidence base (examples)\n\nRecent studies report strong correlations between UAV-derived indices and crop monitoring variables, and also highlight the value of combining UAV and satellite data for scalable monitoring.\n\n## References\n\n- UAV vs satellite vegetation indices correlation and fusion approach (2026): `https://link.springer.com/article/10.1007/s11119-026-10336-7`\n- UAV multispectral sensing + yield modeling approach (Frontiers, 2025): `https://www.frontiersin.org/articles/10.3389/fpls.2025.1696730/full`\n- Drone multispectral NDVI correlations with biophysical measures (MDPI): `https://www.mdpi.com/2673-9976/41/1/10`',
      mvpDemo:
        '## MVP demo scope\n\nA credible MVP demo typically includes:\n\n- Mission planning (area selection, flight plan, capture settings)\n- Example data capture and processing pipeline\n- Field map visualization (index map + hotspot overlays)\n- Exportable report for agronomist/operator review\n\n## Research-aligned success criteria\n\n- Repeatability of acquisition protocol\n- Interpretability of maps and derived metrics\n- Operational usability in field conditions\n\n## References\n\n- UAV-derived vegetation indices and precision monitoring (MDPI): `https://www.mdpi.com/2673-9976/41/1/10`',
      ideaPitch:
        '## Pitch narrative (commercial agriculture)\n\n### Problem\n\nManual scouting is labor-intensive and often misses early spatial variation in crop health.\n\n### Solution\n\nA UAV platform that captures high-resolution field imagery and produces decision-ready maps that support targeted interventions.\n\n### Differentiators\n\n- Autonomous flight operations\n- Vision-AI outputs aligned to agronomy workflows\n- Edge + cloud architecture for both field usability and scalable analytics\n\n## References\n\n- Multi-sensor crop monitoring and strong UAV index correlations (2026): `https://link.springer.com/article/10.1007/s11119-026-10336-7`',
      timeline: [
        { label: 'Discovery', detail: 'Define target crops, mission constraints, data outputs, and stakeholder workflows.', duration: '1–2 weeks' },
        { label: 'MVP Demo Build', detail: 'Mission flow + mapping UI; baseline vision pipeline integration.', duration: '5–7 weeks' },
        { label: 'Field Validation', detail: 'Run controlled field tests; iterate on usability and robustness.', duration: '3–5 weeks' },
        { label: 'Commercial Readiness', detail: 'Ops tooling, support plan, and deployment packaging.', duration: '2–4 weeks' },
      ],
    },
  },
  {
    id: '04',
    slug: 'ai-chatbot-assistant',
    name: 'AI Chatbot Assistant',
    blurb: 'An AI-powered chatbot for businesses.',
    image: '/img/s3.jpg',
    compatibility: 'Web / Slack / Teams',
    release: 'Available',
    license: 'SaaS',
    tags: ['RAG', 'Multi-language', 'Secure'],
    docs: {
      paperWriting:
        '## Research framing\n\nEnterprise chat assistants are moving toward **Retrieval‑Augmented Generation (RAG)** patterns to reduce hallucinations by grounding outputs in retrieved organizational knowledge.\n\nA research-grade paper should define:\n\n- Content sources and ingestion (policies, FAQs, product docs)\n- Retrieval strategy (dense + keyword/hybrid retrieval, reranking)\n- Governance: permissions filtering and content freshness\n- Evaluation: retrieval quality and answer faithfulness metrics\n\n## Production considerations\n\nRAG systems fail most often due to document quality, chunking/indexing strategy, and lack of evaluation and observability.\n\n## References\n\n- Production RAG checklist and architecture considerations (2026): `https://jishulabs.com/blog/rag-retrieval-augmented-generation-guide-2026`\n- Production RAG best practices and evaluation metrics (2026): `https://devstarsj.github.io/2026/03/22/rag-retrieval-augmented-generation-production-best-practices-2026/`',
      mvpDemo:
        '## MVP demo scope\n\nA credible MVP demo for an enterprise assistant includes:\n\n- Knowledge ingestion of a curated document set\n- Web chat plus one collaboration surface (Slack or Teams)\n- Role/permission gating for sensitive content\n- Analytics for unanswered questions and content gaps\n\n## References\n\n- Production‑ready RAG practices (2026): `https://devstarsj.github.io/2026/03/22/rag-retrieval-augmented-generation-production-best-practices-2026/`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nKnowledge is fragmented across tools; support and internal teams lose time searching and repeating answers.\n\n### Solution\n\nA secure RAG-based assistant deployed across web and collaboration tools, with multilingual support.\n\n### Proof strategy\n\nPilot with a limited corpus and measure:\n\n- Deflection rate\n- Time-to-answer\n- Answer faithfulness (groundedness)\n\n## References\n\n- Enterprise RAG systems and evaluation focus (2026): `https://jishulabs.com/blog/rag-retrieval-augmented-generation-guide-2026`',
      timeline: [
        { label: 'Discovery', detail: 'Define use cases, content sources, and access rules for secure operation.', duration: '1 week' },
        { label: 'MVP Demo', detail: 'Ingestion + chat + Slack/Teams flows; basic analytics and controls.', duration: '3–5 weeks' },
        { label: 'Pilot', detail: 'Stakeholder testing, tuning, and governance workflow setup.', duration: '2–3 weeks' },
        { label: 'Scale', detail: 'SSO, monitoring/SLA, and multi-team rollout hardening.', duration: '2–4 weeks' },
      ],
    },
  },
  {
    id: '05',
    slug: 'cloud-security-suite',
    name: 'Cloud Security Suite',
    blurb: 'Protect your cloud infrastructure with advanced security.',
    image: '/img/s4.jpg',
    compatibility: 'AWS / Azure / GCP',
    release: 'Available',
    license: 'Enterprise',
    tags: ['CSPM', 'SIEM', 'Zero-trust'],
    docs: {
      paperWriting:
        '## Research framing\n\nMulti-cloud security programs struggle with configuration drift, inconsistent policy enforcement, and fragmented evidence for audit and risk management. A Cloud Security Suite positioned around **CSPM**, **SIEM-aligned monitoring**, and **Zero Trust** should be written as an operational program, not just tooling.\n\n## CSPM and continuous monitoring\n\nNIST SP 800‑137 describes an ISCM program as providing visibility into assets, threats/vulnerabilities, and control effectiveness to support timely risk response. CSPM capabilities (inventory, baseline checks, drift detection) are often used to operationalize continuous configuration assurance.\n\n## Zero Trust architecture\n\nNIST SP 800‑207 defines Zero Trust as shifting defenses from static perimeters to users/assets/resources, assuming no implicit trust. For cloud environments, ZT principles typically emphasize identity-centered policy decisions, segmentation, and continuous evaluation.\n\n## API protection (cloud-native)\n\nFor cloud-native platforms, secure API design and protection measures are a first-class concern.\n\n## References\n\n- NIST SP 800-137 (ISCM): `https://csrc.nist.gov/publications/detail/sp/800-137/final`\n- NIST SP 800-207 (Zero Trust Architecture): `https://csrc.nist.gov/publications/detail/sp/800-207/final`\n- NIST SP 800-228 upd1 (API protection, 2026): `https://www.nist.gov/publications/guidelines-api-protection-cloud-native-systems-march-2026-update`\n- SIEM overview (federal context): `https://www.irs.gov/privacy-disclosure/security-information-and-event-management-siem-systems`',
      mvpDemo:
        '## MVP demo scope\n\n- Multi-cloud inventory and asset classification\n- Baseline posture checks and drift detection\n- Prioritized findings with remediation guidance\n- Alert pipeline suitable for SIEM workflows\n\n## References\n\n- NIST ISCM guidance (continuous monitoring program): `https://csrc.nist.gov/publications/detail/sp/800-137/final`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nCloud complexity increases misconfiguration risk and slows audit evidence collection.\n\n### Solution\n\nA suite that unifies posture management, monitoring, and zero-trust-aligned governance across AWS/Azure/GCP.\n\n### References\n\n- NIST Zero Trust Architecture: `https://csrc.nist.gov/publications/detail/sp/800-207/final`',
      timeline: [
        { label: 'Discovery', detail: 'Confirm cloud footprint, controls, and reporting expectations; define KPIs.', duration: '1–2 weeks' },
        { label: 'MVP Demo Build', detail: 'Inventory + findings + dashboards; baseline alert routing.', duration: '4–6 weeks' },
        { label: 'Pilot', detail: 'Tune controls, validate workflows, and finalize governance/reporting packs.', duration: '2–4 weeks' },
        { label: 'Scale', detail: 'Automation, expanded integrations, and multi-account rollout readiness.', duration: '3–5 weeks' },
      ],
    },
  },
  {
    id: '06',
    slug: 'cyber-threat-analyzer',
    name: 'Cyber Threat Analyzer',
    blurb: 'Detect and analyze cyber threats in real time.',
    image: '/img/s5.jpg',
    compatibility: 'On-prem / Cloud',
    release: 'Q2 2025',
    license: 'Enterprise',
    tags: ['ML-driven', 'Real-time', 'Forensics'],
    docs: {
      paperWriting:
        '## Research framing\n\nThreat analysis platforms must be specified as **incident response enablement**: detection is only valuable when it improves triage, containment, and recovery.\n\nNIST SP 800‑61 Rev. 3 frames incident response as part of cybersecurity risk management and integrates incident response recommendations across CSF 2.0 functions.\n\n## Real-time + forensics\n\nA research-forward document should define:\n\n- Event ingestion and normalization\n- Detection logic (capability-level description, avoiding unverifiable accuracy claims)\n- Case management lifecycle and forensic timeline generation\n- Governance for tuning, false-positive reduction, and evidence handling\n\n## References\n\n- NIST SP 800-61 Rev. 3 (Incident Response, 2025): `https://csrc.nist.gov/pubs/sp/800/61/r3/final`\n- NIST SP 800-137 (ISCM, continuous monitoring): `https://csrc.nist.gov/publications/detail/sp/800-137/final`',
      mvpDemo:
        '## MVP demo scope\n\n- Ingest sample events and build a normalized event view\n- Triage queue with scoring/prioritization\n- Investigation workspace with a forensic timeline\n- Exportable investigation summary for reporting\n\n## References\n\n- NIST SP 800-61 Rev. 3: `https://csrc.nist.gov/pubs/sp/800/61/r3/final`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nSOC teams face high event volumes; slow triage and poor context increase incident impact.\n\n### Solution\n\nA threat analyzer that focuses on real-time triage and investigation context to support faster, higher-confidence response.\n\n### References\n\n- NIST SP 800-61 Rev. 3: `https://csrc.nist.gov/pubs/sp/800/61/r3/final`',
      timeline: [
        { label: 'Discovery', detail: 'Define data sources, SOC workflow, and integrations; confirm KPIs.', duration: '1–2 weeks' },
        { label: 'MVP Demo Build', detail: 'Ingest + scoring + triage UI + investigation timeline.', duration: '4–6 weeks' },
        { label: 'Pilot', detail: 'Tune detection thresholds, refine workflow, and validate reporting needs.', duration: '2–4 weeks' },
        { label: 'Scale', detail: 'HA, hardening, and deeper integrations for enterprise rollout.', duration: '3–6 weeks' },
      ],
    },
  },
  {
    id: '07',
    slug: 'robotics-research-kit',
    name: 'Robotics Research Kit',
    blurb: 'An advanced robotics kit for research and development.',
    image: '/img/s6.jpg',
    compatibility: 'Modular hardware',
    release: 'Available',
    license: 'Academic / Commercial',
    tags: ['ROS', 'Python SDK', 'Simulation'],
    docs: {
      paperWriting:
        '## Research framing\n\nResearch robotics platforms succeed when they reduce integration overhead and maximize reproducibility. A “Robotics Research Kit” positioned around **ROS**, a **Python SDK**, and **simulation** should be described as:\n\n- A modular hardware + software stack\n- A set of repeatable experiments/demos\n- A reproducible workflow (configs, logs, replay)\n\n## ROS concepts (why they matter)\n\nROS 2 documentation emphasizes that systems are composed of modular **nodes** that communicate via **topics**, **services**, and **actions**. This model supports scalable architectures for sensing, planning, and control.\n\n## References\n\n- ROS 2 nodes concept: `https://docs.ros.org/en/rolling/Concepts/Basic/About-Nodes.html`\n- ROS 2 topics vs services vs actions: `https://docs.ros.org/en/rolling/How-To-Guides/Topics-Services-Actions.html`',
      mvpDemo:
        '## MVP demo scope\n\n- Simulation-first setup with a repeatable environment\n- Python SDK examples for controlling modules and collecting data\n- ROS graph demo showing nodes/topics/services/actions\n- Logging + replay of an experiment run\n\n## References\n\n- ROS 2 communication primitives guidance: `https://docs.ros.org/en/rolling/How-To-Guides/Topics-Services-Actions.html`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nLabs spend significant time integrating hardware drivers, middleware, and experiment tooling before meaningful research can start.\n\n### Solution\n\nA modular kit aligned to ROS 2 patterns, with a Python SDK and simulation workflows that reduce time-to-first-experiment.\n\n### References\n\n- ROS 2 nodes and modular computation model: `https://docs.ros.org/en/rolling/Concepts/Basic/About-Nodes.html`',
      timeline: [
        { label: 'Discovery', detail: 'Define target modules, lab constraints, and demo scenarios.', duration: '1–2 weeks' },
        { label: 'MVP Demo Build', detail: 'ROS demo stack + SDK examples + simulation workflow.', duration: '4–7 weeks' },
        { label: 'Pilot', detail: 'Lab walkthroughs, feedback incorporation, documentation refinement.', duration: '2–4 weeks' },
        { label: 'Scale', detail: 'Packaging, support process, and distribution readiness.', duration: '3–6 weeks' },
      ],
    },
  },
  {
    id: '08',
    slug: 'autonomous-business-os',
    name: 'Autonomous Business OS',
    blurb: 'AI agents that run repetitive business workflows end-to-end.',
    image: '/img/s7.jpg',
    compatibility: 'Web / API / Integrations',
    release: 'Future / R&D',
    license: 'Enterprise',
    tags: ['AI Agents', 'Automation', 'Governance'],
    docs: {
      paperWriting:
        '## Research framing\n\nAn “Autonomous Business OS” is best described as an **agentic orchestration layer**: it coordinates tools, data, policies, and human escalation to complete multi-step workflows (support, sales ops, hiring pipelines, analytics ops, finance ops).\n\nThe research-grade core is not “AI replaces employees,” but **AI as an operational system** with measurable controls:\n\n- **Governance**: who can deploy agents, what they’re allowed to do, approval boundaries, audit logging.\n- **Safety**: guardrails, validation, fallbacks, escalation pathways.\n- **Security**: least privilege tool access, secrets management, and continuous monitoring.\n- **Reliability**: deterministic checkpoints, idempotency, rollback, and human-in-the-loop for high-risk actions.\n\n## Agent operating model\n\nA practical architecture is a portfolio of specialized agents (Customer Support Agent, Sales Ops Agent, Hiring Coordinator Agent, Finance Ops Agent) coordinated by a **policy + workflow layer**:\n\n- **Map**: represent the business process (states, transitions, SLAs, escalation rules)\n- **Measure**: track outcomes (resolution rate, error rate, time-to-completion, cost)\n- **Manage**: continuous improvement (feedback loops, eval sets, red-teaming)\n\n## “Jarvis-like” support agents\n\nCustomer service agents should be documented as a layered system:\n\n1. Retrieval + policy grounding (knowledge base + SOPs)\n2. Tool use (ticket systems, CRM, inventory, billing)\n3. Escalation (edge cases, refunds, legal/compliance)\n4. Learning loop (approved updates to KB and SOPs)\n\n## Individual business contributors (one-person businesses)\n\nA “one stop business guide” mode emphasizes:\n\n- Templates (go-to-market, pricing, onboarding, SOPs)\n- Automation (lead capture → follow-up → invoicing)\n- Analytics (simple dashboards for revenue, churn, funnel)\n\n## References\n\n- NIST AI RMF 1.0 (GOVERN/MAP/MEASURE/MANAGE): `https://www.nist.gov/itl/ai-risk-management-framework`\n- NIST concept note (AI agents in critical infrastructure profile): `https://www.nist.gov/document/concept-note-artificial-intelligence-risk-management-framework-trustworthy-ai-critical`',
      mvpDemo:
        '## MVP demo scope\n\n### Core workflows (minimum viable)\n\n- **Customer support**: intake → classify → retrieve KB → propose resolution → execute allowed actions → escalate\n- **Sales ops**: lead capture → enrichment → outreach draft → CRM updates → handoff\n- **Ops analytics**: nightly pipeline that produces KPI dashboard and anomaly flags\n\n### Guardrails (must show)\n\n- Role-based tool permissions\n- Approval gates for risky actions (refunds, contract changes, user deactivation)\n- Full audit trail (inputs, tool calls, outcomes)\n\n### Success metrics\n\n- First response time, resolution time\n- Escalation rate (and reasons)\n- Policy violation rate (should be near zero)\n\n## References\n\n- NIST AI RMF (AI systems operate with varying autonomy): `https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nSmall teams and solo operators spend a disproportionate amount of time on repetitive ops work (tickets, follow-ups, documentation, reporting).\n\n### Solution\n\nAn agentic operating layer that executes routine workflows **with governance**, allowing humans to focus on high-judgment decisions.\n\n### Differentiation\n\n- Governance-first design (auditability, approval gates)\n- Integrations-first (CRM, ticketing, email, docs)\n- Continuous improvement with measurable KPIs\n\n### Future positioning\n\nAs agent safety, evaluation, and policy engines mature, the platform evolves toward more autonomous “digital staff” for narrowly scoped tasks.\n\n## References\n\n- NIST AI RMF: `https://www.nist.gov/itl/ai-risk-management-framework`',
      timeline: [
        { label: 'Discovery', detail: 'Select 2–3 workflows, define risks, approvals, and success KPIs.', duration: '1–2 weeks' },
        { label: 'MVP Demo Build', detail: 'Implement orchestration + integrations + audit logging + approval gates.', duration: '4–6 weeks' },
        { label: 'Pilot', detail: 'Run real workflows, measure outcomes, harden guardrails and escalation.', duration: '3–6 weeks' },
        { label: 'Scale', detail: 'Expand workflow library, reliability, security baselines, and admin governance.', duration: '6–10 weeks' },
      ],
    },
  },
  {
    id: '09',
    slug: 'real-time-supply-chain-brain',
    name: 'Real-Time Supply Chain Brain',
    blurb: 'Predict demand and orchestrate procurement, inventory, and fulfillment dynamically.',
    image: '/img/s8.jpg',
    compatibility: 'ERP / WMS / TMS / POS',
    release: 'Future / R&D',
    license: 'Enterprise',
    tags: ['Control Tower', 'Forecasting', 'Optimization'],
    docs: {
      paperWriting:
        '## Research framing\n\nA “Supply Chain Brain” is an evolution of a **supply chain control tower**: an integrated capability combining people, process, data, organization, and technology to capture near real-time operational signals and improve decisions.\n\nA research-backed platform moves from *visibility dashboards* to **closed-loop execution**:\n\n- **Predictive**: demand forecasting, disruption detection, and risk scoring\n- **Prescriptive**: recommended reorder levels, allocation, substitution, and routing\n- **Autonomous execution (bounded)**: automatic replenishment and exception handling within policy limits\n\n## Storage management (high-level)\n\nStorage management in this context means “how inventory is positioned and replenished”:\n\n- Slotting and replenishment policies\n- Safety stock strategy (service level targets)\n- Lot/expiry handling where applicable\n- Capacity constraints and rebalancing between nodes\n\n## Why AI must be paired with operating model\n\nResearch and industry guidance repeatedly show outcomes depend on:\n\n- Data quality and master data governance\n- Decision rights (what can be automated vs requires approval)\n- Scenario simulation (digital twin style planning)\n\n## References\n\n- Control tower definition and building blocks (Gartner cited): `https://www.supplychain247.com/article/what_is_a_supply_chain_control_tower_and_whats_needed_to_deploy_one`\n- Gartner (2026) agentic AI forecast in SCM: `https://www.gartner.com/en/newsroom/press-releases/2026-04-07-gartner-forecasts-supply-chain-management-software-with-agentic-ai-will-grow-to-53-billion-in-spend-by-2030`',
      mvpDemo:
        '## MVP demo scope\n\n- Ingest POS + inventory + supplier lead times\n- Produce a demand forecast for a small category set\n- Generate replenishment recommendations with constraints (budget, min order qty, lead time)\n- Show exception management (stockout risk, late shipment) and recommended actions\n\n## Guardrails\n\n- Approval gates for pricing or supplier changes\n- Audit logs for every recommendation and execution action\n\n## References\n\n- Control tower capability overview: `https://www.supplychain247.com/article/what_is_a_supply_chain_control_tower_and_whats_needed_to_deploy_one`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nHuman decision cycles lag behind real-world signals (weekend spikes, local events, disruptions), causing stockouts and overstock.\n\n### Solution\n\nA real-time “brain” that continuously senses demand and inventory signals, simulates scenarios, and executes bounded replenishment decisions.\n\n### Why now\n\nAgentic capabilities are rapidly being embedded into SCM software; the differentiator is coupling autonomy with governance and execution discipline.\n\n## References\n\n- Gartner (2026) agentic AI in SCM press release: `https://www.gartner.com/en/newsroom/press-releases/2026-04-07-gartner-forecasts-supply-chain-management-software-with-agentic-ai-will-grow-to-53-billion-in-spend-by-2030`',
      timeline: [
        { label: 'Discovery', detail: 'Select categories/nodes, define KPIs, constraints, and decision rights.', duration: '2–3 weeks' },
        { label: 'MVP Demo Build', detail: 'Ingest → forecast → recommend → exception workflow + audit logs.', duration: '6–8 weeks' },
        { label: 'Pilot', detail: 'Run with live signals, tune models, validate governance & overrides.', duration: '6–10 weeks' },
        { label: 'Scale', detail: 'Expand nodes/categories, integrate ERP/WMS/TMS deeper, add scenario simulation.', duration: '10–16 weeks' },
      ],
    },
  },
  {
    id: '10',
    slug: 'ai-healthcare-companion',
    name: 'AI-Powered Healthcare Companion',
    blurb: 'Continuous monitoring, proactive insights, and care coordination with privacy-first design.',
    image: '/img/s9.jpg',
    compatibility: 'iOS / Android / Wearables',
    release: 'Future / R&D',
    license: 'Clinical / Consumer',
    tags: ['Wearables', 'Decision Support', 'Social Sharing'],
    docs: {
      paperWriting:
        '## Research framing\n\nA healthcare “companion” should be framed as **digital tracking + decision support** rather than automated diagnosis. The research-grade approach is:\n\n- Track health signals over time (wearables + user-entered data)\n- Provide decision support prompts aligned to protocols\n- Escalate: encourage clinical evaluation when risk thresholds are crossed\n\nWHO guidance includes recommendations on **digital tracking** and **health worker decision support** under specific conditions, emphasizing ecosystem readiness, privacy, and feasibility.\n\nSensor-based digital health technologies are increasingly used to capture endpoints and outcomes; research emphasizes evidentiary rigor, validation, and careful interpretation of continuous data.\n\n## Social layer (“habit” + close-ones alerts)\n\nA companion can include:\n\n- Progress sharing (steps, sleep, adherence)\n- Consent-based alerts to trusted contacts (e.g., fall-risk, missed check-ins)\n- Strong privacy controls (granular sharing, revocation, audit)\n\n## References\n\n- WHO guideline (2019) recommendations on digital interventions (decision support + tracking): `https://iris.who.int/bitstream/handle/10665/311980/WHO-RHR-19.10-eng.pdf`\n- npj Digital Medicine scoping review on sensor-based DHTs in clinical trials (2026): `https://www.nature.com/articles/s41746-026-02512-w`',
      mvpDemo:
        '## MVP demo scope\n\n- Wearable ingestion (steps, sleep, HR trend placeholders depending on device)\n- Daily check-ins and longitudinal trend views\n- “Proactive” alerts framed as **recommendations** (e.g., seek clinical review) not diagnosis\n- Friend requests + consent-based sharing + emergency contact alerts\n\n## Safety and compliance posture\n\n- Clear disclaimers + boundaries of intended use\n- Privacy-first defaults\n\n## References\n\n- WHO guideline on decision support + tracking (conditions): `https://iris.who.int/bitstream/handle/10665/311980/WHO-RHR-19.10-eng.pdf`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nPeople struggle to turn daily health signals into consistent habits and timely care.\n\n### Solution\n\nA companion that tracks, explains, and escalates—combining longitudinal monitoring with decision support and a trusted social layer.\n\n### Future/R&D\n\nClinical-grade decision support requires strong validation, careful product claims, and regulatory alignment.\n\n## References\n\n- Sensor-based DHT evidence discussion (npj Digital Medicine, 2026): `https://www.nature.com/articles/s41746-026-02512-w`',
      timeline: [
        { label: 'Discovery', detail: 'Define signals, intended use, privacy model, and safety boundaries.', duration: '2–4 weeks' },
        { label: 'MVP Demo Build', detail: 'Ingestion + trends + consent sharing + recommendation alerts.', duration: '6–10 weeks' },
        { label: 'Pilot', detail: 'Small cohort testing, iterate on UX and alert thresholds.', duration: '8–12 weeks' },
        { label: 'Scale', detail: 'Clinical partnerships, validation plan, broader device integrations.', duration: '12–24 weeks' },
      ],
    },
  },
  {
    id: '11',
    slug: 'smart-urban-infrastructure-platform',
    name: 'Smart Urban Infrastructure Platform',
    blurb: 'AI orchestration for traffic, energy, water, and public transport with cyber resilience.',
    image: '/img/s10.jpg',
    compatibility: 'ITS / OT / City Platforms',
    release: 'Future / R&D',
    license: 'Government / Enterprise',
    tags: ['Smart City', 'ITS', 'Cybersecurity'],
    docs: {
      paperWriting:
        '## Research framing\n\nSmart-city platforms converge IT + OT + IoT, making them attractive targets and requiring defense-in-depth. A credible research paper should start with **risk management** and **resilience**, not just optimization.\n\nCISA/NSA guidance emphasizes smart cities as cyber-physical environments and recommends proactive cybersecurity planning alongside innovation.\n\nFor transportation systems, the USDOT/NIST **ITS Cybersecurity Framework Profile** provides a risk-based approach and mission objectives tailored to ITS operators.\n\n## AI in city operations\n\nAI can optimize:\n\n- Traffic signal timing and congestion mitigation\n- Public transit headways and incident response\n- Energy load balancing and anomaly detection\n- Water system monitoring and leakage detection\n\nBut research writing must document:\n\n- Safety constraints and fail-safe modes\n- Human override and incident handling\n- Continuous monitoring and patching expectations\n\n## References\n\n- CISA/NSA: Cybersecurity Best Practices for Smart Cities (2023): `https://www.cisa.gov/sites/default/files/2023-04/cybersecurity-best-practices-for-smart-cities_508.pdf`\n- ITS Cybersecurity Framework Profile (USDOT/NIST): `https://rosap.ntl.bts.gov/view/dot/72769/dot_72769_DS1.pdf`',
      mvpDemo:
        '## MVP demo scope\n\n- “City dashboard” with simulated signals (traffic flow, incidents, energy usage)\n- Adaptive traffic signal recommendation engine (bounded) with human approval\n- Incident workflow: detect → notify → route suggestions\n- Security baseline demo: segmentation + monitoring + audit logging\n\n## References\n\n- Smart cities cybersecurity best practices: `https://www.cisa.gov/sites/default/files/2023-04/cybersecurity-best-practices-for-smart-cities_508.pdf`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nUrban systems are complex and reactive; optimization without cyber resilience increases risk.\n\n### Solution\n\nA unified platform that improves real-time operations while embedding governance, monitoring, and resilience for city-scale cyber-physical systems.\n\n## References\n\n- ITS Profile (risk-based approach for ITS ecosystem): `https://rosap.ntl.bts.gov/view/dot/72769/dot_72769_DS1.pdf`',
      timeline: [
        { label: 'Discovery', detail: 'Select domain (traffic/energy/water), define safety constraints and KPIs.', duration: '4–6 weeks' },
        { label: 'MVP Demo Build', detail: 'Signal ingestion + dashboard + bounded recommendations + workflows.', duration: '10–14 weeks' },
        { label: 'Pilot', detail: 'Single corridor/zone deployment with monitoring and incident drills.', duration: '12–20 weeks' },
        { label: 'Scale', detail: 'Expand domains and integrate OT/ITS controls and governance.', duration: '24–52 weeks' },
      ],
    },
  },
  {
    id: '12',
    slug: 'voice-vision-operating-system',
    name: 'Voice + Vision Operating System',
    blurb: 'Post-app interface: multimodal agents that execute tasks across services without a phone.',
    image: '/img/s11.jpg',
    compatibility: 'Smart Glasses / Wearables / Web',
    release: 'Future / R&D',
    license: 'Consumer / Enterprise',
    tags: ['Multimodal', 'Wearables', 'Agents'],
    docs: {
      paperWriting:
        '## Research framing\n\nA “post-app world” OS is a **multimodal agent layer**: voice, vision, gaze, and context combine to map intents into tool executions.\n\nRecent research prototypes show always-on wearable agents using egocentric perception and modular tools, and work on gaze+voice referencing to improve object disambiguation on displayless smart glasses.\n\nKey research issues:\n\n- Privacy (bystander + wearer)\n- Latency and on-device vs cloud tradeoffs\n- Grounded action execution (auditable tool use)\n\n## References\n\n- VisionClaw (always-on smart glasses agent, 2026): `https://arxiv.org/html/2604.03486v1`\n- Gazeify Then Voiceify (gaze+voice object referencing, 2026): `https://arxiv.org/html/2601.19281v1`',
      mvpDemo:
        '## MVP demo scope\n\n- Voice-first intent capture with confirmation\n- Vision-based context extraction (e.g., “this product”, “that sign”) with disambiguation\n- Task execution across a small set of services (calendar, email, travel booking mock)\n- “Privacy modes”: recording indicator + on-device processing toggle + redaction\n\n## References\n\n- Gaze+voice object referencing research: `https://arxiv.org/html/2601.19281v1`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nApps fragment workflows; the interface tax grows as services multiply.\n\n### Solution\n\nA multimodal agent OS that converts intent into executed workflows across services—without requiring a phone as the primary UI.\n\n### Future/R&D\n\nSuccess depends on safety, privacy, and trustworthy execution guarantees.\n\n## References\n\n- Always-on wearable agent design (VisionClaw): `https://arxiv.org/html/2604.03486v1`',
      timeline: [
        { label: 'Discovery', detail: 'Define device target and privacy model; select 3 core workflows.', duration: '3–5 weeks' },
        { label: 'MVP Demo Build', detail: 'Multimodal intent + tool execution + confirmation + logs.', duration: '8–12 weeks' },
        { label: 'Pilot', detail: 'In-the-wild testing; latency + privacy iteration.', duration: '10–16 weeks' },
        { label: 'Scale', detail: 'More workflows, integrations, and safety evaluation harness.', duration: '16–30 weeks' },
      ],
    },
  },
  {
    id: '13',
    slug: 'automated-traffic-enforcement-and-ambulance-guidance',
    name: 'Automated Traffic Enforcement & Ambulance Guidance',
    blurb: 'Computer vision enforcement + priority routing to reduce response time and improve safety.',
    image: '/img/s12.jpg',
    compatibility: 'ITS / Camera Networks / Edge',
    release: 'Future / R&D',
    license: 'Government / Enterprise',
    tags: ['Computer Vision', 'ITS', 'Compliance'],
    docs: {
      paperWriting:
        '## Research framing\n\nTraffic enforcement and emergency routing are safety-critical. A research-grade product spec must include:\n\n- Data governance and privacy (minimize retention, clear access controls)\n- Model validation and error handling\n- Secure operations for connected camera infrastructure\n\nThe ITS ecosystem has sector-specific cybersecurity guidance (ITS CSF Profile). For connected road-vehicle systems, ISO/SAE 21434 is a lifecycle cybersecurity engineering standard (vehicle E/E systems), relevant for security engineering alignment where systems interface with vehicles and enforcement infrastructure.\n\n## References\n\n- ITS Cybersecurity Framework Profile (USDOT/NIST): `https://rosap.ntl.bts.gov/view/dot/72769/dot_72769_DS1.pdf`\n- ISO/SAE 21434 overview: `http://iso.org/standard/70918.html`',
      mvpDemo:
        '## MVP demo scope\n\n- Violation detection pipeline on sample footage (with human review queue)\n- Evidence packaging workflow (event metadata, timestamps, integrity checks)\n- Ambulance “green corridor” routing simulation with adaptive signals\n- Security baseline: hardening + monitoring + audit trails\n\n## References\n\n- Smart city cyber-physical guidance: `https://www.cisa.gov/sites/default/files/2023-04/cybersecurity-best-practices-for-smart-cities_508.pdf`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nEnforcement and emergency response rely on limited human bandwidth and delayed decisions.\n\n### Solution\n\nUse bounded automation for detection and routing while maintaining human validation, transparency, and secure operations.\n\n## References\n\n- ITS Profile: `https://rosap.ntl.bts.gov/view/dot/72769/dot_72769_DS1.pdf`',
      timeline: [
        { label: 'Discovery', detail: 'Define legal/privacy boundaries, evidence requirements, and KPIs.', duration: '6–10 weeks' },
        { label: 'MVP Demo Build', detail: 'Detection + review queue + evidence packaging + routing sim.', duration: '12–18 weeks' },
        { label: 'Pilot', detail: 'Limited zone/corridor trial with monitoring and governance.', duration: '16–28 weeks' },
        { label: 'Scale', detail: 'City-wide rollout, reliability, and audit-ready reporting.', duration: '28–52 weeks' },
      ],
    },
  },
  {
    id: '14',
    slug: 'secure-smart-home-gold-dome',
    name: 'Secure Smart Home “Gold Dome”',
    blurb: 'Smart home automation with a security-first architecture and continuous protection.',
    image: '/img/s13.jpg',
    compatibility: 'IoT / Home Networks / Cloud',
    release: 'Future / R&D',
    license: 'Consumer / Enterprise',
    tags: ['IoT Security', 'Zero Trust', 'Smart Home'],
    docs: {
      paperWriting:
        '## Research framing\n\nSmart homes combine safety-critical sensors (gas), automation (lights), and cloud connectivity—creating a broad attack surface. A credible research paper should be structured around:\n\n- Secure onboarding and identity\n- Least privilege device-to-cloud access\n- Patchability and post-market monitoring\n- Segmentation, continuous monitoring, and incident handling\n\nNIST SP 800-207 defines Zero Trust principles; NIST IR 8259 Rev. 1 (draft updates) describes foundational cybersecurity activities for IoT product manufacturers across pre- and post-market.\n\n## References\n\n- NIST SP 800-207 (Zero Trust): `https://csrc.nist.gov/pubs/sp/800/207/final`\n- NIST IR 8259 Rev. 1 (IoT manufacturer activities, 2025 draft series): `https://csrc.nist.gov/pubs/ir/8259/r1/ipd`',
      mvpDemo:
        '## MVP demo scope\n\n- Secure device onboarding flow (identity + pairing)\n- Network segmentation defaults (guest/IoT VLAN policies)\n- Continuous monitoring dashboard (device posture + anomalies)\n- Safety automations (gas alert → shutoff relay simulation) with strict approvals\n\n## References\n\n- NIST IR 8259 Rev. 1: `https://csrc.nist.gov/pubs/ir/8259/r1/ipd`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nSmart home convenience often ships faster than security; compromises can become safety incidents.\n\n### Solution\n\nA “gold dome” architecture that treats every device as untrusted by default and continuously verifies identity, posture, and behavior.\n\n## References\n\n- NIST Zero Trust Architecture: `https://csrc.nist.gov/pubs/sp/800/207/final`',
      timeline: [
        { label: 'Discovery', detail: 'Define device scope, threat model, and onboarding + update strategy.', duration: '3–5 weeks' },
        { label: 'MVP Demo Build', detail: 'Pairing + segmentation + monitoring + safety automations.', duration: '8–12 weeks' },
        { label: 'Pilot', detail: 'Home trials, attack simulations, UX and policy hardening.', duration: '10–16 weeks' },
        { label: 'Scale', detail: 'Ecosystem integrations and continuous update pipeline.', duration: '16–28 weeks' },
      ],
    },
  },
  {
    id: '15',
    slug: 'autonomous-education-economy',
    name: 'Autonomous Education Economy',
    blurb: 'Outcome-based learning that adapts to market demand with skills-first pathways.',
    image: '/img/s14.jpg',
    compatibility: 'Web / Mobile',
    release: 'Future / R&D',
    license: 'SaaS',
    tags: ['Skills-first', 'Micro-credentials', 'Job Pathways'],
    docs: {
      paperWriting:
        '## Research framing\n\nA skills-first education economy reframes learning as **verifiable outcomes**, not seat time or degrees.\n\nWorld Economic Forum research emphasizes that labor markets face skills gaps and that skills-first approaches broaden talent pools. Micro-credentials and modular pathways help workers reskill faster and provide employers clearer signals.\n\n## Platform concept\n\n- Market signal ingestion (demand trends, role requirements)\n- Adaptive learning pathways (skills graph)\n- Assessments and evidence (projects, simulations)\n- Job pipeline partnerships (skills-based matching)\n\n## References\n\n- WEF Putting Skills First (2024): `https://www3.weforum.org/docs/WEF_Putting_Skills_First_2024.pdf`\n- WEF Reskilling Revolution press release (2026): `https://www.weforum.org/press/2026/01/world-economic-forum-reskilling-revolution-on-track-to-reach-over-850-million-people/`',
      mvpDemo:
        '## MVP demo scope\n\n- Skills profile + baseline assessment\n- Adaptive pathway recommendation (skills gaps → modules)\n- Portfolio evidence generation (projects)\n- Skills-based matching to opportunities (pilot partners)\n\n## References\n\n- WEF Putting Skills First: `https://www3.weforum.org/docs/WEF_Putting_Skills_First_2024.pdf`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nDegrees are slow signals; markets change faster than curricula.\n\n### Solution\n\nOutcome-based learning that continuously updates to market needs and connects learners to skills-based opportunities.\n\n## References\n\n- WEF Reskilling Revolution (2026): `https://www.weforum.org/press/2026/01/world-economic-forum-reskilling-revolution-on-track-to-reach-over-850-million-people/`',
      timeline: [
        { label: 'Discovery', detail: 'Define skills taxonomy, assessments, and partner opportunity model.', duration: '4–6 weeks' },
        { label: 'MVP Demo Build', detail: 'Skills profile + pathways + portfolio evidence + matching pilot.', duration: '10–14 weeks' },
        { label: 'Pilot', detail: 'Run cohorts and iterate on signal quality and completion outcomes.', duration: '12–20 weeks' },
        { label: 'Scale', detail: 'Expand partner network and add more role pathways.', duration: '20–40 weeks' },
      ],
    },
  },
  {
    id: '16',
    slug: 'experience-economy-platform',
    name: 'Experience Economy Platform',
    blurb: 'Personalized travel and lifestyle planning with dynamic packaging and preview experiences.',
    image: '/img/products/experience-economy.jpg',
    compatibility: 'Web / Mobile / Partner APIs',
    release: 'Future / R&D',
    license: 'SaaS',
    tags: ['Personalization', 'Dynamic Packaging', 'Optimization'],
    docs: {
      paperWriting:
        '## Research framing\n\nModern travel planning is a constrained optimization problem: budget, dates, preferences, logistics, and real-time availability. Research on travel recommendation explores deep learning, attention, and context-aware models for route/itinerary generation.\n\nA platform can combine:\n\n- Preference modeling (long-term + short-term intent)\n- Itinerary generation (constraint satisfaction)\n- Dynamic packaging (flights + stays + activities)\n- Explainability (why this plan fits)\n\nThe “family trailer preview” concept fits emerging multimodal preview experiences (position as future feature/R&D).\n\n## References\n\n- DRR (Deep Route Recommendation) travel route recommendation (Informatica, 2026): `https://www.informatica.si/index.php/informatica/article/view/9876/6570`\n- Context-aware tourism recommender architecture + online results (IGI Global abstract): `https://www.igi-global.com/article/research-on-optimization-of-personalized-tourism-recommendation-system-driven-by-artificial-intelligence/398480`',
      mvpDemo:
        '## MVP demo scope\n\n- Preference intake (budget, pace, interests)\n- Itinerary generation with constraint checks\n- Dynamic packaging mock (bundle components)\n- “Explain plan” section (tradeoffs and constraints)\n\n## References\n\n- DRR travel route recommendation paper (2026): `https://www.informatica.si/index.php/informatica/article/view/9876/6570`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nTravel planning is complex; users want fast, trustworthy, personalized plans.\n\n### Solution\n\nA system that generates coherent itineraries and packages with clear constraints and real-time adaptation.\n\n### Future/R&D\n\nImmersive “trailers” and shared planning rooms can be positioned as future experience layers.\n\n## References\n\n- Context-aware recommender architecture (IGI): `https://www.igi-global.com/article/research-on-optimization-of-personalized-tourism-recommendation-system-driven-by-artificial-intelligence/398480`',
      timeline: [
        { label: 'Discovery', detail: 'Define constraint model, partners, and personalization metrics.', duration: '4–6 weeks' },
        { label: 'MVP Demo Build', detail: 'Preference model + itinerary generation + packaging + explanations.', duration: '10–14 weeks' },
        { label: 'Pilot', detail: 'Limited destinations, collect feedback and refine constraints.', duration: '10–18 weeks' },
        { label: 'Scale', detail: 'Add destinations/partners and real-time availability integrations.', duration: '18–36 weeks' },
      ],
    },
  },
  {
    id: '17',
    slug: 'human-skill-marketplace',
    name: 'Human Skill Marketplace',
    blurb: 'Real-time labor exchange: skills matched to tasks continuously with instant payouts.',
    image: '/img/products/human-skill-marketplace.jpg',
    compatibility: 'Web / Mobile',
    release: 'Future / R&D',
    license: 'SaaS',
    tags: ['Skills-first', 'Matching', 'Gig Economy'],
    docs: {
      paperWriting:
        '## Research framing\n\nA real-time labor exchange relies on **skills signaling** and **matching** rather than static job postings.\n\nSkills-first approaches are increasingly highlighted as a way to broaden talent pools and improve matching efficiency, with emphasis on verifiable credentials and evidence.\n\n## Platform pillars\n\n- Skills profiles and evidence (portfolio, assessments, micro-credentials)\n- Task taxonomy and pricing\n- Matching engine (fit, availability, trust, performance)\n- Payments and dispute resolution\n\n## References\n\n- WEF Putting Skills First (skills-first labor market framing): `https://www3.weforum.org/docs/WEF_Putting_Skills_First_2024.pdf`\n- WEF Reskilling Revolution (2026): `https://www.weforum.org/press/2026/01/world-economic-forum-reskilling-revolution-on-track-to-reach-over-850-million-people/`',
      mvpDemo:
        '## MVP demo scope\n\n- Skill profile + evidence upload\n- Task posting and bidding\n- Matching + escrow payment simulation\n- Reputation and dispute workflow\n\n## References\n\n- WEF skills-first report: `https://www3.weforum.org/docs/WEF_Putting_Skills_First_2024.pdf`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nTraditional hiring is slow and degree-biased; work increasingly decomposes into task-based contributions.\n\n### Solution\n\nA marketplace that matches verified skills to real tasks with fast payouts and measurable quality.\n\n## References\n\n- WEF Putting Skills First: `https://www3.weforum.org/docs/WEF_Putting_Skills_First_2024.pdf`',
      timeline: [
        { label: 'Discovery', detail: 'Define task taxonomy, trust model, and payment rails.', duration: '4–6 weeks' },
        { label: 'MVP Demo Build', detail: 'Profiles + tasks + matching + escrow + disputes.', duration: '10–14 weeks' },
        { label: 'Pilot', detail: 'Seed supply/demand, validate pricing and quality signals.', duration: '12–20 weeks' },
        { label: 'Scale', detail: 'Expand categories, add verification partners, and compliance workflows.', duration: '20–40 weeks' },
      ],
    },
  },
  {
    id: '18',
    slug: 'autonomous-entertainment-worlds',
    name: 'Autonomous Entertainment Worlds',
    blurb: 'AI-generated movies, games, and interactive narratives that adapt to the user.',
    image: '/img/products/autonomous-entertainment.jpg',
    compatibility: 'Web / XR / Game Engines',
    release: 'Future / R&D',
    license: 'SaaS / Studio',
    tags: ['Generative AI', 'Interactive Narrative', 'XR'],
    docs: {
      paperWriting:
        '## Research framing\n\nAdaptive entertainment requires **generative creativity** plus **world consistency** and **interaction safety**.\n\nResearch on LLM-driven interactive fiction highlights a key engineering challenge: the game engine must represent state, actions, and constraints; generating actions dynamically requires careful tracking of preconditions/effects.\n\nXR co-authoring research explores multimodal, embodied story creation where users “direct” by manipulating scenes and characters.\n\n## Community creator economy\n\nYour “users as directors/producers” idea is a platform design question:\n\n- Versioning and remix lineage\n- Safety policies and content constraints\n- Evaluation of coherence and engagement\n\n## References\n\n- STORY2GAME (LLM generates interactive fiction actions + engine, 2025): `https://arxiv.org/pdf/2505.03547`\n- PlayWrite (XR co-authoring through play, CHI 2026): `https://arxiv.org/pdf/2603.02366`',
      mvpDemo:
        '## MVP demo scope\n\n- Generate a short interactive episode with stateful actions\n- Maintain coherence across branches (basic constraints)\n- Creator tools: remix, share, and publish with attribution\n\n## References\n\n- STORY2GAME: `https://arxiv.org/pdf/2505.03547`',
      ideaPitch:
        '## Pitch narrative\n\n### Problem\n\nEntertainment is static; audiences increasingly want participatory, personalized experiences.\n\n### Solution\n\nA generative world engine that produces interactive stories and experiences tailored to the user while preserving coherence.\n\n### Future/R&D\n\nLong-horizon consistency, safety constraints, and IP governance are key research frontiers.\n\n## References\n\n- PlayWrite (embodied co-authoring, 2026): `https://arxiv.org/pdf/2603.02366`',
      timeline: [
        { label: 'Discovery', detail: 'Define world model, safety policies, and creator economy rules.', duration: '6–10 weeks' },
        { label: 'MVP Demo Build', detail: 'Interactive episode generation + constraints + creator tools.', duration: '12–18 weeks' },
        { label: 'Pilot', detail: 'Creator beta with evaluation of coherence and engagement.', duration: '12–20 weeks' },
        { label: 'Scale', detail: 'Broader engines/XR integrations and governance expansions.', duration: '20–52 weeks' },
      ],
    },
  },
];

export const TRUSTED_LOGOS = [
  'AT&T',
  'AMERICAN AIRLINES',
  'WIPRO',
  'ACCENTURE',
  'DELOITTE',
  'IBM',
  'CAPGEMINI',
  'INFOSYS',
  'TCS',
  'HCL',
];

export const ROTATING_HEADINGS = [
  'AI & ML',
  'Web Apps',
  'Cybersecurity',
  'AI Hub',
  'RCM Services',
];

export const CONTACT = {
  email: 'info@cliffservice.com',
  careersEmail: 'careers@cliffservice.com',
  phone: '+44 330 133 4363',
  phoneUs: '+1 800 123 4567',
  office:
    'Pera Business Park, Nottingham Road, Melton Mowbray, LE13 0PB.',
};
