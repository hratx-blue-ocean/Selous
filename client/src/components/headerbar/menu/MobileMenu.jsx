import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

function MenuMob() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          to="/signup"
        >
            SIGNUP
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/login"
        >
            LOGIN
        </MenuItem>
      </Menu>
    </>
  );
}

export default connect(mapStateToProps)(MenuMob);
