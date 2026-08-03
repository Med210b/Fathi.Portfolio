/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCarousel from './components/LogoCarousel';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import WhatsAppButton from './components/WhatsAppButton';
import ProjectDemo from './components/ProjectDemo';

function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4F46E5] via-[#2563EB] to-[#22D3EE] z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <LogoCarousel />
        <Services />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function AppContent() {
  return (
    <div className="relative min-h-screen bg-[#050816] selection:bg-brand-primary selection:text-white overflow-x-hidden antialiased">
      <SEO />
      <CursorGlow />
    
      {/* Background Static Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] animate-pulse" />
        
        {/* Fine Noise/Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDemo />} />
      </Routes>

      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

