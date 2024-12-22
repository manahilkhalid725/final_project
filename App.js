// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import Listings from './components/Listings';  // Import Listings component
import SignUp from './components/SignUp';  // Create SignUp component
import Login from './components/Login';  // Create Login component
import GiftCards from './components/GiftCards';  // Create GiftCards component
import Homepage from './components/Homepage';  // Import Homepage component
import ExperiencePage from './components/ExperiencePage';  // Use the updated ExperiencePage component
import HelpCentre from './components/HelpCentre';  // Create HelpCentre component
import StaysPage from './components/StaysPage';  // Create StaysPage component
import WherePage from './components/WherePage'; // Import WherePage component
import DatePage from './components/DatePage';   // Import DatePage component
import WhoPage from './components/WhoPage';     // Import WhoPage component
import { setupTabListeners } from './utils/functions'; // Custom function
import './App.css';
import './components/styles.css';
import './components/pages.css';

function App() {
  // Set up tab listeners when the component mounts
  useEffect(() => {
    setupTabListeners();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <SearchBar />
        <Tabs />
        <Routes>
          {/* Default Route to show Listings component */}
          <Route path="/" element={<Listings />} /> {/* Display Listings by default */}
          
          {/* Stays Page Route */}
          <Route path="/stays" element={<StaysPage />} /> {/* Add Stays page */}

          {/* Experiences Page Route */}
          <Route path="/experiences" element={<ExperiencePage />} /> {/* Add Experiences page */}

          {/* Route for Airbnb Your Home - Only Listings */}
          <Route path="/airbnb-your-home" element={<Listings />} /> {/* Only Listings component */}

          {/* Routes for SearchBar buttons */}
          <Route path="/where" element={<WherePage />} /> {/* Where page */}
          <Route path="/date" element={<DatePage />} />   {/* Date page */}
          <Route path="/who" element={<WhoPage />} />     {/* Who page */}

          {/* Other Routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/help-centre" element={<HelpCentre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
