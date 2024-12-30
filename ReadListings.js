import React, { useEffect, useState } from 'react';

function ReadListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/listings')
      .then((response) => response.json())
      .then((data) => setListings(data))
      .catch((error) => console.error('Error fetching listings:', error));
  }, []);

  return (
    <div className="read-listings-container">
      <h2 className="read-listings-header">Listings</h2>
      <ul className="read-listings-list">
        {listings.map((listing) => (
          <li className="read-listings-item" key={listing._id}>
            <span className="read-listings-location">{listing.location}, {listing.country}</span>
            <span className="read-listings-price"> - ${listing.price} / night</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadListings;
