import React from 'react'
import { StickyScroll } from './ui/StickyScroll'
import Image from 'next/image';

const content = [
  {
    title: "Reservas de canchas de futbol",
    description:
      "Este proyecto se enfoca en la gestión de canchas de fútbol en la ciudad de Córdoba. Actualmente, las reservas se realizan a través de WhatsApp. El objetivo es proporcionar una plataforma que permita a los clientes y a los propietarios de las canchas gestionar sus reservas de manera más eficiente.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image 
          src="/images/proyectos/canchaReserva.avif" 
          alt="cancha"
          width={300}
          height={300}
          className="h-full w-full object-cover" 
          />
      </div>
    ),
  },
  {
    title: "Coffe",
    description:
      "El proyecto consiste en una aplicación para la ventas de cafe, el proyecto nacio por mi fanatismo al cafe es muy escalable.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image 
          src="/images/proyectos/coffe.png" 
          alt="cafe"
          width={500}
          height={500}
          className="h-full w-full object-cover" 
          />
      </div>
    ),
  },
  {
    title: "Bebidas",
    description:
      "El proyecto consiste en una aplicación para la ventas de bebidas,todavia no se termino la api que usaba se callo.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image 
          src="/images/proyectos/cerveza-proyect.png" 
          alt="cafe"
          width={300}
          height={300}
          className="h-full w-full object-cover" 
          />
      </div>
    ),
  },
  {
    title: "Dog",
    description:
      "El proyecto es simple renderiza una imagen de un perro aleatoriamente ademas tiene un contador y un cambiador de estados.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image 
          src="/images/proyectos/dog.png" 
          alt="dog"
          width={300}
          height={300}
          className="h-full w-full object-cover" 
          />
      </div>
    ),
  },
  {
    title: "Elije tu personaje",
    description:
      "un proyecto simple donde pones tu nombre y tu personaje favorito y te trae un mensaje de exito con tu informacion.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image 
          src="/images/proyectos/personaje.png" 
          alt="foto"
          width={300}
          height={300}
          className="h-full w-full object-cover" 
          />
      </div>
    ),
  },
  {
    title: "Elije tu personaje",
    description:
      "un proyecto simple donde pones tu nombre y tu personaje favorito y te trae un mensaje de exito con tu informacion.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image 
          src="/public/images/proyectos/personaje.png" 
          alt="foto"
          width={300}
          height={300}
          className="h-full w-full object-cover" 
          />
      </div>
    ),
  },
];

const Projects = () => {
  return (
    <div >
      <h1 className="text-3xl font-bold text-center text-white mb-8">Proyectos en Progreso</h1>
      <StickyScroll content={content}/>
    </div>
  )
}

export default Projects