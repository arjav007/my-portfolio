import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// This is a reusable wrapper component that makes sections animate into view as you scroll.
// It uses framer-motion for the animation and react-intersection-observer to detect when it's on screen.
const AnimatedSection = ({ children, className, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.1,    // Animate when 10% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        // The "visible" state makes the section fade in and slide up
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.8, 
            ease: "easeOut",
            staggerChildren: 0.2 // This animates children components one after another
          } 
        },
        // The "hidden" state is the starting point of the animation
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;

