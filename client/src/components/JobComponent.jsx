import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';

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
    <Card className={classes.root}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar className={classes.logo}>
            <AssignmentIcon />
          </Avatar>
        </Grid>
        <Grid item xs container direction="column">
          <Typography variant="h5" component="search_Position">
            Senior Software Development Engineer
          </Typography>
          <Typography component="search_Company">
            Whole Foods Market
          </Typography>
          <Typography component="search_Location">
            Austin, TX
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}