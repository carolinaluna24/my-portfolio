import React from "react";

export default function About() {
  return (
    <section id="about" className="container mx-auto flex px-10 py-20 flex-col md:flex-row items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col items-center text-center md:text-left">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hola, soy Carolina Luna          
        </h1>
        <p className="mb-8 leading-relaxed">
          Futura Ingeniera Informática, con pasión por crear soluciones creativas y efectivas en aplicaciones web.
        </p>
        <div className="flex justify-center">
          <a href="#contact" className="inline-flex text-white bg-green-500 py-2 px-6 rounded hover:bg-green-600">
            Contáctame  
          </a>
          <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 py-2 px-6 rounded hover:bg-gray-700 hover:text-white">
            Mis proyectos
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" src="https://www.udenar.edu.co/recursos/wp-content/uploads/2024/03/Carolina_Luna.jpg" alt="Carolina Luna" />
      </div>
    </section>
  );
}
