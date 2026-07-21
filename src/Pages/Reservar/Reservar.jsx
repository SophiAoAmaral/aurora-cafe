import React, { useState } from 'react';
import { Link } from 'react-router';

export const Reservar = () => {
    const [pessoas, setPessoas] = useState('1');
    const [date, setDate] = useState(0);
    const [hours, setHoras] = useState(0);
    const [enviado, setEnviado] = useState(false);
    const [nome, setNome] = useState('');
    const [whats, setWaths] = useState('');
    const [ob, setOb] = useState('');

      const handleSubmit = (e) => {
         e.preventDefault();
         setEnviado(true)
         setNome('');
         setOb('');
         setWaths('')
  };

     const dias = Array.from({ length: 8 }, (_, i) => {
       const data = new Date();
       data.setDate(data.getDate() + i);
       return data;
     });

     const arrayDias = ['1', '2', '3', '4', '5', '6'];
     const horario = ['08:00', '09:30', '11:00', '12:30', '14:00', '15:30', '17:00', '18:30', '19:30', '20:30'];
     const formDados = ['Seu nome', ]
  return (
    <section className="background-home md:h-[100vh] ">
        
      <div className="md:pt-20 flex justify-center items-center " >
        <div className="bg-cream md:h-190 w-200 md:rounded-2xl">
            <Link to='/' className='font-semibold inline-block text-2xl text-accent mx-4 my-2'> 🠔 Voltar</Link>
          <span className="uppercase text-sm font-bold text-accent  pt-6 text-center  block">
            Reserva de mesa
          </span>
          <h1 className="font-display text-4xl font-semibold text-center">
            Reserve sua mesa
          </h1>
          <span className="text-sm text-black/50 text-center block">
            Preencha os detalhes abaixo.
          </span>

          <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className="flex flex-col gap-3 mt-2">
              <p className="uppercase font-semibold text-sm text-center">
                Quantidade pessoas
              </p>
              <div className="flex gap-5 **:block  **:border **:border-muted **:rounded-2xl **:cursor-pointer **:py-1 **:px-3 justify-center">

                {arrayDias.map((dia)=>(
                 <button
                  type="button"
                  onClick={() => setPessoas(dia)}
                  className={`${pessoas === dia ? "bg-accent text-white" : ""}`}
                >{dia}</button>
                ))}
              </div>
            </div>

            <div className="flex flex-col  items-center justify-center gap-3 mt-4">
                <p className='uppercase  font-semibold'>Qual dia?</p>
              <div className='flex gap-4 flex-wrap items-center justify-center'>
                  {dias.map((dia, i) => (
                    <button
                    type='button'
                      key={dia.toISOString()}
                      className={ `${date === i ? 'bg-accent text-white' : ''} cursor-pointer px-3 py-2  md:py-2 md:px-3 border rounded-2xl text-xs md:text-sm `}
                      onClick={()=> setDate(i)}
                    >
                      <p className="text-xs uppercase">
                        {dia.toLocaleDateString("pt-BR", { weekday: "short" })}
                      </p>
                      <h2 className="text-2xl">{dia.getDate()}</h2>
                      <span className="text-xs">
                        {dia.toLocaleDateString("pt-BR", { month: "short" })}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            <div className='w-[70%] m-auto mt-5'>
                <p className='uppercase  font-semibold text-center'>Horario</p>
                <div className='flex flex-wrap items-center justify-center gap-2 mt-2'>
                    {horario.map((horas, i)=>(
                        <button
                        type='button'
                        className={`${hours ===  i ? 'bg-accent text-white' : '' } cursor-pointer py-2 px-4 border rounded-2xl text-sm`}
                        onClick={()=> setHoras(i)}
                        >
                        {horas}
                        </button>
                    ))}
                </div>
            </div>

            <div className='grid md:grid-cols-2 ml-8 md:ml-10 gap-2 mt-5'>
                <label  className='flex flex-col items-start text-muted text-sm '>Seu nome
                    <input type="text"  value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Ex: Ana'  className='border w-85 rounded-2xl py-2 px-4 bg-white outline-accent' required/>
                 </label>

                <label  className='flex flex-col items-start text-muted text-sm'>
                    WhatsApp
                    <input type="text"  value={whats} onChange={(e) => setWaths(e.target.value)} placeholder='(12)12344-4344' className='border w-85 rounded-2xl  py-2 px-4 bg-white outline-accent' required />
                    
                </label>
                <label className='flex flex-col items-start text-muted text-sm'>
                    Observação(opcional)
                    
                    <input type="text" value={ob} onChange={(e) => setOb(e.target.value)} className='border rounded-2xl py-2 px-4 w-85 md:w-180 bg-white outline-accent'  />
                    
                </label>
            </div>

                <button className='bg-accent py-2 px-4 text-white self-center mt-5 rounded-2xl cursor-pointer'>Finalizar reserva</button>
                <span className='text-xs text-muted block text-center mt-1 pb-3 md:pb-0 '>Ao reservar você concorda em receber a confirmação por WhatsApp.</span>

    
          </form>
    {enviado && (
  <div className="overlay">
    <article className="active">
      <h1 className="text-3xl">Reserva Confirmada</h1>
      <p className='text-sm text-muted my-2'>Mais informações enviadas no numero indicado</p>
      <Link
        to='/'
        className='bg-accent py-2 px-4 text-white self-center rounded-2xl cursor-pointer'
      >
        Voltar ao início
      </Link>
      <Link
      to='/reservar'
      onClick={()=> setEnviado(false)}
      className=' py-2 px-4 border self-center rounded-2xl cursor-pointer mt-3'
      >
    
      Nova Reserva
      </Link>
    </article>
  </div>
)}
    </div>
      </div>
    </section>
  );
}
