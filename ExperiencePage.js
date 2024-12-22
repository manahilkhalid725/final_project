// src/pages/ExperiencePage.js
import React from 'react';

function ExperiencesPage() {
  return (
    <div className="experiences-container">
      <h1>Experiences</h1>
      <p>Explore unique experiences hosted by locals.</p>
      <div className="experiences-content">
        <div className="experience-card">
          <img src="https://via.placeholder.com/200" alt="Experience 1" />
          <h3>Cooking Class</h3>
          <p>Learn to cook with a local chef</p>
        </div>
        <div className="experience-card">
          <img src="https://via.placeholder.com/200" alt="Experience 2" />
          <h3>City Tour</h3>
          <p>Discover hidden gems in the city</p>
        </div>
        {/* Add more experience cards here */}
      </div>
    </div>
  );
}

export default ExperiencesPage;
