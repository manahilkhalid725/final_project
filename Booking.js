import React, { useState } from 'react';
import axios from 'axios';

function Booking({ listingId }) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const token = localStorage.getItem('token'); // Get JWT token from localStorage

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkInDate || !checkOutDate) {
      setMessage('Please select both check-in and check-out dates.');
      return;
    }

    if (!token) {
      setMessage('You must be logged in to book a room.');
      return;
    }

    const bookingData = {
      listingId,
      checkInDate,
      checkOutDate,
    };

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', bookingData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage(response.data.message || 'Booking successful!');
    } catch (error) {
      setMessage(
        error.response?.data?.message || 'Error booking the room. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-page">
      <h2>Booking Page</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Check-in Date:</label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            disabled={loading}
          />
        </div>
        <div>
          <label>Check-out Date:</label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Booking...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
  );
}

export default Booking;
