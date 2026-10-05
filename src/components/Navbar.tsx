import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

// Five links, matching the five sections the home page now has. The old nav
// pointed at #about and #certifications, which no longer exist, and its
// primary button offered a "Capability Statement" that was an anchor to the
// contact form rather than a download.

const LINKS = [
  { href: '/#what-we-do', label: 'What we do' },
  { href: '/#company', label: 'Company' },
  { href: '/#industries', label: 'Industries' },
  { href: '/careers', label: 'Careers' },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const className =
    'text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white';
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
  // part-way down the page should draw the border immediately, not a frame
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
  // rather than in an effect — an effect here renders the menu open for a
  // frame on the new page before closing it.
  const [lastKey, setLastKey] = useState(location.key);
  if (location.key !== lastKey) {
    setLastKey(location.key);
    setOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-white/90 backdrop-blur transition dark:bg-ink-900/90 ${
        scrolled ? 'border-b border-slate-200 dark:border-white/10' : 'border-b border-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/img/logo.jpg"
            alt=""
            className="h-8 w-8 rounded-md object-cover"
          />
          <span className="font-display text-base font-semibold text-slate-900 dark:text-white">
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
          <a href="/#contact" className="hidden btn-primary !px-4 !py-2 sm:inline-flex">
            Talk to us
          </a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden dark:border-white/15 dark:text-slate-200"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden dark:border-white/10 dark:bg-ink-900">
          <div className="container-x flex flex-col gap-4 py-5">
            {LINKS.map((l) => (
              <NavLink key={l.href} {...l} onClick={() => setOpen(false)} />
            ))}
            <a href="/#contact" className="btn-primary mt-1 self-start" onClick={() => setOpen(false)}>
              Talk to us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
