import chatbot from "./assets/chatbot.512x470.png";
import machineLearning from "./assets/machine-learning.458x512.png";
import astro from "./assets/astro.512x460.png";
import colab from "./assets/colab.512x460.png";
import hackerCat from "./assets/hacker-cat.507x512.png";
import ntlm from "./assets/ntlm.512x460.png"; 
import youtube from "./assets/youtube.512x360.png";
import css from "./assets/css3.451x512.png";
import html from "./assets/html.451x512.png";
import js from "./assets/js-official.512x512.png";
import nodejs from "./assets/nodejs.512x314.png";
import openai from "./assets/openai.505x512.png";
import python from "./assets/python.512x508.png";
import react from "./assets/reactjs.512x455.png";
import github from "./assets/github.512x489.png"; 

export const projects = [
  {
    title: "Chat GPT to PDF",
    subtitle: "Tecnología Node.js",
    description: "Aplicación que permite generar un chatbot que responda dudas a partir del contenido de un PDF usando la API de OpenAI.",
    image: chatbot,   
    link: "https://github.com/carolinaluna24/ChatGptPDF"
  },

  {
    title: "Machine Learning",
    subtitle: "Tecnología Python",
    description: "Aplicación que permite generar un detector de rostros e identifar emociones usando un modelo de aprendizaje automático.",
    image: machineLearning,
    link: "https://github.com/carolinaluna24/Emociones"
  },
  {
    title: "Portafolio",
    subtitle: "Tecnología Astro",
    description: "Aplicación que contiene una hoja de vida imprimible.",
    image: astro,
    link: "https://porfilio-json-astro-print-main-hkyj7i6sn.vercel.app/"
  }
  ,
  {
    title: "Modulación de una señal AM",
    subtitle: "Tecnología colab de Google",
    description: "Aplicación que permite generar una señal AM con modulación de frecuencia y amplitud.",
    image: colab,
    link: "https://colab.research.google.com/drive/1nengcLwG6JRzcelMCOH7J_orpfY8Jkgl#scrollTo=7Mro9sVURGqU"
  },
  {
    title: "Instalación DEVIAN",
    subtitle: "Software libre",
    description: "Tutorial de instalación de DEVIAN",
    image: youtube,
    link: "https://www.youtube.com/watch?v=Y9O7vhQHy9I"
  }
  ,
  {
    title: "Kerberos Silver",
    subtitle: "Técnica ticket Silver",
    description: "Ejemplo de NTLM para firmar un ticket de Kerberos Silver",
    image: hackerCat,
    link: "https://github.com/carolinaluna24/NetNTLMtoSilverTicket"
  }

];


export const skills = [
  {
    title: "CSS",
    image: css,
  },
  {
    title: "HTML",
    image: html,
  },
  {
    title: "JavaScript",
    image: js,
  },
  {
    title: "NodeJS",
    image: nodejs,
  },
  {
    title: "OpenAI",
    image: openai,
  },
  {
    title: "Python",
    image: python,
  },
  {
    title: "React",
    image: react,
  },
  {
    title: "GitHub",
    image: github,
  }
  ,
  {
    title: "Astro",
    image: astro,
  }

];
