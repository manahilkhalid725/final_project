import React, { useState, useEffect } from "react";
import Listings from "./Listings";

function WherePage({ allListings = [] }) {
  const [filteredListings, setFilteredListings] = useState(allListings);

  const countries = [
    {
      name: "France",
      image:
        "https://media.istockphoto.com/id/1436430810/photo/paris-eiffel-tower.jpg?s=612x612&w=0&k=20&c=twnPoKvqoTpraJNYTNrLBKASWjExRQMxoY9XPkHWJFQ=",
    },
    {
      name: "Italy",
      image:
        "https://media.istockphoto.com/id/1380534040/photo/beautiful-view-of-amalfi-on-the-mediterranean-coast-with-lemons-in-the-foreground-italy.jpg?s=612x612&w=0&k=20&c=4UQak9WJkyvN8aEgkLEwjnV5EW2RiGfC_GZNeQaVJeo=",
    },
    {
      name: "Japan",
      image:
        "https://media.istockphoto.com/id/876560704/photo/fuji-japan-in-spring.jpg?s=612x612&w=0&k=20&c=j1VZlzfNcsjQ4q4yHXJEohSrBZJf6nUhh2_smM4eioQ=",
    },
    {
      name: "USA",
      image:
        "https://media.istockphoto.com/id/472911729/video/us-capitol-dome-with-american-flags-in-foreground.jpg?s=640x640&k=20&c=M_nBcMNCn1bQ-MMagFOPlglrnIpvXp4MPWD9EmDxguo=",
    },
    {
      name: "Pakistan",
      image:
        "https://media.istockphoto.com/id/535695503/photo/pakistan-monument-islamabad.jpg?s=612x612&w=0&k=20&c=bNqjdf8L-5igcRB89DdMgx0kNOmyeo1J_zzXmoxxl8w=",
    },
    {
      name: "UAE",
      image:
        "https://media.istockphoto.com/id/154918211/photo/city-of-dubai-burj-khalifa.jpg?s=612x612&w=0&k=20&c=IQ1upJGlnISqrBcBpmDS8HTCw-u6j08GkrFwV2QEMQk=",
    },
    {
      name: "Australia",
      image:
        "https://media.istockphoto.com/id/535455441/photo/view-of-sydney-harbour-australia.jpg?s=612x612&w=0&k=20&c=o7qSiUvYzMp94lYYb7R1ZUAMcEG54byX0bU3UY1z2sQ=",
    },
    {
      name: "UK",
      image:
        "https://media.istockphoto.com/id/526258817/photo/big-ben-in-sunny-day-london.jpg?s=612x612&w=0&k=20&c=HAXEm-xBehvg2q6JmAEir0N7iBPtCuJntpewWL8zIrQ=",
    },
  ];

  // Reset listings when `allListings` changes
  useEffect(() => {
    setFilteredListings(allListings);
  }, [allListings]);

  const handleCountryClick = (country) => {
    const filtered = allListings.filter((listing) =>
      listing.location?.toLowerCase().includes(country.toLowerCase())
    );
    setFilteredListings(filtered);
  };

  const resetListings = () => {
    setFilteredListings(allListings);
  };

  return (
    <div className="page-container">
      <h2>Search Destinations</h2>
      <div className="countries-container">
        {countries.map((country, index) => (
          <div
            key={index}
            className="country-box"
            onClick={() => handleCountryClick(country.name)}
          >
            <img
              src={country.image}
              alt={country.name}
              className="country-image"
            />
            <p className="country-name">{country.name}</p>
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={resetListings}>
        Show All Listings
      </button>
      <h3>Available Listings</h3>
      {filteredListings.length > 0 ? (
        <Listings filteredListings={filteredListings} />
      ) : (
        <p>No listings available for the selected destination.</p>
      )}
    </div>
  );
}

export default WherePage;
