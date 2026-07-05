import Hero from '../sections/Hero';
import HomeStats from '../sections/HomeStats';
import WhatWeDo from '../sections/WhatWeDo';
import WhyCliff from '../sections/WhyCliff';
import About from '../sections/About';
import Certifications from '../sections/Certifications';
import Credentials from '../sections/Credentials';
import Services from '../sections/Services';
import Industries from '../sections/Industries';
import Staffing from '../sections/Staffing';
import GlobalFootprint from '../sections/GlobalFootprint';
import ClosingCTA from '../sections/ClosingCTA';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeStats />
      <WhatWeDo />
      <WhyCliff />
      <About />
      <Certifications />
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
