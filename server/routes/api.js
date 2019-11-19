const router = require('express').Router();
const axios = require('axios');
// const db = require('../../database/db');

router.get('/apiRequest', (req, res) => {
  let descriptionTemp;
  const locationTemp = 'chicago';

  if (req.params.description === undefined) {
    descriptionTemp = '';
  } else {
    descriptionTemp = req.params.description;
  }

  axios.get(`https://jobs.github.com/positions.json?description=${descriptionTemp}&location=${locationTemp}`)
    .then((results) => {
      res.send(results);
      // console.log(results);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
