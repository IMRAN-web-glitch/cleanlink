"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#FBC02D] px-4 py-2 sticky top-0 z-50 md:py-4 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="font-bold text-xl md:text-2xl tracking-tight text-black">
            CleanLink
          </Link>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-7 text-base font-semibold">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
            </li>
            <li>
              <Link href="/shorten" className="hover:text-white transition-colors">Shorten</Link>
            </li>
            <li>
              <Link href="/shorten">
                <span className="bg-[#FFF9C4] text-[#FBC02D] hover:bg-white rounded-lg px-4 py-1.5 shadow transition-colors">Try now</span>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/IMRAN-web-glitch" target="_blank">
                <span className="bg-[#FFF9C4] text-[#FBC02D] hover:bg-white rounded-lg px-4 py-1.5 shadow transition-colors">Github</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col items-center gap-4 mt-3 pb-3 text-base font-semibold bg-[#FBC02D] rounded-b-lg shadow animate-fade-in">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">About</Link>
            </li>
            <li>
              <Link href="/shorten" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Shorten</Link>
            </li>
            <li>
              <Link href="/shorten" onClick={() => setMenuOpen(false)}>
                <span className="bg-[#FFF9C4] text-[#FBC02D] hover:bg-white rounded-lg px-4 py-1.5 shadow transition-colors">Try now</span>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/IMRAN-web-glitch" target="_blank" onClick={() => setMenuOpen(false)}>
                <span className="bg-[#FFF9C4] text-[#FBC02D] hover:bg-white rounded-lg px-4 py-1.5 shadow transition-colors">Github</span>
              </Link>
            </li>
          </ul>
        )}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.3s;
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;
