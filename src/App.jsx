import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Showcase } from './components/Showcase';
import { Packages } from './components/Packages';
import { BikeBrands } from './components/BikeBrands';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Location } from './components/Location';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { LanguageProvider } from './context/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        <ProcessTimeline />
        <Showcase />
        <Packages />
        <BikeBrands />
        <Gallery />
        <Testimonials />
        <About />
        <Location />
        <FinalCTA />
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}

export default App;