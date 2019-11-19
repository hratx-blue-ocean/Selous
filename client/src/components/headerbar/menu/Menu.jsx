import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const options = [
  'My Dashboard',
  'Job Search',
  'About',
  'Log Out',
];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 50,
    height: 40,
  },
});

export default function Menud() {
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
    <div>
      <IconButton
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircleIcon className={classes.bigAvatar} />
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
          onClick={handleClose}
          component={Link}
          to="/details"
        >
            About
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/"
        >
            Log Out
        </MenuItem>
      </Menu>
    </div>
  );
}
