import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ListingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/listings/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Listing data:', data); // Debugging the data
        setListing(data);
      })
      .catch((error) => console.error('Error fetching listing details:', error));
  }, [id]);

  const handleBooking = () => {
    navigate('/booking');
  };

  if (!listing) {
    return <p>Loading...</p>;
  }

  return (
    <div className="listing-details">
      <img src={listing.image} alt="Listing" className="listing-image" />
      <h2>{listing.location}</h2>
      <p>{listing.description}</p>
      <p><strong>Rating:</strong> {listing.rating}</p>
      <p><strong>Distance:</strong> {listing.distance}</p>
      <p><strong>Price:</strong> {listing.price}</p>
      <p><strong>Members:</strong> {listing.members ? listing.members : 'Data unavailable'}</p> {/* Show "Data unavailable" if members is missing */}
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default ListingDetails;
