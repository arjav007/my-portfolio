import React from 'react';
import { motion } from 'framer-motion';
import StarsCanvas from './Stars.jsx'; // Import the new reusable component

// --- This is the main Hero Component ---
// It now imports the 3D background instead of defining it internally.
export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center text-center text-white relative overflow-hidden">
      {/* The 3D background is now a self-contained component */}
      <StarsCanvas />
      
      {/* Your content, layered on top of the 3D background */}
      <div className="z-10 px-4">
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
