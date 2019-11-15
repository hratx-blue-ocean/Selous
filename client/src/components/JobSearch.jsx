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
  },
});

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper container className={classes.root} mx={100}>
      <Grid>
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
