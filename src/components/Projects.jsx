import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <h1 className="text-3xl font-medium title-font text-white mb-12">Mis Proyectos</h1>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.title} className="p-4 w-full sm:w-1/2 lg:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded flex flex-col items-center">
                <img 
                //className="lg:h-48 md:h-36 w-full object-cover object-center mb-6" 
                className="object-contain h-48 w-full mb-6"
                src={project.image} 
                alt={project.title} 
                />
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{project.subtitle}</h2>
                <h1 className="text-lg font-medium text-white mb-3">{project.title}</h1>
                <p className="leading-relaxed mb-3">{project.description}</p>
                <a href={project.link} className="text-green-400 inline-flex items-center">Ver proyecto</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
