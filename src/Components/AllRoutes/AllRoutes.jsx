import React from 'react'
import { Route, Routes } from 'react-router'
import Signin from '../Account/Signin'
import Signup from '../Account/Signup'
import Chat from '../Chat/Chat'
import Home from '../Home/Home'
import HomeAnimation from '../HomeAnimation/HomeAnimation'
import RightSideStories from '../RightSideStories/RightSideStories'
import { Sidebar } from '../Sidebar/Sidebar'
import UserDetails from '../UserDetails/UserDetails'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomeAnimation />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/userdetails" element={<UserDetails />} />
        </Routes>
    </div>
  )
}

export default AllRoutes