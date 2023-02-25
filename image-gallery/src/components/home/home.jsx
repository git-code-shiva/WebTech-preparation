// import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Birds from "../birds/birds";
import Card from "../card";
import "./home.css";

const Home = () => {
  // const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
 
    let timeoutId;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      alert("Please Enter an Input");
      return;
    }
    setIsLoading(false);
    setSearchPerformed(true);
    setDebouncedSearchTerm(searchTerm);
  };

  const debounce=(func,delay)=>{
    clearTimeout(timeoutId);
    timeoutId= setTimeout(()=>{
        func();
    },delay);
  }

  const renderSearchResults = (e) => {
    if (!searchPerformed) {
      return (
        <>
            <section className="home-btn-section">
          <Link to="/">
            <button>Mountain</button>
          </Link>
          <Link to="/beaches">
            <button>Beaches</button>
          </Link>
          <Link to="/birds">
            <button>Birds</button>
          </Link>
          <Link to="/foods">
            <button>Food</button>
          </Link>
        </section>
        </>
      )
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return(
        <>
            <div>Search Results for "{debouncedSearchTerm}"</div>
            <Card search={debouncedSearchTerm}/>
        </>
    )
  };

  const handleChange=(e)=>{
    const value = e.target.value;
    setSearchTerm(value);
    debounce(()=> setDebouncedSearchTerm(value),500);
  }
  return (
    <>
      <section className="home-container">
        <Link className="home-heading-link" to="/">
          <h2 className="home-heading">Snap Shot</h2>
        </Link>

        <section className="home-search-section">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search"
            value={searchTerm}
          />
          <button onClick={handleSearch}>Search</button>
        </section>

        {/* <section className="home-btn-section">
          <Link to="/">
            <button>Mountain</button>
          </Link>
          <Link to="/beaches">
            <button>Beaches</button>
          </Link>
          <Link to="/birds">
            <button>Birds</button>
          </Link>
          <Link to="/foods">
            <button>Food</button>
          </Link>
        </section> */}
      </section>

      <section>{renderSearchResults()}</section>
    </>
  );
};

export default Home;
