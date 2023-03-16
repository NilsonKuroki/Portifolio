import React from 'react'
import { ContainerAboutMe, Resumo } from './styled'
import CatPrograming from '../../images/cat.svg'
import Curriculo from '../../downloads/curriculo.pdf'

export const AboutMe = () => {
  return (
    <ContainerAboutMe id="aboutMe">
      <Resumo>
        <h2>Sobre Mim</h2>
        <p>
          Sou uma pessoa com facilidade em
          me comunicar e trabalhar em equipe.
          Acredito que o desenvolvimento de
          projetos é melhor e mais rico com
          muita comunicação e ideias vindo de
          todos. Fiz Bacharel em Ciência da
          Computação pela faculdade FMU.
          Cursei um bootcamp da Labenu, no
          qual me aprofundei em tecnologias
          para desenvolvimento web fullstack,
          curso em tempo integral focado na
          produção de projetos.
        </p>
        <a href={Curriculo} download>
          <button>CV em PDF</button>
        </a>
      </Resumo>
      <img src={CatPrograming} alt="http://www.freepik.com/" title="Freepik" />
    </ContainerAboutMe>
  )
}