import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
  logo: {
    margin: 10,
  },
});

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Avatar className={classes.logo}>
        <AssignmentIcon />
      </Avatar>
      <Typography variant="h5" component="search_Position">
        Senior Software Devlopment Engineer
      </Typography>
      <Typography component="search_Company">
        Whole Foods Market
      </Typography>
      <Typography component="search_Location">
        Austin, TX
      </Typography>
    </Paper>
  );
}
