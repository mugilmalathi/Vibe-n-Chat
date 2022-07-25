import React, { useEffect, useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import "./Home.scss"
import axios from 'axios'

import UserDetails from '../UserDetails/UserDetails';
import RightSideStories from '../RightSideStories/RightSideStories';

const Home = () => {

  const[data, setData] = useState([]);

  useEffect(()=>{

    axios.get("https://vibe-n-chat-backend.herokuapp.com/userdetails")
    .then((e)=>{
      setData(e.data)
    })
  }, [])
  
  return (
    <div id="homepage">

        <div className='homepage-card1'>
        <Sidebar />
        </div>

        <div className='homepage-card2'>
          {data.map((e)=>{
            return(
              <div>
                <img src={e.profilepic} alt="" />
                <h4>{e.firstName}</h4>
              </div>
            )
          })}
        </div>

        <div className='homepage-card3'>
          <RightSideStories />
        </div>

    </div>
  )
}

export default Home