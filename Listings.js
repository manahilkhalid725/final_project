// Listings Component
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Listings({ filteredListings }) {
  const [liked, setLiked] = useState({});
  const navigate = useNavigate();

  const toggleHeart = (index) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [index]: !prevLiked[index],
    }));
  };

  const handleListingClick = (id) => {
    navigate(`/listing/${id}`);
  };

  if (!filteredListings || filteredListings.length === 0) {
    return <p>No listings available.</p>;
  }

  return (
    <div className="listing-container">
      <div className="container2">
        {filteredListings.map((listing, idx) => (
          <div
            key={listing._id}
            className="box1"
            onClick={() => handleListingClick(listing._id)}
          >
            <div className="image-container">
              <img
                src={listing.image || '/placeholder.jpg'}  // Ensure image URL is fetched and updated
                alt={listing.location || 'Listing'}
                className="listing-image"
              />
              <i
                className={`fa-solid fa-heart ${liked[idx] ? 'liked' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleHeart(idx);
                }}
              ></i>
            </div>
            <div>
              <p className="location">
                {listing.location}
                <span className="rating">
                  <i className="fa-solid fa-star"></i> {listing.rating}
                </span>
              </p>
              <p className="distance">{listing.distance}</p>
              <p className="dates">{listing.dates}</p>
              <p className="price">{listing.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;
