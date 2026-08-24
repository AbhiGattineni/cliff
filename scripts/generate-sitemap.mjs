/**
 * Generates public/sitemap.xml from the route data so the sitemap cannot drift
 * away from the site. Runs automatically via the `prebuild` npm script.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://www.cliffservices.com';

/** Pulls every `slug: '...'` out of a data module. */
function slugs(file) {
  const src = readFileSync(resolve(root, file), 'utf8');
  return [...src.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
}

const staticPaths = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/careers', priority: '0.8', changefreq: 'weekly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  { path: '/accessibility', priority: '0.3', changefreq: 'yearly' },
];

const entries = [
  ...staticPaths,
  ...slugs('src/data/services.ts').map((s) => ({
    path: `/services/${s}`,
    priority: '0.9',
    changefreq: 'monthly',
  })),
  ...slugs('src/data/site.ts').map((s) => ({
    path: `/products/${s}`,
    priority: '0.7',
    changefreq: 'monthly',
  })),
];

// /loginsignup and the 404 page are intentionally excluded, both are noindex.

const today = new Date().toISOString().slice(0, 10);
const body = entries
  .map(
    ({ path, priority, changefreq }) =>
      `  <url>\n    <loc>${ORIGIN}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join('\n');

writeFileSync(
  resolve(root, 'public/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
);

console.log(`sitemap.xml written with ${entries.length} URLs`);
