import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: { useNextVariants: true },
});

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
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
    backgroundColor: theme.palette.secondary.main,
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
    // '&.MuiInput-underline.Mui-focused:after':{
    //   borderBottom:'2px #9f6cb7 solid',
    //   fontSize:'50px'
    // },
    backgroundColor: 'lightgrey',
    // '&.Mui-focused':{
    //   backgroundColor:'green',
    //   color:'#9f6cb7'
    // },


  },
}));
const signupObj = {

};

const writeToObj = (event) => {
  signupObj[event.target.name] = event.target.value;
};

const handleClick = (e) => {
  e.preventDefault();
  if (signupObj.password === signupObj.passwordConfirm) {
    // Write data to the database
  }
};

function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MuiThemeProvider theme={theme}>
                <TextField
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
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => writeToObj(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="confirm-password"
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
              <Link href="/Login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5} />
    </Container>
  );
}

// export default connect(null, mapDispatchToProps)(SignUp)
export default SignUp;
