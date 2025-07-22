import React, { useState, useEffect } from 'react'
import './Home.css'
import ProyectoCard from '../components/ProyectoCard'
import yo from './../assets/yo.jpg'
import juntify from './../assets/juntify.png'
import blint from './../assets/blint.png'
import tuitui from './../assets/tuitui.png'
import { motion } from 'framer-motion'
import BlobImage from '../components/BlobImage'

export default function Home() {
  const proyectos = [
    {
      titulo: "Juntify",
      texto: "Un asistente de juntadas personalizadas entre amigos. En base a preferencias e IA busca la mejor opción y gestiona la organización de la misma.",
      foto: juntify,
      link: "https://juntify.me",
      tecnologias: ["React Native", "Node.js", "PostgreSQL"]
    },
    {
      titulo: "BlintAI",
      texto: "Una herramienta de IA que ayuda a encontrar lugares nuevos para ir, en base a preferencias del usuario.",
      foto: blint,
      link: "https://blintapp.vercel.app",
      tecnologias: ["React", "Vite", "HuggingFace API"]
    },
    {
      titulo: "Tienda Tui Tui",
      texto: "Una tienda ficticia consumiendo una API de productos, poniendo a prueba mis habilidades en React y CSS incorporando un carrito y un checkout.",
      foto: tuitui,
      link: "https://ianjolo.github.io/TP7EFSI_Berman_Jolodovsky_Goldberg/",
      tecnologias: ["React", "Vite", "CSS"]
    }
  ]

  const handleVerProyectos = () => {
    const section = document.querySelector('.mis-proyectos-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactar = () => {
    window.open('mailto:tuemail@ejemplo.com', '_blank');
  };

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className='titulo-section'>
        <div className='titulo-container'>
          <h1 className='titulo'>
            <span className='green'>&lt;</span> Hola, soy <span className='inverso'>Tomás</span>, <br />
            desarrollador full stack <span className='green'>/&gt;</span>
          </h1>
          <p className='descripcion'>
            Soy un <span className='green'>full stack developer</span> con experiencia en la creación de aplicaciones web y móviles modernas y escalables.
          </p>
          <div className='button-container'>
            <button className='btn' onClick={handleVerProyectos}>Ver Proyectos</button>
            <button className='secondary-btn' onClick={handleContactar}>Contactar</button>
          </div>
        </div>
      </section>

      <section className='yo-section'>
        <div className='yo-texto'>
          <h2>Un poco sobre mí...</h2>
          <p>
            Soy un apasionado desarrollador full stack con experiencia en tecnologías como React, Node.js y bases de datos modernas. Me encanta crear soluciones digitales que impacten positivamente en las personas. Disfruto aprender nuevas herramientas y trabajar en equipo para llevar ideas a la realidad. Siempre busco mejorar mis habilidades y enfrentar nuevos desafíos.
          </p>
        </div>
        <BlobImage />
      </section>
      <h2 className='mis-proyectos-title'>Mis Proyectos</h2>
      <section className='mis-proyectos-section'>
        
        {
          proyectos.map((proyecto, idx) => (
            <ProyectoCard
              key={idx}
              foto={proyecto.foto}
              link={proyecto.link}
              titulo={proyecto.titulo}
              texto={proyecto.texto}
              tecnologias={proyecto.tecnologias}
            />
          ))
        }
      </section>
      {showScroll && (
        <button className="scroll-top-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} aria-label="Subir arriba">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="none"/>
            <path d="M8 16L14 10L20 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </>
  )
}
