import React, { useState } from 'react';
import './CreateOrderPage.css';
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";

const client = generateClient();

const CreateOrderPage = () => {
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await getCurrentUser();
      const orderDetails = {
        pickupAddress: pickupAddress,
        dropoffAddress: dropoffAddress,
        userId: user.userId, // Assuming user object has a userId
      };

      // Replace 'createOrder' with the actual mutation name in your GraphQL schema
      const mutation = `
        mutation CreateOrder($pickupAddress: String!, $dropoffAddress: String!, $userId: ID!) {
          createOrder(pickupAddress: $pickupAddress, dropoffAddress: $dropoffAddress, userId: $userId) {
            id
            pickupAddress
            dropoffAddress
            userId
          }
        }
      `;

      const variables = {
        pickupAddress: orderDetails.pickupAddress,
        dropoffAddress: orderDetails.dropoffAddress,
        userId: orderDetails.userId,
      };

      const response = await client.graphql({
        query: mutation,
        variables: variables,
      });

      console.log('Order created:', response);
      // Optionally, redirect the user or display a success message
    } catch (error) {
      console.error('Error creating order:', error);
      // Display an error message to the user
    }
  };

  return (
    <div className="create-order-page">
      <div className="header">
        <h1>Create Order</h1>
      </div>

      <div className="main-content">
        <h2>Enter Order Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="pickupAddress">Pickup Address:</label>
            <input
              type="text"
              id="pickupAddress"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="dropoffAddress">Drop-off Address:</label>
            <input
              type="text"
              id="dropoffAddress"
              value={dropoffAddress}
              onChange={(e) => setDropoffAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit">Create Order</button>
        </form>
      </div>
    </div>
  );
};

export default CreateOrderPage;
