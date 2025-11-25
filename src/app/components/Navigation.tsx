'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Project', href: '/Project' },
    { name: 'Contact', href: '/Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8">
      {/* Glass Backdrop */}
      <div className="absolute inset-0 backdrop-blur-sm pointer-events-none" />

      <div className="relative container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            R
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-lg font-medium transition-all duration-500 group
                ${pathname === item.href ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-300'}`}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-lg shadow-cyan-500/50" />
              )}
              <span className="absolute -inset-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="absolute inset-x-0 bottom-0 h-8 bg-cyan-500/20 blur-xl" />
              </span>
            </Link>
          ))}
        </div>

        {/* TOMBOL MOBILE — PAKAI YANG LAMA (SVG CLASSIC) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-[30px] right-[45px] w-10 h-10 text-cyan-400 hover:text-cyan-300 focus:outline-none z-50 transition-all duration-300"
          >
            <svg
              className={`w-full h-full transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden fixed top-[100px] right-[45px] w-[180px] bg-black/70 backdrop-blur-2xl border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-500/30 overflow-hidden transition-all duration-500 ease-out
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium text-center py-3 rounded-lg transition-all duration-300
                ${pathname === item.href
                  ? 'text-cyan-400 bg-cyan-500/20 underline decoration-2 underline-offset-4'
                  : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10'
                }`}
              style={{ animation: isOpen ? `slideDown 0.4s ease-out ${index * 0.1}s both` : '' }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Animasi */}
      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;