import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Helper for scroll-reveal animations
import StarsCanvas from './Stars.jsx'; // Import the starfield animation

// --- SkillIcon Sub-component ---
// Defines the style and animation for each individual skill.
const SkillIcon = ({ name }) => (
  <motion.div
    // Added backdrop-blur-sm for a nice frosted-glass effect over the stars
    className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
    variants={{
        // Defines the animation variant for when the element becomes visible
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        hidden: { opacity: 0, y: 50 },
    }}
    whileHover={{
      scale: 1.1,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0 0 15px rgba(156, 39, 176, 0.5)" // Purple glow on hover
    }}
  >
    <p className="text-lg font-semibold text-white text-center">{name}</p>
  </motion.div>
);

// --- Main Skills Section (Updated) ---
// This version now includes the 3D starfield background.
export default function Skills() {
  // Your specific skill set is used here.
  const userSkills = ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Node.js", "Python", "AWS","PostgreSQL"];

  return (
    // The section is now a "relative" positioning context to contain the background.
    <AnimatedSection className="py-24 relative" id="skills">
      {/* The starfield animation is placed here, in the background. */}
      <StarsCanvas />

      {/* The content is placed in a container with a higher z-index to appear on top. */}
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          variants={{
              // This makes the skill icons animate in one after the other.
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
          }}
        >
          {userSkills.map(skill => <SkillIcon key={skill} name={skill} />)}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
