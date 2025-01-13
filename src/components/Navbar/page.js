"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useClickOutside } from '../../hooks/useClickOutside';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));
  useClickOutside(menuRef, () => setIsMenuOpen(false));

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="relative top-0 z-50 w-full bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-lg backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-yellow-400">
            <Image 
              src="/logo-gym.png"
              alt="Fitness Total Gym Logo"
              width={80}
              height={60}
              className="rounded-lg border-1 border-yellow-400"
            />
            <span className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-yellow-400">
              Fitness Total Gym
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
            Inicio
          </Link>
          <Link href="/nosotros" className="text-white hover:text-yellow-400 transition-colors">
            Nosotros
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown}
              className="flex items-center text-white hover:text-yellow-400 transition-colors"
            >
              Conoce más <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute w-48 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg shadow-xl mt-2">
                <div className="py-2 px-4 hover:bg-yellow-600 rounded-t-lg">
                  <Link href="/servicios" className="block text-white" onClick={() => setIsDropdownOpen(false)}>
                    Servicios
                  </Link>
                </div>
                <div className="py-2 px-4 hover:bg-yellow-600 rounded-b-lg">
                  <Link href="/horarios" className="block text-white" onClick={() => setIsDropdownOpen(false)}>
                    Horarios
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/contacto" className="text-white hover:text-yellow-400 transition-colors">
            Contactanos
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white hover:text-yellow-400 transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors" onClick={toggleMenu}>
              Inicio
            </Link>
            <Link href="/nosotros" className="text-white hover:text-yellow-400 transition-colors" onClick={toggleMenu}>
              Nosotros
            </Link>
            <button 
              onClick={toggleDropdown}
              className="flex items-center text-white hover:text-yellow-400 transition-colors"
            >
              Conoce más <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4">
                <Link href="/servicios" className="text-white hover:text-yellow-400 transition-colors" onClick={() => { setIsDropdownOpen(false); setIsMenuOpen(false); }}>
                  Servicios
                </Link>
                <Link href="/horarios" className="text-white hover:text-yellow-400 transition-colors" onClick={() => { setIsDropdownOpen(false); setIsMenuOpen(false); }}>
                  Horarios
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
