import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import axios from 'axios';


const theme2 = createMuiTheme({
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
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
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
  input: {
  },
}));
//    Redux Action
// const actionLogin = (userName) => ({
//   type: 'USER_LOGIN',
//   payload: {
//     user: userName,
//   }
// });

//      Redux Reducer
// const loginReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'USER_LOGIN':
//       return action.payload.user;
//     default:
//       return state;
//   }
// };

const loginObj = {

};

const writeToLogin = (event) => {
  loginObj[event.target.name] = event.target.value;
};

const handleLogin = (e) => {
  e.preventDefault();
  axios.post('/login', {
    userName: loginObj.username,
    password: loginObj.password,
  // If correct, pull data from DB for user
  }).then((response) => {
    // Check auth
    if (response) {
      // Update state with response data
      console.log(response);
    } else {
      console.log('invalid login');
    }
  });
};

function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img
          className={classes.avatar}
          src="https://elasticbeanstalk-us-east-2-603157185647.s3.us-east-2.amazonaws.com/Selous.png"
          alt="Selous Logo"
        />
        <Typography component="h1" variant="h5">
          Sign in
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
            onClick={(e) => handleLogin(e)}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              <Link href="/SignUp" variant="body2">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8} />
    </Container>
  );
}

// export default connect(null, mapDispatchToProps)(SignIn)
export default SignIn;
