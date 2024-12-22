import React from 'react';
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
        <button className="btn" id="stays">Stays</button>
        <button className="btn" id="experiences">Experiences</button>
      </div>
      <div className="right-side">
        <button className="btn">Airbnb your home</button>
        <i className="fa-sharp fa-solid fa-globe"></i>
        <div className="menu-button-box">
          <i className="fa-sharp fa-regular fa-bars"></i>
          <img src={userProfile} alt="Profile" className="user-img" />
          <div className="dropdown-content">
            <a href="#">Sign up</a>
            <a href="#">Log in</a>
            <hr />
            <a href="#">Gift cards</a>
            <a href="#">Airbnb your home</a>
            <a href="#">Host an experience</a>
            <a href="#">Help centre</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
