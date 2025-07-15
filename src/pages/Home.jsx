import React from 'react'
import './Home.css'

export default function Home() {
  return (
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
  )
}
