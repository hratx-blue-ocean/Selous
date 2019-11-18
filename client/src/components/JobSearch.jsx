import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
} from '@material-ui/core';
import JobComponent from './JobComponent.jsx';

const useStyles = makeStyles({
  root: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderStyle: 'solid',
    alignContent: 'center',
    width: '80%',

  },
});

export default function PaperSheet() {
  const classes = useStyles();

  return (
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
  );
}
