import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="text-white text-2xl font-medium">Mi Portafolio</a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white">Acerca de mí</a>
          <a href="#projects" className="mr-5 hover:text-white">Proyectos</a>
          <a href="#skills" className="mr-5 hover:text-white">Habilidades</a>
          <a href="#contact" className="mr-5 hover:text-white">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
