import React, { useEffect, useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Chat.scss";
import avatar from "../Images/avatar.jpg";
// import axios from 'axios'
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

// import UserDetails from '../UserDetails/UserDetails';
import RightSideStories from "../RightSideStories/RightSideStories";

const Chat = () => {
  const [data, setData] = useState([]);

  //   useEffect(()=>{

  //     axios.get("https://vibe-n-chat-backend.herokuapp.com/userdetails")
  //     .then((e)=>{
  //       setData(e.data)
  //     })
  //   }, [])

  const Contactlist = () => {
    return (
      <div className="ind-contact">
        <img className="profile-icon" src={avatar} alt="" />
        <div className="contact-info">
          <div className="contact-name">Saro</div>
          <div className="message-text">Hey buddy</div>
        </div>
        <div className="message-time">22:00</div>
      </div>
    );
  };

  return (
    <div id="homepage">
      <div className="homepage-card1">
        <Sidebar />
      </div>

      <div className="chatpage-card2">
        <div className="contacts-section">
          <div className="profile-section">
            <div className="pro-pic">
              <img src={avatar} alt="" />
            </div>
            <div className="username">Username</div>
          </div>
          <div className="contacts">
            <Contactlist />
            <Contactlist />
            
          </div>
        </div>
        <div className="chatspace">
          <div className="convo-header">
          <div className="contact-pro-pic">
              <img src={avatar} alt="" />
            </div>
            <div className='contact-name1'>
                Contact name
            </div>
            <p>
                <FaSearch />
            </p>
            <p>
              <BsFillTelephoneFill />
            </p>
            <p>
              <BsFillCameraVideoFill />
            </p>
          </div>
          <div className="convo">
            <div>
              <p>Hey buddy <span>22:00</span></p>
            </div>
          </div>
          <div className="chatbox">
            <div className="conversation-typebox">
              <img
                className="conversation-emoji-icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEcfbREUqDthl0xl7stIC4aHO7OhIVfY7Jw&usqp=CAU"
                alt=""
              />
              <input
                className="conversation-input"
                type="text"
                placeholder="Type a message"
              />
              <div className='send-icon'>
              <FaLocationArrow />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="homepage-card3">
        <RightSideStories />
      </div>
    </div>
  );
};

export default Chat;
