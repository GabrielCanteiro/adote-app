import React from 'react'
import { Head } from '../../components/Head'
import { Input } from '../../components/Input'
import { LoginContainer } from './styles'
import { MdAlternateEmail, MdOutlineVpnKey } from "react-icons/md";
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';


 const Login = () => {
  const navigate = useNavigate()

  const toRegister = () => {
    navigate('/Register')
  }  
  
  const toHome = () => {
    navigate('/Home')
  }

  return (
  <>
    <Head/> 
    <LoginContainer>
      <h1>LOGIN</h1>
      <Input leftIcon={<MdAlternateEmail />} placeholder='E-mail'/>
      <Input leftIcon={<MdOutlineVpnKey />} placeholder='Password' type='password'/>
      <Button text={'Sign Up'} onClick={toHome} />
      <Button text={'Register'} onClick={toRegister} />
      <span>Forgot my passowrd</span>
    </LoginContainer>
  </>

  )
}

export { Login }