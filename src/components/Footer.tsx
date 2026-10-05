import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { CONTACT, LOCATIONS } from '../data/site';

// Three columns and a legal line.
//
// Gone with the rest: a newsletter form whose submit handler called
// preventDefault and nothing else — it collected addresses into the void — and
// four navigation links (#about, #certifications, #credentials, #services)
// pointing at sections that no longer exist. A footer link that scrolls
// nowhere is worse than one that isn't there.

const Icon = ({ path, ...p }: { path: string } & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden {...p}>
    <path d={path} />
  </svg>
);
const TwitterIcon = () => <Icon path="M18.244 2H21l-6.52 7.44L22 22h-6.828l-4.77-5.77L4.8 22H2.04l6.97-7.95L2 2h6.914l4.31 5.34L18.244 2zm-1.2 18h1.65L7.02 4H5.27l11.775 16z" />;
const LinkedInIcon = () => <Icon path="M20.45 20.45h-3.56V14.9c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.64H9.37V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />;
const FacebookIcon = () => <Icon path="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />;

const SOCIAL = [
  { href: 'https://www.linkedin.com/company/cliff-services-inc', label: 'LinkedIn', Ico: LinkedInIcon },
  { href: 'https://x.com/cliffservices9', label: 'X', Ico: TwitterIcon },
  { href: 'https://www.facebook.com/people/Cliff-Services/61552332898632', label: 'Facebook', Ico: FacebookIcon },
];

const LEGAL = [
  { to: '/privacy', label: 'Privacy' },
  { to: '/cookies', label: 'Cookies' },
  { to: '/terms', label: 'Terms' },
  { to: '/accessibility', label: 'Accessibility' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-ink-900">
      <div className="container-x py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src="/img/logo.jpg" alt="" className="h-8 w-8 rounded-md object-cover" />
              <span className="font-display text-base font-semibold text-slate-900 dark:text-white">
                Cliff Services
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Technology projects, clinical and life-sciences services, healthcare revenue cycle
              management and professional staffing, across six countries since 2008.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIAL.map(({ href, label, Ico }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  <Ico />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/#what-we-do" className="link-quiet">What we do</a></li>
              <li><a href="/#company" className="link-quiet">The company</a></li>
              <li><a href="/#industries" className="link-quiet">Industries</a></li>
              <li><Link to="/careers" className="link-quiet">Careers</Link></li>
              <li><a href="/#contact" className="link-quiet">Contact</a></li>
            </ul>

            <h4 className="mt-8 text-sm font-semibold text-slate-900 dark:text-white">Offices</h4>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              {LOCATIONS.map((l) => l.country).join(' · ')}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Capabilities</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="link-quiet">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="link-quiet">{CONTACT.email}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.careersEmail}`} className="link-quiet">{CONTACT.careersEmail}</a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="link-quiet">
                  {CONTACT.phone}
                </a>
                <span className="text-slate-400 dark:text-slate-500"> · US</span>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneUk.replace(/\s/g, '')}`} className="link-quiet">
                  {CONTACT.phoneUk}
                </a>
                <span className="text-slate-400 dark:text-slate-500"> · UK</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">{CONTACT.office}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 dark:border-white/10">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            Quality &amp; security certification program underway: ISO 9001, ISO 27001, SOC 2 Type II.
          </p>
          <div className="mt-4 flex flex-col items-start justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:items-center dark:text-slate-500">
            <p>© 2008–2026 Cliff Services Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              {LEGAL.map((l) => (
                <Link key={l.to} to={l.to} className="transition hover:text-slate-900 dark:hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
