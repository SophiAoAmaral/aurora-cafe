import React from 'react'
import barista from '../../../public/imgs/barista.png';
import grao from '../../../public/imgs/graos.png';
import { useState, useEffect } from 'react';


export const Sobre = () => {
    const carac =[
        {n: '8' , text:'anos torrando'},
        {n: '12' , text:'produtores parceiros'},
        {n: '40+' , text:'rótulos por ano'},
    ];

      const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth >= 768);
    };

    handleResize(); // verifica ao carregar

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className='bg-bg' id='sobre'>
        <section className={desktop ? 'container' : ''}>
            <div className='grid md:grid-cols-2 mt-15 md:pt-40 items-center gap-10 p-4 pb-20'>
                <div className='md:w-150 flex flex-col gap-5 md:gap-7 text-center md:text-start'>
                    <span className='uppercase text-accent font-semibold md:text-sm  mt-6 md:mt-0' >Nossa história</span>
                    <h1 className='font-display text-4xl md:text-7xl'>Um café pensado para a pausa, não para a pressa.</h1>
                    <p className='md:text-lg'>A Aurora nasceu de uma torrefação de quintal e da vontade de servir o café do jeito certo: sem correria, com o grão no ponto e a xícara na hora. Cada método é preparado à vista, do coado ao espresso.</p>
                    <p className='md:text-lg'>Trabalhamos com produtores da Mantiqueira e do Cerrado Mineiro, em relações diretas e justas. O resultado você sente na primeira gole.</p>
                    <div className='flex gap-5 px-4 items-center justify-center'>
                        {
                            carac.map((item, i)=>(
                                <div key={i} className='text-center'>
                                    <h3 className='text-3xl font-display'>{item.n}</h3>
                                    <span className='text-sm text-muted'>{item.text}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div  className=' relative'>
                        <img src={barista} alt="barsita" className='md:w-500 w-400 h-100 md:h-150 object-cover md:rounded-4xl ' />
                        <img src={grao} alt="grao cafe" className='hidden md:inline w-50 absolute top-[70%]  -left-10 rounded-4xl border-4 border-cream animate-float' />
                </div>
            </div>
        </section>
    </section>
  )
}
