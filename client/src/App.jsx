import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
// import './App.css';
import JobSearch from './components/JobSearch.jsx';
import {
  Grid,
} from '@material-ui/core/';

/*
useFetch()
@param 'url' The url used for the fetch request
@param 'defaultData' The default data for the seaCreatures hook
@return 'seaCreatures' SeaCreatures is returned after the data is recieved from the fetch request
*/
const useFetch = (url, defaultData) => {
  // Hooks
  const [seaCreatures, setSeaCreatures] = useState(defaultData);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setSeaCreatures(result.data);
      });
  }, url);

  return seaCreatures;
};

export default function App() {
  // Variable Decleration
  const api = 'http://localhost:8000/api/example';
  const result = useFetch(api, []);

  return (
    <>
      <h1>Welcome to Blue Ocean!</h1>
      <ul>
        {result.map((creature, index) => (
          <li key={index}>{creature}</li>
        ))}
      </ul>
      <h1>Tylers Linter sucks donkey wang</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <JobSearch />
      </Grid>
    </>
  );
}
