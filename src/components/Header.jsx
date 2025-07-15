import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
        <nav className='nav'>
            <ul className='ul-list'>
                <li><Link className='link' href="/">Home</Link></li>
                <li><Link className='link'  href="/about">Proyectos</Link></li>
                <li><Link className='link'  href="/contact">Contacto</Link></li>
            </ul>
        </nav>
    </header>
  )
}
