import React from "react";

export default function About() {
  return (
    <section id="about" className="container mx-auto flex px-10 py-20 flex-col md:flex-row items-center">
      
      {/* Sección de la imagen, ahora posicionada al lado izquierdo */}
      <div className="w-full md:w-1/3 lg:w-1/4 mb-10 md:mb-0 md:mr-8 flex justify-center">
        <img
          className="object-cover object-center rounded-lg border-4 border-gray-300 shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-full"
          src="https://www.udenar.edu.co/recursos/wp-content/uploads/2024/03/Carolina_Luna.jpg" 
          alt="Carolina Luna"
        />
      </div>
      
      {/* Sección del texto, ahora en el lado derecho */}
      <div className="lg:flex-grow md:w-2/3 lg:w-3/4 lg:pl-16 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hola, soy Carolina Luna          
        </h1>
        <p className="mb-8 leading-relaxed">
          Futura Ingeniera Informática, con pasión por crear soluciones creativas y efectivas en aplicaciones web.
        </p>
        <div className="flex justify-center md:justify-start">
          <a href="#contact" className="inline-flex text-white bg-green-500 py-2 px-6 rounded hover:bg-green-600">
            Contáctame
          </a>
          <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 py-2 px-6 rounded hover:bg-gray-700 hover:text-white">
            Mis proyectos
          </a>
        </div>
      </div>
      
    </section>
  );
}
