import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckInPage() {
  const [checkInDate, setCheckInDate] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleCheckIn = async () => {
    if (!checkInDate) {
      setMessage('Please select a check-in date.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to check-in!');
      navigate('/login');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ checkInDate }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Check-in successful!');
        setTimeout(() => navigate('/home'), 2000); // Redirect after 2 seconds
      } else {
        setMessage(data.message || 'Error during check-in.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="date-page">
      <h2>Select Your Check-in Date</h2>
      {message && <p className="message">{message}</p>}
      <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        className="date-input"
      />
      <button onClick={handleCheckIn} disabled={loading} className="confirm-btn">
        {loading ? 'Checking In...' : 'Check-in'}
      </button>
    </div>
  );
}

export default CheckInPage;
