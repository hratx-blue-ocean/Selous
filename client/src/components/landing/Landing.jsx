import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import SearchBar from 'material-ui-search-bar';
// import { flexbox } from '@material-ui/system';
import Footer from '../footer/Footer.jsx';
import AboutModal from '../Modals/AboutModal/AboutModal.jsx';

import {
  setSearchInput,
  setApiSearchData,
  setSearchLocationInput,
} from '../../redux/actions/actions.js';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      fontFamily: 'Cairo',
      color: 'black',
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  footer: {
    borderTop: '1px solid darkgrey',
    maxWidth: 1240,
    marginTop: '100px',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  titleText: {
    flex: 1,
    display: 'flex',
    'box-sizing': 'border-box',
    justifyContent: 'flex-end',
    fontSize: '36px',
    'text-align': 'right',
    fontWeight: 'bolder',
    padding: '1px',
    margin: '1px',
  },
  avatar: {
    marginLeft: '10%',
    maxWidth: '100px',
    maxHeight: '100px',
  },
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    margin: '-15px auto 0 auto',
  },
  imageWrapper: {
    flex: 1,
    margin: '0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    'box-sizing': 'border-box',
    'flex-wrap': 'nowrap',
  },
  icon: {
    'box-sizing': 'border-box',
    position: 'absolute',
    borderRadius: '20%',
    zIndex: -2,
  },
  iconOverlay: {
    'box-sizing': 'border-box',
    borderRadius: '20%',
    zIndex: -1,
    opacity: 0.15,
  },
  search: {
    maxWidth: '400px',
    margin: '10px',
    border: '1px solid purple',
    currentColor: 'black',
  },
  about: {
    cursor: 'pointer',
  },
  searchContainer: {
    margin: '10px auto',
    display: 'flex',
    flexDirection: 'row',
  },
  searchRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#9f6cb7',
  },
}));

const Landing = ({ searchInput, dispatch, locationSearchInput }) => {
  const classes = useStyles();
  const history = useHistory();
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
  };

  const handleRequest = () => {
    apiGetRequest();
    // return <Redirect to="/jobs" />;
    history.push('/jobs');
  };

  return (
    <>
      <AboutModal />
      <div className={classes.wrapper}>
        {/* <img
          className={classes.avatar}
          src="https://selious.s3.amazonaws.com/Selous.png"
          alt="Selous Logo"
        /> */}
        <div>
          <h1 className={classes.titleText}>
            Where having zeal
          </h1>
        </div>
        <div className={classes.imageWrapper}>
          <img
            className={classes.iconOverlay}
            src="https://selious.s3.amazonaws.com/poverlay.jpg"
            alt="icon Logo Overlay"
          />
          <img
            className={classes.icon}
            src="https://selious.s3.amazonaws.com/ProfessionalLearningCommunity.jpg"
            alt="icon Logo"
          />
        </div>
        <div>
          <h1 className={classes.titleText}>
            pays off
          </h1>
        </div>
        <div className={classes.searchRow}>
          <div className={classes.searchContainer}>
            <SearchBar
              className={classes.search}
              placeholder="Search Jobs..."
              value={searchInput}
              onChange={(newValue) => dispatch(setSearchInput(newValue))}
              onRequestSearch={handleRequest}
              onCancelSearch={() => dispatch(setSearchInput(''))}
            />
            <SearchBar
              className={classes.search}
              placeholder="Search Locations..."
              value={locationSearchInput}
              onChange={(newValue) => dispatch(setSearchLocationInput(newValue))}
              onRequestSearch={handleRequest}
              onCancelSearch={() => dispatch(setSearchLocationInput(''))}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStatesToProps = (state) => ({
  searchInput: state.searchInput,
  locationSearchInput: state.locationSearchInput,
  apiData: state.apiData,
});

export default connect(mapStatesToProps)(Landing);
