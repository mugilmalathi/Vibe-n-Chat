import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.scss";

const Search = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/SearchData").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <div>
        <input
          className="in"
          type="text"
          placeholder="Search something"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="search">
          <BsSearch />
        </div>
      </div>

      <div>
        {data
          .filter((gro) => gro.name.toLowerCase().includes(search))
          .map((e) => {
            return <div>{e.name}</div>
          })}
      </div>
    </div>
  );
};

export default Search;
