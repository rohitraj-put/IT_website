

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/pages/Contact';
import OurTeam from '@/components/OurTeam';


const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <OurTeam/>
        <Testimonials />
      </main>

    </div>
  );
};

export default Index;
