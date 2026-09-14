# cliffservices.com

The public marketing site for **Cliff Services Inc.** — React + TypeScript + Vite + Tailwind,
deployed on Vercel at [www.cliffservices.com](https://www.cliffservices.com).

## The other half

This repo is the front of the company: public, indexed, for people who have not met us yet.
The signed-in half lives in **[Cliff-Recruiter-Suite](https://github.com/AbhiGattineni/Cliff-Recruiter-Suite)**
and is served from `portal.cliffservices.com` on Firebase — staff open the recruiter suite there,
and consultants we have placed at a client file their timesheets.

**There is deliberately no sign-in on this site, and no link to the portal.** The portal address
is given to the people who need it. That is why there is no login page here, why the portal is
absent from `sitemap.xml`, and why nothing in the navbar or footer points at it — a marketing
site advertising an internal login is an invitation to everyone who was never meant to have one.

The two share a look but not a stylesheet: the portal has no Tailwind, so the palette in
`tailwind.config.js` here is restated as CSS custom properties there. **Change the brand colours
in one and change them in the other** — see `docs/PORTAL.md` in that repo.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # regenerates public/sitemap.xml (prebuild), then builds to dist/
npm run preview
```

`npm run sitemap` regenerates `public/sitemap.xml` on its own. Routes are derived from
`src/data/services.ts` and `src/data/site.ts`, so a new service or product page appears in the
sitemap without anyone editing XML. The 404 page is excluded (it is noindex), and so is the
portal, which is not part of this site at all.

## Layout

```
src/
├─ pages/       Home, ServiceDetail, ProductDetail, Careers, Legal, NotFound
├─ sections/    The Home page's sections (Hero, Services, Industries, …)
├─ components/  Navbar, Footer, CookieBanner, ScrollToTop
├─ data/        services.ts, site.ts — the content, including product long-form docs
└─ lib/seo.ts   Per-route <title>/<meta>/canonical, set on navigation
```

`vercel.json` rewrites every path to `/` so client-side routing survives a hard refresh.
