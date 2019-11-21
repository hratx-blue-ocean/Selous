import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { loginAction, landingAction, resetUserAction, showAboutAction } from '../../../redux/actions/actions.js';

const ITEM_HEIGHT = 48;

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 50,
    height: 40,
    color: 'white',
  },
  space: {
    marginLeft: '21%',
  },
});

const mapStateToProps = (state) => ({ show: state.isLoggedIn });

function Menud({ dispatch }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAbout = () => {
    setAnchorEl(null);
    dispatch(showAboutAction());
  };

  const handleLog = () => {
    setAnchorEl(null);
    dispatch(landingAction());
    dispatch(loginAction());
    dispatch(resetUserAction());
  };

  return (
    <>
      <IconButton
        className={classes.space}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon className={classes.bigAvatar} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/dashboard"
        >
            My Dashboard
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/jobs"
        >
            Job Search
        </MenuItem>
        <MenuItem
          onClick={handleCloseAbout}
        >
            About
        </MenuItem>
        <MenuItem
          onClick={handleLog}
          component={Link}
          to="/"
        >
            Log Out
        </MenuItem>
      </Menu>
    </>
  );
}

export default connect(mapStateToProps)(Menud);
