'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // For detecting current page

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  return (
    <nav className="bg-transparent p-4 fixed w-full top-0 z-50">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-end items-center space-x-[30px] pr-[100px] pt-[70px]">
        <a
          href="/"
          className={`text-[#ddad81] text-[20px] font-russo transition-colors duration-300 ${
            pathname === '/' ? 'underline text-shadow-glow text-[#634647]' : 'hover:text-[#634647]'
          }`}
        >
          Home
        </a>
        <a
          href="/About"
          className={`text-[#ddad81] text-[20px] font-russo transition-colors duration-300 ${
            pathname === '/About' ? 'underline text-shadow-glow text-[#634647]' : 'hover:text-[#634647]'
          }`}
        >
          About
        </a>
        <a
          href="/Project"
          className={`text-[#ddad81] text-[20px] font-russo transition-colors duration-300 ${
            pathname === '/Project' ? 'underline text-shadow-glow text-[#634647]' : 'hover:text-[#634647]'
          }`}
        >
          Project
        </a>
        <a
          href="#"
          className={`text-[#ddad81] text-[20px] font-russo transition-colors duration-300 ${
            pathname === '#' ? 'underline text-shadow-glow text-[#634647]' : 'hover:text-[#634647]'
          }`}
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-[45px] right-[45px] w-7 h-7 text-[#ddad81] hover:text-[#634647] focus:outline-none z-50 transition-colors duration-300"
        >
          <svg
            className={`w-[35px] h-[35px] transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-[80px] right-[45px] w-[150px] bg-[#ddad81]/90 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-90' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center p-4 space-y-4">
          <a
            href="/"
            className={`text-[#634647] text-lg font-russo w-full text-center py-2 transition-colors duration-300 ${
              pathname === '/' ? 'underline text-shadow-glow bg-[#634647]/30 rounded-lg' : 'hover:bg-[#634647]/30'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/About"
            className={`text-[#634647] text-lg font-russo w-full text-center py-2 transition-colors duration-300 ${
              pathname === '/About' ? 'underline text-shadow-glow bg-[#634647]/30 rounded-lg' : 'hover:bg-[#634647]/30'
            }`}
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="/Project"
            className={`text-[#634647] text-lg font-russo w-full text-center py-2 transition-colors duration-300 ${
              pathname === '/Project' ? 'underline text-shadow-glow bg-[#634647]/30 rounded-lg' : 'hover:bg-[#634647]/30'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Project
          </a>
          <a
            href="#"
            className={`text-[#634647] text-lg font-russo w-full text-center py-2 transition-colors duration-300 ${
              pathname === '#' ? 'underline text-shadow-glow bg-[#634647]/30 rounded-lg' : 'hover:bg-[#634647]/30'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;