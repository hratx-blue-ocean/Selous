/* eslint-disable react/no-danger */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
/* eslint no-param-reassign: "error" */
import {
  Fab,
  Box,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlined';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import { userToState } from '../../../redux/actions/actions.js';

const useStyles = makeStyles(({
  bigContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    width: '50%',
    height: '90%',
    borderRadius: '8px',
    fontFamily: 'Arial',
    fontSize: '18px',
    background: '#F2F2F2',
    border: 2,
    borderColor: '#9F6CB7',
    borderStyle: 'solid',
    opacity: '100%',
    margin: '20px auto',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50px',
  },
  doNot: {
    color: '#DB5C5C',
    fontSize: 54,
    transform: 'rotate(45deg)',
    stroke: 'black',
    strokeWidth: '.5px',
  },
  buttons: {
    marginRight: 20,
    float: 'right',
    marginBottom: 10,
    marginTop: 20,
  },
  buttonBoi: {
    borderRadius: 40,
  },
  description: {
    height: '550px',
    width: '90%',
    borderTop: 1,
    borderLeft: 0,
    borderRight: 0,
    borderBottom: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    marginBottom: 10,
    overflow: 'scroll',
    fontSize: 10,
  },
  application: {
    height: '80px',
    width: '90%',
    fontSize: 10,
    borderTop: 1,
    borderLeft: 0,
    borderRight: 0,
    borderBottom: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    overflow: 'scroll',
    marginBottom: 5,
  },
  apply: {
    height: '40px',
    width: '150px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    color: 'white',
    fontSize: 15,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  title: {
    marginLeft: 20,
    height: 35,
    width: '85%',
    fontSize: '2vw',
    overflow: 'auto',
  },
  titlesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: 40,
    height: 50,
  },
  titleSec: {
    height: 25,
    marginRight: 10,
    width: '300px',
    display: 'flex',
    alignSelf: 'flex-end',
    overflow: 'auto',
  },
  titleTer: {
    height: 25,
    width: '200px',
    display: 'flex',
    alignSelf: 'flex-end',
    marginRight: '60px',
    justifyContent: 'flex-end',
    overflow: 'auto',
  },
  descriptionText: {
    fontSize: 10,
  },
  logo: {
    margin: 10,
    width: '60px',
    height: '60px',
    background: 'rgb(200, 169, 214)',
  },
  companyImage: {
    width: '60px',
  },
}));

const mapStateToProps = (state) => ({ user: state.userData });

function JobPostingModal({
  user,
  oneJob,
  show,
  setShow,
  dispatch,
}) {
  const classes = useStyles();

  const addJob = () => {
    const jobData = {};

    jobData.company = oneJob.company;
    jobData.completed = false;
    jobData.contactEmail = 'No email address saved';
    jobData.contactName = 'No contact info saved';
    jobData.notes = 'No notes';
    jobData.position = oneJob.title;
    jobData.progressArray = [];
    jobData.notes = oneJob.description;

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
            // console.log(results.data);
            dispatch(userToState(results.data));
          })
          .catch((err) => {
            throw (err);
          });
      })
      .catch((err) => {
        throw (err);
      });
  };

  return (
    <div>
      <Modal
        className={classes.bigContainer}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={show}
      >
        <div className={classes.container}>
          <div className={classes.header}>
            <div className={classes.title}>
              {oneJob.title}
            </div>
            <Box className={classes.buttons}>
              <Fab className={classes.buttonBoi}>
                <AddCircleIcon
                  className={classes.doNot}
                  onClick={() => { setShow(!show); }}
                />
              </Fab>
            </Box>
          </div>
          <div className={classes.titlesContainer}>
            <div className={classes.titleSec}>
              {oneJob.company}
            </div>
            <div className={classes.titleTer}>
              {oneJob.location}
            </div>
          </div>
          <div
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: oneJob.description }}
          />
          <div
            className={classes.application}
            dangerouslySetInnerHTML={{ __html: oneJob.how_to_apply }}
          />
          <button
            onClick={() => { addJob(); setShow(!show); }}
            type="button"
            className={classes.apply}
          >
            Add to Dashboard
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default connect(mapStateToProps)(JobPostingModal);
