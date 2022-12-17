import React from 'react'

import {InputContainer, IconContainer, InputText } from './styles';
const Input = ({leftIcon, placeholder, type}) => {


  return (
    <>
    <InputContainer>
        <IconContainer>{leftIcon}</IconContainer>
        <InputText placeholder={placeholder} type={type} ></InputText>
    </InputContainer>
    </>

  )
}

export { Input }; 