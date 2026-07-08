import { MapPin } from 'lucide-react';

const COUNTRIES = [
  { country: 'United Kingdom', note: 'Melton Mowbray, Global HQ' },
  { country: 'United States', note: 'Herndon, VA' },
  { country: 'Ireland', note: 'Dublin' },
  { country: 'Canada', note: 'Mississauga' },
  { country: 'Australia', note: 'Victoria' },
  { country: 'India', note: 'Hyderabad' },
];

export default function GlobalFootprint() {
  return (
    <section id="global-footprint" className="relative bg-ink-900 py-24 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Global Footprint</p>
          <h2 className="mt-4 font-display text-4xl font-black text-white md:text-5xl">
            Six countries, <span className="text-gradient">one delivery standard</span>
          </h2>
          <p className="mt-4 text-white/65">
            Onsite account leadership in every market, with 24×7 delivery capacity across our global
            network. Nearshore (Mexico) and Middle East expansion underway.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.map((c) => (
            <div key={c.country} className="card-dark flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-300" />
              <div>
                <p className="font-display text-lg font-bold text-white">{c.country}</p>
                {c.note && <p className="mt-1 text-sm text-white/60">{c.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
