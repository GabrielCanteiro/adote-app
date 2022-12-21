import React, { useState } from 'react'
import axios from 'axios';

import { Head } from '../../components/Head'
import { Button, ButtonContainer, CatContainer, InfoContainer } from './styles'
import { MdInfoOutline } from "react-icons/md";

import right_arrow_button from '../../assets/right_arrow_button.png'
import footprint_button from '../../assets/footprint_button.png'
import heart_button from '../../assets/heart_button.png'

export const Home = () => {

    const [cats, setCats] = useState([])

    const getCats = async () =>{

      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?api_key=live_C6IiVV3jiwGEq6kQiVOqOLpr9dayLr6y0nFlNFH9XXJtZmuzKTuade9wKholnzIK`)

      try {
        const data = (response.data[0])

       setCats(data)
       
      
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <>
    <Head/>
    <CatContainer>

    <img src={cats.url} alt="profile" />

<InfoContainer>
    <div>
      <h3>{cats.id}</h3>
      <p>5 Months | Male</p>
    </div>
    <span><i>{<MdInfoOutline/>}</i></span>
</InfoContainer>
    </CatContainer>

    <ButtonContainer>
      <Button>
        <img src={heart_button} alt="heart" />
        <p>Favorite</p>
      </Button>

      <Button>
        <img src={footprint_button} alt="footprint" />
        <p>Adopt</p>
      </Button>

      <Button onClick={getCats}>
        <img src={right_arrow_button} alt="right arrow" />
        <p>&nbsp;&nbsp;Next</p>
      </Button>

    </ButtonContainer>

    </>
  )
}
