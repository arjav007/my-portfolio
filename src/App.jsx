import React from 'react';

// --- 1. Import all your new components ---
// This assumes all component files are in a 'src/components/' directory.
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
// This is now the central hub of your portfolio. It assembles all the
// individual pieces into a complete webpage.
// ==========================================================================
export default function App() {
  return (
    <div className="bg-[#050816] text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* These components are rendered on every page */}
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

