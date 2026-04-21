import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronRight, FileText, Presentation, Rocket, Milestone } from 'lucide-react';
import { PRODUCTS } from '../data/site';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type TimelineItem = { label: string; detail: string; duration: string };
type Product = (typeof PRODUCTS)[number] & {
  slug: string;
  docs?: {
    paperWriting?: string;
    mvpDemo?: string;
    ideaPitch?: string;
    timeline?: TimelineItem[];
  };
};

const TABS = ['Paper Writing', 'MVP Demo', 'Idea Pitch Overview', 'Timeline'] as const;
type Tab = (typeof TABS)[number];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => (p as Product).slug === slug) as Product | undefined;
  const [tab, setTab] = useState<Tab>('Paper Writing');

  if (!product) return <Navigate to="/#products" replace />;

  const related = PRODUCTS.filter((p) => (p as Product).slug !== product.slug).slice(0, 3) as Product[];
  const docs = product.docs ?? {};

  const tabIcon = useMemo(() => {
    switch (tab) {
      case 'Paper Writing':
        return FileText;
      case 'MVP Demo':
        return Rocket;
      case 'Idea Pitch Overview':
        return Presentation;
      case 'Timeline':
        return Milestone;
      default:
        return FileText;
    }
  }, [tab]);

  const body = useMemo(() => {
    const empty = (
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-10">
        <p className="text-sm text-gray-700">
          This section hasn’t been populated with product-specific content yet.
        </p>
        <p className="mt-3 text-sm text-gray-600">
          Add it under <span className="font-mono">docs</span> for <span className="font-semibold">{product.name}</span> in{' '}
          <span className="font-mono">src/data/site.ts</span>.
        </p>
      </div>
    );

    if (tab === 'Timeline') {
      const t = docs.timeline ?? [];
      if (t.length === 0) return empty;
      return (
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-10">
          <ol className="space-y-4 border-l border-gray-200 pl-6">
            {t.map((x, i) => (
              <li key={`${x.label}-${i}`} className="relative">
                <span className="absolute -left-[29px] top-0.5 grid h-6 w-6 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold">{x.label}</p>
                  <p className="text-xs text-gray-500">{x.duration}</p>
                </div>
                <p className="mt-1 text-gray-700">{x.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      );
    }

    const text =
      tab === 'Paper Writing'
        ? docs.paperWriting
        : tab === 'MVP Demo'
          ? docs.mvpDemo
          : docs.ideaPitch;

    if (!text || text.trim().length === 0) return empty;

    return (
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-[15px] leading-7 text-gray-800">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-0 mb-3 text-2xl font-bold tracking-tight text-gray-900">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-6 mb-2 text-xl font-semibold tracking-tight text-gray-900">{children}</h3>
                ),
                p: ({ children }) => <p className="my-3 text-gray-800">{children}</p>,
                ul: ({ children }) => <ul className="my-4 list-disc space-y-2 pl-6 text-gray-800">{children}</ul>,
                ol: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-6 text-gray-800">{children}</ol>,
                li: ({ children }) => <li className="pl-1">{children}</li>,
                strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                hr: () => <hr className="my-6 border-gray-200" />,
                a: ({ children, href }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="break-words font-medium text-brand-700 underline-offset-4 hover:underline"
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-[13px] text-gray-900">
                    {children}
                  </code>
                ),
              }}
            >
              {text}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }, [docs.ideaPitch, docs.mvpDemo, docs.paperWriting, docs.timeline, product.name, tab]);

  return (
    <>
      <section className="relative bg-ink-900 pt-28 pb-10 text-white">
        <div className="absolute inset-0 -z-10 bg-grid-fade" />
        <div className="container-x">
          <Link to="/#products" className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white">
            <ArrowLeft size={14} /> Back to Products
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
            <div>
              <p className="eyebrow">Product</p>
              <h1 className="mt-3 font-display text-4xl font-extrabold text-gradient md:text-6xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-xl text-white/70">{product.blurb}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <dl className="mt-4 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-white/50">Compatibility</dt>
                  <dd className="mt-1 text-white/90">{product.compatibility}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-white/50">Release</dt>
                  <dd className="mt-1 text-white/90">{product.release}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-widest text-white/50">License</dt>
                  <dd className="mt-1 text-white/90">{product.license}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-gray-900">
        <div className="container-x">
          <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`w-full rounded-full px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                  tab === t
                    ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow'
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-3">
              {(() => {
                const Icon = tabIcon;
                return <Icon className="text-brand-600" size={18} />;
              })()}
              <h2 className="font-display text-2xl font-bold">{tab}</h2>
            </div>
            <div className="mt-5">{body}</div>
          </div>

          {related.length > 0 && (
            <div className="mt-14">
              <h3 className="font-display text-2xl font-bold">More products</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/products/${p.slug}`}
                    className="group rounded-2xl border border-gray-100 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">Product</p>
                    <p className="mt-2 font-bold">{p.name}</p>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">{p.blurb}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-brand-600 group-hover:text-brand-700">
                      View details <ChevronRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

