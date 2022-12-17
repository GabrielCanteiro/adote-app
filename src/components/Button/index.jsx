import React from 'react'
import { ButtonContainer } from './styles'

export const Button = ({text, onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>{text}</ButtonContainer>
  )
}
