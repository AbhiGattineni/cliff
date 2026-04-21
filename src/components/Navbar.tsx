import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#success-stories', label: 'Product stories' },
  { href: '/#services', label: 'Services' },
  { href: '/#staffing-solutions', label: 'Staffing Solutions' },
  { href: '/#products', label: 'Products' },
  { href: '/careers', label: 'Careers' },
  { href: '/#contact', label: 'Contact' },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const className = 'text-sm text-white/70 hover:text-white transition';
  if (href.startsWith('/#')) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link to={href} className={className}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled
          ? 'bg-ink-900/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/img/logo.jpg"
            alt="Cliff Services"
            className="h-8 w-8 rounded-md object-cover"
          />
          <span className="font-display text-lg font-bold text-white">
            Cliff <span className="text-brand-400">Services</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/loginsignup" className="hidden sm:inline-flex btn-primary !py-2 !px-4">
            Get Started
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg border border-white/10 text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-ink-900/95 backdrop-blur">
          <div className="container-x py-4 flex flex-col gap-2">
            {LINKS.map((l) => (
              <NavLink key={l.href} {...l} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
