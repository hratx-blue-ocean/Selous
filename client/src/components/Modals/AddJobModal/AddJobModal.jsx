import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

/* eslint-disable prefer-const */
import {
  Typography,
  Fab,
  Box,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { addJobModalAction, userToState } from '../../../redux/actions/actions.js';

const useStyles = makeStyles(({
  container: {
    // display: 'flex',
    // flexDirection: 'row',
    padding: 30,
    // width: '790px',
    // height: '300px',
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: '8px',
    // fontFamily: 'Arial',
    fontSize: '18px',
    background: '#F2F2F2',
    border: 2,
    borderColor: '#9F6CB7',
    borderStyle: 'solid',
    position: 'static',
    margin: '7% auto 50px auto',
    backgroundImage: 'url("https://selious.s3.amazonaws.com/selousSplice.PNG")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 20%',
  },
  root: {
    padding: 10,
    width: '549px',
    height: '400px',
    borderRadius: '8px',
    fontFamily: 'Arial',
    fontSize: '18px',
    background: '#F2F2F2',
    border: 2,
    borderColor: '#9F6CB7',
    borderStyle: 'solid',
  },
  notes: {
    borderRadius: '8px',
    padding: 10,
    background: '#FFFFFF',
    width: '350px',
    height: '250px',
    borderWidth: 1,
    borderColor: 'purple',
    borderStyle: 'solid',
    boxShadow: 5,
  },
  next: {
    borderRadius: '8px',
    // padding: 10,
    background: '#FFFFFF',
    width: '400px',
    // borderWidth: 1,
    // marginRight: 25,
    // marginBottom: 20,
    // borderColor: 'purple',
    // borderStyle: 'solid',
    boxShadow: 5,
    margin: '8px',
  },
  do: {
    color: '#69B92A',
    fontSize: 54,
    stroke: 'black',
    strokeWidth: '.5px',
  },
  doNot: {
    color: '#DB5C5C',
    fontSize: 54,
    transform: 'rotate(45deg)',
    stroke: 'black',
    strokeWidth: '.5px',
  },
  buttons: {
    marginRight: 6,
    float: 'right',
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginLeft: 10,
  },
  fabStuff: {
    size: 'small',
    marginTop: 5,
  },
  buttonBoi: {
    borderRadius: 40,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  notesContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  h2: {
    marginLeft: '10px',
    color: 'white',
    fontFamily: 'Cairo',
  },
}));

const mapStateToProps = (state) => ({ show: state.addJobModal, user: state.userData });

function AddJobModal({ user, show, dispatch }) {
  const classes = useStyles();
  let [company, setCompany] = useState('');
  let [position, setPosition] = useState('');
  let [contact, setContact] = useState('');
  let [email, setEmail] = useState('');
  let [notes, setNotes] = useState('');
  let [description, setDescription] = useState('');

  const addJob = () => {
    const jobData = {};

    jobData.company = company;
    jobData.completed = false;
    jobData.contactEmail = email;
    jobData.contactName = contact;
    jobData.notes = notes;
    jobData.description = description;
    jobData.position = position;
    jobData.progressArray = [];

    axios.post('/db/dashboard/job', {
      userId: user._id,
      jobData,
    })
      .then(() => {
        axios.get('/db/login', {
          params: {
            userId: user._id,
          },
        })
          .then((results) => {
            dispatch(userToState(results.data));
          })
          .catch((err) => {
            throw new Error(err);
          });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <Modal
      className={classes.bigContainer}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={show}
    >
      <div className={classes.container}>
        <Typography>
          <h2 className={classes.h2}>Add a New Job</h2>
        </Typography>
        <div className={classes.notesContainer}>
          <div>
            <TextField
              variant="filled"
              required
              id="company"
              label="Company"
              fullWidth
              name="company"
              autoComplete="company"
              className={classes.next}
              onChange={(event) => { setCompany(company = event.target.value); }}
            />
            <TextField
              variant="filled"
              required
              id="position"
              label="Position"
              fullWidth
              name="position"
              autoComplete="position"
              className={classes.next}
              onChange={(event) => { setPosition(position = event.target.value); }}
            />
            {/* <input
              onChange={(event) => { setCompany(company = event.target.value); }}
              type="text"
              className={classes.next}
            /> */}
          </div>
          {/* <div>
            <Typography>
            </Typography>

            <input
              onChange={(event) => { setPosition(position = event.target.value); }}
              type="text"
              className={classes.next}
            />
          </div> */}
          <div>
            {/* <Typography>
            </Typography> */}
            <TextField
              variant="filled"
              required
              id="contact"
              label="Contact"
              fullWidth
              name="contact"
              autoComplete="contact"
              className={classes.next}
              onChange={(event) => { setContact(contact = event.target.value); }}
            />
            <TextField
              variant="filled"
              required
              id="email"
              label="Contact-Email"
              name="email"
              autoComplete="contact-email"
              className={classes.next}
              onChange={(event) => { setEmail(email = event.target.value); }}
            />
            {/* <input
              onChange={(event) => { setContact(contact = event.target.value); }}
              type="text"
              className={classes.next}
            /> */}
          </div>
          {/* <div>
            <Typography>
            </Typography>

            <input
              onChange={(event) => { setEmail(email = event.target.value); }}
              type="text"
              className={classes.next}
            />
          </div> */}
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.notesContainer}>
            {/* <Typography>
            </Typography> */}
            <TextField
              variant="filled"
              id="standard-textarea"
              label="Job Notes"
              placeholder="Enter Notes"
              multiline
              rows="6"
              className={classes.next}
              margin="normal"
              onChange={(event) => { setNotes(notes = event.target.value); }}
            />
            {/* <textarea
              onChange={(event) => { setNotes(notes = event.target.value); }}
              className={classes.notes}
            /> */}
          </div>
          <div className={classes.notesContainer}>
            {/* <Typography>
            </Typography> */}
            <TextField
              variant="filled"
              id="standard-textarea"
              label="Job Description"
              placeholder="Enter Notes"
              multiline
              rows="6"
              className={classes.next}
              margin="normal"
              onChange={(event) => { setDescription(description = event.target.value); }}
            />
            {/* <textarea
              onChange={(event) => { setNotes(notes = event.target.value); }}
              className={classes.notes}
            /> */}
          </div>
          <Box className={classes.buttons} flexDirection="column" display="flex" alignItems="flex-end">
            <Fab onClick={() => dispatch(addJobModalAction())} className={classes.buttonBoi}>
              <AddCircleIcon className={classes.doNot} />
            </Fab>
            <Fab
              onClick={() => { addJob(); dispatch(addJobModalAction()); }}
              className={classes.fabStuff}
            >
              <CheckCircleIcon className={classes.do} />
            </Fab>
          </Box>
        </div>
      </div>
    </Modal>
  );
}

export default connect(mapStateToProps)(AddJobModal);
