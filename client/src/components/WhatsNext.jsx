import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  Fab,
  Box,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

const useStyles = makeStyles({
  root: {
    padding: 10,
    width: '549px',
    height: '351px',
    borderRadius: '8px',
    fontFamily: 'Arial',
    fontSize: '18px',
    background: '#F2F2F2',
    border: 2,
    borderColor: '#9F6CB7',
    borderStyle: 'solid',
  },
  notes: {
    borderRadius: '8px',
    padding: 10,
    width: '447px',
    height: '100px', //'293px'
    borderWidth: 1,
    borderColor: 'purple',
    borderStyle: 'solid',
  },
  do: {
    color: 'green',
    fontSize: 34, //54
  },
  doNot: {
    color: 'red',
    fontSize: 54, //54
    margin: 1,
  },
});

export default function WhatsNext() {
  const classes = useStyles();

  return (
    <Card container className={classes.root} direction="row" justify="space-between">
      <Typography>
        Notes
      </Typography>
      <Card item className={classes.notes} justifyItem="left" alignItems="flex-end">
        <Typography>
            THIS INFO SHOULD COME FROM THE DATABASE
        </Typography>
          <Box>
            <Fab item className={classes.doNot} flexDirection="column" display="flex" alignItems="flex-end">
              <NotInterestedIcon />
            </Fab>
            <Fab item>
              <CheckCircleIcon className={classes.do} flexDirection="column" display="flex" alignItems="flex-end"/>
            </Fab>
          </Box>
      </Card>
    </Card>
  );
}
