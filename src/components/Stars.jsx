import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// This is the 3D Starfield Background Component
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

// --- Canvas Wrapper for the Stars ---
// This is the component you will import into other files.
const StarsCanvas = () => {
  return (
    // UPDATED: Removed z-[-1] to allow parent component to control layering.
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

