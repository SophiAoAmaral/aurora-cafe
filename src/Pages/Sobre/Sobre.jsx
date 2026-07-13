import React from 'react'
import barista from '../../../public/imgs/barista.png'


export const Sobre = () => {
    const carac =[
        {n: '8' , text:'anos torrando'},
        {n: '12' , text:'produtores parceiros'},
        {n: '40+' , text:'rótulos por ano'},
    ]
  return (
    <section className='container'>
        <div>
            <div>
                <span>Nossa história</span>
                <h1>Um café pensado para a pausa, não para a pressa.</h1>
                <p>A Aurora nasceu de uma torrefação de quintal e da vontade de servir o café do jeito certo: sem correria, com o grão no ponto e a xícara na hora. Cada método é preparado à vista, do coado ao espresso.</p>
                <p>Trabalhamos com produtores da Mantiqueira e do Cerrado Mineiro, em relações diretas e justas. O resultado você sente na primeira gole.</p>
                <div>
                    {
                        carac.map((item, i)=>(
                            <div key={i}>
                                <h3>{item.n}</h3>
                                <span>{item.text}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>

                    <img src={barista} alt="" />

            </div>
        </div>
    </section>
  )
}
