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
      link: "https://juntify.me"
    },
    {
      titulo: "BlintAI",
      texto: "Una herramienta de IA que ayuda a encontrar lugares nuevos para ir en base a preferencias del usuario.",
      foto: blint,
      link: "https://blintapp.vercel.app"
    }


  ]


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
            <button className='btn'>Ver Proyectos</button>
            <button className='secondary-btn'>Contactar</button>
          </div>
        </div>

      </section>

      <section className='yo-section'>
        <div className='yo-texto'>
          <h2>Un poco sobre mí...</h2>
          <p>Holaaa</p>
        </div>
        <img className='foto-yo' src={yo} />
      </section>

      <section className='mis-proyectos-section'>
        {
          proyectos.map(proyecto=>{
            return <ProyectoCard foto={proyecto.foto} link={proyecto.link} titulo={proyecto.titulo} texto={proyecto.texto} />
          })
        }

      </section>
    </>
  )
}
