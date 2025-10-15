import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Helper for scroll-reveal animations
import StarsCanvas from './Stars.jsx'; // Import the starfield animation


// --- Project Card Sub-component ---
// Now includes 'metrics' and 'technologies' to showcase impact and skills.
const ProjectCard = ({ title, desc, imageUrl, liveUrl, repoUrl, metrics, technologies }) => (
  <motion.div 
    className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden group border border-white/10 flex flex-col h-full"
    variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        hidden: { opacity: 0, y: 50 },
    }}
    whileHover={{ 
      y: -10, 
      boxShadow: "0px 25px 40px rgba(0,0,0,0.4)",
      borderColor: "rgba(192, 132, 252, 0.5)" // Purple glow effect on border
    }}
    transition={{ duration: 0.3 }}
  >
    <div className="overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-gray-400 flex-grow">{desc}</p>
      
      {/* NEW: Data-Driven Metrics from your resume */}
      {metrics && (
        <div className="mt-3 space-y-2 text-sm text-purple-300">
          {metrics.map(metric => <p key={metric}>⚡ {metric}</p>)}
        </div>
      )}

      {/* NEW: Technology Stack Badges */}
      {technologies && (
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map(tech => (
            <span key={tech} className="bg-purple-900/50 text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Live Demo
          </a>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
            View Code
          </a>
      </div>
    </div>
  </motion.div>
);

// --- Main Projects Section ---
export default function Projects() {
  // This data is now enriched with metrics and technologies from your resume.
  const userProjects = [
    {
      title: "Vi-Life-Diagnostics",
      desc: "A full-stack medical diagnostics platform for booking tests and managing reports.",
      imageUrl: "/vi-life-photo.png",
      liveUrl: "https://vi-life-diagnostics.vercel.app/",
      repoUrl: "https://github.com/arjav007/vi-life-diagnostics",
      metrics: ["📈 35% Improvement in booking efficiency", "⚡ 40% Faster database query performance"],
      technologies: ["Next.js", "Express.js", "PostgreSQL", "JWT"]
    },
    {
      title: "Patni Automobiles",
      desc: "A responsive business website built with HTML, CSS, JS, and integrated with AWS for hosting.",
      imageUrl: "/patni-auto-image.jpg", // Replace with a relevant project image
      liveUrl: "https://patniautomobiles.com/", // Add live link if available
      repoUrl: "https://github.com/arjav007/patni-automobiles",
      metrics: ["Increased Production tyres sale by 25%"],
      technologies: ["HTML", "CSS", "JS","AWS"]
    },
    {
      title: "Park My Car",
      desc: "A smart parking solution to find and book spots in real-time, conceptualized for a techno-entrepreneurship project.",
      imageUrl: "/park-my-car.jpg", // Replace with a relevant project image
      liveUrl: "https://park-my-car.vercel.app/", // Add live link if available
      repoUrl: "https://github.com/arjav007/park-my-car", // Update with correct repo if different
      metrics: ["📊 40% Improvement in data insights", "⏱️ 50% Reduction in manual reporting time"],
      technologies: ["PostgreSQL", "JS", "JWT"]
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-black/20" id="projects">
      {/* The starfield animation is placed here, in the background. */}
      <StarsCanvas />
      <div className="container mx-auto px-6 z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects Spotlight</h2>
        <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {}
            }}
        >
          {userProjects.map(p => <ProjectCard key={p.title} {...p} />)}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

