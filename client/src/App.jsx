import React from 'react';
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
