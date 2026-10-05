import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

// A navy bar in both themes, the way the reference keeps one.
//
// Always solid rather than transparent at the top. Every page here opens on a
// dark hero today, but a transparent header is a trap the moment one does not,
// and a brand bar that changes colour as you scroll is movement for its own
// sake. Four links, matching the four sections the home page has, plus the one
// button that matters.

const LINKS = [
  { href: '/#what-we-do', label: 'What we do' },
  { href: '/#company', label: 'Company' },
  { href: '/#industries', label: 'Industries' },
  { href: '/careers', label: 'Careers' },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const className = 'text-sm font-medium text-slate-200 transition hover:text-gold-400';
  if (href.startsWith('/#')) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {label}
      </a>
    );
  }
  return (
    <Link to={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  // Read once at mount rather than setting state inside the effect: a reload
  // part-way down the page should draw the shadow immediately, not a frame
  // later.
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 10
  );
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu when the route changes, adjusted during render
  // rather than in an effect. An effect here renders the menu open for a
  // frame on the new page before closing it.
  const [lastKey, setLastKey] = useState(location.key);
  if (location.key !== lastKey) {
    setLastKey(location.key);
    setOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-navy-900 transition ${
        scrolled ? 'shadow-lg shadow-navy-950/30' : ''
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/img/logo.jpg" alt="" className="h-8 w-8 rounded-md object-cover" />
          <span className="font-display text-base font-semibold text-white">Cliff Services</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/#contact"
            className="hidden items-center gap-1.5 rounded-full border border-gold-500/70 px-4 py-1.5 text-sm font-semibold text-gold-400 transition hover:bg-gold-500 hover:text-navy-950 sm:inline-flex"
          >
            Talk to us <ArrowUpRight size={14} />
          </a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-white/20 p-2 text-white lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 lg:hidden">
          <div className="container-x flex flex-col gap-4 py-5">
            {LINKS.map((l) => (
              <NavLink key={l.href} {...l} onClick={() => setOpen(false)} />
            ))}
            <a href="/#contact" className="btn-primary mt-1 self-start" onClick={() => setOpen(false)}>
              Talk to us <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
