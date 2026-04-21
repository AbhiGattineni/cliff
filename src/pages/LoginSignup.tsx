import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.21 9.14 7.66 10.62.56.1.77-.24.77-.54v-1.9c-3.12.68-3.78-1.5-3.78-1.5-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.49-.28-5.11-1.25-5.11-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15.9-.25 1.87-.37 2.83-.38.96.01 1.93.13 2.83.38 2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.62 5.27-5.12 5.55.4.34.76 1.02.76 2.06v3.05c0 .3.2.65.78.54 4.44-1.48 7.65-5.67 7.65-10.62C23.25 5.48 18.27.5 12 .5z" />
  </svg>
);

export default function LoginSignup() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  return (
    <section className="relative min-h-screen bg-ink-900 pt-24 pb-20">
      <div className="absolute inset-0 -z-10 bg-grid-fade" />
      <div className="container-x grid gap-10 lg:grid-cols-2 items-center">
        <div className="hidden lg:block">
          <p className="eyebrow">Members</p>
          <h1 className="mt-3 font-display text-5xl font-extrabold text-white">
            Welcome to <span className="text-gradient">Cliff Services</span>
          </h1>
          <p className="mt-4 max-w-md text-white/70">
            Access your dashboard, manage engagements and track deliverables — all in one place.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/70">
            <li>✓ Project delivery dashboards</li>
            <li>✓ Invoice and SOW access</li>
            <li>✓ 24/7 support portal</li>
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
          <div className="flex rounded-full bg-white/5 p-1">
            {(['login', 'signup'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 rounded-full py-2 text-sm font-semibold transition ${
                  mode === m ? 'bg-gradient-to-r from-brand-500 to-indigo-500 text-white' : 'text-white/70'
                }`}
              >
                {m === 'login' ? 'Log In' : 'Sign Up'}
              </button>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
            {mode === 'signup' && (
              <label className="block">
                <span className="text-sm text-white/70">Full name</span>
                <input type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-brand-400" />
              </label>
            )}
            <label className="block">
              <span className="text-sm text-white/70">Email</span>
              <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-brand-400" />
            </label>
            <label className="block">
              <span className="text-sm text-white/70">Password</span>
              <input type="password" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-brand-400" />
            </label>
            <button className="btn-primary w-full">
              {mode === 'login' ? 'Log In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3 text-xs text-white/40">
            <span className="h-px flex-1 bg-white/10" /> OR <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="mt-4 grid gap-2">
            <button className="btn-ghost w-full"><Mail size={16} /> Continue with Google</button>
            <button className="btn-ghost w-full"><GithubIcon /> Continue with GitHub</button>
          </div>

          <p className="mt-6 text-center text-xs text-white/50">
            By continuing you agree to our{' '}
            <Link to="/terms" className="underline hover:text-white">Terms</Link> &{' '}
            <Link to="/privacy" className="underline hover:text-white">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
