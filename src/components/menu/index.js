import React from 'react'
import { ContainerMenu, Options } from './styled'

export const Menu = () => {
  return (
    <ContainerMenu>
      <Options>
        <a href="#contacts">Contato</a>
        <a href="#projects">Projetos</a>
        <a href="#aboutMe">Quem sou</a>
      </Options>
      <h3>Nilson</h3>
    </ContainerMenu>
  )
}