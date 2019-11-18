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
import { connect } from 'react-redux';
import JobPostingModal from '../Modals/JobPostingModal/JobPostingModal.jsx';
import addJobAction from '../../redux/actions/addJobAction';

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
  mainContainer: {
    width: '100%',
  },
  text: {
    width: '800px',
  },
});

const mapStateToProps = (state) => ({ show: state.addJobModal });

function PaperSheet({ dispatch }) {
  const classes = useStyles();

  return (
    <>
      <JobPostingModal />
      <Button>
        <Card className={classes.root} onClick={() => dispatch(addJobAction())}>
          <Grid container item wrap="wrap" spacing={2} className={classes.mainContainer}>
            <Grid item alignItems="center">
              <Avatar className={classes.logo}>
                <AssignmentIcon />
              </Avatar>
            </Grid>
            <Grid container item xs direction="column" textAlign="left" className={classes.text}>
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
            <Grid container item xs={3} display="flex" alignItems="flex-end">
              <Typography component="search_daysAgo">
                30+ days ago
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Button>
    </>
  );
}

export default connect(mapStateToProps)(PaperSheet);
