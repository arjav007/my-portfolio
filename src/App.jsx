import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ==========================================================================
// 3D Starfield Background Component
// ==========================================================================
function Stars(props) {
  const ref = useRef();
  // Generate 5000 random points in a sphere
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    // Animate the starfield
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Make stars react to mouse movement for an interactive feel
    if(state.mouse.x && state.mouse.y){
      ref.current.rotation.y += state.mouse.x * 0.005;
      ref.current.rotation.x += state.mouse.y * 0.005;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#9C27B0" // A futuristic purple color
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// ==========================================================================
// Custom Cursor Component for a futuristic feel
// ==========================================================================
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out hidden md:block"
      style={{ transform: `translate3d(${position.x - 8}px, ${position.y - 8}px, 0)` }}
    >
      <div className="w-4 h-4 rounded-full bg-purple-400 opacity-50 backdrop-blur-sm"></div>
    </div>
  );
};


// ==========================================================================
// Reusable Animated Section Wrapper for scroll-reveal effects
// ==========================================================================
const AnimatedSection = ({ children, className, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.section>
  );
};

// ==========================================================================
// Header Component
// ==========================================================================
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-40">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold text-white tracking-widest"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          ARJAV
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {links.map((link, i) => (
            <motion.button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {link}
            </motion.button>
          ))}
        </div>

        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
        </div>
      </nav>
      
      <motion.div
          className={`absolute top-0 left-0 w-full h-screen bg-black/90 md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
      >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
              {links.map((link) => (
                  <button key={link} onClick={() => scrollToSection(link)} className="text-gray-300 hover:text-purple-400 text-3xl">
                      {link}
                  </button>
              ))}
          </div>
      </motion.div>
    </header>
  );
};


// ==========================================================================
// Hero Section Component
// ==========================================================================
const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>
      <motion.div
        className="z-10 px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider">
           Hi, I'm <span className="text-purple-400">Arjav Patni</span> 👋
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          I'm a passionate developer focused on building creative, modern, and
          responsive web applications using the latest technologies.
        </p>
         <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 px-8 py-3 bg-purple-600 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            whileHover={{ boxShadow: "0 0 20px rgba(156, 39, 176, 0.7)" }}
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
};

// ==========================================================================
// About Section Component
// ==========================================================================
const About = () => {
  return (
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

// ==========================================================================
// Projects Section Component
// ==========================================================================
const ProjectCard = ({ title, desc, imageUrl, liveUrl, repoUrl }) => (
  <motion.div 
    className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden group border border-white/10 flex flex-col"
    whileHover={{ y: -10, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-gray-400 flex-grow">{desc}</p>
      <div className="flex gap-4 mt-4">
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

const Projects = () => {
  // YOUR PROJECT DATA IS NOW USED HERE
  const userProjects = [
    {
      title: "Vi-Life Diagnostics",
      desc: "A full-stack diagnostic lab website built with Next.js, Express, and Supabase.",
      imageUrl: "/vi-life-photo.png",
      liveUrl: "https://vi-life-diagnostics.vercel.app/",
      repoUrl: "https://github.com/arjav007/vi-life-diagnostics",
    },
    {
      title: "Patni Automobiles Website",
      desc: "A responsive business website built with HTML, CSS, JS, and AWS integration.",
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
    <AnimatedSection className="py-24 bg-black/20" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userProjects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </AnimatedSection>
  );
};

// ==========================================================================
// Skills Section Component
// ==========================================================================
const SkillIcon = ({ name }) => (
  <motion.div 
    className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-lg border border-white/10"
    whileHover={{ 
      scale: 1.1, 
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0 0 15px rgba(156, 39, 176, 0.5)"
    }}
  >
    <p className="text-lg font-semibold text-white text-center">{name}</p>
  </motion.div>
);

const Skills = () => {
  // YOUR SKILL DATA IS NOW USED HERE
  const userSkills = ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Node.js", "Python", "AWS"];

  return (
    <AnimatedSection className="py-24" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {userSkills.map(skill => <SkillIcon key={skill} name={skill} />)}
        </div>
      </div>
    </AnimatedSection>
  );
};

// ==========================================================================
// Contact Section Component
// ==========================================================================
const Contact = () => {
  // YOUR FORMSPREE LOGIC IS NOW USED HERE
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/xovnzlvk', { // Your Formspree URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setFormStatus('An error occurred. Please try again.');
    }
  };

  return (
    <AnimatedSection className="py-24 bg-black/20" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Contact Me</h2>
        <p className="mb-8 text-lg text-gray-300">
          Have a project idea or want to collaborate? Let's connect!
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          ></textarea>
          <div className="text-center">
            <motion.button
              type="submit"
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(156, 39, 176, 0.7)" }}
            >
              Send Message
            </motion.button>
          </div>
          {formStatus && <p className="mt-4 text-center text-gray-300">{formStatus}</p>}
        </form>
      </div>
    </AnimatedSection>
  );
};

// ==========================================================================
// Main App Component
// ==========================================================================
export default function App() {
  return (
    <div className="bg-[#050816] text-white font-sans selection:bg-purple-500 selection:text-white">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Arjav Patni. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

