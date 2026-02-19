import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Added 'Home' to the array
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full z-50 bg-[#050209]/80 backdrop-blur-md border-b border-white/10 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Avinash<span className="text-white">.dev</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-pink-500 transition font-medium text-sm tracking-wide">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-white">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f0715] border-b border-white/10 p-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-pink-500">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;