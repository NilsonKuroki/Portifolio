import React from 'react'
import { ContainerKnowledges, Content, ContainerContents } from './styled'

export const Knowledges = () => {
  return (
    <ContainerKnowledges>
      <h3>Meus conhecimentos</h3>
      <ContainerContents>
        <Content>
          <h1>Front-end</h1>
          <p>
            Desenvolvimento de Aplicações
            web utilizando HTML, CSS e
            JavaScript.
            Criação de sites responsivos
            seguindo princípio de
            Mobile First.
          </p>
        </Content>
        <Content>
          <h1>Back-end</h1>
          <p>
            Aplicações utilizando NodeJS,
            Typescript e MySQL.
            Criação de API´s para
            comunicação com front-end
            seguindo princípio de Clean Code.
          </p>
        </Content>
      </ContainerContents>

    </ContainerKnowledges>
  )
}