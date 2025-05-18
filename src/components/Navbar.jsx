import React, { useState } from 'react';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-blue-700 text-white sticky top-0 z-50 py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">BestWorkers</h1>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <a href="#hero" className="hover:text-gray-300 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300 cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300 cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a href="#register" className="hover:text-gray-300 cursor-pointer">
                Register
              </a>
            </li>
            <li>
              <a href="#find" className="hover:text-gray-300 cursor-pointer">
                Find Workers
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-3">
            <li>
              <a href="#hero" className="block hover:text-gray-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-gray-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="block hover:text-gray-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#register" className="block hover:text-gray-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Register
              </a>
            </li>
            <li>
              <a href="#find" className="block hover:text-gray-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Find Workers
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-gray-300 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
