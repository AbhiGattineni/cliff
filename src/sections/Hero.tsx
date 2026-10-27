import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Globe,
  ShieldCheck,
  Users,
} from 'lucide-react';

const STATS = [
  { label: '6 Countries', Icon: Globe },
  { label: 'Since 2008', Icon: CalendarDays },
  { label: 'Global Delivery', Icon: Users },
  { label: 'Trusted Partner', Icon: ShieldCheck },
];

const fadeLeft = 'linear-gradient(90deg, transparent 0%, #000 9%, #000 100%)';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy-950"
    >
      {/* DESKTOP globe: big, pinned to the right edge, never stretched or cut sideways */}
      <img
        src="/img/global-offices.png"
        alt=""
        width={1110}
        height={1022}
        fetchPriority="high"
        className="pointer-events-none absolute right-0 top-1/2 -z-20 hidden h-auto -translate-y-1/2 select-none lg:block"
        style={{
          width: 'min(58%, calc((100vh - 4rem) * 1.5))',
          maskImage: fadeLeft,
          WebkitMaskImage: fadeLeft,
        }}
      />

      {/* Dark fade at the bottom so the stats row is readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent" />

      <div className="container-x relative flex flex-col pb-16 lg:pb-20">
        {/* Text column (left) */}
        <div className="flex items-center pt-20 sm:pt-24 lg:min-h-[600px] lg:pt-24">
        <div className="w-full max-w-xl lg:-ml-12 lg:max-w-md xl:-ml-16 xl:max-w-xl">
            {/* Eyebrow — stays on one line */}
            <div className="flex items-center gap-4">
              <span className="h-0.5 w-12 shrink-0 bg-amber-400" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400 sm:whitespace-nowrap sm:text-sm">
                
                Technology · Talent · Transformation
              </p>
            </div>

            {/* Main headline */}
            <h1
              className="mt-8 font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.5rem] xl:text-[5.4rem]"
              style={{ textShadow: '0 3px 30px rgba(0,0,0,0.45)' }}
            >
              Built for
              <br />
              what&apos;s next.
            </h1>

            {/* Supporting copy */}
            <p
              className="mt-7 max-w-lg text-lg leading-8 text-white/90 sm:text-xl sm:leading-9"
              style={{ textShadow: '0 2px 18px rgba(0,0,0,0.5)' }}
            >
              Technology, healthcare and life-sciences solutions with specialist
              talent across six countries.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#what-we-do"
                className="inline-flex items-center gap-3 rounded-sm bg-amber-400 px-8 py-4 text-base font-bold text-navy-950 transition duration-300 hover:bg-amber-300"
              >
                Explore our services
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-sm border border-white bg-navy-950/40 px-8 py-4 text-base font-bold text-white transition duration-300 hover:border-amber-400 hover:text-amber-400"
              >
                Talk to Cliff
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE/TABLET globe: full width, under the text */}
        <img
          src="/img/global-offices.png"
          alt="World map showing Cliff Services offices in the US, Canada, UK, Ireland, India and Australia"
          width={1110}
          height={1022}
          className="mt-10 block h-auto w-full lg:hidden"
        />

        {/* Trust indicators */}
        <ul className="mt-10 grid grid-cols-2 gap-y-6 border-t border-white/20 py-6 lg:mt-4 lg:grid-cols-4 lg:py-7">
          {STATS.map(({ label, Icon }, i) => (
            <li
              key={label}
              className={`flex items-center gap-4 text-sm font-bold uppercase tracking-[0.16em] text-white lg:justify-center lg:gap-6 lg:text-base ${
                i > 0 ? 'lg:border-l lg:border-white/30' : ''
              }`}
            >
              <Icon className="h-8 w-8 shrink-0 lg:h-10 lg:w-10" strokeWidth={1.5} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}