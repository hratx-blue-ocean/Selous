import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import axios from 'axios';

/* eslint-disable prefer-const */
import {
  Typography,
  Fab,
  Box,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { addJobModalAction } from '../../../redux/actions/actions.js';

const useStyles = makeStyles(({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    width: '790px',
    height: '300px',
    borderRadius: '8px',
    fontFamily: 'Arial',
    fontSize: '18px',
    background: '#F2F2F2',
    border: 2,
    borderColor: '#9F6CB7',
    borderStyle: 'solid',
    position: 'static',
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
    padding: 10,
    background: '#FFFFFF',
    width: '300px',
    borderWidth: 1,
    marginRight: 25,
    marginBottom: 20,
    borderColor: 'purple',
    borderStyle: 'solid',
    boxShadow: 5,
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
}));

const mapStateToProps = (state) => ({ show: state.addJobModal });

function AddJobModal({ show, dispatch }) {
  const classes = useStyles();
  let [company, setCompany] = useState('');
  let [position, setPosition] = useState('');
  let [contact, setContact] = useState('');
  let [email, setEmail] = useState('');
  let [notes, setNotes] = useState('');

  // const postJob = () => {
  //   axios.post()
  // }

  const addJob = () => {
    const jobData = {};

    jobData.company = company;
    jobData.completed = false;
    jobData.contactEmail = email;
    jobData.contactName = contact;
    jobData.notes = notes;
    jobData.position = position;
    jobData.progressArray = [];

    axios.post('/db/dashboard/job', {
      userId: '5dd029fe3b8f9e2e8c21d3aa',
      jobData,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
        <div className={classes.notesContainer}>
          <div>
            <Typography>
              Company
            </Typography>
            <input
              onChange={(event) => { setCompany(company = event.target.value); }}
              type="text"
              className={classes.next}
            />
          </div>
          <div>
            <Typography>
              Roll / Position
            </Typography>
            <input
              onChange={(event) => { setPosition(position = event.target.value); }}
              type="text"
              className={classes.next}
            />
          </div>
          <div>
            <Typography>
              Contact
            </Typography>
            <input
              onChange={(event) => { setContact(contact = event.target.value); }}
              type="text"
              className={classes.next}
            />
          </div>
          <div>
            <Typography>
              Contact E-mail
            </Typography>
            <input
              onChange={(event) => { setEmail(email = event.target.value); }}
              type="text"
              className={classes.next}
            />
          </div>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.notesContainer}>
            <Typography>
              Job Details / Notes
            </Typography>
            <textarea
              onChange={(event) => { setNotes(notes = event.target.value); }}
              className={classes.notes}
            />
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
