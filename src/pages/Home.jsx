import React from 'react'
import './Home.css'
import ProyectoCard from '../components/ProyectoCard'
import yo from './../assets/yo.jpg'
import juntify from './../assets/juntify.png'
import blint from './../assets/blint.png'


export default function Home() {
  const proyectos=[
    {
      titulo: "Juntify",
      texto: "Tu asistente de planes",
      foto: juntify,
      link: "https://juntify.me",
      tecnologias: ["React Native", "Node.js", "PostgreSQL"]
    },
    {
      titulo: "BlintAI",
      texto: "Una herramienta de IA que ayuda a encontrar lugares nuevos para ir en base a preferencias del usuario.",
      foto: blint,
      link: "https://blintapp.vercel.app",
      tecnologias: ["React", "Vite", "HuggingFace API"]
    },
    {
      titulo: "Portafolio Web",
      texto: "Mi portafolio personal, desarrollado con React y Vite, donde muestro mis proyectos y habilidades.",
      foto: yo,
      link: "#",
      tecnologias: ["React", "Vite", "CSS"]
    },
    {
      titulo: "Taskify",
      texto: "App para gestionar tareas y proyectos en equipo, con notificaciones y panel Kanban.",
      foto: juntify,
      link: "#",
      tecnologias: ["React", "Firebase", "Material UI"]
    }
  ]

  const handleVerProyectos = () => {
    const section = document.querySelector('.mis-proyectos-section');
    if(section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactar = () => {
    window.open('mailto:tuemail@ejemplo.com', '_blank');
  };

  const handleDescargarCV = () => {
    window.open('/cv.pdf', '_blank'); // Cambia la ruta cuando tengas el archivo
  };

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
            {/*<button className='btn' onClick={handleDescargarCV}>Descargar CV</button>*/}
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
        <img className='foto-yo' src={yo} alt='Foto de Tomás' />
      </section>

      <section className='mis-proyectos-section'>
        {
          proyectos.map((proyecto, idx) => (
            <ProyectoCard key={idx} foto={proyecto.foto} link={proyecto.link} titulo={proyecto.titulo} texto={proyecto.texto} tecnologias={proyecto.tecnologias} />
          ))
        }
      </section>
    </>
  )
}
