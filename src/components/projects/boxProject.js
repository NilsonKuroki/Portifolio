import React from 'react'
import {Project, Tittle, Details, ContainerButtons} from './styled'
import {ButtonProject} from './button'

export const BoxProject = (props)=>{
    return(
    <Project backgroundProject= {props.backgroundColor}>
        <Tittle>
            <h3>{props.title}</h3>
        </Tittle>
        <img src={props.image} alt="ipad"/>
        <Details>
            <h2>{props.nameProject}</h2>
            <h3>{props.stack}</h3>
            <p>
                <center>
                    {props.description}
                </center>
            </p>
        </Details>
        <ContainerButtons>
        <ButtonProject way= {props.link} text={props.textButton} background={"#5589ab"}/>
        {props.stack === "Full Stack"? 
        <ButtonProject way= {props.secondLink} text={props.textButtonSecond} background={"#5589ab"}/>: ""
        }
        </ContainerButtons>
    </Project>
    )
}