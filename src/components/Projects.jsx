import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Helper for scroll-reveal animations
import StarsCanvas from './Stars.jsx'; // Import the starfield animation

// --- Project Card Sub-component ---
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
      borderColor: "rgba(192, 132, 252, 0.5)" 
    }}
    transition={{ duration: 0.3 }}
  >
    <div className="overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-gray-400 flex-grow">{desc}</p>
      
      {metrics && (
        <div className="mt-3 space-y-2 text-sm text-purple-300">
          {metrics.map(metric => <p key={metric}>⚡ {metric}</p>)}
        </div>
      )}

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
      title: "Accounting Square",
      desc: "A comprehensive financial services platform deployed seamlessly with optimized domain and asset rendering.",
      imageUrl: "/accounting-square.png", 
      liveUrl: "https://accounting-square.vercel.app/", 
      repoUrl: "https://github.com/arjav007/accounting-square", 
      metrics: ["Successfully deployed and hosted on Vercel", "Resolved complex asset rendering challenges"],
      technologies: ["Next.js", "React", "Node.js", "Tailwind CSS"]
    },
    {
      title: "Jess Caterers",
      desc: "A custom web application built to replace a legacy WordPress site, featuring full payment integration.",
      imageUrl: "/jess-caterers.png", 
      liveUrl: "https://jess-catering.vercel.app/", 
      repoUrl: "https://github.com/arjav007/jess-caterers", 
      metrics: ["Integrated Merchant Warrior payment gateway", "Modernized legacy WordPress infrastructure"],
      technologies: ["Web Development", "Payment Integration", "UI/UX"]
    },
    {
      title: "India Post Finder",
      desc: "A localized search application utilizing dedicated Indian-focused API endpoints for accurate postal data retrieval.",
      imageUrl: "/quality-west.png",
      liveUrl: "#",
      repoUrl: "https://github.com/arjav007/india-post-finder",
      metrics: ["Transitioned to Indian-focused endpoints for accurate local data"],
      technologies: ["React", "API Integration", "Node.js"]
    },
    {
      title: "Patni Automobiles",
      desc: "A responsive business website built with HTML, CSS, JS, and integrated with AWS for hosting.",
      imageUrl: "/patni-auto-image.jpg", 
      liveUrl: "https://patniautomobiles.com/", 
      repoUrl: "https://github.com/arjav007/patni-automobiles",
      metrics: ["Increased Production tyres sale by 25%"],
      technologies: ["HTML", "CSS", "JS", "AWS"]
    },
    {
      title: "Park My Car",
      desc: "A smart parking solution to find and book spots in real-time, conceptualized for a techno-entrepreneurship project.",
      imageUrl: "/park-my-car.jpg", 
      liveUrl: "https://park-my-car.vercel.app/", 
      repoUrl: "https://github.com/arjav007/park-my-car", 
      metrics: ["📊 40% Improvement in data insights", "⏱️ 50% Reduction in manual reporting time"],
      technologies: ["PostgreSQL", "JS", "JWT", "Python"]
    }
  ];

  return (
    <AnimatedSection className="relative py-24 bg-black/20" id="projects">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <StarsCanvas />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
}