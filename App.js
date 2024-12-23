import React, { useEffect } from 'react';
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
import CheckInPage from './components/CheckInPage';  // Import CheckInPage
import CheckOutPage from './components/CheckOutPage'; // Import CheckOutPage
import Footer from './components/Footer';  // Import Footer component
import { setupTabListeners } from './utils/functions';
import './App.css';
import './components/styles.css';
import './components/pages.css';

function App() {
  useEffect(() => {
    setupTabListeners();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header />  {/* Always present */}
        <SearchBar />
        <Tabs />

        <div className="main-content"> {/* Wrapper for main content */}
          <Routes>
            <Route path="/" element={<Listings />} />
            <Route path="/stays" element={<StaysPage />} />
            <Route path="/checkin" element={<CheckInPage />} /> {/* Route for CheckInPage */}
            <Route path="/checkout" element={<CheckOutPage />} /> {/* Route for CheckOutPage */}
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

        <Footer />  {/* Footer added here */}
      </div>
    </Router>
  );
}

export default App;
