// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import Listings from './components/Listings';
import { setupTabListeners } from './utils/functions'; // Import the setupTabListeners function
import './App.css';  // Your custom app styles
import './components/styles.css';  // Component-specific styles
// Ensure to link Font Awesome CSS in public/index.html, so you don't need to import it here

function App() {
  // Set up tab listeners when the component mounts
  useEffect(() => {
    setupTabListeners(); // Calling setupTabListeners function
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <div className="app-container">
      <Header />
      <SearchBar />
      <Tabs />
      <Listings />
    </div>
  );
}

export default App;
