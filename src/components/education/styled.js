import styled from 'styled-components'

export const ContainerEducation = styled.div`
  width: 100%;
  height: 550px;
  background-color: #191958;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    height: auto;
    padding: 40px 0 40px 0;
    h3{
      margin-bottom: 20px;
    }
  }
`

export const ContainerCourse =  styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 90%;
  }
`
export const Course = styled.div`
  width: 450px;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p{
  margin-top: 20px;
  font: 400 1.3rem Montserrat;
  }

  @media only screen and (max-width: 900px) {
    height: auto;
    width: auto;
    margin-bottom: 30px;
    h3{
      font-size: 1.4rem;
      text-align: center;
    }
    h2{
      font-size: 1.1rem;
      text-align: center;
    }
    p{
      font-size: 1rem;
      text-align: justify;
    }
  }
`