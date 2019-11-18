import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar, Toolbar, Typography, Button, ButtonGroup,
} from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
// import RoomIcon from '@material-ui/icons/Room';

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
  signup: {
    marginRight: '3%',
  },
  break: {
    maxWidth: 1240,
    marginTop: 20,
    borderTop: '1px solid darkgrey',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 40,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.common.white,
    // opacity: 0.15,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '150px',
    },
  },
  searchIcon: {
    width: theme.spacing(4),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'lightgrey',
  },
  inputRoot: {
    color: 'inherent',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 4),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 100,
    },
  },
  button: {
    margin: theme.spacing(0),
  },
  leftGroup: {
    float: 'left',
    display: 'flex',
  },
  rightGroup: {
    float: 'right',
    display: 'flex',
  },
  hello: {
    fontFamily: '"Roboto","Helvetica","Arial", sans-serif',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '0.875rem',
    minWidth: '64px',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
    margin: theme.spacing(1.1),
  },
}));

export default function Headerbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <img src="https://selious.s3.amazonaws.com/selousSplice.PNG" alt="selious" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Selous
          </Typography>
          <Button color="inherit" className={classes.signup} component={Link} to="/signup">Signup</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          {/* <Button color="inherit">Logout</Button> */}
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Jobs…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <RoomIcon />
            </div>
            <InputBase
              placeholder="Location…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button color="inherit">Logout</Button> */}
        </Toolbar>
      </AppBar>
      <div className={classes.break}>
        <div className={classes.leftGroup}>
          <ButtonGroup>
            <Button
              className={classes.button}
              variant="text"
              component={Link}
              to="/home"
            >
              Home
            </Button>
            {/* <Button variant='text' href='#' className={classes.button}>
                Search
            </Button> */}
            <Button
              className={classes.button}
              variant="text"
              component={Link}
              to="/dashboard"
            >
              Dashboard
            </Button>
          </ButtonGroup>
        </div>
        <div className={classes.rightGroup}>
          <ButtonGroup>
            <Button
              className={classes.button}
              variant="text"
              component={Link}
              to="/details"
            >
              About
            </Button>
            <Typography className={classes.hello}>
              Hello Mario!
              {/* needs state name */}
            </Typography>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
