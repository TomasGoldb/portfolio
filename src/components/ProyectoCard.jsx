import React from 'react'
import './ProyectoCard.css'

export default function ProyectoCard({foto, link, titulo, texto, tecnologias = []}) {
    const handleBoton = () => {
        window.open(link, '_blank');
    }
  return (
    <div className='proyecto'>
        <div className='texto-proyecto'>
            <h3>{titulo}</h3>
            <p>{texto}</p>
            <div className='tecnologias-lista'>
              {tecnologias.map((tec, idx) => (
                <span className='chip-tecnologia' key={idx}>{tec}</span>
              ))}
            </div>
            <button className='btn' onClick={handleBoton}>Ir al proyecto</button>
        </div>
        <img className='foto-proyecto' src={foto} />
    </div>
  )
}
