import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {
  Fab,
  Box,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import { whatsNextAction } from '../../redux/actions/actions.js';

const useStyles = makeStyles(({
  root: {
    padding: 10,
    width: '549px',
    height: '500px',
    borderRadius: '8px',
    fontSize: '18px',
    background: '#F2F2F2',
    border: 2,
    borderColor: '#9F6CB7',
    borderStyle: 'solid',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 30,
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: '8px',
    fontSize: '18px',
    background: '#F2F2F2',
    border: 2,
    borderColor: '#9F6CB7',
    borderStyle: 'solid',
    margin: '7% auto 50px auto',
    backgroundImage: 'url("https://selious.s3.amazonaws.com/selousSplice.PNG")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 15%',
  },
  notes: {
    borderRadius: '8px',
    padding: 10,
    background: '#FFFFFF',
    width: '25%',
    height: '250px',
    borderWidth: 1,
    borderColor: 'purple',
    borderStyle: 'solid',
    boxShadow: 5,
  },
  next: {
    borderRadius: '6px',
    background: '#FFFFFF',
    width: '400px',
    marginRight: 10,
    marginBottom: 20,
    marginTop: '10px',
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
    textAlign: 'center',
    marginBottom: 10,
  },
  fabStuff: {
    size: 'small',
    marginTop: 5,
  },
  buttonBoi: {
    borderRadius: 40,
  },
  h2: {
    marginTop: '-10px',
    color: 'white',
  },
  notesContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const mapStateToProps = (state) => ({ show: state.whatsNextModal });

function WhatsNext({ show, dispatch }) {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={show}
    >
      <div className={classes.container}>
        <div className={classes.notesContainer}>
          <h2 className={classes.h2}>Tell us about the next step</h2>
          <div>
            <TextField
              variant="filled"
              required
              fullWidth
              id="next"
              label="What's your next step?"
              name="next"
              autoComplete="What's your next step?"
              className={classes.next}
            />
          </div>
          <div>
            <TextField
              variant="filled"
              id="next-step-notes"
              label="Notes and details"
              placeholder="Details"
              multiline
              rows="6"
              className={classes.next}
              margin="normal"
            />
          </div>
          <Box className={classes.buttons}>
            <Fab onClick={() => dispatch(whatsNextAction())} className={classes.buttonBoi}>
              <AddCircleIcon className={classes.doNot} />
            </Fab>
            <Fab className={classes.fabStuff}>
              <CheckCircleIcon className={classes.do} />
            </Fab>
          </Box>
        </div>
      </div>
    </Modal>
  );
}

export default connect(mapStateToProps)(WhatsNext);
