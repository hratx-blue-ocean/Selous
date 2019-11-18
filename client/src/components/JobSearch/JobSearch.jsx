import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
} from '@material-ui/core';
import JobComponent from './JobComponent.jsx';
import Goals from '../Goals/Goals.jsx';

const useStyles = makeStyles({
  jobSearchGoalsContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  adSpace: {
    flex: 2,
  },
  root: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderStyle: 'solid',
    alignContent: 'center',
    flex: 4,
    flexDirection: 'row',
  },
});

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div className={classes.jobSearchGoalsContainer}>
      <div className={classes.adSpace} />
      <Paper container className={classes.root}>
        <Grid container justify="center" alignItems="center">
          <JobComponent />
          <JobComponent />
          <JobComponent />
          <JobComponent />
          <JobComponent />
          <JobComponent />
        </Grid>
      </Paper>
      <Goals />
    </div>
  );
}
