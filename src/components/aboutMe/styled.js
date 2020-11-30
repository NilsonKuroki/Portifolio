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
`
