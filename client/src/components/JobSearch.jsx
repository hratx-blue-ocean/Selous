import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
} from '@material-ui/core';
import JobComponent from './JobComponent.jsx';
import { setApiDataAction } from '../redux/actions/actions.js';

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

const JobSearch = ({ dispatch, jobSearchData }) => {
  const classes = useStyles();
  useEffect(() => {
    //console.log(jobSearchData.length)
    if (jobSearchData.length === 0) {
      axios.get('https://jobs.github.com/positions.json?description=node')
        .then((results) => {
          console.log('axios ran');
          console.log(results);
          dispatch(setApiDataAction(results));
        })
        .catch((err)=>{
          console.log(err);
        });
    }
  });

  console.log(jobSearchData);

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
};

const mapStatesToProps = (state) => ({ jobSearchData: state.apiData });

export default connect(mapStatesToProps)(JobSearch);
