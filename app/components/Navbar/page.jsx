'use client'; // Click handlers ke liye zaroori hai

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-end p-4 md:px-12">
        
        {/* DESKTOP MENU: md:flex se sirf laptop/tablet par dikhega, choti screens par hidden rahega */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href='/' className="font-bold text-black px-4 py-2 rounded hover:text-[#e55555] transition">Home</Link>
          <Link href='/Works' className="font-bold text-black px-4 py-2 rounded hover:text-[#e55555] transition">Works</Link>
          <Link href='/Blog' className="font-bold text-black px-4 py-2 rounded hover:text-[#e55555] transition">Blog</Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON: md:hidden se sirf mobile screens par dikhega */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black hover:text-[#e55555] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Cross Icon (X) jab menu khula ho
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon (3 lines) jab menu band ho
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU: Jab isOpen true hoga toh open hoga */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col items-center py-4 gap-4 shadow-lg animate-fadeIn">
          <Link href='/' onClick={() => setIsOpen(false)} className="font-bold text-black w-full text-center py-2 hover:bg-gray-50 hover:text-[#e55555] transition">Home</Link>
          <Link href='/Works' onClick={() => setIsOpen(false)} className="font-bold text-black w-full text-center py-2 hover:bg-gray-50 hover:text-[#e55555] transition">Works</Link>
          <Link href='/Blog' onClick={() => setIsOpen(false)} className="font-bold text-black w-full text-center py-2 hover:bg-gray-50 hover:text-[#e55555] transition">Blog</Link>
        </div>
      )}
    </nav>
  );
}
