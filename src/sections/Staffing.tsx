const APPROACH = [
  { icon: '🎯', title: 'Strategic Talent Mapping', body: "We meticulously analyze your organization's needs and culture to find candidates who will thrive in your environment." },
  { icon: '🧠', title: 'AI-Powered Matching', body: 'Our proprietary algorithms match candidates to positions with unprecedented accuracy and speed.' },
  { icon: '🔍', title: 'Industry Expertise', body: 'With 15+ years of experience across sectors, we understand the nuances of specialized talent acquisition.' },
  { icon: '🔄', title: 'Seamless Integration', body: 'Our placement specialists ensure smooth transitions, with comprehensive onboarding support for all new hires.' },
];

const CHALLENGES = [
  { icon: '👥', title: 'Talent Shortage', body: 'Access to our exclusive network of pre-vetted professionals across all major industries and specializations.' },
  { icon: '⏱️', title: 'Hiring Delays', body: 'Accelerated recruitment process that reduces time-to-hire by up to 62% compared to traditional methods.' },
  { icon: '🧩', title: 'Skill Gaps', body: 'Precision matching that ensures candidates have both technical skills and cultural alignment.' },
  { icon: '🔄', title: 'High Turnover', body: 'Advanced retention analytics that predict and prevent turnover before it happens.' },
  { icon: '📈', title: 'Scaling Challenges', body: 'Flexible workforce solutions that adapt to your growth needs, from project-based to permanent staffing.' },
  { icon: '💰', title: 'Budget Constraints', body: 'Cost-effective hiring models that provide premium talent without premium prices.' },
];

const HSE = [
  { icon: '🛡️', title: 'Safety First', body: 'Our certified hires meet rigorous safety standards across all industries.' },
  { icon: '🌱', title: 'Green Practices', body: 'Eco-conscious recruitment processes that reduce environmental impact.' },
  { icon: '📚', title: 'Skill Prep', body: 'Comprehensive training to prepare professionals for hazardous environments.' },
  { icon: '⚙️', title: 'Risk Control', body: 'Proactive foresight and planning to eliminate potential workplace risks.' },
  { icon: '🌿', title: 'Sustainability', body: "Candidates who align with your organization's green initiatives and goals." },
  { icon: '❤️', title: 'Wellness Core', body: 'Holistic support systems that promote team health and vitality.' },
];

export default function Staffing() {
  return (
    <section id="staffing-solutions" className="relative">
      <div className="bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-500 py-10 text-center text-white">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Staffing Revolutionized</h2>
        <p className="mt-2 text-white/80">
          Hire faster with vetted IT talent—contract, contract-to-hire, and permanent placements.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/90">
            Typical turnaround: 48-hour shortlist
          </span>
          <span className="text-xs text-white/80">
            for standard roles (specialized searches may vary)
          </span>
        </div>
      </div>

      <div className="bg-white py-20 text-gray-900">
        <div className="container-x">
          <div className="text-center">
            <p className="eyebrow !text-brand-600">Our Unique Approach</p>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              We combine specialized recruiting, domain expertise, and structured screening to
              deliver high-signal candidates who ramp quickly and stay aligned to your goals.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((a) => (
              <div key={a.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="text-3xl">{a.icon}</div>
                <h3 className="mt-3 text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{a.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="eyebrow !text-brand-600">Our Approach</p>
            <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              Challenges We Transform
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Turning staffing challenges into opportunities with innovative, tailored solutions.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c) => (
              <div key={c.title} className="rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6">
                <div className="text-3xl">{c.icon}</div>
                <h4 className="mt-3 text-lg font-bold">{c.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 rounded-3xl bg-gradient-to-br from-ink-900 to-brand-800 p-10 text-white">
            <div className="grid gap-10 lg:grid-cols-[auto_1fr] items-center">
              <div className="relative mx-auto grid h-48 w-48 place-items-center rounded-full border-4 border-white/20">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 animate-spin-slow" />
                <div className="text-center">
                  <p className="font-display text-4xl font-bold">HSE</p>
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Health · Safety · Env
                  </p>
                </div>
              </div>
              <div>
                <p className="eyebrow">Our HSE Commitment</p>
                <h3 className="mt-2 font-display text-3xl font-bold">
                  Integrated into every placement
                </h3>
                <p className="mt-3 max-w-xl text-white/70">
                  We integrate health, safety, and environmental sustainability into every aspect of
                  our staffing solutions.
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HSE.map((h) => (
                <div key={h.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-2xl">{h.icon}</div>
                  <h4 className="mt-2 font-semibold">{h.title}</h4>
                  <p className="mt-1 text-sm text-white/70">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
