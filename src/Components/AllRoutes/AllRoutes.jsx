import React from 'react'
import { Route, Routes } from 'react-router'
import Signin from '../Account/Signin'
import Signup from '../Account/Signup'
import Home from '../Home/Home'
import HomeAnimation from '../HomeAnimation/HomeAnimation'

import Search from '../Search/Search'

import RightSideStories from '../RightSideStories/RightSideStories'
import { Sidebar } from '../Sidebar/Sidebar'
import UserDetails from '../UserDetails/UserDetails'


const AllRoutes = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<HomeAnimation />} />
        <Route path="/home" element={<Home />} />
        <Route path='/account' element={<Signin />} />
        <Route path='/search' element={<Search/>} />
      </Routes>

     
    </div>
  )
}

export default AllRoutes