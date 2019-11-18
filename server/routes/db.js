const router = require('express').Router();
const db = require('../../database/db');

router.post('/signup', (req, res) => {
  db.validateSignup(req.body, (err, result) => {
    if (err) {
      res.statusCode(409).send(err);
    } else {
      res.statusCode(201).send(result);
    }
  });
});

router.get('/', (req, res) => {
  res.json({ data: ['dolphins', 'manatees', 'sea turles'] });
});

module.exports = router;
