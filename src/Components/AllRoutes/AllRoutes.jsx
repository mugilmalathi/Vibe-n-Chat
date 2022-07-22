import React from 'react'
import { Route, Routes } from 'react-router'
import Signin from '../Account/Signin'
import Signup from '../Account/Signup'
import Home from '../Home/Home'
import HomeAnimation from '../HomeAnimation/HomeAnimation'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomeAnimation />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default AllRoutes