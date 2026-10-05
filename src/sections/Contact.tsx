import { Mail, Phone } from 'lucide-react';
import { CONTACT } from '../data/site';

// Contact, by the routes that actually reach someone.
//
// What was here was a name/email/subject/message form whose submit handler set
// a "thanks, we'll be in touch within 1 business day" message and did nothing
// else. No endpoint, no mail, nothing. A form that drops what people type is
// worse than no form, so until one is wired up this says how to reach us and
// every route on it works.

export default function Contact() {
  return (
    <section
      id="contact"
      className="band border-t border-slate-200 py-20 sm:py-24 dark:border-white/10"
    >
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="h-section">Talk to us</h2>
            <p className="lede mt-4 max-w-md">
              Tell us what you need delivered, run, or staffed. We answer within one business day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${CONTACT.email}`} className="btn-primary">
                <Mail size={16} /> {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="btn-ghost">
                <Phone size={16} /> {CONTACT.phone}
              </a>
            </div>
          </div>

          <dl className="grid gap-6 text-sm sm:grid-cols-2 lg:pt-4">
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white">General enquiries</dt>
              <dd className="mt-1">
                <a href={`mailto:${CONTACT.email}`} className="link-quiet underline-offset-4 hover:underline">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white">Careers</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${CONTACT.careersEmail}`}
                  className="link-quiet underline-offset-4 hover:underline"
                >
                  {CONTACT.careersEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white">United States</dt>
              <dd className="mt-1">
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="link-quiet underline-offset-4 hover:underline"
                >
                  {CONTACT.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white">United Kingdom</dt>
              <dd className="mt-1">
                <a
                  href={`tel:${CONTACT.phoneUk.replace(/\s/g, '')}`}
                  className="link-quiet underline-offset-4 hover:underline"
                >
                  {CONTACT.phoneUk}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-semibold text-slate-900 dark:text-white">Registered office</dt>
              <dd className="mt-1 text-slate-600 dark:text-slate-400">{CONTACT.office}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
