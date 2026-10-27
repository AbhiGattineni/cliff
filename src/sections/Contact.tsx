import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { CONTACT } from '../data/site';

// Contact, by the routes that actually reach someone.
//
// What was here was a name, email, subject and message form whose submit
// handler set "thanks, we'll be in touch within 1 business day" and did nothing
// else. No endpoint, no mail, nothing. A form that drops what people type is
// worse than no form, so until one is wired up this says how to reach us and
// every route on it works.

const ROUTES = [
  { label: 'General enquiries', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: 'Careers', value: CONTACT.careersEmail, href: `mailto:${CONTACT.careersEmail}` },
  {
    label: 'United States',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, '')}`,
  },
  {
    label: 'United Kingdom',
    value: CONTACT.phoneUk,
    href: `tel:${CONTACT.phoneUk.replace(/\s/g, '')}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="band-navy band-lift py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-on-navy">Get in touch</p>
          <h2 className="h-section-on-navy mt-4">Talk to us</h2>
          <p className="lede-on-navy mt-5">
            Tell us what you need delivered, run, or staffed. We answer within one business day.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${CONTACT.email}`} className="btn-primary">
              <Mail size={16} /> Email us <ArrowUpRight size={16} />
            </a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="btn-on-navy">
              <Phone size={16} /> {CONTACT.phone}
            </a>
          </div>
        </div>

        <dl className="mx-auto mt-16 grid max-w-4xl gap-8 border-t border-white/10 pt-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {ROUTES.map((r) => (
            <div key={r.label}>
              <dt className="font-semibold text-white">{r.label}</dt>
              <dd className="mt-1.5">
                <a href={r.href} className="link-on-navy underline-offset-4 hover:underline">
                  {r.value}
                </a>
              </dd>
            </div>
          ))}
          <div className="sm:col-span-2 lg:col-span-4">
            <dt className="font-semibold text-white">Registered office</dt>
            <dd className="mt-1.5 text-slate-300">{CONTACT.office}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
