import React from 'react'
import ambiente from '../../../public/imgs/interior.png'
import exterior from '../../../public/imgs/exterior.png'
import balcao from '../../../public/imgs/balcao.png'

export const Ambiente = () => {
  return (
    <section className='bg-bg' id='ambiente'>
        <section className='container  h-auto text-center md:text-start pb-5 md:pb-20'>
            <span className='uppercase text-accent tracking-widest font-bold text-sm md:mt-20 inline-block pt-15 md:pt-0'>O Ambiente</span>
                <div>
                    <div className='md:flex justify-between mb-10 mt-4'>
                        <h1 className='text-4xl md:text-5xl font-display mb-4 md:mb-0'>Madeira, plantas e luz de fim de tarde</h1>
                        <p className='w-90 text-muted'>Um salão com mesas comunitárias, cantos para trabalhar e um pátio que abre nos dias de sol.</p>
                    </div>
                    <div className='grid md:grid-cols-2 md:grid-rows-[repeat(2,300px)]  **:object-cover gap-4 **:w-[100%] **:h-[100%] **:rounded-3xl pb-6'>
                        <img src={ambiente} alt="" className='md:row-start-1 md:row-end-3  '/>
                        <img src={exterior} alt="" className='md:col-start-2 hidden md:inline-block'/>
                        <img src={balcao} alt="" className=' md:col-start-2 ' />
                    </div>
                </div>
        </section>

    </section>
  )
}
