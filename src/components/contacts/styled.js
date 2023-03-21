import styled from 'styled-components'

export const ContainerContacts = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f4271;
  p{
      margin-top: 50px;
  }
  @media only screen and (max-width: 900px) {
    p{
      text-align: center
    }
  }
`

export const ContainerImages = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  margin: 40px;
  
  img{
    width: 40px;
  }
  @media only screen and (max-width: 900px) {
    width: 50%;

  }
`