import React, { useState } from 'react'
import RightSideStories from '../RightSideStories/RightSideStories'
import { Sidebar } from '../Sidebar/Sidebar'
import "./UserDetails.scss"
import "../Home/Home.scss"
import axios from 'axios'

const UserDetails = () => {

    const [formData, setFormData] = useState({
        id:"",
        firstName:"",
        lastName:"",
        profilepic:"",
        DOB:"",
        Bio:"",
        website:"",
        hobby:"",
    });
    
    const handleSubmitter = (e)=>{ 
        axios.post("https://vibe-n-chat-backend.herokuapp.com/userdetails", formData)
        .then(()=>{
            setFormData({
                id:"",
                firstName:"",
                lastName:"",
                profilepic:"",
                DOB:"",
                Bio:"",
                website:"",
                hobby:"",
            })
        })
    }
    
    const handleChange = (e)=>{
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        })
    }

  return (
    <div id='userdetail'>

       <div className='homepage-card1'>
          <Sidebar />
        </div>

        <div className='homepage-card2'>
            <div id='userdetail-container'>

                <div className='userdetail-imgsection'>
                    {/* <input 
                      id='profilepic' 
                      type="file" 
                      accept='image/*'
                      onChange={handleChange}
                      value={formData.profilepic}
                      /> */}
                    <div className='userdetail-namesection'>
                        <input 
                          id='firstName' 
                          type="text" 
                          placeholder='Enter your First Name'
                          onChange={handleChange}
                          value={formData.firstName}
                          />
                        <br />
                        <input 
                          id='lastName' 
                          type="text" 
                          placeholder='Enter your Last Name'
                          onChange={handleChange}
                          value={formData.lastName}
                          />
                    </div>
                </div>

                <input 
                  id='DOB' 
                  type="text" 
                  placeholder='Enter Your DOB eg: (01/01/2001)' 
                  onChange={handleChange}
                  value={formData.DOB}
                  />
                <input 
                  id='Bio' 
                  type="text" 
                  placeholder='Enter Your Biography' 
                  onChange={handleChange}
                  value={formData.Bio}
                  />
                <input 
                  id='website' 
                  type="text" 
                  placeholder='Enter Your Website'
                  onChange={handleChange}
                  value={formData.website} 
                  />
                <input 
                  id='hobby' 
                  type="text" 
                  placeholder='Enter Your Hobby' 
                  onChange={handleChange}
                  value={formData.hobby}
                  />
                <button 
                id='usersubmit'
                onClick={handleSubmitter}
                >UPDATE PROFILE</button>
            </div>
        </div>

        <div className='homepage-card3'>
          <RightSideStories />
        </div>


    </div>
  )
}

export default UserDetails