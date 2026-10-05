import { HOMEPAGE_STATS, LOCATIONS } from '../data/site';

// The facts a buyer actually checks, on one line each.
//
// This is what is left of five sections (stats, about, certifications, tech
// partnerships and credentials) which between them said "since 2008", "six
// countries" and "certified" at considerable length. The two certifications
// that genuinely differentiate the company are named here. The rest were
// either in progress or a logo wall.

const CERTIFIED = [
  {
    name: 'Disability:IN DOBE',
    detail: 'Certified Disability-Owned Business Enterprise, International track',
  },
  { name: 'MSDUK', detail: 'Minority Supplier Development UK, recognized diversity supplier' },
];

export default function Proof() {
  return (
    <section id="company" className="band border-y border-slate-200 py-20 sm:py-24 dark:border-white/10">
      <div className="container-x">
        <h2 className="h-section">The company</h2>

        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HOMEPAGE_STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                {s.label}
              </dd>
              <dd className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.detail}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-10 border-t border-slate-200 pt-10 sm:grid-cols-2 dark:border-white/10">
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Certified
            </h3>
            <ul className="mt-4 space-y-3">
              {CERTIFIED.map((c) => (
                <li key={c.name} className="text-sm">
                  <span className="block font-semibold text-slate-900 dark:text-white">{c.name}</span>
                  <span className="text-slate-600 dark:text-slate-400">{c.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Offices
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {LOCATIONS.map((l) => (
                <li key={l.country} className="text-sm">
                  <span className="font-semibold text-slate-900 dark:text-white">{l.country}</span>
                  <span className="text-slate-600 dark:text-slate-400"> · {l.city}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
