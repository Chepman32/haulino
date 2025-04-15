/* eslint-disable import/first */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './config/i18n'; // Import i18n configuration
import { Amplify } from 'aws-amplify'; // Import Amplify
import awsExports from './aws-exports'; // Import Amplify config

Amplify.configure(awsExports); // Configure Amplify

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="Loading..."> {/* Wrap App with Suspense */}
      <App />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
