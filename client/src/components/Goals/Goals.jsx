import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Button, Card, CardActions, CardContent, CssBaseline, Typography, makeStyles, Container,
} from '@material-ui/core';
import {
  addGoalAction, getGoalsAction, userToState,
  // incrementGoalAction, decrementGoalAction,
} from '../../redux/actions/actions.js';
import AddGoalModal from '../Modals/AddGoalModal/AddGoalModal.jsx';

const mapStateToProps = (state) => ({
  currentGoals: state.userData.userGoals,
  userId: state.userData._id,
});

const useStyles = makeStyles((theme) => ({
  goalsTrackerContainer: {
    flex: 2,
    height: '540px',
  },
  titleCard: {
    backgroundColor: '#9F6CB7',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  titleCardContent: {
    textAlign: 'center',
    color: 'white',
  },
  cardFooter: {
    justifyContent: 'space-between',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  cardContent: {
    textAlign: 'center',
    padding: '12px 0 0 0',
  },
  button1: {
    justifySelf: 'center',
    backgroundColor: '#9F6CB7',
    minWidth: '100%',
    padding: '0',
    borderRadius: '15px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  button2: {
    fontSize: '14px',
  },
  goalsContainer: {
    justifyContent: 'center',
    maxHeight: '398px',
    overflowY: 'auto',
  },
  titleContainer: {
    backgroundColor: '#9F6CB7',
    margin: '20px',
  },
  buttonContainer: {
    padding: '0',
  },
  cairo: {
    fontFamily: 'Cairo',
  },
}));

const Goals = ({ currentGoals, dispatch, userId }) => {
  useEffect(() => {
    dispatch(getGoalsAction());
  }, []);

  const changeGoalProgress = (goalId, increment) => {
    axios.post('/db/goals/progress', {
      userId,
      goalId,
      increment,
    })
      .then(() => {
        axios.get('/db/login', {
          params: {
            userId,
          },
        })
          .then((results) => {
            dispatch(userToState(results.data));
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();

  return (
    <>
      <AddGoalModal />
      <Container className={classes.goalsTrackerContainer} maxWidth="xs">
        <CssBaseline />
        <Card className={classes.titleCard}>
          <CardContent className={classes.titleCardContent}>
            <Typography variant="h3" component="h3" className={classes.cairo}>
              Goals
            </Typography>
          </CardContent>
        </Card>
        <main>
          <Container className={classes.goalsContainer} maxWidth="xs">
            <hr style={{ margin: '20px 10px' }} />
            {
              currentGoals.length <= 0 ? null
                : currentGoals.map((currentGoal, index) => (
                  <Card key={currentGoal.goalName} className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" component="h2">
                        {`${currentGoal.goalProgress} / `}
                        {currentGoal.goalTarget}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardFooter}>
                      <Button
                        size="small"
                        className={classes.button2}
                        onClick={() => {
                          // dispatch(decrementGoalAction(index))
                          changeGoalProgress(index, -1);
                        }}
                      >
                        -
                      </Button>
                      <Typography>
                        {currentGoal.goalName}
                      </Typography>
                      <Button
                        size="small"
                        className={classes.button2}
                        onClick={() => {
                          // dispatch(decrementGoalAction(index))
                          changeGoalProgress(index, 1);
                        }}
                      >
                            +
                      </Button>
                    </CardActions>
                  </Card>
                ))
            }
          </Container>
        </main>
        <CardActions className={classes.buttonContainer}>
          <Button
            variant="contained"
            size="large"
            className={classes.button1}
            onClick={() => dispatch(addGoalAction())}
          >
            +
          </Button>
        </CardActions>
      </Container>
    </>
  );
};

export default connect(mapStateToProps)(Goals);
