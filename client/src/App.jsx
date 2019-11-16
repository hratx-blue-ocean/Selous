import React from 'react';
// import fetch from 'node-fetch';
import Dashboard from './components/dashboard/dashboard.jsx';
import './components/dashboard/dashboard.css';
// import './App.css';

// Imported for render testing
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';

export default function App() {
  return (
    <>
      <h1>Welcome to Blue Ocean!</h1>

      <Dashboard />
      <DetailsPage />
    </>
  );
}
