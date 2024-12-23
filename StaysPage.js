// src/components/StaysPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function StaysPage() {
  return (
    <div className="stays-page">
      <h2>Select Your Stay Dates</h2>
      <div className="stays-options">
        <Link to="/checkin" className="combined-btn">
          <div className="button-top">Check-in</div>
          <div className="button-text">Add date</div>
        </Link>
        <Link to="/checkout" className="combined-btn">
          <div className="button-top">Check-out</div>
          <div className="button-text">Add date</div>
        </Link>
      </div>
    </div>
  );
}

export default StaysPage;
