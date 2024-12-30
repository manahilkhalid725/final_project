import React, { useState } from 'react';

function CreateListing() {
  const [listing, setListing] = useState({
    image: '',
    location: '',
    price: '',
    rating: '',
    distance: '',
    members: ''
  });
  const [message, setMessage] = useState(''); // To display success or error message
  const [loading, setLoading] = useState(false); // To manage loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListing({ ...listing, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(''); // Clear previous message

    // Get token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      setMessage('Access denied. Token is required.');
      setLoading(false);
      return;
    }

    try {
      // Send POST request to create the listing
      const response = await fetch('http://localhost:5000/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include the token in the header
        },
        body: JSON.stringify(listing)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Listing created successfully!');
        setListing({ image: '', location: '', price: '', rating: '', distance: '', members: '' }); // Reset form after success
      } else {
        setMessage(data.message || 'Failed to create listing.');
      }
    } catch (error) {
      console.error('Error creating listing:', error);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-listing-container">
      <h2 className="create-listing-header">Create Listing</h2>
      {message && <p className="create-listing-message">{message}</p>}
      <form className="create-listing-form" onSubmit={handleSubmit}>
        <input
          className="create-listing-input"
          type="text"
          name="image"
          value={listing.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          className="create-listing-input"
          type="text"
          name="location"
          value={listing.location}
          onChange={handleChange}
          placeholder="Location (country, city)"
          required
        />
        <input
          className="create-listing-input"
          type="number"
          name="price"
          value={listing.price}
          onChange={handleChange}
          placeholder="Price in dollars"
          required
        />
        <input
          className="create-listing-input"
          type="number"
          step="0.1"
          name="rating"
          value={listing.rating}
          onChange={handleChange}
          placeholder="Rating (e.g., 4.5)"
          required
        />
        <input
          className="create-listing-input"
          type="text"
          name="distance"
          value={listing.distance}
          onChange={handleChange}
          placeholder="Distance (e.g., 2 km)"
          required
        />
        <input
          className="create-listing-input"
          type="number"
          name="members"
          value={listing.members}
          onChange={handleChange}
          placeholder="Number of Members"
          required
        />
        <button className="create-listing-button" type="submit" disabled={loading}>
          {loading ? 'Creating Listing...' : 'Create Listing'}
        </button>
      </form>
    </div>
  );
}

export default CreateListing;
