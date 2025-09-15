import React from 'react';

// --- 1. Import your project images ---
import project1Image from '../assets/project1.png'; // Make sure you have this image
import project2Image from '../assets/project2.png'; // And this one

const projects = [
  {
    id: 1,
    title: 'Vi-Life Diagnostics Website',
    description: 'A full-stack diagnostic lab website with a Next.js frontend and an Express.js backend, featuring health package browsing and user authentication.',
    imageUrl: project1Image, // Use the imported variable here
    liveUrl: 'https://vi-life-diagnostics.vercel.app/',
    repoUrl: 'https://github.com/arjav007/vi-life-diagnostics'
  },
  {
    id: 2,
    title: 'Another Cool Project',
    description: 'A brief description of your second project, highlighting the key technologies and features.',
    imageUrl: project2Image, // And here
    liveUrl: 'https://example.com/project-two',
    repoUrl: 'https://github.com/your-username/project-two'
  }
];

const Projects = () => {
  // ... the rest of the component code remains the same
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>
          <p className="text-lg text-gray-600 mt-2">A selection of my recent work.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
              
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                
                {/* Project Links */}
                <div className="flex space-x-4 mt-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition-colors duration-300 font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;