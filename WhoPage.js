// src/components/WhoPage.js
import React from 'react';

function WhoPage({ allListings = [] }) {
  return (
    <div className="page-container">
      <h2>Number of Guests in Each Country</h2>
      <p>This page shows the number of guests for each country in the listings.</p>

      {/* Display listings with the number of guests */}
      <div>
        <h4>All Listings with Guest Count:</h4>
        {allListings.length > 0 ? (
          <ul>
            {allListings.map((listing, index) => (
              <li key={index}>
                <div>
                  <strong>{listing.location}</strong> - Guests: {listing.members ? listing.members : 'N/A'}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No listings available.</p>
        )}
      </div>
    </div>
  );
}

export default WhoPage;
