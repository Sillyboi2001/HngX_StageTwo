import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tv from '../../Images/tv.png';
import Menu from '../../Images/Menu.png';
import './Navbar.css';

const Navbar = (props) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedSearchText = localStorage.getItem("searchText");
    if (savedSearchText) {
      setValue(savedSearchText);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (value) {
      localStorage.setItem("searchText", value);
      navigate(`/search/${value}`, { state: value, replace: true });
      setValue("");
    }
  };
  
  return (
    <div className="nav-bar">
      <div className="header">
        <img src={Tv} alt='tv' className="header-image"/>
        <a href="#" className="link">{props.header}</a>
      </div>
      <div className="searchbar">
          <form className="form" onSubmit={handleSearch}>
            <div className="input-container">
            <input 
              type="search"
              placeholder="What do you want to watch?" 
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            </div>
          </form>
      </div>
      <div className="header-signin">
          <a href="#" className="link">{props.signin}</a>
          <img src={Menu} alt='tv' className="header-image1"/>
      </div>
    </div>
  )
}

export default Navbar