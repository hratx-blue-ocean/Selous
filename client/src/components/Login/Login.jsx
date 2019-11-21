import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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

const theme2 = createMuiTheme({
  formLabelRoot: {
    '&$formLabelFocused': { color: purple },
  },
  palette: {
    primary: purple,
  },

  typography: { useNextVariants: true },
});

const useStyles = makeStyles((theme) => ({

  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      margin: '8px',
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
}));
const loginObj = {};

const writeToLogin = (event) => {
  loginObj[event.target.name] = event.target.value;
};

const mapStateToProps = (state) => ({ show: state.isLoggedIn });

function SignIn({ dispatch }) {
  const classes = useStyles();
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    // Check auth
    axios.post('/db/login', {
      data: loginObj,
    }).then((response) => {
      if (response.data.userName) {
        dispatch(loginAction());
        dispatch(userToState(response.data));
        history.push('/dashboard');
      } else {
        alert('Invalid Login');
      }
    }).catch((err) => { console.log(err); });
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
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form} noValidate>
            <MuiThemeProvider theme={theme2} />
            <TextField
              variant="filled"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => writeToLogin(e)}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => writeToLogin(e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" />}
              label="Remember me"
            />
            <Button
              onClick={handleLogin}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup" variant="body2">
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8} />
      </Container>
      <Footer />
    </>
  );
}

export default connect(mapStateToProps)(SignIn);
