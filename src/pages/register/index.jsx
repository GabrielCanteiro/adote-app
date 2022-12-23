import React from 'react'
import { Head } from '../../components/Head'
import { Input } from '../../components/Input'
import { RegisterContainer } from './styles'
import { Container } from '../opening/styles'
import { MdPersonOutline, MdAlternateEmail, MdOutlineVpnKey, MdLocalPhone } from "react-icons/md";
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';


export const Register = () => {
  
  const navigate = useNavigate()

  const toLogin = () => {
    navigate('/login')
  }

  return (
    <Container>
    <Head/>
    <RegisterContainer>
      <h1>Create Account</h1>
      <Input leftIcon={<MdPersonOutline/>} placeholder={'Username'} type={'name'}/>
      <Input leftIcon={<MdAlternateEmail/>} placeholder={'E-mail'} type={'email'}/>
      <Input leftIcon={<MdOutlineVpnKey/>} placeholder={'Password'} />
      <Input leftIcon={<MdLocalPhone/>} placeholder={'Phone number'} type={'number'}/>
      <Button text={`Create`} onClick={toLogin}/>
    </RegisterContainer>
    </Container>
    
    
  )
}
