import React from 'react'
import { Sobre } from './Sobre/Sobre'
import { Cardapio } from './Cardapio/Cardapio'
import { Home } from '../Components/Home/Home'
import { Ambiente } from './Ambiente/Ambiente'

export const Content = () => {
  return (
    <>
    <Home/>
    <Sobre/>
    <Cardapio/>
    <Ambiente/>
    </>
  )
}
