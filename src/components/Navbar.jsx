import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import StarsCanvas from './Stars.jsx';

export default function Navbar({ page, setPage }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { title: 'Home', type: 'page', id: 'hero' },
    { title: 'About', type: 'page', id: 'about' },
    { title: 'Skills', type: 'scroll', id: 'skills' },
    { title: 'Projects', type: 'scroll', id: 'projects' },
    { title: 'Contact', type: 'scroll', id: 'contact' },
  ];

  const handleNavClick = (link) => {
    setIsOpen(false); 

    if (link.title === 'About') {
        setPage('about');
        return;
    }
    
    if (page !== 'home') {
      setPage('home');
      setTimeout(() => {
        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Use a React Fragment to render the navbar and menu as separate sibling elements
    <>
      {/* 1. Main Navigation Bar (Logo, Desktop Links, Background) */}
      {/* This has a z-index of 30, placing it above page content but below the mobile overlay. */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-black/30 backdrop-blur-md">
        <div className="absolute inset-0 z-0 h-full pointer-events-none">
          <StarsCanvas />
        </div>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <motion.div
            className="text-2xl font-bold text-white tracking-widest cursor-pointer"
            onClick={() => handleNavClick(navLinks.find(l => l.title === 'Home'))}
            // This fades the logo out when the menu is open to prevent it from showing through the overlay
            animate={{ opacity: isOpen ? 0 : 1, transition: { duration: 0.2 } }}
          >
            Arjav Patni
          </motion.div>
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-base"
              >
                {link.title}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* 2. Mobile Menu Toggle Button (Always on top) */}
      {/* With a z-index of 50, this button is guaranteed to be on top of all other elements. */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <XMarkIcon className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <Bars3Icon className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* 3. Mobile Menu Overlay (Below button, above nav bar) */}
      {/* With a z-index of 40, this overlay covers the main nav bar and the page content. */}
      <motion.div
        className="lg:hidden fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.id}
              onClick={() => handleNavClick(link)}
              className="text-gray-300 hover:text-purple-400 text-4xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20
              }}
              transition={{ delay: isOpen ? 0.2 + i * 0.1 : 0 }}
            >
              {link.title}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

// A small wrapper for the icon animation
const AnimatePresence = ({ children, initial }) => {
  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

