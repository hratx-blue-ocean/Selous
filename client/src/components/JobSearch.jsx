import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import JobComponent from './JobComponent.jsx'
import { red, pink } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    padding: 10,
  },
});

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <JobComponent />
      <JobComponent />
      <JobComponent />
      <JobComponent />
      <JobComponent />
      <JobComponent />
    </Paper>
  );
}
