import React from 'react';
import StarsCanvas from './Stars.jsx'; // 1. Import the StarsCanvas component

// This is the updated Footer component.
// It has a simple, clean design that matches the futuristic theme.
export default function Footer() {
  return (
    // 2. Make the footer a `relative` positioning context
    <footer className="relative overflow-hidden py-8 text-center text-gray-500 bg-black/20">
      
      {/* 3. Add the StarsCanvas as the background layer */}
      <div className="absolute inset-0 z-0 h-full">
        <StarsCanvas />
      </div>

      {/* 4. Ensure the content is on a higher layer */}
      <div className="relative z-10">
        <p>© {new Date().getFullYear()} Arjav Patni. All Rights Reserved.</p>
      </div>
      
    </footer>
  );
}
