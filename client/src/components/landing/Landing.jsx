import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import SearchBar from 'material-ui-search-bar';
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
    marginTop: '500px',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  topText: {
    marginTop: '17%',
    marginBottom: '0%',
    paddingLeft: '20%',
    fontSize: '72px',
  },
  midText: {
    marginTop: '0%',
    marginBottom: '0%',
    paddingLeft: '60%',
    fontSize: '72px',
  },
  lowText: {
    marginTop: '0%',
    paddingLeft: '39%',
    fontSize: '72px',
  },
  avatar: {
    float: 'left',
    marginLeft: '17%',
    maxWidth: '200px',
    maxHeight: '200px',
  },
  wrapper: {
    maxWidth: '750px',
    maxHeight: '450px',
    marginLeft: '20%',
  },
  icon: {
    position: 'absolute',
    top: '32%',
    left: '55%',
    borderRadius: '30%',
    transform: 'scale(1.25)',
    zIndex: -2,
  },
  iconOverlay: {
    position: 'absolute',
    top: '32%',
    left: '55%',
    borderRadius: '30%',
    transform: 'scale(1.25)',
    zIndex: -1,
    opacity: 0.15,
  },
  search: {
    maxWidth: '400px',
    marginLeft: '17%',
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
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
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
    // (SEE JOB SEARCH COMPONENT), STATE SET TO ''
  };

  return (
    <>
      <AboutModal />
      <img
        className={classes.avatar}
        src="https://selious.s3.amazonaws.com/Selous.png"
        alt="Selous Logo"
      />
      <Container maxWidth="sm" className={classes.wrapper}>
        <Typography align="left" color="textPrimary" className={classes.topText} gutterBottom>
          Where having
        </Typography>
        <Typography align="left" color="textPrimary" className={classes.midText} gutterBottom>
          zeal
        </Typography>
        <Typography align="left" color="textPrimary" className={classes.lowText} gutterBottom>
          pays off
        </Typography>
      </Container>
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
        onRequestSearch={() => apiGetRequest()}
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
