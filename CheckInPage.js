// src/components/CheckInPage.js
import React, { useState } from 'react';

function CheckInPage() {
  const [checkInDate, setCheckInDate] = useState('');

  const handleDateChange = (event) => {
    setCheckInDate(event.target.value);
  };

  return (
    <div className="date-page">
      <h2>Select Your Check-in Date</h2>
      <input
        type="date"
        value={checkInDate}
        onChange={handleDateChange}
        className="date-input"
      />
      <button className="confirm-btn">Check-in</button>
    </div>
  );
}

export default CheckInPage;
