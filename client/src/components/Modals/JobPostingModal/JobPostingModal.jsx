/* eslint-disable react/no-danger */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Fab,
  Box,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlined';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import { showJobAction } from '../../../redux/actions/actions.js';

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
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
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
    borderBottom: 0,
    borderStyle: 'solid',
    borderColor: 'black',
    marginBottom: 10,
    overflow: 'scroll',
    fontSize: 10,
  },
  apply: {
    height: '30px',
    width: '80px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    color: 'white',
    fontSize: 18,
  },
  title: {
    marginLeft: 20,
    fontSize: 35,
  },
  titlesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    height: 50,
  },
  titleSec: {
    fontSize: 25,
    marginRight: 10,
  },
  titleTer: {
    fontSize: 20,
  },
  descriptionText: {
    fontSize: 5,
  },
}));

const mapStateToProps = (state) => ({ show: state.jobPostingModal });

function JobPostingModal({ oneJob, show, dispatch }) {
  const classes = useStyles();
  // console.log(oneJob);

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
            <h1 className={classes.title}>
              {oneJob.title}
            </h1>
            <Box className={classes.buttons}>
              <Fab className={classes.buttonBoi}>
                <AddCircleIcon
                  className={classes.doNot}
                  onClick={() => dispatch(showJobAction())}
                />
              </Fab>
            </Box>
          </div>
          <div className={classes.titlesContainer}>
            <h3 className={classes.titleSec}>
              {oneJob.company}
            </h3>
            <h5 className={classes.titleTer}>
              {oneJob.location}
            </h5>
          </div>
          <div
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: oneJob.description }}
          />
          <button type="button" className={classes.apply}>APpLy</button>
        </div>
      </Modal>
    </div>
  );
}

export default connect(mapStateToProps)(JobPostingModal);
