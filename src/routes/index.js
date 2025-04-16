import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Keep Amplify UI styles import if needed globally, otherwise remove if only for HOC here
import '@aws-amplify/ui-react/styles.css';
import MainLayout from '../components/Layout/MainLayout'; // Import the layout
import HomePage from '../pages/HomePage'; // Import the HomePage component
import CreateOrderPage from '../pages/CreateOrderPage'; // Import the CreateOrderPage component
import BecomeLuggerPage from '../pages/BecomeLuggerPage'; // Import the BecomeLuggerPage component
import ServiceDetailPage from '../pages/ServiceDetailPage'; // Import the ServiceDetailPage component
// Import page components here later
// ... other pages

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes that use the main layout */}
      <Route element={<MainLayout />}>
        {/* Define child routes here */}
        <Route index element={<HomePage />} /> {/* Use index for the default child route */}
        {/* Remove inline HOC wrapping */}
        <Route path="/create-order" element={<CreateOrderPage />} />
        <Route path="/become-lugger" element={<BecomeLuggerPage />} /> {/* Add route for BecomeLuggerPage */}
        <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} /> {/* Add dynamic route for service details */}
        {/* Add other main application routes here */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
