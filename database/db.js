// miles & tyler
const mongoose = require('mongoose');
const debug = require('debug')('mongoDB');
const MONGO_DB_PASSWORD = require('../.env');
// const bcrypt = require('bcryptjs');

mongoose.connect(`mongodb+srv://FriendMiles:${MONGO_DB_PASSWORD}@cluster0-4q3ra.gcp.mongodb.net/Selous`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', debug.bind(console, 'connection error:'));
db.once('open', () => {
  debug('Mongo is Connected');
});


const JobSchema = new mongoose.Schema({
  completed: Boolean,
  notes: String,
  description: String,
  createdAt: String,
  company: String,
  position: String,
  contactName: String,
  contactEmail: String,
  progressArray: [
    {
      stepName: String,
      stepNotes: String,
      createdAt: String,
      isCompleted: Boolean,
    },
  ],
});

const UserSchema = new mongoose.Schema({
  userName: String,
  password: String,
  zipcode: Number,
  firstName: String,
  lastName: String,
  userJobs: [JobSchema],
  userGoals: [
    {
      goalId: Number,
      goalName: String,
      goalTarget: Number,
      goalProgress: Number,
    },
  ],

});

const User = mongoose.model('User', UserSchema);
const Job = mongoose.model('Job', JobSchema);

const validateLogin = (login, callback) => {
  User.findOne({ userName: login.username })
    .then((user) => {
      if (user === null) {
        callback(new Error('incorrect login credentials'), null);
      } else {
        callback(null, user);
      }
    })
    .catch((err) => { callback(err, null); });
};

const getUser = (userId, callback) => {
  User.findOne({ _id: userId })
    .then((user) => {
      callback(null, user);
    })
    .catch((err) => {
      callback(err, null);
    });
};


const validateSignup = (userData, callback) => {
  User.findOne({ userName: userData.username })
    .then((user) => {
      if (user === null && userData.username.length > 1) {
        const newUser = new User({
          userName: userData.username,
          password: userData.password,
          zipcode: userData.zipcode,
          firstName: userData.firstName,
          lastName: userData.lastName,
          userJobs: [],
          userGoals: [],
        });
        newUser.save()
          .then((data) => {
            callback(null, data);
          })
          .catch((err) => {
            if (err) callback(err, null);
          });
      } else {
        callback(null, 'username already taken');
      }
    })
    .catch((error) => {
      callback(error, null);
    });
};

//

const addJob = (userId, jobData, callback) => {
  const date = new Date();
  const now = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
  const job = new Job({
    completed: false,
    notes: jobData.notes,
    createdAt: now,
    company: jobData.company,
    position: jobData.position,
    contactName: jobData.contactName,
    contactEmail: jobData.contactEmail,
    progressArray: [],
  });
  User.findOne({ _id: userId }).then((user) => {
    user.userJobs.push(job);
    callback(null, job);
    user.save().catch((err) => { callback(err, null); });
  });
};

const addGoal = (userId, goalData, callback) => {
  User.findOne({ _id: userId }).then((user) => {
    user.userGoals.push(goalData);
    user.save((err) => {
      if (err) callback(err, null);
      else {
        callback(null, goalData);
      }
    });
  }).catch((err) => {
    if (err) callback(err, null);
  });
};

const editGoalProgress = (userId, goalId, increment, callback) => {
  User.findOne({ _id: userId }).then((user) => {
    // eslint-disable-next-line
    user.userGoals[goalId].goalProgress += increment;
    const progress = user.userGoals[goalId].goalProgress;
    const target = user.userGoals[goalId].goalTarget;
    if (progress < 0) {
      // eslint-disable-next-line
      user.userGoals[goalId].goalProgress = 0;
    }
    if (progress > target) {
      // eslint-disable-next-line
      user.userGoals[goalId].goalProgress = target;
    }
    user.save((err) => {
      if (err) callback(err, null);
      else {
        callback(null, user.userGoals[goalId]);
      }
    });
  }).catch((err) => {
    if (err) callback(err, null);
  });
};

const addJobProgress = (userId, jobId, progressData, callback) => {
  User.findOne({ _id: userId }).then((user) => {
    user.userJobs[jobId].progressArray.push(progressData);
    user.save((err) => {
      if (err) callback(err, null);
      else {
        callback(null, progressData);
      }
    });
  }).catch((err) => {
    if (err) callback(err, null);
  });
};

const changeProgress = (userId, jobId, progId, completed, callback) => {
  User.findOne({ _id: userId })
    .then((user) => {
      debug('jobId', jobId);
      // eslint-disable-next-line
      // eslint-disable-next-line no-param-reassign
      user.userJobs[jobId].progressArray[progId].isCompleted = completed;
      user.save((err) => {
        if (err) callback(err, null);
        else callback(null, completed);
      });
    })
    .catch((err) => {
      callback(err, null);
    });
};

const editProgress = (userId, jobId, progressId, progressData, callback) => {
  User.findOne({ _id: userId }).then((user) => {
    const thisUser = user;
    thisUser.userJobs[jobId].progressArray[progressId] = progressData;
    user.save((data) => {
      callback(null, data);
    }).catch((err) => {
      callback(err, null);
    });
  });
};

const editNotes = (userId, jobId, notes, callback) => {
  User.findOne({ _id: userId })
    .then((user) => {
      // eslint-disable-next-line no-param-reassign
      user.userJobs[jobId].notes = notes;
      user.save((err) => {
        if (err) callback(err, null);
        else {
          callback(null, notes);
        }
      });
    })
    .catch((err) => {
      callback(err, null);
    });
};

// Goal Schema
// const goal = {
//   goaldId: 3,
//   goalName: 'Get rekt',
//   goalTarget: 5,
//   goalProgress: 0,
// };

// progress: {
//   stepName: 'Applied',
//   stepNotes: 'Something cool',
//   createdAt: 'yesterday',
//   isCompleted: false,
//   tabEditText: 'Edit'
//   whatsNextTab: false
// };

// validateLogin('FriendMile', 'password');

// validateSignup(data);

// const data = {
//   userName: 'FriendMiles2',
//   password: 'sdofijsdofij',
//   zipcode: '3453545',
//   firstName: 'Miles',
//   lastName: 'Friendly',
//   userJobs: [],
//   userGoals: [],
// };

//    Replaced by validatelogin
// const addUser = (userData) => {
//   const user = new User({
//     userName: userData.userName,
//     password: userData.password,
//     zipcode: userData.zipcode,
//     firstName: userData.firstName,
//     lastName: userData.lastName,
//     userJobs: [],
//     userGoals: [],
//   });
//   user.save();
// };

// addJobProgress('5dd029fe3b8f9e2e8c21d3aa', 0, progress);
// addGoal('5dd029fe3b8f9e2e8c21d3aa', goal)
// const data = {
// completed: false,
// notes: 'yadda yadda',
// createdAt: 'yadda yadda 1234',
// company: 'yadda yadda',
// position: 'professional badass',
// contactName: 'Marvin',
// contactEmail: 'Marvins email',
// progressArray: [],
// };
// addJob('5dd029fe3b8f9e2e8c21d3aa', data);

// All exported functions work!

module.exports = {
  addJob,
  addGoal,
  addJobProgress,
  validateLogin,
  validateSignup,
  changeProgress,
  getUser,
  editProgress,
  editNotes,
  editGoalProgress,
};
