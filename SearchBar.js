import React from 'react';

function SearchBar() {
  return (
    <div className="combined-buttons">
      <button className="combined-btn">
        <div className="button-top">Where</div>
        <div className="button-text">Search destinations</div>
      </button>
      <button className="combined-btn">
        <div className="button-top">Date</div>
        <div className="button-text">Add dates</div>
      </button>
      <button className="combined-btn">
        <div className="button-top">Who</div>
        <div className="button-text">Add guests</div>
        <button className="icon-btn">
          <i className="fa-regular fa-magnifying-glass"></i> {/* Search Icon */}
        </button>
      </button>
    </div>
  );
}

export default SearchBar;
