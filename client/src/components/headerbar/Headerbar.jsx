import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';
import { landingAction } from '../../redux/actions/actions.js';
import Menu from './menu/Menu.jsx';

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
    marginLeft: '15%',
  },
  title: {
    marginLeft: '2%',
    flexGrow: 1,
    fontSize: 42,
    fontFamily: [
      'Cairo',
    ].join(','),
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
    fontFamily: '"Roboto","Helvetica","Arial", sans-serif',
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
});

function Headerbar({
  show, tell, user, dispatch,
}) {
  const classes = useStyles();
  const handleDir = () => {
    if (show) {
      dispatch(landingAction());
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <img src="https://selious.s3.amazonaws.com/selousSplice.PNG" alt="selious" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Selous
          </Typography>
          {tell ? <Menu />
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
                <Button color="inherit" onClick={handleDir} component={Link} to="/login">Login</Button>
              </>
            )
        }
        </Toolbar>
      </AppBar>
      <div className={classes.break}>
        <Typography className={classes.hello}>
          { user.firstName && !tell ? `Hello ${user.firstName}!` : null }
        </Typography>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Headerbar);
