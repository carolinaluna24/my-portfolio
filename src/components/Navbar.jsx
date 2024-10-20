import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="text-white text-2xl font-medium">Mi Portafolio</a>

         {/* Nabvegación para pantallas móviles */}
         <button
          onClick={() => setIsOpen(!isOpen)} // Cambia el estado de isOpen al hacer clic
          className="md:hidden ml-auto text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Nabvegación para pantallas PC */}

        <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white">Acerca de mí</a>
          <a href="#projects" className="mr-5 hover:text-white">Proyectos</a>
          <a href="#skills" className="mr-5 hover:text-white">Habilidades</a>
          <a href="#contact" className="mr-5 hover:text-white">Contacto</a>
        </nav>

        {/* Menú pantallas pequeñas */}
        {isOpen && (
          <div className="md:hidden w-full mt-4">
            <nav className="flex flex-col items-center space-y-4">
              <a href="#about" className="hover:text-white">
                Acerca de mí
              </a>
              <a href="#projects" className="hover:text-white">
                Proyectos
              </a>
              <a href="#skills" className="hover:text-white">
                Habilidades
              </a>
              <a href="#contact" className="hover:text-white">
                Contacto
              </a>
            </nav>
          </div>
          )}
      </div>
    </header>
  );
}
