import React from 'react'
import {ContainerIam, ImgPerfil, ContainerText, SocialNetworks} from './styled'
import Perfil from '../../images/perfil.jpg'
import LinkedIn from '../../images/linkedin.svg'
import Instagram from '../../images/instagram.svg'
import GitHub from '../../images/github.svg'

export const Iam = () => {
    return(
        <ContainerIam>
            <ImgPerfil src= {Perfil} alt="foto de perfil"/>
            <ContainerText>
                <h1>Eu sou <br/> Nilson Kuroki</h1>
                <h3>Desenvolvedor Web Fullstack</h3>
            </ContainerText>
            <SocialNetworks>
                <a href="https://www.linkedin.com/in/nilson-kuroki/"><img src={LinkedIn} alt= "LinkedIn"/></a>
                <a href="https://www.instagram.com/ninil_nik/"><img src={Instagram} alt= "Instagram"/></a>
                <a href="https://github.com/NilsonKuroki"><img src={GitHub} alt= "GitHub"/></a>
            </SocialNetworks>
        </ContainerIam>
    )
}