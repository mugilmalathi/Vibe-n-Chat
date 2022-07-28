import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import RightSideStories from "../RightSideStories/RightSideStories";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Search.scss";
import "../Home/Home.scss"
import "../RightSideStories/RightSideStories.scss"

const Search = () => {
  // const [data, setData] = useState([]);
  // const [search, setSearch] = useState("");

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
          placeholder="Search something"
          // onChange={(e) => {
          //   setSearch(e.target.value);
          // }}
        />
        <div className="search">
          <BsSearch />
        </div>
      </div>

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
  );
};

export default Search;
