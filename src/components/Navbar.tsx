'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#1f1301] shadow-lg px-4 py-1">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/wkk.png"
            alt="WK Beauty Salon"
            width={80}
            height={80}
            className="rounded-full shadow-md"
          />
          <span className="text-[#bcb08a] text-2xl font-bold">WK Beauty Salon</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#bcb08a] font-bold hover:text-[#aa660d] transition-colors duration-300">Home</Link>
          <Link href="/services" className="text-[#bcb08a] font-bold hover:text-[#aa660d] transition-colors duration-300">Services</Link>
          <Link href="/products" className="text-[#bcb08a] font-bold hover:text-[#aa660d] transition-colors duration-300">Products</Link>
          <Link href="/about" className="text-[#bcb08a] font-bold hover:text-[#aa660d] transition-colors duration-300">About</Link>
          <Link href="/contact" className="text-[#bcb08a] font-bold hover:text-[#aa660d] transition-colors duration-300">Contact</Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-1 rounded-md bg-[#FFF8F0] opacity-70 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#aa660d] transition-all"
          />
          <button className="text-[#bcb08a] hover:text-[#aa660d] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 0l4.5 4.5" />
            </svg>
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#bcb08a]">
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1f1301] text-[#bcb08a] py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className="font-bold hover:text-[#aa660d]">Home</Link>
            <Link href="/services" className="font-bold hover:text-[#aa660d]">Services</Link>
            <Link href="/products" className="font-bold hover:text-[#aa660d]">Products</Link>
            <Link href="/about" className="font-bold hover:text-[#aa660d]">About</Link>
            <Link href="/contact" className="font-bold hover:text-[#aa660d]">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
