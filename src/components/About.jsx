import React from 'react';
import AnimatedSection from './AnimatedSection'; // Helper for scroll-reveal animations

// --- Main About Section ---
// This component now includes a "Read More" button to navigate to the detailed about page.
export default function About({ setPage }) {
  return (
    <AnimatedSection className="py-24" id="about">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          Full-stack developer experienced in building scalable web applications with Next.js, React, Express.js, and PostgreSQL. Proficient in designing secure REST APIs and implementing robust authentication systems. Strong focus on data analytics and cybersecurity, with a proven ability to solve complex engineering challenges.
        </p>

        {/* NEW: Button to navigate to the detailed about page */}
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
