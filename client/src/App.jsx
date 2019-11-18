import React from 'react';
import Headerbar from './components/headerbar/Headerbar.jsx';
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import Goals from './components/goals.jsx';

export default function App() {
  return (
    <>
      <Headerbar />
      <Dashboard />
      <Goals />
      <DetailsPage />
    </>
  );
}
