import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/site';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return PRODUCTS as any[];
    return (PRODUCTS as any[]).filter((p) => {
      const hay = `${p.name} ${p.blurb} ${(p.tags ?? []).join(' ')}`.toLowerCase();
      return hay.includes(q);
    });
  }, [q]);

  const featured = (filtered[0] ?? (PRODUCTS as any[])[0]) as any;

  const navigate = useNavigate();

  return (
    <section id="products" className="relative bg-ink-900 py-28 lg:py-32 min-h-[200vh]">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Products</p>
            <h2 className="mt-3 font-display text-4xl font-black text-white md:text-5xl">
              Product <span className="text-gradient">Catalog</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Explore our <span className="text-white/90">live products</span> and{' '}
              <span className="text-white/90">innovation pipeline</span> in one place. Offerings
              tagged <span className="text-brand-300">Future / R&amp;D</span> are forward-looking
              concepts and research-led initiatives—they sit alongside staffing and consulting as
              part of how we invest in what&apos;s next, not as a substitute for the delivery work
              we run for clients today.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="max-w-md text-sm text-white/60">
            Self-engineered platforms that extend the expertise of our services practice into
            packaged, repeatable solutions.
            </p>
            <div className="w-full md:w-[360px]">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products (name, tags, keywords)…"
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/20"
              />
              <p className="mt-2 text-xs text-white/40">
                Showing <span className="text-white/70">{filtered.length}</span> of{' '}
                <span className="text-white/70">{PRODUCTS.length}</span>
              </p>
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-sm text-white/70">
            No products match “<span className="text-white">{query}</span>”.
          </div>
        ) : (
          <>
            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="h-full w-full object-cover max-lg:aspect-[16/10] lg:min-h-[420px]"
                  />
                </div>
                <div className="p-7 md:p-10">
                  <p className="text-xs uppercase tracking-widest text-brand-300">Featured product</p>
                  <h3 className="mt-3 font-display text-3xl font-black text-white md:text-4xl">
                    {featured.name}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">{featured.blurb}</p>

                  <dl className="mt-7 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-white/50">Compatibility</dt>
                      <dd className="mt-1 text-white">{featured.compatibility}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-white/50">Release</dt>
                      <dd className="mt-1 text-white">{featured.release}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-white/50">License</dt>
                      <dd className="mt-1 text-white">{featured.license}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {(featured.tags ?? []).slice(0, 6).map((t: string) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      className="btn-primary"
                      onClick={() => navigate(`/products/${featured.slug}`)}
                    >
                      Explore Product <span className="ml-1">→</span>
                    </button>
                    <button
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/80 hover:bg-white/10"
                      onClick={() => {
                        const el = document.getElementById('product-grid');
                        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      Browse all
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-end justify-between gap-4">
                <h3 className="font-display text-2xl font-bold text-white">All products</h3>
                <p className="text-xs text-white/40">
                  Tip: use search to filter quickly.
                </p>
              </div>

              <div
                id="product-grid"
                className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
              >
                {(filtered as any[]).map((prod) => (
                  <button
                    key={prod.slug}
                    onClick={() => navigate(`/products/${prod.slug}`)}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition hover:-translate-y-0.5 hover:bg-white/[0.05]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                        <span className="rounded-full bg-black/40 px-3 py-1 text-xs text-white/80">
                          {prod.release}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-white/80">
                          View <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                            Product {prod.id}
                          </p>
                          <p className="mt-2 font-display text-xl font-bold text-white">
                            {prod.name}
                          </p>
                        </div>
                      </div>

                      <p className="mt-2 text-sm text-white/60 line-clamp-2">{prod.blurb}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {(prod.tags ?? []).slice(0, 4).map((t: string) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/75"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
