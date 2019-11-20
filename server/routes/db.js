// miles & tyler
const router = require('express').Router();
const db = require('../../database/db');

router.post('/signup', (req, res) => {
  db.validateSignup(req.body.data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(409).send(err);
    } else {
      res.status(201).send(result);
    }
  });
});

router.post('/login', (req, res) => {
  db.validateLogin(req.body.data, (err, user) => {
    if (err) {
      console.log(err);
      res.status(401).send(false);
    } else {
      res.status(200).send(user);
    }
  });
});

router.post('/dashboard/job', (req, res) => {
  console.log(req.body);
  db.addJob(req.body.userId, req.body.jobData, (err, job) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(201).send(job);
    }
  });
});
router.post('/goals', (req, res) => {
  console.log(req.body);
  db.addGoal(req.body.userId, req.body.goalData, (err, goal) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(201).send(goal);
    }
  });
});
router.post('/dashboard/job/progress', (req, res) => {
  console.log(req.body);
  db.addJobProgress(req.body.userId, req.body.jobId, req.body.progressData, (err, progress) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(201).send(progress);
    }
  });
});

module.exports = router;
