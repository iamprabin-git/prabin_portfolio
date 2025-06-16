import Navbar from '../components/Navbar';

import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AboutSection from '@/components/About';
import HeroSection from '@/components/Hero';


export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}