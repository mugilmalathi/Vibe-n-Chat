import React, { useState } from 'react'
import { BsFillBellFill } from "react-icons/bs";
import { BsFillCloudMoonFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import {
    useColorMode
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import "./RightSideStories.scss"

import mugil from "../Images/mugil.jpg"
  

const RightSideStories = () => {

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
    <div>
        <div className='homepage-card3-top'>
            <div className='firstdiv-notification'>
                <button id='colormode1'><BsFillBellFill /></button>
                <div className='notification'>0</div>
            </div>

            <div>
                <button id='colormode2' onClick={()=>{
                handledarkmode()
                toggleColorMode()
                }}>{
                color
                    ? <BsFillSunFill />
                    : <BsFillCloudMoonFill />
                }
                </button>
            </div>

            <div>
              <Link to="/userdetails"><button id='colormode3' ><BsFillPersonFill /></button></Link>
            </div>

          </div>

          <div className='profile-detail-option'>
            <div><img src={mugil} alt="" /></div>
            <div><h4>Mugil</h4></div>
          </div>

          <div className='homepage-card3-down'>
            {videocards.map((e)=>{
              return(
                <div className='block glow'>{e.name}</div>
              )
            })}
          </div>

    </div>
  )
}

export default RightSideStories