import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
// import './App.css';
import {
  Grid,
  Box,
} from '@material-ui/core/';
import JobSearch from './components/JobSearch.jsx';
import Goals from './components/goals.jsx';

// Imported for render testing
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import Headerbar from './components/headerbar/Headerbar.jsx';
import WhatsNext from './components/WhatsNext.jsx';
import EditModal from './components/EditModal.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
/*
useFetch()
@param 'url' The url used for the fetch request
@param 'defaultData' The default data for the seaCreatures hook
@return 'seaCreatures' SeaCreatures is returned after the data is recieved from the fetch request
*/
// const useFetch = (url, defaultData) => {
//   // Hooks
//   const [seaCreatures, setSeaCreatures] = useState(defaultData);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((result) => {
//         setSeaCreatures(result.data);
//       });
//   }, url);

//   return seaCreatures;
// };

export default function App() {
  return (
    <>
      <Headerbar />
      <LandingPage />
      <WhatsNext />
      <Box p={2} />
      <EditModal />
      <Box p={2} />
      <Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Goals />
        </Grid>
        <JobSearch />
      </Grid>
      <DetailsPage />
    </>
  );
}
