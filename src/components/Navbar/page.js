"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import "animate.css/animate.min.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Estado para manejar la animación de cierre
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Inicia animación de cierre
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false); // Cierra el menú después de la animación
        setIsClosing(false); // Resetea el estado de cierre
      }, 300); // Duración de la animación (coincide con el CSS)
    } else {
      setIsMenuOpen(true);
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLinkClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
    setIsDropdownOpen(false);
  };

  // Detecta clics fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setIsClosing(true);
        setTimeout(() => {
          setIsMenuOpen(false);
          setIsClosing(false);
        }, 300);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

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
            <span className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-white">
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
          <Link href="/asistente-virtual" className="text-white hover:text-yellow-400 transition-colors" onClick={handleLinkClick}>
                Asistente Virtual
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
            Contáctanos
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="animate__animated animate__fadeInDown text-white hover:text-yellow-400 transition-colors">
            {isMenuOpen ? <X className="animate__animated animate__bounceIn w-6 h-6" /> : <Menu className="animate__animated animate__bounceIn w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          ref={menuRef} 
          className={`animate__animated ${
            isClosing ? "animate__fadeOutUp" : "animate__fadeInDown"
          } md:hidden absolute top-17 left-0 w-full bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-lg`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors" onClick={handleLinkClick}>
              Inicio
            </Link>
            <Link href="/nosotros" className="text-white hover:text-yellow-400 transition-colors" onClick={handleLinkClick}>
              Nosotros
            </Link>
            <button 
              onClick={toggleDropdown}
              className="flex items-center text-white hover:text-yellow-400 transition-colors"
            >
              Conoce más <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4 animate__animated animate__fadeInDown">
                <Link href="/servicios" className="text-white hover:text-yellow-400 transition-colors" onClick={handleLinkClick}>
                  Servicios
                </Link>
                <Link href="/horarios" className="text-white hover:text-yellow-400 transition-colors" onClick={handleLinkClick}>
                  Horarios
                </Link>
              <Link href="/asistente-virtual" className="text-white hover:text-yellow-400 transition-colors" onClick={handleLinkClick}>
                Asistente Virtual
              </Link>
              </div>
            )}
            <div>
              <Link href="/contacto" className="text-white hover:text-yellow-400 transition-colors" onClick={handleLinkClick}>
                Contáctano
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
