// Industries, as a centred header over a plain grid.
//
// Each one used to be a card with its own icon tile and a sentence of copy.
// Together they filled a screen to say "we work in regulated and enterprise
// sectors". The names are the information, so they carry the section and the
// sentence underneath stays out of their way.

const INDUSTRIES = [
  { name: 'Banking, financial services and insurance', body: 'Secure data, cloud and delivery.' },
  { name: 'Healthcare and life sciences', body: 'HIPAA-aligned RCM, clinical data, health platforms.' },
  { name: 'Energy and utilities', body: 'SAP and data engineering for utilities operations.' },
  { name: 'Telecommunications', body: 'Cloud, data and quality engineering for networks.' },
  { name: 'Manufacturing', body: 'SAP, analytics and automation across the value chain.' },
  { name: 'Retail', body: 'Commerce platforms, data and AI for consumer brands.' },
  { name: 'Public sector', body: 'Compliant, secure delivery for government programs.' },
];

export default function Industries() {
  return (
    <section id="industries" className="band-tint band-lift py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Industries</p>
          <h2 className="h-section mt-4">Where the work lands</h2>
          <p className="lede mt-5">
            Software, data, security and specialist talent for regulated and enterprise sectors.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <li key={i.name} className="border-t-2 border-gold-500/60 pt-5">
              <h3 className="font-display text-base font-semibold text-navy-900 dark:text-white">
                {i.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {i.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
