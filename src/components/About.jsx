import React from 'react';
import AnimatedSection from './AnimatedSection'; // Helper for scroll-reveal animations
import StarsCanvas from './Stars.jsx'; // 1. Import the StarsCanvas component

// --- Main About Section ---
// This component now includes a "Read More" button to navigate to the detailed about page.
export default function About({ setPage }) {
  return (
    // 2. Make the parent section `relative` to contain the background
    <AnimatedSection className="relative overflow-hidden py-24" id="about">

      {/* 3. Add the StarsCanvas component as a background layer */}
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>

      {/* 4. Ensure the main content is on a higher layer with `relative` and `z-10` */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          Full-stack developer experienced in building scalable web applications with Next.js, React, Express.js, and PostgreSQL. Proficient in designing secure REST APIs and implementing robust authentication systems. Strong focus on data analytics and cybersecurity, with a proven ability to solve complex engineering challenges.
        </p>

        {/* This button and its container will correctly sit on top of the stars */}
        <div className="mt-12">
          <button
            onClick={() => setPage('about')}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Read More About My Journey
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};