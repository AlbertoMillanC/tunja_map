'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-white">Tunja Conecta con las Obras</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white">
              Inicio
            </Link>
            <Link href="/plan-desarrollo" className="text-gray-300 hover:text-white">
              Plan de Desarrollo
            </Link>
            <Link href="/contacto" className="text-gray-300 hover:text-white">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
