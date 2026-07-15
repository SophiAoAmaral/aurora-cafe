import React from 'react'
import {cardapio} from './CardapioObj'
import { useState } from 'react'

export const Cardapio = () => {
    console.log(cardapio)

    const [filtro, setFiltro] = useState('todos');
    const itensFiltrados = filtro === 'todos' ? cardapio : cardapio.filter(item => item.tipo === filtro);


  return (
    <section className='bg-surface' id='cardapio'>
      <section className="container">
        <div className='mt-20 flex flex-col md:items-center md:mb-20 '>
          <div className='flex flex-col items-center justify-center gap-3'>
            <span className='uppercase text-accent font-bold text-sm tracking-widest'>O cardápio</span>
            <h2 className='font-display md:text-6xl text-4xl text-center md:text-start'>Feito na hora, servido com calma</h2>
            <p className='text-muted font-md text-center md:text-start'>
              Uma seleção do que sai do balcão. O menu completo muda toda estação.
            </p>
            <div className={`flex gap-3 md:gap-6 flex-wrap items-center justify-center md:justify-start`}>
              <button onClick={() => setFiltro("todos")} className={`py-2 px-4 rounded-2xl text-sm cursor-pointer hover:bg-accent hover:text-cream transition ${filtro === 'todos' ? 'bg-accent text-cream hover:border-0 ':'border border-muted text-black'}`}>Todos</button>
              <button onClick={() => setFiltro("cafe")} className={`py-2 px-4 rounded-2xl text-sm cursor-pointer hover:bg-accent hover:text-cream transition ${filtro === 'cafe' ? 'bg-accent text-cream hover:border-0 ':'border border-muted text-black'}`}>Cafés</button>
              <button onClick={() => setFiltro("doce")} className={`py-2 px-4 rounded-2xl text-sm cursor-pointer hover:bg-accent hover:text-cream transition ${filtro === 'doce' ? 'bg-accent text-cream hover:border-0 ':'border border-muted text-black'}`}>Doces</button>
              <button onClick={() => setFiltro("salgado")} className={`py-2 px-4 rounded-2xl text-sm cursor-pointer hover:bg-accent hover:text-cream transition ${filtro === 'salgado' ? 'bg-accent text-cream hover:border-0 ':'border border-muted text-black'}`}>Salgados</button>
              <button onClick={() => setFiltro("gelado")} className={`py-2 px-4 rounded-2xl text-sm cursor-pointer hover:bg-accent hover:text-cream transition ${filtro === 'gelado' ? 'bg-accent text-cream hover:border-0 ':'border border-muted text-black'}`}>Gelados</button>
            </div>
          </div>
          <div className='grid md:grid-cols-2 gap-3 md:gap-10 mt-10 md:w-200 mb-10' >
            {itensFiltrados.map((item) => (
              <div key={item.id}  className=' md:ml-10  relative flex flex-col md:justify-center'>
                  <h3 className='text-xl'>{item.nome}</h3>
                  <p className='text-xs text-muted'>{item.descricao}</p>
                  <span className='absolute top-1  left-70 md:left-60 text-md'>{item.valor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
