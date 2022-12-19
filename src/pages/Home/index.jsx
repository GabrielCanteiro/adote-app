import React from 'react'
import { Head } from '../../components/Head'
import cat_pilot from '../../assets/cat_pilot.png'
import { Bottom, CatContainer, InfoContainer } from './styles'
import { MdInfoOutline } from "react-icons/md";

export const Home = () => {
  return (
    <>
    <Head/>
    <CatContainer>
      <img src={cat_pilot} alt="profile" />
      <InfoContainer>

          <div>
            <h3>Mr. Mustache</h3>
            <p>5 Months | Male</p>
          </div>

          <span><i>{<MdInfoOutline/>}</i></span>

      </InfoContainer>
    </CatContainer>
    <Bottom>
      <div></div>

      <div></div>
      
      <div></div>
    </Bottom>

    </>
  )
}
