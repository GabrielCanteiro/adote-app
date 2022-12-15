import React from 'react'
import { ButtonOpen, Container, Logo } from './styles'
import adoptionLogo from '../../assets/adoptionLogo.svg'
import { useNavigate } from 'react-router-dom'

export const Opening = () => {
  const navigate = useNavigate()

  const toLogin = () => {
    navigate('/login')
  }
  return (

    <Container>  
    <Logo>
        <img src={adoptionLogo} alt="adoption cats" />
    </Logo>

    <ButtonOpen onClick={toLogin}>Explorar</ButtonOpen>

    </Container>
    
  )
}
