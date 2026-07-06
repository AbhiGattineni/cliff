import { motion } from 'framer-motion';

const TILES = [
  { title: '18 Years of SAP IS-U Depth', body: 'A dedicated utilities practice few firms our size can field.' },
  { title: 'Global Delivery Network', body: 'In-market account leadership with 24×7 delivery capacity across six countries.' },
  { title: 'Founder-Led Client Relationships', body: 'The discipline of a global firm with the attention of a founder-led one.' },
];

export default function WhyCliff() {
  return (
    <section id="why-cliff" className="relative border-y border-white/10 bg-ink-900 py-24 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Why Cliff Services</p>
          <h2 className="mt-4 font-display text-4xl font-black text-white md:text-5xl">
            A diverse supplier <span className="text-gradient">built to enterprise standards</span>
          </h2>
          <p className="mt-5 text-white/70">
            Most diverse suppliers can't clear enterprise security review. Most certified firms bring
            no supplier-diversity value. Cliff Services is engineered to be both,{' '}
            <span className="font-semibold text-brand-300">
              a disability-owned business (certification underway)
            </span>{' '}
            with a deliberate ISO, SOC 2, CMMI, and HIPAA credential stack in progress. For our
            clients, that means supplier-diversity value with a low-compliance-risk delivery partner.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TILES.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-dark text-center"
            >
              <h3 className="font-display text-lg font-bold text-white">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
