import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { AiOutlineSearch } from "react-icons/ai";
import Tv from '../../Images/tv.png';
import Menu from '../../Images/Menu.png';
import MovieCard from "../MovieCard/MovieCard";
import Footer from "../Footer/Footer";
import './Search.css';

const Search = () => {
  const [search, setSearch] = useState('')
  const [searchContent, setSearchContent] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const savedText = localStorage.getItem("searchText");
    if (savedText) {
      setSearch(savedText);
    }
  }, []);
  
  const fetchSearch = async () => {
    if (search.trim() === "") {
      return;
    }
    setLoading(true);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=35c7144fd49923e0772252b3464572d0&language=en-US&page=1&include_adult=false&query=${search}`
      );
      const { results } = await data.json();
      setSearchContent(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSearch()
  }

  return (
    <>
    <div className="text-container1">
    <div className="nav-bar">
      <div className="header">
        <img src={Tv} alt='tv' className="header-image"/>
        <a href="#" className="link">MovieBox</a>
      </div>
      <div className="searchbar">
          <form className="form" onSubmit={handleSearch}>
            <div className="input-container">
            <input 
              type="search"
              placeholder="What do you want to watch?" 
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="search-button">
              <AiOutlineSearch />
            </button>
            </div>
          </form>
      </div>
      <div className="header-signin">
          <a href="#" className="link">Signin</a>
          <img src={Menu} alt='tv' className="header-image1"/>
      </div>
    </div>
      {loading ? (
            <div className='load-center'> 
              <ClipLoader
                color={'steelblue'}
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> 
            </div>
      ) :
      <><h2 className="searchText">
          Search Results for{" "}
          <span style={{ color: "red" }}>{search}</span>
        </h2><div className='moviecard-container1'>
            <div className='row1'>
              <MovieCard movies={searchContent} />
            </div>
          </div></>
      }
    </div>
    <Footer />
    </>
  )
}

export default Search