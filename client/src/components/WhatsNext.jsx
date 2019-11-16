import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  Fab,
  Box,
  Button,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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
    background: '#FFFFFF',
    width: '447px',
    height: '293px',
    borderWidth: 1,
    borderColor: 'purple',
    borderStyle: 'solid',
    boxShadow: 5,
  },
  do: {
    color: '#69B92A',
    fontSize: 54,
    stroke: 'black',
    strokeWidth: '.5px',
  },
  doNot: {
    color: '#DB5C5C',
    fontSize: 54,
    transform: 'rotate(45deg)',
    stroke: 'black',
    strokeWidth: '.5px',
  },
  buttons: {
    marginRight: 6,
    float: 'right',
    marginTop: '35%',
  },
  fabStuff: {
    size: 'small',
    marginTop: 5,
  },
  buttonBoi: {
    borderRadius: 40,
  },
});

export default function WhatsNext() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>
        Notes
      </Typography>

      <Box className={classes.buttons} flexDirection="column" display="flex" alignItems="flex-end">
        <Fab className={classes.buttonBoi}>
          <AddCircleIcon className={classes.doNot} />
        </Fab>
        <Fab className={classes.fabStuff}>
          <CheckCircleIcon className={classes.do} />
        </Fab>
      </Box>

      <Box className={classes.notes} boxShadow={3}>

        <Typography>
            THIS INFO SHOULD COME FROM THE DATABASE
        </Typography>

      </Box>
    </Box>
  );
}
