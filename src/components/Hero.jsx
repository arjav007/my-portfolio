import React, { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';

// --- This is the 3D Starfield Background Component ---
// It creates the interactive, futuristic particle effect.
function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    // Animate the rotation of the starfield
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Make the stars subtly react to the mouse position for an interactive feel
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

// --- This is the main Hero Component ---
// It combines your text content with the 3D background.
export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center text-center text-white relative overflow-hidden">
      {/* Canvas for the 3D background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Your content, now layered on top of the 3D background */}
      <div className="z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider"
        >
          Hi, I'm <span className="text-purple-400">Arjav Patni</span> 👋
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          A passionate developer crafting modern, responsive, and high-performance web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex gap-4 justify-center mt-8"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-purple-600 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-white rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

