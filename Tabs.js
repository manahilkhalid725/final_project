import React from 'react';

function Tabs({ filterListings }) { // Accept the filterListings function as a prop
  const iconData = [
    { icon: 'fa-light fa-cabin', label: 'Cabins' },
    { icon: 'fa-regular fa-ticket', label: 'Icons' },
    { icon: 'fa-regular fa-island-tropical', label: 'Beachfront' },
    { icon: 'fa-regular fa-house-tree', label: 'Treehouses' },
    { icon: 'fa-solid fa-house-day', label: 'Countryside' },
    { icon: 'fa-regular fa-castle', label: 'Mansions' },
    { icon: 'fa-regular fa-apartment', label: 'Ting homes' },
    { icon: 'fa-sharp fa-solid fa-ufo-beam', label: 'OMG!' },
    { icon: 'fa-regular fa-water-ladder', label: 'Amazing pools' },
    { icon: 'fa-light fa-game-console-handheld', label: 'Play' },
    { icon: 'fa-regular fa-farm', label: 'Farms' },
    { icon: 'fa-light fa-grid', label: 'Off-the-grid' },
    { icon: 'fa-sharp fa-solid fa-castle', label: 'Castles' },
    { icon: 'fa-sharp fa-thin fa-igloo', label: 'Domes' },
    { icon: 'fa-light fa-fire-flame-curved', label: 'Trending' },
    { icon: 'fa-light fa-island-tropical', label: 'Tropical' },
    { icon: 'fa-regular fa-campground', label: 'Camping' },
    { icon: 'fa-light fa-person-skiing-nordic', label: 'Ski-in/out' },
    { icon: 'fa-light fa-house-heart', label: 'Earth homes' },
    { icon: 'fa-sharp fa-light fa-mountain', label: 'Top of the world' },
    { icon: 'fa-sharp fa-regular fa-container-storage', label: 'Containers' },
    { icon: 'fa-light fa-grapes', label: 'Vineyards' },
    { icon: 'fa-sharp fa-solid fa-city', label: 'Top cities' },
    { icon: 'fa-light fa-sailboat', label: 'Boats' },
    { icon: 'fa-light fa-hat-chef', label: 'Chef\'s kitchens' },
    { icon: 'fa-regular fa-key', label: 'New' },
    { icon: 'fa-regular fa-bed', label: 'Rooms' },
    { icon: 'fa-regular fa-palette', label: 'Creative spaces' },
    { icon: 'fa-regular fa-mug-saucer', label: 'Bed & breakfasts' },
    { icon: 'fa-regular fa-snowflake', label: 'Arctic' },
    { icon: 'fa-light fa-cactus', label: 'Desert' },
    { icon: 'fa-regular fa-golf-ball-tee', label: 'Golfing' }
  ];

  return (
    <div className="tabs-container">
      <div className="scrollable-wrapper">
        <div className="scrollable-tabs-container">
          <div className="left-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <ul>
            {iconData.map((cat, idx) => (
              <li key={idx}>
                <button
                  className="icon-button"
                  onClick={() => filterListings(cat.label)} // Call the filter function on button click
                >
                  <i className={cat.icon}></i>
                  <span>{cat.label}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="right-arrow active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="button-container">
        <button className="right1">
          <i className="fa-sharp fa-regular fa-bars-filter"></i>
          <p>Filters</p>
        </button>
        <button className="right2">
          <label className="switch">
            <input type="checkbox" id="toggle" />
            <span className="slider"></span>
          </label>
          <p>Display total before taxes</p>
        </button>
      </div>
    </div>
  );
}

export default Tabs;