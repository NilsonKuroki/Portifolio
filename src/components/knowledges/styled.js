import styled from 'styled-components'

export const ContainerKnowledges = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  align-items: center;
  h1,h2,h3,p {
    color: #191958;
  }

  @media only screen and (max-width: 900px) {
    max-width: 100vw;
    padding: 40px 0 40px 0;
    height: auto;
    h3{
      text-align: center;
    }
  }
`
export const ContainerContents = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 42px;
  
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    div:first-child{
      margin-bottom: 30px;
    }
  }
`

export const Content = styled.div`
  width: 400px;
  height: 90%;
  p{
    margin-top: 20px;
    font: 400 1.3rem Montserrat;
  }
  margin-bottom: 10px;

  @media only screen and (max-width: 900px) {
    margin-top: 0;
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      font-size: 1.7rem;
      text-align: center;
    }
    p{
      width: 90%;
      text-align: justify;
    }
  }
`