import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold text-purple-600">Arjav Patni</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#hero" className="hover:text-purple-600 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-purple-600 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a></li>
          <li><a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a></li>
          <li><a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 pb-4 flex flex-col space-y-4 text-center shadow-md">
          <li><a href="#hero" onClick={() => setOpen(false)} className="block py-2">Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)} className="block py-2">About</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)} className="block py-2">Projects</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)} className="block py-2">Skills</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)} className="block py-2">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}