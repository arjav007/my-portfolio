import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Helper for scroll-reveal animations

// --- Main Achievements Section ---
export default function Achievements() {
  // This data is taken directly from your resume to showcase your accomplishments.
  const achievementsList = [
    "🏸 Winner, Badminton Shield 2023",
    "🥇 Gold Medal - GK Olympiad",
    "🏆 NTSE Exam Pass",
    "🚴 50KM Cycling Challenge Finisher",
    "🏅 Google Cybersecurity Certificate",
    "🛡️ Secure Coding (AR Workshop Studio)"
  ];

  return (
    <AnimatedSection className="py-24 bg-black/20" id="achievements">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Achievements & Certifications</h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={{
            // This variant allows the child elements (the cards) to animate in one by one.
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          {achievementsList.map(achievement => (
            <motion.div 
              key={achievement} 
              className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center justify-center text-center"
              // These variants define the animation for each individual card.
              variants={{ 
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }, 
                hidden: { opacity: 0, scale: 0.8 } 
              }}
            >
              <p className="font-semibold text-white">{achievement}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

