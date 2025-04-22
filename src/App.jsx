import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import NavbarComponent from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import HeroCarousel from './Components/Hero';
import WhyChooseUs from './Components/WhyChooseUs';
import FeaturedCars from './Components/FeaturedCars';
import Testimonials from './Components/Testimonials';
import CallToAction from './Components/CallToAction';
import CarGallery from './Components/CarGallery';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import AboutHero from './Components/AboutHero';
import ServicesHero from './Components/ServicesHero';
import WhatWeOffer from './Components/WhatWeOffer';
import ContactHero from './Components/ContactHero';
import ContactForm from './Components/ContactForm.';
import BookNowSection from './Components/BookNowSection';

function App() {
  return (
    <Router>
          <ScrollToTop/>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<>
        
        <HeroCarousel/>
        <AboutUs/>
        <WhyChooseUs/>
        <FeaturedCars/>
        <Testimonials/>
        <CarGallery/>
        <CallToAction/>
        <Footer/>
        </>} />
        <Route path="/about" element={<>
        <AboutHero/>
        <WhyChooseUs/>
        <CallToAction/>
        <Footer/>
        </>} />
        <Route path="/services" element={<>
        <ServicesHero/>
        <WhatWeOffer/>
        <Footer/>
        </>} />
        <Route path="/contact" element={<>
        <ContactHero/>
        <ContactForm/>
        <Footer/>
        </>} />
        <Route path='/booknow' element={<>
        <BookNowSection/>
        <Footer/>
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
