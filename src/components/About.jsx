import React from 'react';
import AnimatedSection from './AnimatedSection'; // Helper for scroll-reveal animations

export default function About() {
  return (
    // The AnimatedSection wrapper handles the fade-in animation on scroll
    <AnimatedSection className="py-24" id="about">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
           I'm a creative and detail-oriented web developer with a strong interest
          in modern frontend technologies like React, Tailwind CSS, and JavaScript.
          I enjoy solving real-world problems through code and continuously
          learning new tools to stay ahead of the curve.
        </p>
      </div>
    </AnimatedSection>
  );
};

