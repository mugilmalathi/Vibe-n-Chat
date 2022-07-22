import React, { useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import "./Home.scss"
import {
  useColorMode
} from '@chakra-ui/react'

import { BsFillBellFill } from "react-icons/bs";
import { BsFillCloudMoonFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const Home = () => {

  const [color, setColor] = useState(null);

  const {toggleColorMode} = useColorMode();

  const handledarkmode = ()=>{

    setColor(!color)
  }

  const videocards = [
    {
      name: "first"
    },
    {
      name: "second"
    },
    {
      name: "third"
    },
    {
      name: "fourth"
    },
    {
      name: "fifth"
    },
    {
      name: "sixth"
    },
    {
      name: "seventh"
    },
    {
      name: "eight"
    },
    {
      name: "ninth"
    },
    {
      name: "tenth"
    }
  ]


  return (
    <div id="homepage">

        <div className='homepage-card1'>
        <Sidebar />
        </div>

        <div className='homepage-card2'>
          Home Content
        </div>

        <div className='homepage-card3'>
          <div className='homepage-card3-top'>
            <button id='colormode1'><BsFillBellFill /></button>
            <div className='notification'>0</div>
            <button id='colormode2' onClick={()=>{
              handledarkmode()
              toggleColorMode()
            }}>{
              color
                ? <BsFillSunFill />
                : <BsFillCloudMoonFill />
            }
            </button>
            <button id='colormode3'><BsFillPersonFill /></button>
          </div>
          <div className='homepage-card3-down'>
            {videocards.map((e)=>{
              return(
                <div style={{marginTop:"30px"}}>{e.name}</div>
              )
            })}
          </div>
        </div>

    </div>
  )
}

export default Home