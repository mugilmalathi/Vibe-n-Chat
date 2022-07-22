import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.scss"
import { BsSearch } from "react-icons/bs";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsPersonLinesFill } from "react-icons/bs";
import logo1 from "../Images/logo2.png"
import Signin from '../Account/Signin';

export const Sidebar = () => {
  return (
    <div id='sidebar'>
      <div><Link to="/home"><div className='sidebar-logo'><h4>Vibe n Chat</h4></div></Link></div>
      <div className='sidebar-content'>
      <Link to="/search"><div className='sidebar-search'><BsSearch /></div></Link>
      <Link to="/chats"><div className='sidebar-chats'><BsFillChatSquareTextFill/></div></Link>
      <Link to="/upload"><div className='sidebar-upload'>< BsUpload/></div></Link>
      <Link to="/videos"><div className='sidebar-videos'>< BsFillCameraVideoFill/></div></Link>
      </div>
      <div><div className='sidebar-account'><Signin /></div></div>
    </div>
  )
}
