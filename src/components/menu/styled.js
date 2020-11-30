import styled from 'styled-components'

export const ContainerMenu = styled.div`
    width: 100%;
    height: 60px;
    position:fixed;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    background-color: #fffffb;
    h3{
        color: #191958;
        margin-left: 30px;
    }
`
export const Options = styled.div`
    width: 93%;
    display: flex;
    flex-direction: row-reverse;
    padding-right: 30px;
    a{
        margin: 0 20px;
        text-decoration:none;
    }
`