// Light or dark, chosen by the visitor and remembered.
//
// Light is the default, deliberately: this is a company site people land on
// from a search result or an email, and the dark treatment it used to ship
// with is a preference, not a starting point. The system setting is NOT
// consulted for that reason. Someone whose laptop is in dark mode has not
// asked this site to be dark, and a corporate site that renders differently
// for half its visitors is a support question waiting to happen.
//
// The class goes on <html> rather than <body> so Tailwind's `dark:` variants
// and the base styles in index.css both see it. Applying it before first paint
// is the job of the inline script in index.html. This module keeps it in sync
// afterwards.

export type Theme = 'light' | 'dark';

export const THEME_KEY = 'cliff:theme';

/** What was stored, or null when nothing has been chosen on this browser. */
export function storedTheme(): Theme | null {
  try {
    const v = localStorage.getItem(THEME_KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null; // private mode or blocked storage, so the default stands
  }
}

/** The theme to start in: whatever was chosen before, else light. */
export function initialTheme(): Theme {
  return storedTheme() ?? 'light';
}

/** Put the theme on the document, and remember it. */
export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* the choice lasts this session only */
  }
}
