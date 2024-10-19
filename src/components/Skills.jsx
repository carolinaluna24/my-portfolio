import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <h1 className="text-3xl font-medium title-font text-white mb-12">Habilidades</h1>
        <div className="flex flex-wrap">
          {skills.map((skill) => (
            <div key={skill} className="p-2 w-full md:w-1/2">
              <div className="bg-gray-800 p-4 rounded">
                <span className="title-font font-medium text-white">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
