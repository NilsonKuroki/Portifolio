import React from 'react'
import { ContainerProjects } from './styled'
import Ipad from '../../images/ipad.png'
import IMac from '../../images/imac.png'
import MacBook from '../../images/macbook.png'
import { BoxProject } from './boxProject'

export const Projects = () => {
  return (
    <ContainerProjects id="projects">
      <BoxProject
        backgroundColor="#99bbdd"
        title="Projeto 1"
        image={IMac}
        nameProject="LaBook"
        stack="back-end"
        description="Esse foi um projeto de Backend feito em grupo(4 integrantes),
             utilizamos a idéia de pair program e durante uma semana, desenvolvemos 
             uma aplicação para uma rede social ficticia, a idéia do projeto foi 
             proposto durante o modulo 5 do curso de desenvolvimento web fullstack 
             oferecido pela labenu, com a proposta de treinar a criação de um backend
              baseado na arquitetura MVC."
        textButton="ver no GitHub"
        link="https://github.com/NilsonKuroki/LaBook"
      />
      <BoxProject
        backgroundColor="#5589ab"
        title="Projeto 2"
        image={Ipad}
        nameProject="LabEddit"
        stack="front-end"
        description="Esse projeto foi feito em dupla, durante o modulo 3 do curso
             de desenvolvimento Web Full Stack(criada pela Labenu), o tempo de 
             desenvolvimento do projeto foi por volta de 4 dias e seu objetivo era 
             criar uma rede social parecida com a tão conhecida Reddit. Algumas 
             funcionalidades nelas seria cadastro, login, criar posts, comentar nos 
             posts e curtir posts ou comentários de posts."
        textButton="ver no GitHub"
        link="https://github.com/NilsonKuroki/LabEddit"
      />
      <BoxProject
        backgroundColor="#aadddd"
        title="Projeto 3"
        image={MacBook}
        nameProject="SpoteNu"
        stack="Full Stack"
        description=""
        textButton="Front-end GitHub"
        textButtonSecond="Back-end GitHub"
        link="https://github.com/NilsonKuroki/SpoteNuFront"
        secondLink="https://github.com/NilsonKuroki/SpoteNuBack"
      />

    </ContainerProjects>
  )
}