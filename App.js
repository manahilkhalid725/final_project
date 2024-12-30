import React, { useState, useEffect } from 'react';
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
import AdminPage from './components/AdminPage';  // Import the AdminPage
import CreateListing from './components/CreateListing';
import ReadListings from './components/ReadListings';
import UpdateListing from './components/UpdateListing';
import DeleteListing from './components/DeleteListing';
import { setupTabListeners } from './utils/functions';
import './App.css';
import './components/styles.css';
import './components/pages.css';

function App() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [activeCategory, setActiveCategory] = useState('null');

  // Fetch all listings when the component mounts
  useEffect(() => {
    setupTabListeners();
    fetchListings();
  }, []);

  const fetchListings = () => {
    fetch('http://localhost:5000/api/listings')
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
        setFilteredListings(data);  // Set the initial listings data to both listings and filteredListings
      })
      .catch((error) => console.error('Error fetching listings:', error));
  };

  const filterListings = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredListings(listings);  // Show all listings if "All" is selected
    } else {
      const filtered = listings.filter((listing) => listing.category === category);
      setFilteredListings(filtered);
    }
  };

  const updateListingsState = (updatedListing) => {
    setFilteredListings((prevListings) =>
      prevListings.map((listing) =>
        listing._id === updatedListing._id ? updatedListing : listing
      )
    );
  };


  return (
    <Router>
      <div className="app-container">
        <Header />
        <SearchBar />
        <Tabs filterListings={filterListings} activeCategory={activeCategory} />
        <div className="main-content">
          <Routes>
            {/* Make sure the Listings component is shown at the root (default route) */}
            <Route path="/" element={<Listings filteredListings={filteredListings} />} />
            <Route path="/listing/:id" element={<ListingDetails />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/stays" element={<StaysPage />} />
            <Route path="/checkin" element={<CheckInPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/experiences" element={<ExperiencePage />} />
            <Route path="/airbnb-your-home" element={<Listings filteredListings={listings} />} /> {/* Show all listings */}
            <Route path="/where" element={<WherePage />} />
            <Route path="/date" element={<DatePage />} />
            <Route path="/who" element={<WhoPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/help-centre" element={<HelpCentre />} />
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminPage />} />  {/* Direct to AdminPage */}
            <Route path="/admin/create" element={<CreateListing fetchListings={fetchListings} />} /> {/* Pass fetchListings to re-fetch listings */}
            <Route path="/admin/read" element={<ReadListings />} />
            <Route path="/admin/update" element={<UpdateListing updateListingsState={updateListingsState} />} /> {/* Pass updateListingsState to update frontend state */}
            <Route path="/admin/delete" element={<DeleteListing fetchListings={fetchListings} />} /> {/* Pass fetchListings to re-fetch listings after deletion */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
