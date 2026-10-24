import { LOCATIONS, CONTACT } from '../data/site';
import { Mail, Phone } from 'lucide-react';

// The form that used to sit here set "Thanks! We'll be in touch shortly." and
// did nothing else. No endpoint, no mail. A form that drops what people type
// is worse than no form, so these are the routes that actually reach someone.

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink-900 py-24 lg:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="mt-3 font-display text-4xl font-black text-white md:text-5xl">Contact Us</h2>
            <p className="mt-3 max-w-md text-white/65">
              We'd love to hear from you. Reach us directly and a member of our team will get
              back within 1 business day.
            </p>

            <div className="mt-8 grid gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                  General enquiries
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-brand-300"
                >
                  <Mail size={18} /> {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                  Careers
                </p>
                <a
                  href={`mailto:${CONTACT.careersEmail}`}
                  className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-brand-300"
                >
                  <Mail size={18} /> {CONTACT.careersEmail}
                </a>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                    United States
                  </p>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                    className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-brand-300"
                  >
                    <Phone size={18} /> {CONTACT.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                    United Kingdom
                  </p>
                  <a
                    href={`tel:${CONTACT.phoneUk.replace(/\s/g, '')}`}
                    className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-brand-300"
                  >
                    <Phone size={18} /> {CONTACT.phoneUk}
                  </a>
                </div>
              </div>
            </div>
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
