import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AboutSection from '@/components/About';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}