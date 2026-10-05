// Industries, as a list rather than seven icon cards.
//
// Each one was a card with its own icon tile and a sentence of copy. Together
// they filled a screen to say "we work in regulated and enterprise sectors".
// The names are the information.

const INDUSTRIES = [
  { name: 'Banking, financial services & insurance', body: 'Secure data, cloud and delivery.' },
  { name: 'Healthcare & life sciences', body: 'HIPAA-aligned RCM, clinical data, health platforms.' },
  { name: 'Energy & utilities', body: 'SAP and data engineering for utilities operations.' },
  { name: 'Telecommunications', body: 'Cloud, data and quality engineering for networks.' },
  { name: 'Manufacturing', body: 'SAP, analytics and automation across the value chain.' },
  { name: 'Retail', body: 'Commerce platforms, data and AI for consumer brands.' },
  { name: 'Public sector', body: 'Compliant, secure delivery for government programs.' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-24">
      <div className="container-x">
        <h2 className="h-section">Industries</h2>
        <p className="lede mt-4 max-w-2xl">
          Software, data, security and specialist talent for regulated and enterprise sectors.
        </p>

        <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <li key={i.name} className="border-t border-slate-200 pt-4 dark:border-white/10">
              <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                {i.name}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{i.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
