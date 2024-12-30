import React, { useState } from 'react';

function UpdateListing() {
  const [updatedListing, setUpdatedListing] = useState({
    id: '',
    location: '',
    price: '',
    rating: '',
    distance: '',
    members: '',
    image: '', // Added image field to track the picture URL
  });

  const handleUpdate = () => {
    const token = localStorage.getItem('token'); // Assuming token is required
    if (!token) {
      alert('Access denied. Please log in.');
      return;
    }

    fetch(`http://localhost:5000/api/listings/${updatedListing.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Include token in the header
      },
      body: JSON.stringify(updatedListing),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Listing updated successfully!');
        setUpdatedListing({
          id: '',
          location: '',
          price: '',
          rating: '',
          distance: '',
          members: '',
          image: '', // Reset image field after update
        });
      })
      .catch((error) => console.error('Error updating listing:', error));
  };

  return (
    <div className="update-listing-container">
      <h2 className="update-listing-header">Update Listing</h2>
      <input
        className="update-listing-input"
        type="text"
        placeholder="Listing ID"
        value={updatedListing.id}
        onChange={(e) => setUpdatedListing({ ...updatedListing, id: e.target.value })}
      />
      <input
        className="update-listing-input"
        type="text"
        placeholder="Location"
        value={updatedListing.location}
        onChange={(e) => setUpdatedListing({ ...updatedListing, location: e.target.value })}
      />
      <input
        className="update-listing-input"
        type="number"
        placeholder="Price"
        value={updatedListing.price}
        onChange={(e) => setUpdatedListing({ ...updatedListing, price: e.target.value })}
      />
      <input
        className="update-listing-input"
        type="number"
        placeholder="Rating (0-5)"
        value={updatedListing.rating}
        onChange={(e) => setUpdatedListing({ ...updatedListing, rating: e.target.value })}
      />
      <input
        className="update-listing-input"
        type="text"
        placeholder="Distance (e.g., 5 km)"
        value={updatedListing.distance}
        onChange={(e) => setUpdatedListing({ ...updatedListing, distance: e.target.value })}
      />
      <input
        className="update-listing-input"
        type="number"
        placeholder="Number of Members"
        value={updatedListing.members}
        onChange={(e) => setUpdatedListing({ ...updatedListing, members: e.target.value })}
      />
      <input
        className="update-listing-input"
        type="text"
        placeholder="Image URL"
        value={updatedListing.image}
        onChange={(e) => setUpdatedListing({ ...updatedListing, image: e.target.value })}
      />
      <button className="update-listing-button" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}

export default UpdateListing;
