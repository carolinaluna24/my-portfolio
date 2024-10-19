import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto">
        <h1 className="text-3xl font-medium title-font text-white mb-12">Contacto</h1>
        <form className="w-full md:w-1/2 mx-auto">
          <div className="mb-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Nombre" 
              className="w-full p-2 bg-gray-800 rounded text-white"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Correo electrónico" 
              className="w-full p-2 bg-gray-800 rounded text-white"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-4">
            <textarea 
              name="message" 
              placeholder="Tu mensaje" 
              className="w-full p-2 bg-gray-800 rounded text-white"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="text-white bg-green-500 py-2 px-6 rounded hover:bg-green-600"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
