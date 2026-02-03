
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/section/Hero';
import About from './components/section/About';
import Services from './components/section/Services';
import Reviews from './components/section/Reviews';
import FAQ from './components/section/FAQ';
import Contact from './components/section/Contact';
import Cursor from './components/common/Cursor';

function App() {

  // Scroll Animation Observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.service-card, .review-card, .faq-item, .contact-item, .section-title, .section-subtitle');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <div className="main-content">
        <Hero />
        <About />
        <Services />
        <Reviews />
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
