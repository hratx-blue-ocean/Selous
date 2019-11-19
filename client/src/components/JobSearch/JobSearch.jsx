import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import {
  Paper,
  Grid,
} from '@material-ui/core';
import JobComponent from './JobComponent.jsx';
import Goals from '../Goals/Goals.jsx';
import { setApiSearchData } from '../../redux/actions/actions.js';
import Headerbar from '../headerbar/Headerbar.jsx';

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

const JobSearch = ({ dispatch, jobSearchData }) => {
  const classes = useStyles();

  useEffect(() => {
    if (jobSearchData.length === 0) {
      axios.get('https://jobs.github.com/positions.json?description=node')
        .then((results) => {
          dispatch(setApiSearchData(results));
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (jobSearchData.length === 0 && true === false) {
      const locationTemp = 'chicago';
      const descriptionTemp = 'dev';

      axios.get(`https://jobs.github.com/positions.json?description=${descriptionTemp}&location=${locationTemp}`)
      // https://jobs.github.com/positions.json?description=python&location=new+york
        .then((results) => {
          dispatch(setApiSearchData(results));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <>
      <Headerbar />
      <div className={classes.jobSearchGoalsContainer}>
        <div className={classes.adSpace} />
        <Paper container className={classes.root}>
          <Grid container justify="center" alignItems="center">
            <SearchBar
              onChange={() => console.log('onChange')}
              onRequestSearch={() => console.log('onRequestSearch')}
              style={{
                margin: '0 auto',
                maxWidth: 800,
              }}
            />
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
    </>
  );
};

const mapStatesToProps = (state) => ({ jobSearchData: state.apiData });

export default connect(mapStatesToProps)(JobSearch);
