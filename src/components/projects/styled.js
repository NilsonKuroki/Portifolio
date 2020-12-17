import styled from 'styled-components'

export const ContainerProjects = styled.div`
    width: 100%;
    height: 850px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;

    h1,h2,h3, p {
        color:  #191958;
    }
`

export const Project= styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.backgroundProject};
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img{
        width: 40%;
    }
`

export const Tittle = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Details = styled.div`
    width: 80%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin-top: 30px;
    }    
`

export const ContainerButtons = styled.div`
    width: 70%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    a{
        text-decoration: none;
    }
`

//component button

export const ButtonStyled = styled.button`
    min-width: 140px;
    height: 40px;
    padding: 10px 16px;
    margin: 10px;
    display: flex;
    align-items: center;
    color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: ${props=> props.backgroundButton};
    outline:none;
`
