import { Building2, Globe2, Landmark, ShieldCheck } from 'lucide-react';
import { HOMEPAGE_STATS, LOCATIONS } from '../data/site';

// The numbers, as the cards the reference leads with.
//
// This is what is left of five sections, stats, about, certifications, tech
// partnerships and credentials, which between them said "since 2008", "six
// countries" and "certified" at considerable length. The two certifications
// that genuinely differentiate the company are named. The rest were either in
// progress or a logo wall.
//
// The numbers are gold on a light card, which is why they use gold.ink rather
// than the brand gold: #d4af36 reads at 2.1:1 on white and fails even as
// display type.

const ICONS = [Landmark, Globe2, Building2, ShieldCheck];

const CERTIFIED = [
  {
    name: 'Disability:IN DOBE',
    detail: 'Certified Disability-Owned Business Enterprise, International track',
  },
  { name: 'MSDUK', detail: 'Minority Supplier Development UK, recognized diversity supplier' },
];

export default function Proof() {
  return (
    <section id="company" className="band-light py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The company</p>
          <h2 className="h-section mt-4">Six countries, one delivery model, since 2008</h2>
        </div>

        <dl className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HOMEPAGE_STATS.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={s.label} className="stat-card">
                <Icon size={24} className="text-[color:theme(colors.gold.ink)] dark:text-gold-400" />
                <dt className="mt-6 font-display text-3xl font-bold tracking-tight text-[color:theme(colors.gold.ink)] dark:text-gold-400">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-navy-900 dark:text-white">
                  {s.label}
                </dd>
                <dd className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {s.detail}
                </dd>
              </div>
            );
          })}
        </dl>

        <div className="mt-14 grid gap-10 border-t border-slate-200 pt-10 sm:grid-cols-2 dark:border-white/10">
          <div>
            <h3 className="eyebrow">Certified</h3>
            <ul className="mt-5 space-y-4">
              {CERTIFIED.map((c) => (
                <li key={c.name} className="text-sm">
                  <span className="block font-semibold text-navy-900 dark:text-white">{c.name}</span>
                  <span className="text-slate-600 dark:text-slate-400">{c.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">Offices</h3>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {LOCATIONS.map((l) => (
                <li key={l.country} className="text-sm">
                  <span className="font-semibold text-navy-900 dark:text-white">{l.country}</span>
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
