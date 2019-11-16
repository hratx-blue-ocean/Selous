import React from 'react';

// Imported for render testing
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import Headerbar from './components/headerbar/Headerbar.jsx';

export default function App() {
  return (
    <>
      <Headerbar />
      {/* <Goals /> */}
      <DetailsPage />
    </>
  );
}
