import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <h1 className="text-3xl font-medium title-font text-white mb-12">Habilidades</h1>
        <div className="flex flex-wrap -m-2">
          {skills.map((skill) => (
            <div key={skill.title} className="p-2 w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
              <div className="bg-gray-800 p-4 rounded flex flex-col items-center">
                <span className="title-font font-medium text-white mb-2">{skill.title}</span>
                <img 
                  //className="lg:h-48 md:h-36 w-full object-cover object-center mb-6"
                  className="object-contain h-32 w-32 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32" 
                  src={skill.image} 
                  alt={skill.title} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
