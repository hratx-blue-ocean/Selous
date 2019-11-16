import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Button,
  Typography,
} from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

import { combineReducers } from 'redux';

const useStyles = makeStyles({
  root: {
    borderColor: 'purple',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '515px',
    background: '#F2F2F2',
  },
  next: {
    borderRadius: '8px',
    padding: 10,
    background: '#FFFFFF',
    width: '445px',
    border: 'none',
  },
});

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Card container className={classes.root}>
        <Button item m={2}>
          <SearchIcon style={{
            position: 'start',
          }}
          />
        </Button>
        <input item type="search" className={classes.next} alignContent="flex-start" position="absolute" />
      </Card>

      <Card container className={classes.root} position="absolute">
        <Button item m={2}>
          <RoomOutlinedIcon style={{
            position: 'start',
          }}
          />
        </Button>
        <input item type="search" className={classes.next} alignContent="flex-start" position="absolute" />
      </Card>

      <img src="/learning.jpg" alt="Learning" />
    </div>
  );
}
