import React from 'react';
import logo from '../../../public/imgs/logo.png'
import { Home } from '../Home/Home';

export const Header = () => {
  return (
    <header className='background-home'>

        <div className='box-shadow'>
            <section className='container'>
                <nav className='flex flex-col md:flex-row justify-between items-center  pt-9 '>
                    <p className='font-display text-white text-4xl'>Café Aurora</p>
            
                    <ul className='flex gap-4 text-white items-center cursor-pointer text-sm'>
                        <li className='bg-white text-black py-2 px-4 rounded-2xl'>Sobre</li>
                        <li>Cardápio</li>
                        <li>Ambiente</li>
                        <li>Visite</li>
                        <li className=' bg-accent px-2 py-1 md:px-5 md:py-2 rounded-2xl hover:bg-accent-hover transition'>Reservar mesa</li>
                    </ul>
                </nav>
                <Home/>
            </section>
        </div>
    </header>
  )
}
