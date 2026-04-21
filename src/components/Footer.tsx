import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Icon = ({ path, ...p }: { path: string } & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...p}>
    <path d={path} />
  </svg>
);
const TwitterIcon = () => <Icon path="M18.244 2H21l-6.52 7.44L22 22h-6.828l-4.77-5.77L4.8 22H2.04l6.97-7.95L2 2h6.914l4.31 5.34L18.244 2zm-1.2 18h1.65L7.02 4H5.27l11.775 16z" />;
const LinkedInIcon = () => <Icon path="M20.45 20.45h-3.56V14.9c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.64H9.37V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />;
const FacebookIcon = () => <Icon path="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />;
import { services } from '../data/services';
import { CONTACT } from '../data/site';

const FLAGS = ['UK', 'USA', 'Canada', 'Australia', 'India', 'Ireland'];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src="/img/logo.jpg" alt="" className="h-8 w-8 rounded-md object-cover" />
              <span className="font-display text-lg font-bold text-white">
                Cliff <span className="text-brand-400">Services</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/60">
              A global technology company delivering IT Staffing, Consulting Services, and
              Innovative Products since 2008.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://x.com/cliffservices9" aria-label="Twitter" className="p-2 rounded-lg border border-white/10 hover:bg-white/5">
                <TwitterIcon />
              </a>
              <a href="https://www.linkedin.com/company/cliff-services-inc" aria-label="LinkedIn" className="p-2 rounded-lg border border-white/10 hover:bg-white/5">
                <LinkedInIcon />
              </a>
              <a href="https://www.facebook.com/people/Cliff-Services/61552332898632" aria-label="Facebook" className="p-2 rounded-lg border border-white/10 hover:bg-white/5">
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Stay Updated</h4>
            <p className="mt-3 text-sm text-white/60">
              Join our newsletter for the latest updates on services, industry insights, and
              exclusive offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center rounded-full border border-white/10 bg-white/5 p-1"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-white/40"
              />
              <button className="btn-primary !py-2 !px-4">Subscribe →</button>
            </form>

            <h4 className="mt-8 text-sm font-semibold text-white">Navigation</h4>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/70">
              <li><a href="/#home" className="hover:text-white">Home</a></li>
              <li><a href="/#about" className="hover:text-white">About</a></li>
              <li><a href="/#services" className="hover:text-white">Services</a></li>
              <li><a href="/#staffing-solutions" className="hover:text-white">Staffing</a></li>
              <li><a href="/#products" className="hover:text-white">Products</a></li>
              <li><a href="/#success-stories" className="hover:text-white">Product stories</a></li>
              <li><a href="/#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Our Services</h4>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-white/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact Us</h4>
            <ul className="mt-3 space-y-4 text-sm text-white/70">
              <li>
                <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                  <Mail size={14} /> Email Us
                </div>
                <a href={`mailto:${CONTACT.email}`} className="mt-1 inline-block text-white hover:text-brand-300">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                  <Phone size={14} /> Call Us
                </div>
                <a href={`tel:${CONTACT.phone}`} className="mt-1 inline-block text-white hover:text-brand-300">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                  <MapPin size={14} /> Main Office
                </div>
                <p className="mt-1 text-white/80">{CONTACT.office}</p>
              </li>
            </ul>

            <h4 className="mt-8 text-sm font-semibold text-white">Global Presence</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {FLAGS.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Cliff Services. All rights reserved. Crafted with precision.</p>
          <div className="flex gap-5">
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
