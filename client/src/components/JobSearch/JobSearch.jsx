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
// import Goals from '../Goals/Goals.jsx';
import { setSearchInput, setApiSearchData, setSearchLocationInput } from '../../redux/actions/actions.js';
import Headerbar from '../headerbar/Headerbar.jsx';
import Footer from '../footer/Footer.jsx';

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
    height: '590px',
    overflow: 'scroll',
  },
  search: {
    width: '80%',
    margin: '0 auto',
    maxWidth: 800,
    marginBottom: 10,
    marginTop: 10,
  },
});

const JobSearch = ({
  jobs,
  searchInput,
  dispatch,
  locationSearchInput,
  user,
}) => {
  const classes = useStyles();

  const apiGetRequest = () => {
    axios.get('/apiRequest', {
      params: {
        description: searchInput,
        location: locationSearchInput,
      },
    })
      .then((results) => {
        dispatch(setApiSearchData(results.data));
      })
      .catch((err) => {
        throw err;
      });
    dispatch(setSearchInput(''));
    dispatch(setSearchLocationInput(''));
  };

  return (
    <>
      <Headerbar />
      <div className={classes.jobSearchGoalsContainer}>
        <div className={classes.adSpace} />
        <Paper container item className={classes.root}>
          <SearchBar
            className={classes.search}
            placeholder="Search Jobs..."
            value={searchInput}
            onChange={(newValue) => dispatch(setSearchInput(newValue))}
            onRequestSearch={() => apiGetRequest()}
            onCancelSearch={() => dispatch(setSearchInput(''))}
          />
          <SearchBar
            className={classes.search}
            placeholder="Search Locations..."
            value={locationSearchInput}
            onChange={(newValue) => dispatch(setSearchLocationInput(newValue))}
            onRequestSearch={() => apiGetRequest()}
            onCancelSearch={() => dispatch(setSearchInput(''))}
          />
          <Grid container justify="center" alignItems="center" className={classes.results}>
            {
              jobs.map((job) => <JobComponent job={job} key={job.id} />)
            }
          </Grid>
        </Paper>
<<<<<<< HEAD
        {/* <Goals /> */}
=======
        {user.userName ? <Goals /> : null}
>>>>>>> dev
      </div>
      <Footer />
    </>
  );
};

const mapStatesToProps = (state) => ({
  searchInput: state.searchInput,
  locationSearchInput: state.locationSearchInput,
  jobs: state.apiData,
  user: state.userData,
});

export default connect(mapStatesToProps)(JobSearch);
