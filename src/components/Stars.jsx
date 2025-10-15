import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// This is the reusable 3D Starfield Background Component.
// It creates the interactive, futuristic particle effect.
function Starfield(props) {
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

// This is the exported component that wraps the 3D canvas.
export default function StarsCanvas() {
  return (
    <div className="w-full h-auto fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Starfield />
        </Suspense>
      </Canvas>
    </div>
  )
}
