import React from 'react'
import "./HomeAnimation.scss"
import video from "../Videos/cinematic.mp4"
import { useNavigate } from 'react-router'
import TypewriterComponent from 'typewriter-effect'
import Typewriter from "typewriter-effect";

const HomeAnimation = () => {
  const navigate = useNavigate()
  return (
    <div className='video' onClick={()=>{
      navigate("home")

    }}>
      <video src={video} type="video/mp4" autoPlay loop muted></video>
      <div className='btm'>
      <h1 className='welcome' id="name">
      <Typewriter
     
      options={{
        strings: ["Welcome"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </h1>
      
      <br />
      <h1 className='chat' id="name">
      <Typewriter
     
     options={{
       strings: ["Chat n Vibe"],
       autoStart: true,
       loop: true,
       deleteSpeed: 50,
     }}
   />

      </h1>
      </div>
    </div>
  )
}

export default HomeAnimation