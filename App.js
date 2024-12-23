import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import Listings from './components/Listings';
import SignUp from './components/SignUp';
import Login from './components/Login';
import GiftCards from './components/GiftCards';
import Homepage from './components/Homepage';
import ExperiencePage from './components/ExperiencePage';
import HelpCentre from './components/HelpCentre';
import StaysPage from './components/StaysPage';
import WherePage from './components/WherePage';
import DatePage from './components/DatePage';
import WhoPage from './components/WhoPage';
import CheckInPage from './components/CheckInPage';
import CheckOutPage from './components/CheckOutPage';
import Footer from './components/Footer';
import ListingDetails from './components/ListingDetails';
import Booking from './components/Booking';
import { setupTabListeners } from './utils/functions';
import './App.css';
import './components/styles.css';
import './components/pages.css';

function App() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);  // Track the selected category

  useEffect(() => {
    setupTabListeners();
    // Fetch initial listings data
    fetch('http://localhost:5000/api/listings')
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
        setFilteredListings(data); // Initially show all listings
      })
      .catch((error) => console.error('Error fetching listings:', error));
  }, []);

  // Filtering function to be passed to Tabs
  const filterListings = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredListings(listings); // Show all listings
    } else {
      const filtered = listings.filter((listing) => listing.category === category);
      setFilteredListings(filtered); // Show filtered listings based on category
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <SearchBar />
        {/* Pass filterListings function to Tabs to allow filtering */}
        <Tabs filterListings={filterListings} activeCategory={activeCategory} /> 

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Listings filteredListings={filteredListings} />}
            />
            <Route path="/listing/:id" element={<ListingDetails />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/stays" element={<StaysPage />} />
            <Route path="/checkin" element={<CheckInPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/experiences" element={<ExperiencePage />} />
            <Route path="/airbnb-your-home" element={<Listings />} />
            <Route path="/where" element={<WherePage />} />
            <Route path="/date" element={<DatePage />} />
            <Route path="/who" element={<WhoPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/help-centre" element={<HelpCentre />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;