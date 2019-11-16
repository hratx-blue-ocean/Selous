const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://FriendMiles:Igala1rele@cluster0-4q3ra.gcp.mongodb.net/test', {useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});


const UserSchema = new mongoose.Schema({
  userId: Number,
  userName: String,
  password: String,
  zipcode: Number,
  firstName: String,
  lastName: String,
  userJobs: [JobSchema],
  userGoals: [
    {
      goalName: String,
      goalTarget: Number,
      goalProgress: Number,
    },
  ],

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
