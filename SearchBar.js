import React from 'react';
import { Link } from 'react-router-dom';

function SearchBar() {
  return (
    <div className="combined-buttons">
      <Link to="/where" className="combined-btn">
        <div className="button-top">Where</div>
        <div className="button-text">Search destinations</div>
      </Link>
      <Link to="/date" className="combined-btn">
        <div className="button-top">Date</div>
        <div className="button-text">Add dates</div>
      </Link>
      <Link to="/who" className="combined-btn">
        <div className="button-top">Who</div>
        <div className="button-text">Add guests</div>
        <button className="icon-btn">
          <i className="fa-regular fa-magnifying-glass"></i> {/* Search Icon */}
        </button>
      </Link>
    </div>
  );
}

export default SearchBar;
