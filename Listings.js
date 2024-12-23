import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Listings({ filterListings }) {
  const [listings, setListings] = useState([]);
  const [liked, setLiked] = useState({});
  const [filteredListings, setFilteredListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/listings')
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
        setFilteredListings(data); // Initially show all listings
      })
      .catch((error) => console.error('Error fetching listings:', error));
  }, []);

  const toggleHeart = (index) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [index]: !prevLiked[index],
    }));
  };

  const handleListingClick = (id) => {
    navigate(`/listing/${id}`);
  };

  return (
    <div className="listing-container">
      <div className="container2">
        {filteredListings.map((listing, idx) => (
          <div key={listing.id} className="box1" onClick={() => handleListingClick(listing.id)}>
            <div className="image-container">
              <img src={listing.image} alt="Listing" className="listing-image" />
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
