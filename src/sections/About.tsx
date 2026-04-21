import { motion } from 'framer-motion';

const PILLARS = [
  {
    n: '01',
    title: 'MISSION',
    body:
      'Crafting cutting-edge tech solutions to empower businesses in a dynamic digital landscape, delivering precision with every interaction.',
  },
  {
    n: '02',
    title: 'VISION',
    body:
      'Pioneering a future where technology consulting redefines global innovation and excellence, constantly pushing boundaries.',
  },
  {
    n: '03',
    title: 'VALUES',
    body:
      'INNOVATION — Redefining IT with bold creativity. INTEGRITY — Unwavering trust in every action. EXCELLENCE — Pursuit of perfection, always.',
  },
];

const DISTINCTIONS = [
  {
    title: 'PROACTIVE SUPPORT',
    body: 'Anticipating needs, delivering solutions, and elevating success with every interaction.',
  },
  {
    title: 'TIMELY PRECISION',
    body: 'Flawless execution, on schedule, ensuring your vision comes to life seamlessly.',
  },
  {
    title: 'DEEP EXPERTISE',
    body: 'A wealth of knowledge driving transformative results for every client.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-ink-900 py-24">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow">Since 2008</p>
          <h2 className="mt-4 font-display text-5xl font-black text-white md:text-7xl">
            CLIFF<span className="text-gradient">SERVICES</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Born in the UK, now leading global innovation. We transform your technological vision
            into reality with precision and cutting-edge expertise.
          </p>
        </div>

        <p className="eyebrow mt-20 text-center">Our Foundation</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-dark"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold text-white/10">{p.n}</span>
                <span className="h-2 w-2 rounded-full bg-brand-400" />
              </div>
              <h3 className="mt-4 font-display text-3xl font-bold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="eyebrow">Distinction</p>
          <h3 className="mt-4 font-display text-4xl font-black text-white md:text-6xl">
            WHAT SETS US <span className="text-gradient">APART</span>
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            We weave legacy expertise with visionary innovation, delivering strategies that
            transcend time and trends.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {DISTINCTIONS.map((d) => (
            <div key={d.title} className="card-dark">
              <h4 className="font-display text-lg font-bold tracking-widest text-white">
                {d.title}
              </h4>
              <p className="mt-3 text-sm text-white/70">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
