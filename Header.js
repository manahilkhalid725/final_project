// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import airbnbLogo from './airbnb.png';
import userProfile from './user.png';

function Header() {
  const [activeTab, setActiveTab] = useState('experiences'); // 'stays' or 'experiences'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="top-bar">
      <div className="branding">
        <img src={airbnbLogo} alt="Airbnb Logo" className="logo" />
        <span>airbnb</span>
      </div>
      <div className="buttons">
        <Link to="/stays">
          <button
            className={`btn ${activeTab === 'stays' ? 'active' : ''}`}
            id="stays"
            onClick={() => handleTabClick('stays')}
          >
            Stays
          </button>
        </Link>
        <button
          className={`btn ${activeTab === 'experiences' ? 'active' : ''}`}
          id="experiences"
          onClick={() => handleTabClick('experiences')}
        >
          Experiences
        </button>
      </div>
      <div className="right-side">
        <Link to="/airbnb-your-home">
          <button className="btn">Airbnb your home</button>
        </Link>
        <i className="fa-sharp fa-solid fa-globe"></i>
        <div className="menu-button-box">
          <i className="fa-sharp fa-regular fa-bars"></i>
          <img src={userProfile} alt="Profile" className="user-img" />
          <div className="dropdown-content">
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
            <hr />
            <Link to="/gift-cards">Gift cards</Link>
            <Link to="/help-centre">Help centre</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
