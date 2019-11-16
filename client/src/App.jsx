import React from 'react';
// import fetch from 'node-fetch';
import Goals from './components/goals.jsx';

// Imported for render testing
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import Headerbar from './components/headerbar/Headerbar.jsx';
import SignUp from './components/SignUp/SignUp.js';
import Login from './components/Login/Login.js';

export default function App() {
  return (
    <>
      <Headerbar />
      <h1>Welcome to Blue Ocean!</h1>
      <ul>
        {/* {result.map((creature, index) => (
          <li key={index}>{creature}</li>
        ))} */}
      </ul>
      <Goals />
      <DetailsPage />
      <Login />
      <SignUp />
    </>
  );
}
