import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Card,
  Button,
  Typography,
  Grid,
} from '@material-ui/core/';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { combineReducers } from 'redux';

const useStyles = makeStyles({
  root: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderStyle: 'solid',
    boxShadow: 3,
    '&:hover': {
      background: 'purple',
    },
    textTransform: 'none',
    textAlign: 'left',
  },
  logo: {
    margin: 10,

  },
  search_daysAgo: {
    margin: 10,
    alignItems: 'flex-end',
  },
});

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Button>
      <Card className={classes.root} onClick={() => { console.log('joel sucks'); }}>
        <Grid container item wrap="wrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.logo}>
              <AssignmentIcon />
            </Avatar>
          </Grid>
          <Grid container item xs direction="column" textAlign="left">
            <Typography variant="h5" component="search_Position">
              Senior Software Development Engineer
            </Typography>
            <Typography component="search_company">
              Whole Foods Market
            </Typography>
            <Typography component="search_location">
              Austin, TX
            </Typography>
          </Grid>
          <Grid container item xs={3} justifyContent="center" alignContent="flex-end">
            <Typography component="search_daysAgo">
              30+ days ago
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Button>
  );
}
