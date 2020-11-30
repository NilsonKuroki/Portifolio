import React from 'react'
import {ContainerContacts, ContainerImages} from './styled'
import LinkedIn from '../../images/linkedin.svg'
import Instagram from '../../images/instagram.svg'
import GitHub from '../../images/github.svg'

export const Contacts = ()=>{
    return(
        <ContainerContacts id="contacts">
            <h2>Contrate-me</h2>
            <p>
            <center>
            Procuro oportunidade de trabalho onde eu possa aprender,<br/>
            me desenvolver e evoluir na minha carreia profissional.<br/>
            <br/>
            E-mail para contato: nilsonkurokii@gmail.com<br/>
            Celular: (11) 94865-2095<br/>
            </center>
            </p>
            <ContainerImages>
                <a href="https://www.linkedin.com/in/nilson-kuroki/"><img src={LinkedIn} alt= "LinkedIn"/></a>
                <a href="https://www.instagram.com/ninil_nik/"><img src={Instagram} alt= "Instagram"/></a>
                <a href="https://github.com/NilsonKuroki"><img src={GitHub} alt= "GitHub"/></a>
            </ContainerImages>
        </ContainerContacts>
    )
}