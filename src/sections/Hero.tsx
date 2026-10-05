import { ArrowUpRight } from 'lucide-react';

// A photographic hero, centred, the way the reference does it.
//
// The photograph is a1.webp, Sydney at dusk, which is one of the six offices
// rather than bought stock of someone pointing at a screen. It also happens to
// be the palette: the sky is the navy the rest of the page is built from and
// the building is lit in the gold of the logo. A scrim carries the type,
// heaviest at the top where the fixed header sits and at the bottom where the
// next section lifts over it.

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy-950">
      <img
        src="/img/a1.webp"
        alt=""
        width={1110}
        height={1022}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,15,34,0.88) 0%, rgba(8,15,34,0.42) 30%, rgba(8,15,34,0.34) 52%, rgba(8,15,34,0.72) 82%, rgba(8,15,34,0.96) 100%)',
        }}
      />

      <div className="container-x flex min-h-[32rem] flex-col items-center justify-center py-28 text-center sm:min-h-[36rem] sm:py-36">
        <p className="eyebrow-on-navy">Global IT solutions and services since 2008</p>

        <h1
          className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          style={{ textShadow: '0 2px 24px rgba(8,15,34,0.65)' }}
        >
          Technology, clinical and staffing services, delivered across six countries
        </h1>

        <p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100"
          style={{ textShadow: '0 1px 16px rgba(8,15,34,0.7)' }}
        >
          Technology projects, clinical and life-sciences work, healthcare revenue cycle management
          and professional staffing, through one global delivery model.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="btn-primary">
            Talk to us <ArrowUpRight size={16} />
          </a>
          <a href="#what-we-do" className="btn-on-navy">
            What we do
          </a>
        </div>
      </div>
    </section>
  );
}
