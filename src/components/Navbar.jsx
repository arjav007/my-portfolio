import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // UPDATED: The navigation links now include all the new sections from your resume.
  const navLinks = [
    { title: 'Home', id: 'hero' },
    { title: 'About', id: 'about' },
    { title: 'Skills', id: 'skills' },
    { title: 'Projects', id: 'projects' },
    { title: 'Contact', id: 'contact' },
  ];

  // Smooth scroll function for a better user experience
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-40">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold text-white tracking-widest cursor-pointer"
          onClick={() => scrollToSection('hero')}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Arjav Patni
        </motion.div>
        
        {/* Desktop Menu - Breakpoint changed to 'lg' for more space */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
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
                    onClick={() => scrollToSection(link.id)} 
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

