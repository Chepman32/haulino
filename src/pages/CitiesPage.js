import React from 'react';
import AddressPicker from '../components/AddressPicker';
import CityList from '../components/CityList';

const CitiesPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Select Your Location</h1>
      <AddressPicker />
      <hr style={{ margin: '20px 0' }} />
      <CityList />
    </div>
  );
};

export default CitiesPage;
