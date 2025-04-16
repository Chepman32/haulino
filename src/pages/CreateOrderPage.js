import React from 'react';
import './CreateOrderPage.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

const cities = [
  { name: 'New York', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Los Angeles', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Chicago', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Houston', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Phoenix', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Philadelphia', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'San Antonio', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'San Diego', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Dallas', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'San Jose', imageUrl: 'https://via.placeholder.com/150' },
]; // Placeholder list

const CreateOrderPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedCityName = searchParams.get('city');
  const selectedCity = cities.find(city => city.name === selectedCityName);

  const handleCityClick = (city) => {
    navigate(`/create-order?city=${city}`);
  };

  return (
    <div className="create-order-page">
      {selectedCity && (
        <div className="selected-city-banner">
          <img src={selectedCity.imageUrl} alt={selectedCity.name} className="large-city-photo" />
          <h2>Booking for {selectedCity.name}</h2>
        </div>
      )}
      <div className="header">
        <h1>Cities we service | Lugg</h1>
        <p>On-demand movers</p>
        <p>Services</p>
        <p>Cities</p>
        <p>Retailers</p>
        <p>Become a Lugger</p>
        <p>Get estimate</p>
        <p>Sign in</p>
      </div>

      <div className="main-content">
        <h2>Book now</h2>
        <p>On-demand movers nationwide</p>
        <p>Moving help in hundreds of cities across the United States. Big or small, get the most affordable rates for movers in your city.</p>

        <div className="pickup-details">
          <h3>Pick up from</h3>
          <p>Pickup address</p>
          <h3>Move to</h3>
          <p>Drop-off address</p>
          <p>See prices</p>
        </div>

        <div className="city-grid">
          {cities.map((city) => (
            <div className="city-item" key={city.name} onClick={() => handleCityClick(city.name)}>
              <img src={city.imageUrl} alt={city.name} />
              <h3>{city.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateOrderPage;
