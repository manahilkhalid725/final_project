// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import airbnbLogo from './airbnb.png';
import userProfile from './user.png';

function Header() {
  return (
    <div className="top-bar">
      <div className="branding">
        <img src={airbnbLogo} alt="Airbnb Logo" className="logo" />
        <span>airbnb</span>
      </div>
      <div className="buttons">
        {/* Wrap the buttons in Link components */}
        <Link to="/stays">
          <button className="btn" id="stays">Stays</button>
        </Link>
        <Link to="/experiences">
          <button className="btn" id="experiences">Experiences</button>
        </Link>
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
