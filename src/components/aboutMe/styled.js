import styled from 'styled-components'

export const ContainerAboutMe = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f4271;
  img{
      width: 350px;
      margin-left: 10%;
  }

  @media only screen and (max-width: 900px) {
    height: auto;
    max-width: 100vw;
    flex-direction: column-reverse;
    padding: 40px 0 40px 0;
    align-items: center;
    img{
      display: none;
    }
  }
`

export const Resumo = styled.div`
  height: 100%;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  p{
    margin: 30px 0;
  }
  button{
    width: 140px;
    height: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #99bbdd;
    outline:none;
  }
  
  @media only screen and (max-width: 900px) {
    max-width: 90%;
    h2{
      font-size: 2rem;
      text-align: center;
    }
    p{
      text-align: justify;
    }
    a{
      text-align: center;
    }
  }
`
