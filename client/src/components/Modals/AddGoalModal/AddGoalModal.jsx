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
import { addGoalAction } from '../../../redux/actions/actions.js';

const useStyles = makeStyles(({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 25,
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: '8px',
    // fontFamily: 'Arial',
    fontSize: '18px',
    background: '#F2F2F2',
    backgroundImage: 'url("https://selious.s3.amazonaws.com/selousSplice.PNG")',
    border: 2,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 20%',
    borderColor: '#9F6CB7',
    borderStyle: 'solid',
    margin: '20% auto',
    // fontFamily: "'Michroma', sans-serif !important",
  },
  root: {
    padding: 10,
    radius: 'auto',
    width: '549px',
    height: '400px',
    borderRadius: '8px',
    // fontFamily: 'Arial',
    fontSize: '18px',
    background: '#F2F2F2',
    border: 2,
    borderColor: '#9F6CB7',
    borderStyle: 'solid',
    // fontFamily: "'Michroma', sans-serif !important",
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
    // padding: 10,
    background: '#FFFFFF',
    width: '300px',
    borderWidth: 1,
    marginRight: 10,
    marginBottom: 20,
    borderColor: '#9f6cb7',
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
    // float: 'right',
    // alignSelf: 'flex-end',
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
  rightContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    // flexDirection: 'row',
  },
  notesContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const mapStateToProps = (state) => ({ show: state.addGoalModal });

function AddGoalModal({ show, dispatch }) {
  const classes = useStyles();
  let [objective, setObjective] = useState('');
  let [target, setTarget] = useState(0);

  const addGoal = () => {
    let goal = {};

    goal.goalId = 2;
    goal.goalName = objective;
    goal.Target = parseInt(target, 0);
    goal.goalProgress = 0;

    axios.post('/db/goals', {
      userId: '5dd029fe3b8f9e2e8c21d3aa',
      goalData: goal,
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
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={show}
    >
      <div className={classes.container}>
        <div className={classes.notesContainer}>
          <h2 textAlign="center">Set a New Goal</h2>
          <div>
            <Typography>
              Objective
            </Typography>
            <TextField
              variant="filled"
              required
              fullWidth
              id="username"
              label="ex: 'Conduct 3 phone screens/week'"
              name="username"
              autoComplete="username"
              className={classes.next}
              onChange={(event) => { setObjective(objective = event.target.value); }}
            />
            {/* <input
              onChange={(event) => { setObjective(objective = event.target.value); }}
              type="text"
              className={classes.next}
              placeholder="ex: 'Conduct 3 phone screens/week'"
            /> */}
          </div>
          <div>
            <Typography>
              Goal Target
            </Typography>
            <TextField
              variant="filled"
              required
              fullWidth
              id="username"
              label="How many?"
              name="username"
              autoComplete="username"
              className={classes.next}
              onChange={(event) => { setTarget(target = event.target.value); }}
            />
            {/* <input
              onChange={(event) => { setTarget(target = event.target.value); }}
              type="text"
              className={classes.next}
              placeholder="How many?"
            /> */}
          </div>
          <Box className={classes.buttons}>
            <Fab onClick={() => dispatch(addGoalAction())} className={classes.buttonBoi}>
              <AddCircleIcon className={classes.doNot} />
            </Fab>
            <Fab
              onClick={() => { addGoal(); dispatch(addGoalAction()); }}
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

export default connect(mapStateToProps)(AddGoalModal);
