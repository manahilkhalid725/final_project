import React, { useState } from 'react';

function DeleteListing() {
  const [listingId, setListingId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Access denied. Please log in as an admin.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/listings/${listingId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Listing deleted successfully.');
      } else {
        setMessage(data.message || 'Failed to delete the listing.');
      }
    } catch (error) {
      console.error('Error deleting listing:', error);
      setMessage('An error occurred while deleting the listing. Please try again.');
    }
  };

  return (
    <div className="delete-listing-container">
      <h2 className="delete-listing-header">Delete Listing</h2>
      <input
        className="delete-listing-input"
        type="text"
        placeholder="Enter Listing ID"
        value={listingId}
        onChange={(e) => setListingId(e.target.value)}
      />
      <button className="delete-listing-button" onClick={handleDelete}>
        Delete
      </button>
      {message && <p className="delete-listing-message">{message}</p>}
    </div>
  );
}

export default DeleteListing;
