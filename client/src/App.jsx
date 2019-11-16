import React from 'react';
import './App.css';
// import Goals from './components/goals.jsx';
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import Headerbar from './components/headerbar/Headerbar.jsx';

export default function App() {
  return (
    <div>
      <Headerbar />
      {/* <Goals /> */}
      <DetailsPage />
    </div>
  );
}
