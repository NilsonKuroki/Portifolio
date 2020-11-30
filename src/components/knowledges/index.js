import React from 'react'
import {ContainerKnowledges, Content, ContainerContents} from './styled'

export const Knowledges = () =>{
    return(
        <ContainerKnowledges>
            <h3>Meus conhecimentos</h3>
        <ContainerContents>
            <Content>
                <h1>Front-end</h1>
                <p>
                    Desenvolvimento de aplicações<br/>
                    web utilizando HTML, CSS e<br/>
                    JavaScript.<br/>
                    <br/>
                    Criação de sites responsivos<br/>
                    seguindo princípio de<br/>
                    Mobile First.<br/>
                </p>
            </Content>
            <Content>
                <h1>Back-end</h1>
                <p>
                    Aplicações utilizando NodeJS,<br/>
                    Typescript e MySQL.<br/>
                    Criação de API´s para<br/>
                    comunicação com front-end<br/>
                    seguindo princípio de Clean Code.
                </p>
            </Content>
        </ContainerContents>
            
        </ContainerKnowledges>
    )
}