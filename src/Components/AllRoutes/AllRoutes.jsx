import React from 'react'
import { Route, Routes } from 'react-router'
import Signin from '../Account/Signin'
import Signup from '../Account/Signup'
import Chats from '../Chat/Chat'
import Home from '../Home/Home'
import HomeAnimation from '../HomeAnimation/HomeAnimation'

import Search from '../Search/Search'

import RightSideStories from '../RightSideStories/RightSideStories'
import { Sidebar } from '../Sidebar/Sidebar'
import UserDetails from '../UserDetails/UserDetails'


const AllRoutes = () => {
  return (
    <div>
<<<<<<< HEAD

      <Routes>
        <Route path="/" element={<HomeAnimation />} />
        <Route path="/home" element={<Home />} />
        <Route path='/account' element={<Signin />} />
        <Route path='/search' element={<Search/>} />
      </Routes>

     
=======
        <Routes>
          <Route path="/" element={<HomeAnimation />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chats" element={<Chats />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/userdetails" element={<UserDetails />} />
        </Routes>
>>>>>>> 78775600d8256ad54b67396c5ee41805da7553cf
    </div>
  )
}

export default AllRoutes