// miles & tyler
const router = require('express').Router();
const debug = require('debug')('server');
const db = require('../../database/db.js');

router.post('/signup', (req, res) => {
  db.validateSignup(req.body.data, (err, result) => {
    if (err) {
      res.status(409).send(err);
    } else {
      res.status(201).send(result);
    }
  });
});

router.post('/login', (req, res) => {
  db.validateLogin(req.body.data, (err, user) => {
    if (err) {
      res.status(401).send(false);
    } else {
      res.status(200).send(user);
    }
  });
});

router.get('/login', (req, res) => {
  db.getUser(req.query.userId, (err, user) => {
    if (err) {
      res.status(401).send(false);
    } else {
      res.status(200).send(user);
    }
  });
});

router.post('/dashboard/job', (req, res) => {
  db.addJob(req.body.userId, req.body.jobData, (err, job) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(201).send(job);
    }
  });
});
router.post('/goals', (req, res) => {
  db.addGoal(req.body.userId, req.body.goalData, (err, goal) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(201).send(goal);
    }
  });
});

router.post('/goals/progress', (req, res) => {
  console.log(req.body);
  db.editGoalProgress(req.body.userId, req.body.goalId,
    req.body.increment, (err, goal) => {
      if (err) {
        res.status(400).send();
      } else {
        res.status(201).send(goal);
      }
    });
});

router.post('/dashboard/job/progress', (req, res) => {
  db.addJobProgress(req.body.userId,
    req.body.jobId,
    req.body.progressData,
    (err, progress) => {
      if (err) {
        res.status(400).send();
      } else {
        res.status(201).send(progress);
      }
    });
});

router.put('/dashboard/job/progress', (req, res) => {
  debug('%o', req.body);
  db.editProgress(req.body.userId, req.body.jobId,
    req.body.progressId, req.body.progressData, (err, update) => {
      if (err) {
        res.status(400).send();
      } else {
        res.status(201).send(update);
      }
    });
});

router.put('/dashboard/job/notes', (req, res) => {
  console.log(req.body);
  db.editNotes(req.body.userId, req.body.jobId, req.body.notes, (err, update) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(201).send(update);
    }
  });
});

router.put('/dashboard/job/progress/check', (req, res) => {
  db.changeProgress(req.body.userId,
    req.body.jobId,
    req.body.progId,
    req.body.completed,
    (err, result) => {
      if (err) {
        res.status(400).send();
        debug(err);
      } else {
        res.status(201).send(result);
      }
    });
});

module.exports = router;
