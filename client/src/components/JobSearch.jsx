import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import JobComponent from './JobComponent.jsx';

const useStyles = makeStyles({
  root: {
    padding: 10,
  },
});

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper container className={classes.root}>
      <JobComponent />
      <JobComponent />
      <JobComponent />
      <JobComponent />
      <JobComponent />
      <JobComponent />
    </Paper>
  );
}
