import React from 'react'
import { ContainerEducation, ContainerCourse, Course } from './styled'

export const Education = () => {
  return (
    <ContainerEducation>
      <h3>Educação</h3>
      <ContainerCourse>
        <Course>
          <h3>Ciência da Computação (FMU)</h3>
          <h2>2016-2020</h2>
          <p>
            
            Durante o curso, aprendemos a compreender a
            necessidade do usuários para produção de
            softwares(mobile e web), como gerenciar
            projetos, realizar tratamento de dados e
            desenvolver sistemas operacionais.
          </p>
        </Course>
        <Course>
          <h3>Curso de Web Full Stack na Labenu</h3>
          <h2>6 meses - 2020</h2>
          <p>
            6 meses - 2020
            Experiência de 1000 horas de aprendizagem em
            Front-End, Back-End, DevOps, aprendizado de
            testes unitários e Clean Architecture. Construção
            de projetos como clones do Tinder, iFood,
            Reddit, Instagram e Spotify.
          </p>
        </Course>
      </ContainerCourse>
    </ContainerEducation>
  )
}