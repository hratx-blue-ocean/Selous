import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderStyle: 'solid',
    boxShadow: 3,
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
    <Card className={classes.root} boxShadow={3} onClick={() => { console.log('joel sucks'); }}>
      <Grid container wrap="wrap" spacing={2}>
        <Grid item>
          <Avatar className={classes.logo}>
            <AssignmentIcon />
          </Avatar>
        </Grid>
        <Grid item xs container direction="column">
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
        <Grid container item xs={2} justifyContent="center" alignContent="flex-end">
          <Typography component="search_daysAgo">
            30+ days ago
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
