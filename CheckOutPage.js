import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckOutPage() {
  const [checkOutDate, setCheckOutDate] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleCheckOut = async () => {
    if (!checkOutDate) {
      setMessage('Please select a check-out date.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to check-out!');
      navigate('/login');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ checkOutDate }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Check-out successful!');
        setTimeout(() => navigate('/home'), 2000); // Redirect after 2 seconds
      } else {
        setMessage(data.message || 'Error during check-out.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="date-page">
      <h2>Select Your Check-out Date</h2>
      {message && <p className="message">{message}</p>}
      <input
        type="date"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
        className="date-input"
      />
      <button onClick={handleCheckOut} disabled={loading} className="confirm-btn">
        {loading ? 'Checking Out...' : 'Check-out'}
      </button>
    </div>
  );
}

export default CheckOutPage;
