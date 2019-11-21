import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import SearchBar from 'material-ui-search-bar';
// import { flexbox } from '@material-ui/system';
import AboutModal from '../Modals/AboutModal/AboutModal.jsx';
import {
  setSearchInput,
  showAboutAction,
  setApiSearchData,
  setSearchLocationInput,
} from '../../redux/actions/actions.js';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©&nbsp;
      <Link color="inherit" href="/">
        Selous
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      fontFamily: 'Cairo',
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
    fontSize: '72px',
    'text-align': 'right',
    fontWeight: 'bolder',
  },
  avatar: {
    marginLeft: '10%',
    maxWidth: '100px',
    maxHeight: '100px',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    display: 'flex',
    'box-sizing': 'border-box',
    'flex-wrap': 'nowrap',
  },
  imageWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    display: 'flex',
    'box-sizing': 'border-box',
    'flex-wrap': 'nowrap',
  },
  icon: {
    'box-sizing': 'border-box',
    position: 'absolute',
    borderRadius: '30%',
    zIndex: -2,
  },
  iconOverlay: {
    'box-sizing': 'border-box',
    borderRadius: '30%',
    zIndex: -1,
    opacity: 0.15,
  },
  search: {
    maxWidth: '400px',
    marginLeft: '17%',
    marginTop: 10,
  },
  about: {
    cursor: 'pointer',
  },
}));

const footers = [
  {
    title: 'Company',
    description: ['About', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

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
        <h1 className={classes.titleText}>
          Where having zeal pays off
        </h1>
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
      </div>
      <SearchBar
        className={classes.search}
        placeholder="Search Jobs..."
        value={searchInput}
        onChange={(newValue) => dispatch(setSearchInput(newValue))}
        onRequestSearch={(keyword) => apiGetRequest(keyword)}
        onCancelSearch={() => dispatch(setSearchInput(''))}
      />
      <SearchBar
        className={classes.search}
        placeholder="Search Locations..."
        value={locationSearchInput}
        onChange={(newValue) => dispatch(setSearchLocationInput(newValue))}
        onRequestSearch={handleRequest}
        onCancelSearch={() => dispatch(setSearchInput(''))}
      />
      {/* Footer */}
      <Container component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => {
                  if (item === 'About') {
                    return (
                      <li key={item}>
                        <Typography
                          className={classes.about}
                          type="button"
                          variant="subtitle1"
                          color="textSecondary"
                          onClick={() => dispatch(showAboutAction())}
                        >
                          {item}
                        </Typography>
                      </li>
                    );
                  }
                  return (
                    <li key={item}>
                      <Link href="/" variant="subtitle1" color="textSecondary">
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </>
  );
};

const mapStatesToProps = (state) => ({
  searchInput: state.searchInput,
  locationSearchInput: state.locationSearchInput,
  apiData: state.apiData,
});

export default connect(mapStatesToProps)(Landing);
