import React from 'react';
<<<<<<< HEAD
import Headerbar from './components/headerbar/Headerbar.jsx';


export default function App() {
  return (
    <div>
      <Headerbar />
    </div>
=======
import Goals from './components/goals.jsx';

// Imported for render testing
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import Headerbar from './components/headerbar/Headerbar.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';

export default function App() {
  return (
    <>
      <Headerbar />
      <Dashboard />
      <Goals />
      <DetailsPage />
    </>
>>>>>>> dashboard
  );
}
