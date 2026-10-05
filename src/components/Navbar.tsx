import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

// The header follows the theme, because it is the only part of the page that
// is always on screen.
//
// It was navy in both themes, to match the reference. So were the hero, the
// feature bands and the footer, which left the toggle changing nothing above
// the fold: the first viewport was pixel-identical in light and dark and the
// switch read as broken. A control that appears to do nothing is worse than no
// control.
//
// Solid rather than transparent at the top. Every page here opens on a dark
// hero today, but a transparent header is a trap the moment one does not.

const LINKS = [
  { href: '/#what-we-do', label: 'What we do' },
  { href: '/#company', label: 'Company' },
  { href: '/#industries', label: 'Industries' },
  { href: '/careers', label: 'Careers' },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const className =
    'text-sm font-medium text-slate-700 transition hover:text-[color:theme(colors.gold.ink)] dark:text-slate-200 dark:hover:text-gold-400';
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
      className={`fixed inset-x-0 top-0 z-40 border-b bg-white/95 backdrop-blur transition dark:bg-navy-900 ${
        scrolled
          ? 'border-slate-200 shadow-sm dark:border-white/10 dark:shadow-lg dark:shadow-navy-950/30'
          : 'border-transparent dark:border-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/img/logo.jpg" alt="" className="h-8 w-8 rounded-md object-cover" />
          <span className="font-display text-base font-semibold text-navy-900 dark:text-white">
            Cliff Services
          </span>
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
            className="hidden items-center gap-1.5 rounded-full bg-gold-500 px-4 py-1.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400 sm:inline-flex dark:border dark:border-gold-500/70 dark:bg-transparent dark:text-gold-400 dark:hover:bg-gold-500 dark:hover:text-navy-950"
          >
            Talk to us <ArrowUpRight size={14} />
          </a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-slate-200 p-2 text-navy-900 lg:hidden dark:border-white/20 dark:text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden dark:border-white/10 dark:bg-navy-900">
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
