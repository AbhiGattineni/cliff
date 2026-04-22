import { useState } from 'react';
import { LOCATIONS, TRUSTED_LOGOS } from '../data/site';
import { CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-white py-24 text-gray-900">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow !text-brand-600">Get In Touch</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">Contact Us</h2>
            <p className="mt-3 max-w-md text-gray-600">
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
                  <span className="text-sm font-medium text-gray-700">Name</span>
                  <input
                    required
                    type="text"
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Email</span>
                  <input
                    required
                    type="email"
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Subject</span>
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Message</span>
                <textarea
                  rows={5}
                  required
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
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
            <h3 className="font-display text-2xl font-bold">Our Locations</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {LOCATIONS.map((l) => (
                <div
                  key={l.country}
                  className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                    {l.country}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{l.city}</p>
                  <p className="mt-2 text-sm text-gray-600">{l.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-100 pt-10">
          <p className="text-center text-xs uppercase tracking-widest text-gray-500">Trusted By</p>
          <div className="relative mt-6 overflow-hidden">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent"
              aria-hidden
            />
            <div className="flex gap-14 whitespace-nowrap px-12 will-change-transform animate-marquee">
              {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((l, i) => (
                <span
                  key={i}
                  className="font-display text-xl font-bold tracking-[0.2em] text-gray-300"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
