import React from 'react'
import { Header, Icon } from './styles'
import logo from '../../assets/logo-cat.png'
import { useNavigate } from 'react-router-dom'

export const Head = () => {
  const navigate = useNavigate()

  const toOpen = () => {
    navigate('/')
  }
  return (
    <Header>
      <Icon onClick={toOpen}>
        <img src={logo} alt="adoption cats logo" />
        <p>Adoption Cats</p>
      </Icon>

    </Header>
    
  )
}


