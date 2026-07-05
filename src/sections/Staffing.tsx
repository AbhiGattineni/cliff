const APPROACH = [
  { icon: '🎯', title: 'Strategic Talent Mapping', body: "We meticulously analyze your organization's needs and culture to find candidates who will thrive in your environment." },
  { icon: '🧠', title: 'Skills-Based Matching', body: 'Structured screening and skills matching connect candidates to roles quickly and accurately.' },
  { icon: '🔍', title: 'Industry Expertise', body: 'With 18+ years of experience across sectors, we understand the nuances of specialized talent acquisition.' },
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

export default function Staffing() {
  return (
    <section id="staffing-solutions" className="relative">
      <div className="bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-500 py-10 text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
          A supporting capability
        </p>
        <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Talent Solutions</h2>
        <p className="mt-2 text-white/80">
          Scale your product and engineering teams with vetted specialists—contract,
          contract-to-hire, and permanent placements.
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

        </div>
      </div>
    </section>
  );
}
