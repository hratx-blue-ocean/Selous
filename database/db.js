const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://FriendMiles:Igala1rele@cluster0-4q3ra.gcp.mongodb.net/Selous', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongo is Connected');
});


const JobSchema = new mongoose.Schema ({
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

const addUser = () =>{
  const user = new User({
    userName: 'FriendMiles',
    password: 'password',
    zipcode: '12345',
    firstName: 'Miles',
    lastName: 'Sobhani',
    userJobs: [],
    userGoals: [],
  });

  user.save();
};

const addJob = (userId, jobData) => {
  const job = new Job({
  completed: false,
  notes: jobData,
  createdAt: String,
  company: String,
  position: String,
  contactName: String,
  contactEmail: String,
  progressArray:
  })
  User.findOne({ _id:userId }).then((user) => {
    user.userJobs.push()
  })
}

// userId = username, password, zipcode, firstname, lastname
// read to check username availability then
// write when new user signs up
// read when login

// userJobId = company, position, contactName, contactEmail
//    progressArray[firstIncrement{incrementName, notes}]
// read when user logs in
// write when new job added
// write to progressArray when adding new progress point
// edit to change notes or to add completion
// delete

// goalId = goalTarget, goalProgress
// write when new job applied to
// read when user logs in
// edit
// delete
module.exports = { addUser }