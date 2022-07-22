import React from 'react'
import { Route, Routes } from 'react-router'
import Signin from '../Account/Signin'
import Home from '../Home/Home'
import HomeAnimation from '../HomeAnimation/HomeAnimation'
import Search from '../Search/Search'

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