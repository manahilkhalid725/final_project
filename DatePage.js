import React, { useState, useEffect } from 'react';

function DatePage({ allListings = [] }) {
  const [filteredListings, setFilteredListings] = useState(allListings);

  // Extract country and date range from listings
  useEffect(() => {
    setFilteredListings(allListings); // Set filtered listings on component load
  }, [allListings]);

  const resetListings = () => {
    setFilteredListings(allListings);
  };

  return (
    <div className="page-container">
      <h2>Listing Dates</h2>

      {/* Display listings with their date range */}
      <div>
        <h4>All Listings and Dates:</h4>
        {filteredListings.length > 0 ? (
          <ul>
            {filteredListings.map((listing, index) => (
              <li key={index}>
                <div>
                  <strong>{listing.location}</strong> - {listing.dates}
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

export default DatePage;
