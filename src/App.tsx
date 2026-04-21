import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ProductDetail from './pages/ProductDetail';
import Careers from './pages/Careers';
import LoginSignup from './pages/LoginSignup';
import Legal, { PRIVACY_BODY, COOKIES_BODY, TERMS_BODY } from './pages/Legal';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/privacy" element={<Legal title="Privacy Policy" body={PRIVACY_BODY} />} />
          <Route path="/cookies" element={<Legal title="Cookie Statement" body={COOKIES_BODY} />} />
          <Route path="/terms" element={<Legal title="Terms of Service" body={TERMS_BODY} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
