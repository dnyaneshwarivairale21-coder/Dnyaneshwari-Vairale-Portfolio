import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0f1e', color: '#94a3b8' }}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
