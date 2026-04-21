import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Staffing from '../sections/Staffing';
import Products from '../sections/Products';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <Staffing />
      <Contact />
    </>
  );
}
