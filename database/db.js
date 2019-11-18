const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://FriendMiles:Igala1rele@cluster0-4q3ra.gcp.mongodb.net/Selous', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongo is Connected');
});


const JobSchema = new mongoose.Schema({
  completed: Boolean,
  notes: String,
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
      goaldId: Number,
      goalName: String,
      goalTarget: Number,
      goalProgress: Number,
    },
  ],

});

const User = mongoose.model('User', UserSchema);
const Job = mongoose.model('Job', JobSchema);

const validateLogin = (name, password, callback) => {
  User.findOne({ userName: name }).then((user) => {
    if (user === null) {
      console.log('incorrect username');
    } else {
      if (password === user.password) {
        console.log('Login Valid!');
        return user;
      }
      console.log('incorrect password');
      return null;
    }
  }).catch((err) => { console.log(err); });
};


const validateSignup = (userData, callback) => {
  User.findOne({ userName: userData.userName })
    .then((user) => {
      if (user === null) {
        const newUser = new User({
          userName: userData.userName,
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

const addJob = (userId, jobData) => {
  const job = new Job({
    completed: false,
    notes: jobData.notes,
    createdAt: jobData.createdAt,
    company: jobData.company,
    position: jobData.position,
    contactName: jobData.contactName,
    contactEmail: jobData.contactEmail,
    progressArray: [],
  });
  User.findOne({ _id: userId }).then((user) => {
    user.userJobs.push(job);
    console.log(job);
    user.save((err) => {
      if (err) console.log(err);
    });
  }).catch((err) => { console.log(err); });
};

const addGoal = (userId, goalData) => {
  User.findOne({ _id: userId }).then((user) => {
    user.userGoals.push(goalData);
    user.save((err) => {
      if (err) console.log(err);
    });
  }).catch((err) => {
    if (err) console.log(err);
  });
};

const addJobProgress = (userId, jobId, progressData) => {
  User.findOne({ _id: userId }).then((user) => {
    user.userJobs[jobId].progressArray.push(progressData);
    user.save((err) => {
      if (err) console.log(err);
    });
  }).catch((err) => {
    if (err) console.log(err);
  });
};

// const goal = {
//   goaldId: 3,
//   goalName: 'Get rekt',
//   goalTarget: 5,
//   goalProgress: 0,
// };

// const progress = {
//   stepName: 'Applied',
//   stepNotes: 'Something cool',
//   createdAt: 'yesterday',
//   isCompleted: false,
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
//   completed: false,
//   notes: 'yadda yadda',
//   createdAt: 'yadda yadda 1234',
//   company: 'yadda yadda',
//   position: 'professional badass',
//   contactName: 'Marvin',
//   contactEmail: 'Marvins email',
//   progressArray: [],
// };
// addJob('5dd029fe3b8f9e2e8c21d3aa', data);

// All exported functions work!

module.exports = {
  addJob, addGoal, addJobProgress, validateLogin, validateSignup,
};
