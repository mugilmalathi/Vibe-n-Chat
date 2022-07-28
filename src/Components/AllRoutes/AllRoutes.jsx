import React from 'react'
import { Route, Routes } from 'react-router'
import Signin from '../Account/Signin'
import Signup from '../Account/Signup'
import Chats from '../Chat/Chat'
import Home from '../Home/Home'
import HomeAnimation from '../HomeAnimation/HomeAnimation'
import Search from '../Search/Search'
import UserDetails from '../UserDetails/UserDetails'
import Uploads from '../Uploads/Uploads'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomeAnimation />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chats" element={<Chats />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path='/search' element={<Search/>} />
          <Route path='/upload' element={<Uploads/>} />
        </Routes>

    </div>
  )
}

export default AllRoutes