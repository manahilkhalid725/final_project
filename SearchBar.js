import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchBar() {
  const [activeTab, setActiveTab] = useState('experiences'); // Initial active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="combined-buttons">
      <Link to="/where" className="combined-btn">
        <div className="button-top">Where</div>
        <div className="button-text">Search destinations</div>
      </Link>

      {activeTab === 'stays' ? (
        <>
          <Link to="/checkin" className="combined-btn">
            <div className="button-top">Check-in</div>
            <div className="button-text">Add date</div>
          </Link>
          <Link to="/checkout" className="combined-btn">
            <div className="button-top">Check-out</div>
            <div className="button-text">Add date</div>
          </Link>
        </>
      ) : (
        <Link to="/date" className="combined-btn">
          <div className="button-top">Date</div>
          <div className="button-text">Add dates</div>
        </Link>
      )}

      <Link to="/who" className="combined-btn">
        <div className="button-top">Who</div>
        <div className="button-text">Add guests</div>
        <button className="icon-btn">
          <i className="fa-regular fa-magnifying-glass"></i>
        </button>
      </Link>
    </div>
  );
}

export default SearchBar;
