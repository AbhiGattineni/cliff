import { useState } from 'react';
import { LOCATIONS } from '../data/site';
import { CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-ink-900 py-24 lg:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="mt-3 font-display text-4xl font-black text-white md:text-5xl">Contact Us</h2>
            <p className="mt-3 max-w-md text-white/65">
              We'd love to hear from you. Fill out the form and a member of our team will reach
              out within 1 business day.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-8 grid gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-white/70">Name</span>
                  <input
                    required
                    type="text"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-brand-400"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-white/70">Email</span>
                  <input
                    required
                    type="email"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-brand-400"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-medium text-white/70">Subject</span>
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-brand-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-white/70">Message</span>
                <textarea
                  rows={5}
                  required
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-brand-400"
                />
              </label>
              <button type="submit" className="btn-primary w-fit">
                Submit
              </button>
              {sent && (
                <p className="inline-flex items-center gap-2 text-sm text-emerald-600">
                  <CheckCircle2 size={16} /> Thanks! We'll be in touch shortly.
                </p>
              )}
            </form>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-white">Our Locations</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {LOCATIONS.map((l) => (
                <div
                  key={l.country}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                    {l.country}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{l.city}</p>
                  <p className="mt-2 text-sm text-white/65">{l.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
