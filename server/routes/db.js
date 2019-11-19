const router = require('express').Router();
const db = require('../../database/db');

router.post('/signup', (req, res) => {
  db.validateSignup(req.body, (err, result) => {
    if (err) {
      res.status(409).send(err);
    } else {
      res.status(201).send(result);
    }
  });
});

router.post('/login', (req, res) => {
  db.validateLogin(req.body, (err, user) => {
    if (err) {
      res.status(401).send(false);
    } else {
      res.status(200).send(user);
    }
  });
});

router.post('/dashboard/job', (req, res) => {
  db.addJob(req.body.jobData, (err, job) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(job);
    }
  });
});

router.post('/goals', (req, res) => {
  db.addGoal(req.body, (err, goal) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.body);
      res.status(200).send(goal);
    }
  });
});

router.post('/dashboard/job/progress', (req, res) => {
  db.addJobProgress(req.body, (err, progress) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(progress);
    }
  });
});

router.get('/', (req, res) => {
  res.json({ data: ['dolphins', 'manatees', 'sea turles'] });
});

module.exports = router;
