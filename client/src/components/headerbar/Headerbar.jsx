/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';
import { landingAction, sizeWindowAction } from '../../redux/actions/actions.js';
import Menu from './menu/Menu.jsx';
import Mobile from './menu/MobileMenu.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  app: {
    background: '#9f6cb7',
    overflow: 'hidden',
    maxWidth: 1140,
    minHeight: 72,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '8px',
  },
  logo: {
    overflow: 'hidden',
    marginLeft: '28%',
  },
  title: {
    color: 'white',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
    maxWidth: '200px',
    maxHeight: '71px',
    marginLeft: '2%',
    flexGrow: 1,
    fontSize: 42,
    fontFamily: [
      'Cairo',
    ].join(','),
  },
  signup: {
    float: 'right',
    marginLeft: '28%',
    fontFamily: 'Cairo',
  },
  login: {
    fontFamily: 'Cairo',
  },
  break: {
    maxWidth: 1240,
    marginTop: 20,
    borderTop: '1px solid darkgrey',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 40,
  },
  button: {
    margin: theme.spacing(0),
  },
  hello: {
    fontFamily: 'Cairo',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '1rem',
    minWidth: '64px',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
    margin: theme.spacing(1.1),
    float: 'right',
    paddingRight: '40px',
  },
}));

const mapStateToProps = (state) => ({
  show: state.haveLanding,
  tell: state.isLoggedIn,
  user: state.userData,
  windowz: state.win,
});

function Headerbar({
  show, tell, user, dispatch, windowz,
}) {
  const classes = useStyles();
  const handleDir = () => {
    if (show) {
      dispatch(landingAction());
    }
  };

  window.addEventListener('resize', () => {
    dispatch(sizeWindowAction(window.innerWidth));
  });

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <img src="https://selious.s3.amazonaws.com/selousSplice.PNG" alt="selous" className={classes.logo} />
          <Button
            component={Link}
            to={user.userName ? '/dashboard' : '/'}
            disableRipple="true"
            variant="h6"
            className={classes.title}
          >
            Selous
          </Button>
          {tell ? <Menu />
            : windowz < 500 ? <Mobile />
              : (
                <>
                  <Button
                    color="inherit"
                    onClick={handleDir}
                    className={classes.signup}
                    component={Link}
                    to="/signup"
                  >
                    Signup
                  </Button>
                  <Button
                    color="inherit"
                    onClick={handleDir}
                    className={classes.login}
                    component={Link}
                    to="/login"
                  >
                    Login
                  </Button>
                </>
              )
        }
        </Toolbar>
      </AppBar>
      <div className={classes.break}>
        <Typography className={classes.hello}>
          { tell ? `Hello ${user.firstName}!` : null }
        </Typography>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Headerbar);
