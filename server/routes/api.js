const router = require('express').Router();
const axios = require('axios');
// const db = require('../../database/db');

router.get('/', (req, res) => {
  let descriptionTemp;
  const locationTemp = 'chicago';

  if (req.query.description === undefined) {
    descriptionTemp = '';
  } else {
    descriptionTemp = req.query.description;
  }

  axios.get(`https://jobs.github.com/positions.json?description=${descriptionTemp}&location=${locationTemp}`)
    .then((results) => {
      res.send(JSON.stringify(results.data));
    })
    .catch((err) => res.send(err));
});

module.exports = router;
