import Hero from '../sections/Hero';
import HomeStats from '../sections/HomeStats';
import About from '../sections/About';
import SuccessStories from '../sections/SuccessStories';
import Services from '../sections/Services';
import Staffing from '../sections/Staffing';
import Products from '../sections/Products';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeStats />
      <About />
      <Products />
      <SuccessStories />
      <Services />
      <Staffing />
      <Contact />
    </>
  );
}
