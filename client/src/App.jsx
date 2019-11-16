import React, { useState, useEffect } from 'react';
import 'babel-polyfill';
import fetch from 'node-fetch';
import Goals from './components/Goals.jsx';
import DetailsPage from './components/DetailsPage/DetailsPage.jsx';
import Headerbar from './components/headerbar/Headerbar.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Login from './components/Login/Login.jsx';

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
  const api = 'http://localhost:8000/api/example';
  const result = useFetch(api, []);

  return (
    <div>
      <Headerbar />
      {/* <Goals /> */}
      <DetailsPage />
      <Login />
      <SignUp />
    </div>
  );
}
