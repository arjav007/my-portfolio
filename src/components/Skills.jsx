import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Helper for scroll-reveal animations

// --- SkillIcon Sub-component ---
// Defines the style and animation for each individual skill.
const SkillIcon = ({ name }) => (
  <motion.div
    className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-lg border border-white/10"
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

// --- Main Skills Section ---
export default function Skills() {
  // Your specific skill set is used here.
  const userSkills = ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Node.js", "Python", "AWS"];

  return (
    <AnimatedSection className="py-24" id="skills">
      <div className="container mx-auto px-6">
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

