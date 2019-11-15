import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import { Fade } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  app: {
    background: "#9f6cb7",
    overflow: "hidden",
    maxWidth: 1140,
    minHeight: 72,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo: {
    overflow: "hidden",
    marginLeft: "15%",
  },
  title: {
    marginLeft: "2%",
    flexGrow: 1,
    fontSize: 42,
    fontFamily: [
      'Verdana',
    ].join(','),
  },
  signup: {
      marginRight: "3%",
  },
  break: {
      maxWidth: 1240,
      marginTop: 20,
      height: .5,
      color: "black",
      background: "black",
      opacity: .5,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.common.white,
     '&$focused': {
            color: 'red',
        },
    focused: {},
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
}));

export default function Headerbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
            <img src="https://selious.s3.amazonaws.com/selousSplice.PNG" alt="selious" className={classes.logo}/>
          <Typography variant="h6" className={classes.title}>
            Selous
          </Typography>
          {/* <Button color="inherit" className={classes.signup}>Signup</Button>
          <Button color="inherit">Login</Button> */}
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
      <hr className={classes.break}></hr>
    </div>
  );
}
