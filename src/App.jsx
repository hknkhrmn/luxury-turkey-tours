import Loader from './components/Loader';
import Navbar from './components/Navbar';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import WhyUs from './sections/WhyUs';
import Experiences from './sections/Experiences';
import Destinations from './sections/Destinations';
import CustomTrip from './sections/CustomTrip';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Services from './sections/Services';
import About from './sections/About';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <StickyCTA />
      <main>
        <Hero />
        <WhyUs />
        <Experiences />
        <Destinations />
        <CustomTrip />
        <Testimonials />
        <Gallery />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
