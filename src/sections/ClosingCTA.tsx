import { ArrowRight } from 'lucide-react';

export default function ClosingCTA() {
  return (
    <section className="relative bg-ink-900 pb-8">
      <div className="container-x">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-800 to-ink-900 p-10 text-center md:p-14">
          <h2 className="font-display text-3xl font-black text-white md:text-4xl">
            Let's build together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Vendor empanelment, SOW delivery, supplier-diversity programs, and talent partnerships.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="btn-primary">
              Contact Us <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Download Capability Statement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
