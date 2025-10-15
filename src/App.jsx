import React, { useState } from 'react';

// --- Page & Component Imports ---
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AboutPage from './pages/AboutPage.jsx'; // Import the new page

// ==========================================================================
// Main App Component - Now with Page Navigation
// This file uses state to conditionally render either the HomePage or AboutPage.
// ==========================================================================
export default function App() {
  // State to manage which page is currently displayed ('home' or 'about')
  const [page, setPage] = useState('home');

  // A small helper component to group the homepage sections
  const HomePage = () => (
    <>
      <Hero />
      {/* We pass setPage to the About component so the "Read More" button can change the page */}
      <About setPage={setPage} />
      <Skills />
      <Projects />
      <Contact />
    </>
  );

  return (
    <div className="bg-[#050816] text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* These components are always visible */}
      <CustomCursor />
      {/* Pass page state and setter to Navbar for navigation logic */}
      <Navbar page={page} setPage={setPage} />

      <main>
        {/* Conditional rendering based on the 'page' state */}
        {page === 'home' ? <HomePage /> : <AboutPage setPage={setPage} />}
      </main>

      {/* The Footer is rendered at the very bottom */}
      <Footer />
    </div>
  );
}

