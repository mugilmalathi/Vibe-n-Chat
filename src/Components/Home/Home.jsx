import React, { useEffect, useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import "./Home.scss"
import axios from 'axios'

import UserDetails from '../UserDetails/UserDetails';
import RightSideStories from '../RightSideStories/RightSideStories';

import { FaThumbsUp } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";

const Home = () => {

  const [formData, setFormData] = useState({
    comment:""
});
  const[data, setData] = useState([]);
  const[commentdata, setCommentdata] = useState([]);
  const[like, setLike] = useState(null);
  const[likecount, setLikecount] = useState(null);
  const[comment, setComment] = useState(null);

const handleSubmitter = (e)=>{ 
    axios.post("https://vibe-n-chat-backend.herokuapp.com/postcomment", formData)
    .then(()=>{
        setFormData({
          comment:""
        })
    })
    .then(()=>{
      commentData()
    })
}

const handleChange = (e)=>{
    const {id, value} = e.target;
    setFormData({
        ...formData,
        [id]: value
    })
}


  const handleLike = ()=>{
    setLike(!like)
    setLikecount(!likecount)
  }

  const handleComment = ()=>{
    setComment(!comment)
  }

  useEffect(()=>{

    axios.get("https://vibe-n-chat-backend.herokuapp.com/userdetails")
    .then((e)=>{
      setData(e.data)
    })
  }, [])

  useEffect(()=>{
    commentData();
  }, [])

  const commentData = ()=>{
    axios.get("https://vibe-n-chat-backend.herokuapp.com/postcomment")
    .then((e)=>{
      setCommentdata(e.data)
    })
  }
  
  return (
    <div id="homepage">

        <div className='homepage-card1'>
        <Sidebar />
        </div>

        <div className='homepage-card2'>
          

          <div className='posts-particular'>

            <div id='post-content'><img src="https://cdn.chiroeco.com/wp-content/uploads/2020/10/AdobeStock_313597954-scaled.jpeg" alt="NA" /></div>
            <div id='like-share-comment'>
            <FaThumbsUp style={{color: like ? "#ee991b" : "#1a202c"}} onClick={handleLike}/>
            <FaCommentAlt onClick={handleComment}/>
            <FaShareSquare />
            </div>
            {comment 
              ? 
              <div className='comment-input'>
                <input 
                  type="text" 
                  id='comment'
                  onChange={handleChange}
                  value={formData.comment}
                  placeholder="Enter Your message..."
                  />
                <button onClick={handleSubmitter}>COMMENT</button>
              </div>
              : "" 
            }
            {/* {setLikecount
              ? <p></p>
              : <p></p>
            } */}
            
            <div className='showpost-container'>
              {commentdata.map((e)=>{
                return (
                  <div id="showpost-comment">
                    <p>User</p>
                    <h4>{e.comment}</h4>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        <div className='homepage-card3'>
          <RightSideStories />
        </div>

    </div>
  )
}

export default Home