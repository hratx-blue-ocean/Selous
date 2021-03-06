import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginAction, userToState } from '../../redux/actions/actions.js';
import Headerbar from '../headerbar/Headerbar.jsx';
import Footer from '../footer/Footer.jsx';

const theme = createMuiTheme({
  formLabelRoot: { // must provide all of formLabelRoot && '&$formLabelFocused' && formLabelFocused
    '&$formLabelFocused': { color: purple },
  },
  palette: {
    primary: purple,
  },
  typography: { useNextVariants: true },
});

// eslint-disable-next-line
const useStyles = makeStyles((themes) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      margin: '8px',
      fontFamily: 'Cairo',
    },

  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'transparent',
    maxWidth: '150px',
    maxHeight: '150px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#9f6cb7',
    borderRadius: '15px',
  },
  cairo: {
    fontFamily: 'Cairo',
  },
}));

// Pseudostate
let signupObj = {

};

const writeToObj = (event) => {
  signupObj[event.target.name] = event.target.value;
};

function SignUp({ dispatch }) {
  const classes = useStyles();
  const history = useHistory();
  // Submit
  const handleClick = (e) => {
    e.preventDefault();
    // Check auth
    axios.post('/db/signup', {
      data: signupObj,
    }).then((res) => {
      signupObj = {};
      if (res.data.userName) {
        // Update state with response data
        // UserIsLoggedIn = true
        dispatch(loginAction());
        dispatch(userToState(res.data));
        history.push('/dashboard');
      } else {
        alert('Username already exists, try another');
      }
    });
    // Write data to the database
  };
  return (
    <>
      <Headerbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            className={classes.avatar}
            src="https://elasticbeanstalk-us-east-2-603157185647.s3.us-east-2.amazonaws.com/Selous.png"
            alt="Selous Logo"
          />
          <Typography component="h1" variant="h5" className={classes.cairo}>
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <MuiThemeProvider theme={theme}>
                  <TextField
                    // className={classes.input}
                    autoComplete="fname"
                    name="firstName"
                    variant="filled"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    onChange={(e) => writeToObj(e)}
                    autoFocus
                  />
                </MuiThemeProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={(e) => writeToObj(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => writeToObj(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onChange={(e) => writeToObj(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  name="zipcode"
                  label="Zipcode"
                  id="zipcode"
                  autoComplete="zipcode"
                  onChange={(e) => writeToObj(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => writeToObj(e)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // onClick={dispatch(saveUser())}
              onClick={(e) => handleClick(e)}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5} />
      </Container>
      <Footer />
    </>
  );
}

export default connect()(SignUp);
