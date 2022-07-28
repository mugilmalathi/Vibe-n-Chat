import React from 'react'
import RightSideStories from '../RightSideStories/RightSideStories'
import { Sidebar } from '../Sidebar/Sidebar'
import "../Home/Home.scss"
import "../RightSideStories/RightSideStories.scss"
import "./Uploads.scss"
import { BsCollectionPlayFill } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import { GiVintageRobot } from "react-icons/gi";

const Uploads = () => {
  return (
    <div id='uploads'>

        <div className='homepage-card1'>
        <Sidebar />
        </div>

        <div className='homepage-card2'>
            <div class="container">

                 <div id="card1" class="card" style={{"--i":"-1"}}>
                    <div class="content" style={{"--j":"1"}}>
                        <h2><FaPhotoVideo /></h2>
                    </div>            
                </div>

               <div id="card2" class="card" style={{"--i":"0"}}>
                    <div class="content" style={{"--j":"2"}}>
                        <h2><BsCollectionPlayFill /></h2>
                    </div>            
                </div>

                <div id="card3" class="card" style={{"--i":"1"}}>
                    <div class="content" style={{"--j":"3"}}>
                        <h2><GiVintageRobot /></h2>
                    </div>            
                </div>

            </div>
        </div>

        <div className='homepage-card3'>
          <RightSideStories />
        </div>

    </div>
  )
}

export default Uploads