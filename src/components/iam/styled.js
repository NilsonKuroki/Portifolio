import styled from 'styled-components'

export const ContainerIam = styled.div`
  max-width: 100%;
  height: 600px;
  background-color: #5bb9b9;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 900px) {
    max-width: 100%;
    height: auto;
    flex-direction: column;
    margin: 101px 0 0 0 ;
    justify-content: space-around;
    padding: 40px 0 40px 0;
  }
`

export const ImgPerfil = styled.img`
  height: 70%;
  border-radius: 50%;

  @media only screen and (max-width: 900px) {
    width: 50%;
    height: auto;
  }
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
  @media only screen and (max-width: 900px) {
    h1{
      font-size: 2rem;
    }
    h3{
      font-size: 1rem;
    }
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
  @media only screen and (max-width: 900px) {
    margin: 40px 0 0 0;
    flex-direction: row;
    height: auto;
    width: 100vw;
    align-items: space-evenly;
    img{
    min-height: 40px;
    }
  }
`