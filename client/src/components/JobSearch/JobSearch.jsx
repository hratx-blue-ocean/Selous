import React from 'react';
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
import { setSearchInput, setApiSearchData } from '../../redux/actions/actions.js';
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
  search: {
    width: '80%',
    margin: '0 auto',
    maxWidth: 800,
    marginBottom: 20,
    marginTop: 20,
  },
});

const JobSearch = ({ jobs, searchInput, dispatch }) => {
  const classes = useStyles();

  const apiGetRequest = () => {
    axios.get('/apiRequest', {
      params: {
        description: searchInput,
      },
    })
      .then((results) => {
        dispatch(setApiSearchData(results.data));
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <Headerbar />
      <div className={classes.jobSearchGoalsContainer}>
        <div className={classes.adSpace} />
        <Paper container className={classes.root}>
          <SearchBar
            className={classes.search}
            placeholder="Search Jobs..."
            value={searchInput}
            onChange={(newValue) => dispatch(setSearchInput(newValue))}
            onRequestSearch={(keyword) => apiGetRequest(keyword)}
            onCancelSearch={() => dispatch(setSearchInput(''))}
          />
          <Grid container justify="center" alignItems="center">
            {
              jobs.map((job) => <JobComponent key={job.id} job={job} />)
            }
          </Grid>
        </Paper>
        <Goals />
      </div>
    </>
  );
};

const mapStatesToProps = (state) => ({
  searchInput: state.searchInput,
  jobs: state.apiData,
});

export default connect(mapStatesToProps)(JobSearch);
