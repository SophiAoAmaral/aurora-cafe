import React from 'react'
import { Carrosel } from '../Carrousel/Carrosel'
import { Header } from '../Header/Header'

export const Home = () => {
  return (
    <section className='background-home'>
    <div className='box-shadow'>
        <section className='container'>
            <section className='pt-30 text-center md:text-start'>
                <p className='text-xs md:text-md border border-muted uppercase tracking-widest rounded-2xl inline-block p-2 text-cream md:mt-20'>
                    Torrefação artesanal · desde 2016
                </p>
                <div className='md:my-7 md:w-190 flex flex-col gap-7 md:text-start'>
                    <h1 className='text-7xl md:text-8xl text-white font-display mt-5'>Onde o café encontra <span className="italic text-cream">a calma da manhã.</span></h1>
                    <p className='text-surface-2  md:font-extralight md:text-lg mb-6' >Grãos selecionados, torra própria e receitas que mudam com as estações. Um refúgio no centro da cidade para desacelerar e ficar.</p>
                </div>
                <ul className='flex gap-10 items-center cursor-pointer justify-center md:justify-start'>
                    <li className='bg-accent py-4 px-4 md:py-4  md:px-8 rounded-2xl text-white hover:bg-accent-hover transition'>Ver cardápio</li>
                    <li className='text-white py-4 px-4 md:py-4  md:px-8 border border-cream backdrop-blur-2xl rounded-2xl hover:bg-white hover:text-black transition'>Como chegar</li>
                </ul>
            </section>
        </section>
    </div>
    <Carrosel/>
    </section>
  )
}
