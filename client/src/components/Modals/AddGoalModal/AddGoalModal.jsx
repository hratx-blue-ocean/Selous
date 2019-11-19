import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';

import {
  Typography,
  Fab,
  Box,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { addGoalAction } from '../../../redux/actions/actions.js';

const useStyles = makeStyles(({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    width: '390px',
    height: '160px',
    borderRadius: '8px',
    fontFamily: 'Arial',
    fontSize: '18px',
    background: '#F2F2F2',
    border: 2,
    borderColor: '#9F6CB7',
    borderStyle: 'solid',
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
    marginRight: 10,
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

const mapStateToProps = (state) => ({ show: state.addGoalModal });

function addGoalModal({ show, dispatch }) {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={show}
    >
      <div className={classes.container}>
        <div className={classes.notesContainer}>
          <div>
            <Typography>
              Objective
            </Typography>
            <input type="text" className={classes.next} />
          </div>
          <div>
            <Typography>
              Frequency
            </Typography>
            <input type="text" className={classes.next} />
          </div>
        </div>
        <Box className={classes.buttons} flexDirection="column" display="flex" alignItems="flex-end">
          <Fab onClick={() => dispatch(addGoalAction())} className={classes.buttonBoi}>
            <AddCircleIcon className={classes.doNot} />
          </Fab>
          <Fab className={classes.fabStuff}>
            <CheckCircleIcon className={classes.do} />
          </Fab>
        </Box>
      </div>
    </Modal>
  );
}

export default connect(mapStateToProps)(addGoalModal);
