import React from 'react';

// --- 1. Import all of your components ---
// This now includes the new sections based on your resume.
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ==========================================================================
// Main App Component
// This file assembles all the individual components into your complete portfolio.
// ==========================================================================
export default function App() {
  return (
    <div className="bg-[#050816] text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* These components are always visible */}
      <CustomCursor />
      <Navbar />

      {/* The <main> tag holds all the scrollable sections of your page */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* The Footer is rendered at the very bottom */}
      <Footer />
    </div>
  );
}

