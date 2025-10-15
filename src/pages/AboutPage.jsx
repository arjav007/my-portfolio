import React from 'react';

// Import the sections and the new animation component
import Education from '../components/Education.jsx';
import Achievements from '../components/Achievements.jsx';
import AnimatedSection from '../components/AnimatedSection.jsx';
import StarsCanvas from '../components/Stars.jsx'; // Import the starfield animation

// This is the new, dedicated page for your detailed "About" information.
export default function AboutPage({ setPage }) {
  // When the page changes, we want to make sure the user starts at the top.
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-0">
      {/* Add the starfield animation to the background */}
      <StarsCanvas />

      {/* The main content now has a transparent background to show the animation */}
      <div className="bg-transparent min-h-screen pt-24">
        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button to navigate to the homepage */}
          <AnimatedSection>
            <button
              onClick={() => setPage('home')}
              className="mb-12 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              &larr; Back to Home
            </button>
          </AnimatedSection>

          {/* Render the Education and Achievements components */}
          <Education />
          <Achievements />
        </div>
      </div>
    </div>
  );
}

