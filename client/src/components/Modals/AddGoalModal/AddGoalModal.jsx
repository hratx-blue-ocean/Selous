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
import { addGoalAction, userToState } from '../../../redux/actions/actions.js';

const useStyles = makeStyles(({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    width: '390px',
    height: '170px',
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

const mapStateToProps = (state) => ({ show: state.addGoalModal, user: state.userData });

function AddGoalModal({ user, show, dispatch }) {
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
      userId: user.userId,
      goalData: goal,
    })
      .then((res) => {
        console.log(res);
        console.log(user);
        dispatch(userToState(goal));
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
          <div>
            <Typography>
              Objective
            </Typography>
            <input
              onChange={(event) => { setObjective(objective = event.target.value); }}
              type="text"
              className={classes.next}
              placeholder="ex: 'Conduct 3 phone screens/week'"
            />
          </div>
          <div>
            <Typography>
              Goal Target
            </Typography>
            <input
              onChange={(event) => { setTarget(target = event.target.value); }}
              type="text"
              className={classes.next}
              placeholder="How many?"
            />
          </div>
        </div>
        <Box className={classes.buttons} flexDirection="column" display="flex" alignItems="flex-end">
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
    </Modal>
  );
}

export default connect(mapStateToProps)(AddGoalModal);
