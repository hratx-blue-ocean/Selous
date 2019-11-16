import React from 'react';
import './App.css';
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import Headerbar from './components/headerbar/Headerbar.jsx';
// import Goals from './components/goals.jsx';

export default function App() {
  return (
    <div>
      <Headerbar />
      {/* <Goals /> */}
      <DetailsPage />
    </div>
  );
}
