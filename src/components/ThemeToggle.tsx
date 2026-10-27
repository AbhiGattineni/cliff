import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import type { Theme } from '../lib/theme';
import { initialTheme, applyTheme } from '../lib/theme';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document === 'undefined' ? 'light' : initialTheme()
  );

  // The inline script in index.html has already set the class before paint;
  // this keeps the two in step once React takes over.
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const next = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-white/15 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white ${className}`}
    >
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
