import React from 'react'
import './ProyectoCard.css'

export default function ProyectoCard({foto, link, titulo, texto, tecnologias = []}) {
    const handleBoton = () => {
        window.open(link, '_blank');
    }
    return (
      <article className='proyecto-card'>
        <div className='proyecto-card-img-container'>
          <img className='proyecto-card-img' src={foto} alt={titulo} />
        </div>
        <div className='proyecto-card-content'>
          <h3 className='proyecto-card-title'>{titulo}</h3>
          <p className='proyecto-card-desc'>{texto}</p>
          <div className='proyecto-card-tecs'>
            {tecnologias.map((tec, idx) => (
              <span className='proyecto-card-chip' key={idx}>{tec}</span>
            ))}
          </div>
          <button className='proyecto-card-btn' onClick={handleBoton}>Ver más</button>
        </div>
      </article>
    )
}
