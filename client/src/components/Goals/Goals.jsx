import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Button, Card, CardActions, CardContent, CssBaseline, Typography, makeStyles, Container,
} from '@material-ui/core';
import {
  addGoalAction, incrementGoalAction, decrementGoalAction, getGoalsAction,
} from '../../redux/actions/actions.js';
import AddGoalModal from '../Modals/AddGoalModal/AddGoalModal.jsx';

const mapStateToProps = (state) => ({
  currentGoals: state.userData.userGoals,
});

const useStyles = makeStyles((theme) => ({
  goalsTrackerContainer: {
    flex: 2,
  },
  titleCard: {
    backgroundColor: '#9F6CB7',
  },
  titleCardContent: {
    textAlign: 'center',
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
  },
  button2: {
    fontSize: '14px',
  },
  goalsContainer: {
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: '#9F6CB7',
    margin: '20px',
  },
  buttonContainer: {
    padding: '0',
  },
}));

const Goals = ({ currentGoals, dispatch }) => {
  useEffect(() => {
    dispatch(getGoalsAction());
  }, []);

  const classes = useStyles();

  return (currentGoals.length > 0 && (
    <>
      <AddGoalModal />
      <div className={classes.goalsTrackerContainer}>
        <CssBaseline />
        <main>
          <Container className={classes.goalsContainer} maxWidth="xs">
            <Card className={classes.titleCard}>
              <CardContent className={classes.titleCardContent}>
                <Typography variant="h3" component="h3">
                  Goals
                </Typography>
              </CardContent>
            </Card>
            <hr style={{ margin: '20px 10px' }} />
            {currentGoals.map((currentGoal, index) => (
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
                    onClick={() => dispatch(decrementGoalAction(index))}
                  >
                    -
                  </Button>
                  <Typography>
                    {currentGoal.goalName}
                  </Typography>
                  <Button
                    size="small"
                    className={classes.button2}
                    onClick={() => dispatch(incrementGoalAction(index))}
                  >
                    +
                  </Button>
                </CardActions>
              </Card>
            ))}
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
        </main>
      </div>
    </>
  ));
};

export default connect(mapStateToProps)(Goals);
