import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes'; // Import the routes configuration
import './App.css'; // Keep global styles if needed

function App() {
  return (
    <BrowserRouter>
      {/* You might want a Layout component here later */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
