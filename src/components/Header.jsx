import React, { useEffect, useState } from 'react'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (section) => (e) => {
    e.preventDefault();
    const el = document.querySelector(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDescargarCV = (e) => {
    e.preventDefault();
    window.open('/cv.pdf', '_blank');
  };

  const handleMail = (e) => {
    e.preventDefault();
    window.open('mailto:tuemail@ejemplo.com', '_blank');
  };

  return (
    <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
      <nav className='nav'>
        <ul className='ul-list'>
          <li><a className='link' href="#" onClick={handleScroll('.titulo-section')}>Sobre mí</a></li>
          <li><a className='link' href="#" onClick={handleScroll('.mis-proyectos-section')}>Proyectos</a></li>
          {/*<li><a className='link' href="#" onClick={handleDescargarCV}>Descargar CV</a></li>*/}
          <li><a className='link' href="#" onClick={handleMail}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}
