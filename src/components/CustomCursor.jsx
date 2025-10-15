import React, { useState, useEffect } from 'react';

// This component creates a custom cursor that follows the mouse for a futuristic feel.
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

export default CustomCursor;

