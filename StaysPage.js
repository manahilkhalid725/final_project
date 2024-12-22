// src/pages/StaysPage.js
import React from 'react';

function StaysPage() {
  return (
    <div className="stays-container">
      <h1>Stays</h1>
      <p>Browse through our selection of stays.</p>
      <div className="stays-content">
        <div className="stay-card">
          <img src="https://via.placeholder.com/200" alt="Stay 1" />
          <h3>Cozy Apartment</h3>
          <p>2 Bedrooms, 1 Bathroom</p>
        </div>
        <div className="stay-card">
          <img src="https://via.placeholder.com/200" alt="Stay 2" />
          <h3>Beach House</h3>
          <p>3 Bedrooms, 2 Bathrooms</p>
        </div>
        {/* Add more stay cards here */}
      </div>
    </div>
  );
}

export default StaysPage;
