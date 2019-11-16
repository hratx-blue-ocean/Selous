import React from 'react';
// import fetch from 'node-fetch';
import Goals from './components/goals.jsx';
// Imported for render testing
// import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import Headerbar from './components/headerbar/Headerbar.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Login from './components/Login/Login.jsx';

export default function App() {
  return (
    <>
      <Headerbar />
      <Goals />
      <Login />
      <SignUp />
    </>
  );
}
