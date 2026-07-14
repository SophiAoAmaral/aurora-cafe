import React from 'react'
import {cardapio} from './CardapioObj'
import { useState } from 'react'

export const Cardapio = () => {
    console.log(cardapio)

    function handleTodos(){

    }
    const [filtro, setFiltro] = useState('todos');
    const itensFiltrados = filtro === 'todos' ? cardapio : cardapio.filter(item => item.tipo === filtro);

  return (
    <section className='container'>
        <div>
            <div>
                <span>O cardápio</span>
                <h2>Feito na hora, servido com calma</h2>
                <p>Uma seleção do que sai do balcão. O menu completo muda toda estação.</p>
                <div>
                    <button onClick={'todos'}>Todos</button>
                    <button  onClick={() => setFiltro('cafe')}>Cafés</button>
                    <button onClick={() => setFiltro('doce')}>Doces</button>
                    <button onClick={() => setFiltro('salgado')}>Salgados</button>
                    <button onClick={() => setFiltro('gelado')}>Gelados</button>
                </div>
            </div>
            <div>
                {itensFiltrados.map(item => (
  <div  key={item.id}>
    <h3>{item.nome}</h3>
    <p>{item.descricao}</p>
    <span>{item.valor}</span>
  </div>
))}
            </div>
        </div>
    </section>
  )
}
