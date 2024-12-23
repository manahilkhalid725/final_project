// src/components/CheckOutPage.js
import React, { useState } from 'react';

function CheckOutPage() {
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleDateChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  return (
    <div className="date-page">
      <h2>Select Your Check-out Date</h2>
      <input
        type="date"
        value={checkOutDate}
        onChange={handleDateChange}
        className="date-input"
      />
      <button className="confirm-btn">Check-out</button>
    </div>
  );
}

export default CheckOutPage;
