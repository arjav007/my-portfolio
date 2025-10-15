import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // This will now import correctly

// --- Project Card Sub-component ---
// This defines the futuristic look and feel for each project.
const ProjectCard = ({ title, desc, imageUrl, liveUrl, repoUrl }) => (
  <motion.div 
    className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden group border border-white/10 flex flex-col h-full"
    variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        hidden: { opacity: 0, y: 50 },
    }}
    whileHover={{ y: -10, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }}
    transition={{ duration: 0.3 }}
  >
    {/* Project Image with hover effect */}
    <div className="overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
    </div>

    {/* Project Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-gray-400 flex-grow">{desc}</p>
      
      {/* Project Links */}
      <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
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
  // Your specific project data is used here.
  // NOTE: Image paths now point to the /public folder, which is a more flexible approach
  // than importing them directly. Make sure your images are in the `public/` directory.
  const userProjects = [
    {
      title: "Vi-Life Diagnostics",
      desc: "A full-stack diagnostic lab website with a Next.js frontend, Express.js backend, and user authentication.",
      imageUrl: "/vi-life-photo.png",
      liveUrl: "https://vi-life-diagnostics.vercel.app/",
      repoUrl: "https://github.com/arjav007/vi-life-diagnostics",
    },
    {
      title: "Patni Automobiles Website",
      desc: "A responsive business website built with HTML, CSS, JS, and integrated with AWS for hosting.",
      imageUrl: "/patni-auto-image.jpg",
      liveUrl: "https://patniautomobiles.com",
      repoUrl: "https://github.com/arjav007/patni-automobiles",
    },
    {
      title: "Park My Car",
      desc: "A smart parking solution to find and book spots in real-time, conceptualized for a techno-entrepreneurship project.",
      imageUrl: "/park-my-car.jpg",
      liveUrl: "https://park-my-car.vercel.app/", 
      repoUrl: "https://github.com/arjav007/park-my-car",
    },
  ];

  return (
    // The entire section is wrapped with AnimatedSection for scroll-reveal effects.
    <AnimatedSection className="py-24 bg-black/20" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
        <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
                // This makes the project cards animate in one by one.
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

