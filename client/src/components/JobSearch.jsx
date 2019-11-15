import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import JobComponent from './JobComponent.jsx';

const useStyles = makeStyles({
  root: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper container className={classes.root} mx={100}>
      <JobComponent />
      <JobComponent />
      <JobComponent />
      <JobComponent />
      <JobComponent />
      <JobComponent />
    </Paper>
  );
}
