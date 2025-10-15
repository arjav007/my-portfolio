import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar({ page, setPage }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // The navigation links are now more descriptive
  const navLinks = [
    { title: 'Home', type: 'page', id: 'hero' },
    { title: 'About', type: 'page', id: 'about' },
    { title: 'Skills', type: 'scroll', id: 'skills' },
    { title: 'Projects', type: 'scroll', id: 'projects' },
    { title: 'Contact', type: 'scroll', id: 'contact' },
  ];

  // Updated navigation handler for both pages and scrolling
  const handleNavClick = (link) => {
    setIsOpen(false); // Close mobile menu on any click

    // Handle page navigation
    if (link.title === 'About') {
        setPage('about');
        return;
    }
    
    // Handle scrolling links or returning to home
    if (page !== 'home') {
      // If we are on the 'about' page, switch to 'home' first
      setPage('home');
      // Then, wait briefly for the homepage to render before scrolling
      setTimeout(() => {
        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If we are already on the homepage, just scroll
      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-40">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
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

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-50">
              {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
            </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <motion.div
          className={`absolute top-0 left-0 w-full h-screen bg-black/95 lg:hidden flex flex-col items-center justify-center`}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
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
    </header>
  );
};
