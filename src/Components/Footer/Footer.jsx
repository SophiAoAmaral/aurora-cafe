import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-bg'>
        <section className='container p-0'>
            <div className='flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 p-10 border-b border-muted'>
              <div>
                <h2 className='font-display text-2xl'>Café Aurora</h2>
                <p className='text-muted text-sm'>Torrefação e cafeteria. Café de verdade, no tempo certo.</p>
              </div>
              <div className='flex justify-around md:justify-start gap-9'>
                  <ul className='**:cursor-pointer **:text-sm'>
                      <span className='uppercase  text-muted font-bold'>navegar</span>
                      <li>Sobre</li>
                      <li>Cardapio</li>
                      <li>Ambiente</li>
                      <li>Visite</li>
                  </ul>
                  <ul className='**:cursor-pointer **:text-sm'>
                    <span className='uppercase text-xs text-muted font-bold'>Redes</span>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>WhatsApp</li>
                  </ul>
              </div>
            </div>

            <p className='text-center p-4 text-muted'>© 2026 Café Aurora · Todos os direitos reservados</p>


        </section>

    </footer>
  )
}
