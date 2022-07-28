import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import RightSideStories from "../RightSideStories/RightSideStories";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Search.scss";
import "../Home/Home.scss"
import "../RightSideStories/RightSideStories.scss"

const Search = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    axios.get("https://vibe-n-chat-backend.herokuapp.com/search").then((res) => {
      setData(res.data);
    });
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/SearchData").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  return (
    <div className="container1">
      <div className='homepage-card1'>
          <Sidebar />
        </div>
      <div className='homepage-card2'>
      <div>
        <input
          className="in"
          type="text"

          placeholder="Search something..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}

          placeholder="Search something"
          // onChange={(e) => {
          //   setSearch(e.target.value);
          // }}

        />
        <div className="search">
          <BsSearch />
        </div>
      </div>


      <div className="search-container-maindiv" style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", marginTop:"50px"}}>
        {data
          .filter((gro) => gro.name.toLowerCase().includes(search))
          .map((e) => {
            return(
             <div className="search-container">
              <h4>{e.name}</h4>
              <p>{e.username}</p>
              <p>{e.DOB}</p>
             </div>
            )
          })}

      <div>
        {/* {data
          .filter((gro) => gro.name.toLowerCase().includes(search))
          .map((e) => {
            return <div>{e.name}</div>
          })} */}

      </div>
      </div>
      <div className='homepage-card3'>
      <RightSideStories />
        </div>
    </div>
    </div>
  );
};

export default Search;
