import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Typography,
  Fab,
  Box,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    width: '790px',
    height: '300px',
    borderRadius: '8px',
    fontFamily: 'Arial',
    fontSize: '18px',
    background: '#F2F2F2',
    border: 2,
    borderColor: '#9F6CB7',
    borderStyle: 'solid',
  },
  root: {
    padding: 10,
    width: '549px',
    height: '400px',
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
    width: '350px',
    height: '250px',
    borderWidth: 1,
    borderColor: 'purple',
    borderStyle: 'solid',
    boxShadow: 5,
  },
  next: {
    borderRadius: '8px',
    padding: 10,
    background: '#FFFFFF',
    width: '300px',
    borderWidth: 1,
    marginRight: 25,
    marginBottom: 20,
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
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginLeft: 10,
  },
  fabStuff: {
    size: 'small',
    marginTop: 5,
  },
  buttonBoi: {
    borderRadius: 40,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  notesContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function AddJobModal() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.notesContainer}>
        <div>
          <Typography>
            Company
          </Typography>
          <input type="text" className={classes.next} />
        </div>
        <div>
          <Typography>
            Roll / Position
          </Typography>
          <input type="text" className={classes.next} />
        </div>
        <div>
          <Typography>
            Contact
          </Typography>
          <input type="text" className={classes.next} />
        </div>
        <div>
          <Typography>
            Contact E-mail
          </Typography>
          <input type="text" className={classes.next} />
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.notesContainer}>
          <Typography>
            Job Details / Notes
          </Typography>
          <textarea className={classes.notes} />
        </div>
        <Box className={classes.buttons} flexDirection="column" display="flex" alignItems="flex-end">
          <Fab className={classes.buttonBoi}>
            <AddCircleIcon className={classes.doNot} />
          </Fab>
          <Fab className={classes.fabStuff}>
            <CheckCircleIcon className={classes.do} />
          </Fab>
        </Box>
      </div>
    </div>
  );
}
