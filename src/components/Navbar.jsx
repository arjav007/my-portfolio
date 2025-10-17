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
    setIsOpen(false); // Close mobile menu on any click

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
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-40 overflow-hidden">
      
      <div className="absolute inset-0 z-0 h-full">
        <StarsCanvas />
      </div>
      
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <motion.div 
          className="text-2xl font-bold text-white tracking-widest cursor-pointer"
          onClick={() => handleNavClick(navLinks.find(l => l.title === 'Home'))}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Arjav Patni
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.id}
              onClick={() => handleNavClick(link)}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-base"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {link.title}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button - No changes needed here */}
        <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-50">
              {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
            </button>
        </div>

        {/* --- CHANGES START HERE --- */}

        {/* 1. The Mobile Menu Overlay has been moved INSIDE the <nav> element. */}
        {/* This allows it to share the same positioning context as the button. */}
        {/* 2. Added `z-40` to the overlay. This puts it above the nav content (logo, etc.) but below the mobile menu button (which has z-50). */}
        <motion.div
            className={`absolute top-0 left-0 w-full h-screen bg-black/95 lg:hidden flex flex-col items-center justify-center z-40`}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            // Added for good practice: prevents interaction with the menu when it's closed
            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
                {navLinks.map((link, i) => (
                    <motion.button 
                      key={link.id} 
                      onClick={() => handleNavClick(link)} 
                      className="text-gray-300 hover:text-purple-400 text-3xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                      transition={{ delay: isOpen ? 0.2 + i * 0.05 : 0 }}
                    >
                        {link.title}
                    </motion.button>
                ))}
            </div>
        </motion.div>
        {/* --- CHANGES END HERE --- */}
      </nav>
      
      {/* The Mobile Menu Overlay was moved from here up into the <nav> tag. */}
    </header>
  );
};