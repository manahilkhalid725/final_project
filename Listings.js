import React, { useState } from 'react';

function Listings() {
  const listings = [
    {
        //box1
      image: 'https://i.pinimg.com/736x/97/7c/f5/977cf5377928ebbd518f9fb2bdd814eb.jpg',
      location: 'Lahore, Pakistan',
      rating: 4.93,
      distance: '6,650 kilometers away',
      dates: 'Jan 20 - March 30',
      price: '$405 night',
    },
    {
      image: 'https://i.pinimg.com/736x/70/76/73/707673bc1598d64ef9b797a0524a49b2.jpg',
      location: 'Karachi, Pakistan',
      rating: 4.75,
      distance: '7,500 kilometers away',
      dates: 'Feb 1 - March 20',
      price: '$350 night',
    },
    {
      image: 'https://i.pinimg.com/474x/18/af/2f/18af2fff64eaee7a12676ddbf3df9fea.jpg',
      location: 'Islamabad, Pakistan',
      rating: 4.60,
      distance: '8,000 kilometers away',
      dates: 'Jan 15 - Feb 28',
      price: '$375 night',
    },
    {
      image: 'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/03/trump-hotel-chicago-illinois-usa.jpg',
      location: 'Dubai, UAE',
      rating: 4.95,
      distance: '4,000 kilometers away',
      dates: 'Mar 1 - Apr 10',
      price: '$500 night',
    },
    //box2
    {
      image: 'https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'New York, USA',
      rating: 4.90,
      distance: '12,000 kilometers away',
      dates: 'Apr 5 - Jun 1',
      price: '$600 night',
    },
    {
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'London, UK',
      rating: 4.80,
      distance: '6,200 kilometers away',
      dates: 'Feb 15 - Apr 10',
      price: '$420 night',
    },
    {
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Tokyo, Japan',
      rating: 4.85,
      distance: '10,000 kilometers away',
      dates: 'Mar 1 - May 10',
      price: '$475 night',
    },
    {
      image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Sydney, Australia',
      rating: 4.65,
      distance: '8,500 kilometers away',
      dates: 'Apr 10 - May 15',
      price: '$550 night',
    },
    //box3
    {
        image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'New York, USA',
        rating: 4.90,
        distance: '12,000 kilometers away',
        dates: 'Apr 5 - Jun 1',
        price: '$600 night',
      },
      {
        image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'London, UK',
        rating: 4.80,
        distance: '6,200 kilometers away',
        dates: 'Feb 15 - Apr 10',
        price: '$420 night',
      },
      {
        image: 'https://images.pexels.com/photos/2343469/pexels-photo-2343469.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Tokyo, Japan',
        rating: 4.85,
        distance: '10,000 kilometers away',
        dates: 'Mar 1 - May 10',
        price: '$475 night',
      },
      {
        image: 'https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Sydney, Australia',
        rating: 4.65,
        distance: '8,500 kilometers away',
        dates: 'Apr 10 - May 15',
        price: '$550 night',
      },
  ];

  const [liked, setLiked] = useState({}); // To track liked heart icons

  const toggleHeart = (index) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [index]: !prevLiked[index],
    }));
  };

  return (
    <div className="container2">
      {listings.map((listing, idx) => (
        <div key={idx} className="box1">
          <div className="image-container">
            <img
              src={listing.image}
              alt="Listing"
              className="listing-image"
            />
            <i
              className={`fa-solid fa-heart ${liked[idx] ? 'liked' : ''}`}
              onClick={() => toggleHeart(idx)}
            ></i>
          </div>
          <div>
            <p className="location">
              {listing.location}
              <span className="rating">
                <i className="fa-solid fa-star"></i> {listing.rating}
              </span>
            </p>
            <p className="distance">{listing.distance}</p>
            <p className="dates">{listing.dates}</p>
            <p className="price">{listing.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listings;
