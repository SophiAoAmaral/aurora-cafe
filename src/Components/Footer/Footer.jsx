import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-bg'>
        <section className='container'>
            <div className='flex justify-between p-10 border-b border-muted'>
              <div>
                <h2 className='font-display text-2xl'>Café Aurora</h2>
                <p className='text-muted text-sm'>Torrefação e cafeteria. Café de verdade, no tempo certo.</p>
              </div>
              <div className='flex gap-9'>
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
