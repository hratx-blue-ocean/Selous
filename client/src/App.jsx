import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import Goals from './components/goals.jsx';

// Imported for render testing
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';

export default function App() {
  return (
    <>
      <h1>Welcome to Blue Ocean!</h1>
      <ul>
        {result.map((creature, index) => (
          <li key={index}>{creature}</li>
        ))}
      </ul>
      <Goals />
      <DetailsPage />
    </>
  );
}
