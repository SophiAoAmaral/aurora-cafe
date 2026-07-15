import React from 'react';
import logo from '../../../public/imgs/logo.png'
import { Home } from '../Home/Home';
import { useState, useEffect } from 'react';
import { Carrosel } from '../Carrousel/Carrosel';
import { Link } from 'react-router';

export const Header = () => {
      const [menuAberto, setMenuAberto] = useState(false);

       const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <section className='container '>
        <nav className='flex flex-row justify-between items-center pt-10 pb-2 relative '>
           <li className='font-display text-white text-4xl inline-block'>Café Aurora</li>
    
        <ul className='hidden md:flex gap-4  text-white items-center cursor-pointer text-sm  **:font-semibold **:text-md'>
            <li>Sobre</li>
            <li><a href="#cardapio">Cardápio</a></li>
            <li>Ambiente</li>
            <li>Visite</li>
            <li className='bg-accent px-5 py-2 rounded-2xl hover:bg-accent-hover transition'>
                Reservar mesa
            </li>
        </ul>
    
        <button
            className='md:hidden flex flex-col gap-1 '
            onClick={() => setMenuAberto(!menuAberto)}>
            <span className='w-6 h-0.5 bg-white'></span>
            <span className='w-6 h-0.5 bg-white'></span>
            <span className='w-6 h-0.5 bg-white'></span>
        </button>
    
    
        {menuAberto && (
            <ul className='md:hidden text-center md:text-start absolute top-16 right-0 bg-surface text-ink rounded-xl shadow-lg p-6 flex flex-col gap-4 min-w-48'>
                <li>Sobre</li>
                <li>Cardápio</li>
                <li>Ambiente</li>
                <li >Visite</li>
                <li className='bg-accent text-white px-4 py-2 rounded-xl text-center'>
                    Reservar mesa
                </li>
            </ul>
         )}
    </nav>
 </section>
</header>

  )
}
