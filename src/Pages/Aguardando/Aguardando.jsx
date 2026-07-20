import React from 'react'
import fachada from '../../../public/imgs/fachada.png'

export const Aguardando = () => {
  return (
    <section className='bg-bgmarrom'>
        <section className='container md:p-6 pb-20'>
            <div className='grid md:grid-cols-2 gap-5 md:gap-0'>
                <div className='flex flex-col gap-2 items-center md:items-start'>
                    <span className='uppercase text-accent tracking-widest text-sm font-bold pt-10 md:pt-20'>Visite a aurora</span>
                    <h2 className='font-display text-4xl md:text-6xl text-white text-center'>Estamos te esperando</h2>
                    <div className='relative'>
                        <p className='text-cream mt-3'>Rua das Laranjeiras, 128</p>
                        <span className='absolute top-3 -left-8'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B4632B"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg></span>
                        <span className='text-muted'>Centro · São Paulo, SP</span>
                    </div>
                    <div className='flex gap-10 mt-7'>
                        <div>
                            <ul className='relative text-muted'>
                                <li>Seg – Sex</li>
                                <span className='absolute top-0 -left-8'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B4632B"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg></span>
                                <li>Sábado</li>
                                <li>Domingo</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-cream'>
                                <li>07hr - 21hr</li>
                                <li>08hr - 20hr</li>
                                <li>08hr - 18hr</li>
                            </ul>
                        </div>
                    </div>

                        <div className='relative mt-4'>
                            <p className='text-cream'>(11) 4002-8922</p>
                            <span className='absolute top-0 -left-8'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B4632B"><path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg></span>
                        </div>
                </div>

                <img src={fachada} alt="fachada" className='md:rounded-3xl w-180' />
            </div>
        </section>
    </section>
  )
}
