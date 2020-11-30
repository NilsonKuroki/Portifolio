import styled from 'styled-components'

export const ContainerIam = styled.div`
    width: 100%;
    height: 600px;
    background-color: #5bb9b9;
    display: flex;
    align-items: center;

    
`

export const ImgPerfil = styled.img`
    height: 100%;
`

export const ContainerText = styled.div`
    height: 100%;
    width: 50%;
    min-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3{
        font: 400 1.9rem Montserrat;
    }
`

export const SocialNetworks = styled.div`
    height: 55%;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    img{
        min-height: 50px;
    }    
`