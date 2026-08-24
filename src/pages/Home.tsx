import { useSeo } from '../lib/seo';
import Hero from '../sections/Hero';
import HomeStats from '../sections/HomeStats';
import WhatWeDo from '../sections/WhatWeDo';
import WhyCliff from '../sections/WhyCliff';
import About from '../sections/About';
import Certifications from '../sections/Certifications';
import TechPartnerships from '../sections/TechPartnerships';
import Credentials from '../sections/Credentials';
import Services from '../sections/Services';
import Industries from '../sections/Industries';
import Staffing from '../sections/Staffing';
import GlobalFootprint from '../sections/GlobalFootprint';
import ClosingCTA from '../sections/ClosingCTA';
import Contact from '../sections/Contact';

export default function Home() {
  useSeo({
    title: 'Cliff Services Inc. | Global IT Solutions, Clinical Services, RCM & Professional Staffing',
    description:
      'Cliff Services Inc. delivers technology projects, clinical and life-sciences services, healthcare revenue cycle management, and professional staffing across six countries since 2008.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <HomeStats />
      <WhatWeDo />
      <WhyCliff />
      <About />
      <Certifications />
      <TechPartnerships />
      <Credentials />
      <Services />
      <Industries />
      <Staffing />
      <GlobalFootprint />
      <ClosingCTA />
      <Contact />
    </>
  );
}
