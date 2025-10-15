import React from 'react';
import { motion } from 'framer-motion';
import StarsCanvas from './Stars'; // Ensure this path is correct

// --- Main Hero Component (Updated) ---
// This version uses proper CSS positioning to layer the content over the 3D background.
export default function Hero() {
  return (
    // The main container is now a "relative" positioning context.
    <section id="hero" className="relative w-full h-screen mx-auto">
      
      {/* The StarsCanvas is positioned to fill the background. */}
      <StarsCanvas />
      
      {/* The content container is positioned "absolutely" on top of the background.
          The `z-10` class ensures it has a higher stacking order. */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider"
        >
          Hi, I'm <span className="text-purple-400">Arjav Patni</span> 👋
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          A passionate developer crafting modern, responsive, and high-performance web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex gap-4 justify-center mt-8"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-transparent border-2 border-white rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-white rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

