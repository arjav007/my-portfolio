import React from 'react';

// This is the updated Footer component.
// It has a simple, clean design that matches the futuristic theme.
export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500">
      <p>© {new Date().getFullYear()} Arjav Patni. All Rights Reserved.</p>
    </footer>
  );
}

