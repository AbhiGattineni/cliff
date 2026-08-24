import { useEffect } from 'react';

/**
 * Canonical origin for the site. All four domains are attached in Vercel, but
 * cliff-services.com and the apex variants 308-redirect here, so this is the
 * address search engines should be pointed at.
 */
export const SITE_ORIGIN = 'https://www.cliffservices.com';
export const SITE_NAME = 'Cliff Services Inc.';

type Seo = {
  /** Page title, without the site-name suffix. */
  title: string;
  description: string;
  /** Route path beginning with "/", used to build the canonical URL. */
  path: string;
  /** Keep the page out of search results (login, error pages). */
  noindex?: boolean;
};

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets per-route title, description, canonical and social tags.
 *
 * Without this every route inherited the single title and description declared
 * in index.html, which made ~35 distinct pages look like near-duplicates to
 * search engines.
 */
export function useSeo({ title, description, path, noindex = false }: Seo) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = `${SITE_ORIGIN}${path}`;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    upsertCanonical(url);

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
  }, [title, description, path, noindex]);
}
