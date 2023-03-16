import React from 'react'
import { ButtonStyled } from "./styled";

export const ButtonProject = (props) => {
  return (
    <a href={props.way}>
      <ButtonStyled backgroundButton={props.background}>
        {props.text}
      </ButtonStyled>
    </a>
  )
}