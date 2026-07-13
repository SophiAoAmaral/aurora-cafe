import React from 'react'

export const Home = () => {
  return (
    <section className='pt-10 md:pt-20'>
        <span className='text-xs md:text-md border border-muted uppercase tracking-widest rounded-2xl p-2 text-cream '>
            Torrefação artesanal · desde 2016
        </span>
        <div className='md:my-7 md:w-190 flex flex-col gap-7 md:text-start'>
            <h1 className='text-6xl md:text-8xl text-white font-display mt-5'>Onde o café encontra <span className="italic text-cream">calma da manhã.</span></h1>
            <p className='text-surface-2 font-extralight md:text-lg mb-6' >Grãos selecionados, torra própria e receitas que mudam com as estações. Um refúgio no centro da cidade para desacelerar e ficar.</p>
        </div>
        <ul className='flex gap-10 items-center cursor-pointer'>
            <li className='bg-accent py-4 px-4 md:py-4  md:px-8 rounded-2xl text-white hover:bg-accent-hover transition'>Ver cardápio</li>
            <li className='text-white py-4 px-4 md:py-4  md:px-8 not-[]:border border-white/80 rounded-2xl  backdrop-blur-xs hover:bg-white/10 transition '>Como chegar</li>
        </ul>
    </section>
  )
}
