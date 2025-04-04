'use client';

import { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavigate('home')} 
            className="flex items-center"
          >
            <span className="text-xl font-bold text-white">Tunja Conecta con las Obras</span>
          </button>
          
          {/* Botón de menú hamburguesa para móvil */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menú para escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleNavigate('home')}
              className={`text-gray-300 hover:text-white ${currentPage === 'home' ? 'text-white' : ''}`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavigate('plan')}
              className={`text-gray-300 hover:text-white ${currentPage === 'plan' ? 'text-white' : ''}`}
            >
              Plan de Desarrollo
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className={`text-gray-300 hover:text-white ${currentPage === 'contact' ? 'text-white' : ''}`}
            >
              Contacto
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden py-2 space-y-2 mt-2 border-t border-gray-700`}
        >
          <button
            onClick={() => handleNavigate('home')}
            className={`block w-full text-left px-2 py-1 text-gray-300 hover:text-white ${
              currentPage === 'home' ? 'text-white' : ''
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavigate('plan')}
            className={`block w-full text-left px-2 py-1 text-gray-300 hover:text-white ${
              currentPage === 'plan' ? 'text-white' : ''
            }`}
          >
            Plan de Desarrollo
          </button>
          <button
            onClick={() => handleNavigate('contact')}
            className={`block w-full text-left px-2 py-1 text-gray-300 hover:text-white ${
              currentPage === 'contact' ? 'text-white' : ''
            }`}
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
}
