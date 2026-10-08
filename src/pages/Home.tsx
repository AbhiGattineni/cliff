import { useSeo } from '../lib/seo';
import Hero from '../sections/Hero';
import WhatWeDo from '../sections/WhatWeDo';
import Proof from '../sections/Proof';
import Industries from '../sections/Industries';
import Contact from '../sections/Contact';

// Five sections, down from fifteen.
//
// What went: HomeStats, WhyCliff, About, Certifications, TechPartnerships,
// Credentials, Quantum, Staffing, GlobalFootprint and ClosingCTA. Between
// them they repeated "since 2008", "six countries" and "certified" four times
// over, and pushed the one thing a visitor came for (what this company does,
// and how to reach it) below several screens of scrolling. The facts worth
// keeping are in Proof. The rest is in the history.

export default function Home() {
  useSeo({
    title: 'Cliff Services | Global IT Solutions, Clinical Services, RCM & Professional Staffing',
    description:
      'Cliff Services delivers technology projects, clinical and life-sciences services, healthcare revenue cycle management, and professional staffing across six countries since 2008.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <WhatWeDo />
      <Proof />
      <Industries />
      <Contact />
    </>
  );
}
